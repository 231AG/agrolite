import type { Metadata } from "next";
import { COMPANY } from "./constants";

const BASE_URL = COMPANY.url;

interface PageMeta {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function createMetadata({
  title,
  description,
  path,
  image,
}: PageMeta): Metadata {
  const fullTitle = title.includes("AgroLite")
    ? title
    : `${title} | AgroLite Company Inc.`;
  const url = `${BASE_URL}${path}`;
  const ogImage = image ?? `${BASE_URL}/og-default.jpg`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: COMPANY.name,
      locale: "en_US",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

export const PAGE_METADATA = {
  home: {
    title: "AgroLite Company Inc. — Growing Beyond Greatness",
    description:
      "AgroLite Company provides high-quality agricultural products, hybrid seedlings, and sustainable farming solutions that empower Liberian farmers and transform communities.",
    path: "/",
  },
  about: {
    title: "About Us",
    description:
      "Learn about AgroLite Company Inc., founded in 2017 to improve agricultural productivity and support sustainable farming across Liberia.",
    path: "/about",
  },
  products: {
    title: "Products",
    description:
      "Browse AgroLite's catalog of hybrid seedlings, oil palm products, cocoa products, seeds, nursery supplies, and farm inputs.",
    path: "/products",
  },
  services: {
    title: "Services",
    description:
      "AgroLite offers field assessment, soil testing, farm layout, extension services, pest management, and agricultural consulting.",
    path: "/services",
  },
  impact: {
    title: "Our Impact",
    description:
      "Discover how AgroLite is driving community development, farmer empowerment, and agricultural growth across Liberia.",
    path: "/impact",
  },
  team: {
    title: "Leadership Team",
    description:
      "Meet the AgroLite leadership team dedicated to building Liberia's agricultural future.",
    path: "/team",
  },
  contact: {
    title: "Contact Us",
    description:
      "Get in touch with AgroLite Company Inc. in Paynesville, Liberia. Request a consultation or inquire about our products and services.",
    path: "/contact",
  },
} as const;
