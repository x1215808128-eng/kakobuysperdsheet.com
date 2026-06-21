import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/news");

const DEFAULT_COVER_IMAGES: Record<string, string> = {
  "how-to-use-kakobuy-spreadsheet-2026": "/news/how-to-use-kakobuy-spreadsheet-2026.jpg",
  "how-to-find-items-on-kakobuy-spreadsheet": "/news/how-to-find-items-on-kakobuy-spreadsheet.jpg",
  "best-taobao-weidian-finds-kakobuy-spreadsheet-2026": "/news/best-taobao-weidian-finds-kakobuy-spreadsheet-2026.jpg",
  "kakobuy-budget-spreadsheet-first-haul-guide": "/news/kakobuy-budget-spreadsheet-first-haul-guide.jpg",
};

function estimateReadingTimeMinutes(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  author?: string;
  readingTimeMinutes: number;
  keywords?: string[];
  relatedSlugs?: string[];
};

export type Post = PostMeta & {
  content: string;
};

function parseFile(filename: string): Post {
  const slug = filename.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    coverImage: data.coverImage as string | undefined,
    author: (data.author as string | undefined) ?? "Kakobuy Spreadsheet",
    readingTimeMinutes:
      (data.readingTimeMinutes as number | undefined) ??
      estimateReadingTimeMinutes(content),
    keywords: data.keywords as string[] | undefined,
    relatedSlugs: data.relatedSlugs as string[] | undefined,
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  return files
    .map((file) => {
      const post = parseFile(file);
      const { content: _, ...meta } = post;
      return meta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  const mdPath = path.join(POSTS_DIR, `${slug}.md`);
  const mdxPath = path.join(POSTS_DIR, `${slug}.mdx`);

  if (fs.existsSync(mdPath)) return parseFile(`${slug}.md`);
  if (fs.existsSync(mdxPath)) return parseFile(`${slug}.mdx`);
  return null;
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

export function formatFullDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getPostCoverImage(post: Pick<PostMeta, "slug" | "coverImage">): string {
  return post.coverImage ?? DEFAULT_COVER_IMAGES[post.slug] ?? "/categories/shoes.jpg";
}
