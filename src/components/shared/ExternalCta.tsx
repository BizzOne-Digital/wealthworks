import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn, externalLinkProps } from "@/lib/utils";

/** External referral button. Pass the exact referral URL from data/site.ts. */
export function ExternalCta({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "gold" | "outline" | "light" | "violet";
  className?: string;
}) {
  const v = {
    primary: "btn-primary",
    gold: "btn-gold",
    outline: "btn-outline",
    light: "btn-ghost-light",
    violet: "btn-violet",
  }[variant];
  return (
    <a href={href} {...externalLinkProps} className={cn(v, className)}>
      {children}
      <ArrowUpRight className="size-4" aria-hidden />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

export function ReferralDisclosure({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <p className={cn("text-xs leading-relaxed", light ? "text-white/60" : "text-muted", className)}>
      Disclosure: Some links on this page are WealthWorks referral or partner links to independent third-party
      companies. WealthWorks may be credited for sign-ups made through them.
    </p>
  );
}
