"use client";

import { useSyncExternalStore } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { languages, type LanguageCode } from "@/data/languages";
import { readLanguage, setLanguage } from "@/lib/translate";
import { cn } from "@/lib/utils";

const subscribe = () => () => {};

/** Navbar language picker. Choosing a language sets Google Translate's cookie and reloads the page. */
export function LanguageSwitcher({ className }: { className?: string }) {
  const current = useSyncExternalStore(subscribe, readLanguage, () => "en" as LanguageCode);

  return (
    <div className={cn("notranslate relative", className)} translate="no">
      <Globe className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-emerald" aria-hidden />
      <select
        aria-label="Choose language"
        value={current}
        onChange={(e) => setLanguage(e.target.value as LanguageCode)}
        className="h-11 max-w-[8.5rem] cursor-pointer appearance-none truncate rounded-full border border-line bg-white pl-9 pr-8 text-sm font-semibold text-ink transition hover:border-emerald/50 hover:bg-soft"
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
    </div>
  );
}
