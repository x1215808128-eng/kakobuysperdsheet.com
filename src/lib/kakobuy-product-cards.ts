import type { HeroQcCategoryKey } from "@/lib/kakobuy-hero-images";
import { filterHeroCarouselImageUrls } from "@/lib/kakobuy-product-image-filter";
import { pickSummerPreferredImageUrls } from "@/lib/kakobuy-summer-hero-filter";
import { geilicdnImageId, normalizeGeilicdnUrl } from "@/lib/geilicdn";

export const KAKOBUYPLUS_SITE = "https://www.kakobuyplus.com";

export type KakobuyProductCard = {
  imageUrl: string;
  productHref: string;
};

const SUMMER_FILTER_CATEGORIES: HeroQcCategoryKey[] = ["bottoms", "outerwear"];

const PRODUCT_LINK_PATTERN =
  /href="(\/en\/products\/[a-z0-9-]+-[a-z0-9]+)\?from=([^"]+)"/g;

export function extractProductCardsFromHtml(html: string): KakobuyProductCard[] {
  const cards: KakobuyProductCard[] = [];
  const seen = new Set<string>();

  for (const match of html.matchAll(PRODUCT_LINK_PATTERN)) {
    const path = match[1];
    const fromParam = match[2];
    const productHref = `${KAKOBUYPLUS_SITE}${path}?from=${fromParam}`;
    const snippet = html.slice(
      match.index ?? 0,
      Math.min(html.length, (match.index ?? 0) + 3000),
    );
    const imageMatch = snippet.match(/https:\/\/si\.geilicdn\.com\/[^"'\\s<>?]+/);
    if (!imageMatch) continue;

    const imageUrl = imageMatch[0].split("?")[0];
    const dedupeKey = `${path}|${normalizeGeilicdnUrl(imageUrl)}`;
    if (seen.has(dedupeKey)) continue;
    seen.add(dedupeKey);

    cards.push({ imageUrl, productHref });
  }

  return cards;
}

export function pickProductCardsFromHtml(
  html: string,
  category: HeroQcCategoryKey,
): KakobuyProductCard[] {
  const rawCards = extractProductCardsFromHtml(html);
  if (rawCards.length === 0) return [];

  const filteredUrls = filterHeroCarouselImageUrls(
    rawCards.map((card) => card.imageUrl),
  );
  const preferredUrls = SUMMER_FILTER_CATEGORIES.includes(category)
    ? pickSummerPreferredImageUrls(html, filteredUrls)
    : filteredUrls;

  const cardByImage = new Map(
    rawCards.map((card) => [normalizeGeilicdnUrl(card.imageUrl), card]),
  );

  return preferredUrls
    .map((url) => cardByImage.get(normalizeGeilicdnUrl(url)))
    .filter((card): card is KakobuyProductCard => !!card);
}

export function findProductHrefForImage(
  cards: KakobuyProductCard[],
  imageUrl: string,
): string | undefined {
  const target = normalizeGeilicdnUrl(imageUrl);
  const targetId = geilicdnImageId(imageUrl);

  const exact = cards.find(
    (card) => normalizeGeilicdnUrl(card.imageUrl) === target,
  );
  if (exact) return exact.productHref;

  return cards.find((card) => geilicdnImageId(card.imageUrl) === targetId)
    ?.productHref;
}
