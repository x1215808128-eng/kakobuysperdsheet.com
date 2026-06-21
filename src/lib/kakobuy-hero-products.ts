import type { HeroQCImage } from "@/lib/hero-qc";
import {
  getCuratedDailyHero,
  HERO_QC_DYNAMIC_ORDER,
  type HeroQcCategoryKey,
} from "@/lib/kakobuy-hero-images";
import {
  resolveHeroProductHref,
  resolveHeroStrip,
} from "@/lib/resolve-hero-product-href";

const LEGACY_PLACEHOLDER_PATTERNS: Record<HeroQcCategoryKey, string[]> = {
  shoes: ["unsplash.com/photo-1542291026"],
  bottoms: ["/qc/pants-shorts.jpg"],
  accessories: ["unsplash.com/photo-1523275335684"],
  outerwear: ["contact-customer-service"],
  bags: ["unsplash.com/photo-1553062407"],
};

export function getDailyCategoryHeroImage(
  category: HeroQcCategoryKey,
): HeroQCImage {
  return getCuratedDailyHero(category);
}

export function getDailyCategoryHeroForClient(
  category: HeroQcCategoryKey,
): HeroQCImage {
  const hero = getDailyCategoryHeroImage(category);
  const separator = hero.src.includes("?") ? "&" : "?";

  return {
    ...hero,
    src: `${hero.src}${separator}t=${Date.now()}`,
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
  return resolveHeroStrip(
    HERO_QC_DYNAMIC_ORDER.map((key) => getCuratedDailyHero(key)),
  );
}

export function getDailyHeroQcStrip(): HeroQCImage[] {
  return buildCuratedHeroQcStrip();
}

export function getDailyHeroQcStripForClient(): HeroQCImage[] {
  return HERO_QC_DYNAMIC_ORDER.map((key) => getDailyCategoryHeroForClient(key));
}

export function attachProductDetailHrefSync(hero: HeroQCImage): HeroQCImage {
  const href = resolveHeroProductHref(hero.src, hero.href);
  return href === hero.href ? hero : { ...hero, href };
}
