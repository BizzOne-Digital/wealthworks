import { OpportunityCard } from "@/components/shared/OpportunityCard";
import { ReferralDisclosure } from "@/components/shared/ExternalCta";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { opportunities } from "@/data/services";

export function FeaturedOpportunities() {
  return (
    <section className="section bg-soft" aria-labelledby="opps-title">
      <div className="container-x">
        <SectionHeading
          eyebrow="Featured Opportunities"
          title={<span id="opps-title">Opportunities we <span className="text-gold-gradient">introduce</span></span>}
          description="WealthWorks connects its network with independent third-party companies and programs. Each card below links directly to the provider."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((o, i) => (
            <Reveal key={o.id} delay={i * 0.1} className={i === 2 ? "md:col-span-2 lg:col-span-1" : ""}>
              <OpportunityCard item={o} />
            </Reveal>
          ))}
        </div>
        <ReferralDisclosure className="mx-auto mt-10 max-w-2xl text-center" />
      </div>
    </section>
  );
}
