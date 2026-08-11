import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { HomeHero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhyChooseCard } from "@/components/ui/WhyChooseCard";
import { ProductCard } from "@/components/ui/ProductCard";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TestimonialSlider } from "@/components/ui/TestimonialSlider";
import { CTA } from "@/components/ui/CTA";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { WHY_CHOOSE, IMPACT_STATS, COMPANY } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { getFeaturedProducts } from "@/lib/products";
import { getFeaturedServices } from "@/lib/services";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts(4);
  const featuredServices = getFeaturedServices(3);

  return (
    <>
      <HomeHero image={IMAGES.hero} />

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/assessments/IMG_20250913_140553_639.jpg"
                  alt="AgroLite supporting Liberian farmers"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                <Calendar className="w-4 h-4" />
                Founded in {COMPANY.founded}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-6 heading-display">
                Leading Agricultural Solutions in Liberia
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                AgroLite Company Inc. was established in 2017 with a clear mission:
                to help Liberian farmers improve productivity through access to
                quality agricultural products, expert services, and innovative
                farming solutions.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                From hybrid seedlings to comprehensive extension services, we are
                committed to sustainable agricultural development that transforms
                communities and builds a stronger agricultural future for Liberia
                and beyond.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn Our Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose AgroLite */}
      <section className="section-padding bg-accent-light/30">
        <div className="container-wide mx-auto">
          <FadeIn>
            <SectionHeader
              eyebrow="Why AgroLite"
              title="Why Choose AgroLite"
              description="Trusted by farmers across Liberia for quality products, expert guidance, and genuine community commitment."
            />
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((item) => (
              <StaggerItem key={item.title}>
                <WhyChooseCard {...item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <FadeIn>
            <SectionHeader
              eyebrow="Our Products"
              title="Featured Products"
              description="Premium agricultural products and hybrid seedlings designed for Liberian growing conditions."
            />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {featuredProducts.map((product, index) => (
              <FadeIn key={product.slug} delay={index * 0.1}>
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-white border-t border-border">
        <div className="container-wide mx-auto">
          <FadeIn>
            <SectionHeader
              eyebrow="Our Services"
              title="Expert Agricultural Services"
              description="From field assessment to extension support, AgroLite provides comprehensive services for every stage of your farming journey."
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {featuredServices.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 0.1}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container-wide mx-auto relative z-10">
          <FadeIn>
            <SectionHeader
              eyebrow="Our Impact"
              title="Making a Difference"
              description="Numbers that reflect our commitment to Liberian agriculture and rural communities."
              light
            />
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {IMPACT_STATS.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/impact"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              Explore Our Impact
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-accent-light/20">
        <div className="container-wide mx-auto">
          <FadeIn>
            <SectionHeader
              eyebrow="Testimonials"
              title="What Farmers Say"
              description="Hear from the farmers and community leaders who trust AgroLite for their agricultural needs."
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <TestimonialSlider />
          </FadeIn>
        </div>
      </section>

      <CTA />
    </>
  );
}
