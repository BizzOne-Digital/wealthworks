import {
  AppWindow,
  Bird,
  BotMessageSquare,
  Camera,
  Globe2,
  MessageCircle,
  Music,
  Phone,
  Smartphone,
  ThumbsUp,
} from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

/** Figures from the client's webinar slide "Fastest Adoption Rates". */
const rows = [
  { name: "Telephone", time: "75 years", icon: Phone },
  { name: "Mobile phone", time: "16 years", icon: Smartphone },
  { name: "World Wide Web", time: "7 years", icon: Globe2 },
  { name: "iTunes", time: "6.5 years", icon: Music },
  { name: "Twitter", time: "5 years", icon: Bird },
  { name: "Facebook", time: "4.5 years", icon: ThumbsUp },
  { name: "WhatsApp", time: "3.5 years", icon: MessageCircle },
  { name: "Instagram", time: "2.5 years", icon: Camera },
  { name: "Apple App Store", time: "2 years", icon: AppWindow },
  { name: "ChatGPT", time: "2 months", icon: BotMessageSquare },
];

export function AdoptionRates() {
  return (
    <section className="section bg-soft" aria-labelledby="adoption-title">
      <div className="container-x">
        <SectionHeading
          eyebrow="Fastest Adoption Rates"
          title={<span id="adoption-title">AI is being adopted <span className="text-green-gradient">faster than anything before</span></span>}
          description="Time to reach 100 million users worldwide. Each new technology has reached people faster than the last, and AI has set a new record."
        />
        <Reveal className="mt-14">
          <ol className="grid gap-3 sm:grid-cols-2">
            {rows.map(({ name, time, icon: Icon }, i) => {
              const record = i === rows.length - 1;
              return (
                <li
                  key={name}
                  className={
                    record
                      ? "flex items-center gap-4 rounded-2xl bg-gradient-to-br from-forest to-emerald p-4 text-white shadow-[0_20px_40px_-24px_rgba(6,75,36,0.8)] sm:col-span-2 sm:p-5"
                      : "flex items-center gap-4 rounded-2xl border border-line bg-white p-4"
                  }
                >
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-full font-display text-sm font-extrabold ${record ? "bg-gold text-forest" : "bg-soft text-forest"}`}
                  >
                    {i + 1}
                  </span>
                  <Icon className={`size-6 shrink-0 ${record ? "text-gold-light" : "text-emerald"}`} strokeWidth={1.7} aria-hidden />
                  <span className={`flex-1 font-semibold ${record ? "text-lg" : "text-ink"}`}>{name}</span>
                  <span className={`font-display font-extrabold ${record ? "text-2xl text-gold-light sm:text-3xl" : "text-lg text-forest"}`}>
                    {time}
                  </span>
                </li>
              );
            })}
          </ol>
          <p className="mt-5 text-center text-xs text-muted">Approximate time to reach 100 million users, as commonly reported.</p>
        </Reveal>
      </div>
    </section>
  );
}
