import Link from "next/link";
import { SITE } from "@/lib/site";

type CTAButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg";
  className?: string;
};

export function CTAButton({
  href = SITE.kakobuyRegisterUrl,
  children,
  variant = "primary",
  size = "default",
  className = "",
}: CTAButtonProps) {
  const sizeStyles =
    size === "lg"
      ? "w-full min-h-[3.25rem] px-10 py-4 text-sm tracking-[0.18em] sm:w-auto sm:min-w-[280px]"
      : "w-full px-6 py-3 text-xs tracking-[0.15em] sm:w-auto";

  const base = `inline-flex items-center justify-center gap-3 rounded-none font-display font-bold uppercase transition-all ${sizeStyles}`;

  const styles =
    variant === "primary"
      ? "bg-accent text-black hover:bg-accent-dim"
      : variant === "outline"
        ? "border border-accent bg-transparent text-foreground hover:bg-accent/10"
        : "border border-border bg-card text-foreground hover:border-accent hover:text-accent";

  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className={`${base} ${styles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
