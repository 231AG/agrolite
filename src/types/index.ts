export type ProductCategory =
  | "Oil Palm Products"
  | "Cocoa Products"
  | "Plantain & Banana Products"
  | "Value-Added Agricultural Products"
  | "Seed Products"
  | "Root & Tuber Crops"
  | "Nursery Supplies"
  | "Farm Inputs";

export type Availability =
  | "Available"
  | "Limited Stock"
  | "Contact for Availability"
  | "Seasonal Availability";

export interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: ProductCategory;
  availability: Availability;
  image: string;
  gallery: string[];
  benefits: string[];
  features: string[];
  price?: string;
  badge?: string;
  featured?: boolean;
  packageSize?: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  benefits?: string[];
  suitableFor?: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  county?: string;
}
