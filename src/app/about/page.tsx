import Image from "next/image";
import { PageHero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/ui/CTA";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { CORE_VALUES, TIMELINE, COMPANY } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { createMetadata, PAGE_METADATA } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata = createMetadata(PAGE_METADATA.about);

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: COMPANY.url },
          { name: "About", url: `${COMPANY.url}/about` },
        ]}
      />
      <PageHero
        title="About AgroLite"
        description="Building Liberia's agricultural future since 2017."
        image={IMAGES.about}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn>
              <SectionHeader
                eyebrow="Our Story"
                title="Company Story"
                description=""
                align="left"
              />
              <div className="space-y-4 text-muted leading-relaxed -mt-8">
                <p>
                  AgroLite was established in {COMPANY.founded} to help farmers
                  improve productivity through access to quality agricultural
                  products and services. What began as a focused seedling nursery
                  operation has grown into a comprehensive agricultural solutions
                  company serving farmers across Liberia.
                </p>
                <p>
                  Our growth journey reflects the resilience and ambition of
                  Liberian agriculture. From expanding our hybrid seedling
                  production to launching extension services and community
                  partnerships, AgroLite has consistently invested in the tools,
                  knowledge, and support that farmers need to succeed.
                </p>
                <p>
                  Today, AgroLite stands as a trusted partner for smallholder
                  farmers, commercial plantations, cooperatives, and development
                  organizations — united by a shared vision of sustainable
                  agricultural growth.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={IMAGES.community}
                  alt="AgroLite community development"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-accent-light/30">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-border h-full">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Mission
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary mt-3 mb-4 heading-display">
                  Our Mission
                </h2>
                <p className="text-muted leading-relaxed">
                  To provide farmers with access to improved agricultural products,
                  technical expertise, and innovative farming solutions that drive
                  sustainable growth.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="bg-primary rounded-2xl p-8 md:p-10 shadow-sm h-full">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                  Vision
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-3 mb-4 heading-display">
                  Our Vision
                </h2>
                <p className="text-white/85 leading-relaxed mb-4">
                  To become one of Africa&apos;s leading agricultural companies by being:
                </p>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Customers&apos; first choice
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Employees&apos; first choice
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Responsible to stakeholders
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    A leader in community development
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <FadeIn>
            <SectionHeader
              eyebrow="What We Stand For"
              title="Core Values"
              description="The principles that guide every decision, partnership, and product at AgroLite."
            />
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((value) => (
              <StaggerItem key={value.title}>
                <div className="p-6 md:p-8 bg-white rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-accent transition-all">
                  <h3 className="font-display text-xl font-bold text-secondary mb-3 heading-display">
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="section-padding bg-primary-dark">
        <div className="container-wide mx-auto">
          <FadeIn>
            <SectionHeader
              eyebrow="Our Journey"
              title="Growth Timeline"
              description="Key milestones in AgroLite's journey from startup to leading agricultural company."
              light
            />
          </FadeIn>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 md:-translate-x-1/2" />
            {TIMELINE.map((item, index) => (
              <FadeIn key={item.year} delay={index * 0.1}>
                <div
                  className={`relative flex items-start gap-6 mb-10 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-primary-dark md:-translate-x-1/2 z-10" />
                  <div className="ml-12 md:ml-0 md:w-1/2 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <span className="text-accent font-bold text-lg">
                      {item.year}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white mt-1 mb-2 heading-display">
                      {item.title}
                    </h3>
                    <p className="text-white/75 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Partner With AgroLite"
        description="Join us in building a stronger agricultural future for Liberia and Africa."
      />
    </>
  );
}
