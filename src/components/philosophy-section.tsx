"use client";

import React, { useState } from "react";
import { Play, User, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function PhilosophySection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: "MOVEMENT",
      bg: "bg-[#111111]",
      border: "border-transparent",
      iconColor: "text-[#F1ECE4]",
      textColor: "text-[#111111]",
      icon: Play,
      detail: "Physical action is the fundamental catalyst for self-discovery and growth.",
    },
    {
      id: 2,
      title: "IDENTITY",
      bg: "bg-[#B59A63]",
      border: "border-transparent",
      iconColor: "text-[#F1ECE4]",
      textColor: "text-[#111111]",
      icon: User,
      detail: "Repetitive discipline forms the internal standard of who you choose to be.",
    },
    {
      id: 3,
      title: "COMMUNITY",
      bg: "bg-[#111111]",
      border: "border-transparent",
      iconColor: "text-[#F1ECE4]",
      textColor: "text-[#111111]",
      icon: Users,
      detail: "Shared velocity elevates human ambition beyond individual limitations.",
    },
    {
      id: 4,
      title: "POSSIBILITY",
      bg: "bg-[#111111]",
      border: "border-2 border-[#B59A63]",
      iconColor: "text-[#B59A63]",
      textColor: "text-[#B59A63]",
      icon: Sparkles,
      detail: "The ultimate outcome: expanding horizons with tools engineered to endure.",
    },
  ];

  return (
    <section
      id="philosophy"
      className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 py-12 sm:py-16 md:py-20 flex flex-col items-center gap-8 sm:gap-12"
    >
      {/* Header Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center gap-4 max-w-[720px]"
      >
        <span className="font-display font-extrabold text-xl sm:text-2xl leading-none text-[#B59A63] uppercase tracking-wider">
          03 // PHILOSOPHY
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-[40px] leading-tight text-[#111111] uppercase tracking-tight">
          HUMAN POTENTIAL COMPOUNDS.
        </h2>
        <p className="font-sans font-normal text-sm sm:text-base leading-[1.6] text-[#444444]">
          Movement becomes identity. Identity becomes community. Community becomes possibility. We build tools that anchor this positive loop.
        </p>
      </motion.div>

      {/* 4 Compounding Steps Flow */}
      <div className="w-full py-6 flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-6 md:gap-2">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isHovered = activeStep === step.id;

          return (
            <React.Fragment key={step.title}>
              {/* Step Node */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
                className="flex flex-col items-center gap-4 group cursor-pointer w-[140px] sm:w-[180px] p-3 rounded-lg hover:bg-black/[0.02] transition-colors relative"
              >
                {/* 48px Circular Icon */}
                <div
                  className={`w-12 h-12 rounded-full ${step.bg} ${step.border} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm`}
                >
                  <Icon className={`w-[18px] h-[18px] ${step.iconColor}`} />
                </div>

                {/* Step Title */}
                <span
                  className={`font-display font-extrabold text-lg sm:text-[20px] leading-6 uppercase tracking-wide ${step.textColor} transition-colors`}
                >
                  {step.title}
                </span>

                {/* Active Tooltip popup */}
                <div
                  className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 w-48 p-2.5 bg-[#111111] text-[#F1ECE4] text-[11px] font-sans text-center rounded-xs shadow-xl z-20 transition-all duration-200 pointer-events-none ${
                    isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  }`}
                >
                  {step.detail}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#111111] rotate-45" />
                </div>
              </motion.div>

              {/* Connecting Line (omit after last item) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block w-12 lg:w-[100px] h-[1px] bg-[#111111]/[0.082] self-center" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#111111]/[0.082]" />
    </section>
  );
}
