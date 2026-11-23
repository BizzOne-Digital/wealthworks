import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Opportunity } from "@/data/services";
import { externalLinkProps } from "@/lib/utils";

export function OpportunityCard({ item }: { item: Opportunity }) {
  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.1s] group-hover:scale-110"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0a1a14]/80 via-[#0a1a14]/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest backdrop-blur">
          {item.category}
        </span>
        <span className="absolute bottom-4 left-4 text-xs font-medium uppercase tracking-[0.2em] text-gold-light">
          Third-party program
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl font-extrabold leading-snug text-ink">{item.name}</h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{item.description}</p>
        <p className="mt-5 text-sm text-ink">
          <span className="font-semibold">Best for:</span> {item.bestFor}
        </p>
        <a
          href={item.href}
          {...externalLinkProps}
          className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-forest/15 px-5 py-2.5 text-sm font-semibold text-forest transition group-hover:border-transparent group-hover:bg-forest group-hover:text-white"
        >
          {item.cta} <ArrowUpRight className="size-4" aria-hidden />
          <span className="sr-only">(opens {item.provider} in a new tab)</span>
        </a>
      </div>
    </article>
  );
}
