import type { TeamMember } from "@/types";

const PHOTOS_DIR = "/agrolite-team-photos";

export const teamMembers: TeamMember[] = [
  {
    name: "Kangoma Turay",
    role: "CEO-Lead Consultant",
    image: encodeURI(`${PHOTOS_DIR}/Kangoma Turay, CEO-Lead Consultant.jpeg`),
  },
  {
    name: "Princess S. Korboi",
    role: "Operations Manager",
    image: encodeURI(`${PHOTOS_DIR}/Princess V. Korboi - Operations Manager.jpeg`),
  },
  {
    name: "Augustine Kpehe",
    role: "Special Assistant, Office of the CEO",
    image: encodeURI(
      `${PHOTOS_DIR}/Augustine Kpehe, Special Assistant, Office of the CEO.jpeg`
    ),
  },
  {
    name: "Joseph Kpehe",
    role: "Manager, Food Productions and Processing",
    image: encodeURI(
      `${PHOTOS_DIR}/Joseph Kpehe, Manager, food productions and processing.jpeg`
    ),
  },
  {
    name: "Ansumana Kelleh",
    role: "Nursery Manager",
    county: "Lofa County",
    image: encodeURI(`${PHOTOS_DIR}/Ansumana Kelleh, Nursery Manager, Lofa County.jpeg`),
  },
  {
    name: "Mohammed Turay",
    role: "Admin Assistant",
    image: encodeURI(`${PHOTOS_DIR}/Mohammed Turay, Admin Assistant.jpeg`),
  },
  {
    name: "Ezekiel S. Koiwu",
    role: "Nursery Operator",
    county: "Lofa County",
    image: encodeURI(`${PHOTOS_DIR}/Ezekiel S. Koiwu, Nursery Operator, Lofa County.jpeg`),
  },
  {
    name: "John G. Koiwu",
    role: "Nursery Operator",
    county: "Lofa County",
    image: encodeURI(`${PHOTOS_DIR}/John G. Koiwu, Nursery Operator, Lofa County.jpeg`),
  },
];
