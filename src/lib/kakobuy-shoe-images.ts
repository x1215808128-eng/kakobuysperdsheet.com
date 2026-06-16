/** @deprecated Import from `@/lib/kakobuy-hero-images` instead. */
import {
  buildCategoryHeroImage,
  getChinaDateKey,
  getCuratedDailyHero,
  getDailyCategoryIndex,
  HERO_QC_CATEGORY_CONFIG,
  toHeroProductImageUrl,
} from "@/lib/kakobuy-hero-images";

export const CURATED_KAKOBUY_SHOE_URLS = HERO_QC_CATEGORY_CONFIG.shoes.urls;

export const toHeroShoeImageUrl = toHeroProductImageUrl;

export { getChinaDateKey };

export function getDailyShoeIndex(): number {
  return getDailyCategoryIndex("shoes");
}

export function buildShoeHeroImage(imageUrl: string) {
  return buildCategoryHeroImage("shoes", imageUrl);
}

export function getCuratedDailyShoeHero() {
  return getCuratedDailyHero("shoes");
}
