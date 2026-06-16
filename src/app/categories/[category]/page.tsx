import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTAButton } from "@/components/cta-button";
import {
  CATEGORIES,
  getCategoryBySlug,
  getSpreadsheetCategoryUrl,
} from "@/lib/categories";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};

  return buildMetadata({
    title: `Kakobuy Spreadsheet ${cat.name} ${SITE.year} | Verified ${cat.name} Finds & Best Batches`,
    description: `Browse ${cat.name.toLowerCase()} on the Kakobuy Spreadsheet. Discover verified Taobao, Weidian, and 1688 ${cat.description.toLowerCase()} with QC photos and USD pricing.`,
    path: `/kakobuy-spreadsheet-${cat.slug}`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const browseUrl = getSpreadsheetCategoryUrl(cat.slug);

  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm font-medium text-accent hover:underline"
        >
          ← Back to Kakobuy Spreadsheet
        </Link>

        <p className="mt-6 font-display text-xs uppercase tracking-[0.25em] text-muted">
          {cat.tag}
        </p>
        <h1 className="mt-2 text-4xl font-bold text-foreground">
          Kakobuy Spreadsheet {cat.name} — {SITE.year}
        </h1>
        <p className="mt-4 text-lg text-muted">
          Explore verified{" "}
          <strong className="text-foreground">{cat.name.toLowerCase()}</strong> finds on
          the <strong className="text-foreground">Kakobuy Spreadsheet</strong>.{" "}
          {cat.description} with real QC photos, USD pricing, and trusted seller links
          from Taobao, Weidian, and 1688.
        </p>

        <div className="mt-8 border border-border bg-card p-8 text-center">
          <p className="text-5xl text-accent">{cat.icon}</p>
          <p className="mt-4 text-muted">
            Product listings for this category are connected to the spreadsheet
            database. The Kakobuy Spreadsheet {cat.name} section is updated regularly
            with trending finds and best batches.
          </p>
          <div className="mt-6">
            <CTAButton href={browseUrl}>
              Browse {cat.name} on Kakobuy Spreadsheet →
            </CTAButton>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">
            Why Browse {cat.name} on Kakobuy Spreadsheet?
          </h2>
          <ul className="mt-4 space-y-2 text-muted">
            {[
              `Curated ${cat.name.toLowerCase()} with verified Taobao, Weidian, and 1688 links`,
              "Real QC photos from previous buyers",
              "Prices converted to USD for easy comparison",
              "Organized for fast discovery on the Kakobuy Spreadsheet",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-accent">+</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
