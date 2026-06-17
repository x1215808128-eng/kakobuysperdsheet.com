import Link from "next/link";
import { CategoryLink } from "@/components/category-link";
import { SiteLogo } from "@/components/site-logo";
import { CATEGORIES } from "@/lib/categories";
import { NAV_LINKS } from "@/lib/site";

const navLinkClass =
  "whitespace-nowrap font-display text-xs font-medium uppercase tracking-[0.08em] text-muted transition-colors hover:text-accent lg:text-sm lg:tracking-[0.1em]";

const mobileNavLinkClass =
  "shrink-0 rounded-none border border-border px-3 py-1.5 font-display text-[10px] font-medium uppercase tracking-[0.12em] text-muted transition-colors hover:border-accent/50 hover:text-accent";

export function Header() {
  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-border bg-background/90 backdrop-blur-md">
      <div className="flex h-12 items-center justify-center bg-background px-2 md:hidden">
        <SiteLogo size="mobile" />
      </div>

      <div className="relative mx-auto hidden max-w-6xl items-center px-4 py-2 md:flex lg:gap-4">
        <SiteLogo />

        <nav
          className="min-w-0 flex-1 items-center justify-center gap-3 md:flex lg:gap-5 xl:gap-7"
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
      </div>

      <nav
        className="flex gap-2 overflow-x-auto border-t border-border px-3 py-2 md:hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((link) => {
          const isExternal = link.href.startsWith("http");

          return isExternal ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={mobileNavLinkClass}
            >
              {link.label}
            </a>
          ) : (
            <Link key={link.href} href={link.href} className={mobileNavLinkClass}>
              {link.label}
            </Link>
          );
        })}
        <Link href="#spreadsheet" className={mobileNavLinkClass}>
          Categories
        </Link>
      </nav>
    </header>
  );
}
