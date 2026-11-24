import { referralLinks } from "./site";

export type Solution = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  cta: string;
  href: string;
  external?: boolean;
  accent: "purple" | "green" | "gold";
};

/** Homepage solution cards. */
export const solutions: Solution[] = [
  {
    id: "miracle-pay",
    eyebrow: "Merchant Payments",
    title: "Miracle Pay for Merchants",
    description:
      "Modern payment technology and merchant acquisition opportunities. Accept crypto and get paid in USD.",
    image: "/images/services/miraclepay-terminal.webp",
    imageAlt: "Payment terminal and smartphone showing a QR payment",
    cta: "Explore Miracle Pay",
    href: "/services#miracle-pay",
    accent: "purple",
  },
  {
    id: "wearable-ai",
    eyebrow: "Smart Devices",
    title: "Wearable AI Products",
    description:
      "Discover next-generation wearable technology and intelligent devices for a more connected life.",
    image: "/images/services/ai-watch.webp",
    imageAlt: "Smartwatch displaying an AI interface",
    cta: "Explore AI Products",
    href: "/services#wearable-ai",
    accent: "green",
  },
  {
    id: "ai-software",
    eyebrow: "Software",
    title: "New AI Software",
    description:
      "Innovative artificial intelligence software and technology-driven solutions for growing businesses.",
    image: "/images/services/ai-laptop.webp",
    imageAlt: "Laptop displaying an AI software interface",
    cta: "Discover Technology",
    href: "/services#ai-software",
    accent: "gold",
  },
];

export type Opportunity = {
  id: string;
  name: string;
  provider: string;
  category: string;
  description: string;
  bestFor: string;
  image: string;
  imageAlt: string;
  href: string;
  cta: string;
};

/** Third-party programs Wealthworks refers visitors to (client referral links). */
export const opportunities: Opportunity[] = [
  {
    id: "miracle-pay",
    name: "Miracle Pay Merchant Solutions",
    provider: "Miracle Pay",
    category: "Merchant payments",
    description:
      "Lets merchants accept crypto payments and get paid in USD, with online checkout, dynamic QR payments and WooCommerce support.",
    bestFor: "Merchants and business owners",
    image: "/images/photos/payment.jpg",
    imageAlt: "Miracle Pay payment terminal",
    href: referralLinks.miraclePay,
    cta: "Become a Merchant",
  },
  {
    id: "bellator-life",
    name: "Bellator Life",
    provider: "Bellator Life",
    category: "Membership opportunity",
    description:
      "A membership opportunity Wealthworks shares with its network. Program details, pricing and terms are provided directly by Bellator Life.",
    bestFor: "Entrepreneurs and business builders",
    image: "/images/photos/city.jpg",
    imageAlt: "Bright modern office overlooking a city skyline",
    href: referralLinks.bellatorLife,
    cta: "Join Bellator Life",
  },
  {
    id: "bg-lifestyle",
    name: "BG Lifestyle Luxury Travel Club",
    provider: "BG Lifestyle",
    category: "Luxury travel club",
    description:
      "A luxury travel club membership. Explore the club's travel offerings and membership details on the BG Lifestyle website.",
    bestFor: "Travelers and lifestyle seekers",
    image: "/images/photos/travel.jpg",
    imageAlt: "Calm tropical beach at sunset",
    href: referralLinks.bgLifestyle,
    cta: "Explore the Travel Club",
  },
];

export const faqs = [
  {
    q: "Is Wealthworks the owner of Miracle Pay, Bellator Life or BG Lifestyle?",
    a: "No. These are independent third-party companies and programs. Wealthworks introduces them to its network, and the links on this website are Wealthworks referral links.",
  },
  {
    q: "What does Miracle Pay offer merchants?",
    a: "Miracle Pay lets merchants accept crypto from customers and get paid in USD. Its merchant solutions include online checkout, dynamic QR payments and WooCommerce support.",
  },
  {
    q: "How do I sign up as a Miracle Pay merchant?",
    a: "Use the \"Become a Merchant\" button on this page, or scan the referral QR code. The process includes merchant sign-up, KYC verification, activation and integration, then going live. Barry Phoenix can guide you through each step.",
  },
  {
    q: "Do the referral links cost me anything extra?",
    a: "Referral links track that you were introduced by Wealthworks. Pricing and terms are set by each provider, so review their details before signing up.",
  },
  {
    q: "Can Wealthworks help me choose the right option?",
    a: "Yes. Contact Barry Phoenix by phone or email to talk through your business goals and which opportunity may fit.",
  },
];
