import { COMPANY, SOCIAL_LINKS } from "@/lib/constants";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${COMPANY.url}/#organization`,
        name: COMPANY.name,
        url: COMPANY.url,
        logo: `${COMPANY.url}/agro-lite-logo-transparent.png`,
        image: `${COMPANY.url}/agro-lite-logo-transparent.png`,
        description:
          "AgroLite Company provides high-quality agricultural products, hybrid seedlings, and sustainable farming solutions in Liberia.",
        foundingDate: "2017",
        address: {
          "@type": "PostalAddress",
          streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
          addressLocality: "Paynesville",
          addressRegion: "Montserrado",
          addressCountry: "LR",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: COMPANY.phones[0],
          email: COMPANY.email,
          contactType: "customer service",
          areaServed: "LR",
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
            ],
            opens: "08:00",
            closes: "17:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "08:00",
            closes: "13:00",
          },
        ],
        sameAs: SOCIAL_LINKS.map((social) => social.href),
      }}
    />
  );
}

export function WebsiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${COMPANY.url}/#website`,
        name: COMPANY.name,
        url: COMPANY.url,
        publisher: { "@id": `${COMPANY.url}/#organization` },
        inLanguage: "en-US",
      }}
    />
  );
}

import type { Availability } from "@/types";
import { isProductAvailable } from "@/lib/product-utils";

function parsePrice(price?: string): number | undefined {
  if (!price) return undefined;
  const match = price.match(/[\d,]+(\.\d+)?/);
  if (!match) return undefined;
  const value = Number(match[0].replace(/,/g, ""));
  return Number.isFinite(value) ? value : undefined;
}

export function ProductJsonLd({
  slug,
  name,
  description,
  image,
  category,
  price,
  availability,
}: {
  slug: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price?: string;
  availability: Availability;
}) {
  const numericPrice = parsePrice(price);

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Product",
        name,
        description,
        image,
        sku: slug,
        category,
        url: `${COMPANY.url}/products/${slug}`,
        brand: { "@type": "Brand", name: COMPANY.name },
        offers: {
          "@type": "Offer",
          url: `${COMPANY.url}/products/${slug}`,
          availability: isProductAvailable(availability)
            ? "https://schema.org/InStock"
            : "https://schema.org/PreOrder",
          seller: { "@type": "Organization", name: COMPANY.name },
          ...(numericPrice !== undefined && {
            price: numericPrice,
            priceCurrency: "LRD",
          }),
        },
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}
