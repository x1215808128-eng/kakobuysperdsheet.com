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
        <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={coverImage}
            alt={post.title}
            className="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.01]"
            loading="lazy"
          />
        </div>

        <div className="flex flex-1 flex-col px-6 py-7 sm:px-8 sm:py-8">
          <h2 className="text-xl font-bold leading-[1.35] text-foreground transition-colors group-hover:text-accent sm:text-[1.375rem]">
            {post.title}
          </h2>
          <p className="mt-5 line-clamp-3 flex-1 text-[15px] leading-[1.75] text-muted sm:mt-6">
            {post.excerpt}
          </p>
          <p className="mt-6 border-t border-border pt-5 text-xs leading-relaxed text-muted/70 sm:mt-7">
            {post.author}
            <span className="mx-2">·</span>
            {formatFullDate(post.date)}
            <span className="mx-2">·</span>
            {post.readingTimeMinutes} min read
          </p>
        </div>
      </article>
    </Link>
  );
}
