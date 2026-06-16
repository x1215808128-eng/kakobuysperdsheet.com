import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/logo.png?v=8";

export function SiteLogo() {
  return (
    <Link
      href="/"
      className="group block shrink-0 origin-left scale-[1.2] sm:scale-[1.35] lg:scale-[1.5]"
      aria-label="KAKOBUY home"
    >
      <Image
        src={LOGO_SRC}
        alt="KAKOBUY — Comfort. Style. Every Day. Verified. Trusted."
        width={600}
        height={150}
        unoptimized
        priority
        className="h-[100px] w-auto sm:h-[110px] lg:h-[120px]"
      />
    </Link>
  );
}
