"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { CircleAlert, Mail, Send } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export const interestOptions = [
  "Miracle Pay",
  "Wearable AI Products",
  "AI Software",
  "Bellator Life",
  "BG Lifestyle",
  "General Inquiry",
] as const;

type Errors = Partial<Record<"name" | "email" | "phone" | "interest" | "message", string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(data: Record<string, string>): Errors {
  const e: Errors = {};
  if (data.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!emailRe.test(data.email.trim())) e.email = "Please enter a valid email address.";
  if (data.phone.trim() && !/^[+()\-\s\d.]{7,20}$/.test(data.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (!data.interest) e.interest = "Please choose what you're interested in.";
  if (data.message.trim().length < 10) e.message = "Please add a short message (at least 10 characters).";
  return e;
}

/** Reads ?interest= from the URL to preselect the dropdown. */
export function ContactFormWithParams() {
  const params = useSearchParams();
  const raw = params.get("interest") ?? "";
  const initial = (interestOptions as readonly string[]).includes(raw) ? raw : "";
  return <ContactForm key={initial} initialInterest={initial} />;
}

/**
 * Email delivery is not configured, so the form validates input and then opens the visitor's
 * email app with a prefilled message to Wealthworks (mailto). It never claims the message was sent.
 */
export function ContactForm({ initialInterest = "" }: { initialInterest?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(["name", "email", "phone", "interest", "message"].map((k) => [k, String(fd.get(k) ?? "")]));
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      e.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    const subject = `Website inquiry: ${data.interest} — ${data.name.trim()}`;
    const body = [
      `Name: ${data.name.trim()}`,
      `Email: ${data.email.trim()}`,
      `Phone: ${data.phone.trim() || "Not provided"}`,
      `Interested in: ${data.interest}`,
      "",
      data.message.trim(),
    ].join("\n");
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  const field =
    "mt-2 block w-full rounded-2xl border bg-white px-4 py-3.5 text-ink placeholder:text-muted/70 transition focus:border-emerald focus:outline-none focus:ring-4 focus:ring-fresh/15";
  const errCls = (k: keyof Errors) => (errors[k] ? "border-red-400" : "border-line");

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-describedby="form-note">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-ink">Full Name <span className="text-red-600" aria-hidden>*</span></label>
          <input id="name" name="name" type="text" autoComplete="name" required aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} className={cn(field, errCls("name"))} placeholder="Your full name" />
          {errors.name && <p id="name-err" className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-ink">Email Address <span className="text-red-600" aria-hidden>*</span></label>
          <input id="email" name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} className={cn(field, errCls("email"))} placeholder="you@company.com" />
          {errors.email && <p id="email-err" className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-ink">Phone Number <span className="font-normal text-muted">(optional)</span></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-err" : undefined} className={cn(field, errCls("phone"))} placeholder="(555) 555-5555" />
          {errors.phone && <p id="phone-err" className="mt-1.5 text-sm text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="interest" className="text-sm font-semibold text-ink">Interested In <span className="text-red-600" aria-hidden>*</span></label>
          <select id="interest" name="interest" required defaultValue={initialInterest} aria-invalid={!!errors.interest} aria-describedby={errors.interest ? "interest-err" : undefined} className={cn(field, errCls("interest"), "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23087b39%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-10")}>
            <option value="" disabled>Select an option</option>
            {interestOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          {errors.interest && <p id="interest-err" className="mt-1.5 text-sm text-red-600">{errors.interest}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-ink">Message <span className="text-red-600" aria-hidden>*</span></label>
        <textarea id="message" name="message" rows={5} required aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} className={cn(field, errCls("message"), "resize-y")} placeholder="Tell us a little about your business and what you'd like to explore." />
        {errors.message && <p id="message-err" className="mt-1.5 text-sm text-red-600">{errors.message}</p>}
      </div>

      {Object.keys(errors).length > 0 && (
        <p role="alert" className="flex items-center gap-2 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
          <CircleAlert className="size-4 shrink-0" aria-hidden /> Please fix the highlighted fields.
        </p>
      )}

      <button type="submit" className="btn-primary w-full sm:w-auto sm:px-9">
        <Send className="size-4" aria-hidden /> Send Inquiry
      </button>

      <div id="form-note" aria-live="polite">
        {opened ? (
          <div className="rounded-2xl border border-gold/40 bg-[#fdf6e2] p-4 text-sm leading-relaxed text-ink">
            <p className="font-semibold">Your email app should now be open with your inquiry ready.</p>
            <p className="mt-1 text-muted">
              Press send in your email app to deliver it. If nothing opened, email us directly at{" "}
              <a className="font-semibold text-emerald underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>{" "}
              or call <a className="font-semibold text-emerald underline" href={site.contact.phoneHref}>{site.contact.phone}</a>.
            </p>
          </div>
        ) : (
          <p className="flex items-start gap-2 text-xs leading-relaxed text-muted">
            <Mail className="mt-0.5 size-3.5 shrink-0" aria-hidden />
            Submitting opens your email app with your message addressed to {site.contact.email}. Nothing is stored on this website.
          </p>
        )}
      </div>
    </form>
  );
}
