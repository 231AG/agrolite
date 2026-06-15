import { PageHero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TeamCard } from "@/components/ui/TeamCard";
import { CTA } from "@/components/ui/CTA";
import { FadeIn } from "@/components/ui/FadeIn";
import { teamMembers } from "@/lib/team";
import { IMAGES } from "@/lib/images";
import { createMetadata, PAGE_METADATA } from "@/lib/metadata";

export const metadata = createMetadata(PAGE_METADATA.team);

export default function TeamPage() {
  const [ceo, ...rest] = teamMembers;

  return (
    <>
      <PageHero
        title="Leadership Team"
        description="Meet the people driving AgroLite's mission to transform Liberian agriculture."
        image={IMAGES.team}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Team" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <FadeIn>
            <SectionHeader
              eyebrow="Our Leaders"
              title="Experienced Leadership"
              description="AgroLite is led by a passionate team of agricultural professionals committed to excellence and community impact."
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <TeamCard member={ceo} />
            </FadeIn>
            {rest.map((member, index) => (
              <FadeIn key={member.name} delay={(index + 1) * 0.1}>
                <TeamCard member={member} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent-light/30">
        <div className="container-wide mx-auto text-center max-w-3xl">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-secondary mb-4 heading-display">
              Join Our Growing Team
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              AgroLite is always looking for passionate individuals who share our
              commitment to agricultural development and community empowerment.
              Reach out to learn about career opportunities.
            </p>
            <a
              href="mailto:agrolite.liberia@gmail.com?subject=Career Inquiry"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
            >
              Contact Us About Careers
            </a>
          </FadeIn>
        </div>
      </section>

      <CTA />
    </>
  );
}
