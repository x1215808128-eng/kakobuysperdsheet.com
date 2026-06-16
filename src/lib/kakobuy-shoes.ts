/** @deprecated Import from `@/lib/kakobuy-hero-products` instead. */
import type { HeroQCImage } from "@/lib/hero-qc";
import {
  getDailyCategoryHeroForClient,
  getDailyCategoryHeroImage,
  isKakobuyProductImage,
  isLegacyPlaceholder,
} from "@/lib/kakobuy-hero-products";

export async function getDailyShoeHeroImage(): Promise<HeroQCImage> {
  return getDailyCategoryHeroImage("shoes");
}

export async function getDailyShoeHeroForClient(): Promise<HeroQCImage> {
  return getDailyCategoryHeroForClient("shoes");
}

export function isKakobuyShoeImage(src: string): boolean {
  return isKakobuyProductImage(src);
}

export function isLegacyPlaceholderShoe(src: string): boolean {
  return isLegacyPlaceholder(src, "shoes");
}
