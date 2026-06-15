import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/ui/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { COMPANY } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { createMetadata, PAGE_METADATA } from "@/lib/metadata";

export const metadata = createMetadata(PAGE_METADATA.contact);

interface ContactPageProps {
  searchParams: Promise<{ subject?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { subject } = await searchParams;
  const defaultSubject = subject ? decodeURIComponent(subject) : "";

  return (
    <>
      <PageHero
        title="Contact Us"
        description="Get in touch with AgroLite for products, services, partnerships, or general inquiries."
        image={IMAGES.contact}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <FadeIn>
              <SectionHeader
                eyebrow="Get In Touch"
                title="Contact Information"
                description="We'd love to hear from you. Reach out through any of the channels below."
                align="left"
              />
              <div className="space-y-6 -mt-4">
                <div className="flex items-start gap-4 p-5 bg-accent-light/50 rounded-xl">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Address</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {COMPANY.address.line1}
                      <br />
                      {COMPANY.address.line2}
                      <br />
                      {COMPANY.address.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-accent-light/50 rounded-xl">
                  <Phone className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Phone</h3>
                    <div className="space-y-1">
                      {COMPANY.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="block text-muted text-sm hover:text-primary transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-accent-light/50 rounded-xl">
                  <Mail className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Email</h3>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-muted text-sm hover:text-primary transition-colors"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-accent-light/50 rounded-xl">
                  <Clock className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">
                      Business Hours
                    </h3>
                    <p className="text-muted text-sm">
                      Monday – Friday: 8:00 AM – 5:00 PM
                      <br />
                      Saturday: 8:00 AM – 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-border">
                <h2 className="font-display text-2xl font-bold text-secondary mb-2 heading-display">
                  Send Us a Message
                </h2>
                <p className="text-muted text-sm mb-6">
                  Fill out the form below and we&apos;ll respond within 24–48 hours.
                </p>
                <ContactForm defaultSubject={defaultSubject} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section-padding bg-accent-light/30 pt-0">
        <div className="container-wide mx-auto">
          <FadeIn>
            <SectionHeader
              eyebrow="Find Us"
              title="Our Location"
              description="Visit AgroLite at our Paynesville office. Google Maps integration coming soon."
            />
          </FadeIn>
          <div className="relative aspect-[21/9] md:aspect-[3/1] rounded-2xl overflow-hidden bg-primary-dark border border-border shadow-lg">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
              <MapPin className="w-12 h-12 text-accent mb-4" />
              <h3 className="font-display text-xl font-bold mb-2 heading-display">
                AgroLite Company Inc.
              </h3>
              <p className="text-white/80 text-center text-sm max-w-md">
                {COMPANY.address.full}
              </p>
              <p className="text-accent text-sm mt-4 font-medium">
                Interactive map integration ready for Google Maps
              </p>
            </div>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(149,213,178,0.3) 49px, rgba(149,213,178,0.3) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(149,213,178,0.3) 49px, rgba(149,213,178,0.3) 50px)",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
