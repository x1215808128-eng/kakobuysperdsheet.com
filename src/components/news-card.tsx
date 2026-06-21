import Link from "next/link";
import {
  formatFullDate,
  getPostCoverImage,
  type PostMeta,
} from "@/lib/posts";

export function NewsCard({ post }: { post: PostMeta }) {
  const coverImage = getPostCoverImage(post);

  return (
    <Link
      href={`/kakobuy-spreadsheet-news/${post.slug}`}
      className="group block h-full"
    >
      <article className="flex h-full flex-col overflow-hidden border border-border bg-card transition-colors hover:border-accent/40">
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-surface">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={coverImage}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h2 className="text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-accent sm:text-xl">
            {post.title}
          </h2>
          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
            {post.excerpt}
          </p>
          <p className="mt-4 text-xs text-muted/70">
            {post.author}
            <span className="mx-1.5">·</span>
            {formatFullDate(post.date)}
            <span className="mx-1.5">·</span>
            {post.readingTimeMinutes} min read
          </p>
        </div>
      </article>
    </Link>
  );
}
