import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  crumb: string;
  children?: ReactNode;
};

/** Shared hero for inner pages: light background, image panel, green accents. */
export function PageHero({ eyebrow, title, description, image, imageAlt, crumb, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-soft to-white">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 size-[560px] rounded-full bg-fresh/15 blur-[110px]" />
      <div aria-hidden className="pointer-events-none absolute -left-32 bottom-0 size-[380px] rounded-full bg-emerald/10 blur-[110px]" />
      <SwooshBg />
      <div className="container-x relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <div>
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-muted">
            <Link href="/" className="hover:text-forest">Home</Link>
            <ChevronRight className="size-3.5" aria-hidden />
            <span aria-current="page" className="font-medium text-forest">{crumb}</span>
          </nav>
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{description}</p>
            {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div>}
          </Reveal>
        </div>
        <Reveal delay={0.15} className="relative">
          <div aria-hidden className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-emerald/25 via-white to-fresh/30" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border-4 border-white shadow-[0_40px_80px_-40px_rgba(6,75,36,0.55)]">
            <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-forest/35 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SwooshBg({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 600"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        <linearGradient id="swoosh-emerald" x1="0" x2="1">
          <stop offset="0" stopColor="#087b4b" stopOpacity="0" />
          <stop offset="0.45" stopColor="#10a568" stopOpacity="0.5" />
          <stop offset="1" stopColor="#087b4b" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="swoosh-green" x1="0" x2="1">
          <stop offset="0" stopColor="#10a568" stopOpacity="0" />
          <stop offset="0.5" stopColor="#10a568" stopOpacity="0.3" />
          <stop offset="1" stopColor="#087b4b" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M-40 520 C 360 380, 820 640, 1480 300" fill="none" stroke="url(#swoosh-emerald)" strokeWidth="2.5" />
      <path d="M-40 560 C 420 430, 900 660, 1480 360" fill="none" stroke="url(#swoosh-green)" strokeWidth="14" />
    </svg>
  );
}
