"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";

export function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  // True only on the client, so the portal never renders during SSR.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  // Close the menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid size-11 place-items-center rounded-full border border-line bg-white text-forest transition hover:bg-soft"
      >
        {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
      </button>

      {/* Portal to <body>: the header's backdrop-filter would otherwise trap this fixed panel inside it. */}
      {mounted && createPortal(
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: reduce ? 0 : -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto border-t border-line bg-white lg:hidden"
          >
            <nav aria-label="Mobile" className="container-x flex flex-col py-6">
              <ul className="divide-y divide-line">
                {mainNav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: reduce ? 0 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i + 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className="flex items-center justify-between py-4 font-display text-xl font-semibold text-ink aria-[current=page]:text-emerald"
                    >
                      {item.label}
                      <ArrowRight className="size-5 text-emerald" aria-hidden />
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-8 w-full">
                Get Started <ArrowRight className="size-4" aria-hidden />
              </Link>
              <div className="mt-8 space-y-3 rounded-2xl bg-soft p-5 text-sm">
                <a href={site.contact.phoneHref} className="flex items-center gap-3 font-medium text-ink">
                  <Phone className="size-4 text-emerald" aria-hidden /> {site.contact.phone}
                </a>
                <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 font-medium text-ink">
                  <Mail className="size-4 text-emerald" aria-hidden /> {site.contact.email}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
      )}
    </div>
  );
}
