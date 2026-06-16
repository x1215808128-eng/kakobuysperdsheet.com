import Link from "next/link";
import { formatDate, getAllPosts } from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

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
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-medium text-accent hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-foreground">
          Kakobuy Spreadsheet News
        </h1>
        <p className="mt-4 text-muted">
          Explore the latest <strong className="text-foreground">Kakobuy Spreadsheet</strong> news,
          detailed shopping guides, and expert insights for {SITE.year}. Discover how to
          identify trusted sellers, evaluate QC photos, compare different buying
          platforms, and avoid common mistakes when using the Kakobuy Spreadsheet.
        </p>

        <div className="mt-10 space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/kakobuy-spreadsheet-news/${post.slug}`}
              className="block border border-border bg-card p-6 transition-colors hover:border-accent/40"
            >
              <p className="font-display text-xs uppercase tracking-[0.15em] text-accent">
                {formatDate(post.date)}
              </p>
              <h2 className="mt-2 text-lg font-semibold text-foreground">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
              <p className="mt-3 text-sm font-medium text-accent">Read more →</p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
