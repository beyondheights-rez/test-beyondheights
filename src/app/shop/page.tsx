"use client";

import React, { useState, useMemo, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Search, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";
import { ProductModal } from "@/components/product-modal";
import { useCart } from "@/context/cart-context";
import { IRONMAN_PRODUCTS } from "@/data/ironman-products";

type GalleryView = "FRONT" | "BACK" | "SIDE" | "DETAIL" | "MATERIAL" | "LIFESTYLE" | "COLLAR";

interface GalleryItem {
  view: GalleryView;
  image: string;
}

interface ShopProductItem {
  id: string;
  name: string;
  price: number;
  currency?: string;
  category: "Apparel" | "Accessories" | "Objects";
  subcategory: string;
  image: string;
  gallery: GalleryItem[];
  badge?: "NEW" | "OUT OF STOCK" | "FEATURED" | "ESSENTIAL";
  outOfStock?: boolean;
  gender?: "MEN" | "WOMEN" | "UNISEX";
  description: string;
  features: string[];
  sizes: string[];
  colors: { name: string; hex: string; image: string }[];
}


const SHOP_CATALOG: ShopProductItem[] = [
  // ==========================================
  // APPAREL CATEGORY (16 SAMPLES)
  // ==========================================
  {
    id: "beyond-tshirt",
    name: "BEYOND T-SHIRT",
    price: 98,
    category: "Apparel",
    subcategory: "APPAREL // TOPS",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-front.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-front.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-back.jpg" },
      { view: "COLLAR", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-collar.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-sleeve.jpg" },
      { view: "MATERIAL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-material.jpg" },
    ],
    badge: "NEW",
    gender: "MEN",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Raw Sand", hex: "#D6CCA9", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-front.jpg" },
    ],
    description: "Signature Beyond oversized heavyweight t-shirt crafted in 240 GSM organic long-staple cotton. Features iconic gold BEYOND typographic chest insignia, right sleeve branding, and full gold back print.",
    features: [
      "240 GSM organic ring-spun combed cotton",
      "High-density gold typographic back branding",
      "Reinforced rib collar & signature sleeve print",
      "Boxy relaxed athletic drape with drop shoulders",
    ],
  },
  {
    id: "core-training-tee",
    name: "CORE TRAINING TEE",
    price: 78,
    category: "Apparel",
    subcategory: "APPAREL // TOPS",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "LIFESTYLE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
    ],
    gender: "UNISEX",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { name: "Charcoal Heather", hex: "#3A3B3C", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { name: "Olive Sage", hex: "#7E827A", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
    ],
    description: "Lightweight technical crewneck tee designed for high-intensity training sessions. Features rapid moisture evaporation and ultra-soft seam construction.",
    features: [
      "Moisture-wicking dry-touch jersey",
      "Flatlock seams to eliminate chafing",
      "Reflective rear collar heat-transfer",
      "Pre-shrunk architectural drape",
    ],
  },
  {
    id: "beyond-heavyweight-hoodie",
    name: "BEYOND HEAVYWEIGHT HOODIE",
    price: 168,
    category: "Apparel",
    subcategory: "APPAREL // SWEATSHIRTS",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
      { view: "MATERIAL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
    ],
    gender: "UNISEX",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Charcoal Heather", hex: "#3A3B3C", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
      { name: "Raw Bone", hex: "#F1ECE4", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
      { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/heavyweight-hoodie.jpg" },
    ],
    description: "A 500 GSM loopback French terry heavyweight pullover. Cut with an architectural boxy drape, seamless double-layer hood without drawstrings, and reinforced kangaroo pocket.",
    features: [
      "500 GSM Portuguese cotton french terry",
      "Sculpted drop-shoulder silhouette",
      "Double-walled structured hood architecture",
      "Internal magnetic key tether in pocket",
    ],
  },
  {
    id: "utility-running-trouser",
    name: "UTILITY RUNNING TROUSER",
    price: 148,
    category: "Apparel",
    subcategory: "APPAREL // BOTTOMS",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
      { view: "LIFESTYLE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
    ],
    gender: "MEN",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Utility Khaki", hex: "#A89F8B", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
      { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
    ],
    description: "Tapered kinetic trousers with articulated 3D knee construction, elasticated cinch hems, and 4 bonded zip pockets. Treated with water-repellent DWR finish.",
    features: [
      "4-way mechanical stretch technical twill",
      "Articulated gusset for 360-degree freedom",
      "Concealed zip utility cargo pockets",
      "Adjustable bungee hem toggles",
    ],
  },
  {
    id: "core-crewneck",
    name: "CORE CREWNECK",
    price: 138,
    category: "Apparel",
    subcategory: "APPAREL // SWEATSHIRTS",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/crewneck-sweatshirt.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/crewneck-sweatshirt.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/crewneck-sweatshirt.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/crewneck-sweatshirt.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/crewneck-sweatshirt.jpg" },
      { view: "MATERIAL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/crewneck-sweatshirt.jpg" },
    ],
    gender: "UNISEX",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Raw Cream", hex: "#E8E2D5", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/crewneck-sweatshirt.jpg" },
      { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/crewneck-sweatshirt.jpg" },
      { name: "Slate Grey", hex: "#7E827A", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/crewneck-sweatshirt.jpg" },
    ],
    description: "Premium lookbook heavyweight fleece crewneck sweatshirt, carefully constructed with dense ribbing and drop shoulders for structured daily comfort.",
    features: [
      "450 GSM organic loopback fleece",
      "Heavy rib collar, cuffs, and hem",
      "Subtle tonal chest micro-branding",
      "Reinforced twin needle stitching",
    ],
  },
  {
    id: "technical-track-jacket",
    name: "TECHNICAL TRACK JACKET",
    price: 210,
    category: "Apparel",
    subcategory: "APPAREL // OUTERWEAR",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { view: "LIFESTYLE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
    ],
    gender: "UNISEX",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { name: "Desert Slate", hex: "#7E827A", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
    ],
    description: "Asymmetric front-zip windproof shell featuring storm-sealed taped seams and waterproof YKK AquaGuard hardware. Developed for transition between training and commute.",
    features: [
      "3-layer water-resistant breathable membrane",
      "Asymmetrical storm closure",
      "Articulated elbow articulation",
      "Concealed magnetic phone pocket",
    ],
  },
  {
    id: "performance-run-short",
    name: "PERFORMANCE RUN SHORT",
    price: 88,
    category: "Apparel",
    subcategory: "APPAREL // BOTTOMS",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
    ],
    gender: "MEN",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Charcoal Heather", hex: "#3A3B3C", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
      { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
      { name: "Ochre Gold", hex: "#B59A63", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
    ],
    description: "Structured charcoal running shorts with gold trim and integrated anti-bounce phone pocket liner. Engineered for long-distance marathon comfort.",
    features: [
      "Ultra-lightweight 5\" inseam stretch weave",
      "Breathable compression liner with stash pocket",
      "Rear zip gel storage channel",
      "Reflective metallic trim accents",
    ],
  },
  {
    id: "performance-long-sleeve",
    name: "PERFORMANCE LONG SLEEVE",
    price: 88,
    category: "Apparel",
    subcategory: "APPAREL // TOPS",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "LIFESTYLE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
    ],
    gender: "MEN",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { name: "Charcoal Heather", hex: "#3A3B3C", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { name: "Raw Cream", hex: "#E8E2D5", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
    ],
    description: "Cold-weather performance long sleeve top with thermal grid backer, laser thumbholes, and watch window port for effortless tracking.",
    features: [
      "Thermal micro-grid fleece lining",
      "Dual watch window wrist cuffs",
      "Seamless bonded neck tape",
      "360-degree high-gloss reflective logos",
    ],
  },
  {
    id: "modular-overshirt",
    name: "MODULAR OVERSHIRT",
    price: 175,
    category: "Apparel",
    subcategory: "APPAREL // OUTERWEAR",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { view: "MATERIAL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
    ],
    gender: "MEN",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Utility Khaki", hex: "#A89F8B", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
    ],
    description: "Structured technical utility overshirt featuring snap-button front, dual chest bellows pockets, and water-repellent stretch weave.",
    features: [
      "Stretch nylon utility poplin fabric",
      "Hidden side seam hand pockets",
      "Matte black magnetic snap closures",
      "Boxy layering-ready relaxed silhouette",
    ],
  },
  {
    id: "structured-training-short",
    name: "STRUCTURED TRAINING SHORT",
    price: 95,
    category: "Apparel",
    subcategory: "APPAREL // BOTTOMS",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
    ],
    gender: "MEN",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Utility Khaki", hex: "#A89F8B", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
      { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
    ],
    description: "Utility khaki workout shorts with side zip storage, built-in shirt loop holder, and high-tenacity stretch waistband.",
    features: [
      "7\" inseam durable mechanical stretch twill",
      "Back towel/shirt pass-through loop",
      "Deep zipper pockets for phone security",
      "Drawcord internal elastic waistband",
    ],
  },
  {
    id: "technical-run-vest",
    name: "TECHNICAL RUN VEST",
    price: 165,
    category: "Apparel",
    subcategory: "APPAREL // VESTS",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { view: "LIFESTYLE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
    ],
    gender: "UNISEX",
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Charcoal Heather", hex: "#3A3B3C", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { name: "Desert Sand", hex: "#E8E2D5", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
    ],
    description: "Minimalist dark grey technical running hydration vest featuring 3D mesh backing, 6 front harness pockets, and dual flask holsters.",
    features: [
      "Ultra-light 3D air-mesh breathable back panel",
      "Dual chest flasks holders (flasks included)",
      "Zero-bounce chest adjustment harness",
      "Expandable rear trail jacket pocket",
    ],
  },
  {
    id: "kinetic-compression-tights",
    name: "KINETIC COMPRESSION TIGHTS",
    price: 125,
    category: "Apparel",
    subcategory: "APPAREL // BOTTOMS",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
      { view: "MATERIAL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
    ],
    badge: "FEATURED",
    gender: "UNISEX",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
      { name: "Charcoal Slate", hex: "#3A3B3C", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
    ],
    description: "Targeted gradient compression running tights engineered with high-recovery elastane, laser-cut ventilation zones, and dual bounce-free phone drop pockets.",
    features: [
      "Targeted zonal graduated muscle support",
      "Laser-perforated knee crease ventilation",
      "Dual bonded thigh slip pockets",
      "Reflective 360° nocturnal markers",
    ],
  },
  {
    id: "aerodynamic-race-singlet",
    name: "AERODYNAMIC RACE SINGLET",
    price: 68,
    category: "Apparel",
    subcategory: "APPAREL // TOPS",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
    ],
    badge: "NEW",
    gender: "UNISEX",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Ochre Gold", hex: "#B59A63", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { name: "Raw Cream", hex: "#E8E2D5", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
    ],
    description: "Featherweight 65 GSM micro-mesh racing singlet. Glued bonded seams eliminate chafing across marathon distances.",
    features: [
      "Sub-70 GSM ultra-light aerodynamic weave",
      "Ultrasonic bonded zero-chafing seams",
      "Hydrophobic yarn for rapid dry times",
      "Competition bib pin reinforcement zones",
    ],
  },
  {
    id: "all-weather-storm-shell",
    name: "ALL-WEATHER STORM SHELL",
    price: 260,
    category: "Apparel",
    subcategory: "APPAREL // OUTERWEAR",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { view: "MATERIAL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
    ],
    badge: "FEATURED",
    gender: "UNISEX",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Desert Slate", hex: "#7E827A", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
      { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/track-jacket.jpg" },
    ],
    description: "Fully seam-sealed 20k/20k waterproof storm shell with Cohaesive cord lock system, storm visor hood, and two-way pit zips.",
    features: [
      "20,000mm hydrostatic head waterproof protection",
      "Integrated magnetic storm collar hood",
      "Aquaguard water-resistant YKK hardware",
      "Packs down into internal chest pocket",
    ],
  },
  {
    id: "adaptive-motion-crop-top",
    name: "ADAPTIVE MOTION CROP TOP",
    price: 64,
    category: "Apparel",
    subcategory: "APPAREL // TOPS",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "LIFESTYLE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
    ],
    gender: "WOMEN",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Raw Bone", hex: "#F1ECE4", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { name: "Olive Gold", hex: "#B59A63", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
    ],
    description: "High-support compressive racerback crop top engineered with double-knit modal microfiber and brushed underband.",
    features: [
      "Buttery-soft 4-way stretch compression knit",
      "Internal removable molded support cups",
      "Wide ergonomic load-distributing straps",
      "Moisture-dispersing inner mesh panel",
    ],
  },
  {
    id: "high-rise-sculpt-leggings",
    name: "HIGH-RISE SCULPT LEGGINGS",
    price: 110,
    category: "Apparel",
    subcategory: "APPAREL // BOTTOMS",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
      { view: "MATERIAL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
    ],
    gender: "WOMEN",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
      { name: "Slate Charcoal", hex: "#3A3B3C", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
      { name: "Raw Cream", hex: "#E8E2D5", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-trouser.jpg" },
    ],
    description: "Engineered zero-slip high-waist performance leggings featuring seamless outer legs and bonded internal key pocket.",
    features: [
      "Squat-proof high-gauge interlocking knit",
      "Zero front-rise seam for frictionless glide",
      "Reinforced core waistband compression",
      "Ankle raw-cut clean hems",
    ],
  },

  // ==========================================
  // ACCESSORIES CATEGORY (11 SAMPLES)
  // ==========================================
  {
    id: "adjustable-running-belt",
    name: "ADJUSTABLE RUNNING BELT",
    price: 45,
    category: "Accessories",
    subcategory: "ACCESSORIES // GEAR & OBJECTS",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/ADJUSTABLE%20RUNNING%20BELT.png",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/ADJUSTABLE%20RUNNING%20BELT.png" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/ADJUSTABLE%20RUNNING%20BELT%202.png" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/ADJUSTABLE%20RUNNING%20BELT%202.png" },
    ],
    badge: "ESSENTIAL",
    gender: "UNISEX",
    sizes: ["XS-S", "M-L", "XL-XXL"],
    colors: [
      { name: "Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/ADJUSTABLE%20RUNNING%20BELT.png" },
    ],
    description: "Seamless tubular stretch waist band with 360-degree pocket access designed to hold 500ml flask, phone, and 6 gels without bouncing. Features integrated competition bib holder toggles.",
    features: [
      "Zero-bounce snug compression fit with 4-way stretch",
      "Four integrated access portals for fuel & soft flask storage",
      "Internal key tether with secure mini carabiner clip",
      "Integrated elastic race bib toggles for competition day",
    ],
  },
  {
    id: "structured-running-cap",
    name: "STRUCTURED RUNNING CAP",
    price: 58,
    category: "Accessories",
    subcategory: "ACCESSORIES // HEADWEAR",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
    ],
    badge: "OUT OF STOCK",
    outOfStock: true,
    gender: "UNISEX",
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Olive Gold", hex: "#B59A63", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
      { name: "Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
      { name: "Sand Dune", hex: "#E8E2D5", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
    ],
    description: "Unstructured 6-panel technical running cap in olive gold ripstop nylon with laser-perforated side ventilation and magnetic gunmetal clasp.",
    features: [
      "Hydro-wicking 4-way stretch ripstop nylon",
      "Laser-cut zonal airflow perforations",
      "Quick-adjust gunmetal clasp",
      "Antimicrobial moisture headband",
    ],
  },
  {
    id: "everyday-cap",
    name: "EVERYDAY CAP",
    price: 48,
    category: "Accessories",
    subcategory: "ACCESSORIES // HEADWEAR",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
    ],
    gender: "UNISEX",
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
      { name: "Raw Cream", hex: "#E8E2D5", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
    ],
    description: "Minimalist black technical dad cap with curved brim, tonal embroidery, and quick-release nylon webbing rear buckle.",
    features: [
      "Breathable cotton twill construction",
      "Low profile 6-panel unstructured crown",
      "Adjustable web strap with metal buckle",
      "Embossed tonal BEYOND insignia",
    ],
  },
  {
    id: "beyond-athletic-socks",
    name: "BEYOND ATHLETIC SOCKS",
    price: 28,
    category: "Accessories",
    subcategory: "ACCESSORIES // SOCKS",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
      { view: "LIFESTYLE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
    ],
    gender: "UNISEX",
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Raw Cream", hex: "#E8E2D5", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
      { name: "Ochre Gold", hex: "#B59A63", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
      { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg" },
    ],
    description: "White knit performance athletic crew socks featuring gold double stripe accents, anatomical arch support, and target cushion heel impact zones.",
    features: [
      "High-gauge combed cotton elastane blend",
      "Targeted plantar arch compression band",
      "Seamless toe closure to prevent blistering",
      "Reinforced heel and toe wear zones",
    ],
  },
  {
    id: "utility-crossbody",
    name: "UTILITY CROSSBODY",
    price: 110,
    category: "Accessories",
    subcategory: "ACCESSORIES // BAGS",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg" },
      { view: "LIFESTYLE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg" },
    ],
    gender: "UNISEX",
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg" },
      { name: "Desert Slate", hex: "#7E827A", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg" },
    ],
    description: "Minimal matte black technical crossbody sling with waterproof zippers, fidlock magnetic strap clip, and dual internal compartment organizer.",
    features: [
      "1000D Cordura water-repellent shell",
      "Fidlock magnetic quick-release strap buckle",
      "Weatherproof YKK AquaGuard zippers",
      "Soft micro-fleece sunglass pocket",
    ],
  },
  {
    id: "utility-duffle",
    name: "UTILITY DUFFLE",
    price: 240,
    category: "Accessories",
    subcategory: "ACCESSORIES // BAGS",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg" },
      { view: "LIFESTYLE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg" },
    ],
    badge: "FEATURED",
    gender: "UNISEX",
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg" },
      { name: "Desert Slate", hex: "#7E827A", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/utility-bag-black.jpg" },
    ],
    description: "Tactical multi-pocket 35L utility duffle bag with reinforced webbing straps, separate shoe compartment, and padded 16-inch laptop floating sleeve.",
    features: [
      "35L high-tenacity Cordura construction",
      "Isolated ventilated sneaker compartment",
      "Ergonomic padded backpack conversion straps",
      "Weatherproof bottom tarpaulin panel",
    ],
  },
  {
    id: "everyday-canvas-tote",
    name: "EVERYDAY CANVAS TOTE",
    price: 65,
    category: "Accessories",
    subcategory: "ACCESSORIES // BAGS",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/tote-canvas.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/tote-canvas.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/tote-canvas.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/tote-canvas.jpg" },
      { view: "LIFESTYLE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/tote-canvas.jpg" },
    ],
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Natural Bone", hex: "#F1ECE4", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/tote-canvas.jpg" },
      { name: "Washed Black", hex: "#222222", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/tote-canvas.jpg" },
    ],
    description: "Off-white heavy 18oz organic cotton canvas tote featuring high-density typography print, internal zip key pocket, and double carry straps.",
    features: [
      "18oz heavy unbleached organic cotton duck",
      "Dual length hand and shoulder carry webbing",
      "Internal organizer sleeve with brass clip",
      "Reinforced X-box stitched stress points",
    ],
  },
  {
    id: "insulated-hydration-bottle",
    name: "INSULATED HYDRATION BOTTLE",
    price: 48,
    category: "Accessories",
    subcategory: "ACCESSORIES // GEAR",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "LIFESTYLE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
    ],
    sizes: ["750ML"],
    colors: [
      { name: "Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { name: "Ochre Sand", hex: "#B59A63", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
    ],
    description: "Vacuum-insulated 750ml matte black stainless steel hydration vessel. Keeps liquids cold for 24 hours or hot for 12 hours with zero sweat condensation.",
    features: [
      "Double-wall 18/8 food-grade stainless steel",
      "Textured non-slip matte powder coat finish",
      "Wide-mouth opening for ice cubes",
      "BPA-free leakproof silicone sealed lid",
    ],
  },
  {
    id: "carbon-speed-sunglasses",
    name: "CARBON SPEED SUNGLASSES",
    price: 185,
    category: "Accessories",
    subcategory: "ACCESSORIES // GEAR",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
      { view: "LIFESTYLE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
    ],
    badge: "NEW",
    gender: "UNISEX",
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
      { name: "Amber Gold", hex: "#B59A63", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg" },
    ],
    description: "Ultralight frameless performance eyewear fitted with polarized photochromic optics and anti-fog vents.",
    features: [
      "22g rimless aerodynamic shield design",
      "Hydrophobic and oleophobic lens coating",
      "Rubberized no-slip temple and nose grips",
      "100% UVA/UVB Category 3 optical clarity",
    ],
  },
  {
    id: "tech-grip-training-gloves",
    name: "TECH GRIP TRAINING GLOVES",
    price: 45,
    category: "Accessories",
    subcategory: "ACCESSORIES // GEAR",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "BACK", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "LIFESTYLE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
    ],
    gender: "UNISEX",
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { name: "Charcoal Heather", hex: "#3A3B3C", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
    ],
    description: "Ergonomic silicone-padded training gloves with touchscreen-compatible conductive fingertips and breathable back-hand mesh.",
    features: [
      "Zonal silicone anti-slip palm matrix",
      "Reinforced thumb saddle for bar grip",
      "Touchscreen conductive index & thumb pads",
      "Quick-pull finger loop release system",
    ],
  },
  {
    id: "performance-aerowave-headband",
    name: "PERFORMANCE AEROWAVE HEADBAND",
    price: 24,
    category: "Accessories",
    subcategory: "ACCESSORIES // HEADWEAR",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "MATERIAL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "LIFESTYLE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
    ],
    gender: "UNISEX",
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Raw Cream", hex: "#E8E2D5", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { name: "Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { name: "Ochre Gold", hex: "#B59A63", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
    ],
    description: "Sweat-channeling micro-ribbed compression headband that locks hair and wicks perspiration effortlessly.",
    features: [
      "Seamless circular rib knit architecture",
      "Internal silicone stay-in-place gripper line",
      "Quick-drying antimicrobial yarn blend",
      "Minimal high-density reflective moniker",
    ],
  },

  // ==========================================
  // OBJECTS CATEGORY (8 SAMPLES)
  // ==========================================
  {
    id: "beyond-object-01",
    name: "BEYOND OBJECT 01",
    price: 195,
    category: "Objects",
    subcategory: "OBJECTS // KINETIC",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "MATERIAL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "LIFESTYLE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
    ],
    badge: "FEATURED",
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Brushed Brass", hex: "#B59A63", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { name: "Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
    ],
    description: "Sculptural kinetic desk object crafted from precision-machined matte black steel and solid brushed brass. Celebrating physical motion and static balance.",
    features: [
      "Solid CNC machined steel & raw brass construction",
      "Hand-polished precision ball bearing axis",
      "Individual serial number laser engraving",
      "Collector's weighted presentation box",
    ],
  },
  {
    id: "beyond-object-02",
    name: "BEYOND OBJECT 02",
    price: 140,
    category: "Objects",
    subcategory: "OBJECTS // CERAMICS",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "MATERIAL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
    ],
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Raw Concrete", hex: "#7E827A", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { name: "Basalt Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
    ],
    description: "Hand-thrown architectural ceramic incense burner object with raw concrete grey glaze finish. Crafted in a limited edition run.",
    features: [
      "Handcrafted high-fire stoneware ceramic",
      "Matte tactile concrete glaze",
      "Integrated ash catching basin",
      "Includes 10 natural hinoki wood incense cones",
    ],
  },
  {
    id: "precision-aluminum-flask",
    name: "PRECISION ALUMINUM FLASK",
    price: 55,
    category: "Objects",
    subcategory: "OBJECTS // GEAR",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "MATERIAL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
    ],
    sizes: ["500ML"],
    colors: [
      { name: "Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { name: "Raw Silver", hex: "#E8E2D5", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { name: "Ochre Gold", hex: "#B59A63", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
    ],
    description: "Seamless extruded aerospace-grade aluminum water flask featuring knurled twist cap and leakproof food-safe seal.",
    features: [
      "Aerospace 6061-T6 aluminum mono-body",
      "Knurled tactile screw top for wet grip",
      "Zero plastic internal liquid contact",
      "Laser etched volumetric measurement scale",
    ],
  },
  {
    id: "high-density-foam-roller",
    name: "HIGH-DENSITY FOAM ROLLER",
    price: 60,
    category: "Objects",
    subcategory: "OBJECTS // RECOVERY",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "LIFESTYLE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
    ],
    badge: "NEW",
    sizes: ["18 INCH"],
    colors: [
      { name: "Pitch Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { name: "Slate Grey", hex: "#7E827A", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
    ],
    description: "Engineered solid high-density EPP foam roller designed for deep fascia release and post-marathon myofascial recovery.",
    features: [
      "Non-deforming high-density molded EPP foam",
      "Textured micro-matrix surface for grip",
      "Lightweight travel-friendly 18\" format",
      "Wipe-clean sweat resistant sealed core",
    ],
  },
  {
    id: "kinetic-sand-timer",
    name: "KINETIC SAND TIMER",
    price: 85,
    category: "Objects",
    subcategory: "OBJECTS // KINETIC",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "MATERIAL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
    ],
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Brass Gold", hex: "#B59A63", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { name: "Gunmetal Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
    ],
    description: "Handblown borosilicate glass 15-minute contemplative timer filled with obsidian black magnetic particles.",
    features: [
      "15-minute precise duration measurement",
      "Heavy weighted raw brass end plinths",
      "Magnetic obsidian kinetic sand dispersion",
      "Individually numbered studio artifact",
    ],
  },
  {
    id: "hinoki-ritual-candle",
    name: "HINOKI RITUAL CANDLE",
    price: 52,
    category: "Objects",
    subcategory: "OBJECTS // CERAMICS",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "LIFESTYLE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
    ],
    sizes: ["280G"],
    colors: [
      { name: "Raw Bone", hex: "#F1ECE4", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { name: "Volcanic Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
    ],
    description: "Natural coconut-soy wax candle hand-poured into a textured ceramic vessel. Scented with wild Japanese Hinoki cypress, cedar, and smoky amber.",
    features: [
      "60-hour clean burn wood wick",
      "100% natural essential oils and soy wax",
      "Reusable architectural ceramic vessel",
      "Free from paraffin, parabens, and phthalates",
    ],
  },
  {
    id: "titanium-modular-clip",
    name: "TITANIUM MODULAR CLIP",
    price: 42,
    category: "Objects",
    subcategory: "OBJECTS // GEAR",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { view: "MATERIAL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
    ],
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Anodized Gold", hex: "#B59A63", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { name: "Matte Black", hex: "#111111", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
      { name: "Raw Titanium", hex: "#E8E2D5", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg" },
    ],
    description: "CNC milled Grade 5 titanium key carabiner with integrated bottle lever and pry tool.",
    features: [
      "Grade 5 Ti-6Al-4V titanium construction",
      "Non-corrosive spring gate mechanism",
      "Built-in pry edge and bottle cap tool",
      "Weighs less than 14 grams",
    ],
  },
  {
    id: "architectural-stoneware-tray",
    name: "ARCHITECTURAL STONEWARE TRAY",
    price: 75,
    category: "Objects",
    subcategory: "OBJECTS // CERAMICS",
    image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
    gallery: [
      { view: "FRONT", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "SIDE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "DETAIL", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { view: "LIFESTYLE", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
    ],
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Raw Sand", hex: "#E8E2D5", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
      { name: "Basalt Grey", hex: "#3A3B3C", image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg" },
    ],
    description: "Heavy stoneware valet tray with chiseled edges. Designed for holding training watches, keys, and daily equipment loadouts.",
    features: [
      "Cast textured architectural stoneware",
      "Underside cork damping layer",
      "Matte water-resistant mineral sealant",
      "Handcrafted limited studio batch",
    ],
  },

  // ==========================================
  // IRONMAN PERFORMANCE COLLECTION (24 PRODUCTS)
  // ==========================================
  ...IRONMAN_PRODUCTS.map((p): ShopProductItem => ({
    id: p.id,
    name: p.name,
    price: p.price,
    currency: p.currency,
    category: p.category,
    subcategory: p.subcategory,
    image: p.image,
    gallery: p.gallery,
    badge: p.badge,
    gender: p.gender,
    sizes: p.sizes,
    colors: p.colors,
    description: p.description,
    features: p.features,
  })),
];


const PRODUCT_TYPES = [
  "ALL",
  "TOPS",
  "SWEATSHIRTS",
  "BOTTOMS",
  "OUTERWEAR",
  "VESTS",
  "HEADWEAR",
  "BAGS",
  "SOCKS",
  "GEAR & OBJECTS",
];

const SIZE_OPTIONS = ["ALL", "XS", "S", "M", "L", "XL", "XXL", "ONE SIZE"];

const COLOR_OPTIONS = [
  { id: "ALL", label: "ALL COLORS" },
  { id: "BLACK", label: "BLACK", hex: "#111111" },
  { id: "CREAM", label: "CREAM / BONE", hex: "#E8E2D5" },
  { id: "GOLD", label: "GOLD / OCHRE", hex: "#B59A63" },
  { id: "GREY", label: "GREY / SLATE", hex: "#3A3B3C" },
  { id: "KHAKI", label: "KHAKI / DUNE", hex: "#A89F8B" },
];

const PRICE_RANGES = [
  { id: "ALL", label: "ALL PRICES" },
  { id: "UNDER_50", label: "UNDER $50", min: 0, max: 50 },
  { id: "50_100", label: "$50 - $100", min: 50, max: 100 },
  { id: "100_150", label: "$100 - $150", min: 100, max: 150 },
  { id: "OVER_150", label: "$150+", min: 150, max: Infinity },
];

// Dedicated interactive product card with clean, spacious luxury aesthetic
function ShopProductCard({
  product,
  index,
  onOpenModal,
}: {
  product: ShopProductItem;
  index: number;
  onOpenModal: (product: ShopProductItem, initialColor?: string) => void;
}) {
  const [selectedColor, setSelectedColor] = useState(
    product.colors[0]?.name || "Standard"
  );
  const [isHovered, setIsHovered] = useState(false);

  const activeColorObj = product.colors.find((c) => c.name === selectedColor);

  // Compute primary and secondary hover preview images
  const primaryImage = activeColorObj?.image || product.image;
  const secondaryImage =
    product.gallery && product.gallery.length > 1
      ? product.gallery[1].image
      : primaryImage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: Math.min((index % 3) * 0.08, 0.25) }}
      onClick={() => onOpenModal(product, selectedColor)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col group cursor-pointer"
    >
      {/* Media Showcase Container */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#E8E2D5] rounded-[2px] shadow-xs">
        {/* Main Image */}
        <Image
          src={isHovered && secondaryImage !== primaryImage ? secondaryImage : primaryImage}
          alt={`${product.name} - ${selectedColor}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 select-none"
        />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-none">
          {product.badge ? (
            <span
              className={`px-2.5 py-1 text-[9px] uppercase font-bold tracking-widest backdrop-blur-md shadow-xs ${product.badge === "OUT OF STOCK"
                  ? "bg-[#111111]/80 text-[#888888]"
                  : "bg-[#111111] text-[#B59A63]"
                }`}
            >
              {product.badge}
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

        {/* Floating Quick View Action Pill on Hover */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
          <span className="w-full py-2.5 bg-[#F1ECE4]/95 hover:bg-[#111111] text-[#111111] hover:text-[#F1ECE4] font-sans font-bold text-[10px] uppercase tracking-widest text-center backdrop-blur-xs transition-colors shadow-md">
            QUICK VIEW // SPECS
          </span>
        </div>
      </div>

      {/* Product Meta Info */}
      <div className="flex flex-col gap-2 pt-4 w-full">
        {/* Subcategory & Gender Tag */}
        <div className="flex items-center justify-between text-[10px] uppercase tracking-widest font-semibold">
          <span className="text-[#B59A63]">{product.subcategory}</span>
          {product.gender && (
            <span className="text-[#888888] font-medium">{product.gender}</span>
          )}
        </div>

        {/* Title & Price */}
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-sans font-bold text-[14px] leading-tight text-[#111111] uppercase tracking-tight group-hover:text-[#B59A63] transition-colors truncate">
            {product.name}
          </h3>
          <span className="font-sans font-black text-[14px] text-[#111111] shrink-0">
            {product.currency || "$"}{product.price.toLocaleString()}
          </span>
        </div>

        {/* Interactive Color Swatches */}
        {product.colors.length > 1 && (
          <div
            className="flex items-center gap-2 pt-1"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-1.5">
              {product.colors.map((col) => {
                const isSelected = selectedColor === col.name;
                return (
                  <button
                    key={col.name}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedColor(col.name);
                    }}
                    className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${isSelected
                        ? "border-[#111111] scale-125 shadow-xs ring-1 ring-[#111111]/30"
                        : "border-black/20 hover:scale-110 opacity-70 hover:opacity-100"
                      }`}
                    style={{ backgroundColor: col.hex }}
                    title={`${col.name}`}
                  />
                );
              })}
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

