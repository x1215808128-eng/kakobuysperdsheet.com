import { ContactPromoCard } from "@/components/contact-promo-card";

export function HeroContactPromo({ className }: { className?: string }) {
  return (
    <ContactPromoCard
      className={`shrink-0${className ? ` ${className}` : ""}`}
      linkClassName="lg:mx-0"
    />
  );
}
