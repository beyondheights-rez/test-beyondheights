"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";
import { ProductModal } from "@/components/product-modal";
import { useCart } from "@/context/cart-context";
import { Product } from "@/data/products";

// ============================================================================
// 7 MEGA-MENU COLLECTION SYSTEMS & PRODUCT DATASETS
// ============================================================================

export interface CollectionGroup {
  id: string;
  num: string;
  name: string;
  badge?: string;
  tagline: string;
  subtitle: string;
  description: string;
  heroImage: string;
  disciplines: string[];
  movementTags: string[];
  systems: string[];
  ctaUrl: string;
  ctaText: string;
  products: Product[];
}

const COLLECTIONS_DATA: CollectionGroup[] = [
  // 01. SPORTS
  {
    id: "sports",
    num: "01",
    name: "SPORTS",
    badge: "CORE ARCHIVE",
    tagline: "ATHLETICS // VELODROME // FIELD",
    subtitle: "FOR THE TRACK, ROAD, AND HIGHEST DEMANDS OF HUMAN PERFORMANCE.",
    description:
      "A complete technical wardrobe engineered for high-velocity athletics, functional training, and multisport endurance. Built from Italian kinetic textiles with laser-cut thermoregulation.",
    heroImage: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
    disciplines: ["ATHLETICS", "RUNNING", "SWIMMING", "CYCLING", "TRAIL", "FUNCTIONAL"],
    movementTags: ["TRACK & ROAD", "OPEN WATER", "MOUNTAIN TERRAIN", "TRAINING STUDIO"],
    systems: ["ATHLETICS SYSTEM 01", "SWIM SYSTEM", "CYCLING AERO", "TRAIL KINETIC"],
    ctaUrl: "/shop",
    ctaText: "EXPLORE ALL SPORTS →",
    products: [
      {
        id: "movement-track-jacket",
        name: "Movement Track Jacket",
        price: 120,
        currency: "$",
        category: "Apparel",
        subcategory: "Apparel // Outerwear",
        image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg",
        gallery: [
          { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
          { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
          { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
        ],
        description: "Kinetic articulated warm-up jacket with 4-way stretch, water-repellent Japanese shell, and laser-vented shoulder armholes.",
        features: ["Japanese micro-ripstop shell", "Concealed 2-way waterproof zipper", "Articulated raglan sleeves", "Reflective 3M tonal graphics"],
        sizes: ["S", "M", "L", "XL"],
        colors: [
          { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
          { name: "Olive Slate", hex: "#7E827A", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
        ],
        tag: "System 01",
      },
      {
        id: "kinetic-running-short",
        name: "Kinetic Running Short",
        price: 58,
        currency: "$",
        category: "Apparel",
        subcategory: "Apparel // Bottoms",
        image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/shorts-black.jpg",
        gallery: [
          { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
          { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
        ],
        description: "5-inch ultra-lightweight running shorts with integrated compression liner and bounce-free phone & gel pockets.",
        features: ["Ultra-light hydrophobic shell", "Zero-chafe compression liner", "Waterproof back phone compartment", "Split side hem for mobility"],
        sizes: ["S", "M", "L", "XL"],
        colors: [
          { name: "Onyx Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
          { name: "Desert Sand", hex: "#D6CCA9", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
        ],
        tag: "Essential",
      },
      {
        id: "tri-compression-suit",
        name: "Triathlon Kinetic Suit",
        price: 180,
        currency: "$",
        category: "Apparel",
        subcategory: "Apparel // Multisport",
        image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
        gallery: [
          { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
          { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
        ],
        description: "One-piece hydrodynamic speedsuit engineered for water-to-bike transitions with fast-dry chamois.",
        features: ["Hydrophobic fabric coating", "4mm ergonomic low-profile pad", "Rear aero nutrition pockets", "UPF 50+ solar protection"],
        sizes: ["S", "M", "L", "XL"],
        colors: [
          { name: "Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
        ],
        tag: "Pro Edition",
      },
    ],
  },

  // 02. IRON MAN
  {
    id: "ironman",
    num: "02",
    name: "IRON MAN",
    badge: "DEDICATED EXPERIENCE",
    tagline: "113.0 KM // SWIM · BIKE · RUN",
    subtitle: "ONE BODY. ONE DAY. ONE CONTINUOUS JOURNEY BEYOND THE LIMITS OF ORDINARY.",
    description:
      "A complete ultra-distance equipment ecosystem spanning 1.9 KM in open water, 90 KM on aerodynamic asphalt, and 21.1 KM to the finish line. Curated kits, telemetry instruments, and rapid transition systems.",
    heroImage: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/hero-swim-dawn.jpg",
    disciplines: ["113 KM DISTANCE", "1.9 KM SWIM", "90 KM BIKE", "21.1 KM RUN", "T1 / T2 TRANSITIONS"],
    movementTags: ["HYDRO-DYNAMICS", "AERO TIME-TRIAL", "21.1 KM RUN", "T1 / T2 TRANSITIONS", "HEAT PROTOCOLS"],
    systems: ["THE COMPLETE IRONMAN KIT", "THE SWIM KIT", "THE BIKE KIT", "THE RUN KIT", "RECOVERY SYSTEM"],
    ctaUrl: "/ironman",
    ctaText: "ENTER IRONMAN EXPERIENCE →",
    products: [
      {
        id: "col-im-tri-suit",
        name: "Performance Tri Suit",
        price: 5990,
        currency: "₹",
        category: "Swim",
        subcategory: "SWIM // PERFORMANCE",
        image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/tri-suit-black.png",
        gallery: [
          { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/tri-suit-black.png" },
        ],
        description: "Anatomical one-piece suit with hydrophobic coating and low-profile chamois for 113 km triathlon endurance.",
        features: ["Italian zero-absorption hydrophobic textile", "Bonded aero seams", "Rear aerodynamic fuel sleeves", "UPF 50+ shield"],
        sizes: ["S", "M", "L", "XL"],
        colors: [
          { name: "Stealth Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/tri-suit-black.png" },
          { name: "Deep Royal Blue", hex: "#1E3A8A", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/tri-suit-blue.png" },
          { name: "Cyan Light Blue", hex: "#38BDF8", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/tri-suit-light%20blue.png" },
          { name: "Forest Kinetic Green", hex: "#15803D", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/tri-suit-green.png" },
        ],
        tag: "Ironman 113 KM",
      },
      {
        id: "col-im-cycling-jersey",
        name: "Performance Cycling Jersey",
        price: 4490,
        currency: "₹",
        category: "Bike",
        subcategory: "BIKE // PERFORMANCE",
        image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/PERFORMANCE%20CYCLING%20JERSEY.png",
        gallery: [
          { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/PERFORMANCE%20CYCLING%20JERSEY.png" },
          { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/PERFORMANCE%20CYCLING%20JERSEY.png" },
        ],
        description: "Aerodynamic race jersey with laser-cut raw sleeve hems and 3 reinforced rear cargo pockets for 90-kilometer fuel loadouts.",
        features: ["Wind-tunnel ribbed shoulders", "Full YKK semi-lock zipper", "Triple rear cargo system", "Coldblack UV reflect"],
        sizes: ["S", "M", "L", "XL"],
        colors: [
          { name: "Desert Sand", hex: "#D6CCA9", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/PERFORMANCE%20CYCLING%20JERSEY.png" },
          { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/PERFORMANCE%20CYCLING%20JERSEY.png" },
        ],
        tag: "Stage 02",
      },
      {
        id: "col-im-transition-bag",
        name: "Transition Gear Bag 45L",
        price: 6490,
        currency: "₹",
        category: "Bags",
        subcategory: "TRANSITION // CARRY",
        image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/transition-bag.jpg",
        gallery: [
          { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/transition-bag.jpg" },
          { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/transition-bag.jpg" },
        ],
        description: "Triathlon-specific T1/T2 transition bag with separate waterproof wetsuit base, helmet carrier harness, and dedicated shoe compartments.",
        features: ["1000D Cordura ballistic waterproof exterior", "Sealed wet compartment", "Fold-out transition mat", "Helmet mesh net"],
        sizes: ["45L"],
        colors: [
          { name: "Ballistic Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/transition-bag.jpg" },
        ],
        tag: "T1 / T2 Essential",
      },
    ],
  },

  // 03. MARATHON
  {
    id: "marathon",
    num: "03",
    name: "MARATHON",
    badge: "SUB-3 SYSTEM",
    tagline: "42.195 KM // ROAD & SPLITS",
    subtitle: "FOR THE KILOMETRES NOBODY SEES. PACING, HEAT INDEX & SUSTAINED VELOCITY.",
    description:
      "Featherweight racing apparel, ultra-breathable single-layer singlets, ergonomic hydration belts, and high-gauge anti-blister sock architecture tailored for the 42.2K distance.",
    heroImage: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
    disciplines: ["42.2K FULL ROAD", "21.1K HALF MARATHON", "ULTRA 50K+", "TEMPO INTERVALS", "SUB-3 PACING"],
    movementTags: ["METROPOLITAN ROAD", "SYNTHETIC TRACK", "TEMPO SPLITS", "SUMMER HEAT RUNS"],
    systems: ["AEROLITE RACE KIT", "SUB-3 MARATHON CAPSULE", "THERMO-REGULATION LAYER", "REFLECTIVE NIGHT SYSTEM"],
    ctaUrl: "/shop?cat=Apparel",
    ctaText: "SHOP MARATHON GEAR →",
    products: [
      {
        id: "col-marathon-singlet",
        name: "Aerolite Marathon Singlet",
        price: 45,
        currency: "$",
        category: "Apparel",
        subcategory: "Apparel // Race Day",
        image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
        gallery: [
          { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
          { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
        ],
        description: "65-gram featherweight open-mesh racing singlet engineered for zero convective resistance and optimal sweat venting.",
        features: ["65g open micro-pore mesh", "Bonded chafe-free border seams", "3M reflective racing insignia", "Pre-shrunk anatomical cut"],
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: [
          { name: "Bone White", hex: "#F1ECE4", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
          { name: "Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
        ],
        tag: "Sub-3 Race",
      },
      {
        id: "col-marathon-split-short",
        name: "Sub-3 Split Race Short",
        price: 52,
        currency: "$",
        category: "Apparel",
        subcategory: "Apparel // Race Bottoms",
        image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg",
        gallery: [
          { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
          { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
        ],
        description: "3-inch deep split stride short with breathable brief liner and two internal gel drop pockets.",
        features: ["3-inch deep side leg overlap", "Anti-chafing microfiber liner", "Dual concealed nutrition slots", "Ultra-soft elastic waistband"],
        sizes: ["S", "M", "L", "XL"],
        colors: [
          { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
        ],
        tag: "Race Ready",
      },
      {
        id: "col-marathon-hydration-belt",
        name: "Adjustable Running Belt",
        price: 32,
        currency: "$",
        category: "Accessories",
        subcategory: "Accessories // Run Carry",
        image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/ADJUSTABLE%20RUNNING%20BELT.png",
        gallery: [
          { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/ADJUSTABLE%20RUNNING%20BELT.png" },
          { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/ADJUSTABLE%20RUNNING%20BELT%202.png" },
          { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/ADJUSTABLE%20RUNNING%20BELT%202.png" },
        ],
        description: "Zero-bounce 360-degree tubular stretch waistband holding 500ml flask, phone, and 6 gels seamlessly.",
        features: ["Continuous perimeter access slots", "No-bounce compression fit", "Integrated key clip", "Race bib toggle attachments"],
        sizes: ["XS-S", "M-L", "XL-XXL"],
        colors: [
          { name: "Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/ADJUSTABLE%20RUNNING%20BELT.png" },
        ],
        tag: "Essential",
      },
    ],
  },

  // 04. TRAVEL
  {
    id: "travel",
    num: "04",
    name: "TRAVEL",
    badge: "BALLISTIC SERIES",
    tagline: "MODULAR TRANSIT // AVIATION & BASECAMP",
    subtitle: "WEATHERPROOF CARRIERS, PACKABLE LAYERING & TRANS-CONTINENTAL MOBILITY.",
    description:
      "Architectural luggage, 1000D Cordura ballistic carry systems, packable weatherproofing, and comfortable stretch transit trousers designed for seamless movement across timezones.",
    heroImage: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg",
    disciplines: ["LONG-HAUL COMMUTE", "TRANS-CONTINENTAL", "BASECAMP TRANSIT", "HIGH-SPEED RAIL", "EXPEDITION"],
    movementTags: ["MODULAR CARRY (28L-45L)", "PACKABLE WATERPROOFING", "COMPRESSION PACKS", "BALLISTIC NYLON"],
    systems: ["CORDURA BALLISTIC DUFFLE", "KINETIC TRAVEL PANT", "MODULAR TECH POUCH", "TRANSIT SHELL"],
    ctaUrl: "/shop?cat=Objects",
    ctaText: "EXPLORE TRAVEL OBJECTS →",
    products: [
      {
        id: "col-modular-duffle-40l",
        name: "Modular Duffle 40L // Ballistic",
        price: 165,
        currency: "$",
        category: "Objects",
        subcategory: "Objects // Luggage",
        image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
        gallery: [
          { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
          { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
        ],
        description: "1000D Cordura ballistic modular overnight duffle with stowable backpack straps and waterproof tech sleeves.",
        features: ["1000D Cordura ballistic nylon", "Fidlock magnetic quick-releases", "Padded 16-inch laptop chamber", "YKK Aquaguard zippers"],
        sizes: ["40L"],
        colors: [
          { name: "Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
        ],
        tag: "Ballistic 1000D",
      },
      {
        id: "col-kinetic-travel-pant",
        name: "Kinetic Travel Pant",
        price: 110,
        currency: "$",
        category: "Apparel",
        subcategory: "Apparel // Pants",
        image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg",
        gallery: [
          { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
          { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
        ],
        description: "Tapered 4-way stretch water-repellent travel trousers with hidden passport zip pocket and magnetic belt buckle.",
        features: ["Wrinkle-resistant kinetic weave", "Concealed security passport pocket", "Water-repellent DWR finish", "Ergonomic gusseted crotch"],
        sizes: ["S", "M", "L", "XL"],
        colors: [
          { name: "Basalt Charcoal", hex: "#3A3B3C", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
          { name: "Raw Olive", hex: "#7E827A", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
        ],
        tag: "Transit Uniform",
      },
      {
        id: "col-weatherproof-tech-pouch",
        name: "Weatherproof Tech Pouch",
        price: 42,
        currency: "$",
        category: "Accessories",
        subcategory: "Accessories // Carry",
        image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
        gallery: [
          { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
        ],
        description: "Accordion-style travel organizer for cables, chargers, passports, and essential accessories in waterproof ripstop.",
        features: ["Origami internal compartment organization", "Weatherproof coated fabric", "External grab handle", "YKK weather-sealed zip"],
        sizes: ["2.5L"],
        colors: [
          { name: "Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
        ],
        tag: "Organizer",
      },
    ],
  },

  // 05. LIFESTYLE
  {
    id: "lifestyle",
    num: "05",
    name: "LIFESTYLE",
    badge: "STUDIO UNIFORM",
    tagline: "ARCHITECTURAL BASICS // 240-500 GSM",
    subtitle: "RAW ORGANIC COTTON, HEAVY FRENCH TERRY & MINIMALIST TAILORING.",
    description:
      "Understated daily uniform staples developed for creative studios, rest periods, and metropolitan life. Features the authentic 240 GSM Beyond T-Shirt and 500 GSM Portuguese loopback French terry pull-overs.",
    heroImage: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-front.jpg",
    disciplines: ["METROPOLITAN UNIFORM", "STUDIO MOTION", "POST-TRAINING REST", "ARCHITECTURAL BASICS", "DAILY LIFE"],
    movementTags: ["240 GSM ORGANIC COTTON", "500 GSM FRENCH TERRY", "MINERAL DYEWASH", "BOXY RELAXED FIT"],
    systems: ["BEYOND T-SHIRT (ORIGINAL)", "HUMAN POTENTIAL HOODIE", "SYSTEM 01 TAPERED PANT", "ARCHITECTURAL UNIFORM"],
    ctaUrl: "/shop?cat=Apparel",
    ctaText: "SHOP LIFESTYLE ESSENTIALS →",
    products: [
      {
        id: "beyond-tshirt",
        name: "Beyond T-shirt",
        price: 48,
        currency: "$",
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
        description: "Signature Beyond oversized heavyweight t-shirt crafted in 240 GSM organic long-staple cotton with gold typographic insignias.",
        features: ["240 GSM organic combed cotton", "High-density gold typographic back branding", "Reinforced rib collar", "Boxy relaxed drape"],
        sizes: ["S", "M", "L", "XL"],
        colors: [
          { name: "Raw Sand", hex: "#D6CCA9", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-front.jpg" },
        ],
        tag: "Original Beyond",
      },
      {
        id: "human-potential-hoodie",
        name: "Human Potential Hoodie",
        price: 95,
        currency: "$",
        category: "Apparel",
        subcategory: "Apparel // Heavyweight",
        image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg",
        gallery: [
          { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
          { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
          { view: "MATERIAL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
        ],
        description: "500 GSM loopback Portuguese French terry heavyweight pullover with seamless double-walled hood.",
        features: ["500 GSM loopback cotton", "Sculpted drop shoulders", "Double-walled structured hood", "Pre-shrunk garment dyed"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: [
          { name: "Charcoal Heather", hex: "#3A3B3C", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
          { name: "Raw Bone", hex: "#F1ECE4", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
        ],
        tag: "Best Seller",
      },
      {
        id: "col-system01-tapered-pant",
        name: "System 01 Tapered Pant",
        price: 88,
        currency: "$",
        category: "Apparel",
        subcategory: "Apparel // Bottoms",
        image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg",
        gallery: [
          { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
        ],
        description: "Tailored everyday sweatpants constructed from 420 GSM fleece with concealed zip side pockets.",
        features: ["420 GSM heavyweight fleece", "Deep drop-in zip security pockets", "Anatomical tapered leg silhouette", "Ribbed ankle cuffs"],
        sizes: ["S", "M", "L", "XL"],
        colors: [
          { name: "Onyx Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
        ],
        tag: "Essential",
      },
    ],
  },

  // 06. ACCESSORIES
  {
    id: "accessories",
    num: "06",
    name: "ACCESSORIES",
    badge: "HARDWARE & WEAR",
    tagline: "OPTICS // HEADWEAR // HYDRATION",
    subtitle: "PRECISION-CRAFTED ATTACHMENTS TO COMPLETE EVERY PERFORMANCE SYSTEM.",
    description:
      "Hydro-wicking ripstop headwear with magnetic gunmetal clasps, polarized aero optics, 316 double-walled stainless flasks, and anatomical anti-friction sock systems.",
    heroImage: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
    disciplines: ["TECHNICAL HEADWEAR", "PERFORMANCE OPTICS", "INSULATED FLASKS", "MAGNETIC HARDWARE", "COMPRESSION SOCKS"],
    movementTags: ["RIPSTOP NYLON", "LASER-CUT AIRFLOW", "316 STEEL", "ANTI-ODOR SILVER WEAVE"],
    systems: ["POSSIBILITY CAP SERIES", "750ML FLASK SYSTEM", "KINETIC SOCKS", "VALET HARDWARE"],
    ctaUrl: "/shop?cat=Accessories",
    ctaText: "EXPLORE ACCESSORIES →",
    products: [
      {
        id: "possibility-cap",
        name: "Possibility Cap",
        price: 35,
        currency: "$",
        category: "Accessories",
        subcategory: "Accessories // Headwear",
        image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg",
        gallery: [
          { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
          { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
          { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
        ],
        description: "Unstructured 6-panel technical running cap in hydro-repellent ripstop with magnetic gunmetal buckle.",
        features: ["Hydro-wicking ripstop nylon", "Laser-cut zonal airflow", "Gunmetal magnetic buckle", "Moisture-wicking sweatband"],
        sizes: ["One Size"],
        colors: [
          { name: "Olive Gold", hex: "#B59A63", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
          { name: "Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
        ],
        tag: "Core Accessory",
      },
      {
        id: "col-hydration-flask-750",
        name: "750ml Insulated Steel Bottle",
        price: 38,
        currency: "$",
        category: "Accessories",
        subcategory: "Accessories // Hydration",
        image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
        gallery: [
          { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
        ],
        description: "Double-walled vacuum insulated 316 surgical stainless steel bottle with powder-coat textured grip.",
        features: ["24-hour cold temperature retention", "316 surgical grade stainless steel", "Leakproof textured carry lid", "Taste-neutral interior"],
        sizes: ["750ML"],
        colors: [
          { name: "Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
          { name: "Raw Steel", hex: "#777777", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
        ],
        tag: "Hardware",
      },
      {
        id: "col-kinetic-compression-socks",
        name: "Kinetic Compression Socks",
        price: 24,
        currency: "$",
        category: "Accessories",
        subcategory: "Accessories // Socks",
        image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
        gallery: [
          { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
        ],
        description: "Anatomical anti-blister running and cycling compression socks woven with 200-needle density yarn.",
        features: ["Targeted metatarsal padding", "Midfoot elastic lock", "Silver-ion anti-odor thread", "Seamless toe closure"],
        sizes: ["S", "M", "L"],
        colors: [
          { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
          { name: "Raw Cream", hex: "#E8E2D5", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
        ],
        tag: "Anti-Blister",
      },
    ],
  },

  // 07. SPECIAL EDITIONS
  {
    id: "special",
    num: "07",
    name: "SPECIAL EDITIONS",
    badge: "LIMITED LOT // 100 PIECES",
    tagline: "NUMBERED ARCHIVE // CAPSULES & MONOLITHS",
    subtitle: "EXPERIMENTAL RELEASES, HAND-CAST CERAMICS & ULTRA-LIMITED PROTOYPES.",
    description:
      "Rare archival objects, numbered foundry drops, and special edition apparel crafted in small batches for collectors and athletes committed to absolute craftsmanship.",
    heroImage: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
    disciplines: ["PROTOTYPE 001", "IRONMAN 140.6 CAPSULE", "MANIFESTO MONOLITH", "HAND-CAST STONEWARE", "NUMBERED EDITIONS"],
    movementTags: ["NUMBERED LOT ARCHIVE", "MINERAL RESIN", "PORTUGUESE FLEECE", "GOLD METALLURGIC PRINT"],
    systems: ["IRONMAN COMPLETE KIT", "ARCHITECTURAL STONEWARE", "BLACKOUT CAPSULE 01", "VAULT ARCHIVES"],
    ctaUrl: "/shop?cat=Objects",
    ctaText: "EXPLORE SPECIAL EDITIONS →",
    products: [
      {
        id: "col-stoneware-valet-tray",
        name: "Basalt Stoneware Valet Tray",
        price: 85,
        currency: "$",
        category: "Objects",
        subcategory: "Objects // Stoneware",
        image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
        gallery: [
          { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
          { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
        ],
        description: "Hand-cast chiseled basalt stoneware tray with cork damping base for everyday carry items and timepieces.",
        features: ["Heavyweight hand-cast mineral stoneware", "Chiseled matte textured finish", "Natural Portuguese cork base", "Individually numbered archival stamp"],
        sizes: ["One Size"],
        colors: [
          { name: "Basalt Dark Grey", hex: "#2A2A2A", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
        ],
        tag: "Numbered Drop",
      },
      {
        id: "col-blackout-hoodie-ltd",
        name: "Blackout Manifesto Hoodie // 001",
        price: 115,
        currency: "$",
        category: "Apparel",
        subcategory: "Apparel // Special",
        image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg",
        gallery: [
          { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
          { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
        ],
        description: "All-black 520 GSM heavyweight hoodie with tonal high-density silicone manifesto print along the spine.",
        features: ["520 GSM loopback cotton", "Tonal high-density spine print", "Matte black metal eyelets", "Archival edition patch"],
        sizes: ["S", "M", "L", "XL"],
        colors: [
          { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
        ],
        tag: "Limited Batch",
      },
      {
        id: "col-founders-tee-gold",
        name: "Founders Edition Gold Tee",
        price: 65,
        currency: "$",
        category: "Apparel",
        subcategory: "Apparel // Special",
        image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-back.jpg",
        gallery: [
          { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-front.jpg" },
          { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-back.jpg" },
          { view: "COLLAR", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-collar.jpg" },
          { view: "MATERIAL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-material.jpg" },
        ],
        description: "Heavyweight 240 GSM organic cotton tee finished with 24k gold foil metallurgic back typography.",
        features: ["240 GSM heavyweight combed cotton", "24k gold foil metallurgic print", "Numbered inside neck label", "Custom matte gift packaging"],
        sizes: ["S", "M", "L", "XL"],
        colors: [
          { name: "Raw Sand", hex: "#D6CCA9", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-front.jpg" },
        ],
        tag: "Founders Release",
      },
    ],
  },
];

// Reusable luxury product card for collection sections
function CollectionProductCard({
  product,
  onOpenModal,
}: {
  product: Product;
  onOpenModal: (product: Product) => void;
}) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || "Standard");
  const [isHovered, setIsHovered] = useState(false);

  const activeColorObj = product.colors?.find((c) => c.name === selectedColor);
  const primaryImage = activeColorObj?.image || product.image;
  const secondaryImage = product.gallery && product.gallery.length > 1 ? product.gallery[1].image : primaryImage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
      onClick={() => onOpenModal(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col group cursor-pointer"
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#E5DFC5] rounded-[2px] shadow-xs">
        <Image
          src={isHovered && secondaryImage !== primaryImage ? secondaryImage : primaryImage}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-104 select-none"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
          {product.tag ? (
            <span className="px-2.5 py-1 text-[9px] uppercase font-bold tracking-widest bg-[#111111] text-[#B59A63] backdrop-blur-md shadow-xs">
              {product.tag}
            </span>
          ) : (
            <span />
          )}

          {product.gallery && product.gallery.length > 1 && (
            <span className="px-2 py-0.5 bg-[#111111]/70 backdrop-blur-md text-[#F1ECE4] font-sans font-medium text-[8px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {product.gallery.length} VIEWS
            </span>
          )}
        </div>

        {/* Hover Quick Action */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
          <span className="w-full py-2.5 bg-[#F1ECE4] hover:bg-[#111111] text-[#111111] hover:text-[#F1ECE4] font-sans font-bold text-[10px] uppercase tracking-widest text-center backdrop-blur-xs transition-colors shadow-md">
            QUICK VIEW // SPECS
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1.5 pt-4 w-full">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-widest font-semibold text-[#B59A63]">
          <span>{product.subcategory}</span>
        </div>

        <div className="flex items-baseline justify-between gap-3">
          <h4 className="font-sans font-bold text-[14px] leading-tight text-[#111111] uppercase tracking-tight group-hover:text-[#B59A63] transition-colors truncate">
            {product.name}
          </h4>
          <span className="font-sans font-black text-[14px] text-[#111111] shrink-0">
            {product.currency || "$"}{product.price.toLocaleString()}
          </span>
        </div>

        {product.colors && product.colors.length > 1 && (
          <div className="flex items-center gap-2 pt-1" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-1.5">
              {product.colors.map((col) => (
                <button
                  key={col.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedColor(col.name);
                  }}
                  className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${selectedColor === col.name
                      ? "border-[#111111] scale-125 shadow-xs ring-1 ring-[#111111]/30"
                      : "border-black/20 hover:scale-110 opacity-70 hover:opacity-100"
                    }`}
                  style={{ backgroundColor: col.hex }}
                  title={col.name}
                />
              ))}
            </div>
            <span className="font-sans text-[9px] uppercase tracking-wider text-[#777777]">
              {selectedColor}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function CollectionsContent() {
  const { setQuickViewProduct } = useCart();
  const searchParams = useSearchParams();

  const filterParam =
    searchParams?.get("filter") ||
    searchParams?.get("c") ||
    searchParams?.get("collection");

  const [selectedFilterOverride, setSelectedFilterOverride] = useState<
    string | null
  >(null);

  const activeFilter = useMemo(() => {
    if (selectedFilterOverride !== null) {
      return selectedFilterOverride;
    }
    if (filterParam) {
      const valid = [
        "sports",
        "ironman",
        "marathon",
        "travel",
        "lifestyle",
        "accessories",
        "special",
        "all",
      ];
      const lower = filterParam.toLowerCase();
      if (valid.includes(lower)) {
        return lower === "all" ? "ALL" : lower;
      }
    }
    return "ALL";
  }, [filterParam, selectedFilterOverride]);

  const setActiveFilter = (tabId: string) => {
    setSelectedFilterOverride(tabId);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      const elem = document.getElementById(hash);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, [searchParams]);

  const handleOpenProductModal = (product: Product) => {
    const colorObj = product.colors?.[0];
    setQuickViewProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      currency: product.currency || "$",
      category: product.category,
      subcategory: product.subcategory,
      image: colorObj?.image || product.image,
      gallery: product.gallery,
      description: product.description,
      features: product.features,
      sizes: product.sizes,
      colors: product.colors,
      tag: product.tag,
    });
  };

  const filteredCollections = useMemo(() => {
    if (activeFilter === "ALL") return COLLECTIONS_DATA;
    return COLLECTIONS_DATA.filter((col) => col.id === activeFilter);
  }, [activeFilter]);

  return (
    <main className="relative min-h-screen w-full bg-[#F1ECE4] flex flex-col items-center overflow-x-hidden selection:bg-[#111111] selection:text-[#F1ECE4]">
      {/* Navigation Header */}
      <Header />

      {/* Main Container */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-start bg-[#F1ECE4]">

        {/* ============================================================ */}
        {/* HERO SECTION */}
        {/* ============================================================ */}
        <section className="w-full px-6 sm:px-12 md:px-20 pt-10 md:pt-16 pb-12 flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 border-b border-[#111111]/[0.082] pb-10">
            <div className="space-y-3 max-w-2xl">
              <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#B59A63] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B59A63]" />
                THE 7 SYSTEM ARCHIVES // 2026 RELEASES
              </span>
              <h1 className="font-display font-black text-[70px] sm:text-[100px] md:text-[130px] lg:text-[150px] leading-[80%] text-[#111111] tracking-tighter uppercase">
                COLLECTIONS
              </h1>
            </div>

            <div className="flex flex-col items-start lg:items-end space-y-1 text-left lg:text-right">
              <span className="font-display font-black text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight">
                7 CURATED SYSTEMS
              </span>
              <p className="font-sans text-xs text-[#555555] uppercase tracking-wider max-w-sm">
                SPORTS · IRON MAN · MARATHON · TRAVEL · LIFESTYLE · ACCESSORIES · SPECIAL EDITIONS
              </p>
            </div>
          </div>

          {/* 7 Collection Category Filter Bar */}
          <div className="w-full border-y border-[#111111] py-4 flex flex-row items-center justify-between overflow-x-auto no-scrollbar gap-3 sm:gap-6">
            {[
              { id: "ALL", label: "ALL COLLECTIONS" },
              { id: "sports", label: "SPORTS" },
              { id: "ironman", label: "IRON MAN", badge: "140.6" },
              { id: "marathon", label: "MARATHON" },
              { id: "travel", label: "TRAVEL" },
              { id: "lifestyle", label: "LIFESTYLE" },
              { id: "accessories", label: "ACCESSORIES" },
              { id: "special", label: "SPECIAL EDITIONS" },
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 font-sans font-bold text-[11px] leading-[14px] uppercase tracking-wider transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${isActive
                      ? "bg-[#111111] text-[#F1ECE4] rounded-[1px] shadow-xs"
                      : "text-[#111111] hover:text-[#B59A63]"
                    }`}
                >
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className={`text-[8px] px-1 py-0.2 rounded-[1px] font-black ${isActive ? "bg-[#B59A63] text-[#111111]" : "bg-[#111111] text-[#B59A63]"}`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* ============================================================ */}
        {/* COLLECTIONS STORY & PRODUCT CATALOG STACK */}
        {/* ============================================================ */}
        <div className="w-full flex flex-col gap-24 md:gap-32 px-6 sm:px-12 md:px-20 pb-32">
          {filteredCollections.map((collection) => (
            <section
              key={collection.id}
              id={collection.id}
              className="w-full flex flex-col gap-12 border-t border-[#111111]/[0.082] pt-16 md:pt-20"
            >
              {/* Collection Header Block */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Story Column */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-display font-black text-2xl text-[#B59A63]">
                        {collection.num} {"//"}
                      </span>
                      {collection.badge && (
                        <span className="px-2.5 py-0.5 bg-[#111111] text-[#B59A63] font-sans font-bold text-[9px] uppercase tracking-widest">
                          {collection.badge}
                        </span>
                      )}
                    </div>

                    <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-[#111111] uppercase tracking-tight leading-none">
                      {collection.name}
                    </h2>
                    <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#B59A63] block pt-1">
                      {collection.tagline}
                    </span>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-[#444444] leading-relaxed max-w-xl">
                    {collection.description}
                  </p>

                  {/* Disciplines & Systems tags */}
                  <div className="space-y-3 pt-2 border-t border-[#111111]/[0.08]">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-sans font-bold text-[10px] uppercase text-[#111111] tracking-wider">
                        DISCIPLINES:
                      </span>
                      {collection.disciplines.map((d) => (
                        <span
                          key={d}
                          className="px-2 py-0.5 bg-[#EAE4D7] text-[#111111] font-sans font-medium text-[9px] uppercase tracking-wider rounded-[1px]"
                        >
                          {d}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-sans font-bold text-[10px] uppercase text-[#B59A63] tracking-wider">
                        SYSTEMS:
                      </span>
                      {collection.systems.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 border border-[#B59A63]/30 text-[#111111] font-sans font-semibold text-[9px] uppercase tracking-wider rounded-[1px]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={collection.ctaUrl}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] hover:bg-[#B59A63] text-[#F1ECE4] hover:text-[#111111] font-sans font-bold text-xs uppercase tracking-widest transition-colors shadow-sm"
                    >
                      <span>{collection.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Editorial Hero Image */}
                <div className="lg:col-span-6 relative h-[360px] sm:h-[440px] overflow-hidden rounded-[2px] bg-[#E4DCD0] shadow-sm group">
                  <Image
                    src={collection.heroImage}
                    alt={collection.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-baseline justify-between text-[#F1ECE4]">
                    <div>
                      <span className="font-sans font-bold text-[9px] uppercase tracking-widest text-[#B59A63] block">
                        SYSTEM ARCHIVE // {collection.num}
                      </span>
                      <span className="font-display font-black text-xl uppercase tracking-tight">
                        {collection.name} EDITORIAL
                      </span>
                    </div>
                    <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-[#F1ECE4]/80">
                      {collection.products.length} CURATED ITEMS
                    </span>
                  </div>
                </div>
              </div>

              {/* Collection Products Grid */}
              <div className="space-y-6 pt-4">
                <div className="flex items-center justify-between border-b border-[#111111]/[0.082] pb-3">
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#111111]">
                    FEATURED PRODUCTS & OBJECTS // {collection.name}
                  </span>
                  <Link
                    href={collection.ctaUrl}
                    className="font-sans font-bold text-[10px] uppercase tracking-widest text-[#B59A63] hover:text-[#111111] transition-colors flex items-center gap-1"
                  >
                    <span>VIEW ALL IN SHOP</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-10 lg:gap-x-12 gap-y-12 sm:gap-y-14">
                  {collection.products.map((product) => (
                    <CollectionProductCard
                      key={product.id}
                      product={product}
                      onOpenModal={handleOpenProductModal}
                    />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

      </div>

      {/* Global Modals & Cart Drawer */}
      <Footer />
      <CartDrawer />
      <ProductModal />
    </main>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F1ECE4] flex items-center justify-center font-sans font-bold text-xs uppercase tracking-widest text-[#111111]">Loading Collections...</div>}>
      <CollectionsContent />
    </Suspense>
  );
}
