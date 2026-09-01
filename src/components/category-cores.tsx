"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function CategoryCores() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const categories = [
    {
      num: "01 / APPAREL",
      title: "UNIFORM FOR THE NEXT VERSION OF YOU.",
      desc: "Kinetic compression tops, heavyweight loopback fleece, articulated trail trousers.",
      image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/apparel-top.jpg",
      alt: "Editorial shot of a black technical running top draped minimally",
      href: "/shop",
    },
    {
      num: "02 / ACCESSORIES",
      title: "OBJECTS THAT CARRY MEANING.",
      desc: "Laser-vented hydro caps, tactical Fidlock duffles, and modular loadout gear.",
      image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/cap-olive-gold.jpg",
      alt: "Technical performance utility gear and running headwear",
      href: "/shop",
    },
    {
      num: "03 / OBJECTS",
      title: "EVIDENCE OF POSSIBILITY.",
      desc: "Hardware accessories, hydration vessels, heavyweight canvas totes.",
      image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/bottle-metal.jpg",
      alt: "Minimalist dark metal water bottle on concrete pedestal",
      href: "/shop",
    },
    {
      num: "04 / SYSTEMS",
      title: "DESIGNED AROUND MOVEMENT.",
      desc: "Modular weather capsules, wind-barrier asymmetric shells, kinetic layering.",
      image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/activewear-jump.jpg",
      alt: "Dynamic athletic activewear movement in modern athletic space",
      href: "/collections",
    },
  ];

  return (
    <section
      id="collections"
      className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 py-12 sm:py-16 md:py-20 flex flex-col gap-8 sm:gap-12"
    >
      {/* Section Tag */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-row justify-between items-center"
      >
        <h2 className="font-display font-extrabold text-xl sm:text-2xl leading-none text-[#B59A63] uppercase tracking-wider">
          04 // CATEGORY CORES
        </h2>
        <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#444444]">
          EXPLORE SYSTEMS
        </span>
      </motion.div>

      {/* Category Rows */}
      <div className="flex flex-col w-full">
        {categories.map((cat, idx) => {
          const isHovered = hoveredIdx === idx;

          return (
            <motion.div
              key={cat.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group border-b border-[#111111]/[0.082] py-6 sm:py-8 transition-all duration-300 hover:bg-black/[0.015]"
            >
              <Link
                href={cat.href}
                className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12 w-full"
              >
                {/* Left Column: Number + Big Title */}
                <div className="flex flex-col gap-3 max-w-[560px]">
                  <span className="font-display font-extrabold text-lg sm:text-[20px] leading-6 text-[#B59A63] uppercase tracking-wide">
                    {cat.num}
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-[40px] leading-[1.1] text-[#111111] uppercase tracking-tight group-hover:text-[#B59A63] transition-colors duration-200">
                    {cat.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#444444] opacity-80 group-hover:opacity-100 transition-opacity">
                    {cat.desc}
                  </p>
                </div>

                {/* Middle / Right: Preview Thumbnail (360px x 160px) & Action Arrow */}
                <div className="flex items-center justify-between lg:justify-end gap-6 sm:gap-8 self-end lg:self-center w-full lg:w-auto">
                  <div className="relative w-[220px] sm:w-[280px] lg:w-[360px] h-[120px] sm:h-[140px] lg:h-[160px] overflow-hidden bg-[#E2D9CB] shadow-xs">
                    <Image
                      src={cat.image}
                      alt={cat.alt}
                      fill
                      sizes="(max-width: 1024px) 280px, 360px"
                      className={`object-cover object-center transition-transform duration-700 ${
                        isHovered ? "scale-110 grayscale-0" : "scale-100 grayscale-[20%]"
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>

                  <div className="w-10 h-10 rounded-full border border-[#111111]/20 group-hover:border-[#B59A63] group-hover:bg-[#B59A63] group-hover:text-[#F1ECE4] flex items-center justify-center transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Section Divider */}
      <div className="w-full h-[1px] bg-[#111111]/[0.082]" />
    </section>
  );
}
