import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  CircleCheck,
  CreditCard,
  FileCheck2,
  Globe2,
  Plane,
  QrCode,
  Rocket,
  Settings2,
  ShoppingCart,
  Store,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { CTASection } from "@/components/shared/CTASection";
import { ExternalCta, ReferralDisclosure } from "@/components/shared/ExternalCta";
import { Faq } from "@/components/shared/Faq";
import { faqs, opportunities } from "@/data/services";
import { videos } from "@/data/media";
import { VideoPlayer } from "@/components/shared/VideoPlayer";
import { referralLinks, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Services — Miracle Pay, AI Products & Opportunities",
  description:
    "Explore Miracle Pay merchant solutions (accept crypto, get paid in USD), wearable AI technology, AI software, Bellator Life and the BG Lifestyle Luxury Travel Club through Wealthworks.",
  alternates: { canonical: "/services" },
};

const merchantSteps = [
  { icon: Store, label: "Merchant sign-up" },
  { icon: FileCheck2, label: "KYC verification" },
  { icon: Settings2, label: "Activation & integration" },
  { icon: Globe2, label: "Go live & accept crypto payments" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Services & Opportunities"
        title={<>Solutions for the <span className="text-gold-gradient">next era</span> of business</>}
        description="Payment technology, AI products and selected opportunities — introduced by Wealthworks and explained clearly, so you can choose what fits your business."
        image="/images/photos/dashboard.jpg"
        imageAlt="Business analytics dashboard on a laptop screen"
      >
        <a href="#miracle-pay" className="btn-primary">
          Start with Miracle Pay <ArrowRight className="size-4" aria-hidden />
        </a>
        <a href="#overview" className="btn-outline">Compare Options</a>
      </PageHero>

      {/* Quick nav */}
      <nav aria-label="Services on this page" className="sticky top-20 z-30 border-y border-line bg-white/90 backdrop-blur-xl">
        <ul className="container-x flex gap-2 overflow-x-auto py-3 text-sm font-medium [scrollbar-width:none]">
          {[
            ["miracle-pay", "Miracle Pay"],
            ["wearable-ai", "Wearable AI"],
            ["ai-software", "AI Software"],
            ["bellator-life", "Bellator Life"],
            ["bg-lifestyle", "BG Lifestyle"],
            ["faq", "FAQ"],
          ].map(([id, label]) => (
            <li key={id} className="shrink-0">
              <a href={`#${id}`} className="inline-flex rounded-full px-4 py-2 text-ink/75 transition hover:bg-soft hover:text-forest">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 1. Miracle Pay */}
      <section id="miracle-pay" className="section relative overflow-hidden bg-[linear-gradient(180deg,#faf7ff_0%,#ffffff_100%)]">
        <div aria-hidden className="pointer-events-none absolute -right-40 top-10 size-[520px] rounded-full bg-[#8b5cf6]/15 blur-[120px]" />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-[#6d28d9]">01 · Merchant Payments</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">
              Miracle Pay <span className="block text-[#6d28d9]">Merchant Solutions</span>
            </h2>
            <p className="mt-3 font-display text-2xl font-bold text-ink">Accept crypto. Get paid in USD.</p>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Miracle Pay gives customers a modern way to pay while keeping dollars at the center of your business.
              Wealthworks introduces merchants to Miracle Pay, and Barry Phoenix — a MiraclePay Merchant Consultant —
              helps you get started.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                { icon: ShoppingCart, label: "Online checkout" },
                { icon: QrCode, label: "Dynamic QR payments" },
                { icon: CreditCard, label: "WooCommerce" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 rounded-2xl border border-[#e9e1fb] bg-white p-4 text-sm font-semibold">
                  <Icon className="size-5 shrink-0 text-[#6d28d9]" aria-hidden /> {label}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ExternalCta href={referralLinks.miraclePay} variant="violet">
                Become a Miracle Pay Merchant
              </ExternalCta>
              <Link href="/contact?interest=Miracle%20Pay" className="btn-outline">Ask Barry a Question</Link>
            </div>
            <p className="mt-4 text-xs text-muted">Miracle Pay is an independent company. This is a Wealthworks referral link.</p>
          </Reveal>

          <Reveal delay={0.12} className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(76,29,149,0.6)]">
              <Image
                src="/images/photos/payment.jpg"
                alt="Miracle Pay payment terminal"
                width={1400}
                height={934}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="h-auto w-full"
              />
            </div>
            <div className="absolute -bottom-10 -left-2 w-40 animate-float rounded-3xl border border-white bg-white p-3 shadow-2xl sm:-left-8 sm:w-48">
              <Image src="/images/partners/miraclepay-qr.png" alt="Miracle Pay personal referral QR code for Barry Phoenix" width={355} height={353} className="h-auto w-full" />
              <p className="mt-2 text-center text-[11px] font-semibold uppercase tracking-wider text-ink">Scan to get started</p>
            </div>
          </Reveal>
        </div>

        {/* Merchant path */}
        <div className="container-x relative mt-24">
          <Reveal>
            <div className="rounded-[2rem] bg-[#191630] p-8 text-white sm:p-10">
              <h3 className="text-center font-display text-xl font-bold sm:text-2xl">The path to going live</h3>
              <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {merchantSteps.map(({ icon: Icon, label }, i) => (
                  <li key={label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full border border-[#a78bfa]/50 text-[#c4b5fd]">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block font-display text-2xl font-extrabold text-[#c4b5fd]">{i + 1}</span>
                      <span className="block text-sm font-medium text-white/85">{label}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Wearable AI */}
      <section id="wearable-ai" className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[1.75rem] shadow-[0_40px_80px_-40px_rgba(30,27,75,0.7)]">
              <Image src="/images/partners/bellator-metaterra-ai-one.jpg" alt="Bellator Metaterra AI One wearable promotional graphic" width={1320} height={743} sizes="(min-width: 1024px) 45vw, 100vw" className="h-auto w-full" />
            </div>
            <p className="mt-3 text-center text-xs text-muted">Image: Bellator promotional material for Metaterra AI One.</p>
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <p className="eyebrow">02 · Smart Devices</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">
              Wearable <span className="text-green-gradient">AI Technology</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Wearable devices are becoming smarter every year. Wealthworks introduces next-generation wearables such
              as the Metaterra AI One, featured by Bellator, designed for a more connected, more informed everyday life.
            </p>
            <ul className="mt-7 space-y-3">
              {["Featured device: Metaterra AI One", "Intelligent, connected technology", "Product details shared on request"].map((t) => (
                <li key={t} className="flex gap-3"><CircleCheck className="mt-0.5 size-5 shrink-0 text-emerald" aria-hidden /> {t}</li>
              ))}
            </ul>
            <Link href="/contact?interest=Wearable%20AI%20Products" className="btn-primary mt-8">
              Ask About AI Products <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 3. AI Software */}
      <section id="ai-software" className="section bg-soft">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">03 · Software</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">
              AI Software <span className="text-green-gradient">Solutions</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Artificial intelligence is changing how businesses work. Wealthworks introduces emerging AI software and
              helps business owners understand where it can add value.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                { icon: BrainCircuit, t: "Smarter decisions", d: "Turn business information into clearer insights." },
                { icon: Rocket, t: "Time savings", d: "Reduce repetitive manual work." },
                { icon: Users, t: "Better customer experience", d: "Respond faster and more consistently." },
                { icon: BadgeCheck, t: "Growth-ready", d: "Tools that scale as you do." },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="rounded-2xl border border-line bg-white p-5">
                  <Icon className="size-6 text-gold" aria-hidden />
                  <h3 className="mt-3 font-bold">{t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{d}</p>
                </div>
              ))}
            </div>
            <Link href="/contact?interest=AI%20Software" className="btn-primary mt-8">
              Discover AI Software <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="fade-edges relative">
              <Image src="/images/photos/ai.jpg" alt="Laptop running AI software" width={1400} height={788} sizes="(min-width: 1024px) 45vw, 100vw" className="h-auto w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Bellator Life */}
      <section id="bellator-life" className="section relative overflow-hidden bg-[radial-gradient(120%_100%_at_0%_0%,#13235a_0%,#0b1438_55%,#070b22_100%)] text-white">
        <div aria-hidden className="pointer-events-none absolute -right-32 top-10 size-[480px] rounded-full bg-gold/15 blur-[120px]" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.35fr_0.65fr]">
          <Reveal>
            <p className="eyebrow text-gold-light">04 · Opportunity</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">
              Bellator <span className="text-gold-gradient">Life</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              Bellator Life is an independent membership opportunity that Wealthworks shares with entrepreneurs and
              business builders. Bellator promotes member debit cards and the Metaterra AI One platform. Full program
              details, pricing and terms are provided directly by Bellator Life when you sign up.
            </p>
            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 shadow-2xl">
              <Image src="/images/partners/bellator-debit-cards.jpg" alt="Bellator Life debit card tiers promotional graphic" width={1320} height={743} sizes="(min-width: 1024px) 55vw, 100vw" className="h-auto w-full" />
            </div>
            <p className="mt-3 text-xs text-white/55">Image: Bellator promotional material. Card terms are set by Bellator Life.</p>
            <ExternalCta href={referralLinks.bellatorLife} variant="gold" className="mt-8">Join Bellator Life</ExternalCta>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto w-full max-w-xs lg:max-w-none">
            <VideoPlayer video={videos.businessSystem} className="border border-white/10" />
            <p className="mt-3 text-center text-sm text-white/70">Metaterra AI One — The Business System</p>
          </Reveal>
        </div>
      </section>

      {/* 5. BG Lifestyle */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <article id="bg-lifestyle" className="relative flex min-h-[30rem] scroll-mt-40 flex-col overflow-hidden rounded-3xl text-white shadow-[0_40px_80px_-40px_rgba(6,75,36,0.6)]">
              <Image src="/images/photos/travel.jpg" alt="Tropical beach at sunset" fill sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#03301a] via-[#03301a]/60 to-transparent lg:bg-gradient-to-r lg:from-[#03301a] lg:via-[#03301a]/70" />
              <div className="relative mt-auto flex max-w-xl flex-col p-8 pt-48 sm:p-12 lg:my-auto lg:pt-12">
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-gold to-gold-light text-forest">
                  <Plane className="size-6" aria-hidden />
                </span>
                <p className="eyebrow mt-6 text-gold-light">05 · Luxury Travel</p>
                <h2 className="mt-2 text-3xl font-extrabold">BG Lifestyle Luxury Travel Club</h2>
                <p className="mt-4 leading-relaxed text-white/85">
                  A luxury travel club for people who want more from how they travel. Explore the club, its travel
                  offerings and membership details on the BG Lifestyle website.
                </p>
                <ExternalCta href={referralLinks.bgLifestyle} variant="gold" className="mt-8 self-start">
                  Explore the Travel Club
                </ExternalCta>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Overview / comparison */}
      <section id="overview" className="section scroll-mt-40 bg-soft">
        <div className="container-x">
          <SectionHeading eyebrow="At a Glance" title="Compare the opportunities" description="A simple overview of the external programs Wealthworks introduces." />
          <Reveal className="mt-12">
            <div className="card relative overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <caption className="sr-only">Overview of third-party opportunities</caption>
                <thead>
                  <tr className="border-b border-line bg-soft/60 text-xs uppercase tracking-wider text-muted">
                    <th scope="col" className="px-6 py-4 font-semibold">Program</th>
                    <th scope="col" className="px-6 py-4 font-semibold">Category</th>
                    <th scope="col" className="px-6 py-4 font-semibold">Best for</th>
                    <th scope="col" className="px-6 py-4 font-semibold"><span className="sr-only">Link</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {opportunities.map((o) => (
                    <tr key={o.id}>
                      <th scope="row" className="px-6 py-5 font-display text-base font-bold text-ink">{o.name}</th>
                      <td className="px-6 py-5 text-muted">{o.category}</td>
                      <td className="px-6 py-5 text-muted">{o.bestFor}</td>
                      <td className="px-6 py-5 text-right">
                        <a href={o.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-emerald hover:text-forest">
                          {o.cta} <ArrowRight className="size-4" aria-hidden />
                          <span className="sr-only">(opens in a new tab)</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <ReferralDisclosure className="mx-auto mt-8 max-w-2xl text-center" />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section scroll-mt-40">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Common questions"
            description={<>Still have questions? Call <a className="font-semibold text-emerald underline-offset-4 hover:underline" href={site.contact.phoneHref}>{site.contact.phone}</a> or send a message.</>}
          />
          <Faq items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
