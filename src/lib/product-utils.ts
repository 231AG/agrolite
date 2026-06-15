import type { Availability } from "@/types";

export const availabilityStyles: Record<Availability, string> = {
  Available: "bg-green-100 text-green-800",
  "Limited Stock": "bg-yellow-100 text-yellow-800",
  "Contact for Availability": "bg-blue-100 text-blue-800",
  "Seasonal Availability": "bg-orange-100 text-orange-800",
};

export function isProductAvailable(availability: Availability): boolean {
  return (
    availability === "Available" ||
    availability === "Limited Stock" ||
    availability === "Seasonal Availability"
  );
}
