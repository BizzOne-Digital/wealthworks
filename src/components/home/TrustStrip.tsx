import { CalendarDays, Globe2, Headset, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

const items = [
  { icon: CalendarDays, title: "Since 1997", text: "A long-standing name in business innovation", color: "text-emerald" },
  { icon: Globe2, title: "Future-Focused Solutions", text: "Emerging technology for modern businesses", color: "text-gold-deep" },
  { icon: TrendingUp, title: "Business Growth", text: "Tools and opportunities to scale", color: "text-emerald" },
  { icon: Headset, title: "Personalized Support", text: "Talk directly with a real person", color: "text-gold-deep" },
];

export function TrustStrip() {
  return (
    <section aria-label="Why WealthWorks" className="relative z-10 -mt-8 pb-4 sm:-mt-10">
      <div className="container-x">
        <Reveal>
          <ul className="card grid grid-cols-1 divide-y divide-line px-2 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {items.map(({ icon: Icon, title, text, color }) => (
              <li key={title} className="flex items-center gap-4 px-5 py-6 sm:py-7">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-soft ring-1 ring-line">
                  <Icon className={`size-7 ${color}`} strokeWidth={1.6} aria-hidden />
                </span>
                <span>
                  <span className="block font-display text-lg font-bold text-ink">{title}</span>
                  <span className="block text-sm leading-snug text-muted">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
