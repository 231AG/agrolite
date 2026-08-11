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
  // Falls back to the homepage hero photo — a real, existing asset —
  // instead of a placeholder path that would 404 on social crawlers.
  const ogImage = image ?? `${BASE_URL}/assessments/IMG_20260602_132710_397.jpg`;

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

/**
 * Product names range from ~10 to ~45 chars, so `${name} | AgroLite Company Inc.`
 * alone lands anywhere from 32 to 67 chars. This tries a few title/brand
 * combinations and picks whichever lands closest to the 50-60 char target.
 */
export function buildProductTitle(name: string, category: string): string {
  const candidates = [
    `${name} | AgroLite Company Inc.`,
    `${name} — ${category} | AgroLite`,
    `${name} — ${category} | AgroLite Company Inc.`,
    `${name} | AgroLite`,
  ];
  const inRange = candidates.find((c) => c.length >= 50 && c.length <= 60);
  if (inRange) return inRange;

  return candidates.reduce((best, c) => {
    const dist = (s: string) =>
      s.length < 50 ? 50 - s.length : s.length > 60 ? s.length - 60 : 0;
    return dist(c) < dist(best) ? c : best;
  });
}

/**
 * Product `shortDescription` values run well under the 140-char SEO floor.
 * This composes a compliant 140-160 char meta description without hand-editing
 * every product record.
 */
export function buildProductDescription(
  shortDescription: string,
  category: string
): string {
  const base = shortDescription.trim().replace(/\.$/, "");
  const suffix = ` — quality ${category.toLowerCase()} from AgroLite Company Inc., serving farmers across Liberia.`;
  const combined = `${base}.${suffix}`;
  if (combined.length > 160) {
    return `${combined.slice(0, 157).replace(/\s+\S*$/, "")}...`;
  }
  return combined;
}

export const PAGE_METADATA = {
  home: {
    title: "AgroLite Company Inc. — Growing Beyond Greatness Together",
    description:
      "AgroLite Company provides high-quality agricultural products, hybrid seedlings, and sustainable farming solutions that empower Liberian farmers nationwide.",
    path: "/",
    image: "/assessments/IMG_20260602_132710_397.jpg",
  },
  about: {
    title: "Our Story, Mission & Core Values",
    description:
      "Learn how AgroLite Company Inc., founded in 2017, improves agricultural productivity and supports sustainable farming for farmers across Liberia.",
    path: "/about",
    image: "/assessments/IMG_20260516_123301_345.jpg",
  },
  products: {
    title: "Products & Hybrid Seedlings Catalog",
    description:
      "Browse AgroLite's full catalog of hybrid oil palm and cocoa seedlings, plantain suckers, seed products, nursery supplies, and farm inputs for Liberian farmers.",
    path: "/products",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
  },
  services: {
    title: "Farm Services & Agri Consulting",
    description:
      "AgroLite offers field assessment, soil testing, farm layout and pegging, and pest and disease control services for farmers and cooperatives in Liberia.",
    path: "/services",
    image: "/assessments/1781034698884.jpg",
  },
  impact: {
    title: "Farmer & Community Impact in Liberia",
    description:
      "See how AgroLite drives community development, empowers over 2,500 farmers, and advances agricultural growth across 45+ communities in Liberia.",
    path: "/impact",
    image: "/assessments/IMG_20260604_162446_872.jpg",
  },
  team: {
    title: "Leadership & Agricultural Experts",
    description:
      "Meet the AgroLite leadership team of agricultural professionals dedicated to building Liberia's agricultural future through expertise and service.",
    path: "/team",
    image: "/assessments/IMG_20260602_160820_269.jpg",
  },
  contact: {
    title: "Contact Us — Paynesville Office",
    description:
      "Contact AgroLite Company Inc. in Paynesville, Liberia by phone, WhatsApp, or email to request a consultation about our products and services.",
    path: "/contact",
    image: "/assessments/IMG_20260516_123301_345.jpg",
  },
} as const;