function ShopContent({
  searchParams,
}: {
  searchParams: ReturnType<typeof useSearchParams>;
}) {
  const { setQuickViewProduct } = useCart();

  // Search & Category Tab States
  const [searchQuery, setSearchQuery] = useState(() => {
    return searchParams?.get("q") || searchParams?.get("search") || "";
  });
  const [selectedTab, setSelectedTab] = useState<
    "ALL PRODUCTS" | "APPAREL" | "ACCESSORIES" | "OBJECTS"
  >(() => {
    const cat = searchParams?.get("cat") || searchParams?.get("category");
    if (cat) {
      const upperCat = cat.toUpperCase();
      if (upperCat === "APPAREL") return "APPAREL";
      if (upperCat === "ACCESSORIES") return "ACCESSORIES";
      if (upperCat === "OBJECTS") return "OBJECTS";
      if (upperCat === "ALL" || upperCat === "ALL PRODUCTS")
        return "ALL PRODUCTS";
    }
    return "ALL PRODUCTS";
  });

  // Dropdown Open States
  const [openGenderDropdown, setOpenGenderDropdown] = useState(false);
  const [openProductDropdown, setOpenProductDropdown] = useState(false);
  const [openSizeDropdown, setOpenSizeDropdown] = useState(false);
  const [openColorDropdown, setOpenColorDropdown] = useState(false);
  const [openPriceDropdown, setOpenPriceDropdown] = useState(false);
  const [openSortDropdown, setOpenSortDropdown] = useState(false);

  // Filter Selection States
  const [selectedGender, setSelectedGender] = useState<string>(() => {
    const gender = searchParams?.get("gender");
    if (gender) {
      const g = gender.toUpperCase();
      if (g === "MEN" || g === "WOMEN" || g === "UNISEX") return g;
    }
    return "ALL";
  });
  const [selectedProductType, setSelectedProductType] = useState<string>(() => {
    const sub = searchParams?.get("sub") || searchParams?.get("product");
    if (sub) {
      const matchSub = PRODUCT_TYPES.find(
        (pt) => pt.toUpperCase() === sub.toUpperCase()
      );
      if (matchSub) return matchSub;
      const found = PRODUCT_TYPES.find((pt) =>
        pt.toUpperCase().includes(sub.toUpperCase())
      );
      if (found) return found;
    }
    return "ALL";
  });
  const [selectedSize, setSelectedSize] = useState<string>("ALL");
  const [selectedColor, setSelectedColor] = useState<string>(() => {
    return searchParams?.get("color")?.toUpperCase() || "ALL";
  });
  const [selectedPrice, setSelectedPrice] = useState<string>(() => {
    return searchParams?.get("price") || "ALL";
  });
  const [selectedSort, setSelectedSort] = useState<string>(() => {
    return searchParams?.get("sort")?.toUpperCase() || "FEATURED";
  });

  // Close other dropdowns when one opens
  const toggleDropdown = (dropdown: "gender" | "product" | "size" | "color" | "price" | "sort") => {
    setOpenGenderDropdown(dropdown === "gender" ? !openGenderDropdown : false);
    setOpenProductDropdown(dropdown === "product" ? !openProductDropdown : false);
    setOpenSizeDropdown(dropdown === "size" ? !openSizeDropdown : false);
    setOpenColorDropdown(dropdown === "color" ? !openColorDropdown : false);
    setOpenPriceDropdown(dropdown === "price" ? !openPriceDropdown : false);
    setOpenSortDropdown(dropdown === "sort" ? !openSortDropdown : false);
  };

  const closeAllDropdowns = () => {
    setOpenGenderDropdown(false);
    setOpenProductDropdown(false);
    setOpenSizeDropdown(false);
    setOpenColorDropdown(false);
    setOpenPriceDropdown(false);
    setOpenSortDropdown(false);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedGender("ALL");
    setSelectedProductType("ALL");
    setSelectedSize("ALL");
    setSelectedColor("ALL");
    setSelectedPrice("ALL");
    setSelectedSort("FEATURED");
    setSearchQuery("");
    closeAllDropdowns();
  };

  // Filtered & Sorted Catalog Logic
  const filteredProducts = useMemo(() => {
    return SHOP_CATALOG.filter((item) => {
      // 1. Category Tab Filter
      if (selectedTab !== "ALL PRODUCTS") {
        if (selectedTab === "APPAREL" && item.category !== "Apparel") return false;
        if (selectedTab === "ACCESSORIES" && item.category !== "Accessories") return false;
        if (selectedTab === "OBJECTS" && item.category !== "Objects") return false;
      }

      // 2. Gender Filter
      if (selectedGender !== "ALL") {
        if (item.gender && item.gender !== selectedGender && item.gender !== "UNISEX") return false;
        if (!item.gender && selectedGender !== "UNISEX") return false;
      }

      // 3. Product Subcategory / Type Filter
      if (selectedProductType !== "ALL") {
        const sub = item.subcategory.toUpperCase();
        if (selectedProductType === "GEAR & OBJECTS") {
          if (!sub.includes("GEAR") && !sub.includes("OBJECT") && !sub.includes("KINETIC") && !sub.includes("CERAMIC") && !sub.includes("RECOVERY")) {
            return false;
          }
        } else {
          if (!sub.includes(selectedProductType)) return false;
        }
      }

      // 4. Size Filter
      if (selectedSize !== "ALL") {
        if (selectedSize === "ONE SIZE") {
          const hasOneSize = item.sizes.some((s) => s.toUpperCase().includes("ONE") || s.toUpperCase().includes("750") || s.toUpperCase().includes("500") || s.toUpperCase().includes("280") || s.toUpperCase().includes("18"));
          if (!hasOneSize) return false;
        } else {
          if (!item.sizes.includes(selectedSize)) return false;
        }
      }

      // 5. Color Filter
      if (selectedColor !== "ALL") {
        const hasColor = item.colors.some((c) => {
          const cName = c.name.toUpperCase();
          if (selectedColor === "BLACK") return cName.includes("BLACK") || cName.includes("ONYX") || cName.includes("VOLCANIC") || cName.includes("STEALTH") || cName.includes("PITCH") || cName.includes("BASALT") || cName.includes("CARBON");
          if (selectedColor === "CREAM") return cName.includes("CREAM") || cName.includes("BONE") || cName.includes("SAND") || cName.includes("IVORY") || cName.includes("WHITE") || cName.includes("ARCTIC");
          if (selectedColor === "GOLD") return cName.includes("GOLD") || cName.includes("BRASS") || cName.includes("OCHRE") || cName.includes("AMBER") || cName.includes("BRONZE");
          if (selectedColor === "GREY") return cName.includes("GREY") || cName.includes("CHARCOAL") || cName.includes("SLATE") || cName.includes("CONCRETE") || cName.includes("TITANIUM") || cName.includes("SMOKE");
          if (selectedColor === "KHAKI") return cName.includes("KHAKI") || cName.includes("DUNE") || cName.includes("OLIVE") || cName.includes("SAGE") || cName.includes("GREEN");
          return false;
        });
        if (!hasColor) return false;
      }

      // 6. Price Range Filter
      if (selectedPrice !== "ALL") {
        const priceOpt = PRICE_RANGES.find((p) => p.id === selectedPrice);
        if (priceOpt && typeof priceOpt.min === "number" && typeof priceOpt.max === "number") {
          if (item.price < priceOpt.min || item.price > priceOpt.max) {
            return false;
          }
        }
      }

      // 7. Search Query Filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchesId = item.id.toLowerCase().includes(query);
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesCat = item.subcategory.toLowerCase().includes(query) || item.category.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesFeatures = item.features.some((f) => f.toLowerCase().includes(query));
        const matchesColor = item.colors.some((c) => c.name.toLowerCase().includes(query));
        if (!matchesId && !matchesName && !matchesCat && !matchesDesc && !matchesFeatures && !matchesColor) return false;
      }

      return true;
    }).sort((a, b) => {
      if (selectedSort === "PRICE: LOW TO HIGH") return a.price - b.price;
      if (selectedSort === "PRICE: HIGH TO LOW") return b.price - a.price;
      if (selectedSort === "NEWEST") return a.badge === "NEW" ? -1 : 1;
      if (selectedSort === "BEST SELLING") return (a.badge === "FEATURED" || a.price > 100) ? -1 : 1;
      return 0; // Default FEATURED
    });
  }, [selectedTab, selectedGender, selectedProductType, selectedSize, selectedColor, selectedPrice, searchQuery, selectedSort]);

  // Compute Active Filter Chips
  const activeChips = useMemo(() => {
    const chips: { id: string; label: string; onRemove: () => void }[] = [];

    if (selectedGender !== "ALL") {
      chips.push({
        id: `gender-${selectedGender}`,
        label: `GENDER: ${selectedGender}`,
        onRemove: () => setSelectedGender("ALL"),
      });
    }

    if (selectedProductType !== "ALL") {
      chips.push({
        id: `product-${selectedProductType}`,
        label: `PRODUCT: ${selectedProductType}`,
        onRemove: () => setSelectedProductType("ALL"),
      });
    }

    if (selectedSize !== "ALL") {
      chips.push({
        id: `size-${selectedSize}`,
        label: `SIZE: ${selectedSize}`,
        onRemove: () => setSelectedSize("ALL"),
      });
    }

    if (selectedColor !== "ALL") {
      const colorObj = COLOR_OPTIONS.find((c) => c.id === selectedColor);
      chips.push({
        id: `color-${selectedColor}`,
        label: `COLOR: ${colorObj?.label || selectedColor}`,
        onRemove: () => setSelectedColor("ALL"),
      });
    }

    if (selectedPrice !== "ALL") {
      const priceObj = PRICE_RANGES.find((p) => p.id === selectedPrice);
      chips.push({
        id: `price-${selectedPrice}`,
        label: `PRICE: ${priceObj?.label || selectedPrice}`,
        onRemove: () => setSelectedPrice("ALL"),
      });
    }

    if (searchQuery.trim() !== "") {
      chips.push({
        id: `search-${searchQuery}`,
        label: `SEARCH: "${searchQuery}"`,
        onRemove: () => setSearchQuery(""),
      });
    }

    return chips;
  }, [selectedGender, selectedProductType, selectedSize, selectedColor, selectedPrice, searchQuery]);

  // Adapter to convert ShopProductItem to global Product for modal with initial color
  const handleOpenProductModal = (item: ShopProductItem, initialColor?: string) => {
    const colorObj = item.colors.find((c) => c.name === initialColor) || item.colors[0];
    setQuickViewProduct({
      id: item.id,
      name: item.name,
      price: item.price,
      currency: item.currency,
      category: item.category,
      subcategory: item.subcategory,
      image: colorObj?.image || item.image,
      gallery: item.gallery,
      description: item.description,
      features: item.features,
      sizes: item.sizes,
      colors: item.colors,
      tag: item.badge,
    });
  };

  return (
    <main
      onClick={closeAllDropdowns}
      className="relative min-h-screen w-full bg-[#F1ECE4] flex flex-col items-center overflow-x-hidden selection:bg-[#111111] selection:text-[#F1ECE4]"
    >
      {/* Navigation Header */}
      <Header />

      {/* Main Page Container (1440px max width) */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-start bg-[#F1ECE4]">

        {/* ============================================================ */}
        {/* CATEGORY TABS SECTION */}
        {/* ============================================================ */}
        <section className="w-full px-6 sm:px-12 md:px-20 pt-10 md:pt-14 pb-4 flex flex-row items-center gap-6 sm:gap-10 border-b border-[#111111]/[0.082] overflow-x-auto no-scrollbar">
          {(["ALL PRODUCTS", "APPAREL", "ACCESSORIES", "OBJECTS"] as const).map((tab) => {
            const isActive = selectedTab === tab;
            return (
              <button
                key={tab}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedTab(tab);
                }}
                className={`font-display transition-all duration-300 uppercase tracking-tight relative cursor-pointer pb-2 whitespace-nowrap ${isActive
                    ? "font-black text-2xl sm:text-3xl md:text-4xl text-[#111111] border-b-2 border-[#111111]"
                    : "font-bold text-base sm:text-lg md:text-xl text-[#777777] hover:text-[#111111]"
                  }`}
              >
                {tab}
              </button>
            );
          })}
        </section>

        {/* ============================================================ */}
        {/* TITLE & INTRO SECTION */}
        {/* ============================================================ */}
        <section className="w-full px-6 sm:px-12 md:px-20 pt-8 md:pt-12 pb-6 md:pb-8 flex flex-col items-start gap-5">
          <motion.h1
            key={selectedTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-[60px] sm:text-[85px] md:text-[105px] lg:text-[120px] leading-[85%] text-[#111111] uppercase tracking-tight"
          >
            {selectedTab === "ALL PRODUCTS" ? "SHOP ALL PRODUCTS" : `SHOP ${selectedTab}`}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-normal text-base leading-[150%] text-[#444444] max-w-[640px]"
          >
            Performance merchandise, technical apparel, and adaptive systems designed for endurance and daily motion.
          </motion.p>
        </section>

        {/* ============================================================ */}
        {/* SEARCH CONTAINER */}
        {/* ============================================================ */}
        <section className="w-full px-6 sm:px-12 md:px-20 pb-6 flex flex-col items-start">
          <div className="w-full border-b border-[#111111] pb-3 flex flex-row items-center gap-3">
            <Search className="w-4 h-4 text-[#111111] shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH PRODUCTS BY NAME, FABRIC, DISCIPLINE..."
              className="w-full bg-transparent font-sans font-medium text-xs uppercase tracking-wider text-[#111111] placeholder-[#777777] focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchQuery("");
                }}
                className="text-[#444444] hover:text-[#111111] text-xs font-bold uppercase cursor-pointer"
              >
                CLEAR
              </button>
            )}
          </div>
        </section>

        {/* ============================================================ */}
        {/* FILTER & SORT SECTION */}
        {/* ============================================================ */}
        <section
          onClick={(e) => e.stopPropagation()}
          className="w-full px-6 sm:px-12 md:px-20 py-8 flex flex-col gap-6 relative z-30"
        >
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

            {/* Filter Buttons Left */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 relative">
              <span className="font-sans font-bold text-[11px] leading-[14px] uppercase text-[#111111] tracking-wider">
                FILTER BY //
              </span>

              {/* 1. GENDER Dropdown */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown("gender");
                  }}
                  className={`flex items-center gap-1 font-sans font-bold text-[11px] uppercase transition-colors cursor-pointer ${selectedGender !== "ALL" ? "text-[#B59A63]" : "text-[#111111] hover:text-[#B59A63]"
                    }`}
                >
                  <span>GENDER {selectedGender !== "ALL" ? `(${selectedGender})` : ""}</span>
                  <ChevronDown className={`w-2.5 h-2.5 transition-transform duration-200 ${openGenderDropdown ? "rotate-180 text-[#B59A63]" : ""}`} />
                </button>

                <AnimatePresence>
                  {openGenderDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-[180px] bg-[#FFFFFF] border border-[#111111]/[0.1] shadow-2xl p-3 flex flex-col gap-2.5 z-40"
                    >
                      {(["ALL", "MEN", "WOMEN", "UNISEX"] as const).map((g) => (
                        <button
                          key={g}
                          onClick={() => {
                            setSelectedGender(g);
                            setOpenGenderDropdown(false);
                          }}
                          className="flex items-center gap-2.5 text-left py-1 px-1.5 hover:bg-[#F5F0EA] transition-colors cursor-pointer w-full"
                        >
                          <div
                            className={`w-3.5 h-3.5 border flex items-center justify-center ${selectedGender === g ? "border-[#111111] bg-[#111111]" : "border-[#777777] bg-white"
                              }`}
                          >
                            {selectedGender === g && <div className="w-1.5 h-1.5 bg-[#F1ECE4]" />}
                          </div>
                          <span className={`font-sans text-[11px] uppercase ${selectedGender === g ? "font-bold text-[#111111]" : "font-medium text-[#444444]"}`}>
                            {g === "ALL" ? "ALL GENDERS" : g}
                          </span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 2. PRODUCT TYPE Dropdown */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown("product");
                  }}
                  className={`flex items-center gap-1 font-sans font-bold text-[11px] uppercase transition-colors cursor-pointer ${selectedProductType !== "ALL" ? "text-[#B59A63]" : "text-[#111111] hover:text-[#B59A63]"
                    }`}
                >
                  <span>PRODUCT {selectedProductType !== "ALL" ? `(${selectedProductType})` : ""}</span>
                  <ChevronDown className={`w-2.5 h-2.5 transition-transform duration-200 ${openProductDropdown ? "rotate-180 text-[#B59A63]" : ""}`} />
                </button>

                <AnimatePresence>
                  {openProductDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-[210px] max-h-[300px] overflow-y-auto bg-[#FFFFFF] border border-[#111111]/[0.1] shadow-2xl p-3 flex flex-col gap-2 z-40"
                    >
                      {PRODUCT_TYPES.map((p) => (
                        <button
                          key={p}
                          onClick={() => {
                            setSelectedProductType(p);
                            setOpenProductDropdown(false);
                          }}
                          className="flex items-center gap-2.5 text-left py-1 px-1.5 hover:bg-[#F5F0EA] transition-colors cursor-pointer w-full"
                        >
                          <div
                            className={`w-3.5 h-3.5 border flex items-center justify-center shrink-0 ${selectedProductType === p ? "border-[#111111] bg-[#111111]" : "border-[#777777] bg-white"
                              }`}
                          >
                            {selectedProductType === p && <div className="w-1.5 h-1.5 bg-[#F1ECE4]" />}
                          </div>
                          <span className={`font-sans text-[11px] uppercase ${selectedProductType === p ? "font-bold text-[#111111]" : "font-medium text-[#444444]"}`}>
                            {p === "ALL" ? "ALL PRODUCTS" : p}
                          </span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 3. SIZE Dropdown */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown("size");
                  }}
                  className={`flex items-center gap-1 font-sans font-bold text-[11px] uppercase transition-colors cursor-pointer ${selectedSize !== "ALL" ? "text-[#B59A63]" : "text-[#111111] hover:text-[#B59A63]"
                    }`}
                >
                  <span>SIZE {selectedSize !== "ALL" ? `(${selectedSize})` : ""}</span>
                  <ChevronDown className={`w-2.5 h-2.5 transition-transform duration-200 ${openSizeDropdown ? "rotate-180 text-[#B59A63]" : ""}`} />
                </button>

                <AnimatePresence>
                  {openSizeDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-[180px] bg-[#FFFFFF] border border-[#111111]/[0.1] shadow-2xl p-3 flex flex-col gap-2 z-40"
                    >
                      {SIZE_OPTIONS.map((s) => (
                        <button
                          key={s}
                          onClick={() => {
                            setSelectedSize(s);
                            setOpenSizeDropdown(false);
                          }}
                          className="flex items-center gap-2.5 text-left py-1 px-1.5 hover:bg-[#F5F0EA] transition-colors cursor-pointer w-full"
                        >
                          <div
                            className={`w-3.5 h-3.5 border flex items-center justify-center ${selectedSize === s ? "border-[#111111] bg-[#111111]" : "border-[#777777] bg-white"
                              }`}
                          >
                            {selectedSize === s && <div className="w-1.5 h-1.5 bg-[#F1ECE4]" />}
                          </div>
                          <span className={`font-sans text-[11px] uppercase ${selectedSize === s ? "font-bold text-[#111111]" : "font-medium text-[#444444]"}`}>
                            {s === "ALL" ? "ALL SIZES" : s}
                          </span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 4. COLOR Dropdown */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown("color");
                  }}
                  className={`flex items-center gap-1 font-sans font-bold text-[11px] uppercase transition-colors cursor-pointer ${selectedColor !== "ALL" ? "text-[#B59A63]" : "text-[#111111] hover:text-[#B59A63]"
                    }`}
                >
                  <span>COLOR {selectedColor !== "ALL" ? `(${selectedColor})` : ""}</span>
                  <ChevronDown className={`w-2.5 h-2.5 transition-transform duration-200 ${openColorDropdown ? "rotate-180 text-[#B59A63]" : ""}`} />
                </button>

                <AnimatePresence>
                  {openColorDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-[200px] bg-[#FFFFFF] border border-[#111111]/[0.1] shadow-2xl p-3 flex flex-col gap-2 z-40"
                    >
                      {COLOR_OPTIONS.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => {
                            setSelectedColor(c.id);
                            setOpenColorDropdown(false);
                          }}
                          className="flex items-center gap-2.5 text-left py-1 px-1.5 hover:bg-[#F5F0EA] transition-colors cursor-pointer w-full"
                        >
                          {c.hex ? (
                            <div
                              className="w-3.5 h-3.5 rounded-full border border-black/20 shrink-0"
                              style={{ backgroundColor: c.hex }}
                            />
                          ) : (
                            <div
                              className={`w-3.5 h-3.5 border flex items-center justify-center shrink-0 ${selectedColor === c.id ? "border-[#111111] bg-[#111111]" : "border-[#777777] bg-white"
                                }`}
                            >
                              {selectedColor === c.id && <div className="w-1.5 h-1.5 bg-[#F1ECE4]" />}
                            </div>
                          )}
                          <span className={`font-sans text-[11px] uppercase ${selectedColor === c.id ? "font-bold text-[#111111]" : "font-medium text-[#444444]"}`}>
                            {c.label}
                          </span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 5. PRICE Dropdown */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown("price");
                  }}
                  className={`flex items-center gap-1 font-sans font-bold text-[11px] uppercase transition-colors cursor-pointer ${selectedPrice !== "ALL" ? "text-[#B59A63]" : "text-[#111111] hover:text-[#B59A63]"
                    }`}
                >
                  <span>PRICE {selectedPrice !== "ALL" ? `(${PRICE_RANGES.find(p => p.id === selectedPrice)?.label})` : ""}</span>
                  <ChevronDown className={`w-2.5 h-2.5 transition-transform duration-200 ${openPriceDropdown ? "rotate-180 text-[#B59A63]" : ""}`} />
                </button>

                <AnimatePresence>
                  {openPriceDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-[190px] bg-[#FFFFFF] border border-[#111111]/[0.1] shadow-2xl p-3 flex flex-col gap-2 z-40"
                    >
                      {PRICE_RANGES.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => {
                            setSelectedPrice(p.id);
                            setOpenPriceDropdown(false);
                          }}
                          className="flex items-center gap-2.5 text-left py-1 px-1.5 hover:bg-[#F5F0EA] transition-colors cursor-pointer w-full"
                        >
                          <div
                            className={`w-3.5 h-3.5 border flex items-center justify-center ${selectedPrice === p.id ? "border-[#111111] bg-[#111111]" : "border-[#777777] bg-white"
                              }`}
                          >
                            {selectedPrice === p.id && <div className="w-1.5 h-1.5 bg-[#F1ECE4]" />}
                          </div>
                          <span className={`font-sans text-[11px] uppercase ${selectedPrice === p.id ? "font-bold text-[#111111]" : "font-medium text-[#444444]"}`}>
                            {p.label}
                          </span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Sort & Count Right */}
            <div className="flex items-center gap-6 self-end md:self-auto relative">
              <span className="font-sans font-medium text-[11px] uppercase text-[#444444] tracking-wider">
                {filteredProducts.length} {filteredProducts.length === 1 ? "PRODUCT" : "PRODUCTS"}
              </span>

              {/* SORT Dropdown */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown("sort");
                  }}
                  className="flex items-center gap-1 font-sans font-bold text-[11px] uppercase text-[#111111] hover:text-[#B59A63] transition-colors cursor-pointer"
                >
                  <span className="text-[#444444]">SORT BY //</span>
                  <span>{selectedSort}</span>
                  <ChevronDown className={`w-2.5 h-2.5 transition-transform duration-200 ${openSortDropdown ? "rotate-180 text-[#B59A63]" : ""}`} />
                </button>

                <AnimatePresence>
                  {openSortDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-2 w-[210px] bg-[#FFFFFF] border border-[#111111]/[0.1] shadow-2xl p-3 flex flex-col gap-2 z-40"
                    >
                      {["FEATURED", "NEWEST", "PRICE: LOW TO HIGH", "PRICE: HIGH TO LOW", "BEST SELLING"].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => {
                            setSelectedSort(opt);
                            setOpenSortDropdown(false);
                          }}
                          className={`font-sans text-[11px] uppercase text-left py-1 px-1.5 hover:bg-[#F5F0EA] transition-colors cursor-pointer ${selectedSort === opt ? "font-bold text-[#111111] bg-[#F1ECE4]" : "font-medium text-[#444444]"
                            }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Active Filter Chips */}
          {activeChips.length > 0 && (
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {activeChips.map((chip) => (
                <div
                  key={chip.id}
                  className="border border-[#111111] rounded-full px-3 py-1 flex items-center gap-2 bg-[#F5F0EA]"
                >
                  <span className="font-sans font-semibold text-[10px] uppercase text-[#111111] tracking-wider">
                    {chip.label}
                  </span>
                  <button
                    onClick={chip.onRemove}
                    aria-label={`Remove filter ${chip.label}`}
                    className="p-0.5 text-[#111111] hover:text-[#B59A63] transition-colors cursor-pointer"
                  >
                    <X className="w-2.5 h-2.5" />
                  </button>
                </div>
              ))}

              <button
                onClick={clearAllFilters}
                className="font-sans font-bold text-[10px] uppercase underline tracking-wider text-[#444444] hover:text-[#111111] transition-colors ml-2 cursor-pointer"
              >
                CLEAR ALL
              </button>
            </div>
          )}
        </section>

        {/* Section Divider Line */}
        <div className="w-full h-[1px] bg-[#111111]/[0.082]" />

        {/* ============================================================ */}
        {/* DYNAMIC PRODUCT CATALOG GRID (SPACIOUS LUXURY LAYOUT) */}
        {/* ============================================================ */}
        <section className="w-full px-6 sm:px-12 md:px-20 py-14 md:py-20 pb-[140px]">
          {filteredProducts.length > 0 ? (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-10 lg:gap-x-12 gap-y-14 sm:gap-y-16 lg:gap-y-20">
              {filteredProducts.map((product, index) => (
                <ShopProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onOpenModal={handleOpenProductModal}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="w-full py-24 flex flex-col items-center justify-center text-center gap-6">
              <span className="font-display font-black text-4xl sm:text-6xl text-[#111111] uppercase tracking-tight">
                NO PRODUCTS FOUND
              </span>
              <p className="font-sans text-sm text-[#777777] max-w-md">
                We couldn&apos;t find any items matching your active search and filter combinations.
              </p>
              <button
                onClick={clearAllFilters}
                className="mt-2 px-6 py-3 bg-[#111111] hover:bg-[#B59A63] text-[#F1ECE4] font-sans font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
              >
                RESET ALL FILTERS
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Global Footer */}
      <Footer />

      {/* Global Drawers & Modals */}
      <CartDrawer />
      <ProductModal />
    </main>
  );
}

function ShopWrapper() {
  const searchParams = useSearchParams();
  return (
    <ShopContent
      key={searchParams?.toString() ?? ""}
      searchParams={searchParams}
    />
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F1ECE4] flex items-center justify-center font-sans font-bold text-xs uppercase tracking-widest text-[#111111]">
          Loading Shop...
        </div>
      }
    >
      <ShopWrapper />
    </Suspense>
  );
}
