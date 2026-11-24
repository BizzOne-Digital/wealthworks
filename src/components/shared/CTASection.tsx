import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { referralLinks, site } from "@/data/site";
import { ExternalCta } from "./ExternalCta";
import { Reveal } from "./Reveal";

type Props = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Ready to Explore the Future?",
  description = "Connect with Wealthworks and discover technology-driven opportunities for your business.",
}: Props) {
  return (
    <section className="section pt-0">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(120%_140%_at_0%_0%,#0a6b3c_0%,#064b24_45%,#03301a_100%)] px-6 py-14 text-center shadow-[0_40px_80px_-40px_rgba(6,75,36,0.8)] sm:px-12 sm:py-20">
            <div aria-hidden className="absolute -right-24 -top-24 size-80 rounded-full bg-emerald/40 blur-[100px]" />
            <div aria-hidden className="absolute -bottom-32 -left-20 size-96 rounded-full bg-fresh/30 blur-[100px]" />
            <svg aria-hidden viewBox="0 0 800 300" className="absolute inset-0 h-full w-full opacity-20" preserveAspectRatio="none">
              <path d="M0 240 C 220 120, 520 320, 800 90" fill="none" stroke="#ffffff" strokeWidth="1.5" />
              <path d="M0 270 C 260 160, 540 330, 800 130" fill="none" stroke="#ffffff" strokeWidth="0.8" />
            </svg>
            <div className="relative mx-auto max-w-2xl">
              <p className="eyebrow justify-center text-white/80">Wealthworks · Since {site.established}</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-5xl">{title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-white/80">{description}</p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn-gold">
                  Contact {site.representative.name} <ArrowRight className="size-4" aria-hidden />
                </Link>
                <ExternalCta href={referralLinks.miraclePay} variant="light">
                  Explore Merchant Solutions
                </ExternalCta>
              </div>
              <a href={site.contact.phoneHref} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white">
                <Phone className="size-4" aria-hidden /> Or call {site.contact.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
