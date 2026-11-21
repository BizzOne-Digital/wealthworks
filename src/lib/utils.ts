export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Shared attributes for every external / referral link. */
export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
