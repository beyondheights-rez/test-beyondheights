"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  ShoppingBag,
  CheckCircle2,
  Search,
  ChevronDown,
  X,
  Check,
  Sparkles,
  ClipboardList,
  Flame,
  Droplets,
  Wind,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";
import { ProductModal } from "@/components/product-modal";
import { useCart } from "@/context/cart-context";
import { IRONMAN_PRODUCTS, IronmanProduct } from "@/data/ironman-products";

// Re-export IronmanProduct for backwards compatibility if needed
export type { IronmanProduct };

// Product card for Ironman catalog
function IronmanProductCard({
  product,
  onOpenModal,
}: {
  product: IronmanProduct;
  onOpenModal: (product: IronmanProduct) => void;
}) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "Standard");
  const [isHovered, setIsHovered] = useState(false);

  const activeColorObj = product.colors.find((c) => c.name === selectedColor);
  const primaryImage = activeColorObj?.image || product.image;
  const secondaryImage = product.gallery.length > 1 ? product.gallery[1].image : primaryImage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
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

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-none">
          {product.badge ? (
            <span
              className={`px-2.5 py-1 text-[9px] uppercase font-bold tracking-widest backdrop-blur-md shadow-xs ${
                product.badge === "OUT OF STOCK"
                  ? "bg-[#111111]/80 text-[#888888]"
                  : "bg-[#111111] text-[#B59A63]"
              }`}
            >
              {product.badge}
            </span>
          ) : (
            <span />
          )}

          <span className="px-2 py-0.5 bg-[#111111]/70 backdrop-blur-md text-[#F1ECE4] font-sans font-medium text-[8px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {product.gallery.length} VIEWS
          </span>
        </div>

        {/* Hover Quick Action */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
          <span className="w-full py-2.5 bg-[#F1ECE4] hover:bg-[#111111] text-[#111111] hover:text-[#F1ECE4] font-sans font-bold text-[10px] uppercase tracking-widest text-center backdrop-blur-xs transition-colors shadow-md">
            QUICK VIEW // SPECS
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-4 w-full">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-widest font-semibold">
          <span className="text-[#B59A63]">{product.subcategory}</span>
          {product.gender && <span className="text-[#888888] font-medium">{product.gender}</span>}
        </div>

        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-sans font-bold text-[14px] leading-tight text-[#111111] uppercase tracking-tight group-hover:text-[#B59A63] transition-colors truncate">
            {product.name}
          </h3>
          <span className="font-sans font-black text-[14px] text-[#111111] shrink-0">
            {product.currency}{product.price.toLocaleString()}
          </span>
        </div>

        {product.colors.length > 1 && (
          <div className="flex items-center gap-2 pt-1" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-1.5">
              {product.colors.map((col) => (
                <button
                  key={col.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedColor(col.name);
                  }}
                  className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                    selectedColor === col.name
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

// ============================================================================
// COMBO KITS DATA & COMPONENT
// ============================================================================

export interface ComboKit {
  id: string;
  name: string;
  stage: string;
  tagline: string;
  price: number;
  originalPrice: number;
  savings: number;
  image: string;
  description: string;
  discipline: "SWIM" | "BIKE" | "RUN";
  products: IronmanProduct[];
}

function ComboKitCard({
  combo,
  onOpenProductModal,
  onAddComboToCart,
  onFilterDiscipline,
}: {
  combo: ComboKit;
  onOpenProductModal: (product: IronmanProduct) => void;
  onAddComboToCart: (comboName: string, products: IronmanProduct[]) => void;
  onFilterDiscipline: (discipline: string) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onAddComboToCart(combo.name, combo.products);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2200);
  };

  return (
    <div className="flex flex-col justify-between border border-[#111111]/[0.1] bg-[#EAE4D7] p-6 sm:p-8 rounded-[2px] space-y-6 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="space-y-5">
        {/* Kit Hero Visual */}
        <div className="relative w-full h-[240px] sm:h-[280px] overflow-hidden rounded-[2px] bg-[#111111]">
          <Image
            src={combo.image}
            alt={combo.name}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 bg-[#111111] text-[#B59A63] text-[9px] font-sans font-bold uppercase tracking-wider">
              {combo.stage}
            </span>
            <span className="px-2 py-1 bg-[#B59A63] text-[#111111] text-[9px] font-sans font-bold uppercase tracking-wider">
              {combo.products.length} PRODUCTS INCLUDED
            </span>
          </div>
        </div>

        {/* Header and Pricing */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-[#B59A63]">
              {combo.tagline}
            </span>
            <span className="font-sans text-[10px] font-bold text-[#111111] uppercase bg-[#B59A63]/30 px-2 py-0.5 rounded-[1px]">
              SAVE ₹{combo.savings.toLocaleString()}
            </span>
          </div>
          <h3 className="font-display font-black text-3xl sm:text-4xl text-[#111111] uppercase tracking-tight">
            {combo.name}
          </h3>
          <p className="font-sans text-xs text-[#555555] leading-relaxed">
            {combo.description}
          </p>
        </div>

        {/* Pricing line */}
        <div className="flex items-baseline gap-3 pt-1">
          <span className="font-display font-black text-3xl text-[#111111]">
            ₹{combo.price.toLocaleString()}
          </span>
          <span className="font-sans text-sm line-through text-[#888888] font-medium">
            ₹{combo.originalPrice.toLocaleString()}
          </span>
          <span className="font-sans text-[10px] uppercase tracking-wider text-[#777777] font-semibold">
            (BUNDLE VALUE)
          </span>
        </div>

        {/* Included Products List/Tray */}
        <div className="border-t border-[#111111]/[0.1] pt-4 space-y-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="font-sans font-bold text-[11px] uppercase tracking-wider text-[#111111] hover:text-[#B59A63] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>{isExpanded ? "HIDE INCLUDED PRODUCTS" : `VIEW ALL ${combo.products.length} INCLUDED PRODUCTS`}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
            </button>
            <span className="font-sans text-[10px] text-[#777777] uppercase font-semibold">
              {combo.products.length} ITEMS
            </span>
          </div>

          {/* Collapsed mini thumbnail avatars */}
          {!isExpanded && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
              {combo.products.map((prod) => (
                <button
                  key={prod.id}
                  onClick={() => onOpenProductModal(prod)}
                  title={prod.name}
                  className="relative w-12 h-12 rounded-[2px] overflow-hidden border border-[#111111]/15 shrink-0 bg-[#F1ECE4] hover:border-[#111111] hover:scale-105 transition-all cursor-pointer"
                >
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    sizes="48px"
                    className="object-cover object-center"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Expanded product tray */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2 pt-2 overflow-hidden"
              >
                {combo.products.map((prod, idx) => (
                  <div
                    key={prod.id}
                    onClick={() => onOpenProductModal(prod)}
                    className="flex items-center justify-between p-2.5 bg-[#F1ECE4] border border-[#111111]/[0.08] hover:border-[#111111] rounded-[2px] cursor-pointer transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-11 h-11 rounded-[1px] overflow-hidden bg-[#111111] shrink-0">
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          fill
                          sizes="44px"
                          className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="space-y-0.5">
                        <span className="font-sans text-[8px] uppercase tracking-wider text-[#777777] block">
                          0{idx + 1} {"//"} {prod.subcategory.split("//")[1]?.trim() || prod.category}
                        </span>
                        <h4 className="font-sans font-bold text-xs text-[#111111] group-hover:text-[#B59A63] transition-colors leading-tight line-clamp-1">
                          {prod.name}
                        </h4>
                      </div>
                    </div>
                    <div className="text-right shrink-0 pl-2">
                      <span className="font-sans text-xs font-black text-[#111111] block">
                        ₹{prod.price.toLocaleString()}
                      </span>
                      <span className="font-sans text-[8px] text-[#B59A63] font-bold uppercase tracking-wider">
                        VIEW →
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-[#111111]/[0.1] flex flex-col sm:flex-row items-center gap-3">
        <button
          onClick={handleAdd}
          className="w-full sm:flex-1 py-3.5 bg-[#111111] hover:bg-[#B59A63] text-[#F1ECE4] hover:text-[#111111] font-sans font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-sm"
        >
          {isAdded ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-[#B59A63]" />
              <span>COMBO ADDED!</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              <span>ADD ALL {combo.products.length} ITEMS</span>
            </>
          )}
        </button>

        <button
          onClick={() => onFilterDiscipline(combo.discipline)}
          className="w-full sm:w-auto px-4 py-3.5 border border-[#111111]/20 hover:border-[#111111] font-sans font-bold text-xs uppercase tracking-widest text-[#111111] hover:text-[#B59A63] transition-colors text-center cursor-pointer"
        >
          EXPLORE GEAR →
        </button>
      </div>
    </div>
  );
}

export default function IronmanPage() {
  const { addMultipleItems, setQuickViewProduct } = useCart();

  // Curated Discipline Product Lists
  const swimProducts = useMemo(() => IRONMAN_PRODUCTS.filter((p) => p.discipline === "SWIM"), []);
  const bikeProducts = useMemo(() => IRONMAN_PRODUCTS.filter((p) => p.discipline === "BIKE"), []);
  const runProducts = useMemo(() => IRONMAN_PRODUCTS.filter((p) => p.discipline === "RUN"), []);

  // Curated 3 Stage Combos
  const comboKits = useMemo<ComboKit[]>(() => [
    {
      id: "combo-swim-kit",
      name: "THE SWIM KIT",
      stage: "STAGE 01 // SWIM",
      tagline: "5 ESSENTIAL OPEN-WATER PIECES",
      price: 11990,
      originalPrice: 13450,
      savings: 1460,
      image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/kit-swim.jpg",
      description: "Complete hydrodynamic package: performance tri suit, polarized optical sighting goggles, 3D silicone dome cap, safety buoy, and base layer tank.",
      discipline: "SWIM",
      products: [
        IRONMAN_PRODUCTS.find((p) => p.id === "im-performance-tri-suit")!,
        IRONMAN_PRODUCTS.find((p) => p.id === "im-open-water-goggle")!,
        IRONMAN_PRODUCTS.find((p) => p.id === "im-swim-cap-aero")!,
        IRONMAN_PRODUCTS.find((p) => p.id === "im-open-water-buoy")!,
        IRONMAN_PRODUCTS.find((p) => p.id === "im-swim-base-layer")!,
      ].filter(Boolean),
    },
    {
      id: "combo-bike-kit",
      name: "THE BIKE KIT",
      stage: "STAGE 02 // BIKE",
      tagline: "7 AERO TIME-TRIAL PIECES",
      price: 18990,
      originalPrice: 20430,
      savings: 1440,
      image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/kit-bike.jpg",
      description: "Full aerodynamic cycling loadout: aero-ribbed race jersey, 8-hour chamois bib shorts, packable windproof gilet, shield optics, gel mitts, bento pouch, and bottle.",
      discipline: "BIKE",
      products: [
        IRONMAN_PRODUCTS.find((p) => p.id === "im-cycling-jersey")!,
        IRONMAN_PRODUCTS.find((p) => p.id === "im-aero-bib-short")!,
        IRONMAN_PRODUCTS.find((p) => p.id === "im-aero-vest-windproof")!,
        IRONMAN_PRODUCTS.find((p) => p.id === "im-cycling-sunglasses")!,
        IRONMAN_PRODUCTS.find((p) => p.id === "im-cycling-gloves")!,
        IRONMAN_PRODUCTS.find((p) => p.id === "im-energy-storage-pouch")!,
        IRONMAN_PRODUCTS.find((p) => p.id === "im-hydration-bottle-750")!,
      ].filter(Boolean),
    },
    {
      id: "combo-run-kit",
      name: "THE RUN KIT",
      stage: "STAGE 03 // RUN",
      tagline: "7 MARATHON ENDURANCE PIECES",
      price: 10990,
      originalPrice: 12130,
      savings: 1140,
      image: "https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/kit-run.jpg",
      description: "High-mileage marathon system: 95g performance run tee, 2-in-1 compression liner shorts, lightweight singlet, ripstop cap, running belt, soft flask, and socks.",
      discipline: "RUN",
      products: [
        IRONMAN_PRODUCTS.find((p) => p.id === "im-running-tee")!,
        IRONMAN_PRODUCTS.find((p) => p.id === "im-running-short-2in1")!,
        IRONMAN_PRODUCTS.find((p) => p.id === "im-running-singlet")!,
        IRONMAN_PRODUCTS.find((p) => p.id === "im-running-cap-ripstop")!,
        IRONMAN_PRODUCTS.find((p) => p.id === "im-running-belt")!,
        IRONMAN_PRODUCTS.find((p) => p.id === "im-ergonomic-soft-flask")!,
        IRONMAN_PRODUCTS.find((p) => p.id === "im-performance-run-socks")!,
      ].filter(Boolean),
    },
  ], []);

  // Complete Flagship 12-Piece Combo
  const complete12PieceCombo = useMemo(() => ({
    name: "THE COMPLETE 113 KM SYSTEM",
    price: 48990,
    originalPrice: 60000,
    savings: 11010,
    products: [
      IRONMAN_PRODUCTS.find((p) => p.id === "im-performance-tri-suit")!,
      IRONMAN_PRODUCTS.find((p) => p.id === "im-open-water-goggle")!,
      IRONMAN_PRODUCTS.find((p) => p.id === "im-cycling-jersey")!,
      IRONMAN_PRODUCTS.find((p) => p.id === "im-aero-bib-short")!,
      IRONMAN_PRODUCTS.find((p) => p.id === "im-cycling-sunglasses")!,
      IRONMAN_PRODUCTS.find((p) => p.id === "im-running-tee")!,
      IRONMAN_PRODUCTS.find((p) => p.id === "im-running-short-2in1")!,
      IRONMAN_PRODUCTS.find((p) => p.id === "im-running-cap-ripstop")!,
      IRONMAN_PRODUCTS.find((p) => p.id === "im-ergonomic-soft-flask")!,
      IRONMAN_PRODUCTS.find((p) => p.id === "im-transition-gear-bag")!,
      IRONMAN_PRODUCTS.find((p) => p.id === "im-recovery-layer-hoodie")!,
      IRONMAN_PRODUCTS.find((p) => p.id === "im-gps-multisport-watch")!,
    ].filter(Boolean),
  }), []);

  // Handler to add entire combo bundle to cart
  const handleAddComboToCart = (comboName: string, comboProducts: IronmanProduct[]) => {
    if (!comboProducts || comboProducts.length === 0) return;
    addMultipleItems(
      comboProducts.map((item) => ({
        product: {
          id: item.id,
          name: item.name,
          price: item.price,
          currency: item.currency || "₹",
          category: item.category,
          subcategory: item.subcategory,
          image: item.colors?.[0]?.image || item.image,
          gallery: item.gallery,
          description: item.description,
          features: item.features,
          sizes: item.sizes,
          colors: item.colors,
          tag: item.badge,
        },
        size: item.sizes[0] || "Standard",
        color: item.colors[0]?.name || "Standard",
      }))
    );
  };

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("ALL");
  const [selectedProductType, setSelectedProductType] = useState<string>("ALL");
  const [selectedGender, setSelectedGender] = useState<string>("ALL");
  const [selectedSize, setSelectedSize] = useState<string>("ALL");
  const [selectedPrice, setSelectedPrice] = useState<string>("ALL");
  const [selectedSort, setSelectedSort] = useState<string>("FEATURED");

  // Checklist Modal State
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);

  // Dropdown States
  const [openDisciplineDropdown, setOpenDisciplineDropdown] = useState(false);
  const [openProductDropdown, setOpenProductDropdown] = useState(false);
  const [openGenderDropdown, setOpenGenderDropdown] = useState(false);
  const [openPriceDropdown, setOpenPriceDropdown] = useState(false);
  const [openSortDropdown, setOpenSortDropdown] = useState(false);

  const closeAllDropdowns = () => {
    setOpenDisciplineDropdown(false);
    setOpenProductDropdown(false);
    setOpenGenderDropdown(false);
    setOpenPriceDropdown(false);
    setOpenSortDropdown(false);
  };

  const handleOpenProductModal = (item: IronmanProduct) => {
    const colorObj = item.colors[0];
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

  // Filtered Equipment Catalog
  const filteredProducts = useMemo(() => {
    return IRONMAN_PRODUCTS.filter((item) => {
      // 1. Discipline Filter
      if (selectedDiscipline !== "ALL" && item.discipline !== selectedDiscipline) {
        return false;
      }

      // 2. Product Type Filter
      if (selectedProductType !== "ALL" && item.productType !== selectedProductType) {
        return false;
      }

      // 3. Gender Filter
      if (selectedGender !== "ALL") {
        if (item.gender && item.gender !== selectedGender && item.gender !== "UNISEX") return false;
        if (!item.gender && selectedGender !== "UNISEX") return false;
      }

      // 4. Size Filter
      if (selectedSize !== "ALL") {
        if (selectedSize === "ONE SIZE") {
          const hasOneSize = item.sizes.some((s) => s.toUpperCase().includes("ONE") || s.toUpperCase().includes("20L") || s.toUpperCase().includes("45L") || s.toUpperCase().includes("750") || s.toUpperCase().includes("500") || s.toUpperCase().includes("0.6L"));
          if (!hasOneSize) return false;
        } else {
          if (!item.sizes.some((s) => s.includes(selectedSize))) return false;
        }
      }

      // 5. Price Filter (INR)
      if (selectedPrice !== "ALL") {
        if (selectedPrice === "UNDER_1000" && item.price >= 1000) return false;
        if (selectedPrice === "1000_2500" && (item.price < 1000 || item.price > 2500)) return false;
        if (selectedPrice === "2500_5000" && (item.price < 2500 || item.price > 5000)) return false;
        if (selectedPrice === "OVER_5000" && item.price <= 5000) return false;
      }

      // 6. Search Query Filter
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesFeatures = item.features.some((f) => f.toLowerCase().includes(q));
        const matchesSub = item.subcategory.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesFeatures && !matchesSub) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (selectedSort === "PRICE: LOW TO HIGH") return a.price - b.price;
      if (selectedSort === "PRICE: HIGH TO LOW") return b.price - a.price;
      if (selectedSort === "NEWEST") return a.badge === "NEW" ? -1 : 1;
      return 0; // Default FEATURED
    });
  }, [selectedDiscipline, selectedProductType, selectedGender, selectedSize, selectedPrice, searchQuery, selectedSort]);

  const clearAllFilters = () => {
    setSelectedDiscipline("ALL");
    setSelectedProductType("ALL");
    setSelectedGender("ALL");
    setSelectedSize("ALL");
    setSelectedPrice("ALL");
    setSearchQuery("");
    closeAllDropdowns();
  };

  const activeChips = useMemo(() => {
    const chips: { id: string; label: string; onRemove: () => void }[] = [];
    if (selectedDiscipline !== "ALL") {
      chips.push({ id: "disc", label: `STAGE: ${selectedDiscipline}`, onRemove: () => setSelectedDiscipline("ALL") });
    }
    if (selectedProductType !== "ALL") {
      chips.push({ id: "ptype", label: `TYPE: ${selectedProductType}`, onRemove: () => setSelectedProductType("ALL") });
    }
    if (selectedGender !== "ALL") {
      chips.push({ id: "gender", label: `GENDER: ${selectedGender}`, onRemove: () => setSelectedGender("ALL") });
    }
    if (selectedSize !== "ALL") {
      chips.push({ id: "size", label: `SIZE: ${selectedSize}`, onRemove: () => setSelectedSize("ALL") });
    }
    if (selectedPrice !== "ALL") {
      const pLabel = selectedPrice === "UNDER_1000" ? "UNDER ₹1,000" : selectedPrice === "1000_2500" ? "₹1,000–₹2,500" : selectedPrice === "2500_5000" ? "₹2,500–₹5,000" : "₹5,000+";
      chips.push({ id: "price", label: `PRICE: ${pLabel}`, onRemove: () => setSelectedPrice("ALL") });
    }
    if (searchQuery.trim() !== "") {
      chips.push({ id: "search", label: `SEARCH: "${searchQuery}"`, onRemove: () => setSearchQuery("") });
    }
    return chips;
  }, [selectedDiscipline, selectedProductType, selectedGender, selectedSize, selectedPrice, searchQuery]);

  return (
    <main
      onClick={closeAllDropdowns}
      className="relative min-h-screen w-full bg-[#F1ECE4] flex flex-col items-center overflow-x-hidden selection:bg-[#111111] selection:text-[#F1ECE4]"
    >
      {/* 01. HEADER */}
      <Header />

      {/* Container 1440px with 80px margins on desktop */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-start bg-[#F1ECE4]">
        
        {/* ============================================================ */}
        {/* 02. HERO — IRONMAN */}
        {/* ============================================================ */}
        <section className="relative w-full px-6 sm:px-12 md:px-20 pt-10 md:pt-16 pb-16 md:pb-24 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#111111]/[0.082] pb-8">
            <div className="space-y-2">
              <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#B59A63] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B59A63]" />
                BEYOND × PERFORMANCE ARCHIVE // KONA & GLOBAL TRIALS
              </span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-black text-[72px] sm:text-[110px] md:text-[140px] lg:text-[170px] leading-[80%] text-[#111111] uppercase tracking-tighter"
              >
                IRONMAN
              </motion.h1>
            </div>

            <div className="flex flex-col items-start md:items-end text-left md:text-right space-y-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsChecklistOpen(true)}
                  className="px-3.5 py-1.5 bg-[#111111] hover:bg-[#B59A63] text-[#F1ECE4] hover:text-[#111111] font-sans font-bold text-[10px] uppercase tracking-widest transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <ClipboardList className="w-3.5 h-3.5" />
                  <span>IRONMAN GEAR CHECKLIST</span>
                </button>
              </div>
              <span className="font-display font-black text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight">
                113.0 KILOMETERS
              </span>
              <span className="font-display font-black text-xl sm:text-2xl text-[#B59A63] uppercase tracking-tight">
                ONE BODY // ONE DAY
              </span>
              <span className="font-sans text-[11px] uppercase tracking-wider text-[#777777]">
                SWIM 1.9 KM · BIKE 90 KM · RUN 21.1 KM
              </span>
            </div>
          </div>

          {/* Cinematic Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[450px] sm:h-[600px] lg:h-[720px] overflow-hidden bg-[#222222] shadow-xl group rounded-[2px]"
          >
            <Image
              src="https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/hero-swim-dawn.jpg"
              alt="Athlete swimming in open water at dawn during Ironman triathlon"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 flex flex-col md:flex-row md:items-end justify-between gap-6 text-[#F1ECE4]">
              <div className="max-w-xl space-y-2">
                <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#B59A63] block">
                  THE EDITORIAL ARCHIVE
                </span>
                <p className="font-sans text-base sm:text-lg text-[#F1ECE4]/90 leading-relaxed font-normal">
                  “Swim. Bike. Run. One continuous journey beyond the limits of ordinary.”
                </p>
              </div>

              <a
                href="#distance"
                className="inline-flex items-center gap-2 font-sans font-bold text-xs uppercase tracking-widest text-[#B59A63] hover:text-[#F1ECE4] transition-colors"
              >
                <span>SCROLL TO EXPLORE</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* ============================================================ */}
        {/* 03. THE DISTANCE (STATISTICS SECTION) */}
        {/* ============================================================ */}
        <section id="distance" className="w-full px-6 sm:px-12 md:px-20 py-16 md:py-24 border-y border-[#111111]/[0.082]">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-4">
              <h2 className="font-display font-black text-4xl sm:text-6xl text-[#111111] uppercase tracking-tight">
                THE IRONMAN DISTANCE
              </h2>
              <span className="font-sans text-xs uppercase tracking-widest text-[#777777]">
                TOTAL CUMULATIVE VOLUME // 113.0 KM (70.3 MILES)
              </span>
            </div>

            {/* Grid of Disciplines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[#111111]/[0.082]">
              {/* 01 SWIM */}
              <div className="flex flex-col gap-3 lg:pr-8">
                <div className="flex items-center justify-between">
                  <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#B59A63]">
                    01 // SWIM
                  </span>
                  <Droplets className="w-3.5 h-3.5 text-[#B59A63]" />
                </div>
                <div className="font-display font-black text-6xl sm:text-7xl lg:text-[80px] text-[#111111] leading-none">
                  1.9
                </div>
                <div className="flex items-baseline justify-between pt-1 border-t border-[#111111]/[0.08]">
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#111111]">
                    KILOMETERS
                  </span>
                  <span className="font-sans text-xs text-[#777777] uppercase font-medium">
                    1.2 MILES
                  </span>
                </div>
              </div>

              {/* 02 BIKE */}
              <div className="flex flex-col gap-3 lg:px-8">
                <div className="flex items-center justify-between">
                  <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#B59A63]">
                    02 // BIKE
                  </span>
                  <Wind className="w-3.5 h-3.5 text-[#B59A63]" />
                </div>
                <div className="font-display font-black text-6xl sm:text-7xl lg:text-[80px] text-[#111111] leading-none">
                  90
                </div>
                <div className="flex items-baseline justify-between pt-1 border-t border-[#111111]/[0.08]">
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#111111]">
                    KILOMETERS
                  </span>
                  <span className="font-sans text-xs text-[#777777] uppercase font-medium">
                    56.0 MILES
                  </span>
                </div>
              </div>

              {/* 03 RUN */}
              <div className="flex flex-col gap-3 lg:px-8">
                <div className="flex items-center justify-between">
                  <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#B59A63]">
                    03 // RUN
                  </span>
                  <Flame className="w-3.5 h-3.5 text-[#B59A63]" />
                </div>
                <div className="font-display font-black text-6xl sm:text-7xl lg:text-[80px] text-[#111111] leading-none">
                  21.1
                </div>
                <div className="flex items-baseline justify-between pt-1 border-t border-[#111111]/[0.08]">
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#111111]">
                    KILOMETERS
                  </span>
                  <span className="font-sans text-xs text-[#777777] uppercase font-medium">
                    13.1 MILES
                  </span>
                </div>
              </div>

              {/* TOTAL */}
              <div className="flex flex-col gap-3 lg:pl-8 bg-[#EAE4D7] p-6 lg:p-4 rounded-[2px]">
                <div className="flex items-center justify-between">
                  <span className="font-sans font-black text-xs uppercase tracking-widest text-[#111111]">
                    TOTAL // ONE DAY
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-[#B59A63]" />
                </div>
                <div className="font-display font-black text-6xl sm:text-7xl lg:text-[80px] text-[#B59A63] leading-none">
                  113.0
                </div>
                <div className="flex items-baseline justify-between pt-1 border-t border-[#111111]/[0.1]">
                  <span className="font-sans font-black text-xs tracking-wider text-[#111111]">
                    TOTAL KM
                  </span>
                  <span className="font-sans text-xs text-[#111111] uppercase font-bold">
                    70.3 MILES
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 04. THE JOURNEY (EDITORIAL INTRO) */}
        {/* ============================================================ */}
        <section className="w-full px-6 sm:px-12 md:px-20 py-20 md:py-28 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20">
          <div className="space-y-3 max-w-md">
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#B59A63]">
              THE ARCHIVE MANIFESTO
            </span>
            <h2 className="font-display font-black text-5xl sm:text-6xl text-[#111111] uppercase tracking-tight leading-[90%]">
              THE JOURNEY
            </h2>
          </div>

          <div className="max-w-2xl space-y-6">
            <p className="font-sans text-lg sm:text-xl text-[#111111] leading-relaxed font-normal">
              “Every stage demands a different kind of preparation. Every transition changes the body. The equipment changes. The objective remains the same: keep moving.”
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2 font-sans font-bold text-xs uppercase tracking-widest text-[#777777]">
              <span className="text-[#111111]">01 — SWIM (1.9 KM)</span>
              <span>→</span>
              <span className="text-[#111111]">02 — BIKE (90 KM)</span>
              <span>→</span>
              <span className="text-[#111111]">03 — RUN (21.1 KM)</span>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 05. 01 SWIM SECTION */}
        {/* ============================================================ */}
        <section id="swim" className="w-full px-6 sm:px-12 md:px-20 py-16 md:py-24 border-t border-[#111111]/[0.082]">
          <div className="flex flex-col gap-12">
            {/* Header + Editorial Visual */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-1">
                  <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#B59A63]">
                    DISCIPLINE 01 // 1.9 KM / 1.2 MILES
                  </span>
                  <h2 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-[#111111] uppercase tracking-tight leading-none">
                    01 SWIM
                  </h2>
                </div>
                <p className="font-sans text-base text-[#444444] leading-relaxed">
                  The first discipline begins in open water. Efficiency, endurance and control define every stroke across the 1.9 km swim.
                </p>
                <div className="pt-2">
                  <a
                    href="#equipment"
                    onClick={() => setSelectedDiscipline("SWIM")}
                    className="inline-flex items-center gap-2 font-sans font-bold text-xs uppercase tracking-widest text-[#111111] hover:text-[#B59A63] border-b border-[#111111] pb-1 transition-colors"
                  >
                    <span>VIEW ALL SWIM EQUIPMENT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 relative h-[380px] sm:h-[480px] overflow-hidden rounded-[2px] bg-[#222222] shadow-md">
                <Image
                  src="https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/stage-swim.jpg"
                  alt="Open water swimmer stroke form in ocean dawn"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-[#F1ECE4]">
                  <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-[#B59A63] block">
                    STAGE 01 TELEMETRY // 1.9 KM
                  </span>
                  <span className="font-display font-black text-xl uppercase">
                    PACING & WATER DYNAMICS
                  </span>
                </div>
              </div>
            </div>

            {/* Swim Equipment Showcase */}
            <div className="space-y-6 pt-6">
              <div className="flex items-baseline justify-between border-b border-[#111111]/[0.082] pb-3">
                <span className="font-display font-black text-2xl text-[#111111] uppercase tracking-tight">
                  EQUIPMENT // SWIM
                </span>
                <span className="font-sans text-xs uppercase text-[#777777] font-semibold">
                  {swimProducts.length} PRODUCTS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {swimProducts.map((product) => (
                  <IronmanProductCard
                    key={product.id}
                    product={product}
                    onOpenModal={handleOpenProductModal}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 06. TRANSITION 01 (T1) */}
        {/* ============================================================ */}
        <section id="transitions" className="w-full bg-[#111111] text-[#F1ECE4] px-6 sm:px-12 md:px-20 py-16 md:py-24 my-6">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#B59A63] text-[#111111] font-display font-black text-sm uppercase tracking-widest">
                  T1 TRANSITION
                </span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#F1ECE4]/60">
                  WATER → ROAD
                </span>
              </div>
              <h3 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight leading-none text-[#F1ECE4]">
                FROM WATER TO ROAD.
              </h3>
              <p className="font-sans text-sm text-[#F1ECE4]/70 max-w-lg leading-relaxed">
                “From water to road. The rhythm changes. Body temperature shifts, heart rate spikes, aerodynamics take over.”
              </p>
            </div>

            <div className="border border-[#F1ECE4]/20 p-6 rounded-[2px] bg-white/[0.03] max-w-sm w-full space-y-3">
              <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-[#B59A63] block">
                T1 PROTOCOL
              </span>
              <ul className="space-y-1.5 font-sans text-xs text-[#F1ECE4]/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B59A63]" />
                  <span>Wetsuit release & hydration rinse</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B59A63]" />
                  <span>Helmet & eyewear aerodynamic lockdown</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B59A63]" />
                  <span>Mount bike in 90-120 seconds target</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 07. 02 BIKE SECTION */}
        {/* ============================================================ */}
        <section id="bike" className="w-full px-6 sm:px-12 md:px-20 py-16 md:py-24 border-t border-[#111111]/[0.082]">
          <div className="flex flex-col gap-12">
            {/* Header + Editorial Visual */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-7 relative h-[380px] sm:h-[480px] overflow-hidden rounded-[2px] bg-[#222222] shadow-md order-2 lg:order-1">
                <Image
                  src="https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/bike.jpg"
                  alt="Aerodynamic time trial cyclist on open road"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-[#F1ECE4]">
                  <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-[#B59A63] block">
                    STAGE 02 // 90 KM
                  </span>
                  <span className="font-display font-black text-xl uppercase">
                    AERO EFFICIENCY & CADENCE
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
                <div className="space-y-1">
                  <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#B59A63]">
                    DISCIPLINE 02 // 90 KM / 56.0 MILES
                  </span>
                  <h2 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-[#111111] uppercase tracking-tight leading-none">
                    02 BIKE
                  </h2>
                </div>
                <p className="font-sans text-base text-[#444444] leading-relaxed">
                  The longest stage of the journey. Position, endurance and consistency become everything over 90 kilometers of open asphalt.
                </p>
                <div className="pt-2">
                  <a
                    href="#equipment"
                    onClick={() => setSelectedDiscipline("BIKE")}
                    className="inline-flex items-center gap-2 font-sans font-bold text-xs uppercase tracking-widest text-[#111111] hover:text-[#B59A63] border-b border-[#111111] pb-1 transition-colors"
                  >
                    <span>VIEW ALL BIKE EQUIPMENT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bike Equipment Showcase */}
            <div className="space-y-6 pt-6">
              <div className="flex items-baseline justify-between border-b border-[#111111]/[0.082] pb-3">
                <span className="font-display font-black text-2xl text-[#111111] uppercase tracking-tight">
                  EQUIPMENT // BIKE
                </span>
                <span className="font-sans text-xs uppercase text-[#777777] font-semibold">
                  {bikeProducts.length} PRODUCTS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {bikeProducts.map((product) => (
                  <IronmanProductCard
                    key={product.id}
                    product={product}
                    onOpenModal={handleOpenProductModal}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 08. TRANSITION 02 (T2) */}
        {/* ============================================================ */}
        <section className="w-full bg-[#111111] text-[#F1ECE4] px-6 sm:px-12 md:px-20 py-16 md:py-24 my-6">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#B59A63] text-[#111111] font-display font-black text-sm uppercase tracking-widest">
                  T2 TRANSITION
                </span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#F1ECE4]/60">
                  BIKE → RUN
                </span>
              </div>
              <h3 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight leading-none text-[#F1ECE4]">
                TWO DOWN. ONE REMAINS.
              </h3>
              <p className="font-sans text-sm text-[#F1ECE4]/70 max-w-lg leading-relaxed">
                “Two disciplines down. One remains. The legs must remember how to stride as muscular fatigue sets in for the final 21.1 kilometers.”
              </p>
            </div>

            <div className="border border-[#F1ECE4]/20 p-6 rounded-[2px] bg-white/[0.03] max-w-sm w-full space-y-3">
              <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-[#B59A63] block">
                T2 PROTOCOL
              </span>
              <ul className="space-y-1.5 font-sans text-xs text-[#F1ECE4]/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B59A63]" />
                  <span>Rack bicycle & helmet drop</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B59A63]" />
                  <span>Footwear switch & race belt attachment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B59A63]" />
                  <span>Immediate electrolyte & carbohydrate load</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 09. 03 RUN SECTION */}
        {/* ============================================================ */}
        <section id="run" className="w-full px-6 sm:px-12 md:px-20 py-16 md:py-24 border-t border-[#111111]/[0.082]">
          <div className="flex flex-col gap-12">
            {/* Header + Editorial Visual */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-1">
                  <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#B59A63]">
                    DISCIPLINE 03 // 21.1 KM / 13.1 MILES
                  </span>
                  <h2 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-[#111111] uppercase tracking-tight leading-none">
                    03 RUN
                  </h2>
                </div>
                <p className="font-sans text-base text-[#444444] leading-relaxed">
                  The final discipline. Fatigue becomes part of the distance. Every stride moves the finish line closer through the heat of the afternoon.
                </p>
                <div className="pt-2">
                  <a
                    href="#equipment"
                    onClick={() => setSelectedDiscipline("RUN")}
                    className="inline-flex items-center gap-2 font-sans font-bold text-xs uppercase tracking-widest text-[#111111] hover:text-[#B59A63] border-b border-[#111111] pb-1 transition-colors"
                  >
                    <span>VIEW ALL RUN EQUIPMENT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 relative h-[380px] sm:h-[480px] overflow-hidden rounded-[2px] bg-[#222222] shadow-md">
                <Image
                  src="https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/stage-run.jpg"
                  alt="Marathon runner pacing in late afternoon race"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-[#F1ECE4]">
                  <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-[#B59A63] block">
                    STAGE 03 // 21.1 KM RUN
                  </span>
                  <span className="font-display font-black text-xl uppercase">
                    THERMAL MANAGEMENT & MILEAGE
                  </span>
                </div>
              </div>
            </div>

            {/* Run Equipment Showcase */}
            <div className="space-y-6 pt-6">
              <div className="flex items-baseline justify-between border-b border-[#111111]/[0.082] pb-3">
                <span className="font-display font-black text-2xl text-[#111111] uppercase tracking-tight">
                  EQUIPMENT // RUN
                </span>
                <span className="font-sans text-xs uppercase text-[#777777] font-semibold">
                  {runProducts.length} PRODUCTS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {runProducts.map((product) => (
                  <IronmanProductCard
                    key={product.id}
                    product={product}
                    onOpenModal={handleOpenProductModal}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 10. THE KIT (CURATED EQUIPMENT BUNDLES & COMBOS) */}
        {/* ============================================================ */}
        <section id="kits" className="w-full px-6 sm:px-12 md:px-20 py-20 md:py-28 border-t border-[#111111]/[0.082]">
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 border-b border-[#111111]/[0.082] pb-6">
              <div className="space-y-2">
                <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#B59A63]">
                  CURATED DISCIPLINE SYSTEMS // BUNDLES
                </span>
                <h2 className="font-display font-black text-5xl sm:text-6xl text-[#111111] uppercase tracking-tight">
                  THE IRONMAN COMBOS
                </h2>
              </div>
              <p className="font-sans text-sm text-[#555555] max-w-md">
                Complete pre-configured bundles with every official product included for each respective leg of the 113 km triathlon journey.
              </p>
            </div>

            {/* 3 Interactive Combo Kit Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {comboKits.map((combo) => (
                <ComboKitCard
                  key={combo.id}
                  combo={combo}
                  onOpenProductModal={handleOpenProductModal}
                  onAddComboToCart={handleAddComboToCart}
                  onFilterDiscipline={(disc) => {
                    setSelectedDiscipline(disc);
                    const el = document.getElementById("equipment");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 11. COMPLETE 113 KM SYSTEM (ALL 12 FLAGSHIP PRODUCTS COMBO) */}
        {/* ============================================================ */}
        <section id="complete-kit" className="w-full px-6 sm:px-12 md:px-20 py-20 md:py-28 bg-[#111111] text-[#F1ECE4]">
          <div className="max-w-[1280px] mx-auto space-y-14">
            {/* Header & Main Callout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-white/10 pb-12">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-[#B59A63] text-[#111111] font-display font-black text-xs uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    FLAGSHIP SYSTEM // 12-PIECE COMBO
                  </span>
                  <span className="font-sans text-xs uppercase tracking-widest text-[#B59A63]">
                    SAVE ₹11,010 BUNDLE DISCOUNT
                  </span>
                </div>
                <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter leading-none text-[#F1ECE4]">
                  THE COMPLETE 113 KM SYSTEM
                </h2>
                <p className="font-sans text-base text-[#F1ECE4]/80 leading-relaxed max-w-xl font-normal">
                  “One journey. Three disciplines. Every piece of equipment engineered to sustain maximum human output from sunrise in open water to midnight across the finish line.”
                </p>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display font-black text-4xl sm:text-5xl text-[#B59A63]">
                      ₹48,990
                    </span>
                    <span className="font-sans text-lg line-through text-white/40 font-medium">
                      ₹60,000
                    </span>
                  </div>
                  <span className="font-sans text-xs uppercase tracking-widest text-[#F1ECE4]/70 bg-white/5 px-3 py-1.5 border border-white/10 rounded-[1px]">
                    12 PIECES INCLUDED · FREE RACE EXPRESS COURIER
                  </span>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleAddComboToCart(complete12PieceCombo.name, complete12PieceCombo.products)}
                    className="px-8 py-4 bg-[#B59A63] hover:bg-[#F1ECE4] text-[#111111] font-sans font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-2xl cursor-pointer active:scale-98"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD COMPLETE 12-PIECE COMBO TO BAG</span>
                  </button>
                  <a
                    href="#equipment"
                    className="px-6 py-4 border border-white/20 hover:border-[#B59A63] text-[#F1ECE4] hover:text-[#B59A63] font-sans font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-1.5"
                  >
                    <span>VIEW INDIVIDUAL CATALOG</span>
                    <ArrowDown className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-[380px] sm:h-[460px] overflow-hidden rounded-[2px] border border-white/10 bg-[#1a1a1a] shadow-2xl">
                <Image
                  src="https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/Beyond/Ironman/complete-kit.jpg"
                  alt="Complete Beyond Ironman System layout"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] uppercase font-sans tracking-widest text-[#F1ECE4]/90">
                  <span className="font-bold text-[#B59A63]">LIMITED 2026 RACE EDITION</span>
                  <span>ITU / WTC VERIFIED</span>
                </div>
              </div>
            </div>

            {/* 12 Products Included in Complete Combo Grid */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2">
                <span className="font-display font-black text-2xl uppercase tracking-tight text-[#F1ECE4]">
                  ALL 12 PRODUCTS INCLUDED IN THIS COMBO
                </span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#B59A63] font-bold">
                  CLICK ANY ITEM TO VIEW SPECIFICATIONS & MULTI-ANGLE SHOTS
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {complete12PieceCombo.products.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => handleOpenProductModal(item)}
                    className="group flex flex-col justify-between bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#B59A63] p-3 rounded-[2px] cursor-pointer transition-all duration-200"
                  >
                    <div className="space-y-2.5">
                      <div className="relative w-full aspect-square overflow-hidden bg-[#111111] rounded-[1px]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="200px"
                          className="object-cover object-center group-hover:scale-106 transition-transform duration-500"
                        />
                        <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-black/80 text-[8px] font-sans font-bold uppercase tracking-wider text-[#B59A63]">
                          {item.discipline}
                        </span>
                      </div>
                      <div className="space-y-0.5">
                        <span className="font-sans text-[9px] uppercase tracking-wider text-white/50 block truncate">
                          0{idx + 1} {"//"} {item.subcategory.split("//")[1]?.trim() || item.category}
                        </span>
                        <h4 className="font-sans font-bold text-xs text-[#F1ECE4] uppercase group-hover:text-[#B59A63] transition-colors line-clamp-2 leading-snug">
                          {item.name}
                        </h4>
                      </div>
                    </div>
                    <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between">
                      <span className="font-sans text-[11px] font-black text-[#B59A63]">
                        {item.currency}{item.price.toLocaleString()}
                      </span>
                      <span className="font-sans text-[9px] uppercase font-bold text-white/60 group-hover:text-white transition-colors">
                        VIEW →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 12. SHOP BY DISCIPLINE (TYPOGRAPHIC NAVIGATION) */}
        {/* ============================================================ */}
        <section className="w-full px-6 sm:px-12 md:px-20 py-16 md:py-24 border-b border-[#111111]/[0.082]">
          <div className="space-y-8">
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#B59A63]">
              FAST NAVIGATION // STAGE FILTER
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "SWIM", desc: "Open Water Suits, Goggles, Caps & Buoys", filter: "SWIM" },
                { name: "BIKE", desc: "Aero Jerseys, Bib Shorts, Eyewear & Bento Bags", filter: "BIKE" },
                { name: "RUN", desc: "Performance Tees, Singlets, Caps & Flasks", filter: "RUN" },
                { name: "TRANSITION", desc: "45L Transition Duffles & Rapid Bags", filter: "TRANSITION" },
                { name: "RECOVERY", desc: "500 GSM Heavyweight Hoodies & Tights", filter: "RECOVERY" },
                { name: "ALL 24 EQUIPMENT", desc: "Explore entire Beyond Ironman catalog", filter: "ALL" },
              ].map((item) => (
                <a
                  key={item.name}
                  href="#equipment"
                  onClick={() => setSelectedDiscipline(item.filter)}
                  className="group flex flex-col justify-between p-6 border border-[#111111]/[0.082] hover:border-[#111111] bg-[#F5F0EA] transition-all duration-200"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-black text-3xl sm:text-4xl text-[#111111] group-hover:text-[#B59A63] transition-colors uppercase tracking-tight">
                        {item.name}
                      </span>
                      <ArrowRight className="w-5 h-5 text-[#111111] group-hover:translate-x-1.5 group-hover:text-[#B59A63] transition-all" />
                    </div>
                    <p className="font-sans text-xs text-[#555555] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 13 & 14. THE EQUIPMENT CATALOG (WITH SEARCH & FILTERS) */}
        {/* ============================================================ */}
        <section id="equipment" className="w-full px-6 sm:px-12 md:px-20 pt-16 md:pt-24 pb-28">
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 border-b border-[#111111]/[0.082] pb-6">
              <div className="space-y-2">
                <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#B59A63]">
                  CATALOG SPECIFICATIONS
                </span>
                <h2 className="font-display font-black text-5xl sm:text-6xl text-[#111111] uppercase tracking-tight">
                  THE EQUIPMENT
                </h2>
              </div>
              <span className="font-sans text-xs uppercase tracking-widest text-[#777777] font-semibold">
                DISPLAYING {filteredProducts.length} PRODUCTS
              </span>
            </div>

            {/* Search Input Bar */}
            <div className="w-full border-b border-[#111111] pb-3 flex flex-row items-center gap-3">
              <Search className="w-4 h-4 text-[#111111] shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="SEARCH EQUIPMENT BY NAME, DISCIPLINE, ATTRIBUTE..."
                className="w-full bg-transparent font-sans font-medium text-xs uppercase tracking-wider text-[#111111] placeholder-[#777777] focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-[#444444] hover:text-[#111111] text-xs font-bold uppercase cursor-pointer"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* Filter Controls Row */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex flex-wrap items-center justify-between gap-4 relative z-30 pt-2"
            >
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <span className="font-sans font-bold text-[11px] uppercase tracking-wider text-[#111111]">
                  FILTERS //
                </span>

                {/* 1. Discipline */}
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDisciplineDropdown(!openDisciplineDropdown);
                    }}
                    className={`flex items-center gap-1 font-sans font-bold text-[11px] uppercase transition-colors cursor-pointer ${
                      selectedDiscipline !== "ALL" ? "text-[#B59A63]" : "text-[#111111] hover:text-[#B59A63]"
                    }`}
                  >
                    <span>DISCIPLINE {selectedDiscipline !== "ALL" ? `(${selectedDiscipline})` : ""}</span>
                    <ChevronDown className="w-2.5 h-2.5" />
                  </button>

                  <AnimatePresence>
                    {openDisciplineDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute top-full left-0 mt-2 w-[180px] bg-white border border-[#111111]/[0.1] shadow-2xl p-3 flex flex-col gap-2 z-40"
                      >
                        {["ALL", "SWIM", "BIKE", "RUN", "TRANSITION", "RECOVERY"].map((d) => (
                          <button
                            key={d}
                            onClick={() => {
                              setSelectedDiscipline(d);
                              setOpenDisciplineDropdown(false);
                            }}
                            className={`font-sans text-[11px] uppercase text-left py-1 px-1.5 hover:bg-[#F5F0EA] ${
                              selectedDiscipline === d ? "font-bold text-[#111111] bg-[#F1ECE4]" : "font-medium text-[#444444]"
                            }`}
                          >
                            {d === "ALL" ? "ALL DISCIPLINES" : d}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 2. Product Type */}
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenProductDropdown(!openProductDropdown);
                    }}
                    className={`flex items-center gap-1 font-sans font-bold text-[11px] uppercase transition-colors cursor-pointer ${
                      selectedProductType !== "ALL" ? "text-[#B59A63]" : "text-[#111111] hover:text-[#B59A63]"
                    }`}
                  >
                    <span>PRODUCT {selectedProductType !== "ALL" ? `(${selectedProductType})` : ""}</span>
                    <ChevronDown className="w-2.5 h-2.5" />
                  </button>

                  <AnimatePresence>
                    {openProductDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute top-full left-0 mt-2 w-[180px] bg-white border border-[#111111]/[0.1] shadow-2xl p-3 flex flex-col gap-2 z-40"
                      >
                        {["ALL", "APPAREL", "ACCESSORIES", "EQUIPMENT", "BAGS"].map((t) => (
                          <button
                            key={t}
                            onClick={() => {
                              setSelectedProductType(t);
                              setOpenProductDropdown(false);
                            }}
                            className={`font-sans text-[11px] uppercase text-left py-1 px-1.5 hover:bg-[#F5F0EA] ${
                              selectedProductType === t ? "font-bold text-[#111111] bg-[#F1ECE4]" : "font-medium text-[#444444]"
                            }`}
                          >
                            {t === "ALL" ? "ALL PRODUCTS" : t}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 3. Gender */}
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenGenderDropdown(!openGenderDropdown);
                    }}
                    className={`flex items-center gap-1 font-sans font-bold text-[11px] uppercase transition-colors cursor-pointer ${
                      selectedGender !== "ALL" ? "text-[#B59A63]" : "text-[#111111] hover:text-[#B59A63]"
                    }`}
                  >
                    <span>GENDER {selectedGender !== "ALL" ? `(${selectedGender})` : ""}</span>
                    <ChevronDown className="w-2.5 h-2.5" />
                  </button>

                  <AnimatePresence>
                    {openGenderDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute top-full left-0 mt-2 w-[170px] bg-white border border-[#111111]/[0.1] shadow-2xl p-3 flex flex-col gap-2 z-40"
                      >
                        {["ALL", "MEN", "WOMEN", "UNISEX"].map((g) => (
                          <button
                            key={g}
                            onClick={() => {
                              setSelectedGender(g);
                              setOpenGenderDropdown(false);
                            }}
                            className={`font-sans text-[11px] uppercase text-left py-1 px-1.5 hover:bg-[#F5F0EA] ${
                              selectedGender === g ? "font-bold text-[#111111] bg-[#F1ECE4]" : "font-medium text-[#444444]"
                            }`}
                          >
                            {g === "ALL" ? "ALL GENDERS" : g}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 4. Price */}
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenPriceDropdown(!openPriceDropdown);
                    }}
                    className={`flex items-center gap-1 font-sans font-bold text-[11px] uppercase transition-colors cursor-pointer ${
                      selectedPrice !== "ALL" ? "text-[#B59A63]" : "text-[#111111] hover:text-[#B59A63]"
                    }`}
                  >
                    <span>PRICE {selectedPrice !== "ALL" ? "(FILTERED)" : ""}</span>
                    <ChevronDown className="w-2.5 h-2.5" />
                  </button>

                  <AnimatePresence>
                    {openPriceDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute top-full left-0 mt-2 w-[190px] bg-white border border-[#111111]/[0.1] shadow-2xl p-3 flex flex-col gap-2 z-40"
                      >
                        {[
                          { id: "ALL", label: "ALL PRICES" },
                          { id: "UNDER_1000", label: "UNDER ₹1,000" },
                          { id: "1000_2500", label: "₹1,000 – ₹2,500" },
                          { id: "2500_5000", label: "₹2,500 – ₹5,000" },
                          { id: "OVER_5000", label: "₹5,000+" },
                        ].map((p) => (
                          <button
                            key={p.id}
                            onClick={() => {
                              setSelectedPrice(p.id);
                              setOpenPriceDropdown(false);
                            }}
                            className={`font-sans text-[11px] uppercase text-left py-1 px-1.5 hover:bg-[#F5F0EA] ${
                              selectedPrice === p.id ? "font-bold text-[#111111] bg-[#F1ECE4]" : "font-medium text-[#444444]"
                            }`}
                          >
                            {p.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Sort By */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenSortDropdown(!openSortDropdown);
                  }}
                  className="flex items-center gap-1 font-sans font-bold text-[11px] uppercase text-[#111111] hover:text-[#B59A63] transition-colors cursor-pointer"
                >
                  <span className="text-[#666666]">SORT BY //</span>
                  <span>{selectedSort}</span>
                  <ChevronDown className="w-2.5 h-2.5" />
                </button>

                <AnimatePresence>
                  {openSortDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute top-full right-0 mt-2 w-[210px] bg-white border border-[#111111]/[0.1] shadow-2xl p-3 flex flex-col gap-2 z-40"
                    >
                      {["FEATURED", "NEWEST", "PRICE: LOW TO HIGH", "PRICE: HIGH TO LOW"].map((s) => (
                        <button
                          key={s}
                          onClick={() => {
                            setSelectedSort(s);
                            setOpenSortDropdown(false);
                          }}
                          className={`font-sans text-[11px] uppercase text-left py-1 px-1.5 hover:bg-[#F5F0EA] ${
                            selectedSort === s ? "font-bold text-[#111111] bg-[#F1ECE4]" : "font-medium text-[#444444]"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Active Chips */}
            {activeChips.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-1">
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

            {/* 3-Column Luxury Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-10 lg:gap-x-12 gap-y-14 sm:gap-y-16 lg:gap-y-20 pt-4">
                {filteredProducts.map((product) => (
                  <IronmanProductCard
                    key={product.id}
                    product={product}
                    onOpenModal={handleOpenProductModal}
                  />
                ))}
              </div>
            ) : (
              <div className="w-full py-20 flex flex-col items-center justify-center text-center gap-4">
                <span className="font-display font-black text-4xl text-[#111111] uppercase tracking-tight">
                  NO EQUIPMENT FOUND
                </span>
                <p className="font-sans text-sm text-[#777777]">
                  Try modifying your stage, category, or search filters.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="mt-2 px-6 py-2.5 bg-[#111111] text-[#F1ECE4] font-sans font-bold text-xs uppercase tracking-widest hover:bg-[#B59A63] transition-colors cursor-pointer"
                >
                  RESET FILTERS
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 15. PERFORMANCE / PREPARATION (BEFORE THE START) */}
        {/* ============================================================ */}
        <section id="prep" className="w-full px-6 sm:px-12 md:px-20 py-20 md:py-28 border-t border-[#111111]/[0.082] bg-[#EAE4D7]">
          <div className="space-y-12">
            <div className="space-y-2 text-center max-w-xl mx-auto">
              <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#B59A63]">
                METHODOLOGY & PHYSIOLOGY
              </span>
              <h2 className="font-display font-black text-4xl sm:text-6xl text-[#111111] uppercase tracking-tight">
                BEFORE THE START
              </h2>
              <p className="font-sans text-sm text-[#555555]">
                The four continuous phases of ultra-distance performance architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "TRAIN", desc: "Progressive aerobic overload, lactate threshold calibration, and open-water sighting conditioning." },
                { step: "02", title: "PREPARE", desc: "T1/T2 simulation, aero position testing, heat chamber adaptation, and race-day fuel mapping." },
                { step: "03", title: "PERFORM", desc: "Sub-threshold power pacing, cadence consistency, electrolyte hydration rhythm, and mental focus." },
                { step: "04", title: "RECOVER", desc: "Graduated venous compression, post-finish thermal regulation, anti-inflammatory nutrition, and rest." },
              ].map((phase) => (
                <div key={phase.title} className="p-6 bg-[#F1ECE4] border border-[#111111]/[0.08] flex flex-col justify-between gap-6 rounded-[2px]">
                  <div className="space-y-3">
                    <span className="font-display font-black text-3xl text-[#B59A63]">
                      {phase.step}
                    </span>
                    <h3 className="font-display font-black text-2xl text-[#111111] uppercase tracking-tight">
                      {phase.title}
                    </h3>
                    <p className="font-sans text-xs text-[#555555] leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                  <span className="font-sans font-bold text-[9px] uppercase tracking-widest text-[#111111]">
                    PROTOCOL VERIFIED →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 16. FINAL CTA (GO BEYOND) */}
        {/* ============================================================ */}
        <section className="relative w-full px-6 sm:px-12 md:px-20 py-24 md:py-36 bg-[#111111] text-[#F1ECE4] overflow-hidden">
          <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center space-y-8 relative z-10">
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#B59A63]">
              THE FINISH LINE IS JUST A MARKER
            </span>
            <h2 className="font-display font-black text-6xl sm:text-8xl lg:text-[110px] uppercase tracking-tighter leading-none text-[#F1ECE4]">
              GO BEYOND<span className="text-[#B59A63]">.</span>
            </h2>
            <p className="font-sans text-base sm:text-xl text-[#F1ECE4]/80 max-w-xl leading-relaxed">
              “Whatever the distance, the next step is yours.”
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#equipment"
                className="px-10 py-5 bg-[#B59A63] hover:bg-[#F1ECE4] text-[#111111] font-sans font-bold text-xs uppercase tracking-widest transition-all inline-flex items-center gap-3 shadow-2xl"
              >
                <span>EXPLORE ALL EQUIPMENT</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsChecklistOpen(true)}
                className="px-8 py-5 border border-[#F1ECE4]/30 hover:border-[#B59A63] text-[#F1ECE4] hover:text-[#B59A63] font-sans font-bold text-xs uppercase tracking-widest transition-all inline-flex items-center gap-2"
              >
                <ClipboardList className="w-4 h-4" />
                <span>VIEW IRONMAN GEAR CHECKLIST</span>
              </button>
            </div>
          </div>
        </section>

      </div>

      {/* ============================================================ */}
      {/* INTERACTIVE 140.6 GEAR CHECKLIST MODAL */}
      {/* ============================================================ */}
      <AnimatePresence>
        {isChecklistOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsChecklistOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />
            <div className="flex min-h-full items-center justify-center p-4 sm:p-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl bg-[#F1ECE4] border border-[#111111]/[0.1] shadow-2xl p-6 sm:p-10 z-50 text-[#111111] space-y-8 max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-start justify-between border-b border-[#111111]/[0.1] pb-6">
                  <div className="space-y-1">
                    <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-[#B59A63]">
                      OFFICIAL TRIATHLON RACE PROTOCOL
                    </span>
                    <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#111111]">
                      IRONMAN CHALLENGE EQUIPMENT CHECKLIST (113 KM)
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsChecklistOpen(false)}
                    className="p-2 text-[#111111] hover:text-[#B59A63] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Checklist Stages */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* SWIM */}
                  <div className="space-y-3 bg-[#EAE4D7] p-5 rounded-[2px]">
                    <div className="flex items-center justify-between border-b border-[#111111]/[0.1] pb-2">
                      <span className="font-display font-black text-lg text-[#111111] uppercase">01 // SWIM (1.9 KM)</span>
                      <Droplets className="w-4 h-4 text-[#B59A63]" />
                    </div>
                    <ul className="space-y-2 text-xs font-sans text-[#444444]">
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B59A63] shrink-0 mt-0.5" />
                        <span>Performance Tri Suit (Speedsuit)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B59A63] shrink-0 mt-0.5" />
                        <span>Polarized Open Water Sighting Goggles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B59A63] shrink-0 mt-0.5" />
                        <span>3D Silicone Competition Swim Cap</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B59A63] shrink-0 mt-0.5" />
                        <span>Multi-GNSS 100M Water GPS Telemetry Watch</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B59A63] shrink-0 mt-0.5" />
                        <span>20L Safety Tow Float & Dry Compartment</span>
                      </li>
                    </ul>
                  </div>

                  {/* BIKE */}
                  <div className="space-y-3 bg-[#EAE4D7] p-5 rounded-[2px]">
                    <div className="flex items-center justify-between border-b border-[#111111]/[0.1] pb-2">
                      <span className="font-display font-black text-lg text-[#111111] uppercase">02 // BIKE (90 KM)</span>
                      <Wind className="w-4 h-4 text-[#B59A63]" />
                    </div>
                    <ul className="space-y-2 text-xs font-sans text-[#444444]">
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B59A63] shrink-0 mt-0.5" />
                        <span>Aero Race Jersey (3-Pocket Fuel Load)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B59A63] shrink-0 mt-0.5" />
                        <span>8-Hour Dual-Density Chamois Bib Short</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B59A63] shrink-0 mt-0.5" />
                        <span>85g Windproof Packable Aero Gilet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B59A63] shrink-0 mt-0.5" />
                        <span>Aerobar Short-Finger Gel Gloves</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B59A63] shrink-0 mt-0.5" />
                        <span>Frameless Polarized Shield Eyewear</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B59A63] shrink-0 mt-0.5" />
                        <span>Dual 750ml JetValve Hydration Flasks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B59A63] shrink-0 mt-0.5" />
                        <span>Top-Tube Bento Gel & Nutrition Pouch</span>
                      </li>
                    </ul>
                  </div>

                  {/* RUN */}
                  <div className="space-y-3 bg-[#EAE4D7] p-5 rounded-[2px]">
                    <div className="flex items-center justify-between border-b border-[#111111]/[0.1] pb-2">
                      <span className="font-display font-black text-lg text-[#111111] uppercase">03 // RUN (21.1 KM)</span>
                      <Flame className="w-4 h-4 text-[#B59A63]" />
                    </div>
                    <ul className="space-y-2 text-xs font-sans text-[#444444]">
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B59A63] shrink-0 mt-0.5" />
                        <span>Featherlight 95g Race Tee or Singlet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B59A63] shrink-0 mt-0.5" />
                        <span>2-in-1 Compression Liner Marathon Shorts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B59A63] shrink-0 mt-0.5" />
                        <span>Laser-Perforated Ripstop Running Cap</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B59A63] shrink-0 mt-0.5" />
                        <span>Anti-Blister Metatarsal Padded Run Socks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B59A63] shrink-0 mt-0.5" />
                        <span>360° Zero-Bounce Waistband with Bib Toggles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B59A63] shrink-0 mt-0.5" />
                        <span>500ml Collapsible Ergonomic Soft Flask</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B59A63] shrink-0 mt-0.5" />
                        <span>500 GSM French Terry Recovery Hoodie</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#111111]/[0.1]">
                  <span className="font-sans text-xs text-[#777777]">
                    ALL 24 OFFICIAL BEYOND PRODUCTS MEET ITU AND WTC SPECIFICATIONS.
                  </span>
                  <button
                    onClick={() => {
                      setIsChecklistOpen(false);
                      const el = document.getElementById("equipment");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-6 py-3 bg-[#111111] hover:bg-[#B59A63] text-[#F1ECE4] hover:text-[#111111] font-sans font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    SHOP CHECKLIST PRODUCTS
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* 17. FOOTER */}
      <Footer />

      {/* Global Modals & Drawers */}
      <CartDrawer />
      <ProductModal />
    </main>
  );
}
