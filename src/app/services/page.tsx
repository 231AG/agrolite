import Image from "next/image";
import { PageHero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTA } from "@/components/ui/CTA";
import { FadeIn } from "@/components/ui/FadeIn";
import { services } from "@/lib/services";
import { IMAGES } from "@/lib/images";
import { createMetadata, PAGE_METADATA } from "@/lib/metadata";
import { CheckCircle } from "lucide-react";
import { InquiryActions } from "@/components/ui/InquiryActions";

export const metadata = createMetadata(PAGE_METADATA.services);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Comprehensive agricultural services to support every stage of your farming journey."
        image={IMAGES.consulting}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <FadeIn>
            <SectionHeader
              eyebrow="What We Offer"
              title="Professional Agricultural Services"
              description="AgroLite delivers expert services backed by years of experience in Liberian agriculture."
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 0.08}>
                <ServiceCard service={service} showLink={false} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Info */}
      <section className="section-padding bg-accent-light/30">
        <div className="container-wide mx-auto space-y-16">
          {services.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.05}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Service {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary mt-2 mb-4 heading-display">
                    {service.title}
                  </h2>
                  <p className="text-muted leading-relaxed mb-6">
                    {service.longDescription}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.benefits && service.benefits.length > 0 && (
                    <>
                      <h3 className="font-display text-lg font-bold text-secondary mb-3 heading-display">
                        Benefits
                      </h3>
                      <ul className="space-y-3 mb-6">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {service.suitableFor && service.suitableFor.length > 0 && (
                    <>
                      <h3 className="font-display text-lg font-bold text-secondary mb-3 heading-display">
                        Suitable For
                      </h3>
                      <ul className="space-y-3 mb-6">
                        {service.suitableFor.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  <InquiryActions subject={service.title} />
                </div>
                <div
                  className={`relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <CTA
        title="Need Expert Agricultural Support?"
        description="Schedule a consultation with AgroLite's agricultural professionals today."
        primaryLabel="Request Consultation"
        secondaryLabel="View Products"
        secondaryHref="/products"
      />
    </>
  );
}
