import { COMPANY } from "@/lib/constants";

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
        "@type": "Organization",
        name: COMPANY.name,
        url: COMPANY.url,
        logo: `${COMPANY.url}/logo.png`,
        description:
          "AgroLite Company provides high-quality agricultural products, hybrid seedlings, and sustainable farming solutions in Liberia.",
        foundingDate: "2017",
        address: {
          "@type": "PostalAddress",
          streetAddress: COMPANY.address.line1,
          addressLocality: "Paynesville",
          addressCountry: "LR",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: COMPANY.phones[0],
          email: COMPANY.email,
          contactType: "customer service",
        },
        sameAs: [],
      }}
    />
  );
}

import type { Availability } from "@/types";
import { isProductAvailable } from "@/lib/product-utils";

export function ProductJsonLd({
  name,
  description,
  image,
  availability,
}: {
  name: string;
  description: string;
  image: string;
  availability: Availability;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Product",
        name,
        description,
        image,
        brand: { "@type": "Brand", name: COMPANY.name },
        offers: {
          "@type": "Offer",
          availability: isProductAvailable(availability)
            ? "https://schema.org/InStock"
            : "https://schema.org/PreOrder",
          seller: { "@type": "Organization", name: COMPANY.name },
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
