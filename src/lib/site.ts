export const SITE = {
  name: "Kakobuy Spreadsheet",
  domain: "kakobuysperdsheet.com",
  url: "https://kakobuysperdsheet.com",
  year: 2026,
  productCount: "10,000+",
  email: "contact@kakobuysperdsheet.com",
  keywords: [
    "Kakobuy Spreadsheet",
    "Kakobuy Sheet",
    "Kakobuy Links",
    "Kakobuy Finds",
  ],
  kakobuyRegisterUrl: "https://www.kakobuy.com/register",
  spreadsheetUrl: "https://www.kakobuyplus.com/en/products",
  description:
    "Kakobuy Spreadsheet 2026, a curated database featuring 10,000+ products with real QC photos, accurate USD pricing, and verified Taobao, Weidian, and 1688 links. Stay updated with trending items and discover the best batches — fast, reliable, and easy to use.",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/kakobuy-spreadsheet-guides" },
  { label: "Spreadsheet", href: "https://www.kakobuyplus.com/en/products" },
  { label: "Contact", href: "/kakobuy-spreadsheet-contact" },
  { label: "News", href: "/kakobuy-spreadsheet-news" },
] as const;

export const GUIDE_LINKS = [
  {
    label: "Kakobuy Beginner Guide",
    href: "/what-is-kakobuy-spreadsheet",
  },
  { label: "Is Kakobuy Safe", href: "/is-kakobuy-safe" },
  {
    label: "Kakobuy vs Litbuy vs Oopbuy",
    href: "/kakobuy-vs-litbuy-vs-oopbuy",
  },
] as const;
