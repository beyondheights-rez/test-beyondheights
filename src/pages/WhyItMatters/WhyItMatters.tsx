import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, Sparkles, Compass, Brain, Home, HeartHandshake, ArrowRight, Trees, Star } from 'lucide-react';

const WhyItMatters: React.FC = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-20 bg-brand-bg text-brand-ink min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 space-y-24">

        {/* --- Hero Section --- */}
        <section className="space-y-12">
          {/* Top Reverse Split Layout: Image Card on Left, Text/Quote on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Carded Photo Frame */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-brand-line shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white p-2">
                <img 
                  src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image5.jpg" 
                  alt="Beyond Heights Family" 
                  className="w-full h-[320px] sm:h-[420px] object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Right Column: Eyebrow, Title, Description, and Quote Card */}
            <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
              <div className="font-mono text-xs tracking-[0.15em] text-[#c18831] uppercase font-bold flex items-center gap-2">
                <span className="w-6 h-0.5 bg-[#c18831]" />
                WHY IT MATTERS
              </div>
              
              <h1 className="font-serif text-[34px] md:text-[44px] lg:text-[48px] font-normal leading-[1.15] text-brand-ink">
                Every child deserves a life of <span className="text-[#c18831] italic">dignity, opportunity and joy.</span>
              </h1>
              
              <p className="text-[15px] md:text-base text-brand-ink-soft leading-relaxed">
                At Beyond Heights, we walk alongside children and young adults with autism, Down syndrome, and in some cases families navigating cancer, to help them live with confidence, inclusion, and purpose.
              </p>

              {/* Elegant Quote Block */}
              <div className="bg-[#faf9f6] p-6 rounded-xl border border-brand-line/80 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.01)] mt-6">
                <div className="space-y-2">
                  <span className="text-[#c18831] font-serif text-4xl leading-none select-none block mb-1">“</span>
                  <p className="font-serif italic text-sm md:text-base text-[#0c2b20] leading-relaxed">
                    When we support one child, we strengthen an entire family. When we include one child, we build a more compassionate society for all.
                  </p>
                </div>
                <div className="flex justify-end mt-4">
                  <Trees className="w-5 h-5 text-[#c18831]" />
                </div>
              </div>
            </div>

          </div>

          {/* Under-Image Content Grid: Columns for Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-brand-line/60">
            <div className="space-y-2 text-left">
              <Heart className="w-5 h-5 text-[#c18831]" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Dignity First</h4>
              <p className="text-xs text-brand-ink-soft">Believing every human life holds equal, non-negotiable value.</p>
            </div>
            <div className="space-y-2 text-left">
              <Users className="w-5 h-5 text-[#c18831]" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Real Inclusion</h4>
              <p className="text-xs text-brand-ink-soft">Building active belonging and relationships, not just isolated programs.</p>
            </div>
            <div className="space-y-2 text-left">
              <Sparkles className="w-5 h-5 text-[#c18831]" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Unlocking Potential</h4>
              <p className="text-xs text-brand-ink-soft">Supporting developmental goals on the child's own timeline.</p>
            </div>
            <div className="space-y-2 text-left">
              <Compass className="w-5 h-5 text-[#c18831]" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Lifelong Purpose</h4>
              <p className="text-xs text-brand-ink-soft">Fostering vocational transition and long-term independence.</p>
            </div>
          </div>
        </section>

        {/* --- Reality Section --- */}
        <section id="reality-section" className="bg-white border border-brand-line rounded-3xl p-10 md:p-12 scroll-mt-24 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
          <div className="text-left font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#c18831] mb-12">
            The Reality We Cannot Ignore...
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-10 lg:gap-y-0 gap-x-6">
            {[
              {
                label: 'Estimated children on the autism spectrum (WHO)',
                value: '1 in 36',
              },
              {
                label: 'Adult special needs unemployment in India (NASSCOM)',
                value: '> 95%',
              },
              {
                label: 'Children with special needs having support (UNICEF)',
                value: '< 10%',
              },
              {
                label: 'Families facing high emotional & financial strain daily',
                value: '100%',
              },
              {
                label: 'The only compassionate and viable way forward',
                value: 'Inclusion',
              },
            ].map((stat, idx) => (
              <div
                key={`reality-${idx}`}
                className="flex flex-col justify-between min-h-[140px] pl-6 border-l border-brand-line/65 text-left group hover:border-[#c18831] transition-colors duration-300"
              >
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-ink-soft leading-normal">
                  {stat.label}
                </span>
                <span className="text-4xl sm:text-[40px] lg:text-[44px] font-sans font-extrabold text-[#123524] leading-none tracking-tight">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* --- Why It Matters Details --- */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <h3 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-[#c18831]">
              Why It Matters
            </h3>
            <div className="w-12 h-0.5 bg-[#c18831] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                title: 'Every life has potential.',
                desc: 'With the right support, every child can learn, grow and contribute in meaningful ways.',
                icon: Brain,
                image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=400&q=80',
                circleBg: 'bg-[#5a86e0]',
              },
              {
                title: 'Families need a village.',
                desc: 'No family should walk this journey alone. We are here to act as that supportive village.',
                icon: Home,
                image: 'https://images.unsplash.com/photo-1536640712247-3a530dbd31c2?auto=format&fit=crop&w=400&q=80',
                circleBg: 'bg-[#5aab7c]',
              },
              {
                title: 'Inclusion builds society.',
                desc: 'When we include everyone, our communities naturally become stronger, kinder, and wiser.',
                icon: Users,
                image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=400&q=80',
                circleBg: 'bg-[#dd9a3c]',
              },
              {
                title: 'Support for independence.',
                desc: 'Early intervention and structured developmental support create sustainable lifelong impacts.',
                icon: HeartHandshake,
                image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80',
                circleBg: 'bg-[#9a82dd]',
              },
              {
                title: 'Compassion drives change.',
                desc: 'Small, deliberate acts of inclusion transform individual lives and entire generations.',
                icon: Heart,
                image: 'https://images.unsplash.com/photo-1469571486040-af250c550d63?auto=format&fit=crop&w=400&q=80',
                circleBg: 'bg-[#dd7a9e]',
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={`matters-${idx}`}
                  className="relative group rounded-2xl overflow-hidden aspect-[3/4.2] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-brand-line transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-white"
                >
                  {/* Background Image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Floating White Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 border border-brand-line/45 space-y-3 shadow-md">
                    {/* Themed Icon */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${card.circleBg} shadow-sm`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    {/* Left aligned Title & Text */}
                    <div className="space-y-1 text-left">
                      <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">
                        {card.title}
                      </h4>
                      <p className="text-[10px] text-brand-ink-soft leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- Impact Metrics --- */}
        <section className="border-t border-brand-line pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center">
            <div className="space-y-4">
              <div className="font-mono text-xs tracking-[0.1em] text-[#c18831] font-bold uppercase">
                THE IMPACT WE CREATE
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-normal leading-[1.2] text-[#0c2b20]">
                Real progress.<br />Real lives.<br />Real change.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-[#fcfcfa] border border-brand-line rounded-xl p-5 space-y-2">
                <Users className="w-6 h-6 text-brand-ink mx-auto" />
                <div className="font-serif text-2xl font-bold text-brand-ink">500+</div>
                <p className="text-xs text-brand-ink-soft">Children and young adults supported every year</p>
              </div>

              <div className="bg-[#fcfcfa] border border-brand-line rounded-xl p-5 space-y-2">
                <Compass className="w-6 h-6 text-brand-ink mx-auto" />
                <div className="font-serif text-2xl font-bold text-brand-ink">10+</div>
                <p className="text-xs text-brand-ink-soft">Centers and programs running across India</p>
              </div>

              <div className="bg-[#fcfcfa] border border-brand-line rounded-xl p-5 flex flex-col justify-center">
                <Sparkles className="w-6 h-6 text-brand-ink mx-auto mb-2" />
                <p className="text-xs text-brand-ink-soft leading-normal">
                  Therapy, education, life skills, and vocational pacing systems.
                </p>
              </div>

              <div className="bg-[#fcfcfa] border border-brand-line rounded-xl p-5 flex flex-col justify-center">
                <Heart className="w-6 h-6 text-brand-ink mx-auto mb-2" />
                <p className="text-xs text-brand-ink-soft leading-normal">
                  Families empowered, children included, and communities transformed.
                </p>
              </div>
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
                  A more inclusive world begins with you.
                </h3>
                <p className="font-serif italic text-sm text-[#f4f4f0]/80">
                  Your support creates possibilities that last a lifetime.
                </p>
              </div>
            </div>

            {/* Micro-Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-1">
                <Heart className="w-5 h-5 text-[#c18831] mx-auto" />
                <p className="text-xs font-bold text-[#faf9f6]/95 uppercase tracking-wide">Give with Purpose</p>
              </div>
              <div className="space-y-1">
                <Users className="w-5 h-5 text-[#c18831] mx-auto" />
                <p className="text-xs font-bold text-[#faf9f6]/95 uppercase tracking-wide">Change a Life</p>
              </div>
              <div className="space-y-1">
                <Sparkles className="w-5 h-5 text-[#c18831] mx-auto" />
                <p className="text-xs font-bold text-[#faf9f6]/95 uppercase tracking-wide">Strengthen Families</p>
              </div>
              <div className="space-y-1">
                <Star className="w-5 h-5 text-[#c18831] mx-auto" />
                <p className="text-xs font-bold text-[#faf9f6]/95 uppercase tracking-wide">Build Compassion</p>
              </div>
            </div>

            <button
              onClick={() => navigate('/donate')}
              className="bg-[#c18831] hover:bg-[#a37229] text-[#faf9f6] font-sans font-bold text-xs tracking-[0.06em] px-8 py-3.5 rounded-lg uppercase transition-all duration-200 shadow-md flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              DONATE NOW <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default WhyItMatters;
