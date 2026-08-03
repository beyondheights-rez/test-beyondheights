import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MapPin, ShieldCheck, Users, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="bg-white text-brand-ink min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto space-y-12 sm:space-y-20">

        {/* --- Hero Section --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <span className="font-mono text-xs tracking-[0.18em] text-[#c68a2c] uppercase font-bold">About Us</span>
            <div className="w-10 h-0.5 bg-[#c68a2c]" />
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] sm:leading-[1.1] text-brand-ink tracking-tight">
              One family's search for capability, built into a{' '}
              <span className="text-[#c68a2c] italic">structured system</span>.
            </h1>
            <p className="text-brand-ink-soft text-xs sm:text-base leading-relaxed max-w-[560px] font-sans">
              Beyond Heights provides structured autism intervention and specialized athletics training, based in
              Vadavalli, Coimbatore, Tamil Nadu, India.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#F8F6F1] border border-brand-line rounded-2xl p-5 sm:p-8 space-y-4 sm:space-y-6">
            <div className="flex items-start gap-3.5 sm:gap-4">
              <div className="bg-[#0d3b26] text-[#e5b364] p-2.5 sm:p-3 rounded-xl shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Location</h4>
                <p className="text-brand-ink-soft text-xs sm:text-sm mt-1">Vadavalli, Coimbatore, Tamil Nadu, India</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5 sm:gap-4">
              <div className="bg-[#0d3b26] text-[#e5b364] p-2.5 sm:p-3 rounded-xl shrink-0">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Registered Organization</h4>
                <p className="text-brand-ink-soft text-xs sm:text-sm mt-1 font-mono">[REGISTRATION NUMBER TO BE ADDED]</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Our Story --- */}
        <section className="space-y-4 sm:space-y-6 max-w-[820px]">
          <span className="font-mono text-xs tracking-[0.18em] text-[#c68a2c] uppercase font-bold">Our Story</span>
          <div className="w-10 h-0.5 bg-[#c68a2c]" />
          <h2 className="font-serif text-2xl sm:text-4xl font-normal leading-[1.2] text-brand-ink tracking-tight">
            One family rewrote the developmental roadmap.
          </h2>
          <p className="text-brand-ink-soft text-xs sm:text-base leading-relaxed font-sans">
            It began at home. When Ranjani's son Rithvik was diagnosed on the autism spectrum, they found clinical
            classifications but no practical roadmap for daily capability. By building rigorous routine structures
            and introducing physical endurance running, Rithvik transitioned from uncertainty into an
            ultra-marathon athlete now training for the Ironman.
          </p>
          <p className="text-brand-ink-soft text-xs sm:text-base leading-relaxed font-sans">
            That journey became the foundation of Beyond Heights — a structured methodology combining speech,
            occupational, and behavioral therapy with specialized athletics training, so that other families do not
            have to navigate that search alone.
          </p>
        </section>

        {/* --- What We Do --- */}
        <section className="bg-[#0d3b26] text-white rounded-2xl p-6 sm:p-8 md:p-12 space-y-6 sm:space-y-10 relative overflow-hidden border border-[#0f4d32]/30">
          <div className="text-center space-y-2 max-w-[640px] mx-auto relative z-10">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#e5b364] font-bold">What We Do</span>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-white">
              Five pillars working as one connected system
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5 relative z-10">
            {[
              { title: 'Speech & Language Therapy', desc: 'Structured communication support.' },
              { title: 'Occupational Therapy', desc: 'Sensory integration and coordination.' },
              { title: 'Behavioral Intervention', desc: 'Consistent, dignity-first behavior support.' },
              { title: 'Special Education', desc: 'Life skills and academic pacing.' },
              { title: 'Inclusive Athletics', desc: 'Running and endurance-based regulation.' },
            ].map((pillar, idx) => (
              <div key={pillar.title} className={`bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 space-y-1.5 sm:space-y-2 ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
                <h4 className="font-serif text-sm sm:text-base text-white">{pillar.title}</h4>
                <p className="text-[11px] sm:text-xs text-white/70 leading-relaxed font-sans">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Values --- */}
        <section className="space-y-6 sm:space-y-10">
          <div className="text-center space-y-2 max-w-[640px] mx-auto">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c68a2c] font-bold">Our Values</span>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-brand-ink">
              Child dignity is our ultimate guideline
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Heart, title: 'Privacy', desc: 'Protecting dignity in every daily evaluation we hold.' },
              { icon: Users, title: 'Pacing', desc: 'Routines change based on student comfort, not a fixed calendar.' },
              { icon: ShieldCheck, title: 'Transparency', desc: 'Therapy metrics and progress stay visible to parents.' },
              { icon: MapPin, title: 'Autonomy First', desc: 'Focused on self-reliance and motor control.' },
            ].map((card) => (
              <div key={card.title} className="border border-brand-line rounded-xl p-4 sm:p-6 bg-[#F8F6F1] space-y-2 sm:space-y-3">
                <card.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#c68a2c]" />
                <h4 className="font-serif text-base sm:text-[17px] text-brand-ink">{card.title}</h4>
                <p className="text-[11px] sm:text-[13px] text-brand-ink-soft leading-relaxed font-sans">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Reach Us --- */}
        <section className="text-center space-y-4 border-t border-brand-line pt-12 sm:pt-16">
          <h3 className="font-serif text-xl sm:text-2xl text-brand-ink">Want to know more?</h3>
          <p className="text-brand-ink-soft text-xs sm:text-sm max-w-[440px] mx-auto font-sans">
            Reach out any time — we're happy to walk you through our programs and how your support helps.
          </p>
          <div className="w-full sm:w-auto">
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c68a2c] hover:bg-[#a87220] text-white font-sans font-bold text-xs tracking-[0.08em] px-8 py-3.5 rounded-full uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
