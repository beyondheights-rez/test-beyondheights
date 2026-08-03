import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Heart, Users, Globe, Star, Trees, ArrowRight, Quote, Sparkles, Home } from 'lucide-react';

const Impact: React.FC = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  // Active beneficiary state for single image left & 6 points right
  const [activeBeneficiary, setActiveBeneficiary] = useState(0);

  // Mouse 3D tilt & depth animation values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const handTranslateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), springConfig);
  const handTranslateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-18, 18]), springConfig);

  // Beneficiaries data for stacked deck of cards
  const beneficiaries = [
    {
      id: 'ben-autism',
      number: '01 / FOCUS',
      title: 'Children with Autism',
      description: 'We support children across the spectrum to learn, grow, and thrive in their own unique way with personalized therapeutic pacing and dedicated support.',
      image: 'https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image1.jpg',
      cardBg: 'bg-[#FAF8F5]',
      accentColor: 'text-[#c68a2c]',
      buttonColor: 'text-[#c68a2c] hover:text-[#a87220]',
    },
    {
      id: 'ben-down-syndrome',
      number: '02 / INDEPENDENCE',
      title: 'Down Syndrome',
      description: 'Helping children build self-confidence, motor capabilities, and social independence through structured developmental programs.',
      image: 'https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image6.jpg',
      cardBg: 'bg-[#F5EFE6]',
      accentColor: 'text-[#b87c24]',
      buttonColor: 'text-[#b87c24] hover:text-[#966319]',
    },
    {
      id: 'ben-cancer',
      number: '03 / CARE',
      title: 'Navigating Cancer',
      description: 'Walking alongside families during the toughest pathways with comprehensive emotional care, specialized therapy, and family support.',
      image: 'https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image10.jpg',
      cardBg: 'bg-[#F8F2F4]',
      accentColor: 'text-[#9a82dd]',
      buttonColor: 'text-[#7c63c4] hover:text-[#6149a8]',
    },
    {
      id: 'ben-young-adults',
      number: '04 / VOCATION',
      title: 'Young Adults',
      description: 'Preparing young adults for meaningful, vocational, and independent lives through skill acquisition, career mentoring, and community inclusion.',
      image: 'https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image8.jpg',
      cardBg: 'bg-[#123524]',
      textColor: 'text-white',
      descColor: 'text-white/80',
      accentColor: 'text-[#e5b364]',
      buttonColor: 'text-[#e5b364] hover:text-white',
    },
    {
      id: 'ben-families',
      number: '05 / COMMUNITY SUPPORT',
      title: 'Families',
      description: 'Empowering parents and siblings with resilient support systems, practical education, respite guidance, and strong peer networks.',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1000&q=80',
      cardBg: 'bg-[#F6F3EC]',
      accentColor: 'text-[#5aab7c]',
      buttonColor: 'text-[#0d3b26] hover:text-[#185c3e]',
    },
    {
      id: 'ben-communities',
      number: '06 / INCLUSION',
      title: 'Communities',
      description: 'Building inclusive, highly compassionate, and supportive local ecosystems through community advocacy and institutional collaboration.',
      image: 'https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image5.jpg',
      cardBg: 'bg-[#EAF1E9]',
      accentColor: 'text-[#123524]',
      buttonColor: 'text-[#123524] hover:text-[#0a2116]',
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) - 0.5;
    const yPct = ((e.clientY - rect.top) / rect.height) - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="bg-white text-brand-ink min-h-screen">

      {/* --- Hero Section --- */}
      <section 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full min-h-0 lg:min-h-[85vh] flex items-center bg-white border-b border-brand-line pt-28 sm:pt-36 pb-14 sm:pb-20 overflow-hidden [perspective:1000px]"
      >
        {/* Background image & gradient overlays */}
        <div className="absolute inset-0 lg:left-1/2 z-0 overflow-hidden [perspective:1000px]">
          {/* Static Background Image Layer (bg-1.png) */}
          <img 
            src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/bg-1.png" 
            alt="Impact Hero Background" 
            className="w-full h-full object-cover object-right opacity-40 sm:opacity-100"
          />

          {/* Hand Image Layer with 3D Tilt Effect on Cursor Move (hand_.png) */}
          <motion.img 
            src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/hand_.png" 
            alt="Parent holding child's hand" 
            style={{ 
              rotateX, 
              rotateY,
              x: handTranslateX, 
              y: handTranslateY,
              transformStyle: "preserve-3d"
            }}
            className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none drop-shadow-xl scale-105 sm:scale-112 origin-center opacity-40 sm:opacity-100"
          />

          {/* Desktop left-edge smoky transition: blends the left edge of the image with the white page background */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent hidden lg:block pointer-events-none" />
          {/* Mobile bottom smoky transition: blends the bottom edge of the image with the text content */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40 block lg:hidden pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Eyebrow, Title, Description, Metrics */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-left"
          >
            
            {/* Eyebrow & Underline */}
            <div className="space-y-2">
              <span className="font-mono text-xs tracking-[0.15em] text-[#123524] uppercase font-bold">
                OUR IMPACT
              </span>
              <div className="w-6 h-0.5 bg-[#123524]" />
            </div>

            {/* Title: Serif typography with bold font weight matching reference */}
            <h1 className="font-serif text-[32px] sm:text-[56px] lg:text-[68px] font-normal leading-[1.12] sm:leading-[1.08] text-brand-ink tracking-tight">
              We serve the child.<br className="hidden sm:inline" />{" "}
              We strengthen the<br className="hidden sm:inline" />{" "}
              <span className="text-[#c18831] italic font-normal">entire circle</span> around them.
            </h1>

            {/* Description list */}
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-1 font-sans">
              <p>Every child deserves the right support.</p>
              <p>Every family deserves the right partner.</p>
              <p>Every community deserves a more inclusive future.</p>
              <p>At Beyond Heights, we measure our success in the daily transformations of children and families.</p>
            </div>

            {/* Metrics Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-brand-line/60 max-w-[620px]">
              
              {/* Column 1 */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2 sm:border-r sm:border-brand-line/60 sm:pr-4">
                <Sparkles className="w-7 h-7 sm:w-10 sm:h-10 text-[#123524]" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-[#123524] leading-none">
                  CHILDREN
                </span>
              </div>
              
              {/* Column 2 */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2 sm:border-r sm:border-brand-line/60 sm:pr-4">
                <Home className="w-7 h-7 sm:w-10 sm:h-10 text-[#c18831]" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-[#c18831] leading-none">
                  FAMILIES
                </span>
              </div>
              
              {/* Column 3 */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2 sm:border-r sm:border-brand-line/60 sm:pr-4">
                <Users className="w-7 h-7 sm:w-10 sm:h-10 text-[#9a82dd]" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-[#9a82dd] leading-none">
                  COMMUNITIES
                </span>
              </div>
              
              {/* Column 4 */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
                <Heart className="w-7 h-7 sm:w-10 sm:h-10 text-[#5aab7c]" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-[#5aab7c] leading-none">
                  INCLUSIVE FUTURE
                </span>
              </div>
              
            </div>

          </motion.div>

          {/* Right Column: Kept empty to showcase hands image */}
          <div className="lg:col-span-5 hidden lg:block" />

        </div>
      </section>

      {/* Main Grid Wrapper for remaining sections */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 space-y-12 sm:space-y-16 md:space-y-20 mt-10 sm:mt-16">

        {/* --- Primary Beneficiaries Section (Single Image Left, 6 Points Right) --- */}
        <section className="w-full py-4 sm:py-8 scroll-mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center space-y-2.5 sm:space-y-3 mb-8 sm:mb-12 md:mb-16"
          >
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c68a2c] font-bold">
              WHO WE SERVE
            </span>
            <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] sm:leading-[1.08] text-brand-ink tracking-tight">
              Our Primary Beneficiaries
            </h2>
            <div className="w-12 h-0.5 bg-[#c68a2c] mx-auto mt-2" />
            <p className="text-xs sm:text-sm md:text-base text-brand-ink-soft max-w-[620px] mx-auto pt-1 sm:pt-2 font-sans">
              Explore our structured support systems tailored for individuals, families, and communities.
            </p>
          </motion.div>

          {/* 2-Column Layout: Single Image Left, 6 Cards Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Single Sticky Image with Dynamic Words Overlay */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="relative w-full h-[260px] sm:h-[380px] lg:h-[580px] rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-brand-line/80 bg-[#FAF8F5] group">
                {/* Single Constant High-Res Image */}
                <img
                  src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image1.jpg"
                  alt="Our Primary Beneficiaries"
                  loading="eager"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 pointer-events-none" />

                {/* Dynamic Words Overlay */}
                <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 flex flex-col justify-between pointer-events-none">
                  {/* Top Badge Tag */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] sm:text-xs tracking-[0.18em] text-[#e5b364] uppercase font-bold bg-black/40 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-white/10">
                      PRIMARY BENEFICIARY
                    </span>
                    <span className="font-mono text-[10px] sm:text-xs text-white/70 font-bold bg-black/30 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-white/10">
                      0{activeBeneficiary + 1} / 0{beneficiaries.length}
                    </span>
                  </div>

                  {/* Bottom Text / Words */}
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={`words-${beneficiaries[activeBeneficiary].id}`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="p-3.5 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-md border border-white/20 text-white space-y-1 sm:space-y-2 shadow-2xl"
                    >
                      <div className="font-mono text-[10px] sm:text-xs tracking-[0.15em] text-[#e5b364] font-bold uppercase">
                        {beneficiaries[activeBeneficiary].number}
                      </div>
                      <h3 className="font-serif text-lg sm:text-2xl lg:text-3xl font-normal leading-snug text-white">
                        {beneficiaries[activeBeneficiary].title}
                      </h3>
                      <p className="text-[11px] sm:text-xs lg:text-sm text-white/80 leading-relaxed font-sans line-clamp-2 sm:line-clamp-none">
                        {beneficiaries[activeBeneficiary].description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right Column: 6 Points Cards Stacked Vertically */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              {beneficiaries.map((card, idx) => {
                const isActive = activeBeneficiary === idx;

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    onClick={() => setActiveBeneficiary(idx)}
                    onMouseEnter={() => setActiveBeneficiary(idx)}
                    className={`group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 ${
                      isActive
                        ? 'bg-white border-[#c68a2c] shadow-[0_12px_32px_rgba(198,138,44,0.12)] ring-1 ring-[#c68a2c]/40 translate-x-0.5 sm:translate-x-2'
                        : 'bg-[#F8F6F1] border-brand-line/60 hover:bg-white hover:border-[#c68a2c]/50 hover:shadow-md'
                    }`}
                  >
                    {/* Left side of card: Big Number & Tag Pill */}
                    <div className="flex sm:flex-col items-center sm:items-start justify-between w-full sm:w-auto shrink-0 gap-1.5">
                      <div
                        className={`font-sans font-bold text-xl sm:text-3xl transition-colors duration-300 ${
                          isActive ? 'text-[#c68a2c]' : 'text-brand-ink/40 group-hover:text-[#c68a2c]'
                        }`}
                      >
                        0{idx + 1}
                      </div>
                      <span
                        className={`font-mono text-[9px] sm:text-[10px] tracking-wider uppercase font-bold px-2 sm:px-2.5 py-0.5 rounded-full transition-colors duration-300 ${
                          isActive
                            ? 'bg-[#c68a2c]/15 text-[#c68a2c]'
                            : 'bg-black/5 text-brand-muted group-hover:bg-[#c68a2c]/10 group-hover:text-[#c68a2c]'
                        }`}
                      >
                        {card.number.split('/')[1]?.trim() || card.number}
                      </span>
                    </div>

                    {/* Right side of card: Title, Description, Action button */}
                    <div className="space-y-1 sm:space-y-1.5 flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3
                          className={`font-serif text-lg sm:text-2xl font-normal leading-tight transition-colors duration-300 ${
                            isActive ? 'text-brand-ink' : 'text-brand-ink/90 group-hover:text-brand-ink'
                          }`}
                        >
                          {card.title}
                        </h3>
                        <ArrowRight
                          className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                            isActive
                              ? 'text-[#c68a2c] translate-x-1 opacity-100'
                              : 'text-brand-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:text-[#c68a2c]'
                          }`}
                        />
                      </div>
                      <p className="text-xs sm:text-sm text-brand-ink-soft leading-relaxed font-sans">
                        {card.description}
                      </p>
                      <div className="pt-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate('/our-approach');
                          }}
                          className={`inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider ${
                            isActive ? 'text-[#c68a2c]' : 'text-brand-muted group-hover:text-[#c68a2c]'
                          } transition-colors cursor-pointer`}
                        >
                          Our Structured Pacing <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* --- Who Makes It Possible --- */}
        <section className="space-y-8 sm:space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-2.5 sm:space-y-3"
          >
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c68a2c] font-bold">
              ECOSYSTEM & PARTNERS
            </span>
            <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] sm:leading-[1.08] text-brand-ink tracking-tight">
              Who Makes It Possible
            </h2>
            <div className="w-12 h-0.5 bg-[#c68a2c] mx-auto mt-2" />
            <p className="text-xs sm:text-sm md:text-base text-brand-ink-soft max-w-[560px] mx-auto pt-1 font-sans">
              Our multidisciplinary ecosystem bringing together specialized expertise, families, and community partners.
            </p>
          </motion.div>

          {/* Vertical Bullet Line + Contiguous List */}
          <div className="relative pl-6 sm:pl-10 md:pl-12 max-w-[1140px] mx-auto">
            {/* Vertical Connecting Line on Far Left */}
            <div className="absolute left-2 sm:left-2.5 md:left-4 top-4 bottom-4 w-[2px] bg-[#c68a2c]/30" />

            <div className="border-t border-b border-brand-line/60 divide-y divide-brand-line/60">
              {[
                {
                  number: '01',
                  title: 'THERAPISTS & EXPERTS',
                  desc: 'Multidisciplinary experts bringing clinical science and deep compassion together',
                },
                {
                  number: '02',
                  title: 'EDUCATORS & MENTORS',
                  desc: 'Inclusive, personalized education adapted to every child’s unique pacing',
                },
                {
                  number: '03',
                  title: 'VOLUNTEERS',
                  desc: 'Passionate individuals who amplify our reach, engagement, and direct support',
                },
                {
                  number: '04',
                  title: 'DONORS & BACKERS',
                  desc: 'Generous supporters whose belief turns possibilities into transformational impact',
                },
                {
                  number: '05',
                  title: 'CORPORATE PARTNERS',
                  desc: 'Forward-looking organizations prioritizing purpose alongside performance',
                },
              ].map((item, idx) => (
                <motion.div
                  key={`partner-timeline-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                  className="group relative flex flex-col md:flex-row md:items-center justify-between py-4 sm:py-6 md:py-8 px-3.5 sm:px-6 md:px-8 cursor-pointer rounded-xl sm:rounded-2xl transition-all duration-300 ease-out hover:bg-[#123524] shadow-none hover:shadow-lg"
                >
                  {/* Timeline Bullet Dot */}
                  <div className="absolute -left-[19px] sm:-left-8 md:-left-[39px] top-6 sm:top-1/2 -translate-y-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-white border-2 border-[#c68a2c] group-hover:bg-[#e5b364] group-hover:border-[#e5b364] group-hover:scale-125 transition-all duration-300 ease-out shadow-sm z-10" />

                  {/* Left Column: Big Serif Number */}
                  <div className="w-full md:w-1/6 mb-1 md:mb-0 flex items-center relative z-10">
                    <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#c68a2c]/60 group-hover:text-[#e5b364] transition-colors duration-300 ease-out">
                      {item.number}
                    </span>
                  </div>

                  {/* Center Column: Bold Sans Uppercase Title */}
                  <div className="w-full md:w-2/6 mb-1.5 md:mb-0 relative z-10">
                    <h4 className="font-sans font-bold text-xs sm:text-sm md:text-base tracking-[0.12em] uppercase text-brand-ink group-hover:text-white transition-colors duration-300 ease-out">
                      {item.title}
                    </h4>
                  </div>

                  {/* Right Column: Italic Serif Description */}
                  <div className="w-full md:w-3/6 flex items-center justify-between md:justify-end gap-3 sm:gap-4 relative z-10">
                    <span className="font-serif italic text-xs sm:text-sm md:text-base text-brand-ink-soft group-hover:text-white/90 transition-colors duration-300 ease-out max-w-[480px]">
                      {item.desc}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#c68a2c] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-[#e5b364] transition-all duration-300 ease-out shrink-0" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Commitments Section --- */}
        <motion.section 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          
          {/* Dark Box */}
          <div className="bg-[#0d3b26] text-white rounded-2xl p-6 sm:p-10 flex flex-col justify-center min-h-[220px] sm:min-h-[300px] border border-[#0f4d32]/30 relative overflow-hidden shadow-sm">
            <div className="relative z-10 space-y-3 sm:space-y-4 max-w-full sm:max-w-[80%]">
              <div className="font-mono text-xs tracking-[0.1em] text-[#c68a2c] font-bold uppercase">
                OUR COMMITMENT
              </div>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl leading-snug">
                We serve with empathy, evidence, and excellence.
              </h2>
            </div>
            
            {/* Silhouette tree backing shape */}
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10 pointer-events-none">
              <Trees className="w-36 sm:w-48 h-36 sm:h-48 text-[#c68a2c]" />
            </div>
          </div>

          {/* Light Box */}
          <div className="bg-[#f6f4ed] border border-brand-line rounded-2xl p-6 sm:p-10 flex flex-col justify-center min-h-[220px] sm:min-h-[300px] relative overflow-hidden shadow-sm">
            <div className="relative z-10 space-y-3 sm:space-y-4">
              <Quote className="w-6 sm:w-8 h-6 sm:h-8 text-[#c68a2c] rotate-180 opacity-40" />
              <h2 className="font-serif text-xl sm:text-2xl leading-snug text-brand-ink">
                Inclusion is not charity. It is the future we choose to build—together.
              </h2>
              <p className="font-mono text-xs uppercase tracking-wider text-brand-muted">
                — Beyond Heights
              </p>
            </div>
          </div>

        </motion.section>

      </div>

      {/* --- Full-Width Bottom CTA Section with Smoky White Mountain Background --- */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full overflow-hidden bg-white text-brand-ink pt-12 sm:pt-16 pb-16 sm:pb-24 md:pt-20 md:pb-32 mt-12 sm:mt-20 group"
      >
        {/* Background-Removed Mountain PNG Layer (bg-mountain.png) */}
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
              BUILD THE FUTURE WITH US
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.18] text-brand-ink tracking-tight">
              When we support every child, we create a <span className="text-[#c68a2c] italic">better world for all.</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-brand-ink-soft max-w-[640px] mx-auto leading-relaxed font-sans font-medium">
              Join our mission to empower children across the autism spectrum, support families, and build truly inclusive communities.
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
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-brand-ink">Strengthen Families</span>
              </div>
              <div className="flex flex-col items-center space-y-1.5 sm:space-y-2">
                <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-[#c68a2c]" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-brand-ink">Build Inclusion</span>
              </div>
              <div className="flex flex-col items-center space-y-1.5 sm:space-y-2">
                <Star className="w-6 h-6 sm:w-7 sm:h-7 text-[#c68a2c]" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-brand-ink">Create Change</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="w-full sm:w-auto">
              <button
                onClick={() => navigate('/partner')}
                className="w-full sm:w-auto bg-[#c68a2c] hover:bg-[#a87220] text-white font-sans font-bold text-xs tracking-[0.08em] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
              >
                GET INVOLVED NOW <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </motion.section>
    </div>
  );
};

export default Impact;
