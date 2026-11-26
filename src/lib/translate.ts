import { translatedCodes, type LanguageCode } from "@/data/languages";

const COOKIE = "googtrans";

/** Current language from Google Translate's cookie ("/en/es" -> "es"). */
export function readLanguage(): LanguageCode {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/en\/([a-zA-Z-]+)/);
  const code = match?.[1] as LanguageCode | undefined;
  return code && (translatedCodes as readonly string[]).includes(code) ? code : "en";
}

/** Google sets the cookie on the host and on the parent domain, so both are written or cleared. */
export function setLanguage(code: LanguageCode) {
  const host = location.hostname;
  const domains = ["", `;domain=${host}`, `;domain=.${host.split(".").slice(-2).join(".")}`];
  for (const d of domains) {
    document.cookie =
      code === "en"
        ? `${COOKIE}=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT${d}`
        : `${COOKIE}=/en/${code};path=/${d}`;
  }
  location.reload();
}
