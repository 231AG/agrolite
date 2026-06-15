import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { ContactForm } from "@/components/ui/ContactForm";
import { InquiryActions } from "@/components/ui/InquiryActions";
import { CTA } from "@/components/ui/CTA";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  ProductJsonLd,
  BreadcrumbJsonLd,
} from "@/components/seo/JsonLd";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/products";
import { availabilityStyles } from "@/lib/product-utils";
import { createMetadata, PAGE_METADATA } from "@/lib/metadata";
import { COMPANY } from "@/lib/constants";
import type { Metadata } from "next";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return createMetadata(PAGE_METADATA.products);

  return createMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/products/${product.slug}`,
    image: product.image,
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <>
      <ProductJsonLd
        name={product.name}
        description={product.description}
        image={product.image}
        availability={product.availability}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: COMPANY.url },
          { name: "Products", url: `${COMPANY.url}/products` },
          {
            name: product.name,
            url: `${COMPANY.url}/products/${product.slug}`,
          },
        ]}
      />

      <section className="relative min-h-[50vh] flex items-end pt-20">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
          <span className="block text-accent text-sm font-semibold uppercase tracking-wider mb-2">
            {product.category}
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 heading-display">
            {product.name}
          </h1>
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${availabilityStyles[product.availability]}`}
            >
              {product.availability}
            </span>
            {product.badge && (
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-secondary text-white">
                {product.badge}
              </span>
            )}
            {product.price && (
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-white/20 text-white backdrop-blur-sm">
                {product.price}
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn>
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {product.gallery.map((img, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-xl overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`${product.name} view ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="200px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h2 className="font-display text-2xl font-bold text-secondary mb-4 heading-display">
                Product Overview
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                {product.description}
              </p>

              {product.packageSize && (
                <p className="text-sm font-medium text-foreground mb-6">
                  Package Size:{" "}
                  <span className="text-primary">{product.packageSize}</span>
                </p>
              )}

              {product.price && (
                <p className="text-lg font-semibold text-secondary mb-6">
                  {product.price}
                </p>
              )}

              {product.benefits.length > 0 && (
                <>
                  <h3 className="font-display text-xl font-bold text-secondary mb-4 heading-display">
                    Benefits
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {product.features.length > 0 && (
                <>
                  <h3 className="font-display text-xl font-bold text-secondary mb-4 heading-display">
                    Features
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <InquiryActions subject={product.name} />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent-light/30">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <h2 className="font-display text-3xl font-bold text-secondary mb-4 heading-display">
                Inquire About This Product
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Interested in {product.name}? Fill out the form and our team will
                get back to you with availability, pricing, and delivery options.
              </p>
              <InquiryActions subject={product.name} />
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <ContactForm
                  defaultSubject={`Product Inquiry: ${product.name}`}
                  productName={product.name}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-wide mx-auto">
            <h2 className="font-display text-3xl font-bold text-secondary mb-8 heading-display">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA
        title="Contact AgroLite"
        description={`Speak with our team about ${product.name} and discover how AgroLite can support your farm.`}
        primaryLabel="Request Consultation"
        secondaryLabel="View All Products"
        secondaryHref="/products"
      />
    </>
  );
}
