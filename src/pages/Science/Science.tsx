import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Users, Brain, ShieldCheck, Eye, ClipboardCheck, Target, Lightbulb, TrendingUp, RefreshCw, BarChart2, Globe, FileText, Lock, Scale, Handshake, Compass, ArrowRight, MessageSquare, Activity, UserPlus, Sprout, BookOpen, Star } from 'lucide-react';

const Science: React.FC = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-20 bg-brand-bg text-brand-ink min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 space-y-24">

        {/* --- Hero Section --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Left Column - Aligned Text & 4 Boxes */}
          <div className="flex flex-col justify-center space-y-8 text-left">
            <div className="space-y-5">
              <div className="font-mono text-xs tracking-[0.15em] text-[#c5832b] font-bold uppercase flex items-center gap-3">
                <span className="w-8 h-0.5 bg-[#c5832b]" />
                THE SCIENCE
              </div>
              
              <h1 className="font-serif text-3xl sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] text-brand-ink tracking-tight">
                We are guided by evidence.<br />
                Grounded in research.<br />
                <span className="text-[#c5832b] italic">Driven by human potential.</span>
              </h1>
              
              <p className="text-sm sm:text-base text-brand-ink-soft leading-relaxed w-full">
                At Beyond Heights, everything we do is informed by science and shaped by empathy. We combine global research, data, and real-world experience to create interventions that are effective, compassionate, and life-changing.
              </p>

              {/* Quote Block */}
              <div className="border-l-2 border-[#c5832b] pl-4 italic text-sm md:text-base text-[#0b3b24] leading-relaxed font-serif w-full pt-0.5">
                "Science helps us understand potential. Compassion helps us unlock it."
              </div>
            </div>

            {/* 4 Boxes for Content & Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white border border-brand-line/80 p-5 rounded-xl shadow-sm space-y-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between items-start text-left">
                <div className="space-y-3 flex flex-col items-start text-left w-full">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-brand-line/60 flex items-center justify-center text-[#c5832b] shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#0b3b24] tracking-tight text-left">Research Informed</h4>
                  <p className="text-xs text-brand-ink-soft leading-relaxed text-left">We learn from and contribute to the best global developmental science.</p>
                </div>
              </div>

              <div className="bg-white border border-brand-line/80 p-5 rounded-xl shadow-sm space-y-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between items-start text-left">
                <div className="space-y-3 flex flex-col items-start text-left w-full">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-brand-line/60 flex items-center justify-center text-[#c5832b] shrink-0">
                    <BarChart2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#0b3b24] tracking-tight text-left">Data Driven</h4>
                  <p className="text-xs text-brand-ink-soft leading-relaxed text-left">Using metric analysis to continuously track milestones and adjust pathways.</p>
                </div>
              </div>

              <div className="bg-white border border-brand-line/80 p-5 rounded-xl shadow-sm space-y-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between items-start text-left">
                <div className="space-y-3 flex flex-col items-start text-left w-full">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-brand-line/60 flex items-center justify-center text-[#c5832b] shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#0b3b24] tracking-tight text-left">Human Centered</h4>
                  <p className="text-xs text-brand-ink-soft leading-relaxed text-left">Seeing the unique child behind every benchmark and dataset.</p>
                </div>
              </div>

              <div className="bg-white border border-brand-line/80 p-5 rounded-xl shadow-sm space-y-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between items-start text-left">
                <div className="space-y-3 flex flex-col items-start text-left w-full">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-brand-line/60 flex items-center justify-center text-[#c5832b] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#0b3b24] tracking-tight text-left">Ethical & Responsible</h4>
                  <p className="text-xs text-brand-ink-soft leading-relaxed text-left">Unwavering commitment to protect child dignity, privacy, and rights.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Clean Image Banner */}
          <div className="relative flex items-center">
            <div className="rounded-2xl overflow-hidden border border-brand-line shadow-[0_12px_40px_rgba(0,0,0,0.06)] bg-white p-2 w-full h-full flex">
              <img 
                src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image6.jpg" 
                alt="The Science" 
                className="w-full h-[450px] sm:h-[550px] lg:h-full min-h-[500px] object-cover rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* --- Built on Science Section --- */}
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-brand-bg-alt border-y border-brand-line/70 py-16 md:py-24 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 space-y-12">
            
            <div className="text-center space-y-3 mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c5832b] font-bold block">
                BUILT ON SCIENCE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-brand-ink tracking-tight">
                Grounded in Multi-Disciplinary Research
              </h2>
              <div className="w-12 h-0.5 bg-[#c5832b] mx-auto mt-2" />
              <p className="text-sm md:text-base text-brand-ink-soft max-w-[700px] mx-auto pt-2 font-sans">
                We integrate the latest research from multiple developmental disciplines to create a holistic, personalized, and effective support environment.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-12 gap-x-2 lg:gap-x-0 lg:divide-x lg:divide-slate-300">
              
              <div className="space-y-3 text-center px-4">
                <Brain className="w-8 h-8 text-[#c5832b] mx-auto" />
                <h4 className="font-serif font-bold text-sm tracking-wide text-[#123524] uppercase mt-2">Neuroscience</h4>
                <p className="text-xs text-brand-ink-soft leading-normal">Brain development, sensory maps, and learning pathways.</p>
              </div>

              <div className="space-y-3 text-center px-4">
                <UserPlus className="w-8 h-8 text-[#c5832b] mx-auto" />
                <h4 className="font-serif font-bold text-sm tracking-wide text-[#123524] uppercase mt-2">Developmental Psych</h4>
                <p className="text-xs text-brand-ink-soft leading-normal">Cognitive, social, and emotional milestones.</p>
              </div>

              <div className="space-y-3 text-center px-4">
                <MessageSquare className="w-8 h-8 text-[#c5832b] mx-auto" />
                <h4 className="font-serif font-bold text-sm tracking-wide text-[#123524] uppercase mt-2">Speech & Language</h4>
                <p className="text-xs text-brand-ink-soft leading-normal">Communication, expressive tools, and language acquisition.</p>
              </div>

              <div className="space-y-3 text-center px-4">
                <Activity className="w-8 h-8 text-[#c5832b] mx-auto" />
                <h4 className="font-serif font-bold text-sm tracking-wide text-[#123524] uppercase mt-2">Occupational Therapy</h4>
                <p className="text-xs text-brand-ink-soft leading-normal">Daily living skills, motor planning, and sensory integration.</p>
              </div>

              <div className="space-y-3 text-center px-4">
                <Heart className="w-8 h-8 text-[#c5832b] mx-auto" />
                <h4 className="font-serif font-bold text-sm tracking-wide text-[#123524] uppercase mt-2">Behavioral Science</h4>
                <p className="text-xs text-brand-ink-soft leading-normal">Positive behavior supports and functional analysis.</p>
              </div>

              <div className="space-y-3 text-center px-4">
                <BookOpen className="w-8 h-8 text-[#c5832b] mx-auto" />
                <h4 className="font-serif font-bold text-sm tracking-wide text-[#123524] uppercase mt-2">Special Education</h4>
                <p className="text-xs text-brand-ink-soft leading-normal">Evidence-based adaptive teaching curriculum structures.</p>
              </div>

              <div className="space-y-3 text-center px-4">
                <Users className="w-8 h-8 text-[#c5832b] mx-auto" />
                <h4 className="font-serif font-bold text-sm tracking-wide text-[#123524] uppercase mt-2">Family & Social</h4>
                <p className="text-xs text-[#64748b] leading-normal">Strengthening home systems and community support nets.</p>
              </div>

            </div>
          </div>
        </section>

        {/* --- Scientific Pillars Section --- */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <h3 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-[#c5832b]">
              OUR SCIENTIFIC PILLARS
            </h3>
            <div className="w-12 h-0.5 bg-[#c5832b] mx-auto" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            <div className="bg-[#0b3b24] text-white rounded-xl p-6 text-center space-y-4 border border-[#114f31]/30">
              <Eye className="w-8 h-8 text-[#c5832b] mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider">Observe</h4>
              <p className="text-xs text-[#f4f4f0]/90 leading-normal">Observing natural behaviors with deep curiosity and no assumptions.</p>
            </div>

            <div className="bg-[#0b3b24] text-white rounded-xl p-6 text-center space-y-4 border border-[#114f31]/30">
              <ClipboardCheck className="w-8 h-8 text-[#c5832b] mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider">Assess</h4>
              <p className="text-xs text-[#f4f4f0]/90 leading-normal">Utilizing validated clinical diagnostic metrics and expert consultations.</p>
            </div>

            <div className="bg-[#0b3b24] text-white rounded-xl p-6 text-center space-y-4 border border-[#114f31]/30">
              <Target className="w-8 h-8 text-[#c5832b] mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider">Understand</h4>
              <p className="text-xs text-[#f4f4f0]/90 leading-normal">Analyzing patterns to map developmental strengths and core challenges.</p>
            </div>

            <div className="bg-[#0b3b24] text-white rounded-xl p-6 text-center space-y-4 border border-[#114f31]/30">
              <Lightbulb className="w-8 h-8 text-[#c5832b] mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider">Design</h4>
              <p className="text-xs text-[#f4f4f0]/90 leading-normal">Drafting personalized, highly specific program target modules.</p>
            </div>

            <div className="bg-[#0b3b24] text-white rounded-xl p-6 text-center space-y-4 border border-[#114f31]/30">
              <Sprout className="w-8 h-8 text-[#c5832b] mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider">Implement</h4>
              <p className="text-xs text-[#f4f4f0]/90 leading-normal">Delivering quality, consistent therapy, life skills, and academic training.</p>
            </div>

            <div className="bg-[#0b3b24] text-white rounded-xl p-6 text-center space-y-4 border border-[#114f31]/30">
              <TrendingUp className="w-8 h-8 text-[#c5832b] mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider">Measure</h4>
              <p className="text-xs text-[#f4f4f0]/90 leading-normal">Recording regular milestone datasets to continuously iterate methods.</p>
            </div>
          </div>
        </section>

        {/* --- Evidence Based Timeline --- */}
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#FAF8F5] border-y border-brand-line/70 py-16 md:py-24 overflow-hidden scroll-mt-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            
            {/* Header */}
            <div className="text-center space-y-3 mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c68a2c] font-bold block">
                OUR EVIDENCE-BASED APPROACH
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-brand-ink tracking-tight">
                Our Scientific Process
              </h2>
              <div className="w-12 h-0.5 bg-[#c68a2c] mx-auto mt-2" />
              <p className="text-sm md:text-base text-brand-ink-soft max-w-[620px] mx-auto pt-2 font-sans">
                Our systematic methodology combines diagnostic precision with adaptive therapies to drive real-world transformation.
              </p>
            </div>

            {/* Timeline Steps Horizontal Container */}
            <div className="relative w-full pt-10 pb-4 overflow-x-auto no-scrollbar scroll-smooth">
              
              {/* Continuous Horizontal Connecting Line */}
              <div className="absolute top-[80px] left-4 right-4 h-[2px] bg-slate-200/80 z-0">
                {/* Start/End boundary dots */}
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
              <div className="flex justify-between items-stretch gap-8 min-w-[1100px] px-4 relative z-10">
                {[
                  {
                    title: 'Identify',
                    desc: 'Determine developmental profiles and family goals.',
                    icon: Users,
                  },
                  {
                    title: 'Assess',
                    desc: 'Perform diagnostics and observations.',
                    icon: ClipboardCheck,
                  },
                  {
                    title: 'Analyse',
                    desc: 'Identify functional hurdles and triggers.',
                    icon: Target,
                  },
                  {
                    title: 'Plan',
                    desc: 'Map milestones and daily routines.',
                    icon: FileText,
                  },
                  {
                    title: 'Intervene',
                    desc: 'Consistent clinical and school interventions.',
                    icon: Heart,
                  },
                  {
                    title: 'Evaluate',
                    desc: 'Record outcome parameters and data metrics.',
                    icon: BarChart2,
                  },
                  {
                    title: 'Evolve',
                    desc: 'Scale successes and optimize functional program loops.',
                    icon: RefreshCw,
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
                      className="flex-1 flex flex-col items-center group text-center space-y-6"
                    >
                      {/* Step Badge / Icon Circle */}
                      <div className="relative flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-[#123524] flex items-center justify-center transition-all duration-300 group-hover:scale-105 z-10 relative">
                          <IconComp className="w-8 h-8 text-[#c68a2c]" />
                        </div>
                      </div>

                      {/* Content Card below */}
                      <div className="text-center w-full max-w-[220px] transition-all duration-300 group-hover:-translate-y-1">
                        <h4 className="font-serif font-bold text-lg text-[#123524] tracking-tight mb-2">
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

        {/* --- Research Outcomes Impact Section (Redesigned matching "At Beyond Heights" editorial format) --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left pt-2 items-stretch">
          
          {/* Left Column: Brand Statement & Landscape Image */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c5832b] font-bold block">
                RESEARCH. OUTCOMES. IMPACT.
              </span>
              <h2 className="font-serif text-[#123524] text-3xl sm:text-[40px] leading-tight tracking-tight uppercase">
                TRANSPARENCY & DATA,
              </h2>
              <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
                We believe in continuous learning. By combining clinical precision with transparent outcomes, we ensure every developmental pathway leads to real-world progress.
              </p>
            </div>
            
            {/* Clean Landscape Image */}
            <div className="overflow-hidden border border-brand-line/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] bg-white p-1 rounded-lg">
              <img 
                src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image7.jpg" 
                alt="Research Outcomes Impact" 
                className="w-full h-[220px] object-cover rounded"
              />
            </div>
          </div>

          {/* Right Column: 2x2 Clean Divided Grid Block */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 border border-brand-line/70 bg-white shadow-sm rounded-lg overflow-hidden">
            
            {/* Grid 1: Frameworks (Top Left) */}
            <div className="border-b sm:border-r border-brand-line/70 p-8 flex flex-col justify-between items-start min-h-[170px] text-left">
              <span className="font-sans text-[44px] font-bold text-[#c68a2c] leading-none select-none">
                50+
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 leading-relaxed mt-4">
                Evidence-based developmental frameworks utilized to guide personalized clinical paths.
              </p>
            </div>

            {/* Grid 2: Active Plans (Top Right) */}
            <div className="border-b border-brand-line/70 p-8 flex flex-col justify-between items-start min-h-[170px] text-left">
              <span className="font-sans text-[44px] font-bold text-[#c68a2c] leading-none select-none">
                100+
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 leading-relaxed mt-4">
                Individual case plans actively tracked through regular progress diagnostics.
              </p>
            </div>

            {/* Grid 3: Global Research (Bottom Left) */}
            <div className="border-b sm:border-b-0 sm:border-r border-brand-line/70 p-8 flex flex-col justify-between items-start min-h-[170px] text-left">
              <span className="font-sans text-[36px] font-bold text-[#c68a2c] leading-none select-none font-medium">
                Global
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 leading-relaxed mt-4">
                Collaborating with developmental diagnostic research partners worldwide.
              </p>
            </div>

            {/* Grid 4: Solid Accent Color block (Bottom Right) */}
            <div className="p-8 bg-[#123524] text-white flex flex-col justify-between min-h-[170px]">
              <p className="font-serif italic text-sm sm:text-base text-white/95 leading-relaxed">
                We track milestone outcomes to secure real-world independence for every child.
              </p>
              <button 
                onClick={() => navigate('/partner')}
                className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#c68a2c] hover:text-[#e5b364] transition-colors mt-4 self-start cursor-pointer"
              >
                Get Involved <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* --- Commitment to Ethical Science (Redesigned matching "Data & Disparities" circular column layout) --- */}
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden scroll-mt-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            
            {/* Header */}
            <div className="text-center space-y-3 mb-12">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c68a2c] font-bold block">
                ETHICAL STANDARDS
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-brand-ink tracking-tight">
                Our Commitment to Ethical Science
              </h2>
              <div className="w-12 h-0.5 bg-[#c68a2c] mx-auto mt-2" />
              
              <div className="max-w-[800px] mx-auto pt-6 text-center italic font-serif text-base sm:text-lg text-[#0b3b24] leading-relaxed">
                "Science shows us what is possible. Compassion makes it possible for every child."
              </div>
            </div>

          </div>

          {/* 100% Full-Width Edge-to-Edge Container */}
          <div className="w-full bg-[#FAF8F5] border-y border-brand-line/80 py-16 md:py-20 px-6 md:px-12 shadow-sm mt-8">
            <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6 items-start text-center">
              {[
                {
                  icon: ShieldCheck,
                  title: 'Safety & Well-being',
                  label: 'Protecting developmental paths with physical & sensory safe-guards.',
                },
                {
                  icon: Lock,
                  title: 'Data Privacy',
                  label: 'Unwavering commitment to protect child dignity, privacy, and rights.',
                },
                {
                  icon: Scale,
                  title: 'Ethical Standards',
                  label: 'Maintaining rigorous transparency and clinical milestone protocols.',
                },
                {
                  icon: Users,
                  title: 'Family Partners',
                  label: 'Ensuring parents are central partners to milestone progress loops.',
                },
                {
                  icon: Handshake,
                  title: 'Respect & Dignity',
                  label: 'Creating supportive environments where every individual feels valued.',
                },
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={`ethics-col-${idx}`}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="flex flex-col items-center text-center space-y-4"
                  >
                    {/* Circle Badge */}
                    <div className="w-18 h-18 rounded-full bg-[#123524] text-[#c68a2c] flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105">
                      <IconComp className="w-7 h-7" />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#123524] pt-1 sm:pt-2">
                      {item.title}
                    </h3>

                    {/* Description Label */}
                    <p className="text-[11px] sm:text-xs lg:text-sm font-sans font-medium text-brand-ink-soft max-w-[220px] mx-auto leading-relaxed">
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
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
        className="relative w-full overflow-hidden bg-white text-brand-ink pt-12 sm:pt-16 pb-16 sm:pb-24 md:pt-20 md:pb-32 mt-12 sm:mt-20 group border-t border-brand-line/60 scroll-mt-24"
      >
        {/* Background-Removed Mountain PNG Layer */}
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
              When science and compassion come together, <span className="text-[#c68a2c] italic">limitless potential</span> becomes real.
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-brand-ink-soft max-w-[640px] mx-auto leading-relaxed font-sans font-medium">
              Join us in translating evidence-based research into daily transformations, developmental progress, and a future of dignity.
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
                className="w-full sm:w-auto bg-[#c68a2c] hover:bg-[#a37229] text-white font-sans font-bold text-xs tracking-[0.08em] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
              >
                GET INVOLVED <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[11px] sm:text-xs text-brand-ink-soft italic font-medium">Every contribution creates lasting change.</p>
          </div>

        </div>
      </motion.section>
    </div>
  );
};

export default Science;
