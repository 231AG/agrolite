import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  showLink?: boolean;
}

export function ServiceCard({ service, showLink = true }: ServiceCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 right-4 font-display text-xl font-bold text-white heading-display">
          {service.title}
        </h3>
      </div>
      <div className="p-6">
        <p className="text-muted text-sm leading-relaxed mb-4">
          {service.description}
        </p>
        {showLink && (
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
            aria-label={`Learn more about ${service.title}`}
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </article>
  );
}
