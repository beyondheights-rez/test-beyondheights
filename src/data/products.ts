export interface ProductGalleryItem {
  view: "FRONT" | "BACK" | "SIDE" | "DETAIL" | "MATERIAL" | "LIFESTYLE" | "COLLAR";
  image: string;
  label?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  currency?: string;
  category: string;
  subcategory: string;
  image: string;
  secondaryImage?: string;
  gallery?: ProductGalleryItem[];
  description: string;
  features: string[];
  sizes?: string[];
  colors?: { name: string; hex: string; image?: string }[];
  tag?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "beyond-tshirt",
    name: "Beyond T-shirt",
    price: 48,
    category: "Apparel",
    subcategory: "Apparel // Performance",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-front.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-front.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-back.jpg" },
      { view: "COLLAR", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-collar.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-sleeve.jpg" },
      { view: "MATERIAL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-material.jpg" },
    ],
    description:
      "Signature Beyond oversized heavyweight t-shirt crafted in 240 GSM organic long-staple cotton. Features iconic gold BEYOND typographic chest insignia, right sleeve branding, and full gold back print.",
    features: [
      "240 GSM organic ring-spun combed cotton",
      "High-density gold typographic back branding",
      "Reinforced rib collar & signature sleeve print",
      "Boxy relaxed athletic drape with drop shoulders",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Raw Sand", hex: "#D6CCA9", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-front.jpg" },
    ],
    tag: "Core Release",
  },
  {
    id: "human-potential-hoodie",
    name: "Human Potential Hoodie",
    price: 95,
    category: "Apparel",
    subcategory: "Apparel // Heavyweight",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/hoodie-charcoal.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
      { view: "MATERIAL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
    ],
    description:
      "A 500 GSM loopback French terry heavyweight pullover. Cut with an architectural boxy drape, seamless double-layer hood without drawstrings, and reinforced kangaroo pocket with internal key tether.",
    features: [
      "500 GSM custom spun Portuguese cotton",
      "Sculpted drop-shoulder silhouette",
      "Double-walled structured hood architecture",
      "Pre-shrunk cold garment dyed for lived-in comfort",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Charcoal Heather", hex: "#3A3B3C", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
      { name: "Raw Bone", hex: "#F1ECE4", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
      { name: "Onyx", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
    ],
    tag: "Best Seller",
  },
  {
    id: "possibility-cap",
    name: "Possibility Cap",
    price: 35,
    category: "Accessories",
    subcategory: "Accessories // Headwear",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
    ],
    description:
      "Unstructured 6-panel technical running cap crafted in hydro-repellent ripstop nylon. Fitted with laser-perforated side ventilation and a custom gunmetal magnetic buckle closure.",
    features: [
      "Hydro-wicking 4-way stretch ripstop nylon",
      "Laser-cut zonal airflow perforations",
      "Low-profile quick-adjust gunmetal buckle",
      "Antimicrobial moisture-wicking headband",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Olive Gold", hex: "#B59A63", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
      { name: "Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
      { name: "Dune", hex: "#D6CCA9", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
    ],
    tag: "Adaptive",
  },
  {
    id: "movement-track-jacket",
    name: "Movement Track Jacket",
    price: 120,
    category: "Apparel",
    subcategory: "Apparel // Outerwear",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { view: "MATERIAL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
    ],
    description:
      "Asymmetric front-zip windproof shell featuring storm-sealed taped seams and waterproof YKK AquaGuard hardware. Developed for transition between high-velocity training and metropolitan commute.",
    features: [
      "3-layer breathable water-resistant shell (10k/10k)",
      "Asymmetrical ergonomic storm flap closure",
      "Articulated elbow articulation and thumbhole cuffs",
      "Concealed chest card pocket with magnetic seal",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { name: "Desert Slate", hex: "#7E827A", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
    ],
    tag: "System Capsule",
  },
  {
    id: "beyond-utility-bag",
    name: "Beyond Utility Bag",
    price: 65,
    category: "Objects",
    subcategory: "Objects // Carry",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg" },
    ],
    description:
      "Tactical modular duffle constructed from 1000D Cordura ballistic nylon. Features external quick-stow webbing, padded removable shoulder strap with Fidlock magnetic buckle, and weatherproof laptop compartment.",
    features: [
      "1000D Cordura high-tenacity waterproof fabric",
      "Fidlock V-buckle magnetic quick-release harness",
      "Padded 16\" laptop floating sleeve",
      "Waterproof base with abrasion-resistant TPU coating",
    ],
    sizes: ["28L Capacity"],
    colors: [{ name: "Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg" }],
    tag: "Carry Hardware",
  },
  {
    id: "system-01-pants",
    name: "System 01 Pants",
    price: 85,
    category: "Apparel",
    subcategory: "Apparel // Systems",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/system-pants-khaki.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
      { view: "LIFESTYLE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
    ],
    description:
      "Tapered kinetic trousers with articulated 3D knee construction, elasticated cinch hems, and 4 bonded zip pockets. Treated with water-repellent DWR finish for all-weather performance.",
    features: [
      "4-way mechanical stretch technical twill",
      "Articulated gusset for 360-degree freedom",
      "Concealed zip utility cargo pockets",
      "Adjustable bungee hem toggles",
    ],
    sizes: ["28-30 (S)", "31-33 (M)", "34-36 (L)", "38 (XL)"],
    colors: [
      { name: "Utility Khaki", hex: "#A89F8B", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
      { name: "Black Shadow", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
    ],
    tag: "Capsule Core",
  },
  {
    id: "potential-tote",
    name: "Potential Tote",
    price: 45,
    category: "Objects",
    subcategory: "Objects // Carry",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/tote-canvas.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/tote-canvas.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/tote-canvas.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/tote-canvas.jpg" },
      { view: "LIFESTYLE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/tote-canvas.jpg" },
    ],
    description:
      "Heavy-gauge 18oz unbleached organic canvas tote with reinforced box stitching, dual handheld and shoulder strap lengths, and an internal zippered organizer pocket.",
    features: [
      "18oz heavy organic unbleached cotton duck canvas",
      "Dual carry system (hand carry + over-shoulder straps)",
      "High-density silk-screened manifesto graphic",
      "Internal key clasp and zip phone pocket",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Natural Bone", hex: "#F1ECE4", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/tote-canvas.jpg" },
      { name: "Washed Black", hex: "#222222", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/tote-canvas.jpg" },
    ],
    tag: "Limited Object",
  },
  {
    id: "adjustable-running-belt",
    name: "Adjustable Running Belt",
    price: 45,
    category: "Accessories",
    subcategory: "Accessories // Run Carry",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/ADJUSTABLE%20RUNNING%20BELT.png",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/ADJUSTABLE%20RUNNING%20BELT.png" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/ADJUSTABLE%20RUNNING%20BELT%202.png" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/ADJUSTABLE%20RUNNING%20BELT%202.png" },
    ],
    description:
      "Seamless tubular stretch waist band with 360-degree pocket access designed to hold 500ml flask, phone, and 6 gels without bouncing. Features integrated competition bib holder toggles.",
    features: [
      "Zero-bounce snug compression fit with 4-way stretch",
      "Four integrated access portals for fuel & soft flask storage",
      "Internal key tether with secure mini carabiner clip",
      "Integrated elastic race bib toggles for competition day",
    ],
    sizes: ["XS-S", "M-L", "XL-XXL"],
    colors: [
      { name: "Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/ADJUSTABLE%20RUNNING%20BELT.png" },
    ],
    tag: "Essential",
  },
];

