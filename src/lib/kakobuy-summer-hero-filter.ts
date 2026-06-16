/** Prefer summer styles; drop obvious winter/heavy knit listings when parsing HTML. */
const SUMMER_TITLE_KEYWORDS = [
  "short",
  "shorts",
  "swim",
  "bermuda",
  "linen",
  "lightweight",
  "windbreaker",
  "wind breaker",
  "mesh",
  "cargo short",
  "drawstring short",
  "track short",
  "board short",
  "summer",
  "linen",
  "shell",
  "anorak",
  "vest",
  "light jacket",
  "track jacket",
  "bomber",
  "tee jacket",
  "sun",
  "beach",
] as const;

const WINTER_TITLE_KEYWORDS = [
  "puffer",
  "down jacket",
  "down coat",
  "wool",
  "fleece",
  "parka",
  "overcoat",
  "cardigan",
  "sweater",
  "knit",
  "fur",
  "shearling",
  "winter",
  "thermal",
  "quilted",
  "padded coat",
  "heavy coat",
  "hoodie",
  "sweatshirt",
  "cashmere",
  "trench coat",
] as const;

export function scoreSummerTitle(text: string): number {
  const lower = text.toLowerCase();
  let score = 0;

  for (const keyword of SUMMER_TITLE_KEYWORDS) {
    if (lower.includes(keyword)) score += 2;
  }

  for (const keyword of WINTER_TITLE_KEYWORDS) {
    if (lower.includes(keyword)) score -= 4;
  }

  return score;
}

export function isLikelySummerProductTitle(text: string): boolean {
  return scoreSummerTitle(text) > 0;
}

export function isLikelyWinterProductTitle(text: string): boolean {
  const lower = text.toLowerCase();
  return WINTER_TITLE_KEYWORDS.some((keyword) => lower.includes(keyword));
}

/** Pair listing images with nearby product title snippets from KakobuyPlus HTML. */
export function pickSummerPreferredImageUrls(
  html: string,
  imageUrls: string[],
): string[] {
  if (imageUrls.length === 0) return imageUrls;

  const scored = imageUrls.map((url) => {
    const idx = html.indexOf(url.split("?")[0]);
    const context =
      idx >= 0
        ? html.slice(Math.max(0, idx - 400), Math.min(html.length, idx + 1200))
        : "";
    const score = scoreSummerTitle(context);

    return { url, score };
  });

  const summer = scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.url);

  if (summer.length > 0) return summer;

  const notWinter = scored
    .filter((item) => !isLikelyWinterProductTitle(item.url))
    .sort((a, b) => b.score - a.score)
    .map((item) => item.url);

  return notWinter.length > 0 ? notWinter : imageUrls;
}
