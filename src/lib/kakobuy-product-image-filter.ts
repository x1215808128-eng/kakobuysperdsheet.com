/** Reject size-chart composites; hero carousel uses seller shots only (no text/watermark overlays). */
const MIN_DIMENSION = 700;
const MIN_ASPECT_RATIO = 0.85;
const MAX_ASPECT_RATIO = 1.15;
const SELLER_SQUARE_MIN = 0.92;
const SELLER_SQUARE_MAX = 1.08;

const GEILICDN_SIZE_PATTERN = /_(\d+)_(\d+)\.jpg$/i;
const SELLER_LISTING_PATTERN = /\/(pcitem|wdseller)/i;

/** Curated square open* shots when no pcitem listing image exists on KakobuyPlus. */
const HERO_OPEN_IMAGE_WHITELIST = new Set([
  "https://si.geilicdn.com/open1846508083-1234478995-65af0000019b1222d0270a8115c2_1440_1440.jpg",
]);

export function parseGeilicdnDimensions(url: string): { width: number; height: number } | null {
  const path = url.split("?")[0];
  const match = path.match(GEILICDN_SIZE_PATTERN);
  if (!match) return null;

  const width = Number.parseInt(match[1], 10);
  const height = Number.parseInt(match[2], 10);
  if (!width || !height) return null;

  return { width, height };
}

function isSellerSquareShot(dimensions: { width: number; height: number }): boolean {
  const aspectRatio = dimensions.width / dimensions.height;
  return (
    dimensions.width >= MIN_DIMENSION &&
    dimensions.height >= MIN_DIMENSION &&
    aspectRatio >= SELLER_SQUARE_MIN &&
    aspectRatio <= SELLER_SQUARE_MAX
  );
}

export function isProductFocusedImageUrl(url: string): boolean {
  const path = url.split("?")[0];
  if (!path.includes("si.geilicdn.com")) return false;
  if (path.includes("unadjust")) return false;
  if (!path.endsWith(".jpg")) return false;

  const dimensions = parseGeilicdnDimensions(path);
  if (!dimensions) return false;

  const { width, height } = dimensions;
  if (width < MIN_DIMENSION || height < MIN_DIMENSION) return false;

  const aspectRatio = width / height;
  return aspectRatio >= MIN_ASPECT_RATIO && aspectRatio <= MAX_ASPECT_RATIO;
}

/**
 * Seller listing photos (pcitem/wdseller) — avoids open* marketing images with
 * Chinese/English watermarks and promo text overlays.
 */
export function isCleanListingImageUrl(url: string): boolean {
  const path = url.split("?")[0];
  if (HERO_OPEN_IMAGE_WHITELIST.has(path)) return true;
  if (!SELLER_LISTING_PATTERN.test(path)) return false;

  const dimensions = parseGeilicdnDimensions(path);
  if (!dimensions) return false;

  return isSellerSquareShot(dimensions);
}

export function filterProductFocusedImageUrls(urls: string[]): string[] {
  const seen = new Set<string>();

  return urls.filter((url) => {
    const key = url.split("?")[0];
    if (seen.has(key)) return false;
    if (!isProductFocusedImageUrl(url)) return false;
    seen.add(key);
    return true;
  });
}

/** Hero QC strip — seller shots only, no open* fallback. */
export function filterHeroCarouselImageUrls(urls: string[]): string[] {
  const seen = new Set<string>();

  return urls.filter((url) => {
    const key = url.split("?")[0];
    if (seen.has(key)) return false;
    if (!isCleanListingImageUrl(url)) return false;
    seen.add(key);
    return true;
  });
}
