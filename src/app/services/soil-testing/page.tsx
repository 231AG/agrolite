import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle, FileText } from "lucide-react";
import { PageHero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTA } from "@/components/ui/CTA";
import { InquiryActions } from "@/components/ui/InquiryActions";
import { SoilTestCategoryCard } from "@/components/ui/SoilTestCategoryCard";
import { BreadcrumbJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { COMPANY } from "@/lib/constants";
import { createMetadata, PAGE_METADATA } from "@/lib/metadata";
import {
  SOIL_TESTING_INTRO,
  SOIL_TESTING_LAB_NOTE,
  SOIL_TESTING_PATH,
  SOIL_TEST_AUDIENCE,
  SOIL_TEST_BENEFITS,
  SOIL_TEST_CATEGORIES,
  SOIL_TEST_DELIVERABLES,
  SOIL_TEST_FAQ,
  SOIL_TEST_PROCESS,
} from "@/lib/soil-testing";

export const metadata = createMetadata(PAGE_METADATA.soilTesting);

const HERO_IMAGE = "/assessments/IMG_20260602_141749_199.jpg";
const SIDE_IMAGE = "/services/soil-testing-lab.jpg";
const QUOTE_HREF = `/contact?subject=${encodeURIComponent("Soil Testing Request")}`;

export default function SoilTestingPage() {
  const pageUrl = `${COMPANY.url}${SOIL_TESTING_PATH}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: COMPANY.url },
          { name: "Services", url: `${COMPANY.url}/services` },
          { name: "Soil Testing", url: pageUrl },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Soil Testing & Analysis",
          serviceType: "Soil testing",
          url: pageUrl,
          areaServed: { "@type": "Country", name: "Liberia" },
          provider: { "@id": `${COMPANY.url}/#organization` },
          description: PAGE_METADATA.soilTesting.description,
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Soil testing services",
            itemListElement: SOIL_TEST_CATEGORIES.map((category) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: category.title },
            })),
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: SOIL_TEST_FAQ.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />

      <PageHero
        title="Soil Testing & Analysis Services"
        description="Know your soil before you plant. Lab-backed analysis and clear recommendations for farmers, agribusinesses, and investors across Liberia."
        image={HERO_IMAGE}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Soil Testing" },
        ]}
      />

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <FadeIn>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Why Test Your Soil
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mt-2 mb-5 heading-display">
              Better Decisions Start Below the Surface
            </h2>
            <p className="text-muted leading-relaxed mb-6">{SOIL_TESTING_INTRO}</p>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-accent-light/60 border border-accent">
              <Building2 className="w-6 h-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm font-medium text-primary-dark">{SOIL_TESTING_LAB_NOTE}</p>
            </div>
            <InquiryActions subject="Soil Testing" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={SIDE_IMAGE}
                alt="Soil samples and laboratory equipment in AgroLite's soil testing lab"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Test categories */}
      <section className="section-padding bg-accent-light/30">
        <div className="container-wide mx-auto">
          <FadeIn>
            <SectionHeader
              eyebrow="What We Test"
              title="Complete Soil Analysis"
              description="Choose the tests your farm needs — our team will help you pick the right combination for your crop and goals."
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOIL_TEST_CATEGORIES.map((category, index) => (
              <FadeIn key={category.id} delay={index * 0.05} className="h-full">
                <SoilTestCategoryCard category={category} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding bg-primary-dark">
        <div className="container-wide mx-auto">
          <FadeIn>
            <SectionHeader
              eyebrow="What You Receive"
              title="Results You Can Act On"
              description="Lab numbers alone don't grow crops. Every test comes with expert interpretation and practical recommendations."
              light
            />
          </FadeIn>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SOIL_TEST_DELIVERABLES.map((item, index) => (
              <li key={item}>
                <FadeIn delay={index * 0.04} className="h-full">
                  <div className="h-full flex items-start gap-3 p-5 rounded-xl bg-white/5 border border-white/10">
                    <FileText className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-white/90 text-sm">{item}</span>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <FadeIn>
            <SectionHeader
              eyebrow="How It Works"
              title="From Your Field to Your Report"
            />
          </FadeIn>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOIL_TEST_PROCESS.map((step, index) => (
              <li key={step.title}>
                <FadeIn delay={index * 0.08} className="h-full">
                  <div className="h-full p-6 rounded-2xl border border-border">
                    <span className="inline-flex w-10 h-10 rounded-full bg-primary text-white font-bold items-center justify-center mb-4">
                      {index + 1}
                    </span>
                    <h3 className="font-display text-lg font-bold text-secondary mb-2 heading-display">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Audience & benefits */}
      <section className="section-padding bg-accent-light/30">
        <div className="container-wide mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <FadeIn>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary mb-5 heading-display">
              Who It&apos;s For
            </h2>
            <ul className="space-y-3">
              {SOIL_TEST_AUDIENCE.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary mb-5 heading-display">
              Benefits
            </h2>
            <ul className="space-y-3">
              {SOIL_TEST_BENEFITS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto max-w-3xl">
          <FadeIn>
            <SectionHeader eyebrow="FAQ" title="Common Questions" />
          </FadeIn>
          <div className="space-y-3">
            {SOIL_TEST_FAQ.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-border p-5 open:bg-accent-light/30"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-secondary">
                  {item.question}
                  <ArrowRight
                    className="w-4 h-4 text-primary shrink-0 transition-transform group-open:rotate-90"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-muted leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Have another question?{" "}
            <Link href={QUOTE_HREF} className="text-primary font-semibold hover:underline">
              Ask our team
            </Link>
          </p>
        </div>
      </section>

      <CTA
        title="Ready to Understand Your Soil?"
        description="Book a soil test with AgroLite and get clear, practical recommendations for your farm."
        primaryLabel="Request a Soil Test"
        primaryHref={QUOTE_HREF}
        secondaryLabel="All Services"
        secondaryHref="/services"
      />
    </>
  );
}
