"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  withoutHeader?: boolean;
}

interface MenuCategoryData {
  id: string;
  label: string;
  tag?: string;
  highlightUrl?: string;
  disciplines: { name: string; href: string }[];
  movement: { name: string; href: string }[];
  collections: { name: string; href: string }[];
  shopLinks: { name: string; href: string; isAction?: boolean }[];
  featured: {
    title: string;
    subtitle: string;
    image: string;
    href: string;
    badge?: string;
  };
}

const MENU_DATA: Record<string, MenuCategoryData> = {
  sports: {
    id: "sports",
    label: "SPORTS",
    disciplines: [
      { name: "ATHLETICS", href: "/shop?cat=Apparel&sub=TOPS&q=training" },
      { name: "RUNNING", href: "/shop?q=running" },
      { name: "SWIMMING", href: "/ironman#swim" },
      { name: "CYCLING", href: "/ironman#bike" },
      { name: "TRIATHLON", href: "/ironman" },
      { name: "TRAIL RUNNING", href: "/shop?q=running" },
      { name: "STRENGTH & MOBILITY", href: "/shop?cat=Objects" },
      { name: "FUNCTIONAL TRAINING", href: "/shop?q=training" },
    ],
    movement: [
      { name: "TRACK & VELODROME", href: "/collections?filter=sports" },
      { name: "ROAD & ASPHALT", href: "/collections?filter=sports" },
      { name: "OPEN WATER", href: "/ironman#swim" },
      { name: "MOUNTAIN & TERRAIN", href: "/collections?filter=sports" },
      { name: "TRAINING STUDIO", href: "/collections?filter=sports" },
      { name: "FIELD PERFORMANCE", href: "/collections?filter=sports" },
    ],
    collections: [
      { name: "ATHLETICS SYSTEM 01", href: "/collections?filter=sports" },
      { name: "SWIM PERFORMANCE CAPSULE", href: "/ironman#swim" },
      { name: "CYCLING AERO SYSTEM", href: "/ironman#bike" },
      { name: "TRIATHLON 113 KM SYSTEM", href: "/ironman" },
      { name: "TRAIL KINETIC SHELL", href: "/collections?filter=sports" },
    ],
    shopLinks: [
      { name: "ALL SPORTS MERCHANDISE", href: "/collections?filter=sports" },
      { name: "BEST SELLERS", href: "/shop?sort=BEST%20SELLING" },
      { name: "NEW ARRIVALS 2026", href: "/shop?sort=NEWEST" },
      { name: "KINETIC LAYERING", href: "/shop?cat=Apparel&sub=OUTERWEAR" },
    ],
    featured: {
      title: "SYSTEM 02 // EDITORIAL",
      subtitle: "ADAPTIVE FOOTWEAR & TRAINING GEAR",
      image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
      href: "/collections?filter=sports",
      badge: "CORE RELEASE",
    },
  },

  ironman: {
    id: "ironman",
    label: "IRON MAN",
    tag: "FEATURED EXPERIENCE",
    highlightUrl: "/ironman",
    disciplines: [
      { name: "113.0 KM TOTAL DISTANCE", href: "/ironman#distance" },
      { name: "01 // OPEN WATER SWIM (1.9 KM)", href: "/ironman#swim" },
      { name: "02 // AERO ROAD BIKE (90 KM)", href: "/ironman#bike" },
      { name: "03 // HALF MARATHON (21.1 KM)", href: "/ironman#run" },
      { name: "T1 / T2 TRANSITION GEAR", href: "/ironman#transitions" },
      { name: "TRIATHLON TELEMETRY", href: "/ironman#distance" },
    ],
    movement: [
      { name: "SWIM: HYDRO-DYNAMICS", href: "/ironman#swim" },
      { name: "BIKE: AERO TIME-TRIAL", href: "/ironman#bike" },
      { name: "RUN: 21.1 KM RUN ENDURANCE", href: "/ironman#run" },
      { name: "TRANSITION PROTOCOLS", href: "/ironman#transitions" },
      { name: "ULTRA TRIATHLON ARCHIVE", href: "/ironman" },
    ],
    collections: [
      { name: "THE COMPLETE IRONMAN KIT", href: "/ironman#complete-kit" },
      { name: "THE SWIM KIT", href: "/ironman#swim" },
      { name: "THE BIKE KIT", href: "/ironman#bike" },
      { name: "THE RUN KIT", href: "/ironman#run" },
      { name: "BEFORE THE START // PREP", href: "/ironman#prep" },
    ],
    shopLinks: [
      { name: "ENTER IRONMAN EXPERIENCE →", href: "/ironman", isAction: true },
      { name: "SHOP ALL 24 IRONMAN PRODUCTS", href: "/ironman#equipment" },
      { name: "EXPLORE CURATED KITS", href: "/ironman#kits" },
      { name: "SWIM EQUIPMENT (1.9 KM)", href: "/ironman#swim" },
      { name: "BIKE EQUIPMENT (90 KM)", href: "/ironman#bike" },
      { name: "RUN EQUIPMENT (21.1 KM)", href: "/ironman#run" },
    ],
    featured: {
      title: "BEYOND × IRONMAN (113 KM)",
      subtitle: "1.9 KM SWIM · 90 KM BIKE · 21.1 KM RUN",
      image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/hero-swim-dawn.jpg",
      href: "/ironman",
      badge: "NEW DEDICATED EXPERIENCE",
    },
  },

  marathon: {
    id: "marathon",
    label: "MARATHON",
    disciplines: [
      { name: "42.2K ROAD MARATHON", href: "/shop?q=running" },
      { name: "HALF MARATHON 21.1K", href: "/shop?q=short" },
      { name: "ULTRA DISTANCE 50K+", href: "/shop?q=running" },
      { name: "SUB-3 PACING SYSTEMS", href: "/collections?filter=marathon" },
      { name: "TEMPO & INTERVAL APPAREL", href: "/shop?cat=Apparel&sub=TOPS" },
      { name: "POST-RACE RECOVERY", href: "/shop?cat=Objects" },
    ],
    movement: [
      { name: "METROPOLITAN ROAD", href: "/collections?filter=marathon" },
      { name: "ELITE SYNTHETIC TRACK", href: "/collections?filter=marathon" },
      { name: "ELEVATED TEMPO SPLITS", href: "/collections?filter=marathon" },
      { name: "ENDURANCE MILEAGE", href: "/collections?filter=marathon" },
      { name: "WARMUP & STRIDES", href: "/collections?filter=marathon" },
    ],
    collections: [
      { name: "AEROLITE RACE KIT", href: "/collections?filter=marathon" },
      { name: "SUB-3 MARATHON CAPSULE", href: "/collections?filter=marathon" },
      { name: "THERMO-REGULATION LAYER", href: "/shop?cat=Apparel&sub=OUTERWEAR" },
      { name: "REFLECTIVE NIGHT RUN SYSTEM", href: "/shop?cat=Apparel&sub=BOTTOMS" },
    ],
    shopLinks: [
      { name: "ALL MARATHON PRODUCTS", href: "/collections?filter=marathon" },
      { name: "LIGHTWEIGHT SINGLETS", href: "/shop?cat=Apparel&sub=TOPS" },
      { name: "SPLIT RACE SHORTS", href: "/shop?cat=Apparel&sub=BOTTOMS" },
      { name: "HYDRATION BELTS & FLASKS", href: "/shop?cat=Accessories" },
    ],
    featured: {
      title: "SUB-3 MARATHON SYSTEM",
      subtitle: "FEATHERWEIGHT SINGLETS & 3D SPLIT SHORTS",
      image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/running-short.jpg",
      href: "/collections?filter=marathon",
      badge: "RACE READY",
    },
  },

  travel: {
    id: "travel",
    label: "TRAVEL",
    disciplines: [
      { name: "TRANS-CONTINENTAL TRANSIT", href: "/shop?cat=Objects" },
      { name: "AIRPORT & AVIATION MOVEMENT", href: "/shop?cat=Apparel" },
      { name: "EXPEDITION BASECAMP", href: "/shop?cat=Objects" },
      { name: "HIGH-SPEED RAIL COMMUTE", href: "/shop?cat=Apparel" },
      { name: "WEATHERPROOF CARRIER", href: "/shop?cat=Objects&sub=BAGS" },
    ],
    movement: [
      { name: "MODULAR CARRY (28L-45L)", href: "/shop?cat=Objects&sub=BAGS" },
      { name: "PACKABLE WATERPROOFING", href: "/shop?cat=Apparel&sub=OUTERWEAR" },
      { name: "LONG-HAUL COMPRESSION", href: "/shop?cat=Accessories&sub=SOCKS" },
      { name: "URBAN TRANSIT MATTE", href: "/collections?filter=travel" },
    ],
    collections: [
      { name: "CORDURA BALLISTIC CARRY", href: "/shop?cat=Objects&sub=BAGS" },
      { name: "KINETIC TRAVEL PANT SYSTEM", href: "/shop?cat=Apparel&sub=BOTTOMS" },
      { name: "MODULAR OVERNIGHT DUFFLE", href: "/shop?cat=Objects&sub=BAGS" },
      { name: "WEATHERPROOF TECH POUCH", href: "/shop?cat=Accessories&sub=BAGS" },
    ],
    shopLinks: [
      { name: "ALL TRAVEL EQUIPMENT", href: "/collections?filter=travel" },
      { name: "UTILITY DUFFLE BAGS", href: "/shop?cat=Objects&sub=BAGS" },
      { name: "CANVAS POTENTIAL TOTES", href: "/shop?cat=Objects&sub=BAGS" },
      { name: "MINIMALIST ACCESSORIES", href: "/shop?cat=Accessories" },
    ],
    featured: {
      title: "MODULAR CARRY SYSTEM",
      subtitle: "1000D CORDURA BALLISTIC NYLON & FIDLOCK HARDWARE",
      image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
      href: "/collections?filter=travel",
      badge: "BALLISTIC SERIES",
    },
  },

  lifestyle: {
    id: "lifestyle",
    label: "LIFESTYLE",
    disciplines: [
      { name: "METROPOLITAN UNIFORM", href: "/shop?cat=Apparel" },
      { name: "ARCHITECTURAL DRAPING", href: "/shop?cat=Apparel&sub=TOPS" },
      { name: "POST-TRAINING REST", href: "/shop?cat=Apparel&sub=SWEATSHIRTS" },
      { name: "STUDIO & CREATIVE MOTION", href: "/shop?cat=Apparel" },
      { name: "RAW COTTON ESSENTIALS", href: "/shop?cat=Apparel&sub=TOPS" },
    ],
    movement: [
      { name: "240 GSM LONG-STAPLE COTTON", href: "/shop?cat=Apparel&sub=TOPS" },
      { name: "500 GSM FRENCH TERRY PULLOVERS", href: "/shop?cat=Apparel&sub=SWEATSHIRTS" },
      { name: "NATURAL MINERAL DYEWASH", href: "/collections?filter=lifestyle" },
      { name: "BOXY RELAXED SILHOUETTES", href: "/shop?cat=Apparel&sub=TOPS" },
    ],
    collections: [
      { name: "BEYOND T-SHIRT (ORIGINAL)", href: "/shop?q=beyond%20t-shirt" },
      { name: "HUMAN POTENTIAL HOODIE", href: "/shop?cat=Apparel&sub=SWEATSHIRTS" },
      { name: "SYSTEM 01 TAPERED PANT", href: "/shop?cat=Apparel&sub=BOTTOMS" },
      { name: "ARCHITECTURAL BASICS", href: "/collections?filter=lifestyle" },
    ],
    shopLinks: [
      { name: "SHOP ALL LIFESTYLE", href: "/collections?filter=lifestyle" },
      { name: "TOPS & T-SHIRTS", href: "/shop?cat=Apparel&sub=TOPS" },
      { name: "HEAVYWEIGHT SWEATSHIRTS", href: "/shop?cat=Apparel&sub=SWEATSHIRTS" },
      { name: "PANTS & TROUSERS", href: "/shop?cat=Apparel&sub=BOTTOMS" },
    ],
    featured: {
      title: "BEYOND T-SHIRT // RAW SAND",
      subtitle: "240 GSM HEAVYWEIGHT ORGANIC COTTON WITH GOLD INSIGNIA",
      image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/beyond-tee/beyond-tee-front.jpg",
      href: "/shop?q=beyond%20t-shirt",
      badge: "ORIGINAL BEYOND",
    },
  },

  accessories: {
    id: "accessories",
    label: "ACCESSORIES",
    disciplines: [
      { name: "TECHNICAL HEADWEAR", href: "/shop?cat=Accessories&sub=HEADWEAR" },
      { name: "PERFORMANCE OPTICS", href: "/shop?cat=Accessories" },
      { name: "HYDRO-INSULATED HARDWARE", href: "/shop?cat=Accessories" },
      { name: "MAGNETIC BUCKLE BELTS", href: "/shop?cat=Accessories" },
      { name: "ERGONOMIC SOCK SYSTEMS", href: "/shop?cat=Accessories&sub=SOCKS" },
    ],
    movement: [
      { name: "RIPSTOP HYDRO-WICKING", href: "/shop?cat=Accessories&sub=HEADWEAR" },
      { name: "LASER-CUT AIRFLOW ZONES", href: "/shop?cat=Accessories&sub=HEADWEAR" },
      { name: "DOUBLE-WALL 316 STEEL", href: "/shop?cat=Accessories" },
      { name: "ANTI-ODOR SILVER WEAVE", href: "/shop?cat=Accessories&sub=SOCKS" },
    ],
    collections: [
      { name: "POSSIBILITY CAP SERIES", href: "/shop?cat=Accessories&sub=HEADWEAR" },
      { name: "750ML HYDRATION FLASK", href: "/shop?cat=Accessories" },
      { name: "KINETIC COMPRESSION SOCKS", href: "/shop?cat=Accessories&sub=SOCKS" },
      { name: "VALET TRAYS & HARDWARE", href: "/shop?cat=Objects" },
    ],
    shopLinks: [
      { name: "ALL ACCESSORIES", href: "/shop?cat=Accessories" },
      { name: "HEADWEAR & CAPS", href: "/shop?cat=Accessories&sub=HEADWEAR" },
      { name: "BOTTLES & HYDRATION", href: "/shop?cat=Accessories" },
      { name: "SOCKS & BASE LAYERS", href: "/shop?cat=Accessories&sub=SOCKS" },
    ],
    featured: {
      title: "POSSIBILITY CAP // RIPSTOP",
      subtitle: "HYDRO-WICKING NYLON WITH MAGNETIC GUNMETAL BUCKLE",
      image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg",
      href: "/shop?cat=Accessories&sub=HEADWEAR",
      badge: "CORE ACCESSORY",
    },
  },

  special: {
    id: "special",
    label: "SPECIAL EDITIONS",
    tag: "LIMITED ARCHIVE",
    disciplines: [
      { name: "IRONMAN 113 KM CAPSULE", href: "/ironman" },
      { name: "PROTOTYPE SYSTEM 001", href: "/collections?filter=special" },
      { name: "MANIFESTO MONOLITH RELEASE", href: "/collections?filter=special" },
      { name: "HAND-CAST STONEWARE VALET", href: "/shop?cat=Objects" },
      { name: "LIMITED STUDIO BATCHES", href: "/shop?sort=NEWEST" },
    ],
    movement: [
      { name: "NUMBERED ARCHIVAL LOTS", href: "/collections?filter=special" },
      { name: "MINERAL RESIN & BASALT", href: "/shop?cat=Objects" },
      { name: "PORTUGUESE HEAVY FLEECE", href: "/shop?cat=Apparel&sub=SWEATSHIRTS" },
      { name: "GOLD METALLURGIC PRINT", href: "/shop?q=beyond%20t-shirt" },
    ],
    collections: [
      { name: "IRONMAN COMPLETE KIT", href: "/ironman#complete-kit" },
      { name: "ARCHITECTURAL STONEWARE", href: "/shop?cat=Objects" },
      { name: "BLACKOUT CAPSULE 01", href: "/shop?cat=Apparel" },
      { name: "FOUNDERS EDITION TEE", href: "/shop?q=beyond%20t-shirt" },
    ],
    shopLinks: [
      { name: "EXPLORE IRONMAN ARCHIVE →", href: "/ironman", isAction: true },
      { name: "ALL SPECIAL EDITIONS", href: "/collections?filter=special" },
      { name: "CERAMIC & STONEWARE OBJECTS", href: "/shop?cat=Objects" },
      { name: "LIMITED DROP CALENDAR", href: "/collections?filter=special" },
    ],
    featured: {
      title: "ARCHITECTURAL CERAMICS & HARDWARE",
      subtitle: "CHISELED BASALT STONEWARE VALET WITH CORK DAMPING",
      image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/products/training-tee.jpg",
      href: "/shop?cat=Objects",
      badge: "LIMITED LOT // 100 PIECES",
    },
  },
};

