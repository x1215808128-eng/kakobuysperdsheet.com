import Link from "next/link";
import { CategoryLink } from "@/components/category-link";
import { CATEGORIES } from "@/lib/categories";
import { GUIDE_LINKS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.08em] text-foreground">
            {SITE.name}
          </p>
          <p className="mt-1 font-display text-[10px] uppercase tracking-[0.25em] text-muted">
            THE ULTIMATE ARCHIVE
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            A curated database of product links from Taobao, Weidian, and 1688.
            Search, filter, and compare verified finds with real QC photos and
            the best batches.
          </p>
        </div>

        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-foreground">
            Categories
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {CATEGORIES.slice(0, 6).map((cat) => (
              <li key={cat.slug}>
                <CategoryLink
                  slug={cat.slug}
                  className="text-muted transition-colors hover:text-accent"
                >
                  {cat.name}
                </CategoryLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-foreground">
            Guides
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {GUIDE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-4 py-6 text-center text-xs text-muted">
        <p>
          This website does not sell products or handle payments. All purchases
          are made through third-party platforms via a shopping agent.
        </p>
        <p className="mt-2">
          ©{SITE.year} {SITE.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
