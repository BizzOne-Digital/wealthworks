export const site = {
  name: "WealthWorks, LLC",
  shortName: "WealthWorks",
  tagline: "The Future in Technology",
  statement: "Bringing future technologies to the world.",
  established: 1997,
  url: "https://wealthworksinc.com",
  representative: {
    name: "Barry Phoenix",
    title: "Merchant Acquisition Specialist",
    miraclePayTitle: "MiraclePay Merchant Consultant",
  },
  contact: {
    email: "wealthworks718@gmail.com",
    phone: "(404) 319-0361",
    phoneHref: "tel:+14043190361",
    address: {
      line1: "1800 Phoenix Blvd, Suite 128-12 #1167",
      city: "Atlanta",
      region: "GA",
      postalCode: "30349",
      country: "US",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=1800+Phoenix+Blvd+Suite+128-12+Atlanta+GA+30349",
  },
  /**
   * Add real profile URLs here when the client provides them.
   * Icons render in the footer only for entries with a URL.
   */
  social: {
    instagram: "",
    facebook: "",
    x: "",
    linkedin: "",
  },
} as const;

/** Client-provided referral URLs. Never edit the tracking parameters. */
export const referralLinks = {
  miraclePay: "https://www.miraclepay.com/merchant?ref=BLTR-X953KC9DHP",
  bellatorLife: "https://v2.bellatorlife.com/sign-up?referral=Wealthworks",
  bgLifestyle: "https://bglifestyle.com/?ref=wealthworks",
} as const;

export const fullAddress = `${site.contact.address.line1}, ${site.contact.address.city}, ${site.contact.address.region} ${site.contact.address.postalCode}`;
