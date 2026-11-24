import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm, ContactFormWithParams } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/shared/Reveal";
import { SwooshBg } from "@/components/shared/PageHero";
import { ExternalCta } from "@/components/shared/ExternalCta";
import { CTASection } from "@/components/shared/CTASection";
import { fullAddress, referralLinks, site } from "@/data/site";
import { externalLinkProps } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact — Let's Connect",
  description: `Contact Wealthworks and Barry Phoenix. Call ${site.contact.phone}, email ${site.contact.email}, or send an inquiry about Miracle Pay, AI products and more.`,
  alternates: { canonical: "/contact" },
};

const cards = [
  { icon: Phone, label: "Call us", value: site.contact.phone, href: site.contact.phoneHref, external: false },
  { icon: Mail, label: "Email us", value: site.contact.email, href: `mailto:${site.contact.email}`, external: false },
  { icon: MapPin, label: "Visit / mail", value: fullAddress, href: site.contact.mapsUrl, external: true },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-soft to-white">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 size-[560px] rounded-full bg-fresh/15 blur-[110px]" />
        <div aria-hidden className="pointer-events-none absolute -left-32 top-20 size-[380px] rounded-full bg-emerald/10 blur-[110px]" />
        <SwooshBg />
        <div className="container-x relative py-16 text-center sm:py-24">
          <Reveal>
            <p className="eyebrow justify-center">Contact Wealthworks</p>
            <h1 className="mt-4 text-5xl font-extrabold sm:text-6xl lg:text-7xl">
              Let&apos;s <span className="text-gold-gradient">Connect</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Questions about Miracle Pay, AI products or any opportunity we share? Reach out to Barry Phoenix
              directly — real people, real answers.
            </p>
          </Reveal>
          <ul className="mx-auto mt-14 grid max-w-5xl gap-5 text-left md:grid-cols-3">
            {cards.map(({ icon: Icon, label, value, href, external }, i) => (
              <li key={label} className="h-full">
                <Reveal delay={0.08 * i} className="h-full">
                  <a
                    href={href}
                    {...(external ? externalLinkProps : {})}
                    className="card card-hover group flex h-full items-start gap-4 p-6"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-forest to-fresh text-white transition group-hover:from-emerald group-hover:to-fresh">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">{label}</span>
                      <span className="mt-1 block break-words font-display font-bold leading-snug text-ink">{value}</span>
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Form + side panel */}
      <section className="section pt-8">
        <div className="container-x grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <div className="card p-6 sm:p-10">
              <h2 className="text-3xl font-extrabold">Send an inquiry</h2>
              <p className="mt-2 text-muted">Fields marked * are required.</p>
              <div className="mt-8">
                <Suspense fallback={<ContactForm />}>
                  <ContactFormWithParams />
                </Suspense>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-line bg-white">
                <div className="relative aspect-[16/10]">
                  <Image src="/images/photos/city.jpg" alt="Modern office with city views" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#03301a]/85 to-transparent" />
                  <p className="absolute bottom-4 left-5 flex items-center gap-2 font-display font-bold text-white">
                    <MapPin className="size-4 text-gold-light" aria-hidden /> Atlanta, Georgia
                  </p>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-lg font-bold">Company Address</h2>
                  <address className="mt-2 not-italic leading-relaxed text-muted">
                    {site.name}<br />
                    {site.contact.address.line1}<br />
                    {site.contact.address.city}, {site.contact.address.region} {site.contact.address.postalCode}
                  </address>
                  <a href={site.contact.mapsUrl} {...externalLinkProps} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald hover:text-forest">
                    Open in Google Maps <ArrowRight className="size-4" aria-hidden />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex items-start gap-4 rounded-3xl border border-line bg-soft p-6">
                <Clock className="mt-0.5 size-5 shrink-0 text-emerald" aria-hidden />
                <p className="text-sm leading-relaxed text-muted">
                  Prefer to talk? Call <a className="font-semibold text-ink" href={site.contact.phoneHref}>{site.contact.phone}</a>.
                  If Barry is unavailable, leave a message and he will get back to you.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Merchant consultation */}
      <section className="section bg-soft">
        <div className="container-x">
          <Reveal>
            <div className="grid items-center gap-10 overflow-hidden rounded-[2rem] bg-[#191630] p-8 text-white sm:p-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="eyebrow text-[#c4b5fd]">Merchant Consultation</p>
                <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Accept crypto. Get paid in USD.</h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/75">
                  Talk with {site.representative.name}, MiraclePay Merchant Consultant, about online checkout, dynamic QR
                  payments and WooCommerce — or start your merchant sign-up right now.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ExternalCta href={referralLinks.miraclePay} variant="violet">Start Merchant Sign-Up</ExternalCta>
                  <a href={site.contact.phoneHref} className="btn-ghost-light">
                    <Phone className="size-4" aria-hidden /> Book a Call
                  </a>
                </div>
                <p className="mt-4 text-xs text-white/50">Miracle Pay is an independent company. This is a Wealthworks referral link.</p>
              </div>
              <div className="mx-auto w-full max-w-[240px] rounded-3xl bg-white p-4 text-center text-ink">
                <p className="text-xs font-bold uppercase tracking-widest">Scan to get started</p>
                <Image src="/images/partners/miraclepay-qr.png" alt="Miracle Pay personal referral QR code" width={355} height={353} className="mt-3 h-auto w-full" />
                <p className="mt-2 text-xs text-muted">Personal referral QR</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="pt-20 sm:pt-24" />
      <CTASection title="The future is one conversation away" />
    </>
  );
}
