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
        <Link href="/" className="text-sm font-medium text-accent hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-foreground">
          Kakobuy vs Litbuy vs Oopbuy
        </h1>
        <p className="mt-4 text-muted">
          Choosing the right agent matters when using the{" "}
          <strong className="text-foreground">Kakobuy Spreadsheet</strong>. Here&apos;s how
          the three popular agents compare for international buyers in 2026.
        </p>

        <div className="mt-10 overflow-x-auto border border-border">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-card">
                <th className="px-4 py-3 text-left font-semibold text-foreground">
                  Feature
                </th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">
                  Kakobuy
                </th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">
                  Litbuy
                </th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">
                  Oopbuy
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.feature} className="border-b border-border">
                  <td className="px-4 py-3 font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="px-4 py-3 text-muted">{row.kakobuy}</td>
                  <td className="px-4 py-3 text-muted">{row.litbuy}</td>
                  <td className="px-4 py-3 text-muted">{row.oopbuy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-muted">
          For users browsing the{" "}
          <strong className="text-foreground">Kakobuy Spreadsheet</strong>, Kakobuy offers
          the most seamless experience since links paste directly into the platform.
          Litbuy and Oopbuy remain viable alternatives if you prefer their shipping lines
          or pricing.
        </p>
      </div>
    </article>
  );
}
