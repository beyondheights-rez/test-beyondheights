"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function ManifestoSection() {
  return (
    <section
      id="manifesto"
      className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 py-12 sm:py-16 md:py-20 flex flex-col gap-8 sm:gap-12"
    >
      {/* Header Tag Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-row justify-between items-center"
      >
        <span className="font-display font-extrabold text-xl sm:text-2xl leading-none text-[#B59A63] uppercase tracking-wider">
          01 // MANIFESTO
        </span>
        <div className="w-16 sm:w-28 md:w-[120px] h-[2px] bg-[#B59A63]" />
      </motion.div>

      {/* Main Content Split Frame */}
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-16">
        {/* Left Product Image (522px x 425px) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full lg:w-[522px] h-[340px] sm:h-[400px] lg:h-[425px] overflow-hidden bg-[#E8E1D5] group shadow-sm shrink-0"
        >
          <Image
            src="https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/manifesto-fleece.jpg"
            alt="Premium lookbook photo of a heavyweight sand-colored fleece crewneck sweatshirt on ivory platform"
            fill
            sizes="(max-width: 1024px) 100vw, 522px"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#111111]/80 backdrop-blur-xs font-sans text-[10px] uppercase font-bold text-[#F1ECE4]">
            ARCHIVE NO. 01
          </div>
        </motion.div>

        {/* Right Typography Block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 sm:gap-8 max-w-[678px]"
        >
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[0.92] text-[#111111] uppercase tracking-[-0.02em]">
            GO BEYOND WHAT YOU WERE<span className="text-[#B59A63]">.</span>
          </h2>
          <p className="font-sans font-normal text-lg sm:text-xl lg:text-[24px] leading-[1.6] text-[#444444]">
            Every product is evidence of movement. Every collection is a reminder that potential has no fixed form. We do not manufacture products to fill warehouses; we design systems to expand humans.
          </p>

          <div className="pt-2 flex items-center gap-6">
            <span className="font-display font-bold text-sm tracking-widest text-[#B59A63] uppercase">
              ETHOS // CRAFT // INTENT
            </span>
            <div className="h-[1px] flex-1 bg-[#111111]/[0.082]" />
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#111111]/[0.082]" />
    </section>
  );
}
