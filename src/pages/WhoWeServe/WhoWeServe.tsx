import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Users, Globe, Puzzle, Ribbon, HeartHandshake, Baby, BookOpen, User, Briefcase, Shield, UserCheck, Handshake, Leaf, ArrowRight, BookOpenCheck, ChevronLeft, ChevronRight } from 'lucide-react';

const WhoWeServe: React.FC = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const groups = [
    {
      id: 'autism',
      number: '01',
      title: 'Children & Young Adults with Autism',
      description: 'From early intervention to adulthood, we provide therapies, education, and life skills that unlock potential and build independence.',
      points: [
        'Early intervention support',
        'Clinical therapies & educational support',
        'Life skills & vocational career training',
        'Social & emotional capacity development',
        'Transition pathways to adulthood'
      ],
      icon: Puzzle,
      image: 'https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image6.jpg'
    },
    {
      id: 'down-syndrome',
      number: '02',
      title: 'Children & Young Adults with Down Syndrome',
      description: 'We nurture unique developmental abilities, encourage proactive inclusion, and create opportunities for active, meaningful lives.',
      points: [
        'Developmental clinical therapies',
        'Inclusive educational & school support',
        'Independence life skills training',
        'Physical health & core well-being',
        'Active community inclusion groups'
      ],
      icon: Users,
      image: 'https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image3.jpg'
    },
    {
      id: 'cancer-support',
      number: '03',
      title: 'Families Navigating Cancer',
      description: 'We stand with families during cancer journeys—offering customized emotional support, financial assistance, and practical logistics.',
      points: [
        'Emotional counselling & guidance',
        'Financial aid & family assistance',
        'Resource navigation & hospital logistics',
        'Entire family mental well-being',
        'Hope & healing community support'
      ],
      icon: Ribbon,
      image: 'https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image5.jpg'
    },
    {
      id: 'caregivers',
      number: '04',
      title: 'Caregivers & Families',
      description: 'We empower families with knowledge, supportive training, and a warm community so they never walk this journey alone.',
      points: [
        'Parent training & counseling blocks',
        'Mental guidance & community support',
        'Respite care & sibling support networks',
        'Caregiver advocacy & networks',
        'Community awareness initiatives'
      ],
      icon: HeartHandshake,
      image: 'https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image10.jpg'
    }
  ];

  const [activeGroup, setActiveGroup] = useState(0);

  // Auto slide timer for horizontal carousel (slides every 4.5s)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveGroup((prev) => (prev + 1) % groups.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [groups.length]);

  const nextGroup = () => {
    setActiveGroup((prev) => (prev + 1) % groups.length);
  };

  const prevGroup = () => {
    setActiveGroup((prev) => (prev - 1 + groups.length) % groups.length);
  };

  return (
    <div className="bg-[#FAF8F5] text-brand-ink min-h-screen">
      {/* Hero Section Banner with Dark Forest Green Background */}
      <section className="relative w-full bg-[#123524] text-white pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 md:px-10 rounded-none shadow-[0_20px_40px_rgba(0,0,0,0.06)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-950/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-[1440px] mx-auto w-full relative z-10 space-y-8 sm:space-y-12">
          {/* Top Row: Title Left, Description + CTA Button Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-end">
            
            {/* Title Column */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-left">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#c78b32] font-bold">
                WHO WE SERVE
              </span>
              <h1 className="font-serif text-3xl sm:text-[56px] lg:text-[72px] font-normal leading-[1.08] sm:leading-[1.05] tracking-tight text-white">
                Every child.<br />
                Every family.<br />
                <span className="italic text-[#c78b32]">Every step of the journey.</span>
              </h1>
            </div>

            {/* Description & CTA Column */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-left pb-2">
              <p className="text-[#FAF8F5]/90 text-xs sm:text-[15px] md:text-base leading-relaxed font-sans">
                Beyond Heights supports children and young adults with autism, Down syndrome, and families navigating cancer. We walk alongside them—at every stage, with care that is personal and purpose-driven.
              </p>
              <div>
                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#c78b32] hover:bg-[#b07823] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md group/btn cursor-pointer"
                >
                  Partner With Us <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>

          </div>

          {/* Featured Large Image with Glassmorphic Overlay Card */}
          <div className="relative rounded-[20px] sm:rounded-[36px] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.25)] bg-[#0d2a1c] group">
            <img 
              src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image3.jpg" 
              alt="Who We Serve Journey" 
              className="w-full h-[260px] sm:h-[480px] md:h-[580px] object-cover transition-transform duration-700 group-hover:scale-102"
            />
            {/* Dark gradient shadow inside image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Glassmorphic Overlay Card on bottom-left */}
            <div className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 z-20 max-w-[220px] sm:max-w-[340px] bg-black/50 backdrop-blur-xl border border-white/20 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl text-left text-white shadow-2xl">
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#c78b32] uppercase font-bold">
                BEYOND HEIGHTS MISSION
              </span>
              <div className="mt-1.5 sm:mt-2 text-xs sm:text-base font-serif italic text-white/95 leading-relaxed">
                "We don't just support individuals. We strengthen families. We build futures."
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Grid Wrapper for remaining sections */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 space-y-12 sm:space-y-24 mt-12 sm:mt-24">

        {/* --- The People We Serve Section --- */}
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-2 sm:py-4 scroll-mt-20 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center space-y-2.5 sm:space-y-3 mb-8 sm:mb-10 md:mb-12"
            >
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c78b32] font-bold">
                THE PEOPLE WE SERVE
              </span>
              <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] sm:leading-[1.08] text-brand-ink tracking-tight">
                Our Primary Beneficiaries
              </h2>
              <div className="w-12 h-0.5 bg-[#c78b32] mx-auto mt-2" />
              <p className="text-xs sm:text-sm md:text-base text-brand-ink-soft max-w-[620px] mx-auto pt-1 sm:pt-2 font-sans">
                Explore the focus areas of our support programs, built for individuals, caregivers, and families.
              </p>
            </motion.div>
          </div>

          {/* Full Horizontal Bleed Container */}
          <div className="relative w-full h-[460px] sm:h-[580px] lg:h-[650px] overflow-hidden shadow-2xl bg-slate-900 group">
            {/* Sliding Image Background */}
            <AnimatePresence mode="wait">
              <motion.img
                key={`group-img-${groups[activeGroup].id}`}
                src={groups[activeGroup].image}
                alt={groups[activeGroup].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

            {/* Content Container */}
            <div className="absolute inset-0 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 p-5 sm:p-12 lg:p-16 flex flex-col justify-end pointer-events-none z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`group-content-${groups[activeGroup].id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="space-y-2 sm:space-y-4 max-w-[750px] text-left pointer-events-auto pb-4 sm:pb-6"
                >
                  {/* Eyebrow Tag Pill */}
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#c78b32] font-mono text-[10px] sm:text-xs tracking-[0.18em] font-bold uppercase">
                    <span>{groups[activeGroup].number}</span>
                  </div>

                  {/* Main Title */}
                  <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-white tracking-tight">
                    {groups[activeGroup].title}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="text-white/95 font-sans text-xs sm:text-base leading-relaxed max-w-[620px] line-clamp-2 sm:line-clamp-none">
                    {groups[activeGroup].description}
                  </p>

                  {/* Bullet points grid */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-white/85 font-sans text-[11px] sm:text-sm font-semibold max-w-[580px] pt-1 sm:pt-2">
                    {groups[activeGroup].points.map((pt, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="text-[#c78b32] text-base sm:text-lg leading-none">•</span> {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrow Controls */}
            <div className="absolute inset-y-0 left-2 right-2 sm:left-8 sm:right-8 flex items-center justify-between pointer-events-none z-20">
              <button
                onClick={prevGroup}
                className="w-9 h-9 sm:w-13 sm:h-13 rounded-full bg-black/35 hover:bg-black/70 backdrop-blur-md text-white border border-white/25 flex items-center justify-center pointer-events-auto cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={nextGroup}
                className="w-9 h-9 sm:w-13 sm:h-13 rounded-full bg-black/35 hover:bg-black/70 backdrop-blur-md text-[#faf9f6] border border-white/25 flex items-center justify-center pointer-events-auto cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Bullet Indicators */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-2.5 z-20 pointer-events-auto">
              {groups.map((_, idx) => (
                <button
                  key={`slide-indicator-${idx}`}
                  onClick={() => setActiveGroup(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeGroup === idx ? 'w-6 sm:w-8 bg-[#c78b32]' : 'w-2 bg-white/40 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </section>

        {/* --- Journey Timeline --- */}
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#FAF8F5] border-y border-brand-line/70 py-12 sm:py-16 md:py-24 overflow-hidden scroll-mt-28">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
            
            {/* Header */}
            <div className="text-center space-y-2.5 sm:space-y-3 mb-10 sm:mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c68a2c] font-bold block">
                JOURNEY MILESTONES
              </span>
              <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] sm:leading-[1.08] text-brand-ink tracking-tight">
                We Serve Across the Journey
              </h2>
              <div className="w-12 h-0.5 bg-[#c68a2c] mx-auto mt-2" />
              <p className="text-xs sm:text-sm md:text-base text-brand-ink-soft max-w-[620px] mx-auto pt-1 sm:pt-2 font-sans">
                A lifecycle of custom, evidence-based developmental support from childhood into adulthood.
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
                    title: 'Early Years',
                    desc: 'Early identification, customized intervention, and support pathways.',
                    icon: Baby,
                  },
                  {
                    title: 'School Years',
                    desc: 'Adaptive clinical therapies, inclusive schooling, and functional learning.',
                    icon: BookOpen,
                  },
                  {
                    title: 'Adolescence',
                    desc: 'Building confidence, social interaction skills, and physical endurance.',
                    icon: User,
                  },
                  {
                    title: 'Young Adulthood',
                    desc: 'Vocational skill setups, active internships, and independent living.',
                    icon: Briefcase,
                  },
                  {
                    title: 'Family Support',
                    desc: 'Empowering parent training blocks and sibling respite support networks.',
                    icon: Users,
                  },
                  {
                    title: 'Community Inclusion',
                    desc: 'Advocating for accessible sports clubs, spaces, and workplaces.',
                    icon: Heart,
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

        {/* --- Commitment Section --- */}
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-brand-bg-alt border-y border-brand-line/70 py-12 sm:py-16 md:py-24 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 space-y-8 sm:space-y-12">
            
            <div className="text-center space-y-2.5 sm:space-y-3 mb-10 sm:mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c78b32] font-bold block">
                OUR PROMISE
              </span>
              <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] sm:leading-[1.08] text-brand-ink tracking-tight">
                Our Commitment to Those We Serve
              </h2>
              <div className="w-12 h-0.5 bg-[#c78b32] mx-auto mt-2" />
              <p className="text-xs sm:text-sm md:text-base text-brand-ink-soft max-w-[700px] mx-auto pt-1 sm:pt-2 font-sans">
                We walk alongside children and families, providing clinical standards, expert pacing, and unwavering personal respect.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 lg:gap-x-0 lg:divide-x lg:divide-slate-300">
              
              <div className="space-y-3 sm:space-y-4 text-center px-2 sm:px-4">
                <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-[#c78b32] mx-auto" />
                <h4 className="font-serif font-bold text-xs sm:text-sm tracking-wide text-[#123524] uppercase mt-1 sm:mt-2">Respect & Dignity</h4>
                <p className="text-[11px] sm:text-xs text-brand-ink-soft leading-normal">
                  Every single individual is valued, respected, and heard.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 text-center px-2 sm:px-4">
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-[#c78b32] mx-auto" />
                <h4 className="font-serif font-bold text-xs sm:text-sm tracking-wide text-[#123524] uppercase mt-1 sm:mt-2">Safety & Trust</h4>
                <p className="text-[11px] sm:text-xs text-brand-ink-soft leading-normal">
                  Nurturing, secure, and supportive developmental physical spaces.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 text-center px-2 sm:px-4">
                <UserCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#c78b32] mx-auto" />
                <h4 className="font-serif font-bold text-xs sm:text-sm tracking-wide text-[#123524] uppercase mt-1 sm:mt-2">Personalized Care</h4>
                <p className="text-[11px] sm:text-xs text-brand-ink-soft leading-normal">
                  Every program map is tailored to individual speeds.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 text-center px-2 sm:px-4">
                <BookOpenCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#c78b32] mx-auto" />
                <h4 className="font-serif font-bold text-xs sm:text-sm tracking-wide text-[#123524] uppercase mt-1 sm:mt-2">Continuous Growth</h4>
                <p className="text-[11px] sm:text-xs text-brand-ink-soft leading-normal">
                  Constant investment in active therapy tools, research, and science.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 text-center px-2 sm:px-4">
                <Handshake className="w-7 h-7 sm:w-8 sm:h-8 text-[#c78b32] mx-auto" />
                <h4 className="font-serif font-bold text-xs sm:text-sm tracking-wide text-[#123524] uppercase mt-1 sm:mt-2">Long-Term Partner</h4>
                <p className="text-[11px] sm:text-xs text-brand-ink-soft leading-normal">
                  Walking alongside families for multi-year milestones.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 text-center px-2 sm:px-4 col-span-2 sm:col-span-1 lg:col-span-1">
                <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-[#c78b32] mx-auto" />
                <h4 className="font-serif font-bold text-xs sm:text-sm tracking-wide text-[#123524] uppercase mt-1 sm:mt-2">Inclusive Society</h4>
                <p className="text-[11px] sm:text-xs text-brand-ink-soft leading-normal">
                  Creating active advocacy models to build community acceptance.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* --- Full-Width Bottom CTA Section --- */}
        <motion.section 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full overflow-hidden bg-white text-brand-ink pt-12 sm:pt-16 pb-16 sm:pb-24 md:pt-20 md:pb-32 mt-12 sm:mt-20 group border-t border-brand-line/60 scroll-mt-24"
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
                Different journeys. One belief. <span className="text-[#c68a2c] italic">Every life thrives.</span>
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
                  <HeartHandshake className="w-6 h-6 sm:w-7 sm:h-7 text-[#c68a2c]" />
                  <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-brand-ink">Transform a Life</span>
                </div>
                <div className="flex flex-col items-center space-y-1.5 sm:space-y-2">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#c68a2c]" />
                  <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-brand-ink">Strengthen Families</span>
                </div>
                <div className="flex flex-col items-center space-y-1.5 sm:space-y-2">
                  <Leaf className="w-6 h-6 sm:w-7 sm:h-7 text-[#c68a2c]" />
                  <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-brand-ink">Build Inclusion</span>
                </div>
                <div className="flex flex-col items-center space-y-1.5 sm:space-y-2">
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-[#c68a2c]" />
                  <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-brand-ink">Support Families</span>
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
    </div>
  );
};

export default WhoWeServe;
