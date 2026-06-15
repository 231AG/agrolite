"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { PageHero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import { CTA } from "@/components/ui/CTA";
import { FadeIn } from "@/components/ui/FadeIn";
import { products, PRODUCT_CATEGORIES } from "@/lib/products";
import { IMAGES } from "@/lib/images";
import type { ProductCategory } from "@/types";

export function ProductsCatalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ProductCategory | "All">("All");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        search === "" ||
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        category === "All" || product.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <>
      <PageHero
        title="Our Products"
        description="Premium agricultural products and hybrid seedlings for Liberian farmers."
        image={IMAGES.seedlings}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <FadeIn>
            <SectionHeader
              eyebrow="Product Catalog"
              title="Browse Our Products"
              description="Quality seedlings, farm inputs, and agricultural supplies — all designed for success in Liberian conditions."
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-col lg:flex-row gap-4 mb-10">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <input
                  type="search"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  aria-label="Search products"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setCategory("All")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    category === "All"
                      ? "bg-primary text-white"
                      : "bg-accent-light text-foreground hover:bg-accent"
                  }`}
                >
                  All
                </button>
                {PRODUCT_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      category === cat
                        ? "bg-primary text-white"
                        : "bg-accent-light text-foreground hover:bg-accent"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted text-lg">
                No products found matching your criteria.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="mt-4 text-primary font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product, index) => (
                <FadeIn key={product.slug} delay={index * 0.05}>
                  <ProductCard product={product} />
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA
        title="Need a Custom Order?"
        description="Contact us for bulk orders, custom product inquiries, and specialized agricultural supplies."
        primaryLabel="Contact Us"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
