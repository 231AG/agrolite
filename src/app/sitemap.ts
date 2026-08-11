import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${COMPANY.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${COMPANY.url}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${COMPANY.url}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${COMPANY.url}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${COMPANY.url}/impact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${COMPANY.url}/team`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${COMPANY.url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${COMPANY.url}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
}
