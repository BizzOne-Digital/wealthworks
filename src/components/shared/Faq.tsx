import { Plus } from "lucide-react";

/** Accessible FAQ built on native <details> — no client JavaScript needed. */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((f) => (
        <details key={f.q} className="group card overflow-hidden open:shadow-[0_20px_50px_-30px_rgba(6,75,36,0.4)]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-display text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-soft text-emerald transition-transform duration-300 group-open:rotate-45 group-open:bg-forest group-open:text-gold-light">
              <Plus className="size-4" aria-hidden />
            </span>
          </summary>
          <p className="px-6 pb-6 leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </div>
  );
}
