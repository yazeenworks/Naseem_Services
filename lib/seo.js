import { getServices, mapUrl } from "./content";
// Set once in Vercel before your production deployment. No invented domain.
const configuredOrigin =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL
    : "");
export const siteOrigin = configuredOrigin
  ? new URL(configuredOrigin).origin
  : "";
export const languagePaths = { en: "/", ar: "/ar/" };
const titles = {
  en: "Business Setup, Visa & PRO Services in Qatar | Al Naseem",
  ar: "تأسيس الشركات والتأشيرات في قطر | النسيم لخدمات الأعمال",
};
const descriptions = {
  en: "Al Naseem in New Rayyan, Qatar: company setup, PRO services, Saudi & Hayya visas, VFS application support, bank account opening and WPS services.",
  ar: "النسيم في الريان الجديد، شارع الشافي، قطر. تأسيس الشركات والتأشيرات السعودية وهيّا وطلبات VFS وفتح الحسابات البنكية وخدمات نظام حماية الأجور.",
};
export function metadataFor(locale) {
  return {
    ...(siteOrigin
      ? {
          metadataBase: new URL(siteOrigin),
          alternates: {
            canonical: languagePaths[locale],
            languages: { "en-QA": "/", "ar-QA": "/ar/", "x-default": "/" },
          },
        }
      : {}),
    title: titles[locale],
    description: descriptions[locale],
    robots: { index: true, follow: true },
    icons: { icon: "/mark.png", apple: "/mark.png" },
    openGraph: {
      type: "website",
      title: titles[locale],
      description: descriptions[locale],
      siteName: "Al Naseem Business Services",
      locale: locale === "ar" ? "ar_QA" : "en_QA",
      alternateLocale: locale === "ar" ? ["en_QA"] : ["ar_QA"],
      ...(siteOrigin
        ? {
            url: siteOrigin + languagePaths[locale],
            images: [
              {
                url: "/brand-sculpture.webp",
                width: 1000,
                height: 1000,
                alt: "Al Naseem Business Services",
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary",
      title: titles[locale],
      description: descriptions[locale],
      ...(siteOrigin ? { images: [siteOrigin + "/brand-sculpture.webp"] } : {}),
    },
  };
}
export function businessSchema(locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name:
      locale === "ar" ? "النسيم لخدمات الأعمال" : "Al Naseem Business Services",
    alternateName:
      locale === "ar" ? "Al Naseem Business Services" : "النسيم لخدمات الأعمال",
    description: descriptions[locale],
    telephone: "+97430164909",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Shafi Street",
      addressLocality: "New Rayyan",
      addressCountry: "QA",
    },
    areaServed: { "@type": "Country", name: "Qatar" },
    hasMap: mapUrl,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+97433711172",
      contactType: "customer service",
      availableLanguage: ["English", "Arabic"],
      url: "https://wa.me/97433711172",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name:
        locale === "ar" ? "خدمات الأعمال في قطر" : "Business services in Qatar",
      itemListElement: getServices(locale).map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.text,
          areaServed: { "@type": "Country", name: "Qatar" },
        },
      })),
    },
    ...(siteOrigin
      ? {
          "@id": siteOrigin + "/#business",
          url: siteOrigin + languagePaths[locale],
          logo: siteOrigin + "/mark.png",
          image: siteOrigin + "/brand-sculpture.webp",
        }
      : {}),
  };
}
