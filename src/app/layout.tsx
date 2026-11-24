import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site, fullAddress } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Wealthworks | The Future in Technology — Since 1997",
    template: "%s | Wealthworks",
  },
  description:
    "Wealthworks, LLC brings future technologies to the world: Miracle Pay merchant payment solutions, wearable AI products and AI software for business growth. Since 1997.",
  applicationName: site.shortName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: "Wealthworks | The Future in Technology",
    description: site.statement,
    images: [{ url: "/images/hero/hero-devices.webp", width: 846, height: 490, alt: "Wealthworks technology" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/images/logo/wealthworks-mark.png" },
};

export const viewport: Viewport = { themeColor: "#064b24" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/images/logo/wealthworks-logo.png`,
  foundingDate: String(site.established),
  email: site.contact.email,
  telephone: "+1-404-319-0361",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.address.line1,
    addressLocality: site.contact.address.city,
    addressRegion: site.contact.address.region,
    postalCode: site.contact.address.postalCode,
    addressCountry: site.contact.address.country,
  },
  description: `${site.statement} ${fullAddress}`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col overflow-x-clip">
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-forest px-5 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
