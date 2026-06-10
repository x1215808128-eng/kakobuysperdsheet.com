import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import { NAV_LINKS, SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold text-zinc-900">
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => {
            const isExternal = link.href.startsWith("http");
            const className =
              "text-sm font-medium text-zinc-600 hover:text-orange-600";

            return isExternal ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className={className}>
                {link.label}
              </Link>
            );
          })}

          <div className="group relative">
            <button
              type="button"
              className="text-sm font-medium text-zinc-600 hover:text-orange-600"
            >
              All Categories
            </button>
            <div className="invisible absolute right-0 top-full z-50 mt-2 w-56 rounded-lg border border-zinc-200 bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/kakobuy-spreadsheet-${cat.slug}`}
                  className="block px-4 py-2 text-sm text-zinc-700 hover:bg-orange-50 hover:text-orange-600"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <Link
          href={SITE.kakobuyRegisterUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}
