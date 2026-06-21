/** @deprecated Import from `@/lib/kakobuy-hero-products` instead. */
import type { HeroQCImage } from "@/lib/hero-qc";
import {
  getDailyCategoryHeroForClient,
  getDailyCategoryHeroImage,
  isKakobuyProductImage,
  isLegacyPlaceholder,
} from "@/lib/kakobuy-hero-products";

export function getDailyShoeHeroImage(): HeroQCImage {
  return getDailyCategoryHeroImage("shoes");
}

export function getDailyShoeHeroForClient(): HeroQCImage {
  return getDailyCategoryHeroForClient("shoes");
}

export function isKakobuyShoeImage(src: string): boolean {
  return isKakobuyProductImage(src);
}

export function isLegacyPlaceholderShoe(src: string): boolean {
  return isLegacyPlaceholder(src, "shoes");
}
