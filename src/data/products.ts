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
      "Our flagship daily runner. Engineered mesh over a full-length EVA stack — light enough for tempo days, cushioned enough for double-digit miles.",
    image: "/assets/products/aero-flux.png",
    extraImages: [
      "/assets/products/aero-flux.png",
      "/assets/products/aero-flux.jpg",
    ],
    sizes: [
      { size: 7, available: false },
      { size: 8, available: true },
      { size: 9, available: true },
      { size: 10, available: true },
      { size: 11, available: true },
      { size: 12, available: true },
    ],
    specs: [
      { label: "Weight", value: "289 g (US 9)" },
      { label: "Heel-to-Toe Drop", value: "8 mm" },
      { label: "Midsole", value: "MAV-FOAM™ Dual-Density EVA (34% Rebound)" },
      { label: "Upper Material", value: "Engineered Aerodynamic Mesh & Suede" },
      { label: "Outsole", value: "Zonal High-Traction Carbon Compound" },
      { label: "Fit Note", value: "True to size. For wide feet, take half size up." },
    ],
    rating: 4.9,
    reviewsCount: 214,
    reviews: [
      {
        id: "rev-1",
        author: "Marcus T.",
        rating: 5,
        date: "2 weeks ago",
        title: "True to size and the bounce is real",
        comment:
          "True to size and the bounce is real. Wore them straight out of the box, zero break-in.",
      },
      {
        id: "rev-2",
        author: "Dana R.",
        rating: 5,
        date: "1 month ago",
        title: "Quality feels double the price",
        comment:
          "Quality feels double the price. Goes with everything I own.",
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
    colorway: "Triple Black / Lime",
    description:
      "The stealth trainer. Knit collar, blacked-out hardware, rockered sole, and neon gel dampening for high-cadence road velocity.",
    image: "/assets/products/ghost-runner.png",
    extraImages: [
      "/assets/products/ghost-runner.png",
      "/assets/products/ghost-runner.jpg",
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
      { label: "Midsole", value: "MAV-FOAM™ Blackout Edition with Lime Gel Pod" },
      { label: "Upper Material", value: "Matte Technical Ripstop & Suede Overlays" },
      { label: "Outsole", value: "Stealth Grip High-Abrasion Rubber" },
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
        title: "Monolithic all-black silhouette",
        comment: "Clean lines, superb heel lockdown, and the lime gel pop is subtle perfection.",
      },
      {
        id: "rev-gr-2",
        author: "Liam H.",
        rating: 5,
        date: "2 weeks ago",
        title: "Zero fatigue after 12 hour shifts",
        comment: "Support is exceptional. Best runner I've picked up this season.",
      },
    ],
  },
  {
    id: "prod-3",
    slug: "terra-247",
    name: "TERRA 247",
    price: 135,
    collection: "Lifestyle",
    colorCategory: "Colour",
    colorway: "Desert Sand / Taupe",
    description:
      "Road-to-trail workhorse in recycled ripstop and brushed taupe suede. Reinforced lateral paneling and natural gum lugged traction.",
    image: "/assets/products/terra-247.png",
    extraImages: [
      "/assets/products/terra-247.png",
      "/assets/products/terra-247.jpg",
    ],
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
      { label: "Midsole", value: "EVA Hybrid Core with Deep Flex Grooves" },
      { label: "Upper Material", value: "Brushed Pigskin Suede & Heavy Ripstop" },
      { label: "Outsole", value: "Lugged Multi-Terrain Compound" },
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
        comment: "The earthy taupe tones pair effortlessly with raw denim and relaxed tailoring.",
      },
    ],
  },
  {
    id: "prod-4",
    slug: "court-prime",
    name: "COURT PRIME",
    price: 150,
    collection: "Court",
    colorCategory: "White",
    colorway: "Chalk Bone / Gum",
    description:
      "A clean bone court classic in full-grain leather. Low-profile silhouette with perforated toe box and vintage cupsole architecture.",
    image: "/assets/products/court-prime.png",
    extraImages: [
      "/assets/products/court-prime.png",
      "/assets/products/court-prime.jpg",
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
      { label: "Weight", value: "315 g (US 9)" },
      { label: "Heel-to-Toe Drop", value: "4 mm" },
      { label: "Midsole", value: "Concealed PU Cushioning Bed" },
      { label: "Upper Material", value: "Full-Grain Italian Calf Leather" },
      { label: "Outsole", value: "Reinforced Stitched Cupsole" },
      { label: "Fit Note", value: "True to size." },
    ],
    rating: 4.8,
    reviewsCount: 112,
    reviews: [
      {
        id: "rev-cp-1",
        author: "Julian V.",
        rating: 5,
        date: "1 week ago",
        title: "Absolute wardrobe foundation",
        comment: "Supple leather that molds to your foot within two wears. Supreme minimalism.",
      },
    ],
  },
  {
    id: "prod-5",
    slug: "baseline-88",
    name: "BASELINE 88",
    price: 155,
    collection: "Court",
    colorCategory: "White",
    colorway: "Ink Navy / Bone Suede",
    description:
      "An 88-inspired high in ink leather over bone suede. Padded ankle collar, heritage heel counter, and reinforced eyestay stitching.",
    image: "/assets/products/baseline-88.png",
    extraImages: [
      "/assets/products/baseline-88.png",
      "/assets/products/baseline-88.jpg",
    ],
    sizes: [
      { size: 7, available: true },
      { size: 8, available: true },
      { size: 9, available: true },
      { size: 10, available: true },
      { size: 11, available: true },
      { size: 12, available: false },
    ],
    specs: [
      { label: "Weight", value: "340 g (US 9)" },
      { label: "Heel-to-Toe Drop", value: "6 mm" },
      { label: "Midsole", value: "High-Rebound Molded EVA" },
      { label: "Upper Material", value: "Top-Grain Leather & Shaggy Suede" },
      { label: "Outsole", value: "Herringbone Pivot Tread" },
      { label: "Fit Note", value: "Secure ankle lockdown. Standard width." },
    ],
    rating: 4.9,
    reviewsCount: 86,
    reviews: [
      {
        id: "rev-b88-1",
        author: "Darius M.",
        rating: 5,
        date: "3 weeks ago",
        title: "Mid-cut perfection",
        comment: "The bone suede contrasting with the ink leather gives strong archival vibes.",
      },
    ],
  },
  {
    id: "prod-6",
    slug: "shatter",
    name: "SHATTER",
    price: 170,
    collection: "Court",
    colorCategory: "Colour",
    colorway: "Volt / Stealth Black",
    description:
      "The one loud pair in a quiet house. Geometric structural cage in matte black bolted over high-tensile neon breathable mesh.",
    image: "/assets/products/shatter.png",
    extraImages: [
      "/assets/products/shatter.png",
      "/assets/products/shatter.jpg",
    ],
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
      { label: "Upper Material", value: "High-Tensile Molded Mesh & TPU Cage" },
      { label: "Outsole", value: "Split-Sole Multi-Directional Grip" },
      { label: "Fit Note", value: "Locked down, secure performance wrap." },
    ],
    rating: 4.7,
    reviewsCount: 142,
    reviews: [
      {
        id: "rev-sh-1",
        author: "Aiden K.",
        rating: 5,
        date: "4 days ago",
        title: "Statement sneaker",
        comment: "Turns heads everywhere. The lateral cage gives incredible stability during cuts.",
      },
    ],
  },
  {
    id: "prod-7",
    slug: "drift",
    name: "DRIFT",
    price: 140,
    collection: "Lifestyle",
    colorCategory: "Colour",
    colorway: "Muted Stone / Olive",
    description:
      "Muted stone suede on an olive-tipped low silhouette. Ergonomic molded insole, gusseted tongue, and rounded heel bevel for effortless strides.",
    image: "/assets/products/drift.png",
    extraImages: [
      "/assets/products/drift.png",
      "/assets/products/drift.jpg",
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
      { label: "Weight", value: "305 g (US 9)" },
      { label: "Heel-to-Toe Drop", value: "7 mm" },
      { label: "Midsole", value: "Lightweight Injected Foam" },
      { label: "Upper Material", value: "Silky Stone Suede & Olive Canvas" },
      { label: "Outsole", value: "Natural Gum Wave Tread" },
      { label: "Fit Note", value: "Generous forefoot fit." },
    ],
    rating: 4.9,
    reviewsCount: 79,
    reviews: [
      {
        id: "rev-dr-1",
        author: "Felix R.",
        rating: 5,
        date: "1 week ago",
        title: "Comfort level 10/10",
        comment: "The olive accent is tasteful. Worn these on walking tours all weekend without sore feet.",
      },
    ],
  },
  {
    id: "prod-8",
    slug: "blackout-low",
    name: "BLACKOUT LOW",
    price: 130,
    collection: "Lifestyle",
    colorCategory: "Black",
    colorway: "Pitch Black / Matte",
    description:
      "The one-bag travel shoe. Featherlight seamless composite upper on an abrasion-resistant rubber base that packs flat and performs everywhere.",
    image: "/assets/products/blackout-low.png",
    extraImages: [
      "/assets/products/blackout-low.png",
      "/assets/products/blackout-low.jpg",
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
      { label: "Weight", value: "265 g (US 9)" },
      { label: "Heel-to-Toe Drop", value: "6 mm" },
      { label: "Midsole", value: "Ultra-Lightweight Packable EVA" },
      { label: "Upper Material", value: "Seamless Hydrophobic Microfiber" },
      { label: "Outsole", value: "All-Surface Micro-Lug Rubber" },
      { label: "Fit Note", value: "Sock-like ergonomic fit." },
    ],
    rating: 4.8,
    reviewsCount: 165,
    reviews: [
      {
        id: "rev-bl-1",
        author: "Nico P.",
        rating: 5,
        date: "6 days ago",
        title: "Perfect travel companion",
        comment: "Weighs almost nothing in my carry-on and looks sharp enough for upscale dinner spots.",
      },
    ],
  },
  {
    id: "prod-9",
    slug: "canvas-ember",
    name: "CANVAS LOW",
    price: 115,
    collection: "Lifestyle",
    colorCategory: "Colour",
    colorway: "Tan Duck Canvas / Ink",
    description:
      "The entry point to the range. Heavyweight 14oz duck canvas with ink contrast piping, nickel-plated eyelets, and vulcanized foxing tape.",
    image: "/assets/products/canvas-ember.png",
    extraImages: [
      "/assets/products/canvas-ember.png",
      "/assets/products/canvas-ember.jpg",
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
      { label: "Weight", value: "330 g (US 9)" },
      { label: "Heel-to-Toe Drop", value: "0 mm (Zero Drop)" },
      { label: "Midsole", value: "Cushioned Ortholite Footbed" },
      { label: "Upper Material", value: "Heavyweight 14oz Washed Duck Canvas" },
      { label: "Outsole", value: "Vulcanized Waffle Gum Rubber" },
      { label: "Fit Note", value: "Classic relaxed fit." },
    ],
    rating: 4.6,
    reviewsCount: 88,
    reviews: [
      {
        id: "rev-ce-1",
        author: "Toby G.",
        rating: 5,
        date: "2 weeks ago",
        title: "Heavy canvas built like a tank",
        comment: "Great heritage feel. The duck canvas ages beautifully with every scuff.",
      },
    ],
  },
];
