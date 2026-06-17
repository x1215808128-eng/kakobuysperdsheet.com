import Link from "next/link";

const LOGO_SRC = "/logo-header.png?v=1";

type SiteLogoProps = {
  className?: string;
  size?: "mobile" | "desktop";
};

export function SiteLogo({ className = "", size = "desktop" }: SiteLogoProps) {
  const isMobile = size === "mobile";

  if (isMobile) {
    return (
      <Link
        href="/"
        className={`flex h-12 w-full items-center justify-center px-2 ${className}`}
        aria-label="KAKOBUY home"
      >
        <img
          src={LOGO_SRC}
          alt="KAKOBUY"
          width={800}
          height={200}
          className="h-auto max-h-9 w-2/3 object-contain object-center"
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex h-14 shrink-0 items-center justify-center lg:h-16 ${className}`}
      aria-label="KAKOBUY home"
    >
      <img
        src={LOGO_SRC}
        alt="KAKOBUY"
        width={800}
        height={200}
        className="h-auto max-h-10 w-[min(220px,28vw)] object-contain object-center lg:max-h-11"
      />
    </Link>
  );
}
