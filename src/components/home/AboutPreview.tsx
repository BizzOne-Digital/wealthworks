import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { site } from "@/data/site";

const points = [
  "Introducing evolving payment, AI and business technologies",
  "Connecting business owners with practical growth opportunities",
  "Direct, personal guidance from Barry Phoenix",
];

export function AboutPreview() {
  return (
    <section className="section" aria-labelledby="about-preview-title">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(15,42,32,0.55)]">
            <Image
              src="/images/photos/meeting.jpg"
              alt="Business team collaborating on laptops in a modern office"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover transition-transform duration-[1.2s] hover:scale-105"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent" />
          </div>
          <div className="absolute -bottom-8 right-4 w-56 rounded-3xl border border-white bg-white/95 p-5 shadow-[0_30px_60px_-30px_rgba(15,42,32,0.6)] backdrop-blur sm:-right-6 sm:w-64">
            <p className="font-display text-5xl font-extrabold text-gold-gradient">{site.established}</p>
            <p className="mt-1 text-sm font-medium text-ink">The year our journey began</p>
            <div className="gold-rule mt-4" />
          </div>
          <div aria-hidden className="absolute -left-5 -top-5 -z-10 size-32 rounded-3xl bg-[radial-gradient(#1faf5a_1.2px,transparent_1.2px)] [background-size:12px_12px] opacity-40" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">About WealthWorks</p>
          <h2 id="about-preview-title" className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.9rem]">
            Empowering Tomorrow <span className="text-gold-gradient">Since 1997</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            WealthWorks began its journey in 1997 with a simple focus: help people and businesses take advantage of
            what comes next. Today, that means bringing modern payment solutions, AI products and smart business
            technology to the entrepreneurs and merchants we work with.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-ink">
                <CircleCheck className="mt-0.5 size-5 shrink-0 text-emerald" aria-hidden />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <Link href="/about" className="btn-primary mt-10">
            More About Us <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
