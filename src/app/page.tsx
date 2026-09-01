import React from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ManifestoSection } from "@/components/manifesto-section";
import { FeaturedCollection } from "@/components/featured-collection";
import { EditorialBreak } from "@/components/editorial-break";
import { PhilosophySection } from "@/components/philosophy-section";
import { CategoryCores } from "@/components/category-cores";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";
import { ProductModal } from "@/components/product-modal";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#F1ECE4] flex flex-col items-center overflow-x-hidden selection:bg-[#111111] selection:text-[#F1ECE4]">
      {/* Header */}
      <Header />

      {/* Main Content Sections adhering precisely to Figma */}
      <div className="w-full flex flex-col items-center">
        {/* Hero Section */}
        <HeroSection />

        {/* 01 // MANIFESTO */}
        <ManifestoSection />

        {/* 02 // THE CURRENT SYSTEM */}
        <FeaturedCollection />

        {/* SYSTEM 01 // EDITORIAL BREAK */}
        <EditorialBreak />

        {/* 03 // PHILOSOPHY */}
        <PhilosophySection />

        {/* 04 // CATEGORY CORES */}
        <CategoryCores />
      </div>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Drawers and Overlays */}
      <CartDrawer />
      <ProductModal />
    </main>
  );
}
