import { solutions } from "@/data/services";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Solutions() {
  return (
    <section className="section bg-soft" aria-labelledby="solutions-title">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Solutions"
          title={<span id="solutions-title">Technology built for <span className="text-green-gradient">what&apos;s next</span></span>}
          description="From modern merchant payments to intelligent devices and AI software, Wealthworks introduces practical technology that helps businesses grow."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.1} className={i === 2 ? "md:col-span-2 lg:col-span-1" : ""}>
              <ServiceCard item={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
