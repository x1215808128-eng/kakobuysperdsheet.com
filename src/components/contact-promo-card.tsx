import Image from "next/image";
import Link from "next/link";

export const CONTACT_IMAGE = "/qc/contact-customer-service-card.png?v=2";
export const CONTACT_IMAGE_WIDTH = 1497;
export const CONTACT_IMAGE_HEIGHT = 1015;

type ContactPromoCardProps = {
  className?: string;
  showLabel?: boolean;
  linkClassName?: string;
};

export function ContactPromoCard({
  className = "",
  showLabel = true,
  linkClassName = "",
}: ContactPromoCardProps) {
  return (
    <div className={`mx-auto flex w-fit flex-col items-center ${className}`}>
      <Link
        href="/kakobuy-spreadsheet-contact"
        className={`group hud-frame hud-frame--compact block w-[min(168px,calc(100vw-3rem))] shrink-0 overflow-hidden border border-border bg-black transition-colors hover:border-accent/70 hover:shadow-[0_0_20px_rgba(191,255,0,0.06)]${linkClassName ? ` ${linkClassName}` : ""}`}
        aria-label="Contact customer service on WhatsApp"
      >
        <Image
          src={CONTACT_IMAGE}
          alt="Contact Kakobuy customer service — WhatsApp QR code"
          width={CONTACT_IMAGE_WIDTH}
          height={CONTACT_IMAGE_HEIGHT}
          unoptimized
          sizes="168px"
          className="block h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </Link>
      {showLabel && (
        <p className="mt-2 text-center font-display text-[11px] font-bold uppercase tracking-[0.14em] text-foreground sm:mt-2.5 sm:text-xs sm:tracking-[0.16em]">
          Contact Us
        </p>
      )}
    </div>
  );
}
