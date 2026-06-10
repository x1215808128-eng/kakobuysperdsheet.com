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
          <nav className="text-sm text-zinc-500">
            <Link href="/" className="text-orange-600 hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/kakobuy-spreadsheet-news"
              className="text-orange-600 hover:underline"
            >
              News
            </Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-700">{post.title}</span>
          </nav>

          <header className="mt-6">
            <p className="text-sm font-medium text-orange-600">
              {formatDate(post.date)}
            </p>
            <h1 className="mt-2 text-4xl font-bold leading-tight text-zinc-900">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-zinc-600">{post.excerpt}</p>
          </header>

          <div className="mt-10">
            <MarkdownContent content={post.content} />
          </div>

          <div className="mt-12 rounded-2xl bg-orange-50 p-8 text-center">
            <h2 className="text-xl font-bold text-zinc-900">
              Ready to Browse the Kakobuy Spreadsheet?
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              Explore {SITE.productCount} verified products with QC photos and
              USD pricing.
            </p>
            <div className="mt-4">
              <CTAButton>Browse Kakobuy Spreadsheet →</CTAButton>
            </div>
          </div>

          {related.length > 0 && (
            <section className="mt-12 border-t border-zinc-200 pt-10">
              <h2 className="text-lg font-semibold text-zinc-900">
                Related Articles
              </h2>
              <ul className="mt-4 space-y-4">
                {related.map((item) =>
                  item ? (
                    <li key={item.slug}>
                      <Link
                        href={`/kakobuy-spreadsheet-news/${item.slug}`}
                        className="font-medium text-orange-600 hover:underline"
                      >
                        {item.title}
                      </Link>
                      <p className="mt-1 text-sm text-zinc-500">
                        {item.excerpt}
                      </p>
                    </li>
                  ) : null,
                )}
              </ul>
            </section>
          )}

          <div className="mt-8">
            <Link
              href="/kakobuy-spreadsheet-news"
              className="text-sm font-medium text-orange-600 hover:underline"
            >
              ← Back to all news
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
