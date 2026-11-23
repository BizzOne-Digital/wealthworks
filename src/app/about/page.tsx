import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  CircleCheck,
  Compass,
  CreditCard,
  Handshake,
  Lightbulb,
  Mail,
  Phone,
  Rocket,
  Sparkles,
  Target,
  Telescope,
  Watch,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { CTASection } from "@/components/shared/CTASection";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us — Empowering Tomorrow Since 1997",
  description:
    "Learn about WealthWorks, LLC: bringing future technologies to the world since 1997 through payment technology, AI products, software and business innovation.",
  alternates: { canonical: "/about" },
};

const focusAreas = [
  { icon: CreditCard, title: "Payment Technology", text: "Modern merchant payment options, including accepting crypto and getting paid in USD through Miracle Pay." },
  { icon: Watch, title: "AI Products", text: "Next-generation wearable and smart devices for a more connected life." },
  { icon: BrainCircuit, title: "AI Software", text: "Emerging artificial intelligence tools with practical business applications." },
  { icon: Lightbulb, title: "Business Innovation", text: "New opportunities and ideas that help owners and entrepreneurs move forward." },
];

const reasons = [
  { icon: Handshake, title: "A real relationship", text: "You work directly with Barry Phoenix, not a call center." },
  { icon: Compass, title: "Clear guidance", text: "Straightforward explanations of each opportunity so you can decide with confidence." },
  { icon: Rocket, title: "Future-focused", text: "We keep an eye on emerging technologies so you don't have to." },
  { icon: Sparkles, title: "Since 1997", text: "A journey that started in 1997 and continues to evolve with technology." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow={`About WealthWorks · Since ${site.established}`}
        title={<>Empowering <span className="text-gold-gradient">Tomorrow</span></>}
        description="WealthWorks, LLC brings future technologies to the world, helping business owners, merchants and innovators access the tools that will shape the next generation of business."
        image="/images/photos/office.jpg"
        imageAlt="WealthWorks branded corporate office lobby"
      >
        <Link href="/contact" className="btn-primary">
          Talk to Barry Phoenix <ArrowRight className="size-4" aria-hidden />
        </Link>
        <Link href="/services" className="btn-outline">Our Services</Link>
      </PageHero>

      {/* Introduction */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Who We Are</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              A technology and business solutions company with a <span className="text-green-gradient">future-first mindset</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              WealthWorks works at the meeting point of technology, financial technology and business solutions. We
              introduce business owners, entrepreneurs and merchants to technologies and opportunities that can help
              them operate smarter and grow.
            </p>
            <p>
              Our work today centers on modern payment technology, wearable AI products and AI software, alongside
              carefully selected third-party opportunities that we share with our network.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Journey */}
      <section className="section bg-soft">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Journey"
            title={<>From 1997 to <span className="text-gold-gradient">the future</span></>}
            description="Every chapter of our story has been about one thing: helping people embrace what comes next."
          />
          <ol className="relative mx-auto mt-16 max-w-4xl">
            <span aria-hidden className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-gold via-emerald to-fresh/0 md:left-1/2" />
            {[
              { year: "1997", title: "The journey begins", text: "WealthWorks begins its journey, built on a commitment to opportunity and forward thinking." },
              { year: "Today", title: "Technology at the core", text: "We bring payment technology, AI products and AI software to merchants and business owners." },
              { year: "Next", title: "Bringing the future to the world", text: "We continue introducing evolving technologies as they become practical for real businesses." },
            ].map((m, i) => (
              <li key={m.year} className={`relative mb-12 pl-20 last:mb-0 md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-14" : "md:pl-0 md:pr-14 md:text-right"}`}>
                <span
                  aria-hidden
                  className={`absolute left-0 top-0 grid size-12 place-items-center rounded-full border-4 border-white bg-gradient-to-br from-forest to-fresh text-white shadow-lg ${i % 2 ? "md:-left-6" : "md:left-auto md:-right-6"}`}
                >
                  <span className="size-2.5 rounded-full bg-gold-light" />
                </span>
                <Reveal delay={i * 0.1}>
                  <div className="card p-7">
                    <p className="font-display text-3xl font-extrabold text-gold-gradient">{m.year}</p>
                    <h3 className="mt-2 text-xl font-bold text-ink">{m.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{m.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="card card-hover relative h-full overflow-hidden p-9 sm:p-11">
              <div aria-hidden className="absolute -right-16 -top-16 size-56 rounded-full bg-fresh/15 blur-[60px]" />
              <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-forest to-fresh text-white">
                <Target className="size-7" aria-hidden />
              </span>
              <h2 className="mt-7 text-3xl font-extrabold">Our Mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                To bring future technologies to the world by connecting businesses and individuals with innovative
                payment solutions, AI products and smart business tools that create real value.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="relative h-full overflow-hidden rounded-3xl bg-[radial-gradient(120%_120%_at_0%_0%,#1d4a38_0%,#0f2a20_50%,#0a1a14_100%)] p-9 text-white shadow-[0_30px_60px_-30px_rgba(15,42,32,0.7)] sm:p-11">
              <div aria-hidden className="absolute -bottom-20 -right-10 size-64 rounded-full bg-gold/30 blur-[70px]" />
              <span className="relative grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-gold to-gold-light text-forest">
                <Telescope className="size-7" aria-hidden />
              </span>
              <h2 className="relative mt-7 text-3xl font-extrabold">Our Vision</h2>
              <p className="relative mt-4 text-lg leading-relaxed text-white/80">
                A future where every business — large or small — can access and benefit from the technologies
                shaping tomorrow.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section bg-soft">
        <div className="container-x">
          <SectionHeading eyebrow="Focus Areas" title="What we focus on" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <article className="card card-hover group h-full p-7">
                  <span className="grid size-14 place-items-center rounded-2xl bg-soft text-emerald ring-1 ring-line transition group-hover:bg-forest group-hover:text-gold-light">
                    <Icon className="size-7" strokeWidth={1.6} aria-hidden />
                  </span>
                  <h3 className="mt-6 text-xl font-bold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Barry */}
      <section className="section">
        <div className="container-x">
          <div className="grid items-center gap-12 overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-white via-white to-[#fdf6e2] p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
            <Reveal className="relative mx-auto w-full max-w-sm">
              <div aria-hidden className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold-light via-white to-fresh/50 opacity-70" />
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[#191630] shadow-2xl">
                <Image
                  src="/images/partners/miraclepay-merchant-flyer.jpg"
                  alt="Miracle Pay merchant flyer naming Barry Phoenix as MiraclePay Merchant Consultant"
                  width={1320}
                  height={1708}
                  sizes="(min-width: 1024px) 380px, 90vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow">Meet Your Consultant</p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{site.representative.name}</h2>
              <p className="mt-2 font-display text-lg font-semibold text-gold-deep">{site.representative.title}</p>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Barry Phoenix represents WealthWorks and serves as a MiraclePay Merchant Consultant. He helps merchants
                and business owners understand modern payment options, walks them through getting started, and
                introduces the technology and opportunities WealthWorks shares.
              </p>
              <ul className="mt-6 space-y-3">
                {["Merchant acquisition for Miracle Pay", "Personal, one-to-one guidance", "Introductions to WealthWorks opportunities"].map((t) => (
                  <li key={t} className="flex gap-3">
                    <CircleCheck className="mt-0.5 size-5 shrink-0 text-emerald" aria-hidden /> {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={site.contact.phoneHref} className="btn-primary">
                  <Phone className="size-4" aria-hidden /> {site.contact.phone}
                </a>
                <a href={`mailto:${site.contact.email}`} className="btn-outline">
                  <Mail className="size-4" aria-hidden /> Email Barry
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section bg-soft">
        <div className="container-x">
          <SectionHeading eyebrow="Why WealthWorks" title={<>Why connect with <span className="text-green-gradient">WealthWorks?</span></>} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-line bg-white p-7">
                  <Icon className="size-8 text-gold" strokeWidth={1.6} aria-hidden />
                  <h3 className="mt-5 text-lg font-bold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-20 sm:pt-24" />
      <CTASection title="Let's build what's next, together" />
    </>
  );
}
