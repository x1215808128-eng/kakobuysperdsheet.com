import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import { GUIDE_LINKS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-900 text-zinc-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">{SITE.name}</p>
          <p className="mt-3 text-sm leading-relaxed">
            The {SITE.name} is a curated database of product links from Taobao,
            Weidian, and 1688, covering categories such as sneakers, streetwear,
            hoodies, bags, and accessories. Users can easily search, filter, and
            compare items to find verified products and the best batches.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Categories</p>
          <ul className="mt-3 space-y-2 text-sm">
            {CATEGORIES.slice(0, 6).map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/kakobuy-spreadsheet-${cat.slug}`}
                  className="hover:text-orange-400"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Guides</p>
          <ul className="mt-3 space-y-2 text-sm">
            {GUIDE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-orange-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-800 px-4 py-6 text-center text-xs text-zinc-500">
        <p>
          This website does not sell products or handle payments. All purchases
          are made through third-party platforms via a shopping agent, and users
          are responsible for their own decisions.
        </p>
        <p className="mt-2">
          ©{SITE.year} {SITE.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
