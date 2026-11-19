import Image from "next/image";
import { CheckCircle, MapPin, Ruler, Sprout, Users } from "lucide-react";
import { PageHero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTA } from "@/components/ui/CTA";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { COMPANY } from "@/lib/constants";
import { createMetadata, PAGE_METADATA } from "@/lib/metadata";
import { PROJECTS } from "@/lib/projects";

export const metadata = createMetadata(PAGE_METADATA.projects);

export default function ProjectsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: COMPANY.url },
          { name: "Projects", url: `${COMPANY.url}/projects` },
        ]}
      />
      <PageHero
        title="Our Projects"
        description="Commercial farms we are helping to build across Liberia, from planting material to field establishment."
        image="/projects/kwekeh-farm.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <FadeIn>
            <SectionHeader
              eyebrow="Featured Projects"
              title="Integrated Farm Development"
              description="AgroLite sources planting materials, establishes nurseries, plans and lays out farms, and supervises implementation, so investors and farmers can turn land into productive long-term assets."
            />
          </FadeIn>

          <div className="space-y-20">
            {PROJECTS.map((project, index) => {
              const reversed = index % 2 === 1;
              const facts = [
                { icon: MapPin, label: project.location },
                { icon: Ruler, label: project.size },
                { icon: Sprout, label: project.crop },
                { icon: Users, label: project.role },
              ];
              return (
                <article
                  key={project.slug}
                  id={project.slug}
                  className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start"
                >
                  <FadeIn className={reversed ? "lg:order-2" : ""}>
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {project.status && (
                        <span className="absolute top-4 left-4 px-3 py-1 rounded-md bg-white/95 text-sm font-semibold text-brand">
                          {project.status}
                        </span>
                      )}
                    </div>
                    <div className="mt-6 rounded-xl bg-accent-light/40 p-5">
                      <h3 className="font-semibold text-secondary mb-3">What AgroLite delivered</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                        {project.servicesDelivered.map((service) => (
                          <li key={service} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.1} className={reversed ? "lg:order-1" : ""}>
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                      Project {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mt-2 mb-1 heading-display">
                      {project.name}
                    </h2>
                    <p className="text-lg text-muted mb-5">{project.summary}</p>
                    <ul className="flex flex-wrap gap-2 mb-6">
                      {facts.map(({ icon: Icon, label }) => (
                        <li
                          key={label}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border text-sm text-foreground"
                        >
                          <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                          {label}
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-4 text-muted leading-relaxed">
                      {project.body.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                      ))}
                    </div>
                  </FadeIn>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTA
        title="Planning a Farm Project?"
        description="From seed sourcing and nurseries to layout, inputs, and supervision, AgroLite can help you develop your land."
        primaryLabel="Discuss Your Project"
        primaryHref={`/contact?subject=${encodeURIComponent("Farm Project Enquiry")}`}
        secondaryLabel="Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
