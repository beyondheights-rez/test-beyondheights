"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUp, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  const navigateLinks = [
    { name: "Shop", href: "/shop" },
    { name: "Collections", href: "/collections" },
    { name: "About", href: "/#manifesto" },
    { name: "Journal", href: "/#philosophy" },
    { name: "Contact", href: "mailto:inquiries@beyond-systems.cc" },
  ];

  const clientLinks = [
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Use", href: "#" },
  ];

  const communityLinks = [
    { name: "Instagram", href: "https://instagram.com", external: true },
    { name: "X (Twitter)", href: "https://x.com", external: true },
    { name: "Dribbble", href: "https://dribbble.com", external: true },
  ];

  return (
    <footer className="w-full bg-[#111111] text-[#F1ECE4] pt-14 sm:pt-20 pb-10 sm:pb-12 px-6 sm:px-12 md:px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12 md:gap-16">
        {/* Top Banner Block */}
        <div className="flex flex-col gap-6 w-full">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display font-black text-4xl sm:text-6xl md:text-8xl lg:text-[96px] leading-[0.9] text-[#F1ECE4] uppercase tracking-tight max-w-[1280px]"
          >
            MADE TO BE WORN. <br />
            MADE TO GO BEYOND<span className="text-[#B59A63]">.</span>
          </motion.h2>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-[#F1ECE4]/[0.12]">
            <span className="font-display font-black text-3xl sm:text-[40px] leading-none text-[#B59A63]">
              BEYOND.
            </span>

            {/* Newsletter Dispatch Signup */}
            <form
              onSubmit={handleSubscribe}
              className="flex items-center w-full sm:w-auto max-w-md border-b border-[#F1ECE4]/30 focus-within:border-[#B59A63] transition-colors py-1"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER EMAIL FOR ARCHIVE DISPATCH"
                className="bg-transparent font-sans text-xs uppercase tracking-wider text-[#F1ECE4] placeholder:text-[#F1ECE4]/40 focus:outline-none w-full py-1 pr-4"
              />
              <button
                type="submit"
                className="text-[#B59A63] hover:text-[#F1ECE4] transition-colors p-1 text-xs uppercase font-bold flex items-center gap-1 shrink-0"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#B59A63]" />
                    <span className="text-[10px]">JOINED</span>
                  </>
                ) : (
                  <>
                    <span>JOIN</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 w-full pt-4">
          {/* Col 1: Navigate */}
          <div className="flex flex-col gap-4">
            <span className="font-sans font-bold text-[11px] leading-[14px] uppercase tracking-[0.1em] text-[#B59A63]">
              NAVIGATE
            </span>
            <ul className="flex flex-col gap-2.5">
              {navigateLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans font-normal text-[14px] leading-[18px] text-[#F1ECE4]/85 hover:text-[#B59A63] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Client Service */}
          <div className="flex flex-col gap-4">
            <span className="font-sans font-bold text-[11px] leading-[14px] uppercase tracking-[0.1em] text-[#B59A63]">
              CLIENT SERVICE
            </span>
            <ul className="flex flex-col gap-2.5">
              {clientLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans font-normal text-[14px] leading-[18px] text-[#F1ECE4]/85 hover:text-[#B59A63] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Community */}
          <div className="flex flex-col gap-4">
            <span className="font-sans font-bold text-[11px] leading-[14px] uppercase tracking-[0.1em] text-[#B59A63]">
              COMMUNITY
            </span>
            <ul className="flex flex-col gap-2.5">
              {communityLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans font-normal text-[14px] leading-[18px] text-[#F1ECE4]/85 hover:text-[#B59A63] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Top Back button */}
          <div className="flex flex-col justify-between items-start md:items-end">
            <span className="font-sans font-bold text-[11px] leading-[14px] uppercase tracking-[0.1em] text-[#B59A63]">
              SYSTEM TOP
            </span>
            <button
              onClick={scrollToTop}
              className="mt-4 group flex items-center gap-2 px-4 py-2 border border-[#F1ECE4]/20 hover:border-[#B59A63] text-[#F1ECE4] hover:text-[#B59A63] transition-all rounded-xs cursor-pointer"
              aria-label="Back to top"
            >
              <span className="font-sans text-xs uppercase font-bold tracking-wider">
                ASCEND
              </span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Bottom Line & Legal */}
        <div className="flex flex-col gap-6 w-full pt-4">
          <div className="w-full h-[1px] bg-[#F1ECE4]/[0.125]" />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-[#F1ECE4]/60">
            <span>© 2026 BEYOND. ALL RIGHTS RESERVED.</span>
            <span className="tracking-widest uppercase">
              ESTABLISHED 2026 // ADAPTIVE SYSTEMS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
