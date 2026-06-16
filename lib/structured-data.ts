import {
  SITE_CONFIG,
  CONTACT,
  HOURS,
  LOGO_URL,
  SOCIAL_LINKS,
} from "@/lib/constants";

const SITE_URL = SITE_CONFIG.url;

/** Absolute URL helper for schema @id and url fields. */
export function absoluteUrl(path = ""): string {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const ORG_ID = `${SITE_URL}/#organization`;

/**
 * Core local medical business entity. Used site-wide so Google can build a
 * consistent knowledge panel and surface the business in local/Maps results.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "HealthAndBeautyBusiness", "LocalBusiness"],
    "@id": BUSINESS_ID,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    image: LOGO_URL,
    logo: LOGO_URL,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${CONTACT.address.street} ${CONTACT.address.suite}`,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.state,
      postalCode: CONTACT.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.6775225,
      longitude: -86.5496926,
    },
    hasMap: CONTACT.address.mapsUrl,
    areaServed: [
      "Huntsville",
      "Jones Valley",
      "Hampton Cove",
      "Madison",
      "Owens Cross Roads",
    ].map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "6",
      bestRating: "5",
    },
  };
}

/** WebSite entity enabling sitelinks search box and entity linking. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_CONFIG.name,
    publisher: { "@id": ORG_ID },
  };
}

/** Organization entity for brand knowledge panel. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_CONFIG.name,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
    image: LOGO_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram],
  };
}

/** BreadcrumbList for rich breadcrumb display in search results. */
export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** FAQPage schema — powers FAQ rich results and AI/voice answers (AEO). */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** MedicalWebPage/Service schema for treatment & service pages. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    procedureType: opts.serviceType || "IV Therapy",
    provider: { "@id": BUSINESS_ID },
  };
}

/** Article schema for Resource Center posts — improves article rich results. */
export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  image: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    image: opts.image,
    url: absoluteUrl(opts.path),
    datePublished: opts.datePublished,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(opts.path),
    },
  };
}
