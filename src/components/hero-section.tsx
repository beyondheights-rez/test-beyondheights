"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20 flex flex-col gap-8 md:gap-12">
      {/* Top Header & Manifesto Row */}
      <div className="flex flex-col gap-5 md:gap-6 w-full">
        {/* Massive 180px BEYOND. Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full select-none overflow-hidden"
        >
          <h1 className="font-display font-black text-[72px] sm:text-[110px] md:text-[150px] lg:text-[180px] leading-[0.82] tracking-[-0.04em] text-[#111111] uppercase">
            BEYOND<span className="text-[#B59A63]">.</span>
          </h1>
        </motion.div>

        {/* Subhead Split Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pt-2"
        >
          {/* Left Text Block */}
          <div className="flex flex-col gap-3 max-w-[640px]">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[32px] leading-[1.05] text-[#111111] uppercase tracking-[-0.01em]">
              THE BRAND DOESN&apos;T SELL APPAREL. IT SELLS POSSIBILITY.
            </h2>
            <p className="font-sans font-normal text-sm sm:text-base leading-[1.5] text-[#444444]">
              Designed for movement. Built for the person you&apos;re becoming. Performance merchandise that bridges utility and raw self-actualization.
            </p>
          </div>

          {/* Right Action Callout */}
          <div className="flex items-center">
            <Link
              href="/shop"
              className="group flex flex-row items-center gap-2 py-2 px-1 border-b border-[#111111] hover:border-[#B59A63] transition-all duration-200"
            >
              <span className="font-sans font-bold text-xs leading-4 uppercase tracking-wider text-[#111111] group-hover:text-[#B59A63] transition-colors">
                SHOP BEYOND
              </span>
              <div className="w-[18px] h-[18px] flex items-center justify-center rounded-full bg-[#111111] group-hover:bg-[#B59A63] text-[#F1ECE4] transition-all duration-200 group-hover:translate-x-1">
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Hero Media Rectangle (1280x720) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full aspect-[16/9] max-h-[720px] overflow-hidden bg-[#E5DFC5] group cursor-pointer shadow-sm"
      >
        <Image
          src="https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/hero-runner.jpg"
          alt="Dramatic editorial campaign lifestyle action photo of an athletic runner in desert landscape"
          fill
          priority
          sizes="(max-width: 1440px) 100vw, 1280px"
          className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        {/* Subtle Gradient & Badge Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-[#F1ECE4]">
          <span className="font-display font-black text-lg sm:text-2xl tracking-wider uppercase drop-shadow-md">
            AUTUMN / WINTER 2026
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#B59A63]" />
          <span className="font-sans text-xs uppercase tracking-widest text-[#F1ECE4]/80">
            SYSTEM 01 // KINETIC EXPANSION
          </span>
        </div>

        <div className="absolute top-6 right-6 px-3 py-1.5 bg-[#111111]/80 backdrop-blur-md text-[#B59A63] font-sans font-bold text-[10px] uppercase tracking-widest flex items-center gap-1.5 border border-[#B59A63]/30">
          <Sparkles className="w-3 h-3 text-[#B59A63]" />
          <span>EDITORIAL 01</span>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#111111]/[0.082]" />
    </section>
  );
}
