import { HERO_QC_CONTACT, type HeroQCImage } from "@/lib/hero-qc";
import {
  buildCategoryHeroImage,
  getChinaDateKey,
  getCuratedDailyHero,
  HERO_QC_CATEGORY_CONFIG,
  HERO_QC_DYNAMIC_ORDER,
  type HeroQcCategoryKey,
  toHeroProductImageUrl,
} from "@/lib/kakobuy-hero-images";
import { filterHeroCarouselImageUrls } from "@/lib/kakobuy-product-image-filter";
import { pickSummerPreferredImageUrls } from "@/lib/kakobuy-summer-hero-filter";

const PRODUCTS_BASE = "https://www.kakobuyplus.com/en/products?categories=";

const LEGACY_PLACEHOLDER_PATTERNS: Record<HeroQcCategoryKey, string[]> = {
  shoes: ["unsplash.com/photo-1542291026"],
  bottoms: ["/qc/pants-shorts.jpg"],
  accessories: ["unsplash.com/photo-1523275335684"],
  outerwear: ["contact-customer-service"],
  bags: ["unsplash.com/photo-1553062407"],
};

const SUMMER_FILTER_CATEGORIES: HeroQcCategoryKey[] = ["bottoms", "outerwear"];

function buildCategoryProductsUrl(category: HeroQcCategoryKey, page: number): string {
  const config = HERO_QC_CATEGORY_CONFIG[category];
  const season = config.listingSeason
    ? `&seasons=${config.listingSeason}`
    : "";
  return `${PRODUCTS_BASE}${config.spreadsheetCategory}${season}&page=${page}`;
}

function pickProductUrlsFromHtml(
  html: string,
  category: HeroQcCategoryKey,
): string[] {
  const raw = (html.match(/https:\/\/si\.geilicdn\.com\/[^"'\\s<>]+/g) ?? [])
    .map((url) => url.split('"')[0].split("'")[0].split("?")[0]);

  const filtered = filterHeroCarouselImageUrls(raw);

  if (SUMMER_FILTER_CATEGORIES.includes(category)) {
    return pickSummerPreferredImageUrls(html, filtered);
  }

  return filtered;
}

async function fetchLiveCategoryUrls(
  category: HeroQcCategoryKey,
  page: number,
): Promise<string[]> {
  const response = await fetch(buildCategoryProductsUrl(category, page), {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml",
      "Accept-Language": "en-US,en;q=0.9",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`KakobuyPlus ${category} fetch failed: ${response.status}`);
  }

  const html = await response.text();
  return pickProductUrlsFromHtml(html, category);
}

function getCategoryListingPage(
  category: HeroQcCategoryKey,
  dayNum: number,
): number {
  const config = HERO_QC_CATEGORY_CONFIG[category];
  if (config.listingPage) return config.listingPage;
  return ((dayNum + config.dayOffset) % 8) + 1;
}

async function fetchLiveCategoryHero(
  category: HeroQcCategoryKey,
): Promise<HeroQCImage | null> {
  const dayNum = Number.parseInt(getChinaDateKey().replace(/-/g, ""), 10);
  const config = HERO_QC_CATEGORY_CONFIG[category];
  const startPage = getCategoryListingPage(category, dayNum);
  const pageAttempts = config.listingPage || config.listingSeason ? 2 : 4;

  for (let attempt = 0; attempt < pageAttempts; attempt++) {
    try {
      const urls = await fetchLiveCategoryUrls(category, startPage + attempt);
      if (urls.length === 0) continue;
      const index = (dayNum + config.dayOffset) % urls.length;
      return buildCategoryHeroImage(category, urls[index]);
    } catch {
      // try next page
    }
  }

  return null;
}

export async function getDailyCategoryHeroImage(
  category: HeroQcCategoryKey,
): Promise<HeroQCImage> {
  const live = await fetchLiveCategoryHero(category);
  if (live) return live;

  return getCuratedDailyHero(category);
}

export async function getDailyCategoryHeroForClient(
  category: HeroQcCategoryKey,
): Promise<HeroQCImage> {
  const hero = getCuratedDailyHero(category);

  return {
    ...hero,
    src: `${toHeroProductImageUrl(hero.src)}&t=${Date.now()}`,
  };
}

export function isLegacyPlaceholder(src: string, category: HeroQcCategoryKey): boolean {
  return LEGACY_PLACEHOLDER_PATTERNS[category].some((pattern) =>
    src.includes(pattern),
  );
}

export function isKakobuyProductImage(src: string): boolean {
  return src.includes("geilicdn.com");
}

export function buildCuratedHeroQcStrip(): HeroQCImage[] {
  const dynamic = HERO_QC_DYNAMIC_ORDER.map((key) => getCuratedDailyHero(key));
  return [...dynamic.slice(0, 3), HERO_QC_CONTACT, ...dynamic.slice(3)];
}

export async function getDailyHeroQcStripForClient(): Promise<HeroQCImage[]> {
  return Promise.all(
    HERO_QC_DYNAMIC_ORDER.map((key) => getDailyCategoryHeroForClient(key)),
  );
}
