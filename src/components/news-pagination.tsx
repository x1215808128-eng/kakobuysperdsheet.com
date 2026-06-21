import Link from "next/link";
import { getNewsListPageHref } from "@/lib/posts";

type NewsPaginationProps = {
  currentPage: number;
  totalPages: number;
};

function getVisiblePages(currentPage: number, totalPages: number): number[] {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pages = new Set<number>([
    1,
    totalPages,
    currentPage,
    currentPage - 1,
    currentPage + 1,
  ]);

  return [...pages]
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b);
}

export function NewsPagination({
  currentPage,
  totalPages,
}: NewsPaginationProps) {
  if (totalPages <= 1) return null;

  const visiblePages = getVisiblePages(currentPage, totalPages);
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <nav
      className="mt-16 border-t border-border pt-10 sm:mt-20"
      aria-label="News pagination"
    >
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="font-display text-[11px] uppercase tracking-[0.2em] text-muted">
          Page {currentPage} of {totalPages}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {prevPage ? (
            <Link
              href={getNewsListPageHref(prevPage)}
              className="inline-flex min-w-[88px] items-center justify-center border border-border bg-card px-4 py-2.5 font-display text-[11px] font-medium uppercase tracking-[0.14em] text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              ← Prev
            </Link>
          ) : (
            <span className="inline-flex min-w-[88px] items-center justify-center border border-border/50 px-4 py-2.5 font-display text-[11px] uppercase tracking-[0.14em] text-muted/40">
              ← Prev
            </span>
          )}

          <div className="flex items-center gap-1.5">
            {visiblePages.map((page, index) => {
              const previous = visiblePages[index - 1];
              const showEllipsis = previous !== undefined && page - previous > 1;

              return (
                <span key={page} className="flex items-center gap-1.5">
                  {showEllipsis && (
                    <span className="px-1 font-display text-xs text-muted/50">
                      …
                    </span>
                  )}
                  {page === currentPage ? (
                    <span
                      aria-current="page"
                      className="inline-flex h-10 min-w-10 items-center justify-center bg-accent px-3 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-black"
                    >
                      {page}
                    </span>
                  ) : (
                    <Link
                      href={getNewsListPageHref(page)}
                      className="inline-flex h-10 min-w-10 items-center justify-center border border-border bg-card px-3 font-display text-[11px] font-medium uppercase tracking-[0.14em] text-muted transition-colors hover:border-accent/50 hover:text-accent"
                    >
                      {page}
                    </Link>
                  )}
                </span>
              );
            })}
          </div>

          {nextPage ? (
            <Link
              href={getNewsListPageHref(nextPage)}
              className="inline-flex min-w-[88px] items-center justify-center border border-border bg-card px-4 py-2.5 font-display text-[11px] font-medium uppercase tracking-[0.14em] text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              Next →
            </Link>
          ) : (
            <span className="inline-flex min-w-[88px] items-center justify-center border border-border/50 px-4 py-2.5 font-display text-[11px] uppercase tracking-[0.14em] text-muted/40">
              Next →
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
