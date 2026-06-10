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
        <Link href="/" className="text-sm font-medium text-orange-600 hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-zinc-900">
          What Is Kakobuy Spreadsheet?
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Kakobuy Spreadsheet {SITE.year} – Complete Beginner Guide
        </p>

        <p className="mt-6 leading-relaxed text-zinc-600">
          If you&apos;re looking to buy products from China using agents like
          Kakobuy, you&apos;ve probably come across the term{" "}
          <strong>Kakobuy Spreadsheet</strong>. This guide explains everything
          in a simple and practical way.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-zinc-900">
          What Is a Kakobuy Spreadsheet?
        </h2>
        <p className="mt-4 text-zinc-600">
          A Kakobuy Spreadsheet is a curated database of product links from
          Taobao, Weidian, and 1688. These spreadsheets help users quickly find
          verified products, QC photos, trusted sellers, and real pricing.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-zinc-900">
          Why Kakobuy Spreadsheet Is So Popular
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-600">
          <li>Saves time — no manual searching on Chinese marketplaces</li>
          <li>Verified links tested and shared by the community</li>
          <li>QC photos included so you see real products before buying</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-zinc-900">
          How to Use Kakobuy Spreadsheet
        </h2>
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-zinc-600">
          <li>Browse products on the Kakobuy Spreadsheet</li>
          <li>Click the product link and copy it</li>
          <li>Paste it into Kakobuy</li>
          <li>Place your order — Kakobuy handles QC and shipping</li>
        </ol>

        <div className="mt-10">
          <CTAButton>Browse Kakobuy Spreadsheet →</CTAButton>
        </div>
      </div>
    </article>
  );
}
