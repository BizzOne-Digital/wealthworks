import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="WealthWorks home" className={`inline-flex shrink-0 ${className}`}>
      <Image
        src="/images/logo/wealthworks-logo.png"
        alt="WealthWorks — Since 1997"
        width={216}
        height={59}
        priority
        className="h-10 w-auto sm:h-12"
      />
    </Link>
  );
}
