import Link from "next/link";
import { NewsCard } from "@/components/news-card";
import { getAllPosts } from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  title: "Kakobuy Spreadsheet News & Guides (2026 Updates & Buying Tips)",
  description:
    "Latest Kakobuy Spreadsheet news, shopping guides, and expert insights to help you find the best products, compare batches, and shop safely in 2026.",
  path: "/kakobuy-spreadsheet-news",
});

export default function NewsPage() {
  const posts = getAllPosts();

  return (
    <article className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-medium text-accent hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-foreground">
          Kakobuy Spreadsheet News
        </h1>
        <p className="mt-4 max-w-3xl text-muted">
          Explore the latest <strong className="text-foreground">Kakobuy Spreadsheet</strong> news,
          detailed shopping guides, and expert insights for {SITE.year}. Discover how to
          identify trusted sellers, evaluate QC photos, compare different buying
          platforms, and avoid common mistakes when using the Kakobuy Spreadsheet.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8">
          {posts.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </article>
  );
}
