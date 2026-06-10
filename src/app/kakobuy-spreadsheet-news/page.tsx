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
        <Link
          href="/"
          className="text-sm font-medium text-orange-600 hover:underline"
        >
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-zinc-900">
          Kakobuy Spreadsheet News
        </h1>
        <p className="mt-4 text-zinc-600">
          Explore the latest <strong>Kakobuy Spreadsheet</strong> news, detailed
          shopping guides, and expert insights for {SITE.year}. Discover how to
          identify trusted sellers, evaluate QC photos, compare different buying
          platforms, and avoid common mistakes when using the Kakobuy
          Spreadsheet.
        </p>

        <div className="mt-10 space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/kakobuy-spreadsheet-news/${post.slug}`}
              className="block rounded-xl border border-zinc-200 p-6 transition hover:border-orange-300 hover:shadow-md"
            >
              <p className="text-xs font-medium text-orange-600">
                {formatDate(post.date)}
              </p>
              <h2 className="mt-2 text-lg font-semibold text-zinc-900">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-600">{post.excerpt}</p>
              <p className="mt-3 text-sm font-medium text-orange-600">
                Read more →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
