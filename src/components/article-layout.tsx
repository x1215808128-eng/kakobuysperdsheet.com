import Link from "next/link";
import { CTAButton } from "@/components/cta-button";
import { JsonLd } from "@/components/json-ld";
import { MarkdownContent } from "@/components/markdown-content";
import { formatDate, getAllPosts, type Post } from "@/lib/posts";
import { articleJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";

export function ArticleLayout({ post }: { post: Post }) {
  const allPosts = getAllPosts();
  const related =
    post.relatedSlugs
      ?.map((slug) => allPosts.find((p) => p.slug === slug))
      .filter(Boolean) ?? allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.description,
          date: post.date,
          slug: post.slug,
        })}
      />

      <article className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <nav className="text-sm text-muted">
            <Link href="/" className="text-accent hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/kakobuy-spreadsheet-news"
              className="text-accent hover:underline"
            >
              News
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{post.title}</span>
          </nav>

          <header className="mt-6">
            <p className="font-display text-xs uppercase tracking-[0.15em] text-accent">
              {formatDate(post.date)}
            </p>
            <h1 className="mt-2 text-4xl font-bold leading-tight text-foreground">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted">{post.excerpt}</p>
          </header>

          <div className="mt-10">
            <MarkdownContent content={post.content} />
          </div>

          <div className="mt-12 border border-border bg-card p-8 text-center">
            <h2 className="text-xl font-bold text-foreground">
              Ready to Browse the Kakobuy Spreadsheet?
            </h2>
            <p className="mt-2 text-sm text-muted">
              Explore {SITE.productCount} verified products with QC photos and
              USD pricing.
            </p>
            <div className="mt-4">
              <CTAButton href={SITE.spreadsheetUrl}>Browse Kakobuy Spreadsheet →</CTAButton>
            </div>
          </div>

          {related.length > 0 && (
            <section className="mt-12 border-t border-border pt-10">
              <h2 className="font-display text-xs font-bold uppercase tracking-[0.15em] text-foreground">
                Related Articles
              </h2>
              <ul className="mt-4 space-y-4">
                {related.map((item) =>
                  item ? (
                    <li key={item.slug}>
                      <Link
                        href={`/kakobuy-spreadsheet-news/${item.slug}`}
                        className="font-medium text-accent hover:underline"
                      >
                        {item.title}
                      </Link>
                      <p className="mt-1 text-sm text-muted">{item.excerpt}</p>
                    </li>
                  ) : null,
                )}
              </ul>
            </section>
          )}

          <div className="mt-8">
            <Link
              href="/kakobuy-spreadsheet-news"
              className="text-sm font-medium text-accent hover:underline"
            >
              ← Back to all news
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
