import Link from "next/link";
import { CategoryLink } from "@/components/category-link";
import { SiteLogo } from "@/components/site-logo";
import { CATEGORIES } from "@/lib/categories";
import { NAV_LINKS, SITE } from "@/lib/site";

const navLinkClass =
  "whitespace-nowrap font-display text-xs font-medium uppercase tracking-[0.08em] text-muted transition-colors hover:text-accent lg:text-sm lg:tracking-[0.1em]";

export function Header() {
  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-visible px-3 py-2 sm:gap-3 sm:px-4 lg:gap-4">
        <SiteLogo />

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-3 md:flex lg:gap-5 xl:gap-7"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => {
            const isExternal = link.href.startsWith("http");

            return isExternal ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={navLinkClass}
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
              </Link>
            );
          })}

          <div className="group relative shrink-0">
            <button type="button" className={navLinkClass}>
              Categories
            </button>
            <div className="invisible absolute right-0 top-full z-50 mt-2 w-56 border border-border bg-card py-2 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:opacity-100">
              {CATEGORIES.map((cat) => (
                <CategoryLink
                  key={cat.slug}
                  slug={cat.slug}
                  className="block px-4 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-accent"
                >
                  {cat.name}
                </CategoryLink>
              ))}
            </div>
          </div>
        </nav>

        <Link
          href={SITE.kakobuyRegisterUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 bg-accent px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.1em] text-black transition-colors hover:bg-accent-dim sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Sign Up
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
}
