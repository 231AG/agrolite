import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Sprout, Users, TrendingUp, Globe } from "lucide-react";
import { PageHero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CTA } from "@/components/ui/CTA";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { IMPACT_STATS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { createMetadata, PAGE_METADATA } from "@/lib/metadata";

export const metadata = createMetadata(PAGE_METADATA.impact);

const impactSections = [
  {
    icon: Users,
    title: "Community Impact",
    description:
      "AgroLite works hand-in-hand with rural communities across Liberia, creating jobs, supporting local economies, and building agricultural knowledge that lasts for generations.",
    stats: ["45+ communities reached", "2,500+ farmers supported", "150+ projects completed"],
  },
  {
    icon: Sprout,
    title: "Agricultural Development Initiatives",
    description:
      "From seedling nurseries to demonstration farms, our development initiatives introduce improved agricultural practices and technologies that raise productivity across the country.",
    stats: ["Hybrid seedling programs", "Demonstration plot networks", "Crop diversification support"],
  },
  {
    icon: Target,
    title: "Farmer Empowerment Programs",
    description:
      "We empower farmers with training, access to quality inputs, and market linkages — giving them the tools and confidence to build sustainable livelihoods from agriculture.",
    stats: ["Extension training sessions", "Cooperative partnerships", "Youth farmer programs"],
  },
  {
    icon: TrendingUp,
    title: "Poverty Reduction Goals",
    description:
      "AgroLite aligns its work with national and international poverty reduction goals, focusing on income generation, food security, and rural economic development.",
    stats: ["Income growth for smallholders", "Food security improvement", "Rural employment creation"],
  },
  {
    icon: Globe,
    title: "Future Growth Plans",
    description:
      "Looking ahead, AgroLite is investing in expanded production capacity, regional partnerships, and technology adoption to scale our impact across West Africa.",
    stats: ["Regional expansion plans", "Technology integration", "Investment partnerships"],
  },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        title="Our Impact"
        description="Transforming lives and communities through sustainable agricultural development."
        image={IMAGES.impact}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Impact" },
        ]}
      />

      {/* Stats Banner */}
      <section className="section-padding bg-primary">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {IMPACT_STATS.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Sections */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <FadeIn>
            <SectionHeader
              eyebrow="Making a Difference"
              title="Driving Agricultural Transformation"
              description="AgroLite's impact extends far beyond products — we are building the foundation for a thriving agricultural sector in Liberia."
            />
          </FadeIn>

          <div className="space-y-16">
            {impactSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <FadeIn key={section.title} delay={index * 0.05}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-1">
                      <div className="w-14 h-14 rounded-xl bg-accent-light flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <div className="lg:col-span-7">
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary mb-4 heading-display">
                        {section.title}
                      </h2>
                      <p className="text-muted leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                    <div className="lg:col-span-4">
                      <div className="bg-accent-light/50 rounded-xl p-6">
                        <h3 className="font-semibold text-secondary mb-4 text-sm uppercase tracking-wider">
                          Key Highlights
                        </h3>
                        <ul className="space-y-3">
                          {section.stats.map((stat) => (
                            <li
                              key={stat}
                              className="flex items-center gap-2 text-sm text-foreground"
                            >
                              <span className="w-2 h-2 rounded-full bg-primary" />
                              {stat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {index < impactSections.length - 1 && (
                    <hr className="mt-16 border-border" />
                  )}
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Storytelling */}
      <section className="section-padding bg-accent-light/30">
        <div className="container-wide mx-auto">
          <FadeIn>
            <SectionHeader
              eyebrow="Visual Impact"
              title="Stories From the Field"
              description="Every seedling planted, every farmer trained, and every community reached represents a step toward a stronger agricultural future."
            />
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "/assessments/motion_photo_6537110994658851369.jpg",
              IMAGES.community,
              "/assessments/IMG_20260602_150025_541.jpg",
            ].map((img, index) => (
              <StaggerItem key={index}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                  <Image
                    src={img}
                    alt={`AgroLite impact story ${index + 1}`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent flex items-end p-6">
                    <p className="text-white font-semibold">
                      {index === 0
                        ? "Empowering Farmers"
                        : index === 1
                          ? "Building Communities"
                          : "Growing Together"}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Future Vision */}
      <section className="section-padding bg-primary-dark text-white">
        <div className="container-wide mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 heading-display">
              Our Vision for 2030
            </h2>
            <p className="text-white/85 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
              By 2030, AgroLite aims to support over 10,000 farmers, expand operations
              to three additional West African countries, and establish model agricultural
              development centers that serve as hubs for innovation and community growth.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              Learn About Our Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <CTA
        title="Partner With Us for Greater Impact"
        description="Join AgroLite in driving agricultural development and community transformation across Liberia."
        primaryLabel="Become a Partner"
        secondaryLabel="Meet Our Team"
        secondaryHref="/team"
      />
    </>
  );
}
