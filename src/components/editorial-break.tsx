"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Wind, Droplets } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/cart-context";
import { PRODUCTS } from "@/data/products";

export function EditorialBreak() {
  const { setQuickViewProduct } = useCart();
  const jacket = PRODUCTS.find((p) => p.id === "movement-track-jacket")!;

  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 py-12 sm:py-16 md:py-20 flex flex-col gap-8 sm:gap-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Left Macro Image Container (800px x 600px ratio) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full lg:w-[65%] h-[340px] sm:h-[480px] lg:h-[600px] overflow-hidden bg-[#222222] group shadow-md"
        >
          <Image
            src="https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/macro-waterproof-v2.jpg"
            alt="Hyper-detailed close up of technical waterproof apparel fibers, raindrops beaded on texture"
            fill
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            priority
          />

          {/* Micro Specs Badge Overlay */}
          <div className="absolute top-6 left-6 flex flex-wrap gap-2">
            <div className="px-3 py-1.5 bg-[#111111]/80 backdrop-blur-md text-[#F1ECE4] font-sans text-[10px] uppercase font-bold tracking-widest flex items-center gap-1.5 border border-[#B59A63]/30">
              <Droplets className="w-3.5 h-3.5 text-[#B59A63]" />
              <span>HYDRO-RESISTANT 10,000MM</span>
            </div>
            <div className="hidden sm:flex px-3 py-1.5 bg-[#111111]/80 backdrop-blur-md text-[#F1ECE4] font-sans text-[10px] uppercase font-bold tracking-widest items-center gap-1.5 border border-white/10">
              <Wind className="w-3.5 h-3.5 text-[#B59A63]" />
              <span>KINETIC VENTILATION</span>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 px-3 py-1.5 bg-[#B59A63] text-[#111111] font-display font-black text-xs uppercase tracking-wider">
            LAB VERIFIED SPEC
          </div>
        </motion.div>

        {/* Right Info Frame (400px width) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 w-full lg:w-[35%] max-w-[420px]"
        >
          <div className="flex flex-col gap-3">
            <span className="font-sans font-bold text-xs leading-4 uppercase tracking-widest text-[#B59A63]">
              BUILT FOR MOVEMENT.
            </span>
            <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-[72px] leading-[0.95] text-[#111111] uppercase tracking-tight">
              SYSTEM 01
            </h2>
          </div>

          <p className="font-sans font-normal text-[15px] leading-[1.6] text-[#444444]">
            System 01 is an integrated capsule of technical apparel engineered to dissolve physical restriction. Each weave is mapped to human kinetics, offering adaptive ventilation and thermal regulation that compounds with every mile.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setQuickViewProduct(jacket)}
              className="group inline-flex flex-row items-center gap-2 py-2 border-b border-[#111111] hover:border-[#B59A63] transition-colors cursor-pointer"
            >
              <span className="font-sans font-bold text-xs leading-4 uppercase tracking-wider text-[#111111] group-hover:text-[#B59A63] transition-colors">
                EXPLORE PRODUCT
              </span>
              <div className="w-[18px] h-[18px] flex items-center justify-center rounded-full bg-[#111111] group-hover:bg-[#B59A63] text-[#F1ECE4] transition-all duration-200 group-hover:translate-x-1">
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#111111]/[0.082]" />
    </section>
  );
}