const CATEGORY_TABS = [
  { id: "sports", label: "SPORTS" },
  { id: "ironman", label: "IRON MAN", badge: "NEW" },
  { id: "marathon", label: "MARATHON" },
  { id: "travel", label: "TRAVEL" },
  { id: "lifestyle", label: "LIFESTYLE" },
  { id: "accessories", label: "ACCESSORIES" },
  { id: "special", label: "SPECIAL EDITIONS" },
];

export function MegaMenu({ isOpen, onClose, withoutHeader = false }: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>("sports");

  const currentData = MENU_DATA[activeCategory] || MENU_DATA.sports;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop when withoutHeader is true */}
          {withoutHeader && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 top-[103px] z-40 bg-black/30 backdrop-blur-xs"
            />
          )}

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onMouseLeave={withoutHeader ? onClose : undefined}
            className={
              withoutHeader
                ? "absolute top-full left-0 w-full z-50 bg-[#F5F0EA] border-b border-[#111111]/[0.082] shadow-2xl"
                : "fixed inset-0 z-50 bg-[#F5F0EA] overflow-y-auto min-h-screen text-[#111111]"
            }
          >
            <div className="max-w-[1440px] mx-auto flex flex-col justify-between">
              {/* Standalone Full Header (rendered only when withoutHeader is FALSE) */}
              {!withoutHeader && (
                <div className="w-full flex flex-col border-b border-[#111111]/[0.082]">
                  <div className="px-6 sm:px-12 md:px-20 py-8 flex flex-row justify-between items-center h-[102px]">
                    {/* Brand Logo */}
                    <Link
                      href="/"
                      onClick={onClose}
                      className="font-display font-black text-[32px] leading-[38px] text-[#111111] hover:opacity-80 transition-opacity"
                    >
                      BEYOND<span className="text-[#B59A63]">.</span>
                    </Link>

                    {/* Close Button */}
                    <button
                      onClick={onClose}
                      className="group flex flex-row items-center gap-2 cursor-pointer font-sans font-bold text-[11px] leading-[14px] text-[#111111] uppercase tracking-wider hover:text-[#B59A63] transition-colors"
                      aria-label="Close menu"
                    >
                      <span>CLOSE MENU</span>
                      <X className="w-4 h-4 text-[#111111] group-hover:text-[#B59A63] transition-colors" />
                    </button>
                  </div>
                </div>
              )}

              {/* Menu Content Area */}
              <div
                className={`w-full px-6 sm:px-12 md:px-20 ${
                  withoutHeader ? "py-10 md:py-14" : "pt-14 md:pt-16 pb-24"
                } flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-8 flex-1 relative`}
              >
                {/* Close button for dropdown mode */}
                {withoutHeader && (
                  <button
                    onClick={onClose}
                    className="absolute top-5 right-6 sm:right-12 lg:right-20 group flex flex-row items-center gap-1.5 cursor-pointer font-sans font-bold text-[10px] leading-[14px] text-[#111111] uppercase tracking-widest hover:text-[#B59A63] transition-colors"
                    aria-label="Close dropdown menu"
                  >
                    <span>CLOSE</span>
                    <X className="w-3.5 h-3.5 text-[#111111] group-hover:text-[#B59A63] transition-colors" />
                  </button>
                )}

                {/* Left Column: 7 Primary Categories */}
                <div className="flex flex-col items-start gap-3 sm:gap-4 w-full lg:w-[320px] shrink-0 border-b lg:border-b-0 lg:border-r border-[#111111]/[0.082] pb-6 lg:pb-0 lg:pr-6">
                  {CATEGORY_TABS.map((cat) => {
                    const isSelected = activeCategory === cat.id;
                    const archiveHref = cat.id === "ironman" ? "/ironman" : `/collections?filter=${cat.id}`;
                    return (
                      <div key={cat.id} className="w-full flex flex-col gap-1">
                        <button
                          onClick={() => setActiveCategory(cat.id)}
                          className={`group flex flex-row items-center gap-3 text-left transition-all duration-200 cursor-pointer w-full ${
                            isSelected
                              ? "opacity-100 translate-x-1"
                              : "opacity-35 hover:opacity-85"
                          }`}
                        >
                          {isSelected ? (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B59A63] shrink-0" />
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-transparent shrink-0" />
                          )}
                          <span className="font-display font-black text-2xl sm:text-3xl lg:text-[34px] leading-tight text-[#111111] uppercase tracking-tight flex items-center gap-2">
                            {cat.label}
                            {cat.badge && (
                              <span className="font-sans font-bold text-[9px] uppercase px-1.5 py-0.5 bg-[#B59A63] text-[#111111] tracking-widest">
                                {cat.badge}
                              </span>
                            )}
                          </span>
                        </button>

                        {isSelected && (
                          <Link
                            href={archiveHref}
                            onClick={onClose}
                            className="ml-4.5 font-sans font-bold text-[10px] leading-[14px] uppercase tracking-widest text-[#B59A63] hover:text-[#111111] transition-colors flex items-center gap-1 py-0.5"
                          >
                            <span>VIEW {cat.label} ARCHIVE</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Center Grid: Dynamic Subcategories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 w-full lg:w-[500px]">
                  {/* Column 1: Disciplines & Movement */}
                  <div className="flex flex-col gap-8 w-full">
                    {/* Block 01 / DISCIPLINES */}
                    <div className="flex flex-col gap-3">
                      <h3 className="font-display font-black text-base leading-[20px] text-[#B59A63] uppercase tracking-wider flex items-center gap-1.5">
                        <span>01 / DISCIPLINES</span>
                      </h3>
                      <div className="flex flex-col gap-1.5">
                        {currentData.disciplines.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={onClose}
                            className="font-sans font-bold text-[11px] leading-[14px] text-[#111111] uppercase tracking-wider hover:text-[#B59A63] transition-colors py-0.5"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Block 02 / MOVEMENT & TRAINING */}
                    <div className="flex flex-col gap-3">
                      <h3 className="font-display font-black text-base leading-[20px] text-[#B59A63] uppercase tracking-wider">
                        02 / MOVEMENT & ENVIRONMENTS
                      </h3>
                      <div className="flex flex-col gap-1.5">
                        {currentData.movement.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={onClose}
                            className="font-sans font-medium text-[11px] leading-[14px] text-[#555555] uppercase tracking-wider hover:text-[#111111] transition-colors py-0.5"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Collections & Direct Actions */}
                  <div className="flex flex-col gap-8 w-full">
                    {/* Block 03 / SYSTEMS & CAPSULES */}
                    <div className="flex flex-col gap-3">
                      <h3 className="font-display font-black text-base leading-[20px] text-[#B59A63] uppercase tracking-wider">
                        03 / SYSTEMS & CAPSULES
                      </h3>
                      <div className="flex flex-col gap-1.5">
                        {currentData.collections.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={onClose}
                            className="font-sans font-medium text-[11px] leading-[14px] text-[#555555] uppercase tracking-wider hover:text-[#111111] transition-colors py-0.5"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Block 04 / SHOP & NAVIGATION */}
                    <div className="flex flex-col gap-3">
                      <h3 className="font-display font-black text-base leading-[20px] text-[#B59A63] uppercase tracking-wider">
                        04 / SHOP BY CATEGORY
                      </h3>
                      <div className="flex flex-col gap-2">
                        {currentData.shopLinks.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={onClose}
                            className={`font-sans text-[11px] leading-[14px] uppercase tracking-wider transition-all py-1 flex items-center gap-1.5 ${
                              item.isAction
                                ? "font-black text-[#111111] bg-[#B59A63]/25 px-2.5 py-1.5 border-l-2 border-[#B59A63] hover:bg-[#B59A63] hover:text-[#111111]"
                                : "font-bold text-[#111111] hover:text-[#B59A63]"
                            }`}
                          >
                            <span>{item.name}</span>
                            {item.isAction && <ArrowRight className="w-3 h-3" />}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Photo Editorial Card */}
                <Link
                  href={currentData.featured.href}
                  onClick={onClose}
                  className="hidden lg:flex flex-col w-[310px] h-[430px] relative overflow-hidden rounded-[2px] bg-[#E4DCD0] shadow-sm group cursor-pointer shrink-0 border border-[#111111]/[0.08]"
                >
                  <Image
                    src={currentData.featured.image}
                    alt={currentData.featured.title}
                    fill
                    sizes="310px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {currentData.featured.badge && (
                    <div className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-[#111111] text-[#B59A63] font-sans font-bold text-[9px] uppercase tracking-widest">
                      {currentData.featured.badge}
                    </div>
                  )}

                  <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-1.5 text-[#F1ECE4] z-10">
                    <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-[#B59A63]">
                      {currentData.featured.title}
                    </span>
                    <span className="font-display font-black text-xl uppercase tracking-tight leading-tight">
                      {currentData.featured.subtitle}
                    </span>
                    <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-[#F1ECE4]/80 pt-1 flex items-center gap-1 group-hover:text-[#B59A63] transition-colors">
                      EXPLORE ARCHIVE →
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
