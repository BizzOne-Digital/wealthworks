/** Languages offered in the navbar switcher (Google Translate codes). English is the source language. */
export const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "hi", label: "हिन्दी" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "pt", label: "Português" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

export const translatedCodes = languages.filter((l) => l.code !== "en").map((l) => l.code);
