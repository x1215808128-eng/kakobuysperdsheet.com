import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTAButton } from "@/components/cta-button";
import { CATEGORIES, getCategoryBySlug } from "@/lib/categories";
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

  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm font-medium text-orange-600 hover:underline"
        >
          ← Back to Kakobuy Spreadsheet
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-zinc-900">
          Kakobuy Spreadsheet {cat.name} — {SITE.year}
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          Explore verified <strong>{cat.name.toLowerCase()}</strong> finds on
          the <strong>Kakobuy Spreadsheet</strong>. {cat.description} with real
          QC photos, USD pricing, and trusted seller links from Taobao, Weidian,
          and 1688.
        </p>

        <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center">
          <p className="text-5xl">{cat.icon}</p>
          <p className="mt-4 text-zinc-600">
            Product listings for this category will be connected to your
            spreadsheet database. The Kakobuy Spreadsheet {cat.name} section is
            updated regularly with trending finds and best batches.
          </p>
          <div className="mt-6">
            <CTAButton href={SITE.spreadsheetUrl}>
              Browse {cat.name} on Kakobuy Spreadsheet →
            </CTAButton>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            Why Browse {cat.name} on Kakobuy Spreadsheet?
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-600">
            <li>
              Curated {cat.name.toLowerCase()} with verified Taobao, Weidian,
              and 1688 links
            </li>
            <li>Real QC photos from previous buyers</li>
            <li>Prices converted to USD for easy comparison</li>
            <li>Organized for fast discovery on the Kakobuy Spreadsheet</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
