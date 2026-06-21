import type { Metadata } from "next";
import Link from "next/link";
import { NewsCard } from "@/components/news-card";
import { NewsPagination } from "@/components/news-pagination";
import {
  getPaginatedPosts,
  NEWS_POSTS_PER_PAGE,
} from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const dynamic = "force-dynamic";

type NewsPageProps = {
  searchParams: Promise<{ page?: string }>;
};

function parsePageParam(pageParam?: string): number {
  const parsed = Number.parseInt(pageParam ?? "1", 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
}

export async function generateMetadata({
  searchParams,
}: NewsPageProps): Promise<Metadata> {
  const { page: pageParam } = await searchParams;
  const { currentPage } = getPaginatedPosts(parsePageParam(pageParam));
  const path =
    currentPage > 1
      ? `/kakobuy-spreadsheet-news?page=${currentPage}`
      : "/kakobuy-spreadsheet-news";

  return buildMetadata({
    title:
      currentPage > 1
        ? `Kakobuy Spreadsheet News — Page ${currentPage}`
        : "Kakobuy Spreadsheet News & Guides (2026 Updates & Buying Tips)",
    description:
      "Latest Kakobuy Spreadsheet news, shopping guides, and expert insights to help you find the best products, compare batches, and shop safely in 2026.",
    path,
  });
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const { page: pageParam } = await searchParams;
  const {
    posts,
    currentPage,
    totalPages,
    totalPosts,
    startIndex,
    endIndex,
  } = getPaginatedPosts(parsePageParam(pageParam));

  return (
    <article className="px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-medium text-accent hover:underline">
          ← Back to Home
        </Link>

        <header className="mt-8 max-w-3xl md:mt-10">
          <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Kakobuy Spreadsheet News
          </h1>
          <p className="mt-6 text-base leading-[1.75] text-muted md:mt-8 md:text-lg md:leading-[1.8]">
            Explore the latest <strong className="text-foreground">Kakobuy Spreadsheet</strong> news,
            detailed shopping guides, and expert insights for {SITE.year}. Discover how to
            identify trusted sellers, evaluate QC photos, compare different buying
            platforms, and avoid common mistakes when using the Kakobuy Spreadsheet.
          </p>
          {totalPosts > 0 && (
            <p className="mt-5 font-display text-[11px] uppercase tracking-[0.2em] text-muted/80">
              Showing {startIndex}–{endIndex} of {totalPosts} articles ·{" "}
              {NEWS_POSTS_PER_PAGE} per page
            </p>
          )}
        </header>

        {posts.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 gap-10 sm:mt-16 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:gap-x-12 lg:gap-y-16">
            {posts.map((post) => (
              <NewsCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="mt-14 text-muted">No articles published yet.</p>
        )}

        <NewsPagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </article>
  );
}
