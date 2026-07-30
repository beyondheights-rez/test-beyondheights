import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, Globe, Star, Brain, Ribbon, UserCheck, HeartHandshake, BookOpen, Handshake, Landmark, Trees, ArrowRight, Quote } from 'lucide-react';

const Impact: React.FC = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="bg-white text-brand-ink min-h-screen">

      {/* --- Hero Section --- */}
      <section className="relative w-full min-h-[90vh] flex items-center bg-white border-b border-brand-line pt-36 pb-20 overflow-hidden">
        {/* Background image & gradient overlays (Strictly right half on desktop) */}
        <div className="absolute inset-0 lg:left-1/2 z-0">
          <img 
            src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/hand.png" 
            alt="Parent holding child's hand" 
            className="w-full h-full object-cover object-right opacity-100"
          />
          {/* Desktop left-edge smoky transition: blends the left edge of the image with the white page background */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent hidden lg:block" />
          {/* Mobile bottom smoky transition: blends the bottom edge of the image with the text content */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent block lg:hidden" />
        </div>

        {/* Content Container */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Eyebrow, Title, Description, Metrics */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Eyebrow & Underline */}
            <div className="space-y-2">
              <span className="font-mono text-xs tracking-[0.15em] text-[#123524] uppercase font-bold">
                OUR IMPACT
              </span>
              <div className="w-6 h-0.5 bg-[#123524]" />
            </div>

            {/* Title: Serif typography with bold font weight (except 'entire circle') */}
            <h1 className="font-serif text-[36px] sm:text-[46px] lg:text-[54px] font-medium leading-[1.15] text-brand-ink tracking-tight">
              We serve the child.<br />
              We strengthen the<br />
              <span className="text-[#c18831] italic font-normal">entire circle</span> around them.
            </h1>

            {/* Description list */}
            <div className="text-slate-600 text-[15px] md:text-base leading-relaxed space-y-1 font-sans">
              <p>Every child deserves the right support.</p>
              <p>Every family deserves the right partner.</p>
              <p>Every community deserves a more inclusive future.</p>
              <p>At Beyond Heights, we measure our success in</p>
              <p>the daily transformations of children and families.</p>
            </div>

            {/* Metrics Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-brand-line/60 max-w-[560px]">
              
              {/* Column 1 */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2 border-r border-brand-line/60 last:border-0 pr-4">
                <Users className="w-6 h-6 text-[#123524]" />
                <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-[#123524] leading-none">
                  CHILDREN
                </span>
              </div>
              
              {/* Column 2 */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2 border-r border-brand-line/60 last:border-0 pr-4">
                <Users className="w-6 h-6 text-[#c18831]" />
                <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-[#c18831] leading-none">
                  FAMILIES
                </span>
              </div>
              
              {/* Column 3 */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2 border-r border-brand-line/60 last:border-0 pr-4">
                <Users className="w-6 h-6 text-[#9a82dd]" />
                <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-[#9a82dd] leading-none">
                  COMMUNITIES
                </span>
              </div>
              
              {/* Column 4 */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
                <Heart className="w-6 h-6 text-[#5aab7c]" />
                <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-[#5aab7c] leading-none">
                  INCLUSIVE FUTURE
                </span>
              </div>
              
            </div>

          </div>

          {/* Right Column: Kept empty to showcase hands image */}
          <div className="lg:col-span-5" />

        </div>
      </section>

      {/* Main Grid Wrapper for remaining sections */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 space-y-24 mt-24">

        {/* --- Primary Beneficiaries Section --- */}
        <section className="w-screen relative left-1/2 -translate-x-1/2 bg-brand-bg-alt border-y border-brand-line py-16 scroll-mt-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 space-y-12">
            <div className="text-center space-y-4">
              <h3 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-[#c68a2c]">
                Our Primary Beneficiaries
              </h3>
              <div className="w-12 h-0.5 bg-[#c68a2c] mx-auto" />
              <p className="text-sm text-brand-ink-soft max-w-[600px] mx-auto pt-2">
                Our structured programs and specialized training target the individual, the family unit, and the broader social landscape.
              </p>
            </div>

          </div>

          {/* Alternating Row List that fills the screen */}
          <div className="mt-16 border-t border-brand-line">
            {[
              {
                id: 'ben-autism',
                title: 'Children with Autism',
                eyebrow: '01 / FOCUS',
                description: 'We support children across the spectrum to learn, grow, and thrive in their own unique way.',
                icon: Brain,
                gradient: 'from-[#5aab7c]/20 to-[#3fada7]/10',
                iconColor: 'text-[#0d3b26]',
              },
              {
                id: 'ben-down-syndrome',
                title: 'Down Syndrome',
                eyebrow: '02 / INDEPENDENCE',
                description: 'Helping children build self-confidence, motor capabilities, and social independence.',
                icon: Heart,
                gradient: 'from-[#dd9a3c]/20 to-[#c68a2c]/10',
                iconColor: 'text-[#c68a2c]',
              },
              {
                id: 'ben-cancer',
                title: 'Navigating Cancer',
                eyebrow: '03 / CARE',
                description: 'Walking alongside families during the toughest pathways with compassion and care.',
                icon: Ribbon,
                gradient: 'from-[#9a82dd]/20 to-[#dd7a9e]/10',
                iconColor: 'text-[#5c4174]',
              },
              {
                id: 'ben-young-adults',
                title: 'Young Adults',
                eyebrow: '04 / VOCATION',
                description: 'Preparing young adults for meaningful, vocational, and independent lives.',
                icon: UserCheck,
                gradient: 'from-[#5a86e0]/20 to-[#3fada7]/10',
                iconColor: 'text-[#0d47a1]',
              },
              {
                id: 'ben-families',
                title: 'Families',
                eyebrow: '05 / COMMUNITY SUPPORT',
                description: 'Empowering parents and siblings with support systems, education, and community.',
                icon: Users,
                gradient: 'from-[#3fada7]/20 to-[#5aab7c]/10',
                iconColor: 'text-[#0f3d2b]',
              },
              {
                id: 'ben-communities',
                title: 'Communities',
                eyebrow: '06 / INCLUSION',
                description: 'Building inclusive, highly compassionate, and supportive local ecosystems.',
                icon: Globe,
                gradient: 'from-[#dd7a9e]/20 to-[#dd9a3c]/10',
                iconColor: 'text-[#dd9a3c]',
              }
            ].map((ben, index) => {
              const Icon = ben.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={ben.id}
                  id={ben.id}
                  className="w-full min-h-[500px] lg:min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 items-stretch border-b border-brand-line last:border-b-0 scroll-mt-28"
                >
                  {/* Icon Block (Left on Even, Right on Odd) */}
                  <div className={`relative flex items-center justify-center p-12 overflow-hidden bg-gradient-to-br ${ben.gradient} ${!isEven ? 'lg:order-2' : 'lg:order-1'} border-b lg:border-b-0 lg:border-r border-brand-line/40 last:border-r-0`}>
                    {/* Decorative grid pattern in background */}
                    <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:18px_30px]" />
                    <div className="absolute w-64 h-64 rounded-full bg-white/20 blur-3xl pointer-events-none" />
                    
                    {/* Glass Container for Large Icon */}
                    <div className="relative group cursor-pointer transition-transform duration-500 hover:scale-105">
                      <div className="w-36 h-36 rounded-full bg-[#faf9f6]/80 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/35 transition-all duration-300 group-hover:shadow-2xl">
                        <Icon className={`w-16 h-16 ${ben.iconColor} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`} />
                      </div>
                    </div>
                  </div>

                  {/* Text Content Block (Right on Even, Left on Odd) */}
                  <div className={`flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-white ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="max-w-[450px] mx-auto space-y-5">
                      <div className="font-mono text-[9px] tracking-[0.1em] text-[#c68a2c] font-bold uppercase">
                        {ben.eyebrow}
                      </div>
                      <h4 className="font-serif text-2xl md:text-3xl font-normal leading-tight text-brand-ink">
                        {ben.title}
                      </h4>
                      <p className="text-xs md:text-sm text-brand-ink-soft leading-relaxed">
                        {ben.description}
                      </p>
                      <button
                        onClick={() => navigate('/our-approach')}
                        className="inline-flex items-center gap-1 text-[10px] font-sans font-bold uppercase tracking-wider text-[#c68a2c] hover:text-[#a87220] transition-colors pt-2 group cursor-pointer"
                      >
                        Our Structured Pacing <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- Who Makes It Possible --- */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <h3 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-[#c68a2c]">
              Who Makes It Possible
            </h3>
            <div className="w-12 h-0.5 bg-[#c68a2c] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                title: 'Therapists & Experts',
                desc: 'Our multidisciplinary experts bring science and compassion together.',
                icon: Heart,
                image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80',
                circleBg: 'bg-[#5aab7c]',
              },
              {
                title: 'Educators',
                desc: "Inclusive, personal education that adapts to every child's pacing.",
                icon: BookOpen,
                image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=400&q=80',
                circleBg: 'bg-[#dd9a3c]',
              },
              {
                title: 'Volunteers',
                desc: 'Every volunteer amplifies our ability to connect and create impact.',
                icon: HeartHandshake,
                image: 'https://images.unsplash.com/photo-1559027615-cd4487df136b?auto=format&fit=crop&w=400&q=80',
                circleBg: 'bg-[#9a82dd]',
              },
              {
                title: 'Donors & Partners',
                desc: 'Your belief and active backing turn possibilities into realities.',
                icon: Handshake,
                image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=400&q=80',
                circleBg: 'bg-[#dd7a9e]',
              },
              {
                title: 'Corporate Partners',
                desc: 'Forward-looking companies that prioritize purpose over simple performance.',
                icon: Landmark,
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
                circleBg: 'bg-[#5a86e0]',
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={`possible-${idx}`}
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

        {/* --- Commitments Section --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Dark Box */}
          <div className="bg-[#0d3b26] text-white rounded-2xl p-10 flex flex-col justify-center min-h-[300px] border border-[#0f4d32]/30 relative overflow-hidden shadow-sm">
            <div className="relative z-10 space-y-4 max-w-[80%]">
              <div className="font-mono text-xs tracking-[0.1em] text-[#c68a2c] font-bold uppercase">
                OUR COMMITMENT
              </div>
              <h2 className="font-serif text-2xl md:text-3xl leading-snug">
                We serve with empathy, evidence, and excellence.
              </h2>
            </div>
            
            {/* Silhouette tree backing shape */}
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10 pointer-events-none">
              <Trees className="w-48 h-48 text-[#c68a2c]" />
            </div>
          </div>

          {/* Light Box */}
          <div className="bg-[#f6f4ed] border border-brand-line rounded-2xl p-10 flex flex-col justify-center min-h-[300px] relative overflow-hidden shadow-sm">
            <div className="relative z-10 space-y-4">
              <Quote className="w-8 h-8 text-[#c68a2c] rotate-180 opacity-40" />
              <h2 className="font-serif text-2xl leading-snug text-brand-ink">
                Inclusion is not charity. It is the future we choose to build—together.
              </h2>
              <p className="font-mono text-xs uppercase tracking-wider text-brand-muted">
                — Beyond Heights
              </p>
            </div>
          </div>

        </section>

        {/* --- Bottom CTA Section --- */}
        <section className="bg-[#f6f4ed] border border-brand-line rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <h2 className="font-serif text-xl md:text-2xl text-brand-ink leading-snug">
                When we support every child, we create a <span className="text-[#c68a2c] italic">better world for all.</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-1">
                <Heart className="w-5 h-5 text-brand-ink mx-auto" />
                <p className="text-xs font-bold text-brand-ink uppercase tracking-wide">Support a Child</p>
              </div>
              <div className="space-y-1">
                <Users className="w-5 h-5 text-brand-ink mx-auto" />
                <p className="text-xs font-bold text-brand-ink uppercase tracking-wide">Strengthen a Family</p>
              </div>
              <div className="space-y-1">
                <Globe className="w-5 h-5 text-brand-ink mx-auto" />
                <p className="text-xs font-bold text-brand-ink uppercase tracking-wide">Build Inclusion</p>
              </div>
              <div className="space-y-1">
                <Star className="w-5 h-5 text-brand-ink mx-auto" />
                <p className="text-xs font-bold text-brand-ink uppercase tracking-wide">Create Change</p>
              </div>
            </div>

            <button
              onClick={() => navigate('/partner')}
              className="bg-[#c68a2c] hover:bg-[#a87220] text-white font-sans font-bold text-xs tracking-[0.06em] px-8 py-3.5 rounded-lg uppercase transition-all duration-200 shadow-md flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              GET INVOLVED <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Impact;
