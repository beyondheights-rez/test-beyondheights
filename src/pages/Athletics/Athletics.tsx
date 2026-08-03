import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Puzzle, Ribbon, Brain, Heart, TrendingUp, Users, Footprints, 
  Calendar, Sun, Handshake, Play, ArrowRight, HeartCrack, HelpCircle, 
  Trees, Activity, Sprout, Fingerprint, Check, Lock, ChevronLeft, 
  ChevronRight, Compass, Shield, Award, Sparkles, Globe
} from 'lucide-react';

const Athletics: React.FC = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  // State for active principle in Marathon Principles Carousel / List
  const [activePrinciple, setActivePrinciple] = useState(0);

  // Causes list
  const causes = [
    { title: 'Autism Spectrum', icon: Puzzle, color: 'text-amber-500' },
    { title: 'Down Syndrome', icon: Ribbon, color: 'text-emerald-500' },
    { title: 'Cancer Support', icon: Ribbon, color: 'text-rose-500' },
    { title: 'Disability & Access', icon: HelpCircle, color: 'text-blue-500' },
    { title: 'Mental Well-being', icon: Brain, color: 'text-purple-500' },
    { title: 'Physical Health', icon: Activity, color: 'text-teal-500' },
    { title: 'Diabetes & Metabolism', icon: Sprout, color: 'text-green-500' },
    { title: 'Digital Vulnerability', icon: Lock, color: 'text-indigo-500' },
    { title: 'Financial Resilience', icon: TrendingUp, color: 'text-amber-600' },
    { title: 'Grief & Recovery', icon: HeartCrack, color: 'text-pink-500' },
    { title: 'Community Inclusion', icon: Users, color: 'text-emerald-600' }
  ];

  // 12 Marathon Principles
  const principles = [
    {
      number: '01',
      title: 'This is not a marathon about running.',
      subtitle: 'It is a marathon about continuing.',
      description: 'Continuing after the diagnosis. Continuing after the phone call. Continuing after loss. Continuing when the road changes and the destination disappears from view.',
      points: [
        'Resilience through daily routine',
        'Strength in sustained effort',
        'Turning adversity into action',
        'Forward movement despite uncertainty'
      ],
      icon: Footprints,
      image: 'https://images.unsplash.com/photo-1502224562085-639556652f33?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      number: '02',
      title: 'The mountain is a metaphor.',
      subtitle: 'Whatever life asks us to carry and navigate.',
      description: 'The mountain is whatever life places in front of us and asks us to carry, navigate, or grow through. No two mountains are the same. No two climbs should ever be compared.',
      points: [
        'Respecting individual pacing',
        'Navigating unique challenges',
        'Focusing on inner growth',
        'Honoring personal milestones'
      ],
      icon: Trees,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      number: '03',
      title: 'We have been taught to admire the summit.',
      subtitle: 'Most courage happens during the climb.',
      description: 'We live in a culture that celebrates the summit. But true courage does not look like a single photograph. The summit gets the praise; the climb reveals the character.',
      points: [
        'Celebrating daily discipline',
        'Value in unphotographed effort',
        'Quiet persistence over applause',
        'Dignity in every stride'
      ],
      icon: Compass,
      image: 'https://images.unsplash.com/photo-1522346513757-54c552451fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      number: '04',
      title: 'The mountain is not the hero.',
      subtitle: 'We focus on the person standing within it.',
      description: 'At Beyond Heights, we do not begin with what happened to someone. We begin with the person still standing inside it, ready to build capability and strength.',
      points: [
        'Person-centered development',
        'Strengths over limitations',
        'Empowerment over pity',
        'Building lifelong autonomy'
      ],
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      number: '05',
      title: 'Growing beyond does not mean escape.',
      subtitle: 'It means becoming larger than what tried to contain you.',
      description: 'Growing beyond does not mean getting over a challenge or pretending it never happened. It means your challenge no longer gets the final word in defining your life.',
      points: [
        'Expanding personal boundaries',
        'Overcoming imposed limits',
        'Building enduring resilience',
        'Defining your own narrative'
      ],
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      number: '06',
      title: 'The modern mountains.',
      subtitle: 'Supporting new forms of human vulnerability.',
      description: 'Technology has created extraordinary possibilities, but also new forms of vulnerability—digital cybercrime, isolation, and financial loss. They too deserve support and community.',
      points: [
        'Support for modern challenges',
        'Restoring trust & security',
        'Empathy without judgment',
        'Community safety nets'
      ],
      icon: Fingerprint,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      number: '07',
      title: 'Why we run.',
      subtitle: 'For the underestimated, the fighters, and the caregivers.',
      description: 'We run for the child whose potential was underestimated. We run for families navigating cancer. We run for caregivers who carry more than is seen. And we run for ourselves.',
      points: [
        'Advocating for neurodiversity',
        'Supporting family caregivers',
        'Honor for cancer fighters',
        'Personal renewal & health'
      ],
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      number: '08',
      title: 'One marathon. Many mountains.',
      subtitle: 'Different journeys, one shared promise.',
      description: 'Though our individual struggles are unique, our shared human need is identical. At the Beyond Heights Marathon, no one climbs alone.',
      points: [
        'Unified community purpose',
        'Shared empathy across cause',
        'Solidarity in action',
        'Mutual support networks'
      ],
      icon: Handshake,
      image: 'https://images.unsplash.com/photo-1541534401786-2077ee8c4083?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      number: '09',
      title: 'Run your mountain.',
      subtitle: 'For the hill you climbed or the one still ahead.',
      description: 'Run for the mountain you have conquered. Run for the climb still ahead. Run for someone who cannot run beside you. Run to make another person’s climb feel less lonely.',
      points: [
        'Personal dedication runs',
        'Tribute to loved ones',
        'Fostering shared courage',
        'Creating visible hope'
      ],
      icon: Award,
      image: 'https://images.unsplash.com/photo-1502224562085-639556652f33?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      number: '10',
      title: 'The race changes when we move together.',
      subtitle: 'Progress is measured by who was not left behind.',
      description: 'This is a marathon where turning back to help someone may be the most meaningful way to move forward. True victory is collective achievement.',
      points: [
        'Inclusive athletic pacing',
        'Shared finish line joy',
        'Peer encouragement',
        'Leaving no one behind'
      ],
      icon: Users,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      number: '11',
      title: 'Beyond Heights defined.',
      subtitle: 'Rising beyond what life says is possible.',
      description: 'Beyond Heights has never meant rising above other people. It means rising beyond what life says is possible for yourself, measured against your own past boundaries.',
      points: [
        'Redefining human capability',
        'Personal best over competition',
        'Breakthrough development',
        'Lifelong growth mindset'
      ],
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      number: '12',
      title: 'What your step makes possible.',
      subtitle: 'Turning registrations into real-world impact.',
      description: 'Every step you take, every registration, and every sponsorship directly funds structured therapy programs, inclusive athletics, and family support systems.',
      points: [
        'Funding autism therapy',
        'Expanding athletic programs',
        'Supporting family respite',
        'Building inclusive spaces'
      ],
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const nextPrinciple = () => {
    setActivePrinciple((prev) => (prev + 1) % principles.length);
  };

  const prevPrinciple = () => {
    setActivePrinciple((prev) => (prev - 1 + principles.length) % principles.length);
  };

  return (
    <div className="bg-[#FAF8F5] text-brand-ink min-h-screen">
      
      {/* ======================================================== */}
      {/* HERO SECTION BANNER - Full Background Image with Text Overlay */}
      {/* ======================================================== */}
      <section className="relative w-full min-h-[80vh] sm:min-h-[85vh] flex items-center bg-[#123524] text-white pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 md:px-10 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
        
        {/* Full-Bleed Background Image Layer */}
        <img 
          src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/index-Hero-section/family3.JPG" 
          alt="Beyond Heights Marathon Hero Background" 
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none transform scale-102 transition-transform duration-1000"
        />

        {/* Multi-Layer Dark Gradient Overlays for High Contrast & Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-[#123524]/75 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-950/40 via-transparent to-transparent pointer-events-none" />

        {/* Text Content Directly Overlaid In Front of Background Image */}
        <div className="max-w-[1440px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Text Content Left Column */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6 text-left">
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#c78b32] font-bold">
                THE BEYOND EVENTS · MARATHON 2026
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[72px] font-normal leading-[1.08] sm:leading-[1.04] tracking-tight text-white drop-shadow-lg">
              Every life will be tested.<br />
              <span className="italic text-[#c78b32]">What happens next</span><br />
              reveals our resilience.
            </h1>

            {/* Subtitle Description */}
            <p className="text-white/95 text-xs sm:text-[16px] md:text-lg leading-relaxed font-sans max-w-[660px] drop-shadow-md">
              Different events. Different stories. Different people. One purpose. The Beyond Heights Marathon brings together athletes, neurodivergent children, families, and communities to run for capability, inclusion, and hope.
            </p>

            {/* Action Buttons Group */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 sm:gap-4 pt-2">
              <button
                onClick={() => navigate('/donate')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full bg-[#c78b32] hover:bg-[#b07823] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group/btn cursor-pointer"
              >
                Register for Marathon <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
              <button
                onClick={() => navigate('/story')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/30 text-white font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current text-[#c78b32]" /> Watch the Story
              </button>
            </div>
          </div>

          {/* Glassmorphic Philosophy Quote Card Overlay Right Column */}
          <div className="lg:col-span-4 flex lg:justify-end items-end">
            <div className="bg-black/55 backdrop-blur-xl border border-white/20 p-5 sm:p-7 rounded-2xl sm:rounded-3xl text-left text-white shadow-2xl space-y-3 max-w-[420px] hover:border-white/30 transition-all duration-300">
              <span className="text-[10px] font-mono tracking-widest text-[#c78b32] uppercase font-bold block">
                MARATHON PHILOSOPHY
              </span>
              <div className="text-sm sm:text-base md:text-lg font-serif italic text-white/95 leading-relaxed">
                "Not every step is fast. But every step forward matters. No one climbs alone."
              </div>
              <div className="pt-1 flex items-center gap-2 text-xs text-white/70 font-sans font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#c78b32]" /> Beyond Heights Movement
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 1: DIFFERENT CAUSES. ONE PURPOSE. (ICON BADGES) */}
      {/* ======================================================== */}
      <section className="bg-[#123524] text-white border-t border-white/10 py-10 sm:py-14 px-4 sm:px-6 md:px-10">
        <div className="max-w-[1440px] mx-auto space-y-6 sm:space-y-8">
          <div className="text-center space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#c78b32] font-bold block">
              DIFFERENT CAUSES. ONE PURPOSE.
            </span>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-normal text-white">
              We Run for Every Mountain Life Presents
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {causes.map((cause, idx) => {
              const IconComp = cause.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-3.5 sm:p-4 text-center flex flex-col items-center space-y-2 hover:bg-white/10 transition-all duration-300 group cursor-default"
                >
                  <IconComp className={`w-6 h-6 ${cause.color} transition-transform group-hover:scale-110`} />
                  <span className="font-sans font-bold text-xs tracking-wide uppercase text-white/90">
                    {cause.title}
                  </span>
                </div>
              );
            })}
            <div className="bg-[#c78b32]/20 border border-[#c78b32]/40 rounded-xl p-3.5 sm:p-4 text-center flex flex-col items-center justify-center space-y-1 col-span-2 sm:col-span-1">
              <Sparkles className="w-6 h-6 text-[#c78b32]" />
              <span className="font-sans font-bold text-xs tracking-wide uppercase text-[#c78b32]">
                Your Mountain
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Container for middle sections */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 space-y-12 sm:space-y-24 mt-12 sm:mt-24">

        {/* ======================================================== */}
        {/* SECTION 2: TWO EXPRESSIONS, ONE BELIEF */}
        {/* ======================================================== */}
        <section className="space-y-8 sm:space-y-12">
          <div className="text-center space-y-2.5 sm:space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c78b32] font-bold block">
              OUR FOUNDATIONAL PHILOSOPHY
            </span>
            <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] sm:leading-[1.08] text-brand-ink tracking-tight">
              Two Expressions. <span className="text-[#c78b32] italic">One Belief.</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#c78b32] mx-auto mt-2" />
            <p className="text-xs sm:text-sm md:text-base text-brand-ink-soft max-w-[620px] mx-auto pt-1 sm:pt-2 font-sans">
              Resilience is built both individually in human spirit and structurally within organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Beyond Heights Card */}
            <div className="bg-[#F8F6F1] border border-brand-line rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#123524] text-[#c78b32] font-mono text-xs font-bold uppercase tracking-wider">
                  HUMAN RESILIENCE
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#123524] font-normal">
                  Beyond Heights
                </h3>
                <p className="text-xs sm:text-sm text-brand-ink-soft leading-relaxed font-sans">
                  The human expression of resilience. We build capability, endurance, speech, motor coordination, and self-belief in neurodivergent children, young adults, and their caregivers.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-brand-ink font-medium">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c78b32] shrink-0" /> Structured autism intervention & clinical therapies
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c78b32] shrink-0" /> Specialized athletics & endurance running
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c78b32] shrink-0" /> Caregiver empowerment & family support
                  </li>
                </ul>
              </div>

              <div>
                <button
                  onClick={() => navigate('/about')}
                  className="inline-flex items-center gap-2 bg-[#123524] hover:bg-[#0d2a1c] text-white font-sans font-bold text-xs tracking-wider px-6 py-3 rounded-full uppercase transition-all duration-300 cursor-pointer"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Rezilyens Card */}
            <div className="bg-[#F8F6F1] border border-brand-line rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c78b32] text-white font-mono text-xs font-bold uppercase tracking-wider">
                  ENTERPRISE RESILIENCE
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#123524] font-normal">
                  Rezilyens
                </h3>
                <p className="text-xs sm:text-sm text-brand-ink-soft leading-relaxed font-sans">
                  The enterprise expression of resilience. We help organizations build adaptive systems, leadership strength, and inclusive workplace cultures that thrive under change.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-brand-ink font-medium">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c78b32] shrink-0" /> Organizational adaptive systems & strategy
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c78b32] shrink-0" /> Inclusive workplace framework designs
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c78b32] shrink-0" /> Corporate social impact partnerships
                  </li>
                </ul>
              </div>

              <div>
                <button
                  onClick={() => navigate('/partner')}
                  className="inline-flex items-center gap-2 bg-[#c78b32] hover:bg-[#a87220] text-white font-sans font-bold text-xs tracking-wider px-6 py-3 rounded-full uppercase transition-all duration-300 cursor-pointer"
                >
                  Partner With Us <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 3: WHY A MARATHON? (5 MILESTONE STEPS) */}
        {/* ======================================================== */}
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#123524] text-white py-12 sm:py-16 md:py-24 overflow-hidden shadow-2xl">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 space-y-10 sm:space-y-16">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-left">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c78b32] font-bold">
                  WHY A MARATHON?
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-white tracking-tight">
                  Resilience is rarely one heroic moment.<br />
                  <span className="italic text-[#c78b32]">It is usually a thousand ordinary ones.</span>
                </h2>
                <p className="text-white/90 font-sans text-xs sm:text-base leading-relaxed max-w-[620px]">
                  Not every step is fast. But every step forward matters. A marathon mirrors life’s journey—building strength one stride, one day, and one decision at a time.
                </p>
              </div>

              <div className="lg:col-span-5 text-left lg:text-right">
                <button
                  onClick={() => navigate('/story')}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#c78b32] hover:bg-[#b07823] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
                >
                  Read The Marathon Story <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 5 Milestone Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {[
                { title: 'One More Step', desc: 'Continuing forward when tired or uncertain.', icon: Footprints },
                { title: 'One Appointment', desc: 'Showing up for therapy and daily progress.', icon: Calendar },
                { title: 'One Act of Courage', desc: 'Facing fear with quiet determination.', icon: Heart },
                { title: 'One Conversation', desc: 'Building trust and active listening.', icon: Users },
                { title: 'One More Morning', desc: 'Starting fresh with renewed optimism.', icon: Sun }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center space-y-3 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#c78b32]/20 border border-[#c78b32]/40 flex items-center justify-center mx-auto text-[#c78b32]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-white">{item.title}</h4>
                    <p className="text-xs text-white/70 font-sans leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 4: THE 12 MARATHON PRINCIPLES (FULL BLEED SLIDER) */}
        {/* ======================================================== */}
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
                EVERY LIFE HAS A MOUNTAIN
              </span>
              <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] sm:leading-[1.08] text-brand-ink tracking-tight">
                The 12 Principles of the Marathon
              </h2>
              <div className="w-12 h-0.5 bg-[#c78b32] mx-auto mt-2" />
              <p className="text-xs sm:text-sm md:text-base text-brand-ink-soft max-w-[620px] mx-auto pt-1 sm:pt-2 font-sans">
                Explore the core ideas behind why we run, how we support families, and why no one climbs alone.
              </p>
            </motion.div>
          </div>

          {/* Full Horizontal Bleed Container */}
          <div className="relative w-full h-[480px] sm:h-[580px] lg:h-[650px] overflow-hidden shadow-2xl bg-slate-900 group">
            {/* Sliding Image Background */}
            <AnimatePresence mode="wait">
              <motion.img
                key={`principle-img-${principles[activePrinciple].number}`}
                src={principles[activePrinciple].image}
                alt={principles[activePrinciple].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Content Container */}
            <div className="absolute inset-0 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 p-5 sm:p-12 lg:p-16 flex flex-col justify-end pointer-events-none z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`principle-content-${principles[activePrinciple].number}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="space-y-2 sm:space-y-4 max-w-[750px] text-left pointer-events-auto pb-4 sm:pb-6"
                >
                  {/* Eyebrow Pill */}
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[#c78b32] font-mono text-[10px] sm:text-xs tracking-[0.18em] font-bold uppercase">
                    <span>PRINCIPLE {principles[activePrinciple].number} / 12</span>
                  </div>

                  {/* Main Title */}
                  <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-white tracking-tight">
                    {principles[activePrinciple].title}
                  </h3>

                  {/* Subtitle / Description */}
                  <p className="text-white/95 font-sans text-xs sm:text-base leading-relaxed max-w-[640px] line-clamp-3 sm:line-clamp-none">
                    {principles[activePrinciple].description}
                  </p>

                  {/* Bullet Points Grid */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-white/85 font-sans text-[11px] sm:text-sm font-semibold max-w-[600px] pt-1 sm:pt-2">
                    {principles[activePrinciple].points.map((pt, idx) => (
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
                onClick={prevPrinciple}
                className="w-9 h-9 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md text-white border border-white/25 flex items-center justify-center pointer-events-auto cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Previous principle"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={nextPrinciple}
                className="w-9 h-9 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md text-[#faf9f6] border border-white/25 flex items-center justify-center pointer-events-auto cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Next principle"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Bullet Indicators */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-20 pointer-events-auto flex-wrap justify-center px-4">
              {principles.map((_, idx) => (
                <button
                  key={`indicator-${idx}`}
                  onClick={() => setActivePrinciple(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activePrinciple === idx ? 'w-6 sm:w-8 bg-[#c78b32]' : 'w-2 bg-white/40 hover:bg-white/80'
                  }`}
                  aria-label={`Go to principle ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 5: JOIN THE MOVEMENT (4 ACTION CARDS) */}
        {/* ======================================================== */}
        <section className="space-y-8 sm:space-y-12">
          <div className="text-center space-y-2.5 sm:space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c78b32] font-bold block">
              GET INVOLVED
            </span>
            <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] sm:leading-[1.08] text-brand-ink tracking-tight">
              Join the Movement
            </h2>
            <div className="w-12 h-0.5 bg-[#c78b32] mx-auto mt-2" />
            <p className="text-xs sm:text-sm md:text-base text-brand-ink-soft max-w-[620px] mx-auto pt-1 sm:pt-2 font-sans">
              Be part of something bigger than yourself. Every step, every gift, and every voice creates lasting change.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Register for Marathon',
                desc: 'Run your distance. Honor a mountain. Change a life.',
                buttonText: 'Register Now',
                icon: Footprints,
                path: '/donate'
              },
              {
                title: 'Run for Someone',
                desc: 'Carry their name. Dedicate your kilometers to a loved one.',
                buttonText: 'Dedicate Run',
                icon: Heart,
                path: '/partner'
              },
              {
                title: 'Partner Movement',
                desc: 'Build impact collectively with corporate & group participation.',
                buttonText: 'Partner With Us',
                icon: Handshake,
                path: '/partner'
              },
              {
                title: 'Help Someone Rise',
                desc: 'Sponsor an athlete, therapy program, or family support unit.',
                buttonText: 'Donate Now',
                icon: Sparkles,
                path: '/donate'
              }
            ].map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#F8F6F1] border border-brand-line rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between text-center hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#123524] text-[#c78b32] flex items-center justify-center mx-auto transition-transform group-hover:scale-105">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <h4 className="font-serif font-bold text-xl text-[#123524]">{card.title}</h4>
                    <p className="text-xs sm:text-sm text-brand-ink-soft leading-relaxed font-sans">{card.desc}</p>
                  </div>

                  <div>
                    <button
                      onClick={() => navigate(card.path)}
                      className="w-full bg-[#123524] hover:bg-[#0d2a1c] text-white font-sans font-bold text-xs tracking-wider py-3 rounded-full uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {card.buttonText} <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 6: FULL-WIDTH BOTTOM CTA (SMOKY MOUNTAIN BG) */}
        {/* ======================================================== */}
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

          {/* Bottom Smoky White Mist Blend */}
          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />

          {/* Front Content */}
          <div className="relative z-10 max-w-[920px] mx-auto px-4 sm:px-6 text-center space-y-8 sm:space-y-10 text-brand-ink flex flex-col items-center">
            
            {/* Heading Block */}
            <div className="space-y-3 sm:space-y-4 -mt-2">
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#c68a2c] font-bold">
                EVERY LIFE HAS A MOUNTAIN
              </span>

              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.18] text-brand-ink tracking-tight">
                Different mountains. One belief. <span className="text-[#c68a2c] italic">No one climbs alone.</span>
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-brand-ink-soft max-w-[640px] mx-auto leading-relaxed font-sans font-medium">
                Join us in building resilience, empowering neurodivergent athletes, and standing alongside families on every stage of the journey.
              </p>
            </div>

            {/* Bottom Group */}
            <div className="space-y-6 sm:space-y-8 pt-4 sm:pt-6 w-full flex flex-col items-center">
              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-10 w-full max-w-[760px]">
                <div className="flex flex-col items-center space-y-1.5 sm:space-y-2">
                  <Footprints className="w-6 h-6 sm:w-7 sm:h-7 text-[#c68a2c]" />
                  <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-brand-ink">Run for Hope</span>
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
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-[#c68a2c]" />
                  <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-brand-ink">Support Athletes</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="w-full sm:w-auto">
                <button
                  onClick={() => navigate('/donate')}
                  className="w-full sm:w-auto bg-[#c68a2c] hover:bg-[#a37229] text-white font-sans font-bold text-xs tracking-[0.08em] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
                >
                  REGISTER FOR MARATHON <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[11px] sm:text-xs text-brand-ink-soft italic font-medium">Every step creates lasting change.</p>
            </div>

          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default Athletics;
