import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "center", className }: Props) {
  return (
    <Reveal className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl", className)}>
      {eyebrow && (
        <p className={cn("eyebrow", align === "center" && "justify-center")}>
          <span aria-hidden className="h-px w-8 bg-gradient-to-r from-transparent to-gold" />
          {eyebrow}
          {align === "center" && <span aria-hidden className="h-px w-8 bg-gradient-to-l from-transparent to-gold" />}
        </p>
      )}
      <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] text-ink sm:text-4xl lg:text-[2.9rem]">{title}</h2>
      {description && <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>}
    </Reveal>
  );
}
