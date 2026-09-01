"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/cart-context";
import { PRODUCTS, Product } from "@/data/products";
import { motion } from "framer-motion";
import { Plus, Eye } from "lucide-react";

interface ProductCardProps {
  product: Product;
  aspectClass?: string;
  imageHeightClass?: string;
  containerClass?: string;
}

export function ProductCard({
  product,
  imageHeightClass = "h-[375px]",
  containerClass = "w-full",
}: ProductCardProps) {
  const { addItem, setQuickViewProduct } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`group flex flex-col gap-4 ${containerClass}`}
    >
      {/* Product Image Container */}
      <div
        className={`relative w-full ${imageHeightClass} overflow-hidden bg-[#E7E0D3] cursor-pointer shadow-xs`}
        onClick={() => setQuickViewProduct(product)}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Floating Quick Action Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="px-3 py-2 bg-[#F1ECE4]/95 text-[#111111] font-sans font-bold text-[11px] uppercase tracking-wider backdrop-blur-xs hover:bg-[#111111] hover:text-[#F1ECE4] transition-colors flex items-center gap-1.5"
            aria-label={`Quick view ${product.name}`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addItem(product);
            }}
            className="px-3.5 py-2 bg-[#111111] text-[#F1ECE4] hover:bg-[#B59A63] font-sans font-bold text-[11px] uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-md"
            aria-label={`Add ${product.name} to bag`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>

        {product.tag && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-[#111111]/80 backdrop-blur-xs text-[#B59A63] font-sans text-[9px] uppercase font-bold tracking-widest">
            {product.tag}
          </div>
        )}
      </div>

      {/* Product Meta */}
      <div className="flex flex-col gap-1 w-full">
        <div className="flex flex-row justify-between items-baseline gap-2 w-full">
          <button
            onClick={() => setQuickViewProduct(product)}
            className="text-left font-sans font-semibold text-[14px] leading-[18px] text-[#111111] group-hover:text-[#B59A63] transition-colors truncate"
          >
            {product.name}
          </button>
          <span className="font-sans font-bold text-[14px] leading-[18px] text-[#B59A63] shrink-0">
            ${product.price}
          </span>
        </div>
        <span className="font-sans font-medium text-[11px] leading-[14px] uppercase text-[#444444] tracking-wider">
          {product.subcategory}
        </span>
      </div>
    </motion.div>
  );
}

export function FeaturedCollection() {
  const tee = PRODUCTS.find((p) => p.id === "beyond-tshirt") || PRODUCTS[0];
  const hoodie = PRODUCTS.find((p) => p.id === "human-potential-hoodie")!;
  const cap = PRODUCTS.find((p) => p.id === "possibility-cap")!;
  const jacket = PRODUCTS.find((p) => p.id === "movement-track-jacket")!;
  const utilityBag = PRODUCTS.find((p) => p.id === "beyond-utility-bag")!;
  const pants = PRODUCTS.find((p) => p.id === "system-01-pants")!;
  const tote = PRODUCTS.find((p) => p.id === "potential-tote")!;

  return (
    <section
      id="shop"
      className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 py-12 sm:py-16 md:py-20 flex flex-col gap-10 md:gap-14"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-row justify-between items-center"
      >
        <h2 className="font-display font-extrabold text-xl sm:text-2xl leading-none text-[#B59A63] uppercase tracking-wider">
          02 // THE CURRENT SYSTEM
        </h2>
        <span className="font-sans font-bold text-xs leading-4 uppercase tracking-widest text-[#444444]">
          AUTUMN / WINTER RELEASE
        </span>
      </motion.div>

      {/* Staggered Lookbook Grid */}
      <div className="flex flex-col gap-12 md:gap-16 w-full">
        {/* ROW 1: Model Vest Editorial + Tee + Hoodie (Items align bottom on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Model Editorial (520px) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full h-[450px] sm:h-[550px] lg:h-[640px] overflow-hidden bg-[#D8CEBE] group shadow-sm"
          >
            <Image
              src="https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/home%20page%20Images/model-vest-pants.jpg"
              alt="Editorial look of model wearing technical sand vest and cargo pants"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-[#F1ECE4]">
              <span className="font-display font-black text-2xl uppercase tracking-wider">
                LOOK 01
              </span>
              <p className="font-sans text-xs uppercase tracking-widest text-[#F1ECE4]/80">
                SYSTEM ADAPTIVE SHELL & KINETIC BASE
              </p>
            </div>
          </motion.div>

          {/* Middle: Performance Tee */}
          <div className="lg:col-span-3">
            <ProductCard
              product={tee}
              imageHeightClass="h-[340px] sm:h-[375px]"
            />
          </div>

          {/* Right: Human Potential Hoodie */}
          <div className="lg:col-span-4">
            <ProductCard
              product={hoodie}
              imageHeightClass="h-[400px] sm:h-[450px]"
            />
          </div>
        </div>

        {/* ROW 2: Possibility Cap + Movement Track Jacket + Secondary Accessory/Look */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Possibility Cap */}
          <div className="lg:col-span-3">
            <ProductCard
              product={cap}
              imageHeightClass="h-[360px] sm:h-[400px]"
            />
          </div>

          {/* Middle Large Hero Item: Movement Track Jacket */}
          <div className="lg:col-span-6">
            <ProductCard
              product={jacket}
              imageHeightClass="h-[480px] sm:h-[600px] lg:h-[680px]"
            />
          </div>

          {/* Right: Duplicate or Variant Cap */}
          <div className="lg:col-span-3">
            <ProductCard
              product={{
                ...cap,
                id: "possibility-cap-dune",
                name: "Possibility Cap (Dune)",
              }}
              imageHeightClass="h-[360px] sm:h-[400px]"
            />
          </div>
        </div>

        {/* ROW 3: Utility Bag + System Pants + Potential Tote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left: Beyond Utility Bag (500px) */}
          <div className="lg:col-span-5">
            <ProductCard
              product={utilityBag}
              imageHeightClass="h-[420px] sm:h-[520px] lg:h-[625px]"
            />
          </div>

          {/* Middle: System 01 Pants */}
          <div className="lg:col-span-3">
            <ProductCard
              product={pants}
              imageHeightClass="h-[380px] sm:h-[425px]"
            />
          </div>

          {/* Right: Potential Tote */}
          <div className="lg:col-span-4">
            <ProductCard
              product={tote}
              imageHeightClass="h-[380px] sm:h-[425px]"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#111111]/[0.082]" />
    </section>
  );
}
