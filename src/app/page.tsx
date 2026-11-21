import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Solutions } from "@/components/home/Solutions";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FeaturedOpportunities } from "@/components/home/FeaturedOpportunities";
import { Innovation } from "@/components/home/Innovation";
import { CTASection } from "@/components/shared/CTASection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Solutions />
      <AboutPreview />
      <FeaturedOpportunities />
      <Innovation />
      <div className="pt-4" />
      <CTASection />
    </>
  );
}
