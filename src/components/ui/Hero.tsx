import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  description?: string;
  image: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHero({
  title,
  description,
  image,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[40vh] md:min-h-[45vh] flex items-end">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 gradient-overlay" />
      <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 pt-32">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/70">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {index > 0 && <span>/</span>}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 heading-display max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="text-white/85 text-lg md:text-xl max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

interface HomeHeroProps {
  image: string;
}

export function HomeHero({ image }: HomeHeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <Image
        src={image}
        alt="Liberian farmers in agricultural fields"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 gradient-overlay" />
      <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold rounded-full mb-6 border border-accent/30">
            Growing Beyond Greatness
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 heading-display">
            Empowering Farmers. Transforming Communities. Building Liberia&apos;s
            Agricultural Future.
          </h1>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            AgroLite Company provides high-quality agricultural products, hybrid
            seedlings, agricultural support services, and sustainable farming
            solutions that help Liberian farmers increase productivity and improve
            livelihoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
