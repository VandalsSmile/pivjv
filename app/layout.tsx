import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SITE_CONFIG, CONTACT } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `IV Therapy near ${CONTACT.address.city} AL | Hydration & Vitamin Drips | ${SITE_CONFIG.name}`,
    template: `%s | ${SITE_CONFIG.name} ${CONTACT.address.city}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "IV therapy",
    "IV hydration",
    "vitamin drips",
    "Huntsville AL",
    "wellness",
    "hydration therapy",
    "NAD+",
    "Myers Cocktail",
    "energy boost",
    "immune support",
    "recovery",
    "Prime IV",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} ${CONTACT.address.city} | IV Therapy Near Me`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} ${CONTACT.address.city}`,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d4a4a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
