import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Heart, HeartHandshake, TrendingUp, Search, FileText, BarChart2, Star, Shield, Network, Globe, ArrowRight, Home, ChevronLeft, ChevronRight } from 'lucide-react';

const Approach: React.FC = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  // Active approach pillar state for horizontal carousel slide
  const [activePillar, setActivePillar] = useState(0);

  const approachPillars = [
    {
      id: 'pillar-understand',
      number: '01 / OBSERVATION',
      title: 'Understand the Child',
      description: 'We begin with deep observation—learning their strengths, challenges, interests, and sensory triggers.',
      image: 'https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image1.jpg',
    },
    {
      id: 'pillar-assess',
      number: '02 / EVALUATION',
      title: 'Assess Holistically',
      description: 'Our multidisciplinary specialists evaluate motor skills, communication, patterns, and cognition.',
      image: 'https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image3.jpg',
    },
    {
      id: 'pillar-plan',
      number: '03 / PLANNING',
      title: 'Design Personalized Plans',
      description: 'We draw custom maps containing targeted pathways, tracking metrics, and developmental goals.',
      image: 'https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image5.jpg',
    },
    {
      id: 'pillar-deliver',
      number: '04 / THERAPY',
      title: 'Deliver Quality Intervention',
      description: 'Conducting active therapy sessions, athletic pacing, and sensory integration in a supportive setup.',
      image: 'https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image6.jpg',
    },
    {
      id: 'pillar-empower',
      number: '05 / FAMILY',
      title: 'Empower Families',
      description: 'Equipping parents with functional knowledge, home routines, and resources to extend progress.',
      image: 'https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image8.jpg',
    },
    {
      id: 'pillar-measure',
      number: '06 / METRICS',
      title: 'Measure & Improve',
      description: 'Continuously recording session data, adjusting tasks, and improving outcomes for long-term growth.',
      image: 'https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image10.jpg',
    },
  ];

  // Auto slide timer for horizontal carousel (slides every 4.5s)
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePillar((prev) => (prev + 1) % 6);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const nextPillar = () => {
    setActivePillar((prev) => (prev + 1) % 6);
  };

  const prevPillar = () => {
    setActivePillar((prev) => (prev - 1 + 6) % 6);
  };

  return (
    <div className="bg-[#FAF8F5] text-brand-ink min-h-screen">
      {/* Hero Section Banner */}
      <section className="relative w-full bg-[#123524] text-white pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 md:px-10 rounded-none shadow-[0_20px_40px_rgba(0,0,0,0.06)] overflow-hidden">
        {/* Subtle background forest texture or pattern opacity */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-950/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-[1280px] mx-auto w-full relative z-10 space-y-8 sm:space-y-12">
          {/* Top Row: Title Left, Description + CTA Button Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-end">
            
            {/* Title Column */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-left">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#c68a2c] font-bold">
                OUR APPROACH
              </span>
              <h1 className="font-serif text-3xl sm:text-[56px] lg:text-[72px] font-normal leading-[1.08] sm:leading-[1.05] tracking-tight text-white">
                Personal,<br />
                <span className="italic text-[#c68a2c]">Scientific</span> & <span className="italic text-[#c68a2c]">Human.</span>
              </h1>
            </div>

            {/* Description & CTA Column */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-left pb-2">
              <p className="text-[#FAF8F5]/90 text-xs sm:text-[15px] md:text-base leading-relaxed font-sans">
                At Beyond Heights, our approach is built on empathy, evidence, and collaboration. We work with each child and family to unlock potential, strengthen outcomes, and build a future of dignity and independence.
              </p>
              <div>
                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#c68a2c] hover:bg-[#b07823] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md group/btn cursor-pointer"
                >
                  Partner With Us <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>

          </div>

          {/* Featured Large Image with Glassmorphic Overlay Card */}
          <div className="relative rounded-[20px] sm:rounded-[36px] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.25)] bg-[#0d2a1c] group">
            <img 
              src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image10.jpg" 
              alt="Our Approach" 
              className="w-full h-[260px] sm:h-[480px] md:h-[580px] object-cover transition-transform duration-700 group-hover:scale-102"
            />
            {/* Dark gradient shadow inside image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Glassmorphic Overlay Card on bottom-left */}
            <div className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 z-20 max-w-[220px] sm:max-w-[340px] bg-black/50 backdrop-blur-xl border border-white/20 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl text-left text-white shadow-2xl">
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#c68a2c] uppercase font-bold">
                THERAPEUTIC IMPACT
              </span>
              <div className="mt-1 sm:mt-2 text-lg sm:text-3xl font-serif font-bold text-white tracking-tight">
                95% Success Rate
              </div>
              
              {/* Progress Bar */}
              <div className="mt-2 sm:mt-3.5 space-y-1 sm:space-y-1.5">
                <div className="w-full h-1 sm:h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="bg-[#c68a2c] h-full w-[95%] rounded-full" />
                </div>
                <div className="flex justify-between text-[9px] sm:text-[10px] font-sans font-semibold text-white/70">
                  <span>Structured Milestones</span>
                  <span>95%</span>
                </div>
              </div>
              <p className="text-[10px] sm:text-[11px] text-white/80 mt-2 sm:mt-3 font-sans leading-normal line-clamp-2 sm:line-clamp-none">
                Empowering children to hit physical, social, and vocational milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Wrapper for remaining sections */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 space-y-12 sm:space-y-24 mt-12 sm:mt-24">

        {/* --- Editorial Divider Section --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-left pt-2 items-stretch">
          
          {/* Left Column: Brand Statement & Landscape Image */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="font-serif text-[#123524] text-2xl sm:text-[40px] leading-tight tracking-tight uppercase">
                AT BEYOND HEIGHTS,
              </h2>
              <p className="text-slate-600 leading-relaxed font-sans text-xs sm:text-sm md:text-base">
                We believe therapeutic pacing is more than just sessions—it's about creating supportive pathways that inspire, function beautifully, and reflect the unique potential of every child.
              </p>
            </div>
            
            {/* Clean Landscape Image */}
            <div className="overflow-hidden border border-brand-line/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] bg-white p-1 rounded-lg">
              <img 
                src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image8.jpg" 
                alt="Our Approach Journey" 
                className="w-full h-[180px] sm:h-[220px] object-cover rounded"
              />
            </div>
          </div>

          {/* Right Column: 2x2 Clean Divided Grid Block */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 border border-brand-line/70 bg-white shadow-sm rounded-lg overflow-hidden">
            
            {/* Grid 1: Child-Centered (Top Left) */}
            <div className="border-b sm:border-r border-brand-line/70 p-5 sm:p-8 flex justify-between items-end gap-4 min-h-[140px] sm:min-h-[170px]">
              <p className="text-xs sm:text-sm font-semibold text-slate-500 leading-relaxed max-w-[190px]">
                Child-centered pathways designed around individual strengths and targets.
              </p>
              <span className="font-sans text-3xl sm:text-[48px] font-bold text-[#c68a2c] leading-none select-none">
                01
              </span>
            </div>

            {/* Grid 2: Family Partnership (Top Right) */}
            <div className="border-b border-brand-line/70 p-5 sm:p-8 flex justify-between items-end gap-4 min-h-[140px] sm:min-h-[170px]">
              <p className="text-xs sm:text-sm font-semibold text-slate-500 leading-relaxed max-w-[190px]">
                Family partnerships collaborating and guiding every therapeutic milestone.
              </p>
              <span className="font-sans text-3xl sm:text-[48px] font-bold text-[#c68a2c] leading-none select-none">
                02
              </span>
            </div>

            {/* Grid 3: Evidence-Based (Bottom Left) */}
            <div className="border-b sm:border-b-0 sm:border-r border-brand-line/70 p-5 sm:p-8 flex justify-between items-end gap-4 min-h-[140px] sm:min-h-[170px]">
              <p className="text-xs sm:text-sm font-semibold text-slate-500 leading-relaxed max-w-[190px]">
                Evidence-based strategies structured on trackable clinical milestones.
              </p>
              <span className="font-sans text-3xl sm:text-[48px] font-bold text-[#c68a2c] leading-none select-none">
                03
              </span>
            </div>

            {/* Grid 4: Solid Accent Color block (Bottom Right) */}
            <div className="p-5 sm:p-8 bg-[#123524] text-white flex flex-col justify-between min-h-[140px] sm:min-h-[170px]">
              <p className="font-serif italic text-xs sm:text-sm md:text-base text-white/95 leading-relaxed">
                We lead with empathy, deep respect, and clinical rigor to build an inclusive future.
              </p>
              <button 
                onClick={() => {
                  const el = document.getElementById('pillars-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#c68a2c] hover:text-[#e5b364] text-left uppercase mt-3 sm:mt-4 flex items-center gap-1.5 cursor-pointer transition-colors duration-300"
              >
                Our Pillars <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </section>

        {/* --- Pillars Section (Full Viewport Edge-to-Edge Auto-Slide Banner) --- */}
        <section id="pillars-section" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-2 sm:py-4 scroll-mt-28 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center space-y-2.5 sm:space-y-3 mb-8 sm:mb-10 md:mb-12"
            >
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c68a2c] font-bold">
                OUR APPROACH PILLARS
              </span>
              <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] sm:leading-[1.08] text-brand-ink tracking-tight">
                Our Core Pillars
              </h2>
              <div className="w-12 h-0.5 bg-[#c68a2c] mx-auto mt-2" />
              <p className="text-xs sm:text-sm md:text-base text-brand-ink-soft max-w-[620px] mx-auto pt-1 sm:pt-2 font-sans">
                Explore the structured methodology driving daily progress, child confidence, and family independence.
              </p>
            </motion.div>
          </div>

          {/* Full Horizontal Bleed Container */}
          <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[600px] overflow-hidden shadow-2xl bg-slate-900 group">
            {/* Sliding Image Background */}
            <AnimatePresence mode="wait">
              <motion.img
                key={`approach-slide-img-${approachPillars[activePillar].id}`}
                src={approachPillars[activePillar].image}
                alt={approachPillars[activePillar].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Gradient Overlays for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Content Container */}
            <div className="absolute inset-0 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 p-5 sm:p-12 lg:p-16 flex flex-col justify-end pointer-events-none z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`approach-slide-content-${approachPillars[activePillar].id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="space-y-2 sm:space-y-4 max-w-[680px] text-left pointer-events-auto pb-4 sm:pb-6"
                >
                  {/* Eyebrow Tag Pill */}
                  <div className="inline-flex items-center gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#e5b364] font-mono text-[10px] sm:text-xs tracking-[0.18em] font-bold uppercase">
                    <span>{approachPillars[activePillar].number}</span>
                  </div>

                  {/* Main Title */}
                  <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-white tracking-tight">
                    {approachPillars[activePillar].title}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="text-white/90 font-sans text-xs sm:text-base leading-relaxed max-w-[580px] line-clamp-3 sm:line-clamp-none">
                    {approachPillars[activePillar].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrow Controls */}
            <div className="absolute inset-y-0 left-2 right-2 sm:left-8 sm:right-8 flex items-center justify-between pointer-events-none z-20">
              <button
                onClick={prevPillar}
                className="w-9 h-9 sm:w-13 sm:h-13 rounded-full bg-black/35 hover:bg-black/70 backdrop-blur-md text-white border border-white/25 flex items-center justify-center pointer-events-auto cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={nextPillar}
                className="w-9 h-9 sm:w-13 sm:h-13 rounded-full bg-black/35 hover:bg-black/70 backdrop-blur-md text-white border border-white/25 flex items-center justify-center pointer-events-auto cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Bottom Slide Indicator Tabs / Dots */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-16 z-20 flex items-center gap-1.5 sm:gap-2">
              {approachPillars.map((p, idx) => (
                <button
                  key={`dot-${p.id}`}
                  onClick={() => setActivePillar(idx)}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activePillar === idx ? 'w-6 sm:w-8 bg-[#e5b364]' : 'w-2 sm:w-2.5 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* --- How We Work Together --- */}
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#FAF8F5] border-y border-brand-line/70 py-12 sm:py-16 md:py-24 overflow-hidden scroll-mt-28">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
            
            {/* Header */}
            <div className="text-center space-y-2.5 sm:space-y-3 mb-10 sm:mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c68a2c] font-bold block">
                HOW WE WORK TOGETHER
              </span>
              <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] sm:leading-[1.08] text-brand-ink tracking-tight">
                Our Collaborative Journey
              </h2>
              <div className="w-12 h-0.5 bg-[#c68a2c] mx-auto mt-2" />
              <p className="text-xs sm:text-sm md:text-base text-brand-ink-soft max-w-[620px] mx-auto pt-1 sm:pt-2 font-sans">
                A step-by-step roadmap designed to support, integrate, and champion your family at every stage.
              </p>
            </div>

            {/* Timeline Steps Horizontal Container */}
            <div className="relative w-full pt-8 sm:pt-10 pb-4 overflow-x-auto no-scrollbar scroll-smooth">
              
              {/* Continuous Horizontal Connecting Line */}
              <div className="absolute top-[72px] sm:top-[80px] left-4 right-4 h-[2px] bg-slate-200/80 z-0">
                <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#c68a2c]" />
                <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#c68a2c]" />

                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-full bg-[#c68a2c]"
                />
              </div>

              {/* Steps Flex Row */}
              <div className="flex justify-between items-stretch gap-6 sm:gap-8 min-w-[900px] sm:min-w-[1000px] px-4 relative z-10">
                {[
                  {
                    step: '01',
                    title: 'Connect',
                    desc: 'We sit down to listen, understanding your child\'s background and your family goals.',
                    icon: Users,
                  },
                  {
                    step: '02',
                    title: 'Evaluate',
                    desc: 'Conducting physical, sensory, and cognitive observation blocks.',
                    icon: Search,
                  },
                  {
                    step: '03',
                    title: 'Plan',
                    desc: 'Drafting a comprehensive daily program mapped to specific target areas.',
                    icon: FileText,
                  },
                  {
                    step: '04',
                    title: 'Intervene',
                    desc: 'Running direct therapies, paces, and learning sessions at our centers.',
                    icon: HeartHandshake,
                  },
                  {
                    step: '05',
                    title: 'Track',
                    desc: 'Compiling visual tracking dashboards to keep parents informed of progress.',
                    icon: BarChart2,
                  },
                  {
                    step: '06',
                    title: 'Transform',
                    desc: 'Celebrating independence milestones, physical stamina gains, and joy.',
                    icon: Star,
                  }
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <motion.div
                      key={`timeline-step-${idx}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: idx * 0.12 }}
                      className="flex-1 flex flex-col items-center group text-center space-y-4 sm:space-y-6"
                    >
                      {/* Step Badge / Icon Circle */}
                      <div className="relative flex flex-col items-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#123524] flex items-center justify-center transition-all duration-300 group-hover:scale-105 z-10 relative">
                          <IconComp className="w-6 h-6 sm:w-8 sm:h-8 text-[#c68a2c]" />
                        </div>
                      </div>

                      {/* Content Card below */}
                      <div className="text-center w-full max-w-[220px] transition-all duration-300 group-hover:-translate-y-1">
                        <h4 className="font-serif font-bold text-base sm:text-lg text-[#123524] tracking-tight mb-1 sm:mb-2">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-[13px] font-sans text-brand-ink-soft leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                    </motion.div>
                  );
                })}
              </div>

            </div>

          </div>
        </section>

        {/* --- Differentiators Section --- */}
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-brand-bg-alt border-y border-brand-line/70 py-12 sm:py-16 md:py-24 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 space-y-8 sm:space-y-12">
            <div className="text-center space-y-2.5 sm:space-y-3 mb-10 sm:mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c68a2c] font-bold block">
                WHAT MAKES OUR APPROACH DIFFERENT
              </span>
              <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] sm:leading-[1.08] text-brand-ink tracking-tight">
                Why We Stand Apart
              </h2>
              <div className="w-12 h-0.5 bg-[#c68a2c] mx-auto mt-2" />
              <p className="text-xs sm:text-sm md:text-base text-brand-ink-soft max-w-[620px] mx-auto pt-1 sm:pt-2 font-sans">
                Discover the core differences that define our commitment, evidence-led methods, and family-centered focus.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 lg:gap-x-0 lg:divide-x lg:divide-slate-300">
              <div className="text-center space-y-3 sm:space-y-4 px-2 sm:px-6">
                <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl border border-slate-200 flex items-center justify-center mx-auto text-[#123524] bg-white shadow-sm transition-transform duration-300 hover:scale-105 hover:border-[#c68a2c]/50">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#123524]" />
                </div>
                <h4 className="font-serif font-bold text-xs sm:text-sm tracking-wide text-[#123524] uppercase mt-1 sm:mt-2">
                  Human First
                </h4>
                <p className="text-[11px] sm:text-[13px] text-brand-ink-soft leading-relaxed">
                  We view the child first, not the diagnostic tags. We respect individual pacing.
                </p>
              </div>

              <div className="text-center space-y-3 sm:space-y-4 px-2 sm:px-6">
                <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl border border-slate-200 flex items-center justify-center mx-auto text-[#123524] bg-white shadow-sm transition-transform duration-300 hover:scale-105 hover:border-[#c68a2c]/50">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-[#123524]" />
                </div>
                <h4 className="font-serif font-bold text-xs sm:text-sm tracking-wide text-[#123524] uppercase mt-1 sm:mt-2">
                  Evidence Led
                </h4>
                <p className="text-[11px] sm:text-[13px] text-brand-ink-soft leading-relaxed">
                  Employing validated cognitive methodologies shaped for local realities.
                </p>
              </div>

              <div className="text-center space-y-3 sm:space-y-4 px-2 sm:px-6">
                <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl border border-slate-200 flex items-center justify-center mx-auto text-[#123524] bg-white shadow-sm transition-transform duration-300 hover:scale-105 hover:border-[#c68a2c]/50">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#123524]" />
                </div>
                <h4 className="font-serif font-bold text-xs sm:text-sm tracking-wide text-[#123524] uppercase mt-1 sm:mt-2">
                  Integrated Care
                </h4>
                <p className="text-[11px] sm:text-[13px] text-brand-ink-soft leading-relaxed">
                  Connecting clinical therapy, physical pacing, and social groups collaboratively.
                </p>
              </div>

              <div className="text-center space-y-3 sm:space-y-4 px-2 sm:px-6">
                <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl border border-slate-200 flex items-center justify-center mx-auto text-[#123524] bg-white shadow-sm transition-transform duration-300 hover:scale-105 hover:border-[#c68a2c]/50">
                  <Home className="w-6 h-6 sm:w-8 sm:h-8 text-[#123524]" />
                </div>
                <h4 className="font-serif font-bold text-xs sm:text-sm tracking-wide text-[#123524] uppercase mt-1 sm:mt-2">
                  Family at Center
                </h4>
                <p className="text-[11px] sm:text-[13px] text-brand-ink-soft leading-relaxed">
                  Providing comprehensive support for parents and siblings throughout the journey.
                </p>
              </div>

              <div className="text-center space-y-3 sm:space-y-4 px-2 sm:px-6">
                <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl border border-slate-200 flex items-center justify-center mx-auto text-[#123524] bg-white shadow-sm transition-transform duration-300 hover:scale-105 hover:border-[#c68a2c]/50">
                  <Network className="w-6 h-6 sm:w-8 sm:h-8 text-[#123524]" />
                </div>
                <h4 className="font-serif font-bold text-xs sm:text-sm tracking-wide text-[#123524] uppercase mt-1 sm:mt-2">
                  Inclusion Focused
                </h4>
                <p className="text-[11px] sm:text-[13px] text-brand-ink-soft leading-relaxed">
                  Preparing children for standard schooling, active playgrounds, and jobs.
                </p>
              </div>

              <div className="text-center space-y-3 sm:space-y-4 px-2 sm:px-6 col-span-2 sm:col-span-1 lg:col-span-1">
                <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl border border-slate-200 flex items-center justify-center mx-auto text-[#123524] bg-white shadow-sm transition-transform duration-300 hover:scale-105 hover:border-[#c68a2c]/50">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-[#123524]" />
                </div>
                <h4 className="font-serif font-bold text-xs sm:text-sm tracking-wide text-[#123524] uppercase mt-1 sm:mt-2">
                  Scalable Impact
                </h4>
                <p className="text-[11px] sm:text-[13px] text-brand-ink-soft leading-relaxed">
                  Publishing open-source framework assets to benefit global support systems.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* --- Full-Width Bottom CTA Section --- */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full overflow-hidden bg-white text-brand-ink pt-12 sm:pt-16 pb-16 sm:pb-24 md:pt-20 md:pb-32 mt-12 sm:mt-20 group border-t border-brand-line/60"
      >
        {/* Background Mountain PNG Layer */}
        <img 
          src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/bg-mountain.png"
          alt="Beyond Heights Mountain Silhouette"
          className="absolute inset-0 w-full h-full object-cover object-bottom transition-transform duration-1000 group-hover:scale-105 pointer-events-none opacity-40"
        />

        {/* Bottom Smoky White Mist / Fog Blend */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />

        {/* Front Layer Content */}
        <div className="relative z-10 max-w-[920px] mx-auto px-4 sm:px-6 text-center space-y-8 sm:space-y-10 text-brand-ink flex flex-col items-center">
          
          {/* Main Heading & Subtitle Block */}
          <div className="space-y-3 sm:space-y-4 -mt-2">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#c68a2c] font-bold">
              TOGETHER FOR LIFELONG IMPACT
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.18] text-brand-ink tracking-tight">
              Together, we create possibilities that last <span className="text-[#c68a2c] italic">a lifetime.</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-brand-ink-soft max-w-[640px] mx-auto leading-relaxed font-sans font-medium">
              Join us in empowering children, strengthening families, and building inclusive opportunities that foster lifelong growth.
            </p>
          </div>

          {/* Bottom Group */}
          <div className="space-y-6 sm:space-y-8 pt-4 sm:pt-6 w-full flex flex-col items-center">
            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-10 w-full max-w-[760px]">
              <div className="flex flex-col items-center space-y-1.5 sm:space-y-2">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-[#c68a2c]" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-brand-ink">Support a Child</span>
              </div>
              <div className="flex flex-col items-center space-y-1.5 sm:space-y-2">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#c68a2c]" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-brand-ink">Build Community</span>
              </div>
              <div className="flex flex-col items-center space-y-1.5 sm:space-y-2">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-[#c68a2c]" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-brand-ink">Strengthen Society</span>
              </div>
              <div className="flex flex-col items-center space-y-1.5 sm:space-y-2">
                <Star className="w-6 h-6 sm:w-7 sm:h-7 text-[#c68a2c]" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-brand-ink">Create Tomorrow</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="w-full sm:w-auto">
              <button
                onClick={() => navigate('/donate')}
                className="w-full sm:w-auto bg-[#c68a2c] hover:bg-[#a37229] text-white font-sans font-bold text-xs tracking-[0.08em] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
              >
                DONATE NOW <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[11px] sm:text-xs text-brand-ink-soft italic font-medium">Every contribution creates lasting change.</p>
          </div>

        </div>
      </motion.section>
    </div>
  );
};

export default Approach;
