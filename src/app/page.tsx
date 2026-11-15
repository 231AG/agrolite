import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Bug,
  FlaskConical,
  GraduationCap,
  Handshake,
  Users,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { IMPACT_STATS } from "@/lib/constants";
import { getProductBySlug } from "@/lib/products";
import { getFeaturedServices } from "@/lib/services";
import type { Product } from "@/types";

const HOME_PRODUCT_SLUGS = [
  "hybrid-tenera-oil-palm-seedlings",
  "sprouted-oil-palm-seeds",
  "hybrid-cocoa-pod-f1-forastero-tc-series-8",
];

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "soil-testing": FlaskConical,
  "pest-disease-control": Bug,
  "farmer-field-training": GraduationCap,
};

const WHY_AGROLITE: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Trusted products",
    description: "High-quality, healthy planting materials and inputs.",
    icon: BadgeCheck,
  },
  {
    title: "Practical expertise",
    description: "Local knowledge, our own soil lab, and hands-on support.",
    icon: Users,
  },
  {
    title: "A reliable partner",
    description: "Committed to your farm's long-term success.",
    icon: Handshake,
  },
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`block text-xs font-bold uppercase tracking-[0.14em] mb-2 ${
        light ? "text-white/85" : "text-brand-red"
      }`}
    >
      {children}
    </span>
  );
}

function HomeProductCard({ product }: { product: Product }) {
  const priceHref = `/contact?subject=${encodeURIComponent(`Pricing Request: ${product.name}`)}`;
  return (
    <article className="group h-full flex flex-col bg-white rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
      <Link href={`/products/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-bold text-foreground mb-1.5">
          <Link href={`/products/${product.slug}`} className="hover:text-brand transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{product.shortDescription}</p>
        <div className="flex items-center justify-between gap-3">
          <Link
            href={priceHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:gap-2.5 transition-all"
          >
            Request Price <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          {product.price && (
            <span className="text-sm font-semibold text-brand tabular-nums">{product.price}</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  const products = HOME_PRODUCT_SLUGS.map(getProductBySlug).filter(
    (product): product is Product => Boolean(product)
  );
  const services = getFeaturedServices(3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88vh] md:min-h-[640px] flex items-center overflow-hidden bg-brand-dark">
        <Image
          src="/assessments/motion_photo_6537110994658851369.jpg"
          alt="AgroLite agronomist standing in a mature oil palm plantation"
          fill
          priority
          className="object-cover object-[70%_30%] md:object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#063d1c] via-[#063d1c]/85 to-[#063d1c]/10 md:via-[#063d1c]/70 md:to-transparent" />
        <div className="relative z-10 container-wide mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="max-w-xl">
            <FadeIn>
              <span className="inline-block border-l-4 border-brand-red pl-3 text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-white/90 mb-5">
                Agricultural solutions in Liberia
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-5">
                Helping farmers grow with confidence.
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-md">
                Quality seedlings, farm inputs, soil testing, and practical agricultural support.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-red text-white font-semibold rounded-md border-2 border-white/70 hover:bg-brand-red-dark active:scale-[0.98] transition-all"
                >
                  Explore Products <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-white font-semibold rounded-md border-2 border-white hover:bg-white hover:text-brand-dark active:scale-[0.98] transition-all"
                >
                  Our Services
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-white">
        <div className="container-wide mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeIn>
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/products/orange-seedlings-nursery.jpg"
                alt="Healthy seedlings growing in nursery bags at an AgroLite nursery"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Eyebrow>About AgroLite</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight mb-4">
              Agricultural experience rooted in Liberia.
            </h2>
            <p className="text-muted leading-relaxed mb-6 max-w-prose">
              Since 2017, AgroLite has supplied high-quality planting materials, farm inputs,
              and technical support to farmers and agribusinesses across Liberia, backed by
              our own nurseries and soil laboratory.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-semibold text-brand underline underline-offset-4 hover:gap-3 transition-all"
            >
              Learn more about AgroLite <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Products */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-cream/60">
        <div className="container-wide mx-auto">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <Eyebrow>Our products</Eyebrow>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Agricultural products for productive farms.
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 font-semibold text-brand hover:gap-3 transition-all shrink-0"
              >
                View all products <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <FadeIn key={product.slug} delay={index * 0.08} className="h-full">
                <HomeProductCard product={product} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-white">
        <div className="container-wide mx-auto">
          <FadeIn>
            <Eyebrow>Our services</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight mb-10">
              Support beyond the products.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-border gap-y-10">
            {services.map((service, index) => {
              const Icon = SERVICE_ICONS[service.slug] ?? FlaskConical;
              return (
                <FadeIn key={service.slug} delay={index * 0.08}>
                  <Link
                    href={service.detailHref ?? "/services"}
                    className="group block md:px-8 first:md:pl-0"
                  >
                    <Icon className="w-9 h-9 text-brand mb-4" strokeWidth={1.75} aria-hidden="true" />
                    <h3 className="text-lg font-bold text-foreground mb-1.5 group-hover:text-brand transition-colors">
                      {service.title.replace(/ Services$/, "")}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{service.description}</p>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why AgroLite */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-cream/60">
        <div className="container-wide mx-auto">
          <FadeIn>
            <Eyebrow>Why work with AgroLite</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight mb-10">
              Quality. Expertise. Reliability.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-border gap-y-8">
            {WHY_AGROLITE.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.08}>
                <div className="flex items-start gap-4 md:px-8">
                  <item.icon className="w-10 h-10 text-brand shrink-0" strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-white">
        <div className="container-wide mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeIn>
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/assessments/women.JPG"
                alt="Women farmers working in a field supported by AgroLite"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Eyebrow>Our impact</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight mb-3">
              Real work. Measurable results.
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Supporting farmers, creating livelihoods, and building a stronger agricultural
              sector in Liberia.
            </p>
            <dl className="grid grid-cols-3 divide-x divide-border">
              {IMPACT_STATS.filter((stat) => stat.label !== "Years of Experience").map((stat) => (
                <div key={stat.label} className="px-3 first:pl-0 text-center sm:text-left">
                  <dd className="text-3xl md:text-4xl font-extrabold text-brand tabular-nums">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </dd>
                  <dt className="text-xs sm:text-sm text-muted mt-1">{stat.label}</dt>
                </div>
              ))}
            </dl>
            <Link
              href="/impact"
              className="inline-flex items-center gap-2 mt-8 font-semibold text-brand hover:gap-3 transition-all"
            >
              See our impact <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-20 bg-white">
        <FadeIn>
          <div className="container-wide mx-auto relative overflow-hidden rounded-2xl bg-brand">
            <Image
              src="/products/orange-orchard.jpg"
              alt=""
              fill
              className="object-cover opacity-25 md:opacity-100 md:[mask-image:linear-gradient(to_right,transparent_55%,black_85%)]"
              sizes="100vw"
            />
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6 px-6 sm:px-10 py-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-1">
                  Let&apos;s talk about your farming needs.
                </h2>
                <p className="text-white/90">
                  Get advice on products, services, and farm requirements.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-brand-red font-semibold rounded-md hover:bg-cream active:scale-[0.98] transition-all shrink-0 md:mr-[22%]"
              >
                Contact AgroLite <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
