import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/categories";
import { getAllPosts } from "@/lib/posts";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

const STATIC_PAGES = [
  "",
  "/what-is-kakobuy-spreadsheet",
  "/kakobuy-spreadsheet-guides",
  "/kakobuy-spreadsheet-news",
  "/kakobuy-spreadsheet-contact",
  "/is-kakobuy-safe",
  "/kakobuy-vs-litbuy-vs-oopbuy",
];

function buildUrl(path: string): string {
  return path === "" ? `${SITE.url}/` : `${SITE.url}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = STATIC_PAGES.map((path) => ({
    url: buildUrl(path),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const categoryEntries = CATEGORIES.map((cat) => ({
    url: `${SITE.url}/kakobuy-spreadsheet-${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  let articleEntries: MetadataRoute.Sitemap = [];
  try {
    articleEntries = getAllPosts().map((post) => ({
      url: `${SITE.url}/kakobuy-spreadsheet-news/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }));
  } catch {
    // Keep static/category URLs available if news files are missing at runtime.
  }

  return [...staticEntries, ...categoryEntries, ...articleEntries];
}
