export interface ProductSpecItem {
  label: string;
  value: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  collection: "Runners" | "Court" | "Lifestyle";
  colorCategory: "Black" | "White" | "Colour";
  colorway: string;
  description: string;
  image: string;
  extraImages: string[];
  sizes: {
    size: number;
    available: boolean;
  }[];
  specs: ProductSpecItem[];
  reviewsCount: number;
  rating: number;
  reviews: ReviewItem[];
}

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    slug: "aero-flux",
    name: "AERO FLUX",
    price: 145,
    collection: "Runners",
    colorCategory: "Colour",
    colorway: "Bone / Volt",
    description:
      "Engineered for fluid energy return and zero-distraction miles. Features our signature dual-density SR-FOAM™ core encased in abrasion-resistant structural knit and full-grain suede overlays.",
    image: "/assets/reference/section2_shoe.png",
    extraImages: [
      "/assets/reference/anatomy_card.png",
      "/assets/reference/hero_shoe_left.png",
      "/assets/reference/details_card_1.png",
    ],
    sizes: [
      { size: 7, available: false }, // Struck through in reference!
      { size: 8, available: true },
      { size: 9, available: true },
      { size: 10, available: true }, // Selected by default
      { size: 11, available: true },
      { size: 12, available: true },
    ],
    specs: [
      { label: "Weight", value: "289 g (US 9)" },
      { label: "Heel-to-Toe Drop", value: "8 mm" },
      { label: "Midsole", value: "SR-FOAM™ Dual-Density (34% Rebound)" },
      { label: "Upper Material", value: "Full-Grain Suede & Abrasion Knit" },
      { label: "Outsole", value: "Zonal High-Traction Carbon Rubber" },
      { label: "Fit Note", value: "True to size. For wide feet, take half size up." },
    ],
    rating: 4.9,
    reviewsCount: 214,
    reviews: [
      {
        id: "rev-1",
        author: "Marcus T.",
        rating: 5,
        date: "2 days ago",
        title: "Incredible dampening and lateral hold",
        comment:
          "The heel strike dampening is unmatched. Wore them for a 15k road session straight out of the box with zero hot spots.",
      },
      {
        id: "rev-2",
        author: "Elena V.",
        rating: 5,
        date: "1 week ago",
        title: "Volt accents look even sharper in hand",
        comment:
          "Build quality on the suede seams is surgical. Sits firmly between technical runner and high fashion.",
      },
    ],
  },
  {
    id: "prod-2",
    slug: "ghost-runner",
    name: "GHOST RUNNER",
    price: 160,
    collection: "Runners",
    colorCategory: "Black",
    colorway: "Triple Black",
    description:
      "Stealth-black marathon chassis built for high-cadence velocity. Matte blackout treatment with micro-perforated medial breathing channels and reinforced heel cage.",
    image: "/assets/reference/details_card_1.png",
    extraImages: [
      "/assets/reference/details_card_1.png",
      "/assets/reference/hero_shoe_left.png",
    ],
    sizes: [
      { size: 7, available: true },
      { size: 8, available: true },
      { size: 9, available: true },
      { size: 10, available: true },
      { size: 11, available: true },
      { size: 12, available: true },
    ],
    specs: [
      { label: "Weight", value: "295 g (US 9)" },
      { label: "Heel-to-Toe Drop", value: "8 mm" },
      { label: "Midsole", value: "SR-FOAM™ Blackout Edition" },
      { label: "Upper Material", value: "Matte Technical Ripstop" },
      { label: "Outsole", value: "Compound Stealth Grip" },
      { label: "Fit Note", value: "True to size." },
    ],
    rating: 4.8,
    reviewsCount: 178,
    reviews: [
      {
        id: "rev-gr-1",
        author: "Kenji S.",
        rating: 5,
        date: "3 days ago",
        title: "Best all-black silhouette of the year",
        comment: "Monolithic aesthetic with elite running mechanics.",
      },
    ],
  },
  {
    id: "prod-3",
    slug: "dune-craft",
    name: "DUNE CRAFT",
    price: 135,
    collection: "Lifestyle",
    colorCategory: "Colour",
    colorway: "Desert Tan / Ochre",
    description:
      "Earth-tone casual silhouette anchored by structural suede overlays and plush EVA-hybrid cushioning for endless city exploration.",
    image: "/assets/reference/anatomy_card.png",
    extraImages: ["/assets/reference/anatomy_card.png"],
    sizes: [
      { size: 7, available: true },
      { size: 8, available: true },
      { size: 9, available: true },
      { size: 10, available: true },
      { size: 11, available: false },
      { size: 12, available: true },
    ],
    specs: [
      { label: "Weight", value: "310 g (US 9)" },
      { label: "Heel-to-Toe Drop", value: "6 mm" },
      { label: "Midsole", value: "EVA Hybrid Core" },
      { label: "Upper Material", value: "Washed Nubuck & Heavy Canvas" },
      { label: "Outsole", value: "Natural Gum Rubber" },
      { label: "Fit Note", value: "True to size." },
    ],
    rating: 4.9,
    reviewsCount: 94,
    reviews: [
      {
        id: "rev-dc-1",
        author: "Soren B.",
        rating: 5,
        date: "5 days ago",
        title: "Subtle luxury texture",
        comment: "The ochre tones pair effortlessly with raw denim and relaxed tailoring.",
      },
    ],
  },
  {
    id: "prod-4",
    slug: "shatter",
    name: "SHATTER",
    price: 170,
    collection: "Court",
    colorCategory: "White",
    colorway: "Optic White / Ice",
    description:
      "Torsional rigidity and rapid pivot control for hardcourt play. Geometric angular heel stabilizer with translucent ice-blue traction plates.",
    image: "/assets/reference/details_card_2.png",
    extraImages: ["/assets/reference/details_card_2.png"],
    sizes: [
      { size: 7, available: true },
      { size: 8, available: true },
      { size: 9, available: true },
      { size: 10, available: true },
      { size: 11, available: true },
      { size: 12, available: false },
    ],
    specs: [
      { label: "Weight", value: "325 g (US 9)" },
      { label: "Heel-to-Toe Drop", value: "10 mm" },
      { label: "Midsole", value: "Rigid Dual-Density Court Foam" },
      { label: "Upper Material", value: "High-Tensile Molded Mesh" },
      { label: "Outsole", value: "Herringbone Ice Compound" },
      { label: "Fit Note", value: "Locked down, secure ankle wrap." },
    ],
    rating: 4.7,
    reviewsCount: 142,
    reviews: [],
  },
  {
    id: "prod-5",
    slug: "apex-court",
    name: "APEX COURT",
    price: 155,
    collection: "Court",
    colorCategory: "White",
    colorway: "Chalk / Forest",
    description:
      "Heritage tournament profile modernized with seamless interior lining and zero-crease leather vamps.",
    image: "/assets/reference/hero_shoe_right.png",
    extraImages: ["/assets/reference/hero_shoe_right.png"],
    sizes: [
      { size: 7, available: true },
      { size: 8, available: true },
      { size: 9, available: true },
      { size: 10, available: true },
      { size: 11, available: true },
      { size: 12, available: true },
    ],
    specs: [
      { label: "Weight", value: "318 g (US 9)" },
      { label: "Heel-to-Toe Drop", value: "8 mm" },
      { label: "Midsole", value: "Encapsulated Air-Cell PU" },
      { label: "Upper Material", value: "Full-Grain Calfskin Leather" },
      { label: "Outsole", value: "Flat Pivot Disc Rubber" },
      { label: "Fit Note", value: "Standard regular fit." },
    ],
    rating: 4.9,
    reviewsCount: 88,
    reviews: [],
  },
  {
    id: "prod-6",
    slug: "velocity-low",
    name: "VELOCITY LOW",
    price: 140,
    collection: "Runners",
    colorCategory: "Black",
    colorway: "Charcoal / Volt",
    description:
      "Low-profile road runner with deep forefoot flex grooves and high-visibility neon accent threading.",
    image: "/assets/reference/hero_shoe_left.png",
    extraImages: ["/assets/reference/hero_shoe_left.png"],
    sizes: [
      { size: 7, available: false },
      { size: 8, available: true },
      { size: 9, available: true },
      { size: 10, available: true },
      { size: 11, available: true },
      { size: 12, available: true },
    ],
    specs: [
      { label: "Weight", value: "275 g (US 9)" },
      { label: "Heel-to-Toe Drop", value: "6 mm" },
      { label: "Midsole", value: "Ultra-Light SR-FOAM™" },
      { label: "Upper Material", value: "Single-Layer Engineered Knit" },
      { label: "Outsole", value: "Micro-Lug Waffle Rubber" },
      { label: "Fit Note", value: "Sock-like snug fit." },
    ],
    rating: 4.8,
    reviewsCount: 65,
    reviews: [],
  },
  {
    id: "prod-7",
    slug: "drift-mono",
    name: "DRIFT MONO",
    price: 125,
    collection: "Lifestyle",
    colorCategory: "White",
    colorway: "Clean White",
    description:
      "Pure minimalist architectural form. Monochromatic optic white treatment with subtle blind debossed branding.",
    image: "/assets/reference/section2_shoe.png",
    extraImages: ["/assets/reference/section2_shoe.png"],
    sizes: [
      { size: 7, available: true },
      { size: 8, available: true },
      { size: 9, available: true },
      { size: 10, available: true },
      { size: 11, available: true },
      { size: 12, available: true },
    ],
    specs: [
      { label: "Weight", value: "305 g (US 9)" },
      { label: "Heel-to-Toe Drop", value: "5 mm" },
      { label: "Midsole", value: "Cushioned Ortho-Lite Bed" },
      { label: "Upper Material", value: "Smooth Nappa Leather" },
      { label: "Outsole", value: "Vulcanized Pure Rubber" },
      { label: "Fit Note", value: "True to size." },
    ],
    rating: 4.9,
    reviewsCount: 112,
    reviews: [],
  },
  {
    id: "prod-8",
    slug: "stride-prime",
    name: "STRIDE PRIME",
    price: 165,
    collection: "Runners",
    colorCategory: "Colour",
    colorway: "Electric Chartreuse",
    description:
      "High-energy neon showpiece featuring carbon-infused propulsion plate and zoned lateral reinforcement.",
    image: "/assets/reference/hero_card_full.png",
    extraImages: ["/assets/reference/hero_card_full.png"],
    sizes: [
      { size: 7, available: true },
      { size: 8, available: true },
      { size: 9, available: true },
      { size: 10, available: true },
      { size: 11, available: true },
      { size: 12, available: false },
    ],
    specs: [
      { label: "Weight", value: "260 g (US 9)" },
      { label: "Heel-to-Toe Drop", value: "10 mm" },
      { label: "Midsole", value: "SR-FOAM™ Supercritical with Carbon Fiber Plate" },
      { label: "Upper Material", value: "Vapor-Weave Monofilament" },
      { label: "Outsole", value: "Laser-Siped Track Grip" },
      { label: "Fit Note", value: "Race fit." },
    ],
    rating: 5.0,
    reviewsCount: 73,
    reviews: [],
  },
  {
    id: "prod-9",
    slug: "street-echo",
    name: "STREET ECHO",
    price: 115,
    collection: "Lifestyle",
    colorCategory: "Black",
    colorway: "Midnight Slate",
    description:
      "Durable urban walker engineered for wet asphalt and cold concrete. Waxed canvas quarter panels and padded collar.",
    image: "/assets/reference/details_card_1.png",
    extraImages: ["/assets/reference/details_card_1.png"],
    sizes: [
      { size: 7, available: true },
      { size: 8, available: true },
      { size: 9, available: true },
      { size: 10, available: true },
      { size: 11, available: true },
      { size: 12, available: true },
    ],
    specs: [
      { label: "Weight", value: "330 g (US 9)" },
      { label: "Heel-to-Toe Drop", value: "7 mm" },
      { label: "Midsole", value: "Dual Shock Cushion" },
      { label: "Upper Material", value: "Waxed Canvas & Suede" },
      { label: "Outsole", value: "Lugged Winter Rubber" },
      { label: "Fit Note", value: "Generous toe box." },
    ],
    rating: 4.8,
    reviewsCount: 51,
    reviews: [],
  },
];
