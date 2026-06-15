import { IMAGES } from "./images";
import type { TeamMember } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    name: "Kangoma Turay",
    role: "Founder & CEO",
    image: IMAGES.teamMale,
    bio: "Visionary leader driving AgroLite's mission to transform Liberian agriculture through innovation, quality products, and community empowerment.",
    highlights: [
      "Diploma in General Agriculture",
      "Mandela Washington Fellow (YALI)",
      "Purdue University Entrepreneurship Program",
      "Tony Elumelu Foundation Entrepreneur",
      "Business Administration Studies",
    ],
  },
  {
    name: "Musa A. M. Sheriff",
    role: "Marketing Manager",
    image: IMAGES.team,
    bio: "Leads AgroLite's brand development, market outreach, and farmer engagement strategies across Liberia.",
  },
  {
    name: "Malofa Kabbah",
    role: "Customer Service Manager",
    image: IMAGES.teamFemale,
    bio: "Ensures every farmer and partner receives responsive, professional support and an exceptional AgroLite experience.",
  },
  {
    name: "Mohammed M. Turay",
    role: "Production Manager",
    image: IMAGES.teamMale,
    bio: "Oversees nursery operations, product quality control, and production efficiency across all AgroLite facilities.",
  },
];
