/** Content for the dedicated Soil Testing & Analysis page (/services/soil-testing). */

export type SoilTestIcon =
  | "physical"
  | "chemical"
  | "macro"
  | "micro"
  | "biological"
  | "contamination"
  | "amendment";

export interface SoilTestCategory {
  id: string;
  title: string;
  why: string;
  icon: SoilTestIcon;
  parameters: string[];
}

export const SOIL_TESTING_PATH = "/services/soil-testing";

export const SOIL_TESTING_INTRO =
  "Your soil's condition determines your yields, your fertilizer costs, and how long your land stays productive. AgroLite measures what is in your soil, explains what the results mean, and tells you exactly what to do next — so every bag of fertilizer and every seedling you plant works harder for you.";

export const SOIL_TESTING_LAB_NOTE =
  "In-house laboratory: your samples never leave our hands — from field collection by our technicians to analysis in AgroLite's own soil laboratory and your final report.";

export const SOIL_TEST_CATEGORIES: SoilTestCategory[] = [
  {
    id: "physical",
    title: "Physical Properties",
    why: "How water, air, and roots move through your soil.",
    icon: "physical",
    parameters: [
      "Soil texture (sand, silt, and clay composition)",
      "Soil structure and aggregation",
      "Bulk density",
      "Porosity",
      "Moisture content",
      "Water-holding capacity",
      "Drainage and infiltration rate",
      "Compaction assessment",
    ],
  },
  {
    id: "chemical",
    title: "Chemical Properties",
    why: "Your soil's acidity and its ability to hold and supply nutrients.",
    icon: "chemical",
    parameters: [
      "Soil pH (acidity and alkalinity)",
      "Electrical conductivity (EC) and salinity",
      "Soil organic matter",
      "Soil organic carbon",
      "Cation Exchange Capacity (CEC)",
      "Base saturation",
      "Exchangeable acidity",
      "Exchangeable bases (Ca, Mg, K, Na)",
    ],
  },
  {
    id: "macronutrients",
    title: "Macronutrients",
    why: "The major nutrients your crops need in large amounts.",
    icon: "macro",
    parameters: [
      "Nitrogen (N)",
      "Phosphorus (P)",
      "Potassium (K)",
      "Calcium (Ca)",
      "Magnesium (Mg)",
      "Sulfur (S)",
    ],
  },
  {
    id: "micronutrients",
    title: "Micronutrients",
    why: "Trace elements whose shortage quietly limits yield.",
    icon: "micro",
    parameters: [
      "Manganese (Mn)",
      "Boron (B)",
      "Molybdenum (Mo)",
      "Chloride (Cl)",
    ],
  },
  {
    id: "biological",
    title: "Biological Soil Health",
    why: "The living part of your soil that drives long-term fertility.",
    icon: "biological",
    parameters: [
      "Soil microbial activity",
      "Beneficial soil bacteria assessment",
      "Fungal population assessment",
      "Soil microbial biomass",
      "Soil respiration",
      "Earthworm population assessment",
      "Biological soil health indicators",
    ],
  },
  {
    id: "contamination",
    title: "Contamination & Toxicity",
    why: "Safety for your crops, livestock, and the people who eat them.",
    icon: "contamination",
    parameters: [
      "Heavy metals (lead, cadmium, arsenic, mercury)",
      "Sodicity and sodium toxicity",
      "Potential pesticide residues",
      "Hydrocarbon contamination",
      "Soil toxicity assessment",
    ],
  },
  {
    id: "amendments",
    title: "Fertilizer & Soil Amendment Analysis",
    why: "Make sure what you apply to your land is worth the money.",
    icon: "amendment",
    parameters: [
      "Organic manure nutrient composition",
      "Compost quality assessment",
      "NPK fertilizer composition",
      "Rock phosphate assessment",
      "Agricultural lime quality",
      "Biochar quality assessment",
      "Organic fertilizer nutrient availability",
    ],
  },
];

export const SOIL_TEST_DELIVERABLES = [
  "Comprehensive soil test report",
  "Clear interpretation of laboratory results",
  "Soil fertility classification",
  "Crop-specific nutrient requirements",
  "Recommended fertilizer types and application rates",
  "Soil pH correction (liming) recommendations",
  "Soil improvement and management plan",
  "Long-term soil fertility management recommendations",
];

export const SOIL_TEST_PROCESS = [
  {
    title: "Request a Test",
    description:
      "Contact us by phone, WhatsApp, or our contact form with your location, crop, and farm size.",
  },
  {
    title: "Field Sampling",
    description:
      "Our technicians visit your farm and collect representative soil samples using proper sampling methods.",
  },
  {
    title: "Laboratory Analysis",
    description:
      "Samples are analyzed in AgroLite's own soil laboratory for the parameters your farm needs.",
  },
  {
    title: "Report & Recommendations",
    description:
      "You receive a clear report and a practical action plan — what to apply, how much, and when.",
  },
];

export const SOIL_TEST_AUDIENCE = [
  "Smallholder farmers",
  "Farmer cooperatives",
  "Oil palm and cocoa plantations",
  "Agribusinesses",
  "Investors assessing land before purchase",
  "NGOs and agricultural development projects",
];

export const SOIL_TEST_BENEFITS = [
  "Higher, more reliable crop yields",
  "Less money wasted on the wrong fertilizer",
  "Reduced production risk",
  "Healthier land that stays productive for years",
];

export const SOIL_TEST_FAQ = [
  {
    question: "How much does a soil test cost?",
    answer:
      "Pricing depends on the number of samples, the tests you need, and your farm's location. Contact us for a free quote tailored to your farm.",
  },
  {
    question: "How long does it take to get my results?",
    answer:
      "Because we run our own laboratory, we can move quickly. Turnaround depends on the tests requested — we will give you a timeline when you book.",
  },
  {
    question: "How many samples does my farm need?",
    answer:
      "It depends on the size of your land and how uniform it is. Our technicians plan a sampling pattern that represents your whole field accurately.",
  },
  {
    question: "Do I need every test on this page?",
    answer:
      "No. We recommend the right combination of tests for your crop and goals, so you only pay for the analysis you actually need.",
  },
  {
    question: "Can you test fertilizer, manure, or compost before I use it?",
    answer:
      "Yes. Our fertilizer and soil amendment analysis checks the nutrient content and quality of products before you spend money applying them.",
  },
];
