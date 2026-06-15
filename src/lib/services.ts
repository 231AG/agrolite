import { IMAGES } from "./images";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "field-assessment",
    title: "Field Assessment Services",
    description: "Professional farm assessments and field evaluations.",
    longDescription:
      "AgroLite Field Assessment Services provide professional farm assessments and field evaluations conducted by experienced AgroLite technicians. Our team visits your site to evaluate conditions, identify opportunities, and deliver practical recommendations that support better agricultural planning and productivity.",
    image: IMAGES.field,
    features: [
      "Site assessments",
      "Farm evaluations",
      "Productivity recommendations",
      "Agricultural planning",
    ],
  },
  {
    slug: "farm-layout-pegging",
    title: "Farm Layout & Pegging Services",
    description: "Professional measurement and farm layout services.",
    longDescription:
      "AgroLite Farm Layout & Pegging Services deliver professional measurement and layout support for agricultural projects. From boundary identification to plantation pegging, we help farmers and investors establish well-planned, efficiently managed farms.",
    image: IMAGES.layout,
    features: [
      "Boundary identification",
      "Pegging points",
      "Plantation layout",
      "Farm planning",
    ],
    suitableFor: [
      "Oil palm plantations",
      "Cocoa farms",
      "Commercial agricultural projects",
    ],
  },
  {
    slug: "soil-testing",
    title: "Soil Testing Services",
    description: "Professional soil analysis and fertility recommendations.",
    longDescription:
      "AgroLite Soil Testing Services provide professional soil analysis to help farmers understand their land and make informed input decisions. Our technicians evaluate soil conditions and provide actionable fertility recommendations tailored to your crops.",
    image: IMAGES.soil,
    features: [
      "Soil pH evaluation",
      "Nutrient level analysis",
      "Soil suitability assessment",
      "Fertility recommendations",
    ],
    benefits: [
      "Improved crop performance",
      "Better fertilizer management",
      "Reduced production risks",
    ],
  },
  {
    slug: "pest-disease-control",
    title: "Pest & Disease Control Services",
    description: "Professional field support for crop protection.",
    longDescription:
      "AgroLite Pest & Disease Control Services provide professional field support for identifying and managing agricultural pests and crop diseases. Our technicians conduct inspections, diagnose problems, and recommend practical crop protection strategies.",
    image: IMAGES.pest,
    features: [
      "Field inspections",
      "Disease identification",
      "Pest management recommendations",
      "Crop protection guidance",
    ],
  },
];

export function getFeaturedServices(limit = 4): Service[] {
  return services.slice(0, limit);
}
