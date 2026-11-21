import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BrainCircuit, LayoutDashboard, Watch } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const pillars = [
  {
    icon: Watch,
    title: "AI Wearables",
    text: "Smart, connected devices that bring intelligence closer to everyday life.",
    image: "/images/photos/watch.jpg",
    alt: "AI smartwatch with a glowing display",
  },
  {
    icon: BrainCircuit,
    title: "Smart Technology",
    text: "Artificial intelligence that turns information into faster, better decisions.",
    image: "/images/photos/ai.jpg",
    alt: "Laptop running AI software",
  },
  {
    icon: LayoutDashboard,
    title: "Digital Business Tools",
    text: "Dashboards and software that help owners see, manage and grow their business.",
    image: "/images/photos/analytics.jpg",
    alt: "Laptop analytics dashboard beside a smartwatch and phone",
  },
];

export function Innovation() {
  return (
    <section className="section relative overflow-hidden" aria-labelledby="innovation-title">
      <div aria-hidden className="pointer-events-none absolute right-[-15%] top-20 size-[520px] rounded-full bg-fresh/10 blur-[120px]" />
      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Technology & Innovation"
            title={<span id="innovation-title">Where intelligence meets <span className="text-green-gradient">everyday business</span></span>}
            description="We follow the technologies shaping the next decade and bring the most practical ones to the people we work with."
          />
          <Reveal>
            <Link href="/services" className="btn-outline">
              View All Services <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text, image, alt }, i) => (
            <Reveal key={title} delay={i * 0.12}>
              <article className="group relative h-[26rem] overflow-hidden rounded-[1.75rem] sm:h-[30rem]">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#03200f] via-[#03200f]/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <span className="grid size-12 place-items-center rounded-2xl border border-white/25 bg-white/15 text-gold-light backdrop-blur">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-2xl font-extrabold text-white">{title}</h3>
                  <p className="mt-2 leading-relaxed text-white/80">{text}</p>
                  <div className="gold-rule mt-6 origin-left scale-x-50 transition-transform duration-700 group-hover:scale-x-100" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
