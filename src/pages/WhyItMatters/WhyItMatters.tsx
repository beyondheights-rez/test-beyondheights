import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Sparkles, 
  Compass, 
  Brain, 
  Home, 
  HeartHandshake, 
  ArrowRight, 
  Trees, 
  Quote, 
  Star,
  Globe,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const WhyItMatters: React.FC = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  // Active pillar state for horizontal carousel slide
  const [activePillar, setActivePillar] = useState(0);

  // Auto slide timer for horizontal carousel (slides every 4.5s)
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePillar((prev) => (prev + 1) % 5);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const nextPillar = () => {
    setActivePillar((prev) => (prev + 1) % 5);
  };

  const prevPillar = () => {
    setActivePillar((prev) => (prev - 1 + 5) % 5);
  };

  // Mouse 3D tilt & depth animation values for Hero section
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const imgTranslateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const imgTranslateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), springConfig);

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

  // Why It Matters core pillars data with official Beyond Heights image assets
  const pillars = [
    {
      id: 'pillar-potential',
      number: '01 / POTENTIAL',
      title: 'Every Life Has Potential',
      description: 'With personalized therapeutic pacing and dedicated support, every child can learn, grow, and contribute in meaningful ways.',
      icon: Brain,
      image: 'https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image1.jpg',
      badgeColor: 'text-[#c68a2c]',
    },
    {
      id: 'pillar-village',
      number: '02 / VILLAGE',
      title: 'Families Need a Village',
      description: 'No family should walk this journey alone. We act as a resilient village providing emotional care, practical guidance, and peer networks.',
      icon: Home,
      image: 'https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image3.jpg',
      badgeColor: 'text-[#5aab7c]',
    },
    {
      id: 'pillar-society',
      number: '03 / SOCIETY',
      title: 'Inclusion Builds Society',
      description: 'When we embrace neurodiversity and special needs, our local ecosystems and institutions naturally become kinder, wiser, and stronger.',
      icon: Users,
      image: 'https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image5.jpg',
      badgeColor: 'text-[#dd9a3c]',
    },
    {
      id: 'pillar-independence',
      number: '04 / INDEPENDENCE',
      title: 'Support for Independence',
      description: 'Early intervention and structured vocational development build lifelong confidence, self-reliance, and dignity for young adults.',
      icon: HeartHandshake,
      image: 'https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image8.jpg',
      badgeColor: 'text-[#9a82dd]',
    },
    {
      id: 'pillar-compassion',
      number: '05 / COMPASSION',
      title: 'Compassion Drives Change',
      description: 'Small, deliberate acts of inclusion transform individual trajectories, strengthen families, and ripple across generations.',
      icon: Heart,
      image: 'https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image6.jpg',
      badgeColor: 'text-[#dd7a9e]',
    },
  ];

  return (
    <div className="bg-white text-brand-ink min-h-screen">
      
      {/* --- Hero Section (Matching Impact Page Hero Aesthetics & 3D Tilt) --- */}
      <section 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full min-h-0 lg:min-h-[85vh] flex items-center bg-white border-b border-brand-line pt-28 sm:pt-36 pb-14 sm:pb-20 overflow-hidden [perspective:1000px]"
      >
        {/* Background smoky overlay (Image on Left Side) */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[44%] z-0 overflow-hidden [perspective:1000px]">
          <motion.img 
            src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image5.jpg" 
            alt="Why It Matters Hero" 
            style={{ 
              rotateX, 
              rotateY,
              x: imgTranslateX, 
              y: imgTranslateY,
              transformStyle: "preserve-3d"
            }}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-40 sm:opacity-90 pointer-events-none drop-shadow-xl scale-105 origin-center"
          />

          {/* Right-edge & bottom gradient overlays matching Hero design */}
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent hidden lg:block pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/50 block lg:hidden pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Spacer to showcase image on the left 44% */}
          <div className="lg:col-span-5 hidden lg:block" />

          {/* Right Column: Eyebrow, Title, Description, Pillars filling the right side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-left w-full"
          >
            
            {/* Eyebrow & Underline */}
            <div className="space-y-2">
              <span className="font-mono text-xs tracking-[0.15em] text-[#123524] uppercase font-bold">
                WHY IT MATTERS
              </span>
              <div className="w-6 h-0.5 bg-[#123524]" />
            </div>

            {/* Title - Filling full width of right column */}
            <h1 className="font-serif text-[30px] sm:text-[52px] lg:text-[60px] font-normal leading-[1.12] sm:leading-[1.1] text-brand-ink tracking-tight w-full">
              Every child deserves a life of <span className="text-[#c68a2c] italic font-normal">dignity, opportunity, and joy.</span>
            </h1>

            {/* Subtitle - Expanded max width to balance right side */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed w-full max-w-[680px] font-sans">
              At Beyond Heights, we walk alongside children and young adults with autism, Down syndrome, and families navigating cancer to help them live with confidence, inclusion, and lifelong purpose.
            </p>

            {/* Metrics & Pillars Row - Spanning right side */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-brand-line/60 w-full max-w-[680px]">
              
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2 sm:border-r sm:border-brand-line/60 sm:pr-4">
                <Heart className="w-7 h-7 sm:w-10 sm:h-10 text-[#123524]" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-[#123524] leading-none">
                  DIGNITY FIRST
                </span>
              </div>
              
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2 sm:border-r sm:border-brand-line/60 sm:pr-4">
                <Users className="w-7 h-7 sm:w-10 sm:h-10 text-[#c68a2c]" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-[#c68a2c] leading-none">
                  REAL INCLUSION
                </span>
              </div>
              
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2 sm:border-r sm:border-brand-line/60 sm:pr-4">
                <Sparkles className="w-7 h-7 sm:w-10 sm:h-10 text-[#9a82dd]" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-[#9a82dd] leading-none">
                  POTENTIAL
                </span>
              </div>
              
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
                <Compass className="w-7 h-7 sm:w-10 sm:h-10 text-[#5aab7c]" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-[#5aab7c] leading-none">
                  PURPOSE
                </span>
              </div>
              
            </div>

          </motion.div>

        </div>
      </section>

      {/* Main Grid Wrapper for remaining sections */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 space-y-12 sm:space-y-16 md:space-y-24 mt-10 sm:mt-16">

        {/* --- The Reality Section (Stat Metrics Full Viewport Width Container) --- */}
        <section id="reality-section" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] scroll-mt-24 space-y-8 sm:space-y-10 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center space-y-2.5 sm:space-y-3"
            >
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c68a2c] font-bold">
                DATA & DISPARITIES
              </span>
              <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] sm:leading-[1.08] text-brand-ink tracking-tight">
                The Reality We Cannot Ignore
              </h2>
              <div className="w-12 h-0.5 bg-[#c68a2c] mx-auto mt-2" />
              <p className="text-xs sm:text-sm md:text-base text-brand-ink-soft max-w-[600px] mx-auto pt-1 font-sans">
                Systemic challenges faced by neurodivergent children and families highlight why intervention matters today.
              </p>
            </motion.div>
          </div>

          {/* 100% Full-Width Edge-to-Edge Container */}
          <div className="w-full bg-[#FAF8F5] border-y border-brand-line/80 py-8 sm:py-16 px-4 sm:px-6 md:px-12 shadow-sm">
            <div className="max-w-[1440px] mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-10 lg:gap-6 items-start text-center">
              {[
                {
                  icon: Brain,
                  value: '1 in 36',
                  label: 'children estimated on the autism spectrum worldwide (WHO)',
                },
                {
                  icon: Sparkles,
                  value: '> 95%',
                  label: 'adult special needs unemployment in India (NASSCOM)',
                },
                {
                  icon: HeartHandshake,
                  value: '< 10%',
                  label: 'children receiving early developmental & therapeutic support (UNICEF)',
                },
                {
                  icon: Home,
                  value: '100%',
                  label: 'families facing severe daily emotional & financial strain',
                },
                {
                  icon: Globe,
                  value: 'Inclusion',
                  label: 'the only compassionate & viable way forward for society',
                  isItalic: true,
                },
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={`stat-circle-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className={`group flex flex-col items-center text-center space-y-2.5 sm:space-y-3 cursor-pointer ${
                      idx === 4 ? 'col-span-2 lg:col-span-1' : ''
                    }`}
                  >
                    {/* Static Icon Badge */}
                    <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-[#c68a2c] text-white flex items-center justify-center shadow-md">
                      <IconComp className="w-6 h-6 sm:w-10 sm:h-10 text-white" />
                    </div>

                    {/* Big Serif Bold Number / Stat */}
                    <div className={`font-serif text-2xl sm:text-4xl lg:text-[44px] font-bold text-brand-ink tracking-tight pt-1 sm:pt-2 ${
                      item.isItalic ? 'italic text-xl sm:text-4xl' : ''
                    }`}>
                      {item.value}
                    </div>

                    {/* Centered Description Text */}
                    <p className="text-[11px] sm:text-sm font-sans font-semibold text-brand-ink-soft max-w-[220px] sm:max-w-[200px] mx-auto leading-relaxed">
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- Why Inclusion Matters (Full Viewport Edge-to-Edge Auto-Slide Banner) --- */}
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-2 sm:py-4 scroll-mt-20 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center space-y-2.5 sm:space-y-3 mb-8 sm:mb-10 md:mb-12"
            >
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c68a2c] font-bold">
                CORE PILLARS
              </span>
              <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] sm:leading-[1.08] text-brand-ink tracking-tight">
                Why Inclusion Matters
              </h2>
              <div className="w-12 h-0.5 bg-[#c68a2c] mx-auto mt-2" />
              <p className="text-xs sm:text-sm md:text-base text-brand-ink-soft max-w-[620px] mx-auto pt-1 sm:pt-2 font-sans">
                Explore the core principles driving our mission for individuals, families, and communities.
              </p>
            </motion.div>
          </div>

          {/* Full Horizontal Bleed Container */}
          <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[600px] overflow-hidden shadow-2xl bg-slate-900 group">
            {/* Sliding Image Background */}
            <AnimatePresence mode="wait">
              <motion.img
                key={`slide-img-${pillars[activePillar].id}`}
                src={pillars[activePillar].image}
                alt={pillars[activePillar].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Reduced Black Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Content Container */}
            <div className="absolute inset-0 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 p-5 sm:p-12 lg:p-16 flex flex-col justify-end pointer-events-none z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`slide-content-${pillars[activePillar].id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="space-y-2 sm:space-y-4 max-w-[680px] text-left pointer-events-auto pb-4 sm:pb-6"
                >
                  {/* Eyebrow Tag Pill */}
                  <div className="inline-flex items-center gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#e5b364] font-mono text-[10px] sm:text-xs tracking-[0.18em] font-bold uppercase">
                    <span>{pillars[activePillar].number}</span>
                  </div>

                  {/* Main Title */}
                  <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-white tracking-tight">
                    {pillars[activePillar].title}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="text-white/90 font-sans text-xs sm:text-base leading-relaxed max-w-[580px] line-clamp-3 sm:line-clamp-none">
                    {pillars[activePillar].description}
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
              {pillars.map((p, idx) => (
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

        {/* --- Commitments & Philosophy Section (Matching Impact Page Box Design) --- */}
        <motion.section 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {/* Dark Forest Green Box */}
          <div className="bg-[#0d3b26] text-white rounded-2xl p-6 sm:p-10 flex flex-col justify-center min-h-[220px] sm:min-h-[300px] border border-[#0f4d32]/30 relative overflow-hidden shadow-sm">
            <div className="relative z-10 space-y-3 sm:space-y-4 max-w-full sm:max-w-[85%]">
              <div className="font-mono text-xs tracking-[0.1em] text-[#c68a2c] font-bold uppercase">
                OUR PHILOSOPHY
              </div>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl leading-snug">
                Inclusion is not charity. It is a fundamental human right.
              </h2>
            </div>
            
            {/* Silhouette tree backing shape */}
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10 pointer-events-none">
              <Trees className="w-36 sm:w-48 h-36 sm:h-48 text-[#c68a2c]" />
            </div>
          </div>

          {/* Light Off-White Quote Box */}
          <div className="bg-[#f6f4ed] border border-brand-line rounded-2xl p-6 sm:p-10 flex flex-col justify-center min-h-[220px] sm:min-h-[300px] relative overflow-hidden shadow-sm">
            <div className="relative z-10 space-y-3 sm:space-y-4">
              <Quote className="w-6 sm:w-8 h-6 sm:h-8 text-[#c68a2c] rotate-180 opacity-40" />
              <h2 className="font-serif text-xl sm:text-2xl leading-snug text-brand-ink">
                When we include one child, we build a more compassionate society for all.
              </h2>
              <p className="font-mono text-xs uppercase tracking-wider text-brand-muted">
                — Beyond Heights
              </p>
            </div>
          </div>
        </motion.section>

      </div>

      {/* --- Full-Width Bottom CTA Section (Matching Impact Page Mountain Background CTA) --- */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full overflow-hidden bg-white text-brand-ink pt-12 sm:pt-16 pb-16 sm:pb-24 md:pt-20 md:pb-32 mt-12 sm:mt-20 group"
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
          
          {/* Main Heading & Subtitle */}
          <div className="space-y-3 sm:space-y-4 -mt-2">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#c68a2c] font-bold">
              JOIN THE MOVEMENT
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.18] text-brand-ink tracking-tight">
              A more inclusive world <span className="text-[#c68a2c] italic">begins with you.</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-brand-ink-soft max-w-[640px] mx-auto leading-relaxed font-sans font-medium">
              Your support creates opportunities, opens doors, and transforms lives for generations to come.
            </p>
          </div>

          {/* Pillars & CTA Button */}
          <div className="space-y-6 sm:space-y-8 pt-4 sm:pt-6 w-full flex flex-col items-center">
            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-10 w-full max-w-[760px]">
              <div className="flex flex-col items-center space-y-1.5 sm:space-y-2">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-[#c68a2c]" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-brand-ink">Give with Purpose</span>
              </div>
              <div className="flex flex-col items-center space-y-1.5 sm:space-y-2">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#c68a2c]" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-brand-ink">Change a Life</span>
              </div>
              <div className="flex flex-col items-center space-y-1.5 sm:space-y-2">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-[#c68a2c]" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-brand-ink">Strengthen Families</span>
              </div>
              <div className="flex flex-col items-center space-y-1.5 sm:space-y-2">
                <Star className="w-6 h-6 sm:w-7 sm:h-7 text-[#c68a2c]" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-brand-ink">Build Compassion</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="w-full sm:w-auto">
              <button
                onClick={() => navigate('/donate')}
                className="w-full sm:w-auto bg-[#c68a2c] hover:bg-[#a87220] text-white font-sans font-bold text-xs tracking-[0.08em] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
              >
                DONATE NOW <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </motion.section>
    </div>
  );
};

export default WhyItMatters;
