import heroImageProductHrefs from "@/lib/hero-image-product-hrefs.json";
import { geilicdnImageId, normalizeGeilicdnUrl } from "@/lib/geilicdn";
import type { HeroQCImage } from "@/lib/hero-qc";

const STATIC_HERO_PRODUCT_HREFS = heroImageProductHrefs as Record<string, string>;
const STATIC_HERO_PRODUCT_HREFS_BY_ID = new Map<string, string>();

for (const [key, href] of Object.entries(STATIC_HERO_PRODUCT_HREFS)) {
  const imageId = geilicdnImageId(key);
  if (!STATIC_HERO_PRODUCT_HREFS_BY_ID.has(imageId)) {
    STATIC_HERO_PRODUCT_HREFS_BY_ID.set(imageId, href);
  }
}

export function isKakobuyProductDetailHref(href: string): boolean {
  return (
    /\/en\/products\/[a-z0-9-]+-[a-z0-9]+/.test(href) &&
    !href.includes("categories=")
  );
}

export function lookupStaticHeroProductHref(imageUrl: string): string | undefined {
  const key = normalizeGeilicdnUrl(imageUrl);
  return (
    STATIC_HERO_PRODUCT_HREFS[key] ??
    STATIC_HERO_PRODUCT_HREFS_BY_ID.get(geilicdnImageId(imageUrl))
  );
}

export function resolveHeroProductHref(
  imageUrl: string,
  fallbackHref: string,
): string {
  const staticHref = lookupStaticHeroProductHref(imageUrl);
  if (staticHref) return staticHref;

  if (isKakobuyProductDetailHref(fallbackHref)) {
    return fallbackHref;
  }

  return fallbackHref;
}

export function resolveHeroStripItem(item: HeroQCImage): HeroQCImage {
  const href = resolveHeroProductHref(item.src, item.href);
  return href === item.href ? item : { ...item, href };
}

export function resolveHeroStrip(strip: HeroQCImage[]): HeroQCImage[] {
  return strip.map((item) => resolveHeroStripItem(item));
}
