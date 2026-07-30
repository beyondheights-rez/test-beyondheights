import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Users, LineChart, Heart, Eye, ClipboardList, Target, ShieldCheck, HeartHandshake, TrendingUp, Search, FileText, BarChart2, Star, Shield, Network, Globe, ArrowRight, Trees, Home } from 'lucide-react';

const Approach: React.FC = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-20 bg-brand-bg text-brand-ink min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 space-y-24">

        {/* --- Hero Section --- */}
        <section className="space-y-12 max-w-[900px] mx-auto text-center">
          <div className="space-y-6">
            <div className="font-mono text-xs tracking-[0.1em] text-[#c18831] uppercase font-bold flex items-center justify-center gap-3">
              <span className="w-8 h-0.5 bg-[#c18831]" />
              OUR APPROACH
              <span className="w-8 h-0.5 bg-[#c18831]" />
            </div>
            
            <h1 className="font-serif text-[36px] md:text-[44px] lg:text-[52px] font-normal leading-[1.15] text-brand-ink max-w-[800px] mx-auto">
              Every child is different. Our approach is deeply <span className="text-[#c18831] italic">personal, scientific and human.</span>
            </h1>
            
            <p className="text-[15px] md:text-base text-brand-ink-soft leading-relaxed max-w-[680px] mx-auto">
              At Beyond Heights, our approach is built on empathy, evidence, and collaboration. We work with each child and family to unlock potential, strengthen outcomes, and build a future of dignity and independence.
            </p>
          </div>

          {/* Centered Large Image with no overlays */}
          <div className="rounded-2xl overflow-hidden border border-brand-line shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white p-2">
            <img 
              src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image10.jpg" 
              alt="Our Approach" 
              className="w-full h-[300px] sm:h-[450px] md:h-[500px] object-cover rounded-xl"
            />
          </div>

          {/* Under-Image Content Grid: Quote on Left, Pillars on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left pt-6 border-t border-brand-line/60">
            {/* Elegant Quote Block */}
            <div className="lg:col-span-5 bg-[#faf9f6] p-6 rounded-xl border border-brand-line/80 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.01)]">
              <div className="space-y-2">
                <span className="text-[#c18831] font-serif text-4xl leading-none select-none block mb-1">“</span>
                <p className="font-serif italic text-base md:text-lg text-[#0c2b20] leading-relaxed">
                  We don't believe in changing who a child is. We believe in unlocking who a child can be.
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <Trees className="w-5 h-5 text-[#c18831]" />
              </div>
            </div>

            {/* Core Features Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <User className="w-5 h-5 text-[#c18831]" />
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Child-Centered</h4>
                <p className="text-xs text-brand-ink-soft">Every development path starts with the child's perspective.</p>
              </div>
              <div className="space-y-2">
                <Users className="w-5 h-5 text-[#c18831]" />
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Family Partnership</h4>
                <p className="text-xs text-brand-ink-soft">Families are our primary collaborators, always.</p>
              </div>
              <div className="space-y-2">
                <LineChart className="w-5 h-5 text-[#c18831]" />
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Evidence-Based</h4>
                <p className="text-xs text-brand-ink-soft">Structured around proven practices and trackable milestones.</p>
              </div>
              <div className="space-y-2">
                <Heart className="w-5 h-5 text-[#c18831]" />
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Compassionate Care</h4>
                <p className="text-xs text-brand-ink-soft">Leading with empathy, deep respect, and understanding.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Pillars Section --- */}
        <section className="bg-brand-bg-alt border border-brand-line rounded-2xl p-8 md:p-12 space-y-12">
          <div className="text-center space-y-2">
            <h3 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-[#c18831]">
              OUR APPROACH PILLARS
            </h3>
            <div className="w-12 h-0.5 bg-[#c18831] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full border border-brand-ink flex items-center justify-center mx-auto text-brand-ink">
                <Eye className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink min-h-[30px] flex items-center justify-center">
                Understand the Child
              </h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                We begin with deep observation—learning their strengths, challenges, interests, and sensory triggers.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full border border-brand-ink flex items-center justify-center mx-auto text-brand-ink">
                <ClipboardList className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink min-h-[30px] flex items-center justify-center">
                Assess Holistically
              </h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Our multidisciplinary specialists evaluate motor skills, communication, patterns, and cognition.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full border border-brand-ink flex items-center justify-center mx-auto text-brand-ink">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink min-h-[30px] flex items-center justify-center">
                Design Personalized Plans
              </h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                We draw custom maps containing targeted pathways, tracking metrics, and developmental goals.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full border border-brand-ink flex items-center justify-center mx-auto text-brand-ink">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink min-h-[30px] flex items-center justify-center">
                Deliver Quality Intervention
              </h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Conducting active therapy sessions, athletic pacing, and sensory integration in a supportive setup.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full border border-brand-ink flex items-center justify-center mx-auto text-brand-ink">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink min-h-[30px] flex items-center justify-center">
                Empower Families
              </h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Equipping parents with functional knowledge, home routines, and resources to extend progress.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full border border-brand-ink flex items-center justify-center mx-auto text-brand-ink">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink min-h-[30px] flex items-center justify-center">
                Measure & Improve
              </h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Continuously recording session data, adjusting tasks, and improving outcomes for long-term growth.
              </p>
            </div>
          </div>
        </section>

        {/* --- How We Work Together (Timeline) --- */}
        <section className="space-y-16">
          <div className="text-center space-y-2">
            <h3 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-[#c18831]">
              HOW WE WORK TOGETHER
            </h3>
            <div className="w-12 h-0.5 bg-[#c18831] mx-auto" />
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-4 px-4">
            {/* Connecting line */}
            <div className="absolute top-[40px] left-[10%] right-[10%] h-[1px] border-t border-dashed border-[#c18831]/40 hidden md:block z-0" />

            <div className="flex flex-col items-center text-center relative z-10 max-w-[200px] space-y-4">
              <div className="w-[80px] h-[80px] rounded-full bg-[#0c2b20] text-white flex items-center justify-center text-xl shadow-[0_0_0_8px_#faf9f6]">
                <Users className="w-6 h-6 text-[#c18831]" />
              </div>
              <h4 className="font-sans font-bold text-sm text-brand-ink">Connect</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                We sit down to listen, understanding your child's background and your family goals.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative z-10 max-w-[200px] space-y-4">
              <div className="w-[80px] h-[80px] rounded-full bg-[#0c2b20] text-white flex items-center justify-center text-xl shadow-[0_0_0_8px_#faf9f6]">
                <Search className="w-6 h-6 text-[#c18831]" />
              </div>
              <h4 className="font-sans font-bold text-sm text-brand-ink">Evaluate</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Conducting physical, sensory, and cognitive observation blocks.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative z-10 max-w-[200px] space-y-4">
              <div className="w-[80px] h-[80px] rounded-full bg-[#0c2b20] text-white flex items-center justify-center text-xl shadow-[0_0_0_8px_#faf9f6]">
                <FileText className="w-6 h-6 text-[#c18831]" />
              </div>
              <h4 className="font-sans font-bold text-sm text-brand-ink">Plan</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Drafting a comprehensive daily program mapped to specific target areas.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative z-10 max-w-[200px] space-y-4">
              <div className="w-[80px] h-[80px] rounded-full bg-[#0c2b20] text-white flex items-center justify-center text-xl shadow-[0_0_0_8px_#faf9f6]">
                <HeartHandshake className="w-6 h-6 text-[#c18831]" />
              </div>
              <h4 className="font-sans font-bold text-sm text-brand-ink">Intervene</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Running direct therapies, paces, and learning sessions at our centers.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative z-10 max-w-[200px] space-y-4">
              <div className="w-[80px] h-[80px] rounded-full bg-[#0c2b20] text-white flex items-center justify-center text-xl shadow-[0_0_0_8px_#faf9f6]">
                <BarChart2 className="w-6 h-6 text-[#c18831]" />
              </div>
              <h4 className="font-sans font-bold text-sm text-brand-ink">Track</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Compiling visual tracking dashboards to keep parents informed of progress.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative z-10 max-w-[200px] space-y-4">
              <div className="w-[80px] h-[80px] rounded-full bg-[#0c2b20] text-white flex items-center justify-center text-xl shadow-[0_0_0_8px_#faf9f6]">
                <Star className="w-6 h-6 text-[#c18831]" />
              </div>
              <h4 className="font-sans font-bold text-sm text-brand-ink">Transform</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Celebrating independence milestones, physical stamina gains, and joy.
              </p>
            </div>
          </div>
        </section>

        {/* --- Differentiators Section --- */}
        <section className="bg-brand-bg-alt border border-brand-line rounded-2xl p-8 md:p-12 space-y-12">
          <div className="text-center space-y-2">
            <h3 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-[#c18831]">
              WHAT MAKES OUR APPROACH DIFFERENT
            </h3>
            <div className="w-12 h-0.5 bg-[#c18831] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-lg border border-slate-200 flex items-center justify-center mx-auto text-brand-ink bg-white shadow-sm">
                <Heart className="w-5 h-5 text-brand-ink" />
              </div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">
                Human First
              </h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                We view the child first, not the diagnostic tags. We respect individual pacing.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-lg border border-slate-200 flex items-center justify-center mx-auto text-brand-ink bg-white shadow-sm">
                <Shield className="w-5 h-5 text-brand-ink" />
              </div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">
                Evidence Led
              </h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Employing validated cognitive methodologies shaped for local realities.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-lg border border-slate-200 flex items-center justify-center mx-auto text-brand-ink bg-white shadow-sm">
                <Users className="w-5 h-5 text-brand-ink" />
              </div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">
                Integrated Care
              </h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Connecting clinical therapy, physical pacing, and social groups collaboratively.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-lg border border-slate-200 flex items-center justify-center mx-auto text-brand-ink bg-white shadow-sm">
                <Home className="w-5 h-5 text-brand-ink" />
              </div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">
                Family at Center
              </h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Providing comprehensive support for parents and siblings throughout the journey.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-lg border border-slate-200 flex items-center justify-center mx-auto text-brand-ink bg-white shadow-sm">
                <Network className="w-5 h-5 text-brand-ink" />
              </div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">
                Inclusion Focused
              </h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Preparing children for standard schooling, active playgrounds, and jobs.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-lg border border-slate-200 flex items-center justify-center mx-auto text-brand-ink bg-white shadow-sm">
                <Globe className="w-5 h-5 text-brand-ink" />
              </div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">
                Scalable Impact
              </h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Publishing open-source framework assets to benefit global support systems.
              </p>
            </div>
          </div>
        </section>

        {/* --- CTA Banner --- */}
        <section className="bg-[#0c2b20] text-white rounded-2xl p-8 md:p-12 relative overflow-hidden border border-[#0d3b2b]/30 shadow-[0_8px_30px_rgba(12,43,32,0.12)]">
          <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-6">
              <Trees className="w-16 h-16 text-[#c18831] shrink-0" />
              <div className="space-y-2">
                <h3 className="font-serif text-2xl md:text-3xl font-normal leading-snug">
                  Together, we create possibilities that last <span className="text-[#c18831] italic">a lifetime.</span>
                </h3>
              </div>
            </div>

            {/* Micro-Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-1">
                <Heart className="w-5 h-5 text-[#c18831] mx-auto" />
                <p className="text-xs font-bold text-[#faf9f6]/95 uppercase tracking-wide">Support a Child</p>
              </div>
              <div className="space-y-1">
                <Users className="w-5 h-5 text-[#c18831] mx-auto" />
                <p className="text-xs font-bold text-[#faf9f6]/95 uppercase tracking-wide">Build Community</p>
              </div>
              <div className="space-y-1">
                <TrendingUp className="w-5 h-5 text-[#c18831] mx-auto" />
                <p className="text-xs font-bold text-[#faf9f6]/95 uppercase tracking-wide">Strengthen Society</p>
              </div>
              <div className="space-y-1">
                <Star className="w-5 h-5 text-[#c18831] mx-auto" />
                <p className="text-xs font-bold text-[#faf9f6]/95 uppercase tracking-wide">Create Tomorrow</p>
              </div>
            </div>

            <div className="text-right space-y-2 shrink-0">
              <button
                onClick={() => navigate('/donate')}
                className="bg-[#c18831] hover:bg-[#a37229] text-[#faf9f6] font-sans font-bold text-xs tracking-[0.06em] px-8 py-3.5 rounded-lg uppercase transition-all duration-200 shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                DONATE NOW <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-[#f4f4f0]/80 italic font-medium">Every contribution creates lasting change.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Approach;
