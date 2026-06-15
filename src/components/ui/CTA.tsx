import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTA({
  title = "Ready to Transform Your Farm?",
  description = "Contact AgroLite today for quality products, expert services, and personalized agricultural solutions.",
  primaryLabel = "Request Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Explore Products",
  secondaryHref = "/products",
}: CTAProps) {
  return (
    <section className="bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="container-wide mx-auto section-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 heading-display">
            {title}
          </h2>
          <p className="text-white/85 text-lg mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-accent-light transition-colors"
            >
              {primaryLabel}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
