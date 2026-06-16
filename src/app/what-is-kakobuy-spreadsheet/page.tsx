import Link from "next/link";
import { CTAButton } from "@/components/cta-button";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "What Is Kakobuy Spreadsheet? | Complete Beginner Guide 2026",
  description:
    "Learn what Kakobuy Spreadsheet is, how it works, and how to find verified Taobao, Weidian, and 1688 products using Kakobuy in 2026.",
  path: "/what-is-kakobuy-spreadsheet",
});

export default function WhatIsPage() {
  return (
    <article className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-medium text-accent hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-foreground">
          What Is Kakobuy Spreadsheet?
        </h1>
        <p className="mt-2 text-sm text-muted">
          Kakobuy Spreadsheet {SITE.year} – Complete Beginner Guide
        </p>

        <p className="mt-6 leading-relaxed text-muted">
          If you&apos;re looking to buy products from China using agents like
          Kakobuy, you&apos;ve probably come across the term{" "}
          <strong className="text-foreground">Kakobuy Spreadsheet</strong>. This guide
          explains everything in a simple and practical way.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-foreground">
          What Is a Kakobuy Spreadsheet?
        </h2>
        <p className="mt-4 text-muted">
          A Kakobuy Spreadsheet is a curated database of product links from Taobao,
          Weidian, and 1688. These spreadsheets help users quickly find verified
          products, QC photos, trusted sellers, and real pricing.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-foreground">
          Why Kakobuy Spreadsheet Is So Popular
        </h2>
        <ul className="mt-4 space-y-2 text-muted">
          {[
            "Saves time — no manual searching on Chinese marketplaces",
            "Verified links tested and shared by the community",
            "QC photos included so you see real products before buying",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-accent">+</span>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground">
          How to Use Kakobuy Spreadsheet
        </h2>
        <ol className="mt-4 space-y-2 text-muted">
          {[
            "Browse products on the Kakobuy Spreadsheet",
            "Click the product link and copy it",
            "Paste it into Kakobuy",
            "Place your order — Kakobuy handles QC and shipping",
          ].map((item, i) => (
            <li key={item} className="flex gap-3">
              <span className="font-display text-accent">{i + 1}.</span>
              {item}
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <CTAButton href={SITE.spreadsheetUrl}>Browse Kakobuy Spreadsheet →</CTAButton>
        </div>
      </div>
    </article>
  );
}
