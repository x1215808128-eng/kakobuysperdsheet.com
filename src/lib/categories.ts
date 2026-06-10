export const CATEGORIES = [
  {
    slug: "shoes",
    name: "Shoes",
    icon: "👟",
    description: "Sneakers, Jordans, Dunks, and streetwear footwear",
  },
  {
    slug: "t-shirts",
    name: "T-Shirts",
    icon: "👕",
    description: "Graphic tees, basics, and designer-inspired tops",
  },
  {
    slug: "hoodies",
    name: "Hoodies",
    icon: "🧥",
    description: "Hoodies, sweatshirts, and cozy streetwear layers",
  },
  {
    slug: "jackets",
    name: "Jackets",
    icon: "🧥",
    description: "Puffers, bombers, and seasonal outerwear",
  },
  {
    slug: "pants-shorts",
    name: "Pants/Shorts",
    icon: "👖",
    description: "Cargo pants, joggers, denim, and shorts",
  },
  {
    slug: "bags",
    name: "Bags",
    icon: "🎒",
    description: "Backpacks, crossbody bags, and luxury-inspired totes",
  },
  {
    slug: "jersey",
    name: "Jersey",
    icon: "⚽",
    description: "Football, basketball, and retro sport jerseys",
  },
  {
    slug: "headwear",
    name: "Headwear",
    icon: "🧢",
    description: "Caps, beanies, and bucket hats",
  },
  {
    slug: "accessories",
    name: "Accessories",
    icon: "⌚",
    description: "Watches, jewelry, belts, and small essentials",
  },
  {
    slug: "electronics",
    name: "Electronics",
    icon: "📱",
    description: "Gadgets, earbuds, and tech accessories",
  },
  {
    slug: "perfume",
    name: "Perfume",
    icon: "🌸",
    description: "Fragrances and scent-inspired finds",
  },
  {
    slug: "other",
    name: "Other Stuff",
    icon: "✨",
    description: "Unique finds and miscellaneous items",
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export function getCategoryBySlug(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
