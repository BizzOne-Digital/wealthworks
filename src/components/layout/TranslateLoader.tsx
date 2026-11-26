"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { readLanguage } from "@/lib/translate";
import { translatedCodes } from "@/data/languages";

declare global {
  interface Window {
    googleTranslateInit?: () => void;
    google?: { translate?: { TranslateElement: new (opts: object, id: string) => unknown } };
  }
}

let patched = false;

/**
 * Google Translate wraps text in <font> tags, which can make React throw when it later removes
 * or moves those nodes. These guards make React skip nodes Google has already moved.
 */
function patchDomForTranslate() {
  if (patched) return;
  patched = true;
  const removeChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) return child;
    return removeChild.call(this, child) as T;
  };
  const insertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends Node>(this: Node, node: T, ref: Node | null): T {
    if (ref && ref.parentNode !== this) return node;
    return insertBefore.call(this, node, ref) as T;
  };
}

/** Loads Google Translate only when a visitor has picked a language other than English. */
export function TranslateLoader() {
  const pathname = usePathname();

  useEffect(() => {
    if (readLanguage() === "en") return;
    patchDomForTranslate();
    if (document.getElementById("google-translate-script")) return;
    window.googleTranslateInit = () => {
      const TE = window.google?.translate?.TranslateElement;
      if (TE) new TE({ pageLanguage: "en", includedLanguages: translatedCodes.join(","), autoDisplay: false }, "google_translate_element");
    };
    const s = document.createElement("script");
    s.id = "google-translate-script";
    s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  // Client-side navigation swaps page content; reload so the new page is translated in full.
  useEffect(() => {
    try {
      const key = "ww-last-path";
      const last = sessionStorage.getItem(key);
      sessionStorage.setItem(key, pathname);
      if (readLanguage() !== "en" && last && last !== pathname) location.reload();
    } catch {
      // Storage blocked: the page still works, new content just stays in English until refresh.
    }
  }, [pathname]);

  return <div id="google_translate_element" className="hidden" aria-hidden />;
}
