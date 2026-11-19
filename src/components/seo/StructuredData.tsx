import { SERVICES } from "@/lib/services";
import { SITE, SITE_URL } from "@/lib/site";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "@id": `${SITE_URL}/#business`,
    name: SITE.name,
    description:
      "Insurance and investment management agency in Bhiwandi, Maharashtra, helping individuals, families and businesses with health, life, motor, fire, worker, transit and marine insurance and investment plans.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo/logo-mark-gold.png`,
    image: `${SITE_URL}/logo/logo-full-color.png`,
    telephone: `+91${SITE.phones[0]}`,
    email: SITE.email,
    slogan: "Live Protected.",
    foundingDate: "2023",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Surya Excellency, Balaji Nagar, Narpoli",
      addressLocality: "Bhiwandi",
      addressRegion: "Maharashtra",
      postalCode: "421305",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.coordinates.lat,
      longitude: SITE.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:30",
      },
    ],
    areaServed: { "@type": "City", name: "Bhiwandi" },
    sameAs: [SITE.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Insurance and investment services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.summary,
          url: `${SITE_URL}/services/${service.id}`,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
