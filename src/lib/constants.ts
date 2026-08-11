export const COMPANY = {
  name: "AgroLite Company Inc.",
  tagline: "Growing Beyond Greatness",
  footerTagline: "Growing Beyond Greatness Together",
  founded: 2017,
  email: "info@agrolite.org",
  phones: ["0777185705", "0880761468", "0770660738", "0777462536"],
  address: {
    line1: "Voga Mission, Right Opposite the Cemetery",
    line2: "After Paynesville City Hall",
    city: "Paynesville, Liberia",
    full: "Voga Mission, Right Opposite the Cemetery, After Paynesville City Hall, Paynesville, Liberia",
  },
  whatsapp: "0777185705",
  url: "https://agrolite.com",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/impact", label: "Impact" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
] as const;

export const IMPACT_STATS = [
  { label: "Years of Experience", value: 8, suffix: "+" },
  { label: "Farmers Supported", value: 2500, suffix: "+" },
  { label: "Agricultural Projects", value: 150, suffix: "+" },
  { label: "Communities Reached", value: 45, suffix: "+" },
] as const;

export const WHY_CHOOSE = [
  {
    title: "Quality Products",
    description:
      "Premium hybrid seedlings and farm inputs sourced and tested for Liberian growing conditions.",
    icon: "leaf",
  },
  {
    title: "Agricultural Expertise",
    description:
      "Decades of combined experience in crop production, extension services, and farm management.",
    icon: "expertise",
  },
  {
    title: "Sustainable Practices",
    description:
      "Environmentally responsible farming solutions that protect soil health and community livelihoods.",
    icon: "sustainability",
  },
  {
    title: "Reliable Service",
    description:
      "Consistent delivery, responsive support, and dependable partnerships farmers can count on.",
    icon: "service",
  },
  {
    title: "Community Impact",
    description:
      "Deep commitment to rural development, farmer empowerment, and poverty reduction across Liberia.",
    icon: "community",
  },
  {
    title: "Proven Commitment",
    description:
      "Since 2017, AgroLite has stood beside farmers through every season of growth and challenge.",
    icon: "commitment",
  },
] as const;

export const CORE_VALUES = [
  {
    title: "Integrity",
    description: "Honest dealings and transparent practices in every farmer relationship.",
  },
  {
    title: "Innovation",
    description: "Continuously adopting improved agricultural technologies and methods.",
  },
  {
    title: "Sustainability",
    description: "Building long-term agricultural systems that benefit people and the planet.",
  },
  {
    title: "Excellence",
    description: "Delivering the highest standards in products, services, and outcomes.",
  },
  {
    title: "Community Empowerment",
    description: "Strengthening rural communities through education, access, and opportunity.",
  },
  {
    title: "Accountability",
    description: "Taking responsibility for results and standing behind our commitments.",
  },
] as const;

export const TIMELINE = [
  {
    year: "2017",
    title: "Company Founded",
    description:
      "AgroLite Company Inc. was established to improve farmer productivity through quality agricultural products and services.",
  },
  {
    year: "2018",
    title: "Seedling Nursery Expansion",
    description:
      "Expanded hybrid seedling production capacity to serve growing demand across Montserrado County.",
  },
  {
    year: "2019",
    title: "Extension Services Launch",
    description:
      "Launched agricultural extension and consulting services to support farmers with technical expertise.",
  },
  {
    year: "2020",
    title: "Community Partnerships",
    description:
      "Partnered with local communities and development organizations to scale farmer support programs.",
  },
  {
    year: "2022",
    title: "Product Diversification",
    description:
      "Introduced oil palm, cocoa, and plantain product lines alongside expanded nursery supplies.",
  },
  {
    year: "2024",
    title: "Regional Growth",
    description:
      "Extended reach to additional counties, supporting thousands of farmers across Liberia.",
  },
  {
    year: "2025",
    title: "Future Forward",
    description:
      "Investing in sustainable agriculture, youth farmer programs, and continental expansion plans.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "AgroLite's hybrid seedlings transformed my oil palm plantation. My yields have increased significantly, and their team guided me every step of the way.",
    name: "James K.",
    role: "Oil Palm Farmer, Margibi County",
  },
  {
    quote:
      "The soil testing and farm layout services saved me time and money. AgroLite truly understands what Liberian farmers need to succeed.",
    name: "Sarah T.",
    role: "Cocoa Farmer, Nimba County",
  },
  {
    quote:
      "As a community leader, I've seen AgroLite empower hundreds of farmers in our area. Their commitment to rural development is genuine.",
    name: "Emmanuel D.",
    role: "Community Leader, Bong County",
  },
  {
    quote:
      "Professional, reliable, and knowledgeable. AgroLite's extension services helped our cooperative improve productivity across all member farms.",
    name: "Grace M.",
    role: "Farmer Cooperative Chairperson",
  },
] as const;
