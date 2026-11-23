import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarDays, Cpu, DollarSign } from "lucide-react";
import { site } from "@/data/site";
import { SwooshBg } from "@/components/shared/PageHero";
import { WatchOverviewButton } from "@/components/shared/WatchOverviewButton";

const d = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_120%_at_80%_0%,#1d4a38_0%,#0f2a20_40%,#0a1a14_100%)] text-white">
      {/* Ambient light */}
      <div aria-hidden className="pointer-events-none absolute -top-48 right-[-12%] size-[680px] rounded-full bg-fresh/20 blur-[130px]" />
      <div aria-hidden className="pointer-events-none absolute -left-40 top-1/3 size-[460px] rounded-full bg-gold/20 blur-[120px]" />
      <SwooshBg className="opacity-90" />

      <div className="container-x relative grid items-center gap-12 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1fr_1.1fr] lg:gap-8 lg:pb-24 lg:pt-20">
        {/* Copy */}
        <div className="relative z-10">
          <p className="eyebrow animate-rise text-gold-light" style={d(0)}>
            WealthWorks <span aria-hidden className="text-gold">|</span> Since {site.established}
          </p>
          <h1 className="mt-5 font-display text-[2.9rem] font-extrabold italic leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.6rem]">
            <span className="block animate-rise text-white pb-1" style={d(120)}>
              The Future in
            </span>
            <span className="block animate-rise text-gold-gradient animate-shimmer pb-2" style={d(260)}>
              Technology
            </span>
          </h1>
          <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-white/75 sm:text-xl" style={d(420)}>
            Bringing future technologies to the world through innovative payment solutions, next-generation AI
            products, and smart business technology.
          </p>
          <div className="mt-9 flex animate-rise flex-col gap-3 sm:flex-row" style={d(560)}>
            <Link href="/services" className="btn-gold px-7">
              Explore Our Solutions <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link href="/about" className="btn-ghost-light px-7">
              Discover WealthWorks
            </Link>
          </div>
          <div className="mt-5 animate-rise" style={d(640)}>
            <WatchOverviewButton light />
          </div>
          <ul className="mt-10 grid max-w-lg animate-rise grid-cols-3 gap-3 text-sm" style={d(700)}>
            {[
              { icon: CalendarDays, top: String(site.established), sub: "Established" },
              { icon: DollarSign, top: "Crypto → USD", sub: "Merchant payments" },
              { icon: Cpu, top: "AI-Driven", sub: "Products & software" },
            ].map(({ icon: Icon, top, sub }) => (
              <li key={sub} className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                <Icon className="size-4 text-gold-light" aria-hidden />
                <p className="mt-2 font-display font-bold text-white">{top}</p>
                <p className="text-xs text-white/60">{sub}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual composition */}
        <div className="relative animate-rise lg:-mr-24 xl:-mr-32" style={d(200)}>
          <div aria-hidden className="absolute inset-x-[8%] bottom-[4%] h-1/2 rounded-full bg-gold/20 blur-[70px]" />
          <div className="relative overflow-hidden rounded-[2rem] [mask-image:radial-gradient(130%_120%_at_65%_45%,#000_55%,transparent_100%)]">
            <Image
              src="/images/hero/hero-devices.webp"
              alt="AI smartwatch, laptop with a financial dashboard, and a smartphone showing a successful Miracle Pay payment"
              width={846}
              height={490}
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="h-auto w-full"
            />
          </div>

          {/* Floating glass chips */}
          <div className="absolute left-0 top-[8%] hidden animate-float rounded-2xl border border-white/70 bg-white/80 p-3 pr-4 shadow-[0_20px_40px_-20px_rgba(15,42,32,0.45)] backdrop-blur-md sm:flex sm:items-center sm:gap-3 lg:-left-6">
            <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-forest to-fresh text-white">
              <BadgeCheck className="size-5" aria-hidden />
            </span>
            <span>
              <span className="block font-display text-sm font-bold text-ink">Since {site.established}</span>
              <span className="block text-xs text-muted">A trusted name in innovation</span>
            </span>
          </div>
          <div className="absolute bottom-[6%] left-[6%] hidden animate-float-slow rounded-2xl border border-white/70 bg-white/85 p-3 pr-4 shadow-[0_20px_40px_-20px_rgba(109,40,217,0.45)] backdrop-blur-md sm:flex sm:items-center sm:gap-3 [animation-delay:1.2s]">
            <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-[#4c1d95] to-[#8b5cf6] text-white">
              <DollarSign className="size-5" aria-hidden />
            </span>
            <span>
              <span className="block font-display text-sm font-bold text-ink">Accept crypto</span>
              <span className="block text-xs text-muted">Get paid in USD</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
