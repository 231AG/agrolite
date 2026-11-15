import { IMAGES } from "./images";
import type { Service } from "@/types";
import { SOIL_TESTING_PATH } from "./soil-testing";

export const services: Service[] = [
  {
    slug: "soil-testing",
    title: "Soil Testing Services",
    description: "Professional soil analysis and fertility recommendations.",
    longDescription:
      "AgroLite Soil Testing Services provide professional soil analysis to help farmers understand their land and make informed input decisions. Samples are analyzed in our own soil laboratory, and our team provides actionable fertility recommendations tailored to your crops.",
    image: IMAGES.soilLab,
    features: [
      "Physical and chemical soil analysis",
      "Macro- and micronutrient testing",
      "Biological health and contamination testing",
      "Fertilizer and pH correction recommendations",
    ],
    benefits: [
      "Improved crop performance",
      "Better fertilizer management",
      "Reduced production risks",
    ],
    detailHref: SOIL_TESTING_PATH,
  },
  {
    slug: "pest-disease-control",
    title: "Pest & Disease Control (Plant Protection)",
    description: "Identify, prevent, and control crop pests and diseases.",
    longDescription:
      "Pests and diseases can wipe out a season's work. AgroLite's plant protection specialists help you identify, prevent, and control crop pests and diseases before they cut into your harvest. We inspect your fields, diagnose the problem accurately, and apply proven Integrated Pest Management (IPM) strategies, combining good farm practices with safe, targeted pesticide use, so you lose less, spend less, and grow healthier crops.",
    image: IMAGES.pestControl,
    features: [
      "Field inspection and scouting",
      "Pest and disease diagnosis",
      "Integrated Pest Management (IPM)",
      "Professional pesticide application",
      "Control and prevention plans",
      "Follow-up monitoring",
    ],
    benefits: [
      "Fewer crop losses",
      "Healthier plants",
      "Safer, more cost-effective chemical use",
      "Higher yields",
    ],
  },
  {
    slug: "farmer-field-training",
    title: "Farmer Field Training",
    description: "Hands-on training in modern, climate-smart farming.",
    longDescription:
      "Knowledge is the most powerful farm input. AgroLite delivers practical, hands-on training on modern, sustainable, and climate-smart farming techniques. Whether you are a smallholder, a cooperative, or an NGO running a farmer program, we equip your farmers with the skills to grow more, lose less, and earn more.",
    image: IMAGES.farmerTraining,
    features: [
      "Crop production",
      "Nursery establishment and management",
      "Soil fertility management",
      "Pest and disease control",
      "Farm management",
      "Post-harvest handling",
      "Climate-smart and improved farming practices",
    ],
    suitableFor: [
      "Farmer groups and cooperatives",
      "NGOs and development projects",
      "Plantation and nursery workers",
      "Youth and women farmer programs",
    ],
  },
  {
    slug: "field-assessment",
    title: "Field Assessment Services",
    description: "Professional farm assessments and field evaluations.",
    longDescription:
      "AgroLite Field Assessment Services provide professional farm assessments and field evaluations conducted by experienced AgroLite technicians. Our team visits your site to evaluate conditions, identify opportunities, and deliver practical recommendations that support better agricultural planning and productivity.",
    image: "/assessments/IMG_20260602_150025_541.jpg",
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
];

export function getFeaturedServices(limit = 4): Service[] {
  return services.slice(0, limit);
}
