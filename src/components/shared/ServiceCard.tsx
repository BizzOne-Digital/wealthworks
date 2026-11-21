import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Solution } from "@/data/services";
import { cn } from "@/lib/utils";

const accents = {
  purple: {
    bg: "from-[#f3edff] via-white to-white",
    glow: "bg-[#8b5cf6]/25",
    chip: "bg-gradient-to-br from-[#5b21b6] to-[#8b5cf6]",
    text: "text-[#6d28d9]",
  },
  green: {
    bg: "from-[#e9f8ef] via-white to-white",
    glow: "bg-fresh/25",
    chip: "bg-gradient-to-br from-forest to-fresh",
    text: "text-emerald",
  },
  gold: {
    bg: "from-[#fdf6e2] via-white to-white",
    glow: "bg-gold/25",
    chip: "bg-gradient-to-br from-gold-deep to-gold-light",
    text: "text-gold-deep",
  },
};

export function ServiceCard({ item }: { item: Solution }) {
  const a = accents[item.accent];
  return (
    <Link
      href={item.href}
      className={cn(
        "card card-hover group relative flex h-full flex-col overflow-hidden bg-gradient-to-br p-7",
        a.bg,
      )}
    >
      <div aria-hidden className={cn("absolute -bottom-16 -right-16 size-56 rounded-full blur-[60px] transition-opacity duration-500 group-hover:opacity-100 opacity-70", a.glow)} />
      <p className={cn("text-xs font-semibold uppercase tracking-[0.22em]", a.text)}>{item.eyebrow}</p>
      <h3 className="mt-3 max-w-[14ch] text-2xl font-extrabold leading-tight text-ink">{item.title}</h3>
      <p className="mt-3 max-w-[30ch] text-[15px] leading-relaxed text-muted">{item.description}</p>
      <div className="relative mt-6 flex flex-1 items-end justify-between gap-4">
        <span className={cn("inline-flex items-center gap-2 text-sm font-semibold", a.text)}>
          {item.cta}
        </span>
        <div className="relative h-40 w-44 shrink-0 sm:h-44 sm:w-48">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="200px"
            className="object-contain mix-blend-multiply transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-105"
          />
        </div>
      </div>
      <span
        aria-hidden
        className={cn(
          "absolute bottom-6 right-6 grid size-11 place-items-center rounded-full text-white shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:translate-x-1",
          a.chip,
        )}
      >
        <ArrowRight className="size-5" />
      </span>
    </Link>
  );
}
