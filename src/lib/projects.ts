/** AgroLite project case studies, shown on /projects. */

export interface Project {
  slug: string;
  name: string;
  summary: string;
  location: string;
  size: string;
  crop: string;
  /** Only set when confirmed by AgroLite. */
  status?: "Ongoing" | "Completed";
  role: string;
  image: string;
  imageAlt: string;
  body: string[];
  servicesDelivered: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "kwekeh-farm",
    name: "Kwekeh Farm",
    summary: "100-acre commercial oil palm plantation",
    location: "Sanoyea District, Bong County, Liberia",
    size: "100 acres",
    crop: "Oil palm",
    role: "Key implementation partner",
    image: "/projects/kwekeh-farm.jpg",
    imageAlt: "AgroLite team members standing beside the Kwekeh Farm sign on a rural road in Bong County",
    body: [
      "AgroLite Company Inc. is proud to be a key implementation partner in the development of Kwekeh Farm, a 100-acre commercial oil palm plantation located in Sanoyea District, Bong County. The project reflects our commitment to promoting sustainable agriculture, expanding commercial oil palm production, and helping investors transform agricultural land into productive long-term assets.",
      "As part of the project, AgroLite sourced premium Malaysian Supergene oil palm seeds and facilitated the establishment of a 10-acre nursery. Our services included the provision of poly nursery bags, nursery establishment, professional farm layout and mapping, and fertilizer planning to support healthy seedling development and successful plantation establishment.",
      "In addition to the agronomic and nursery services, AgroLite undertook farm wiring to support the project's infrastructure and security requirements. This project demonstrates our capacity to provide integrated agribusiness solutions, from quality planting material sourcing to practical farm development and technical implementation.",
    ],
    servicesDelivered: [
      "Malaysian Supergene oil palm seed sourcing",
      "10-acre nursery establishment",
      "Poly nursery bag supply",
      "Farm layout and mapping",
      "Fertilizer planning",
      "Farm wiring",
    ],
  },
  {
    slug: "garotan-farm",
    name: "Garotan Farm",
    summary: "15-acre commercial plantain and banana project",
    location: "Grand Bassa County, Liberia",
    size: "15 acres",
    crop: "Plantain and banana",
    status: "Ongoing",
    role: "Project lead, under direct AgroLite supervision",
    image: "/projects/garotan-farm.jpg",
    imageAlt: "AgroLite's CEO at the plantain and banana multiplication chamber under construction at Garotan Farm",
    body: [
      "AgroLite Company Inc. is proud to be leading the development of Garotan Farm, a 15-acre commercial plantain and banana production project in Grand Bassa County. The project is being implemented under the direct supervision of AgroLite, with the goal of establishing a productive plantation that supports commercial agriculture, food security, and sustainable agribusiness development in Liberia.",
      "As part of the ongoing implementation, AgroLite is responsible for sourcing the required planting materials, agricultural inputs, and other essential supplies. We are also constructing a dedicated plantain and banana multiplication chamber to facilitate the propagation, hardening, and preparation of healthy planting materials for large-scale field establishment.",
      "The project is currently ongoing, with AgroLite overseeing the various stages of development, from infrastructure preparation and planting material multiplication to farm establishment. Through this initiative, we continue to demonstrate our capacity to manage agricultural projects and deliver practical, end-to-end farm development solutions.",
    ],
    servicesDelivered: [
      "Project management and supervision",
      "Planting material and input sourcing",
      "Multiplication chamber construction",
      "Propagation and hardening of planting materials",
      "Farm establishment",
    ],
  },
];
