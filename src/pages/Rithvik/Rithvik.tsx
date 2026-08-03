import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award } from 'lucide-react';

const Rithvik: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mapLocations = [
    { id: 'coimbatore', x: 71.38, y: 50.33, status: 'done', year: '2023', title: 'Coimbatore, India', desc: 'First 5K. The day possibility became believable.' },
    { id: 'jaipur', x: 71.06, y: 39.23, status: 'done', year: '2025', title: 'Jaipur, India', desc: '42.195 km — not the completion of a race, the arrival of an identity.' },
    { id: 'ooty', x: 71.32, y: 50.06, status: 'done', year: '2026', title: 'Ooty, India', desc: 'Ooty Ultra · 60 km. Some distances change your legs, others your imagination.' },
    { id: 'toronto', x: 27.96, y: 27.53, status: 'done', year: '2026', title: 'Toronto, Canada', desc: 'The journey crossed borders. Possibility became international.' },
    { id: 'oceanswim', x: 71.53, y: 52.42, status: 'done', year: '2026', title: 'Ocean Swim, South India', desc: 'Approx. 1.5 km open water. Before crossing the water, he crossed disbelief.' },
    { id: 'zyclothon', x: 72.31, y: 48.89, status: 'upcoming', year: 'Aug 2026', title: 'Zoho Zyclothon, India', desc: 'City to be confirmed.' },
    { id: 'bengaluru', x: 71.57, y: 48.96, status: 'upcoming', year: 'Sep 2026', title: 'Bengaluru Marathon', desc: 'Bengaluru, India.' },
    { id: 'delhi', x: 71.46, y: 38.04, status: 'upcoming', year: 'Oct 18, 2026', title: 'Delhi Half Marathon', desc: 'New Delhi, India.' },
    { id: 'goa', x: 70.60, y: 47.35, status: 'upcoming', year: 'Nov 2026', title: 'IRONMAN 70.3 Goa', desc: 'Goa, India.' },
    { id: 'singapore', x: 78.83, y: 57.10, status: 'upcoming', year: 'Dec 2026', title: 'Singapore Marathon', desc: 'Singapore.' },
    { id: 'australia', x: 90.51, y: 69.93, status: 'upcoming', year: '2027', title: 'IRONMAN Australia', desc: 'Exact city to be confirmed.' },
    { id: 'gibraltar', x: 48.42, y: 32.86, status: 'upcoming', year: '2027', title: 'Strait of Gibraltar', desc: 'Open water crossing, Europe → Africa.' },
    { id: 'kilimanjaro', x: 60.38, y: 60.21, status: 'upcoming', year: '2027', title: 'Mount Kilimanjaro', desc: 'Tanzania.' },
    { id: 'chicago', x: 25.66, y: 28.77, status: 'upcoming', year: '2027', title: 'Chicago Marathon', desc: 'Chicago, USA.' },
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Started.',
      desc: 'Three races. Twenty kilometres. The first evidence that beginnings compound.'
    },
    {
      year: '2024',
      title: 'Returned.',
      desc: "Eight events. Five half marathons. Yesterday's impossible became today's routine."
    },
    {
      year: '2025',
      title: 'Became.',
      desc: 'Jaipur. 42.195 kilometres. Not the completion of a race—the arrival of an identity.'
    },
    {
      year: '2026',
      title: 'Expanded.',
      desc: 'Ooty Ultra. Toronto. Chicago. Ocean swimming. Ironman training. The question was no longer "Can he run?" It was "What else have we underestimated?"'
    }
  ];

  return (
    <div className="bg-[#FAF8F5] text-brand-ink min-h-screen">
      
      {/* --- Hero Section --- */}
      <section className="relative w-full bg-white text-brand-ink pt-36 pb-20 px-6 md:px-10 rounded-none overflow-hidden border-b border-brand-line/60">
        <div className="max-w-[1440px] mx-auto w-full relative z-10 flex flex-col items-center">
          
          {/* Header Block (Centered) */}
          <div className="text-center space-y-2 mb-10">
            <h1 className="font-sans text-5xl sm:text-[68px] lg:text-[88px] font-extralight tracking-[0.25em] text-brand-ink uppercase leading-[1.05]">
              RITHVIK
            </h1>
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-brand-ink-soft font-bold block">
              A RÉSUMÉ OF BECOMING
            </span>
          </div>

          {/* 3-Column Editorial Grid (No absolute clipping, perfect web alignment) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-stretch w-full mt-6">
            
            {/* Left Column content */}
            <div className="flex flex-col justify-between space-y-12 py-6 text-left max-w-[360px] mx-auto md:mx-0">
              
              {/* Editorial Quote block 1 */}
              <div className="space-y-4">
                <div className="w-12 h-[1.5px] bg-brand-ink/80" />
                <p className="font-serif text-xl sm:text-2xl md:text-[25px] font-medium leading-[1.35] text-[#123524] tracking-tight">
                  The goal was never to become an Ironman. <br />
                  The goal was to become someone who no longer needs fear to decide.
                </p>
              </div>

              {/* Editorial Quote block 2 */}
              <div className="space-y-6">
                <p className="font-sans text-xs sm:text-sm text-brand-ink-soft leading-relaxed font-bold">
                  Not about distance.<br />
                  About transformation.
                </p>
                <div className="w-12 h-[1.5px] bg-brand-ink/80" />
                <p className="font-sans text-xs sm:text-sm text-brand-ink-soft leading-relaxed font-bold">
                  Every step changes a life.<br />
                  Every story inspires millions.
                </p>
              </div>

              {/* Bottom branding block */}
              <div className="space-y-3 pt-6">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-brand-ink font-bold block">
                  BEYOND HEIGHTS
                </span>
                <div className="w-12 h-[1.5px] bg-brand-ink/80" />
                <p className="font-sans text-xs sm:text-sm italic text-brand-ink-soft font-semibold leading-relaxed">
                  Autism does not define possibility. <br />
                  Possibility redefines autism.
                </p>
              </div>

            </div>

            {/* Center Column: Rithvik's Image (Always Centered, Never Clipped) */}
            <div className="flex justify-center items-center">
              <div className="w-full max-w-[420px] sm:max-w-[480px] md:max-w-[550px] aspect-[3/4] flex justify-center">
                <img 
                  src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/index-Hero-section/rithvik%20boost%20image.png" 
                  alt="Rithvik" 
                  className="h-full w-auto object-contain rounded-2xl"
                />
              </div>
            </div>

            {/* Right Column content */}
            <div className="flex flex-col justify-between py-6 text-left md:text-right max-w-[360px] mx-auto md:mx-0 md:ml-auto md:items-end">
              
              {/* Editorial Quote block 3 */}
              <div className="space-y-3 md:items-end md:flex md:flex-col">
                <span className="font-serif text-5xl md:text-6xl text-[#c68a2c] font-bold block select-none -mb-2">“</span>
                <p className="font-serif text-xl sm:text-2xl md:text-[25px] font-medium leading-[1.35] text-[#123524] tracking-tight md:text-right">
                  Courage is the presence of fear and the decision to move forward.
                </p>
              </div>

              {/* Editorial Quote block 4 */}
              <div className="space-y-4 md:items-end md:flex md:flex-col pt-12 md:pt-0">
                <div className="w-12 h-[1.5px] bg-brand-ink/80" />
                <p className="font-serif text-sm sm:text-base md:text-lg text-brand-ink-soft leading-relaxed md:text-right">
                  Rithvik's journey is different.
                </p>
                <p className="font-serif text-sm sm:text-base md:text-lg text-brand-ink font-bold leading-relaxed md:text-right">
                  It is the absence of fear that moves him forward.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Main Grid Wrapper */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 space-y-24 mt-24">

        {/* --- Section 1: The Idea (Belief) --- */}
        <section id="belief" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white border-y border-brand-line/60 py-20 px-6 md:px-12 scroll-mt-28">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column */}
            <div className="space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c68a2c] font-bold block">
                THE IDEA
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-brand-ink tracking-tight">
                This is not a running story.
              </h2>
              <p className="text-base sm:text-lg text-brand-ink-soft leading-relaxed max-w-[580px]">
                It is a story about expanding human capacity and discovering that the definitions we place on developmental conditions are only starting boundaries, not final destinations.
              </p>
            </div>

            {/* Right Column (Dark Forest Card) */}
            <div className="bg-[#123524] text-white p-8 sm:p-12 rounded-3xl border border-[#1b4430] space-y-6 shadow-xl">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c68a2c] font-bold block">
                THE CORE QUESTION
              </span>
              <p className="font-serif text-2xl sm:text-3xl font-normal leading-relaxed text-[#FAF8F5]/95">
                "Most people think autism defines the journey. <br />
                <span className="italic text-[#c68a2c] font-medium">What if the journey redefines autism?</span>"
              </p>
              <div className="w-12 h-0.5 bg-[#c68a2c]" />
            </div>

          </div>
        </section>


        {/* --- Section 2: The Résumé That Matters (The Record) --- */}
        <section id="resume" className="scroll-mt-28 space-y-16">
          {/* Centered Header */}
          <div className="text-center space-y-3 max-w-[1100px] mx-auto">
            <span className="font-mono text-sm sm:text-base uppercase tracking-[0.2em] text-[#c68a2c] font-bold block">
              THE RECORD
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.08] text-[#123524] tracking-tight whitespace-normal sm:whitespace-nowrap">
              A Career in Becoming More Possible
            </h2>
            <div className="w-12 h-0.5 bg-[#c68a2c] mx-auto mt-2" />
            <p className="text-base sm:text-lg text-brand-ink-soft leading-relaxed max-w-[720px] mx-auto pt-2">
              Rithvik's growth tracks the compounding evidence of milestones achieved through sheer persistence and structured athletic intervention.
            </p>
          </div>

          {/* Full-Width Resume List */}
          <div className="w-full space-y-12 divide-y divide-brand-line/85 border-t border-b border-brand-line/85 py-6">
            
            {/* Row 1: Current Role */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 items-center">
              <div className="md:col-span-4">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#c68a2c] font-light uppercase tracking-tight block">
                  CURRENT ROLE
                </span>
              </div>
              <div className="md:col-span-8 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#123524] font-light tracking-tight">Professional Beginner</h3>
                <span className="text-xl sm:text-2xl font-mono text-[#c68a2c] uppercase tracking-wider font-light">2023 - PRESENT</span>
              </div>
            </div>

            {/* Row 2: Primary Responsibility */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-10 items-center">
              <div className="md:col-span-4">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#c68a2c] font-light uppercase tracking-tight block">
                  RESPONSIBILITY
                </span>
              </div>
              <div className="md:col-span-8 space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#123524] font-light tracking-tight">Begin before certainty arrives.</h3>
                <p className="text-base sm:text-lg text-brand-ink-soft leading-relaxed font-sans font-light">
                  Repeat until the impossible becomes familiar. Leverage running, open water swimming, and endurance racing to rewrite developmental speeds and expand expectations.
                </p>
              </div>
            </div>

            {/* Row 3: Promotions Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-10 items-center">
              <div className="md:col-span-4">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#c68a2c] font-light uppercase tracking-tight block">
                  PROMOTIONS
                </span>
              </div>
              <div className="md:col-span-8 space-y-6">
                {[
                  { year: '2023', role: 'Someone who started.' },
                  { year: '2024', role: 'Half marathoner.' },
                  { year: '2025', role: 'Full Marathoner.' },
                  { year: '2026', role: 'Ultra Explorer.' },
                  { year: '2027', role: 'Becoming...' },
                ].map((row, idx) => (
                  <div key={`promo-${idx}`} className="flex justify-between items-center border-b border-brand-line/50 pb-4">
                    <span className="font-serif text-xl sm:text-2xl text-brand-ink font-light">{row.role}</span>
                    <span className="font-mono text-2xl sm:text-3xl font-light text-[#c68a2c]">{row.year}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>


        {/* --- Section 3: The Journey (Milestones Horizontal Scroll) --- */}
        <section id="journey" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#FAF8F5] border-y border-brand-line/70 py-16 md:py-24 overflow-hidden scroll-mt-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            
            {/* Header */}
            <div className="text-center space-y-3 mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c68a2c] font-bold block">
                THE TIMELINE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-brand-ink tracking-tight">
                The Map Changed Because He Did
              </h2>
              <div className="w-12 h-0.5 bg-[#c68a2c] mx-auto mt-2" />
            </div>

            {/* Horizontal timeline container */}
            <div className="relative w-full pt-10 pb-6 overflow-x-auto no-scrollbar scroll-smooth">
              
              {/* Continuous Horizontal Connecting Line */}
              <div className="absolute top-[96px] left-6 right-6 h-[2.5px] bg-slate-200/80 z-0">
                <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#c68a2c]" />
                <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#c68a2c]" />

                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-full bg-[#c68a2c]"
                />
              </div>

              {/* Flex row of items */}
              <div className="flex justify-between items-stretch gap-8 min-w-[1000px] px-6 relative z-10">
                {milestones.map((item, idx) => (
                  <motion.div
                    key={`mile-${idx}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    className="flex-1 flex flex-col items-center group text-center space-y-6"
                  >
                    {/* Circle Badge */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#123524] flex items-center justify-center transition-all duration-300 group-hover:scale-105 z-10 relative shadow-lg border-2 border-white">
                      <Award className="w-10 h-10 sm:w-12 sm:h-12 text-[#c68a2c]" />
                    </div>

                    {/* Content text */}
                    <div className="text-center w-full max-w-[280px] transition-all duration-300 group-hover:-translate-y-1">
                      <span className="font-mono text-base sm:text-lg text-[#c68a2c] font-bold block mb-1.5">{item.year}</span>
                      <h4 className="font-serif font-bold text-2xl sm:text-3xl text-[#123524] tracking-tight mb-2.5">
                        {item.title}
                      </h4>
                      <p className="text-sm sm:text-base font-sans text-brand-ink-soft leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

          </div>
        </section>


        {/* --- Section 4: The Ocean (Full-width scenic quote panel) --- */}
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[450px] sm:h-[550px] overflow-hidden group">
          {/* Cover image */}
          <img 
            src="https://images.unsplash.com/photo-1530143311094-34d807799e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80" 
            alt="Ocean Swim" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b3b24]/90 via-[#0b3b24]/55 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          {/* Content centered */}
          <div className="absolute inset-0 flex flex-col justify-end max-w-[1440px] mx-auto px-6 md:px-10 pb-16 sm:pb-24 text-white z-10">
            <div className="max-w-[850px] space-y-4 text-left">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#c68a2c] font-bold">
                THE OCEAN
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight">
                The hardest ocean is rarely in front of us.
              </h2>
              <p className="text-sm sm:text-base text-white/90 max-w-[620px] leading-relaxed font-sans font-medium">
                Most people meet every challenge twice: once in imagination, once in reality. The first encounter is often harder.
              </p>
            </div>
          </div>
        </section>


        {/* --- Section 5: Evidence (Metrics Cards Grid) --- */}
        <section className="scroll-mt-28">
          <div className="space-y-4 mb-16 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c68a2c] font-bold block">
              EVIDENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-[#123524] tracking-tight">
              The Kilometre is Visible. The Becoming is Not.
            </h2>
            <div className="w-12 h-0.5 bg-[#c68a2c] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Featured Card */}
            <div className="bg-[#123524] text-white p-8 rounded-3xl md:col-span-2 flex flex-col justify-between min-h-[320px] shadow-lg border border-[#1c4430] hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#c68a2c] font-bold uppercase tracking-wider block">OOTY ULTRA · 2026</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-relaxed text-[#FAF8F5]">
                  "Some distances change your legs. Others change your imagination."
                </h3>
              </div>
              <div className="flex justify-between items-baseline mt-8 border-t border-white/10 pt-6">
                <span className="text-sm font-sans font-semibold text-[#FAF8F5]/85">Ultra Marathon Completion</span>
                <span className="font-serif text-5xl sm:text-6xl font-bold text-[#c68a2c] tracking-tighter">60 KM</span>
              </div>
            </div>

            {/* Regular Card 1 */}
            <div className="bg-white border border-brand-line p-8 rounded-3xl flex flex-col justify-between min-h-[320px] shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#c68a2c] font-bold uppercase tracking-wider block">JAIPUR · 2025</span>
                <h4 className="font-serif text-xl font-bold text-[#123524]">One marathon. One new identity.</h4>
                <p className="text-xs sm:text-sm text-brand-ink-soft leading-relaxed">
                  Persistence made visible on a map. High-altitude endurance milestone.
                </p>
              </div>
              <div className="border-t border-brand-line/60 pt-4 flex justify-between items-baseline mt-4">
                <span className="text-xs text-brand-ink-soft font-bold uppercase font-sans">DISTANCE</span>
                <span className="font-serif text-3xl font-bold text-[#123524]">42.2 KM</span>
              </div>
            </div>

            {/* Regular Card 2 */}
            <div className="bg-white border border-brand-line p-8 rounded-3xl flex flex-col justify-between min-h-[320px] shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#c68a2c] font-bold uppercase tracking-wider block">TORONTO · 2026</span>
                <h4 className="font-serif text-xl font-bold text-[#123524]">The journey crossed borders.</h4>
                <p className="text-xs sm:text-sm text-brand-ink-soft leading-relaxed">
                  Possibility became international. Building developmental science bridges globally.
                </p>
              </div>
              <div className="border-t border-brand-line/60 pt-4 flex justify-between items-baseline mt-4">
                <span className="text-xs text-brand-ink-soft font-bold uppercase font-sans">STATUS</span>
                <span className="font-serif text-3xl font-bold text-[#123524]">GLOBAL</span>
              </div>
            </div>

            {/* Regular Card 3 */}
            <div className="bg-white border border-brand-line p-8 rounded-3xl flex flex-col justify-between min-h-[320px] shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#c68a2c] font-bold uppercase tracking-wider block">OCEAN SWIM · 2026</span>
                <h4 className="font-serif text-xl font-bold text-[#123524]">Crossing open waters.</h4>
                <p className="text-xs sm:text-sm text-brand-ink-soft leading-relaxed">
                  Before crossing the water, he crossed disbelief. Open water safety swimming protocols.
                </p>
              </div>
              <div className="border-t border-brand-line/60 pt-4 flex justify-between items-baseline mt-4">
                <span className="text-xs text-brand-ink-soft font-bold uppercase font-sans">OPEN WATER</span>
                <span className="font-serif text-3xl font-bold text-[#123524]">1.5 KM</span>
              </div>
            </div>

            {/* Regular Card 4 */}
            <div className="bg-white border border-brand-line p-8 rounded-3xl flex flex-col justify-between min-h-[320px] shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#c68a2c] font-bold uppercase tracking-wider block">COIMBATORE · 2023</span>
                <h4 className="font-serif text-xl font-bold text-[#123524]">The day possibility became believable.</h4>
                <p className="text-xs sm:text-sm text-brand-ink-soft leading-relaxed">
                  Five kilometres. The smallest number on the page. Perhaps the most important beginning of all.
                </p>
              </div>
              <div className="border-t border-brand-line/60 pt-4 flex justify-between items-baseline mt-4">
                <span className="text-xs text-brand-ink-soft font-bold uppercase font-sans">FIRST STEP</span>
                <span className="font-serif text-3xl font-bold text-[#123524]">5.0 KM</span>
              </div>
            </div>

          </div>
        </section>


        {/* --- Section 6: What Comes Next (Interactive Journey Map) --- */}
        <section id="future" className="scroll-mt-28 space-y-10">
          {/* Header */}
          <div className="text-center space-y-3 max-w-[850px] mx-auto">
            <span className="font-mono text-sm sm:text-base uppercase tracking-[0.2em] text-[#c68a2c] font-bold block">
              THE JOURNEY · ON THE MAP
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-[#123524] tracking-tight">
              The map changed <em className="italic text-[#c68a2c]">because he did.</em>
            </h2>
            <div className="w-12 h-0.5 bg-[#c68a2c] mx-auto mt-2" />
            <p className="text-base sm:text-lg text-brand-ink-soft leading-relaxed max-w-[680px] mx-auto pt-2">
              Every pin is a place where impossible became familiar — from a 5 km start in Coimbatore to a marathon on three continents.
            </p>

            {/* Legend */}
            <div className="flex justify-center items-center gap-8 pt-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-brand-ink-soft">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3F7A52]" /> Completed
              </div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-brand-ink-soft">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c68a2c]" /> Upcoming
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div className="bg-white border border-brand-line/80 rounded-3xl p-2 sm:p-4 shadow-2xl overflow-hidden relative">
            <div className="relative w-full aspect-[1736/906] rounded-2xl overflow-hidden bg-[#EDE6D8]">
              <img 
                src="/journey-map-bg.png" 
                alt="Rithvik World Journey Map" 
                className="w-full h-full object-cover saturate-[0.9]"
              />

              {/* Pins */}
              {mapLocations.map((loc) => {
                const isActive = activeId === loc.id;
                return (
                  <div 
                    key={loc.id}
                    style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                    onMouseEnter={() => setActiveId(loc.id)}
                    onMouseLeave={() => setActiveId(null)}
                    onClick={() => {
                      setActiveId(loc.id);
                      document.getElementById(`entry-${loc.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className="absolute -translate-x-1/2 -translate-y-full cursor-pointer z-20 group"
                  >
                    {/* Detailed Card Tooltip on Hover */}
                    <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 w-56 sm:w-64 bg-[#0F1A13] text-[#F7F4EE] p-3.5 rounded-2xl shadow-2xl border border-[#c68a2c]/40 transition-all duration-300 pointer-events-none z-40 ${isActive ? 'opacity-100 -translate-y-2 scale-100' : 'opacity-0 translate-y-2 scale-95'}`}>
                      <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2 mb-2">
                        <span className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                          loc.status === 'done' 
                            ? 'bg-[#3F7A52]/30 text-[#68D388] border border-[#3F7A52]/50' 
                            : 'bg-[#c68a2c]/30 text-[#EBB668] border border-[#c68a2c]/50'
                        }`}>
                          {loc.status === 'done' ? 'Completed' : 'Upcoming'}
                        </span>
                        <span className="font-mono text-xs font-bold text-[#c68a2c]">
                          {loc.year}
                        </span>
                      </div>
                      <h4 className="font-serif text-sm font-bold text-white leading-snug">
                        {loc.title}
                      </h4>
                      <p className="text-[11px] text-[#C8C2B6] leading-relaxed mt-1 font-sans font-normal whitespace-normal">
                        {loc.desc}
                      </p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-6 border-transparent border-t-[#0F1A13]" />
                    </div>

                    {/* Pulse ring */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full animate-ping opacity-60 ${loc.status === 'done' ? 'bg-[#3F7A52]' : 'bg-[#c68a2c]'}`} />
                    
                    {/* Core dot */}
                    <div className={`w-3.5 h-3.5 rounded-full border-2 border-white shadow-md transition-transform duration-200 ${isActive ? 'scale-125' : ''} ${loc.status === 'done' ? 'bg-[#3F7A52]' : 'bg-[#c68a2c]'}`} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Full-Width Journey Record List UI */}
          <div className="w-full divide-y divide-brand-line/80 border-t border-b border-brand-line/80 my-8">
            {mapLocations.map((loc) => {
              const isActive = activeId === loc.id;
              return (
                <div
                  key={`entry-${loc.id}`}
                  id={`entry-${loc.id}`}
                  onMouseEnter={() => setActiveId(loc.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onClick={() => setActiveId(loc.id)}
                  className={`py-6 px-4 sm:px-8 transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-white shadow-md border-l-4 border-l-[#c68a2c]' 
                      : 'hover:bg-white/60 border-l-4 border-l-transparent'
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
                    {/* Status & Year */}
                    <div className="md:col-span-4 flex items-center gap-3.5">
                      <span className={`font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                        loc.status === 'done'
                          ? 'bg-[#3F7A52]/10 text-[#3F7A52] border-[#3F7A52]/30'
                          : 'bg-[#c68a2c]/10 text-[#c68a2c] border-[#c68a2c]/30'
                      }`}>
                        {loc.status === 'done' ? 'Completed' : 'Upcoming'}
                      </span>
                      <span className="font-mono text-xl sm:text-2xl font-light text-[#c68a2c]">
                        {loc.year}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="md:col-span-8 space-y-1.5">
                      <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#123524] font-light tracking-tight">
                        {loc.title}
                      </h3>
                      <p className="text-sm sm:text-base text-brand-ink-soft leading-relaxed font-sans font-light">
                        {loc.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-xs text-brand-ink-soft italic pt-4 font-medium">
            Autism is real. Possibility must remain open.
          </p>
        </section>

      </div>


      {/* --- Section 7: The Invitation (CTA Section) --- */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full overflow-hidden bg-white text-brand-ink pt-16 pb-24 md:pt-20 md:pb-32 mt-20 group border-t border-brand-line/60 scroll-mt-24"
      >
        {/* Background-Removed Mountain PNG Layer */}
        <img 
          src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/bg-mountain.png"
          alt="Beyond Heights Mountain Silhouette"
          className="absolute inset-0 w-full h-full object-cover object-bottom transition-transform duration-1000 group-hover:scale-105 pointer-events-none opacity-40"
        />

        {/* Bottom smoky blend */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-[920px] mx-auto px-6 text-center space-y-10 text-brand-ink flex flex-col items-center">
          
          <div className="space-y-4 -mt-2">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#c68a2c] font-bold">
              THE INVITATION
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.18] text-brand-ink tracking-tight">
              This was never about running.
            </h2>

            <p className="text-sm md:text-base text-brand-ink-soft max-w-[640px] mx-auto leading-relaxed font-sans font-medium">
              Everyone is born with a résumé. Very few write the one that <span className="italic text-[#c68a2c]">matters.</span>
            </p>
          </div>

          <div className="space-y-8 pt-6 w-full flex flex-col items-center">
            {/* CTA button */}
            <div>
              <a
                href="mailto:hello@beyondheights.org?subject=My%20Own%20Journey"
                className="bg-[#c68a2c] hover:bg-[#a37229] text-white font-sans font-bold text-xs tracking-[0.08em] px-10 py-4 rounded-full uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 cursor-pointer"
              >
                START YOUR OWN JOURNEY <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-brand-ink-soft italic font-medium">Possibility must remain open.</p>
          </div>

        </div>
      </motion.section>

    </div>
  );
};

export default Rithvik;
