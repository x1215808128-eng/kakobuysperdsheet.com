import { getHeroQcCategoryProductsUrl } from "@/lib/kakobuy-hero-images";
import { getDailyHeroQcStrip } from "@/lib/kakobuy-hero-products";

/** Hero QC imagery — local files live in /public/qc/ */
export type HeroQCImage = {
  src: string;
  alt: string;
  label: string;
  status: string;
  category: string;
  href: string;
  categoryKey?: import("@/lib/kakobuy-hero-images").HeroQcCategoryKey;
};

export const HERO_QC_CONTACT: HeroQCImage = {
  src: "/qc/contact-customer-service-card.png?v=1",
  alt: "Kakobuy customer service — WhatsApp and QR code",
  label: "CONTACT",
  status: "SUPPORT",
  category: "CUSTOMER SERVICE",
  href: "/kakobuy-spreadsheet-contact",
};

export const HERO_FEATURED_QC: HeroQCImage = {
  src: "/qc/pants-shorts.jpg?v=3",
  alt: "Pants and shorts QC collection preview",
  label: "PANTS / SHORTS",
  status: "VERIFIED",
  category: "CLOTHING",
  href: getHeroQcCategoryProductsUrl("bottoms"),
  categoryKey: "bottoms",
};

/** Legacy static strip — use `buildHeroQcStrip()` for live daily images. */
export const HERO_QC_STRIP_STATIC: HeroQCImage[] = [
  {
    src: "/qc/pants-shorts.jpg?v=3",
    alt: "Pants and shorts QC collection",
    label: "PANTS / SHORTS",
    status: "VERIFIED",
    category: "CLOTHING",
    href: getHeroQcCategoryProductsUrl("bottoms"),
    categoryKey: "bottoms",
  },
  {
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=85&auto=format&fit=crop",
    alt: "Accessories QC — watch product photo",
    label: "ACCESSORIES",
    status: "VERIFIED",
    category: "ACCESSORIES",
    href: getHeroQcCategoryProductsUrl("accessories"),
    categoryKey: "accessories",
  },
  HERO_QC_CONTACT,
  {
    src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=85&auto=format&fit=crop",
    alt: "Bags QC — backpack product shot",
    label: "BAGS",
    status: "QC READY",
    category: "BAGS",
    href: getHeroQcCategoryProductsUrl("bags"),
    categoryKey: "bags",
  },
];

export function buildHeroQcStrip(): HeroQCImage[] {
  return getDailyHeroQcStrip();
}

export const HERO_QC_STRIP: HeroQCImage[] = [
  {
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=85&auto=format&fit=crop",
    alt: "Sneaker QC — Nike Air Max inspection",
    label: "SNEAKERS",
    status: "QC READY",
    category: "SHOES",
    href: getHeroQcCategoryProductsUrl("shoes"),
    categoryKey: "shoes",
  },
  ...HERO_QC_STRIP_STATIC,
];
