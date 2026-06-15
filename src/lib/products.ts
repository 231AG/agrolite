import { IMAGES } from "./images";
import type { Product, ProductCategory } from "@/types";

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "Oil Palm Products",
  "Cocoa Products",
  "Plantain & Banana Products",
  "Value-Added Agricultural Products",
  "Seed Products",
  "Root & Tuber Crops",
  "Nursery Supplies",
  "Farm Inputs",
];

export const products: Product[] = [
  // Oil Palm Products
  {
    slug: "hybrid-tenera-oil-palm-seedlings",
    name: "Hybrid Tenera Oil Palm Seedlings",
    shortDescription:
      "High-yield Hybrid Tenera oil palm seedlings developed for commercial and smallholder farmers.",
    description:
      "AgroLite's Hybrid Tenera oil palm seedlings are nursery-grown to commercial standards for farmers seeking superior productivity and long-term plantation performance. Developed for both commercial estates and smallholder systems, these seedlings deliver strong field establishment and excellent oil production potential across Liberian growing conditions.",
    category: "Oil Palm Products",
    availability: "Available",
    featured: true,
    badge: "Best Seller",
    price: "LRD 375 per seedling",
    image: IMAGES.oilPalmNursery,
    gallery: [IMAGES.oilPalmNursery, IMAGES.oilPalm, IMAGES.nursery],
    benefits: [
      "Up to 30% higher oil production",
      "Early fruiting within 2–3 years",
      "Improved productivity",
      "Larger fruit bunches",
      "Suitable for intercropping systems",
    ],
    features: [
      "Hybrid Tenera variety",
      "Nursery-grown and field-ready",
      "Technical planting guidance available",
      "Bulk orders welcome",
    ],
  },
  {
    slug: "sprouted-oil-palm-seeds",
    name: "Sprouted Oil Palm Seeds",
    shortDescription:
      "Pre-germinated Hybrid Tenera oil palm seeds ready for nursery establishment and seedling production.",
    description:
      "Pre-germinated Hybrid Tenera oil palm seeds from AgroLite provide a reliable starting point for nursery operators and farmers establishing their own seedling production. Each batch is prepared to support high germination success and vigorous early growth in controlled nursery environments.",
    category: "Oil Palm Products",
    availability: "Available",
    image: IMAGES.oilPalmSeeds,
    gallery: [IMAGES.oilPalmSeeds, IMAGES.oilPalmNursery, IMAGES.seedlings],
    benefits: [
      "High germination rate",
      "Nursery-ready",
      "Commercial-grade quality",
      "Improved planting success",
    ],
    features: [
      "Hybrid Tenera variety",
      "Pre-germinated for faster nursery start",
      "Ideal for seedling producers",
      "Contact AgroLite for bulk availability",
    ],
  },
  {
    slug: "sprouted-oil-palm-seed-packs-500",
    name: "Sprouted Oil Palm Seed Packs (500 Seeds)",
    shortDescription:
      "Pack of 500 Hybrid Tenera sprouted oil palm seeds for large-scale nursery establishment.",
    description:
      "This 500-seed pack of sprouted Hybrid Tenera oil palm seeds is designed for large-scale nursery establishment and commercial plantation development. AgroLite supplies quality germinated seeds to support professional nursery operations and agricultural investment projects across Liberia.",
    category: "Oil Palm Products",
    availability: "Available",
    packageSize: "500 Seeds per Pack",
    image: IMAGES.oilPalmSeeds,
    gallery: [IMAGES.oilPalmSeeds, IMAGES.nursery, IMAGES.oilPalm],
    benefits: [
      "Economical for large nursery operations",
      "Consistent Hybrid Tenera genetics",
      "Supports commercial plantation development",
      "Reliable germination performance",
    ],
    features: [
      "500 sprouted seeds per pack",
      "Suitable for commercial nurseries",
      "Plantation project supply",
      "Delivery arrangements available on request",
    ],
  },

  // Cocoa Products
  {
    slug: "hybrid-cocoa-seedlings",
    name: "Hybrid Cocoa Seedlings",
    shortDescription:
      "Premium hybrid cocoa seedlings selected for superior growth, resilience, and productivity.",
    description:
      "AgroLite hybrid cocoa seedlings are selected and nursed for farmers who want stronger field performance, improved resilience, and better long-term profitability. These seedlings support both new plantings and farm renewal programs across Liberia's cocoa-growing regions.",
    category: "Cocoa Products",
    availability: "Available",
    price: "LRD 290 per seedling",
    image: IMAGES.cocoaFarm,
    gallery: [IMAGES.cocoaFarm, IMAGES.cocoa, IMAGES.seedlings],
    benefits: [
      "High yield potential",
      "Improved disease resistance",
      "Early maturity",
      "Better profitability",
    ],
    features: [
      "Nursery-grown hybrid seedlings",
      "Suitable for smallholder and commercial farms",
      "Planting and care guidance available",
      "Seasonal supply — contact for current availability",
    ],
  },
  {
    slug: "hybrid-cocoa-pod-f1-forastero-tc-series-8",
    name: "Hybrid Cocoa Pod F1 (Forastero TC Series-8)",
    shortDescription:
      "Improved hybrid cocoa pod variety for uniform growth, strong field performance, and increased productivity.",
    description:
      "The Hybrid Cocoa Pod F1 (Forastero TC Series-8) is an improved cocoa variety developed for uniform growth, stronger field performance, and increased productivity. It is suited to farmers and propagators seeking consistent quality and reliable production outcomes.",
    category: "Cocoa Products",
    availability: "Available",
    image: IMAGES.cocoaPod,
    gallery: [IMAGES.cocoaPod, IMAGES.cocoaFarm, IMAGES.cocoa],
    benefits: [
      "High yielding",
      "Uniform growth",
      "Strong resilience",
      "Improved pod quality",
    ],
    features: [
      "Forastero TC Series-8 variety",
      "Suitable for propagation and production",
      "Commercial cocoa farming applications",
      "Contact AgroLite for supply details",
    ],
  },
  {
    slug: "hybrid-forastero-cocoa-pods",
    name: "Hybrid Forastero Cocoa Pods",
    shortDescription:
      "Quality hybrid Forastero cocoa pods suitable for commercial cocoa production and propagation.",
    description:
      "AgroLite supplies quality hybrid Forastero cocoa pods for commercial cocoa production and propagation programs. These pods are sourced to support farmers and nursery operators building productive and sustainable cocoa enterprises.",
    category: "Cocoa Products",
    availability: "Available",
    image: IMAGES.cocoa,
    gallery: [IMAGES.cocoa, IMAGES.cocoaPod, IMAGES.cocoaFarm],
    benefits: [
      "Reliable Forastero hybrid quality",
      "Suitable for commercial production",
      "Supports propagation programs",
      "Trusted AgroLite supply",
    ],
    features: [
      "Hybrid Forastero variety",
      "Commercial and nursery use",
      "Quality-assured supply",
      "Inquire for current availability and pricing",
    ],
  },

  // Plantain & Banana Products
  {
    slug: "hybrid-plantain",
    name: "Hybrid Plantain",
    shortDescription:
      "Quality hybrid plantain planting materials prepared for commercial and smallholder cultivation.",
    description:
      "AgroLite hybrid plantain planting materials are prepared for farmers seeking productive, market-ready plantain cultivation. Our materials support both smallholder food production and larger commercial plantain farming operations.",
    category: "Plantain & Banana Products",
    availability: "Contact for Availability",
    image: IMAGES.plantainFarm,
    gallery: [IMAGES.plantainFarm, IMAGES.plantain, IMAGES.field],
    benefits: [
      "Productive hybrid planting material",
      "Suitable for commercial cultivation",
      "Strong market demand crop",
      "Farmer support available",
    ],
    features: [
      "Hybrid plantain varieties",
      "Prepared for field planting",
      "Contact AgroLite for current supply",
      "Planting guidance on request",
    ],
  },
  {
    slug: "plantain-suckers-elephant-giant",
    name: "Plantain Suckers (Elephant Giant Variety)",
    shortDescription:
      "Fully nursed Elephant Giant plantain suckers ready for field transplantation.",
    description:
      "Fully nursed Elephant Giant plantain suckers from AgroLite are ready for field transplantation and commercial plantain production. This vigorous variety is valued for strong growth and large bunch production.",
    category: "Plantain & Banana Products",
    availability: "Available",
    image: IMAGES.plantain,
    gallery: [IMAGES.plantain, IMAGES.plantainFarm, IMAGES.field],
    benefits: [
      "Vigorous growth",
      "Large bunch production",
      "Commercial farming suitability",
    ],
    features: [
      "Elephant Giant variety",
      "Fully nursed and field-ready",
      "Suitable for commercial growers",
      "Bulk orders available",
    ],
  },
  {
    slug: "plantain-banana-suckers",
    name: "Plantain & Banana Suckers",
    shortDescription:
      "Healthy propagation materials suitable for farmers and commercial growers.",
    description:
      "AgroLite provides healthy plantain and banana suckers as propagation materials for farmers and commercial growers. Our suckers support reliable establishment and productive harvests across a range of farm sizes.",
    category: "Plantain & Banana Products",
    availability: "Contact for Availability",
    image: IMAGES.plantainFarm,
    gallery: [IMAGES.plantainFarm, IMAGES.plantain, IMAGES.farmers],
    benefits: [
      "Healthy propagation stock",
      "Suitable for diverse farm scales",
      "Supports food and income generation",
      "AgroLite technical guidance available",
    ],
    features: [
      "Plantain and banana options",
      "Farmer and commercial supply",
      "Contact for variety availability",
      "Delivery options on request",
    ],
  },

  // Value-Added Agricultural Products
  {
    slug: "plantain-chips",
    name: "Plantain Chips",
    shortDescription:
      "Locally processed plantain chips available in multiple flavors.",
    description:
      "AgroLite plantain chips are locally processed from quality plantain, offering a value-added agricultural product for retail and wholesale customers. Available in multiple flavors, they reflect AgroLite's commitment to connecting farm production with market opportunities.",
    category: "Value-Added Agricultural Products",
    availability: "Seasonal Availability",
    image: IMAGES.plantainChips,
    gallery: [IMAGES.plantainChips, IMAGES.plantain, IMAGES.plantainFarm],
    benefits: [
      "Locally processed product",
      "Multiple flavor options",
      "Supports value-added agriculture",
      "Retail and wholesale supply",
    ],
    features: [
      "Processed agricultural product",
      "Seasonal production cycles",
      "Contact for flavor and pack options",
      "Bulk and retail inquiries welcome",
    ],
  },

  // Seed Products
  {
    slug: "guava-seeds",
    name: "Guava Seeds",
    shortDescription:
      "High-quality guava seed packs suitable for fruit production and nursery establishment.",
    description:
      "AgroLite guava seed packs provide high-quality planting material for fruit production and nursery establishment. Ideal for farmers and nursery operators expanding into profitable fruit crop production.",
    category: "Seed Products",
    availability: "Contact for Availability",
    packageSize: "500 Seeds per Pack",
    image: IMAGES.guava,
    gallery: [IMAGES.guava, IMAGES.seeds, IMAGES.seedlings],
    benefits: [
      "Quality guava planting material",
      "Suitable for nursery establishment",
      "Fruit production potential",
      "Commercial and smallholder use",
    ],
    features: [
      "500 seeds per pack",
      "Fruit and nursery applications",
      "Contact for availability",
      "Planting guidance on request",
    ],
  },
  {
    slug: "maize-seeds",
    name: "Maize Seeds",
    shortDescription:
      "Agricultural maize seeds suitable for food production and commercial cultivation.",
    description:
      "AgroLite maize seeds are supplied for food production and commercial cultivation across Liberia. Contact our team for variety options and seasonal availability suited to your farm's needs.",
    category: "Seed Products",
    availability: "Contact for Availability",
    image: IMAGES.maize,
    gallery: [IMAGES.maize, IMAGES.field, IMAGES.seeds],
    benefits: [
      "Food security crop",
      "Commercial cultivation suitability",
      "Reliable agricultural supply",
      "Seasonal planting support",
    ],
    features: [
      "Agricultural maize varieties",
      "Food and commercial use",
      "Contact for variety selection",
      "Bulk supply available on request",
    ],
  },
  {
    slug: "groundnut-seeds",
    name: "Groundnut Seeds",
    shortDescription:
      "Deep red variety groundnut seeds known for productivity and adaptability.",
    description:
      "AgroLite deep red variety groundnut seeds are known for productivity and adaptability in Liberian farming systems. A trusted legume crop for food, income, and soil fertility benefits.",
    category: "Seed Products",
    availability: "Contact for Availability",
    image: IMAGES.groundnut,
    gallery: [IMAGES.groundnut, IMAGES.field, IMAGES.seeds],
    benefits: [
      "Deep red productive variety",
      "Adaptable to local conditions",
      "Food and income generation",
      "Legume crop soil benefits",
    ],
    features: [
      "Deep red groundnut variety",
      "Smallholder and commercial use",
      "Contact for pack sizes",
      "Seasonal availability",
    ],
  },
  {
    slug: "sesame-seeds",
    name: "Sesame Seeds",
    shortDescription:
      "Quality sesame planting seeds suitable for commercial cultivation.",
    description:
      "AgroLite sesame planting seeds support commercial cultivation and diversified farm income. Contact AgroLite for supply details and planting recommendations for your area.",
    category: "Seed Products",
    availability: "Contact for Availability",
    image: IMAGES.sesame,
    gallery: [IMAGES.sesame, IMAGES.field, IMAGES.seeds],
    benefits: [
      "Commercial crop potential",
      "Diversified farm income",
      "Quality planting seed",
      "Market-oriented production",
    ],
    features: [
      "Commercial sesame varieties",
      "Planting material supply",
      "Contact for availability",
      "Agronomic guidance available",
    ],
  },
  {
    slug: "ginger-planting-materials",
    name: "Ginger Planting Materials",
    shortDescription:
      "Premium Yatsun Biri ginger rhizomes suitable for commercial ginger production.",
    description:
      "AgroLite supplies premium Yatsun Biri ginger rhizomes as commercial-grade planting material for ginger production. Selected for strong germination and high productivity in Liberian growing conditions.",
    category: "Seed Products",
    availability: "Available",
    image: IMAGES.ginger,
    gallery: [IMAGES.ginger, IMAGES.field, IMAGES.farmers],
    benefits: [
      "Strong germination",
      "High productivity",
      "Commercial-grade planting material",
    ],
    features: [
      "Yatsun Biri ginger variety",
      "Rhizome planting material",
      "Commercial production suitability",
      "Contact for quantity and pricing",
    ],
  },

  // Root & Tuber Crops
  {
    slug: "seed-yam",
    name: "Seed Yam",
    shortDescription:
      "High-quality yam seed tubers for propagation and commercial production.",
    description:
      "AgroLite seed yam tubers provide high-quality propagation stock for commercial yam production. Selected for healthy growth performance and suitability for productive yam farming systems.",
    category: "Root & Tuber Crops",
    availability: "Available",
    image: IMAGES.yam,
    gallery: [IMAGES.yam, IMAGES.field, IMAGES.farmers],
    benefits: [
      "Healthy propagation stock",
      "Strong growth performance",
      "Suitable for commercial farming",
    ],
    features: [
      "Quality seed yam tubers",
      "Propagation and production use",
      "Commercial farm supply",
      "Contact for seasonal availability",
    ],
  },

  // Nursery Supplies
  {
    slug: "poly-bags",
    name: "Poly Bags",
    shortDescription:
      "Durable nursery poly bags designed for seedling propagation and nursery establishment.",
    description:
      "AgroLite poly bags are durable nursery supplies designed for seedling propagation and professional nursery establishment. Available in multiple sizes and pack options to support cocoa, oil palm, fruit tree, and vegetable seedling production.",
    category: "Nursery Supplies",
    availability: "Available",
    image: IMAGES.polyBags,
    gallery: [IMAGES.polyBags, IMAGES.nursery, IMAGES.seedlings],
    benefits: [
      "Cocoa propagation",
      "Oil palm nurseries",
      "Fruit tree production",
      "Vegetable seedling production",
    ],
    features: [
      "Standard Poly Bags",
      "Cocoa Poly Bags",
      "9 x 9 Inch Poly Bags",
      "12 x 13 Inch Poly Bags",
      "500-Pack Nursery Bags",
    ],
  },
  {
    slug: "pre-nursery-bags",
    name: "Pre-Nursery Bags",
    shortDescription:
      "Professional nursery bags specifically designed for early-stage seedling development.",
    description:
      "AgroLite pre-nursery bags are professional nursery supplies designed for early-stage seedling development. Built for strong root support, excellent drainage, and durable construction in active nursery operations.",
    category: "Nursery Supplies",
    availability: "Available",
    image: IMAGES.nursery,
    gallery: [IMAGES.nursery, IMAGES.polyBags, IMAGES.seedlings],
    benefits: [
      "Strong root support",
      "Excellent drainage",
      "Durable construction",
    ],
    features: [
      "Early-stage seedling development",
      "Professional nursery use",
      "Multiple size options",
      "Bulk supply for cooperatives and nurseries",
    ],
  },

  // Farm Inputs
  {
    slug: "empty-sacs-yam-production",
    name: "Empty Sacs for Yam Production",
    shortDescription:
      "Heavy-duty agricultural sacks used for sack-based yam farming systems.",
    description:
      "AgroLite empty sacs support sack-based yam farming systems that maximize space efficiency for small-scale and urban agricultural production. Heavy-duty construction ensures reliable use throughout the growing cycle.",
    category: "Farm Inputs",
    availability: "Available",
    image: IMAGES.yam,
    gallery: [IMAGES.yam, IMAGES.inputs, IMAGES.field],
    benefits: [
      "Space-efficient farming",
      "Suitable for small-scale and urban production",
      "Easy crop management",
    ],
    features: [
      "Heavy-duty agricultural sacks",
      "Sack yam production systems",
      "Smallholder and urban farming",
      "Bulk supply available",
    ],
  },
  {
    slug: "fertilizer",
    name: "Fertilizer",
    shortDescription:
      "Quality agricultural fertilizer suitable for improving soil fertility and increasing crop productivity.",
    description:
      "AgroLite supplies quality agricultural fertilizer to improve soil fertility and increase crop productivity across multiple crop types. Contact our team for recommendations matched to your soil test results and crop requirements.",
    category: "Farm Inputs",
    availability: "Available",
    image: IMAGES.fertilizer,
    gallery: [IMAGES.fertilizer, IMAGES.soil, IMAGES.field],
    benefits: [
      "Enhanced crop growth",
      "Improved yields",
      "Suitable for multiple crop types",
    ],
    features: [
      "Agricultural-grade fertilizer",
      "Multiple crop applications",
      "Soil fertility improvement",
      "Application guidance available",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
}

export function getFeaturedProducts(limit = 4): Product[] {
  const featured = products.filter((p) => p.featured);
  const rest = products.filter((p) => !p.featured);
  return [...featured, ...rest].slice(0, limit);
}
