"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useCart } from "@/context/cart-context";
import {
  X,
  Plus,
  ShieldCheck,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ProductModal() {
  const { quickViewProduct, setQuickViewProduct } = useCart();

  if (!quickViewProduct) return null;

  return (
    <ProductModalContent
      key={quickViewProduct.id}
      product={quickViewProduct}
      onClose={() => setQuickViewProduct(null)}
    />
  );
}

function ProductModalContent({
  product,
  onClose,
}: {
  product: NonNullable<ReturnType<typeof useCart>["quickViewProduct"]>;
  onClose: () => void;
}) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes?.[0] || "Standard"
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors?.[0]?.name || "Standard"
  );
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [isAdded, setIsAdded] = useState(false);

  // Construct dynamic gallery array
  const activeColorObj = product.colors?.find(
    (c) => c.name === (selectedColor || product.colors?.[0]?.name)
  );

  // Base gallery from product or fallback to main + secondary image
  const galleryItems = React.useMemo(() => {
    if (product.gallery && product.gallery.length > 0) {
      // If active color has a custom image, replace the FRONT (first) item's image with the color image
      return product.gallery.map((item, idx) => {
        if (idx === 0 && activeColorObj?.image) {
          return { ...item, image: activeColorObj.image };
        }
        return item;
      });
    }

    // Fallback if no explicit gallery
    const fallbackList = [
      {
        view: "FRONT",
        image: activeColorObj?.image || product.image,
      },
    ];

    if (product.secondaryImage) {
      fallbackList.push({
        view: "BACK",
        image: product.secondaryImage,
      });
    }

    return fallbackList;
  }, [product, activeColorObj]);

  const totalSlides = galleryItems.length;

  const nextSlide = useCallback(() => {
    if (totalSlides <= 1) return;
    setDirection(1);
    setActiveSlideIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    if (totalSlides <= 1) return;
    setDirection(-1);
    setActiveSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, onClose]);

  const currentSize = selectedSize || product.sizes?.[0] || "Standard";
  const currentColor =
    selectedColor || product.colors?.[0]?.name || "Standard";
  const currentSlide = galleryItems[activeSlideIndex] || galleryItems[0];

  const handleAdd = () => {
    addItem(product, currentSize, currentColor);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 900);
  };

  const handleColorSelect = (colorName: string) => {
    setSelectedColor(colorName);
    // Jump back to front view so the user immediately sees their color choice
    setActiveSlideIndex(0);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window Container */}
        <div className="flex min-h-full items-center justify-center p-3 sm:p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="relative w-full max-w-5xl bg-[#F1ECE4] shadow-2xl overflow-hidden border border-[#111111]/[0.12] flex flex-col lg:flex-row z-10 my-6"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-30 p-2.5 bg-[#111111] text-[#F1ECE4] hover:bg-[#B59A63] hover:text-[#111111] transition-all rounded-full cursor-pointer shadow-md"
              aria-label="Close product view"
            >
              <X className="w-4 h-4" />
            </button>

            {/* ============================================================ */}
            {/* LEFT: MULTI-IMAGE GALLERY SLIDER & VIEW CARDS STRIP */}
            {/* ============================================================ */}
            <div className="w-full lg:w-[52%] bg-[#E4DCD0] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#111111]/[0.08] shrink-0">
              {/* Main Showcase Slider Display */}
              <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[440px] overflow-hidden group">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={`${activeSlideIndex}-${currentSlide?.image}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.25 },
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={currentSlide?.image || product.image}
                      alt={`${product.name} - ${currentSlide?.view || "View"}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover object-center select-none"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Top Overlay Badges */}
                <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2">
                  {product.tag && (
                    <span className="px-2.5 py-1 bg-[#111111] text-[#B59A63] font-sans text-[10px] uppercase font-bold tracking-widest shadow-xs">
                      {product.tag}
                    </span>
                  )}
                  <span className="px-2.5 py-1 bg-[#111111]/80 backdrop-blur-xs text-[#F1ECE4] font-sans text-[10px] uppercase font-semibold tracking-wider flex items-center gap-1.5 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B59A63]" />
                    VIEW: {currentSlide?.view || "MAIN"}
                  </span>
                </div>

                {/* Slide Counter Indicator */}
                <div className="absolute top-4 right-14 z-20 px-2.5 py-1 bg-black/60 backdrop-blur-xs text-[#F1ECE4] font-sans text-[10px] uppercase font-semibold tracking-widest">
                  {activeSlideIndex + 1} / {totalSlides}
                </div>

                {/* Navigation Arrows */}
                {totalSlides > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevSlide();
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-[#111111]/75 hover:bg-[#111111] text-[#F1ECE4] hover:text-[#B59A63] transition-all rounded-full shadow-lg cursor-pointer opacity-90 group-hover:opacity-100"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextSlide();
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-[#111111]/75 hover:bg-[#111111] text-[#F1ECE4] hover:text-[#B59A63] transition-all rounded-full shadow-lg cursor-pointer opacity-90 group-hover:opacity-100"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Bottom Color Badge */}
                <div className="absolute bottom-3 left-4 z-20 px-2.5 py-1 bg-[#111111]/85 backdrop-blur-xs text-[#F1ECE4] font-sans text-[10px] uppercase font-medium tracking-wider flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-white/40 shrink-0"
                    style={{ backgroundColor: activeColorObj?.hex || "#111111" }}
                  />
                  <span>COLOR: {currentColor}</span>
                </div>
              </div>

              {/* View Cards / Thumbnail Strip */}
              {totalSlides > 1 && (
                <div className="p-3 sm:p-3.5 bg-[#E8E2D5] border-t border-[#111111]/[0.08]">
                  <div className="flex items-center justify-between pb-1.5">
                    <span className="font-sans font-bold text-[9px] uppercase tracking-widest text-[#444444]">
                      AVAILABLE PRODUCT VIEWS ({totalSlides})
                    </span>
                    <span className="font-sans text-[8px] uppercase tracking-wider text-[#777777]">
                      CLICK TO INSPECT
                    </span>
                  </div>

                  {/* Thumbnail Cards Grid / Horizontal Scroll */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                    {galleryItems.map((item, idx) => {
                      const isActive = activeSlideIndex === idx;
                      return (
                        <button
                          key={`${item.view}-${idx}`}
                          onClick={() => {
                            setDirection(idx > activeSlideIndex ? 1 : -1);
                            setActiveSlideIndex(idx);
                          }}
                          className={`group relative flex-shrink-0 w-14 sm:w-16 rounded-[2px] overflow-hidden border transition-all cursor-pointer ${
                            isActive
                              ? "border-[#111111] shadow-md ring-2 ring-[#B59A63]/50 scale-105"
                              : "border-[#111111]/20 hover:border-[#111111]/60 opacity-70 hover:opacity-100"
                          }`}
                        >
                          <div className="relative w-full h-11 sm:h-12 bg-[#DCD4C4]">
                            <Image
                              src={item.image}
                              alt={item.view}
                              fill
                              sizes="80px"
                              className="object-cover object-center"
                            />
                            {isActive && (
                              <div className="absolute inset-0 bg-[#B59A63]/15" />
                            )}
                          </div>
                          <div
                            className={`w-full py-0.5 text-center font-sans font-bold text-[8px] uppercase tracking-wider transition-colors ${
                              isActive
                                ? "bg-[#111111] text-[#F1ECE4]"
                                : "bg-[#DCD4C4] text-[#444444] group-hover:bg-[#111111] group-hover:text-[#F1ECE4]"
                            }`}
                          >
                            {item.view}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* ============================================================ */}
            {/* RIGHT: SPECIFICATIONS, VARIANTS & ACTIONS (PINNED ADD TO BAG) */}
            {/* ============================================================ */}
            <div className="w-full lg:w-[48%] flex flex-col justify-between max-h-[85vh] lg:max-h-[550px] relative bg-[#F1ECE4]">
              {/* Scrollable Content Section */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 pb-2 space-y-4 scrollbar-thin">
                {/* Header Info */}
                <div className="space-y-1 border-b border-[#111111]/[0.08] pb-3 pr-8">
                  <div className="flex items-center justify-between">
                    <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-[#B59A63]">
                      {product.subcategory}
                    </span>
                    {product.tag && (
                      <span className="font-sans font-semibold text-[9px] uppercase tracking-wider text-[#777777]">
                        RELEASE 2026
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight leading-tight">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline gap-2.5 pt-0.5">
                    <span className="font-sans font-black text-xl sm:text-2xl text-[#111111]">
                      {product.currency || "$"}{product.price.toLocaleString()}
                    </span>
                    <span className="font-sans text-[10px] uppercase text-[#777777] font-medium tracking-wider">
                      IN STOCK // READY TO SHIP
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-xs text-[#444444] leading-relaxed">
                  {product.description}
                </p>

                {/* 1. Color Variation Swatches */}
                {product.colors && product.colors.length > 0 && (
                  <div className="space-y-2 pt-0.5">
                    <div className="flex items-center justify-between">
                      <span className="font-sans font-bold text-[10px] uppercase tracking-wider text-[#111111]">
                        COLOR VARIANT:{" "}
                        <span className="text-[#B59A63] font-black">
                          {currentColor}
                        </span>
                      </span>
                      <span className="font-sans text-[9px] uppercase text-[#777777]">
                        {product.colors.length}{" "}
                        {product.colors.length === 1
                          ? "COLORWAY"
                          : "COLORWAYS"}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((c) => {
                        const isSelected = currentColor === c.name;
                        return (
                          <button
                            key={c.name}
                            onClick={() => handleColorSelect(c.name)}
                            className={`group relative flex items-center gap-1.5 px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                              isSelected
                                ? "border-[#111111] bg-[#111111] text-[#F1ECE4] shadow-xs"
                                : "border-[#111111]/20 bg-[#E8E2D5] hover:border-[#111111] text-[#111111]"
                            }`}
                            title={`Switch to ${c.name}`}
                          >
                            <span
                              className={`w-3 h-3 rounded-full border shrink-0 ${
                                isSelected ? "border-white" : "border-black/30"
                              }`}
                              style={{ backgroundColor: c.hex }}
                            />
                            <span className="font-sans font-bold text-[9px] uppercase tracking-wider">
                              {c.name}
                            </span>
                            {isSelected && (
                              <Check className="w-2.5 h-2.5 text-[#B59A63] ml-0.5" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 2. Size Selection */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className="space-y-2 pt-0.5">
                    <div className="flex items-center justify-between">
                      <span className="font-sans font-bold text-[10px] uppercase tracking-wider text-[#111111]">
                        SELECT SIZE:{" "}
                        <span className="text-[#B59A63] font-bold">{currentSize}</span>
                      </span>
                      <span className="font-sans text-[9px] uppercase underline text-[#777777] cursor-pointer hover:text-[#111111]">
                        SIZE GUIDE
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {product.sizes.map((s) => (
                        <button
                          key={s}
                          onClick={() => setSelectedSize(s)}
                          className={`px-3 py-1.5 font-sans text-[11px] font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                            currentSize === s
                              ? "bg-[#111111] text-[#F1ECE4] border-[#111111] shadow-xs"
                              : "bg-[#E8E2D5] text-[#111111] border-[#111111]/15 hover:border-[#B59A63]"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Technical Specifications */}
                {product.features && (
                  <div className="space-y-1.5 pt-1.5 border-t border-[#111111]/[0.08]">
                    <span className="font-sans font-bold text-[9px] uppercase tracking-widest text-[#555555] block">
                      TECHNICAL ATTRIBUTES
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1">
                      {product.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="font-sans text-[10px] text-[#444444] flex items-center gap-1.5 leading-tight"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B59A63] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Pinned Bottom Actions & Guarantee - ALWAYS DOCKED & VISIBLE */}
              <div className="p-4 sm:p-5 pt-3 bg-[#F1ECE4] border-t border-[#111111]/[0.08] space-y-2.5 shrink-0 shadow-[0_-4px_12px_rgba(0,0,0,0.03)] z-10">
                <button
                  onClick={handleAdd}
                  disabled={isAdded}
                  className={`w-full py-3.5 font-sans font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer ${
                    isAdded
                      ? "bg-[#B59A63] text-[#111111]"
                      : "bg-[#111111] hover:bg-[#B59A63] hover:text-[#111111] text-[#F1ECE4] active:scale-[0.99]"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4 text-[#111111]" />
                      <span>ADDED TO BAG</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>ADD TO BAG • {product.currency || "$"}{product.price.toLocaleString()}</span>
                    </>
                  )}
                </button>

                <div className="flex justify-between items-center text-[9px] uppercase font-sans font-semibold text-[#555555] px-0.5">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#B59A63]" />
                    LIFETIME WARRANTY
                  </span>
                  <span className="flex items-center gap-1">
                    <RefreshCw className="w-3 h-3 text-[#B59A63]" />
                    30-DAY TRIAL
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}

