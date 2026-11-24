import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Headset, MessageSquareQuote, Quote, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { CTASection } from "@/components/shared/CTASection";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Testimonials — Client Feedback",
  description:
    "Verified client feedback for Wealthworks will be featured here. Learn about our history since 1997 and how to share your experience.",
  alternates: { canonical: "/testimonials" },
};

/**
 * Add only real, client-approved testimonials here.
 * Example: { quote: "...", name: "Client name", role: "Business, City" }
 */
const testimonials: { quote: string; name: string; role: string }[] = [];

const highlights = [
  { icon: CalendarDays, title: "Since 1997", text: "A journey in business and innovation that began in 1997." },
  { icon: Sparkles, title: "Future-focused", text: "Payment technology, AI products and AI software." },
  { icon: Headset, title: "Personal support", text: "Speak directly with Barry Phoenix." },
  { icon: ShieldCheck, title: "Honest guidance", text: "Clear information on every opportunity we introduce." },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        crumb="Testimonials"
        eyebrow="Client Stories"
        title={<>Real people. <span className="text-gold-gradient">Real results.</span></>}
        description="We believe feedback should be genuine. This page will feature verified stories from the business owners and merchants Wealthworks works with."
        image="/images/photos/meeting.jpg"
        imageAlt="Business professionals working together around a table"
      >
        <Link href="/contact?interest=General%20Inquiry" className="btn-primary">
          Share Your Experience <ArrowRight className="size-4" aria-hidden />
        </Link>
      </PageHero>

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Client Feedback" title="What our clients say" />
          {testimonials.length > 0 ? (
            <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <li key={t.name}>
                  <Reveal delay={i * 0.08} className="card card-hover relative h-full p-8">
                    <Quote className="size-10 text-gold" aria-hidden />
                    <blockquote className="mt-5 text-lg leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
                    <p className="mt-6 font-display font-bold">{t.name}</p>
                    <p className="text-sm text-muted">{t.role}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          ) : (
            <Reveal className="mt-14">
              <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-white via-soft to-soft p-8 text-center sm:p-14">
                <div aria-hidden className="absolute -right-20 -top-20 size-64 rounded-full bg-emerald/15 blur-[80px]" />
                <div aria-hidden className="absolute -bottom-24 -left-16 size-64 rounded-full bg-fresh/20 blur-[80px]" />
                <span className="relative mx-auto grid size-20 place-items-center rounded-3xl bg-gradient-to-br from-forest to-fresh text-gold-light shadow-xl">
                  <MessageSquareQuote className="size-10" aria-hidden />
                </span>
                <h3 className="relative mt-8 text-2xl font-extrabold sm:text-3xl">Verified client feedback is coming soon</h3>
                <p className="relative mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted">
                  We only publish testimonials from real clients, with their permission. As stories are verified, they
                  will be featured here. Have you worked with Wealthworks? We would love to hear from you.
                </p>
                <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/contact?interest=General%20Inquiry" className="btn-primary">
                    Share Your Feedback <ArrowRight className="size-4" aria-hidden />
                  </Link>
                  <a href={`mailto:${site.contact.email}?subject=Wealthworks%20Feedback`} className="btn-outline">
                    Email Your Story
                  </a>
                </div>
              </div>
            </Reveal>
          )}

          {/* Quote-style values preview */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { q: "Bringing future technologies to the world.", by: "The Wealthworks statement" },
              { q: "Accept crypto. Get paid in USD.", by: "Miracle Pay merchant promise" },
              { q: "Real people, real support.", by: "Our service commitment" },
            ].map((item, i) => (
              <Reveal key={item.q} delay={i * 0.08}>
                <figure className="card h-full p-8">
                  <Quote className="size-8 text-gold" aria-hidden />
                  <blockquote className="mt-4 font-display text-xl font-bold leading-snug text-ink">{item.q}</blockquote>
                  <figcaption className="mt-4 text-sm text-muted">— {item.by}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x">
          <SectionHeading eyebrow="Trust & Experience" title={<>Built on a journey <span className="text-green-gradient">since 1997</span></>} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="card h-full p-7">
                  <span className="grid size-14 place-items-center rounded-2xl bg-soft text-emerald ring-1 ring-line">
                    <Icon className="size-7" strokeWidth={1.6} aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-20 sm:pt-24" />
      <CTASection title="Become our next success story" />
    </>
  );
}
