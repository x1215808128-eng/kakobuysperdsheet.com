export const SPREADSHEET_PRODUCTS_BASE = "https://www.kakobuyplus.com/en/products";

export const CATEGORIES = [
  {
    slug: "shoes",
    name: "Shoes",
    tag: "SNEAKERS",
    icon: "👟",
    preview: "/categories/shoes.png?v=1",
    previewObjectFit: "contain",
    previewUnfiltered: true,
    spreadsheetCategory: "shoes",
    description: "Sneakers, Jordans, Dunks, and streetwear footwear",
  },
  {
    slug: "t-shirts",
    name: "T-Shirts",
    tag: "T-SHIRTS",
    icon: "👕",
    preview: "/categories/t-shirts.png?v=1",
    previewObjectFit: "contain",
    previewUnfiltered: true,
    spreadsheetCategory: "tops",
    description: "Graphic tees, basics, and designer-inspired tops",
  },
  {
    slug: "hoodies",
    name: "Hoodies",
    tag: "HOODIES",
    icon: "🧥",
    preview:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=85&auto=format&fit=crop",
    spreadsheetCategory: "hoodie",
    description: "Hoodies, sweatshirts, and cozy streetwear layers",
  },
  {
    slug: "jackets",
    name: "Jackets",
    tag: "JACKETS",
    icon: "🧥",
    preview: "/categories/jackets.jpg?v=3",
    spreadsheetCategory: "outerwear",
    description: "Puffers, bombers, and seasonal outerwear",
  },
  {
    slug: "pants-shorts",
    name: "Pants/Shorts",
    tag: "PANTS / SHORTS",
    icon: "👖",
    preview: "/qc/pants-shorts.jpg?v=3",
    spreadsheetCategory: "bottoms",
    description: "Cargo pants, joggers, denim, and shorts",
  },
  {
    slug: "bags",
    name: "Bags",
    tag: "BAGS",
    icon: "🎒",
    preview: "/categories/bags.png?v=4",
    previewUnfiltered: true,
    spreadsheetCategory: "bags",
    description: "Backpacks, crossbody bags, and luxury-inspired totes",
  },
  {
    slug: "jersey",
    name: "Jersey",
    tag: "JERSEYS",
    icon: "⚽",
    preview: "/categories/jersey.png?v=4",
    previewUnfiltered: true,
    spreadsheetCategory: "jersey",
    description: "Football, basketball, and retro sport jerseys",
  },
  {
    slug: "headwear",
    name: "Headwear",
    tag: "HEADWEAR",
    icon: "🧢",
    preview:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=85&auto=format&fit=crop",
    spreadsheetCategory: "hats",
    description: "Caps, beanies, and bucket hats",
  },
  {
    slug: "accessories",
    name: "Accessories",
    tag: "ACCESSORIES",
    icon: "⌚",
    preview: "/qc/accessories.png?v=1",
    spreadsheetCategory: "accessories",
    description: "Watches, jewelry, belts, and small essentials",
  },
  {
    slug: "electronics",
    name: "Electronics",
    tag: "ELECTRONICS",
    icon: "📱",
    preview: "/categories/electronics.png?v=3",
    previewUnfiltered: true,
    spreadsheetCategory: "electronics",
    description: "Gadgets, earbuds, and tech accessories",
  },
  {
    slug: "perfume",
    name: "Perfume",
    tag: "PERFUME",
    icon: "🌸",
    preview:
      "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    spreadsheetCategory: "perfume",
    description: "Fragrances and scent-inspired finds",
  },
  {
    slug: "other",
    name: "Other Stuff",
    tag: "MISC",
    icon: "✨",
    preview:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=85&auto=format&fit=crop",
    description: "Unique finds and miscellaneous items",
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export type Category = (typeof CATEGORIES)[number];

export function getCategoryBySlug(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getCategorySpreadsheetCategory(slug: string) {
  const cat = getCategoryBySlug(slug);
  if (!cat || !("spreadsheetCategory" in cat)) return undefined;
  return cat.spreadsheetCategory;
}

/** KakobuyPlus all products — used for misc / other category. */
export const ALL_PRODUCTS_SPREADSHEET_URL =
  `${SPREADSHEET_PRODUCTS_BASE}?page=1`;

export function getSpreadsheetCategoryUrl(slug: string) {
  if (slug === "other") {
    return ALL_PRODUCTS_SPREADSHEET_URL;
  }

  const spreadsheetCategory = getCategorySpreadsheetCategory(slug);

  if (spreadsheetCategory) {
    return `${SPREADSHEET_PRODUCTS_BASE}?categories=${spreadsheetCategory}&page=1`;
  }

  return `/kakobuy-spreadsheet-${slug}`;
}

export function isExternalSpreadsheetCategoryUrl(slug: string) {
  return slug === "other" || getCategorySpreadsheetCategory(slug) !== undefined;
}

export function getCategoryPageUrl(slug: string) {
  return `/kakobuy-spreadsheet-${slug}`;
}
