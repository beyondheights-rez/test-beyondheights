"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/cart-context";
import { Menu, X, ShoppingBag, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MegaMenu } from "@/components/mega-menu";

export function Header() {
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Check if scrolled down from very top
          if (currentScrollY <= 20) {
            setIsScrolled(false);
            setIsVisible(true);
          } else {
            setIsScrolled(true);

            // Keep navbar visible if mobile drawer or mega menu is open
            if (mobileMenuOpen || megaMenuOpen) {
              setIsVisible(true);
            } else {
              const diff = currentScrollY - lastScrollY.current;
              // Scrolling down
              if (diff > 8) {
                setIsVisible(false);
                setMegaMenuOpen(false);
              }
              // Scrolling up (back scroll)
              else if (diff < -6) {
                setIsVisible(true);
              }
            }
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen, megaMenuOpen]);

  const isShopActive = pathname === "/shop";
  const isCollectionsActive = pathname === "/collections";

  return (
    <>
      <header
        onMouseLeave={() => setMegaMenuOpen(false)}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-transform duration-300 ease-in-out border-b border-[#111111]/[0.082] ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-[#F1ECE4]/95 backdrop-blur-md shadow-xs py-3.5 sm:py-4"
            : "bg-[#F1ECE4] py-6 sm:py-7"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 flex flex-row justify-between items-center h-[38px] relative">
          {/* Brand Logo */}
          <Link
            href="/"
            onMouseEnter={() => setMegaMenuOpen(false)}
            className="group flex items-center tracking-tight"
            aria-label="Beyond Home"
          >
            <span className="font-display font-black text-[32px] leading-[38px] text-[#111111] transition-transform duration-200 group-hover:scale-105">
              BEYOND<span className="text-[#B59A63]">.</span>
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex flex-row items-center gap-10">
            <Link
              href="/shop"
              onMouseEnter={() => setMegaMenuOpen(false)}
              className={`font-sans font-bold text-[11px] leading-[14px] uppercase tracking-[0.08em] transition-colors duration-150 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#B59A63] after:transition-all after:duration-200 ${
                isShopActive
                  ? "text-[#B59A63] after:w-full"
                  : "text-[#111111] hover:text-[#B59A63] after:w-0 hover:after:w-full"
              }`}
            >
              SHOP
            </Link>

            {/* COLLECTIONS Nav Item with Dropdown Trigger */}
            <div
              onMouseEnter={() => setMegaMenuOpen(true)}
              className="relative py-1 flex items-center gap-1 group/collections cursor-pointer"
            >
              {/* Clicking text takes directly to /collections page */}
              <Link
                href="/collections"
                onClick={() => setMegaMenuOpen(false)}
                className={`font-sans font-bold text-[11px] leading-[14px] uppercase tracking-[0.08em] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#B59A63] ${
                  isCollectionsActive
                    ? "text-[#B59A63] after:w-full"
                    : "text-[#111111] hover:text-[#B59A63] after:w-0 hover:after:w-full"
                }`}
              >
                COLLECTIONS
              </Link>

              {/* Hover or click chevron to toggle/display mega menu dropdown */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMegaMenuOpen(!megaMenuOpen);
                }}
                aria-label="Toggle collections mega menu"
                className="p-1 text-[#111111] hover:text-[#B59A63] transition-colors cursor-pointer flex items-center justify-center"
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    megaMenuOpen ? "rotate-180 text-[#B59A63]" : "text-[#111111]"
                  }`}
                />
              </button>
            </div>

            {/* IRONMAN Dedicated Experience */}
            <Link
              href="/ironman"
              onMouseEnter={() => setMegaMenuOpen(false)}
              className={`font-sans font-bold text-[11px] leading-[14px] uppercase tracking-[0.08em] transition-colors duration-150 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#B59A63] after:transition-all after:duration-200 flex items-center gap-1.5 ${
                pathname === "/ironman"
                  ? "text-[#B59A63] after:w-full"
                  : "text-[#111111] hover:text-[#B59A63] after:w-0 hover:after:w-full"
              }`}
            >
              <span>IRONMAN</span>
              <span className="text-[8px] px-1 py-0.2 bg-[#B59A63] text-[#111111] font-black rounded-[1px] tracking-tight">
                113 KM
              </span>
            </Link>

            <Link
              href="/#manifesto"
              onMouseEnter={() => setMegaMenuOpen(false)}
              className="font-sans font-bold text-[11px] leading-[14px] uppercase tracking-[0.08em] text-[#111111] hover:text-[#B59A63] transition-colors duration-150 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#B59A63] after:transition-all after:duration-200"
            >
              ABOUT
            </Link>

            {/* Bag Button with count */}
            <button
              onClick={openCart}
              onMouseEnter={() => setMegaMenuOpen(false)}
              className="group flex flex-row items-center gap-1 cursor-pointer font-sans font-bold text-[11px] leading-[14px] uppercase transition-transform active:scale-95 ml-2"
              aria-label="Open Shopping Bag"
            >
              <span className="text-[#111111] group-hover:text-[#B59A63] transition-colors flex items-center gap-1">
                <ShoppingBag className="w-3.5 h-3.5" />
                BAG
              </span>
              <span className="text-[#111111] font-bold">({totalItems})</span>
            </button>
          </nav>

          {/* Mobile Menu & Bag Action */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={openCart}
              className="flex items-center gap-1 font-sans font-bold text-xs uppercase text-[#B59A63]"
              aria-label="Open Bag"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>({totalItems})</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111111] hover:text-[#B59A63] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown (rendered WITHOUT header inside) */}
        <MegaMenu
          isOpen={megaMenuOpen}
          onClose={() => setMegaMenuOpen(false)}
          withoutHeader={true}
        />
      </header>

      {/* Spacer so page content starts cleanly below the fixed header */}
      <div className="w-full h-[86px] sm:h-[94px] shrink-0 pointer-events-none" aria-hidden="true" />

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 z-40 bg-[#F1ECE4] border-b border-[#111111]/[0.082] px-6 py-8 shadow-2xl md:hidden flex flex-col gap-6 ${
              isScrolled ? "top-[68px]" : "top-[88px]"
            }`}
          >
            <Link
              href="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="font-display font-black text-2xl text-[#111111] hover:text-[#B59A63] transition-colors flex items-center justify-between border-b border-[#111111]/[0.05] pb-3"
            >
              <span>SHOP</span>
              <ArrowUpRight className="w-5 h-5 text-[#B59A63]" />
            </Link>

            <Link
              href="/collections"
              onClick={() => setMobileMenuOpen(false)}
              className="font-display font-black text-2xl text-[#111111] hover:text-[#B59A63] transition-colors flex items-center justify-between border-b border-[#111111]/[0.05] pb-3"
            >
              <span>COLLECTIONS</span>
              <ArrowUpRight className="w-5 h-5 text-[#B59A63]" />
            </Link>

            <Link
              href="/ironman"
              onClick={() => setMobileMenuOpen(false)}
              className="font-display font-black text-2xl text-[#B59A63] hover:text-[#8F7643] transition-colors flex items-center justify-between border-b border-[#111111]/[0.05] pb-3"
            >
              <span className="flex items-center gap-2">
                IRONMAN <span className="text-xs bg-[#B59A63] text-[#111111] px-1.5 py-0.5 rounded-[1px] font-sans font-bold">113 KM</span>
              </span>
              <ArrowUpRight className="w-5 h-5 text-[#B59A63]" />
            </Link>

            <Link
              href="/#manifesto"
              onClick={() => setMobileMenuOpen(false)}
              className="font-display font-black text-2xl text-[#111111] hover:text-[#B59A63] transition-colors flex items-center justify-between border-b border-[#111111]/[0.05] pb-3"
            >
              <span>ABOUT</span>
              <ArrowUpRight className="w-5 h-5 text-[#B59A63]" />
            </Link>

            <div className="pt-4 flex items-center justify-between">
              <span className="font-sans text-xs uppercase tracking-wider text-[#444444]">
                ESTABLISHED 2026 // ADAPTIVE SYSTEMS
              </span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCart();
                }}
                className="font-sans font-bold text-xs uppercase bg-[#111111] text-[#F1ECE4] px-4 py-2"
              >
                VIEW BAG ({totalItems})
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



