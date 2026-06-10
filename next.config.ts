import type { NextConfig } from "next";
import { CATEGORIES } from "./src/lib/categories";

const nextConfig: NextConfig = {
  async rewrites() {
    return CATEGORIES.map((cat) => ({
      source: `/kakobuy-spreadsheet-${cat.slug}`,
      destination: `/categories/${cat.slug}`,
    }));
  },
};

export default nextConfig;
