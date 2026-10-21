import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { ExitIntentOffer } from "@/components/exit-intent-offer";
import { AttributionCapture } from "@/components/attribution-capture";
import { GOOGLE_ADS_ID, META_PIXEL_ID } from "@/lib/tracking";
import {
  localBusinessSchema,
  websiteSchema,
  organizationSchema,
} from "@/lib/structured-data";
import { SITE_CONFIG, CONTACT } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
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
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} ${CONTACT.address.city} | IV Therapy Near Me`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/images/vip-spa-lounge.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} VIP IV therapy lounge in ${CONTACT.address.city}, AL`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} ${CONTACT.address.city}`,
    description: SITE_CONFIG.description,
    images: ["/images/vip-spa-lounge.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#1e3a5f",
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
      <head>
        {/* Google Ads gtag.js, loaded once per page */}
        <Script
          id="gtag-js"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            if (typeof window.gtag !== "function") {
              window.gtag = function () { window.dataLayer.push(arguments); };
            }
            if (!window.__hivGoogleAdsConfigured) {
              window.__hivGoogleAdsConfigured = true;
              window.gtag("js", new Date());
              window.gtag("config", "${GOOGLE_ADS_ID}");
            }
          `}
        </Script>

        {/* Meta Pixel — init + PageView once per page */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            if (!window.__hivMetaPixel) {
              window.__hivMetaPixel = true;
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            }
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <AttributionCapture />

        {/* Meta Pixel (noscript) */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        {/* End Meta Pixel (noscript) */}

        <JsonLd
          data={[
            localBusinessSchema(),
            websiteSchema(),
            organizationSchema(),
          ]}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <ExitIntentOffer />

        {/* Statcounter */}
        <Script id="statcounter-config" strategy="afterInteractive">
          {`
            var sc_project=13109967;
            var sc_invisible=1;
            var sc_security="edbee11e";
          `}
        </Script>
        <Script
          id="statcounter"
          src="https://www.statcounter.com/counter/counter.js"
          strategy="afterInteractive"
        />
        <noscript>
          <div className="statcounter">
            <a
              title="Web Analytics Made Easy - Statcounter"
              href="https://statcounter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="statcounter"
                src="https://c.statcounter.com/13109967/0/edbee11e/1/"
                alt="Web Analytics Made Easy - Statcounter"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </noscript>

        {/* Chatway */}
        <Script
          id="chatway"
          src="https://cdn.chatway.app/widget.js?id=MmSi4HbTXMyv"
          strategy="afterInteractive"
        />

        {/* Pinterest Tag */}
        <Script id="pinterest-tag" strategy="afterInteractive">
          {`
            !function(e){if(!window.pintrk){window.pintrk = function () {
            window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
              n=window.pintrk;n.queue=[],n.version="3.0";var
              t=document.createElement("script");t.async=!0,t.src=e;var
              r=document.getElementsByTagName("script")[0];
              r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
            pintrk('load', '2612449813015');
            pintrk('page');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://ct.pinterest.com/v3/?event=init&tid=2612449813015&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
