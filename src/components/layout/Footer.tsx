import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { site, referralLinks, fullAddress } from "@/data/site";
import { externalLinkProps } from "@/lib/utils";
import { SocialLinks } from "./SocialLinks";

async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

const partnerLinks = [
  { label: "Miracle Pay Merchant Sign-Up", href: referralLinks.miraclePay },
  { label: "Bellator Life", href: referralLinks.bellatorLife },
  { label: "BG Lifestyle Travel Club", href: referralLinks.bgLifestyle },
];

export async function Footer() {
  const year = await getYear();
  return (
    <footer className="relative overflow-hidden bg-[#03210f] text-white/75">
      <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10%] size-[520px] rounded-full bg-emerald/25 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute bottom-[-30%] left-[-10%] size-[420px] rounded-full bg-fresh/10 blur-[120px]" />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.3fr]">
        <div>
          <div className="inline-flex rounded-2xl bg-white px-4 py-3">
            <Image src="/images/logo/wealthworks-logo.png" alt="Wealthworks — Since 1997" width={216} height={59} className="h-10 w-auto" />
          </div>
          <p className="mt-6 max-w-sm leading-relaxed">
            {site.statement} Payment technology, AI products and smart business solutions — since {site.established}.
          </p>
          <SocialLinks className="mt-6" />
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Pages</h2>
          <ul className="mt-5 space-y-3">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Opportunities</h2>
          <ul className="mt-5 space-y-3">
            {partnerLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} {...externalLinkProps} className="inline-flex items-center gap-1.5 transition hover:text-white">
                  {l.label} <ArrowUpRight className="size-3.5" aria-hidden />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-white/50">
            These are third-party referral links. Wealthworks does not own these programs.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</h2>
          <ul className="mt-5 space-y-4">
            <li>
              <a href={site.contact.phoneHref} className="flex items-start gap-3 transition hover:text-white">
                <Phone className="mt-0.5 size-4 shrink-0 text-fresh" aria-hidden /> {site.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="flex items-start gap-3 break-all transition hover:text-white">
                <Mail className="mt-0.5 size-4 shrink-0 text-fresh" aria-hidden /> {site.contact.email}
              </a>
            </li>
            <li>
              <a href={site.contact.mapsUrl} {...externalLinkProps} className="flex items-start gap-3 transition hover:text-white">
                <MapPin className="mt-0.5 size-4 shrink-0 text-fresh" aria-hidden />
                <span>{fullAddress}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {site.name}. All rights reserved.</p>
          <p>Representative: {site.representative.name}</p>
        </div>
      </div>
    </footer>
  );
}
