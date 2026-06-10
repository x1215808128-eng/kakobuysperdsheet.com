import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kakobuy vs Litbuy vs Oopbuy | Agent Comparison 2026",
  description:
    "Compare Kakobuy, Litbuy, and Oopbuy for spreadsheet shopping. Fees, QC, shipping, and which agent works best with Kakobuy Spreadsheet finds.",
  path: "/kakobuy-vs-litbuy-vs-oopbuy",
});

const COMPARISON = [
  { feature: "Best For", kakobuy: "Budget finds, easy UI", litbuy: "Fast onboarding", oopbuy: "EU-focused buyers" },
  { feature: "QC Photos", kakobuy: "Yes", litbuy: "Yes", oopbuy: "Yes" },
  { feature: "Spreadsheet Links", kakobuy: "Native support", litbuy: "Compatible", oopbuy: "Compatible" },
  { feature: "Shipping Lines", kakobuy: "Multiple options", litbuy: "Multiple options", oopbuy: "EU lines" },
];

export default function ComparisonPage() {
  return (
    <article className="px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-medium text-orange-600 hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-zinc-900">
          Kakobuy vs Litbuy vs Oopbuy
        </h1>
        <p className="mt-4 text-zinc-600">
          Choosing the right agent matters when using the{" "}
          <strong>Kakobuy Spreadsheet</strong>. Here&apos;s how the three
          popular agents compare for international buyers in 2026.
        </p>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50">
                <th className="px-4 py-3 text-left font-semibold">Feature</th>
                <th className="px-4 py-3 text-left font-semibold">Kakobuy</th>
                <th className="px-4 py-3 text-left font-semibold">Litbuy</th>
                <th className="px-4 py-3 text-left font-semibold">Oopbuy</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.feature} className="border-b border-zinc-100">
                  <td className="px-4 py-3 font-medium">{row.feature}</td>
                  <td className="px-4 py-3 text-zinc-600">{row.kakobuy}</td>
                  <td className="px-4 py-3 text-zinc-600">{row.litbuy}</td>
                  <td className="px-4 py-3 text-zinc-600">{row.oopbuy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-zinc-600">
          For users browsing the <strong>Kakobuy Spreadsheet</strong>, Kakobuy
          offers the most seamless experience since links paste directly into
          the platform. Litbuy and Oopbuy remain viable alternatives if you
          prefer their shipping lines or pricing.
        </p>
      </div>
    </article>
  );
}
