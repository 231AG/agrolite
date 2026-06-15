import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { availabilityStyles } from "@/lib/product-utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-white">
            {product.badge}
          </span>
        )}
        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${availabilityStyles[product.availability]}`}
        >
          {product.availability}
        </span>
      </div>
      <div className="p-6">
        <span className="text-xs font-medium text-primary uppercase tracking-wide">
          {product.category}
        </span>
        <h3 className="font-display text-xl font-bold text-secondary mt-1 mb-2 heading-display">
          {product.name}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-3 line-clamp-2">
          {product.shortDescription}
        </p>
        {product.price && (
          <p className="text-primary font-semibold text-sm mb-4">{product.price}</p>
        )}
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
        >
          View Details
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
