import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, Globe, Puzzle, Ribbon, HeartHandshake, Baby, BookOpen, User, Briefcase, Shield, UserCheck, Handshake, Leaf, Trees, ArrowRight, BookOpenCheck } from 'lucide-react';

const WhoWeServe: React.FC = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-20 bg-brand-bg text-brand-ink min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 space-y-24">

        {/* --- Hero Section --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Headline & Editorial Quote Intro */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="font-mono text-xs tracking-[0.1em] text-[#c78b32] uppercase font-bold flex items-center gap-3">
                <span className="w-8 h-0.5 bg-[#c78b32]" />
                WHO WE SERVE
              </div>
              
              <h1 className="font-serif text-[36px] md:text-[44px] lg:text-[52px] font-normal leading-[1.15] text-brand-ink">
                Every child. Every family. <span className="text-[#c78b32] italic">Every step of the journey.</span>
              </h1>
            </div>

            {/* Large editorial quote block that sets the stage */}
            <div className="border-l-4 border-[#0f3522] pl-6 space-y-2 py-1 max-w-[540px]">
              <p className="font-serif italic text-base md:text-lg text-[#0f3522] leading-relaxed">
                "We don't just support individuals. We strengthen families. We build futures."
              </p>
              <div className="flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-brand-muted">
                <Trees className="w-3.5 h-3.5 text-[#c78b32]" /> Beyond Heights Mission
              </div>
            </div>
            
            <p className="text-[15px] md:text-base text-brand-ink-soft leading-relaxed max-w-[540px]">
              Beyond Heights supports children and young adults with autism, Down syndrome, and in some cases families navigating cancer. We walk alongside them—at every stage, with care that is personal and purpose-driven.
            </p>
          </div>

          {/* Hero Image Block with Offset Decorative Frame (Right Column) */}
          <div className="relative p-3">
            {/* The decorative frame behind */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-[#c78b32]/35 bg-[#faf9f6]/40 z-0 pointer-events-none" />
            
            {/* The clean image on top */}
            <div className="relative rounded-2xl overflow-hidden border border-brand-line shadow-lg bg-white p-2 z-10">
              <img 
                src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image3.jpg" 
                alt="Who We Serve" 
                className="w-full h-[400px] sm:h-[480px] object-cover rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* --- People We Serve Section --- */}
        <section className="bg-brand-bg-alt border border-brand-line rounded-2xl p-8 md:p-12 space-y-12">
          <div className="text-center space-y-2">
            <h3 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-[#c78b32]">
              The People We Serve
            </h3>
            <div className="w-12 h-0.5 bg-[#c78b32] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white border border-brand-line rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full border border-brand-line flex items-center justify-center text-brand-ink">
                  <Puzzle className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink min-h-[30px] flex items-center">
                  Children & Young Adults with Autism
                </h4>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  From early intervention to adulthood, we provide therapies, education, and life skills that unlock potential and build independence.
                </p>
                
                <div className="w-6 h-0.5 bg-[#c78b32]" />
                
                <ul className="space-y-2 text-xs text-brand-ink font-medium">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c78b32] mt-0.5">•</span> Early intervention
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c78b32] mt-0.5">•</span> Therapies & education
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c78b32] mt-0.5">•</span> Life skills & vocational training
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c78b32] mt-0.5">•</span> Social & emotional development
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c78b32] mt-0.5">•</span> Transition to independence
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-brand-line rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full border border-brand-line flex items-center justify-center text-brand-ink">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink min-h-[30px] flex items-center">
                  Children & Young Adults with Down Syndrome
                </h4>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  We nurture unique developmental abilities, encourage proactive inclusion, and create opportunities for active, meaningful lives.
                </p>
                
                <div className="w-6 h-0.5 bg-[#c78b32]" />
                
                <ul className="space-y-2 text-xs text-brand-ink font-medium">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c78b32] mt-0.5">•</span> Therapies & development
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c78b32] mt-0.5">•</span> Education support
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c78b32] mt-0.5">•</span> Life skills training
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c78b32] mt-0.5">•</span> Health & well-being
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c78b32] mt-0.5">•</span> Community inclusion
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-brand-line rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full border border-brand-line flex items-center justify-center text-brand-ink">
                  <Ribbon className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink min-h-[30px] flex items-center">
                  Families Navigating Cancer
                </h4>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  We stand with families during cancer journeys—offering customized emotional support, financial assistance, and practical logistics.
                </p>
                
                <div className="w-6 h-0.5 bg-[#c78b32]" />
                
                <ul className="space-y-2 text-xs text-brand-ink font-medium">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c78b32] mt-0.5">•</span> Emotional support
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c78b32] mt-0.5">•</span> Financial assistance
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c78b32] mt-0.5">•</span> Navigation & guidance
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c78b32] mt-0.5">•</span> Family well-being
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c78b32] mt-0.5">•</span> Hope & healing
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-brand-line rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full border border-brand-line flex items-center justify-center text-brand-ink">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink min-h-[30px] flex items-center">
                  Caregivers & Families
                </h4>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  We empower families with knowledge, supportive training, and a warm community so they never walk this journey alone.
                </p>
                
                <div className="w-6 h-0.5 bg-[#c78b32]" />
                
                <ul className="space-y-2 text-xs text-brand-ink font-medium">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c78b32] mt-0.5">•</span> Parent training & support
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c78b32] mt-0.5">•</span> Counselling & guidance
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c78b32] mt-0.5">•</span> Respite & well-being
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c78b32] mt-0.5">•</span> Community & networks
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c78b32] mt-0.5">•</span> Advocacy & awareness
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* --- Journey Timeline --- */}
        <section className="space-y-16">
          <div className="text-center space-y-2">
            <h3 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-[#c78b32]">
              We Serve Across the Journey
            </h3>
            <div className="w-12 h-0.5 bg-[#c78b32] mx-auto" />
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-4 px-4">
            {/* Connecting line */}
            <div className="absolute top-[40px] left-[5%] right-[5%] h-[1px] border-t border-dashed border-[#c78b32]/40 hidden md:block z-0" />

            <div className="flex flex-col items-center text-center relative z-10 max-w-[180px] space-y-4">
              <div className="w-[80px] h-[80px] rounded-full bg-[#0f3522] text-white flex items-center justify-center text-xl shadow-[0_0_0_8px_#faf9f6]">
                <Baby className="w-6 h-6 text-[#c78b32]" />
              </div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Early Years</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Early identification, customized intervention, and support pathways.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative z-10 max-w-[180px] space-y-4">
              <div className="w-[80px] h-[80px] rounded-full bg-[#0f3522] text-white flex items-center justify-center text-xl shadow-[0_0_0_8px_#faf9f6]">
                <BookOpen className="w-6 h-6 text-[#c78b32]" />
              </div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">School Years</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Adaptive clinical therapies, inclusive schooling, and functional learning.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative z-10 max-w-[180px] space-y-4">
              <div className="w-[80px] h-[80px] rounded-full bg-[#0f3522] text-white flex items-center justify-center text-xl shadow-[0_0_0_8px_#faf9f6]">
                <User className="w-6 h-6 text-[#c78b32]" />
              </div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Adolescence</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Building confidence, social interaction skills, and physical endurance.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative z-10 max-w-[180px] space-y-4">
              <div className="w-[80px] h-[80px] rounded-full bg-[#0f3522] text-white flex items-center justify-center text-xl shadow-[0_0_0_8px_#faf9f6]">
                <Briefcase className="w-6 h-6 text-[#c78b32]" />
              </div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Young Adulthood</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Vocational skill setups, active internships, and independent living.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative z-10 max-w-[180px] space-y-4">
              <div className="w-[80px] h-[80px] rounded-full bg-[#0f3522] text-white flex items-center justify-center text-xl shadow-[0_0_0_8px_#faf9f6]">
                <Users className="w-6 h-6 text-[#c78b32]" />
              </div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Family Support</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Empowering parent training blocks and sibling respite support networks.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative z-10 max-w-[180px] space-y-4">
              <div className="w-[80px] h-[80px] rounded-full bg-[#0f3522] text-white flex items-center justify-center text-xl shadow-[0_0_0_8px_#faf9f6]">
                <Heart className="w-6 h-6 text-[#c78b32]" />
              </div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Community Inclusion</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Advocating for accessible sports clubs, spaces, and workplaces.
              </p>
            </div>
          </div>
        </section>

        {/* --- Commitment Section --- */}
        <section className="bg-brand-bg-alt border border-brand-line rounded-2xl p-8 md:p-12 space-y-12">
          <div className="text-center space-y-2">
            <h3 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-[#c78b32]">
              Our Commitment to Those We Serve
            </h3>
            <div className="w-12 h-0.5 bg-[#c78b32] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 text-center">
            <div className="space-y-3">
              <Heart className="w-8 h-8 text-brand-ink mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Respect & Dignity</h4>
              <p className="text-xs text-brand-ink-soft leading-relaxed">
                Every single individual is valued, respected, and heard.
              </p>
            </div>

            <div className="space-y-3">
              <Shield className="w-8 h-8 text-brand-ink mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Safety & Trust</h4>
              <p className="text-xs text-brand-ink-soft leading-relaxed">
                Nurturing, secure, and supportive developmental physical spaces.
              </p>
            </div>

            <div className="space-y-3">
              <UserCheck className="w-8 h-8 text-brand-ink mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Personalized Care</h4>
              <p className="text-xs text-brand-ink-soft leading-relaxed">
                Every program map is tailored to individual speeds.
              </p>
            </div>

            <div className="space-y-3">
              <BookOpenCheck className="w-8 h-8 text-brand-ink mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Continuous Growth</h4>
              <p className="text-xs text-brand-ink-soft leading-relaxed">
                Constant investment in active therapy tools, research, and science.
              </p>
            </div>

            <div className="space-y-3">
              <Handshake className="w-8 h-8 text-brand-ink mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Long-Term Partner</h4>
              <p className="text-xs text-brand-ink-soft leading-relaxed">
                Walking alongside families for multi-year milestones.
              </p>
            </div>

            <div className="space-y-3">
              <Globe className="w-8 h-8 text-brand-ink mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Inclusive Society</h4>
              <p className="text-xs text-brand-ink-soft leading-relaxed">
                Creating active advocacy models to build community acceptance.
              </p>
            </div>
          </div>
        </section>

        {/* --- CTA Banner --- */}
        <section className="bg-[#0f3522] text-white rounded-2xl p-8 md:p-12 relative overflow-hidden border border-[#114b30]/30 shadow-[0_8px_30px_rgba(15,53,34,0.12)]">
          <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-6">
              <Trees className="w-16 h-16 text-[#c78b32] shrink-0" />
              <div className="space-y-2">
                <h3 className="font-serif text-2xl md:text-3xl font-normal leading-snug">
                  Different journeys. One belief. <span className="text-[#c78b32] italic">Every life thrives.</span>
                </h3>
              </div>
            </div>

            {/* Micro-Features */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="space-y-1">
                <HeartHandshake className="w-5 h-5 text-[#c78b32] mx-auto" />
                <p className="text-xs font-bold text-[#faf9f6]/95 uppercase tracking-wide">Transform a Life</p>
              </div>
              <div className="space-y-1">
                <Users className="w-5 h-5 text-[#c78b32] mx-auto" />
                <p className="text-xs font-bold text-[#faf9f6]/95 uppercase tracking-wide">Strengthen Families</p>
              </div>
              <div className="space-y-1">
                <Leaf className="w-5 h-5 text-[#c78b32] mx-auto" />
                <p className="text-xs font-bold text-[#faf9f6]/95 uppercase tracking-wide">Build Inclusion</p>
              </div>
            </div>

            <div className="text-right space-y-2 shrink-0">
              <button
                onClick={() => navigate('/donate')}
                className="bg-[#c78b32] hover:bg-[#a57022] text-[#faf9f6] font-sans font-bold text-xs tracking-[0.06em] px-8 py-3.5 rounded-lg uppercase transition-all duration-200 shadow-md flex items-center gap-1.5 cursor-pointer"
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

export default WhoWeServe;
