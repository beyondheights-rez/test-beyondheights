import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, Users, Handshake, Megaphone, Gift, ArrowRight, Quote, Trees, 
  Compass, GraduationCap, Globe, Sparkles, Share2 
} from 'lucide-react';

const Join: React.FC = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const testimonials = [
    {
      quote: "Volunteering at Beyond Heights changed my perspective on life. The pure love, focus, and joy experienced here are completely beyond words.",
      author: "Volunteer Advocate",
      location: "Bengaluru, India"
    },
    {
      quote: "Beyond Heights gave my son confidence, athletic pacing skills, and a future we once thought impossible. Today, he dreams big and runs strong.",
      author: "Parent & Caregiver",
      location: "Coimbatore, India"
    },
    {
      quote: "Partnering with Beyond Heights to expand regional developmental diagnostics and inclusive athletics has been one of our most impactful decisions.",
      author: "Partner Organization",
      location: "Regional Health Network"
    }
  ];

  return (
    <div className="bg-[#FAF8F5] text-brand-ink min-h-screen">
      
      {/* ======================================================== */}
      {/* HERO SECTION BANNER - Dark Forest Green (#123524) */}
      {/* ======================================================== */}
      <section className="relative w-full bg-[#123524] text-white pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 md:px-10 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-950/30 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-[1440px] mx-auto w-full relative z-10 space-y-8 sm:space-y-12">
          {/* Top Row: Title Left, Description + CTA Button Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-end">
            
            {/* Title Column */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-left">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#c78b32] font-bold">
                JOIN OUR MISSION
              </span>
              <h1 className="font-serif text-3xl sm:text-[56px] lg:text-[72px] font-normal leading-[1.08] sm:leading-[1.05] tracking-tight text-white">
                Be part of something bigger.<br />
                <span className="italic text-[#c78b32]">Be part of the change.</span>
              </h1>
            </div>

            {/* Description & CTA Column */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-left pb-2">
              <p className="text-[#FAF8F5]/90 text-xs sm:text-[15px] md:text-base leading-relaxed font-sans">
                Every child deserves understanding. Every family deserves support. Every community deserves inclusion. Together, we can build a world where every life has the opportunity to thrive.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <button
                  onClick={() => navigate('/donate')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#c78b32] hover:bg-[#b07823] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md group/btn cursor-pointer"
                >
                  Join Our Mission <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
                <button
                  onClick={() => navigate('/partner')}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer"
                >
                  Partner With Us
                </button>
              </div>
            </div>

          </div>

          {/* Featured Large Image with Glassmorphic Overlay Card */}
          <div className="relative rounded-[20px] sm:rounded-[36px] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.25)] bg-[#0d2a1c] group">
            <img 
              src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image8.jpg" 
              alt="Join Beyond Heights Movement" 
              className="w-full h-[280px] sm:h-[480px] md:h-[580px] object-cover transition-transform duration-700 group-hover:scale-102"
            />
            {/* Dark gradient shadow inside image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Glassmorphic Overlay Card on bottom-left */}
            <div className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 z-20 max-w-[260px] sm:max-w-[380px] bg-black/50 backdrop-blur-xl border border-white/20 p-4 sm:p-5 rounded-xl sm:rounded-2xl text-left text-white shadow-2xl space-y-1.5">
              <div className="flex items-center gap-2">
                <Trees className="w-4 h-4 text-[#c78b32]" />
                <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#c78b32] uppercase font-bold">
                  OUR CORE GUIDELINE
                </span>
              </div>
              <div className="text-xs sm:text-base font-serif italic text-white/95 leading-relaxed">
                "Alone we can do so little. Together we can do so much."
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Grid Wrapper */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 space-y-12 sm:space-y-24 mt-12 sm:mt-24">

        {/* ======================================================== */}
        {/* SECTION 1: WAYS TO JOIN OUR JOURNEY (5 PILLARS GRID) */}
        {/* ======================================================== */}
        <section className="space-y-8 sm:space-y-12">
          <div className="text-center space-y-2.5 sm:space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c78b32] font-bold block">
              COLLABORATION IN ACTION
            </span>
            <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] sm:leading-[1.08] text-brand-ink tracking-tight">
              Ways to Join Our Journey
            </h2>
            <div className="w-12 h-0.5 bg-[#c78b32] mx-auto mt-2" />
            <p className="text-xs sm:text-sm md:text-base text-brand-ink-soft max-w-[620px] mx-auto pt-1 sm:pt-2 font-sans">
              Choose how you would like to lend your voice, time, resources, or partnership to empower neurodivergent lives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            
            {/* Donate Card */}
            <div className="bg-[#F8F6F1] border border-brand-line rounded-2xl p-5 sm:p-6 space-y-5 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#123524] text-[#c78b32] flex items-center justify-center transition-transform group-hover:scale-105">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#123524]">Donate</h4>
                <p className="text-xs text-brand-ink-soft leading-relaxed font-sans">
                  Fuel life-changing clinical therapies, specialized athletics programs, and complete family support systems.
                </p>
              </div>
              <div>
                <button
                  onClick={() => navigate('/donate')}
                  className="w-full bg-[#c78b32] hover:bg-[#a87220] text-white font-sans font-bold text-xs tracking-wider py-3 rounded-full uppercase transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  DONATE NOW <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Volunteer Card */}
            <div className="bg-[#F8F6F1] border border-brand-line rounded-2xl p-5 sm:p-6 space-y-5 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#123524] text-[#c78b32] flex items-center justify-center transition-transform group-hover:scale-105">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#123524]">Volunteer</h4>
                <p className="text-xs text-brand-ink-soft leading-relaxed font-sans">
                  Give your time, professional skills, and heart. Become a valued member of our daily center community.
                </p>
              </div>
              <div>
                <button
                  onClick={() => navigate('/partner')}
                  className="w-full bg-[#123524] hover:bg-[#0d2a1c] text-white font-sans font-bold text-xs tracking-wider py-3 rounded-full uppercase transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  VOLUNTEER <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Partner Card */}
            <div className="bg-[#F8F6F1] border border-brand-line rounded-2xl p-5 sm:p-6 space-y-5 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#123524] text-[#c78b32] flex items-center justify-center transition-transform group-hover:scale-105">
                  <Handshake className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#123524]">Partner</h4>
                <p className="text-xs text-brand-ink-soft leading-relaxed font-sans">
                  Collaborate with us to create sustainable programs, innovate clinical frameworks, and expand outreach.
                </p>
              </div>
              <div>
                <button
                  onClick={() => navigate('/partner')}
                  className="w-full bg-[#123524] hover:bg-[#0d2a1c] text-white font-sans font-bold text-xs tracking-wider py-3 rounded-full uppercase transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  PARTNER WITH US <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Spread the Word Card */}
            <div className="bg-[#F8F6F1] border border-brand-line rounded-2xl p-5 sm:p-6 space-y-5 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#123524] text-[#c78b32] flex items-center justify-center transition-transform group-hover:scale-105">
                  <Megaphone className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#123524]">Spread Word</h4>
                <p className="text-xs text-brand-ink-soft leading-relaxed font-sans">
                  Share our mission, inspiring stories, and frameworks to foster neurodiversity acceptance globally.
                </p>
              </div>
              <div>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'Beyond Heights',
                        text: 'Be part of something bigger. Join Beyond Heights.',
                        url: window.location.href,
                      }).catch(() => {});
                    } else {
                      alert('Share Beyond Heights: ' + window.location.href);
                    }
                  }}
                  className="w-full bg-[#123524] hover:bg-[#0d2a1c] text-white font-sans font-bold text-xs tracking-wider py-3 rounded-full uppercase transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  SHARE VISION <Share2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Fundraise Card */}
            <div className="bg-[#F8F6F1] border border-brand-line rounded-2xl p-5 sm:p-6 space-y-5 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#123524] text-[#c78b32] flex items-center justify-center transition-transform group-hover:scale-105">
                  <Gift className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#123524]">Fundraise</h4>
                <p className="text-xs text-brand-ink-soft leading-relaxed font-sans">
                  Organize a campaign, pledge birthday milestones, or run in honor of neurodiversity to scale our reach.
                </p>
              </div>
              <div>
                <button
                  onClick={() => navigate('/donate')}
                  className="w-full bg-[#c78b32] hover:bg-[#a87220] text-white font-sans font-bold text-xs tracking-wider py-3 rounded-full uppercase transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  START CAMPAIGN <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 2: MULTIPLIED IMPACT METRICS (DARK BREAKOUT) */}
        {/* ======================================================== */}
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#123524] text-white py-12 sm:py-16 md:py-24 overflow-hidden shadow-2xl">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 space-y-10 sm:space-y-16">
            
            <div className="text-center space-y-2.5 sm:space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c78b32] font-bold block">
                OUR COLLECTIVE RIPPLE EFFECT
              </span>
              <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] sm:leading-[1.08] text-white tracking-tight">
                Your Support Multiplies Impact
              </h2>
              <div className="w-12 h-0.5 bg-[#c78b32] mx-auto mt-2" />
              <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-[620px] mx-auto pt-1 sm:pt-2 font-sans">
                Every contribution creates a structural ripple effect of lasting developmental progress.
              </p>
            </div>

            {/* 6 Metric Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 hover:bg-white/10 transition-all duration-300">
                <Users className="w-7 h-7 text-[#c78b32] mx-auto" />
                <div className="font-serif text-2xl sm:text-3xl font-bold text-white">500+</div>
                <p className="text-xs text-white/75 font-sans leading-snug">Children & young adults supported yearly</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 hover:bg-white/10 transition-all duration-300">
                <Compass className="w-7 h-7 text-[#c78b32] mx-auto" />
                <div className="font-serif text-2xl sm:text-3xl font-bold text-white">10+</div>
                <p className="text-xs text-white/75 font-sans leading-snug">Centers & active programs across India</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 hover:bg-white/10 transition-all duration-300">
                <Sparkles className="w-7 h-7 text-[#c78b32] mx-auto" />
                <div className="font-serif text-2xl sm:text-3xl font-bold text-white">50k+</div>
                <p className="text-xs text-white/75 font-sans leading-snug">Therapy & athletics sessions delivered</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 hover:bg-white/10 transition-all duration-300">
                <GraduationCap className="w-7 h-7 text-[#c78b32] mx-auto" />
                <div className="font-serif text-lg sm:text-xl font-bold text-white mt-1">100%</div>
                <p className="text-xs text-white/75 font-sans leading-snug">Family & caregiver training integration</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 hover:bg-white/10 transition-all duration-300">
                <Globe className="w-7 h-7 text-[#c78b32] mx-auto" />
                <div className="font-serif text-lg sm:text-xl font-bold text-white mt-1">25+</div>
                <p className="text-xs text-white/75 font-sans leading-snug">Community advocacy initiatives launched</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 hover:bg-white/10 transition-all duration-300">
                <Heart className="w-7 h-7 text-[#c78b32] mx-auto" />
                <div className="font-serif text-lg sm:text-xl font-bold text-white mt-1">Infinite</div>
                <p className="text-xs text-white/75 font-sans leading-snug">Dignity & lifelong hope created</p>
              </div>

            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 3: VOICES FROM OUR COMMUNITY (TESTIMONIALS) */}
        {/* ======================================================== */}
        <section className="space-y-8 sm:space-y-12">
          <div className="text-center space-y-2.5 sm:space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c78b32] font-bold block">
              STORIES OF CONNECTION
            </span>
            <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] sm:leading-[1.08] text-brand-ink tracking-tight">
              Voices from Our Community
            </h2>
            <div className="w-12 h-0.5 bg-[#c78b32] mx-auto mt-2" />
            <p className="text-xs sm:text-sm md:text-base text-brand-ink-soft max-w-[620px] mx-auto pt-1 sm:pt-2 font-sans">
              Hear from the volunteers, parents, and partner organizations who make this journey possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#F8F6F1] border border-brand-line rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between relative overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-[#c78b32] rotate-180 opacity-40" />
                
                <p className="font-serif italic text-sm sm:text-base leading-relaxed text-brand-ink">
                  "{item.quote}"
                </p>

                <div className="border-t border-brand-line pt-4 space-y-0.5">
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#123524]">
                    {item.author}
                  </h4>
                  <p className="text-[11px] font-mono text-brand-ink-soft">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 4: FULL-WIDTH BOTTOM CTA (SMOKY MOUNTAIN BG) */}
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
                TOGETHER FOR LIFELONG IMPACT
              </span>

              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.18] text-brand-ink tracking-tight">
                Together, we can go beyond. <span className="text-[#c68a2c] italic">Together, we reach new heights.</span>
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-brand-ink-soft max-w-[640px] mx-auto leading-relaxed font-sans font-medium">
                Join us in empowering neurodivergent children, strengthening families, and building inclusive opportunities that foster lifelong growth.
              </p>
            </div>

            {/* Bottom Group */}
            <div className="space-y-6 sm:space-y-8 pt-4 sm:pt-6 w-full flex flex-col items-center">
              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-10 w-full max-w-[760px]">
                <div className="flex flex-col items-center space-y-1.5 sm:space-y-2">
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-[#c68a2c]" />
                  <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-brand-ink">Transform a Life</span>
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
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-[#c68a2c]" />
                  <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-brand-ink">Support Families</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="w-full sm:w-auto">
                <button
                  onClick={() => navigate('/donate')}
                  className="w-full sm:w-auto bg-[#c68a2c] hover:bg-[#a37229] text-white font-sans font-bold text-xs tracking-[0.08em] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
                >
                  JOIN OUR MISSION <ArrowRight className="w-4 h-4" />
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

export default Join;
