import type { NextConfig } from "next";
import { CATEGORIES } from "./src/lib/categories";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/sitemap.xml": ["./content/news/**/*"],
    "/kakobuy-spreadsheet-news": ["./content/news/**/*"],
    "/kakobuy-spreadsheet-news/[slug]": ["./content/news/**/*"],
  },
  async rewrites() {
    return CATEGORIES.map((cat) => ({
      source: `/kakobuy-spreadsheet-${cat.slug}`,
      destination: `/categories/${cat.slug}`,
    }));
  },
};

export default nextConfig;
