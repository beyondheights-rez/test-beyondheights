import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, Handshake, Megaphone, Gift, ArrowRight, Quote, Trees, Star, HeartHandshake } from 'lucide-react';

const Support: React.FC = () => {
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
          {/* Left Column - Text and Quote */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="font-mono text-xs tracking-[0.1em] text-[#c78b32] uppercase font-bold flex items-center gap-3">
                <span className="w-8 h-0.5 bg-[#c78b32]" />
                SUPPORT US
              </div>
              
              <h1 className="font-serif text-[36px] md:text-[44px] lg:text-[52px] font-normal leading-[1.15] text-brand-ink">
                Be part of something bigger. <span className="text-[#c78b32] italic">Be part of the change.</span>
              </h1>
            </div>
            
            <p className="text-[15px] md:text-base text-brand-ink-soft leading-relaxed max-w-[540px]">
              Every child deserves understanding. Every family deserves support. Every community deserves inclusion. Together, we can build a world where every life has the chance to thrive.
            </p>

            {/* Elegant blockquote card */}
            <div className="bg-[#faf9f6] border border-brand-line p-5 rounded-xl space-y-2 max-w-[540px] shadow-sm">
              <span className="text-[#c78b32] font-serif text-3xl leading-none select-none block mb-1">“</span>
              <p className="font-serif italic text-base md:text-lg leading-relaxed text-[#0f3d2b] font-medium">
                Alone we can do so little. Together we can do so much.
              </p>
              <div className="flex justify-end pt-1">
                <Trees className="w-4 h-4 text-[#c78b32]" />
              </div>
            </div>
          </div>

          {/* Right Column - Clean Image Block */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-brand-line shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white p-2">
              <img 
                src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image2.jpg" 
                alt="Smiling woman and child doing high five" 
                className="w-full h-[450px] object-cover rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* --- Ways to Support Section --- */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <h3 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-[#c78b32]">
              There are many ways to join our journey
            </h3>
            <div className="w-12 h-0.5 bg-[#c78b32] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Donate Card */}
            <div className="bg-white border border-brand-line rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow h-full space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#eef2f0] text-[#0f3d2b] flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-sans text-sm font-bold text-brand-ink">Donate</h4>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  Fuel life-changing programs, therapies, education and family support.
                </p>
              </div>
              <button 
                onClick={() => navigate('/donate')}
                className="w-full bg-[#0f3d2b] hover:bg-[#0c2e20] text-white font-sans font-bold text-xs tracking-wider py-2.5 rounded-lg uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5"
              >
                Donate Now <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Volunteer Card */}
            <div className="bg-white border border-brand-line rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow h-full space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#eef2f0] text-[#0f3d2b] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-sans text-sm font-bold text-brand-ink">Volunteer</h4>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  Give your time, skills and heart. Be a part of our community.
                </p>
              </div>
              <button 
                onClick={() => navigate('/partner')}
                className="w-full bg-[#0f3d2b] hover:bg-[#0c2e20] text-white font-sans font-bold text-xs tracking-wider py-2.5 rounded-lg uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5"
              >
                Volunteer With Us <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Partner Card */}
            <div className="bg-white border border-brand-line rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow h-full space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#eef2f0] text-[#0f3d2b] flex items-center justify-center">
                  <Handshake className="w-5 h-5" />
                </div>
                <h4 className="font-sans text-sm font-bold text-brand-ink">Partner</h4>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  Collaborate with us to create programs, innovate and expand impact.
                </p>
              </div>
              <button 
                onClick={() => navigate('/partner')}
                className="w-full bg-[#0f3d2b] hover:bg-[#0c2e20] text-white font-sans font-bold text-xs tracking-wider py-2.5 rounded-lg uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5"
              >
                Partner With Us <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Spread the Word Card */}
            <div className="bg-white border border-brand-line rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow h-full space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#eef2f0] text-[#0f3d2b] flex items-center justify-center">
                  <Megaphone className="w-5 h-5" />
                </div>
                <h4 className="font-sans text-sm font-bold text-brand-ink">Spread the Word</h4>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  Share our mission and help create awareness for inclusion.
                </p>
              </div>
              <button 
                onClick={() => alert('Vision shared successfully!')}
                className="w-full bg-[#0f3d2b] hover:bg-[#0c2e20] text-white font-sans font-bold text-xs tracking-wider py-2.5 rounded-lg uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5"
              >
                Share Our Vision <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Fundraise Card */}
            <div className="bg-white border border-brand-line rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow h-full space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#eef2f0] text-[#0f3d2b] flex items-center justify-center">
                  <Gift className="w-5 h-5" />
                </div>
                <h4 className="font-sans text-sm font-bold text-brand-ink">Fundraise</h4>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  Organize a campaign or event and help us reach more lives.
                </p>
              </div>
              <button 
                onClick={() => navigate('/donate')}
                className="w-full bg-[#0f3d2b] hover:bg-[#0c2e20] text-white font-sans font-bold text-xs tracking-wider py-2.5 rounded-lg uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5"
              >
                Start Fundraising <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* --- Community Model Hero Section --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text and Quote */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="font-mono text-xs tracking-[0.1em] text-[#c78b32] uppercase font-bold flex items-center gap-3">
                <span className="w-8 h-0.5 bg-[#c78b32]" />
                COMMUNITY SUPPORT
              </div>
              
              <h2 className="font-serif text-[36px] md:text-[44px] lg:text-[52px] font-normal leading-[1.15] text-brand-ink">
                No family pays <br />only for themselves. <span className="text-[#c78b32] italic">Everyone belongs.</span>
              </h2>
            </div>
            
            <div className="text-[15px] md:text-base text-brand-ink-soft leading-relaxed max-w-[540px] space-y-4 font-sans">
              <p>
                Beyond Heights is a community built on shared belief and shared responsibility.
              </p>
              <p>
                Some families receive support. Some sustain the work. Some make it possible for another journey to begin.
              </p>
              <p className="text-[#0f3d2b] font-bold text-base md:text-lg pt-2">
                Together, we create more than opportunity. We create a future.
              </p>
            </div>

            {/* Elegant blockquote card */}
            <div className="bg-[#faf9f6] border border-brand-line p-5 rounded-xl space-y-2 max-w-[540px] shadow-sm">
              <span className="text-[#c78b32] font-serif text-3xl leading-none select-none block mb-1">“</span>
              <p className="font-serif italic text-base md:text-lg leading-relaxed text-[#0f3d2b] font-medium">
                No family pays only for themselves. Together, we build opportunity for all.
              </p>
              <div className="flex justify-end pt-1">
                <Trees className="w-4 h-4 text-[#c78b32]" />
              </div>
            </div>
          </div>

          {/* Right Column - Clean Image Block */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-brand-line shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white p-2">
              <img 
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Group of people walking together away from camera" 
                className="w-full h-[480px] object-cover rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* --- Ways to Join / Contribution Model Section --- */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <h3 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-[#c78b32]">
              There are many ways to join our journey
            </h3>
            <div className="w-12 h-0.5 bg-[#c78b32] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: I Need Support */}
            <div className="bg-white border border-brand-line rounded-xl p-8 flex gap-6 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-full bg-[#0f3d2b] text-white flex items-center justify-center shrink-0 shadow-md">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div className="flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <h4 className="font-sans text-base font-bold text-[#0f3d2b]">I Need Support</h4>
                  <p className="text-xs text-brand-ink-soft leading-relaxed">
                    I need help so my family can participate.
                  </p>
                </div>
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-[#0f3d2b] hover:bg-[#0c2e20] text-white font-sans font-bold text-xs tracking-wider py-2 px-6 rounded-lg uppercase transition-all duration-200 cursor-pointer flex items-center gap-1.5 self-start"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: I Can Cover My Family */}
            <div className="bg-white border border-brand-line rounded-xl p-8 flex gap-6 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-full bg-[#c78b32] text-white flex items-center justify-center shrink-0 shadow-md">
                <Users className="w-6 h-6" />
              </div>
              <div className="flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <h4 className="font-sans text-base font-bold text-[#c78b32]">I Can Cover My Family</h4>
                  <p className="text-xs text-brand-ink-soft leading-relaxed">
                    I can contribute the representative amount for my family's participation.
                  </p>
                </div>
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-[#0f3d2b] hover:bg-[#0c2e20] text-white font-sans font-bold text-xs tracking-wider py-2 px-6 rounded-lg uppercase transition-all duration-200 cursor-pointer flex items-center gap-1.5 self-start"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3: I Can Help Another Family */}
            <div className="bg-white border border-brand-line rounded-xl p-8 flex gap-6 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-full bg-[#5c4174] text-white flex items-center justify-center shrink-0 shadow-md">
                <Heart className="w-6 h-6" />
              </div>
              <div className="flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <h4 className="font-sans text-base font-bold text-[#5c4174]">I Can Help Another Family</h4>
                  <p className="text-xs text-brand-ink-soft leading-relaxed">
                    I can contribute more so another family can receive the same opportunity.
                  </p>
                </div>
                <button 
                  onClick={() => navigate('/donate')}
                  className="bg-[#0f3d2b] hover:bg-[#0c2e20] text-white font-sans font-bold text-xs tracking-wider py-2 px-6 rounded-lg uppercase transition-all duration-200 cursor-pointer flex items-center gap-1.5 self-start"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- Impact Section 2 --- */}
        <section className="bg-brand-bg-alt border border-brand-line rounded-2xl p-8 md:p-12 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-12 items-center">
            <div className="space-y-4 border-b lg:border-b-0 lg:border-r border-brand-line pb-8 lg:pb-0 lg:pr-8">
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-[#0f3d2b]">
                Your support makes an impact
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              <div className="space-y-2">
                <Users className="w-6 h-6 text-[#0f3d2b] mx-auto" />
                <div className="font-serif text-xl font-bold text-brand-ink">500+</div>
                <p className="text-xs text-brand-ink-soft leading-snug">Children and young adults supported every year</p>
              </div>

              <div className="space-y-2">
                <CompassIcon className="w-6 h-6 text-[#0f3d2b] mx-auto" />
                <div className="font-serif text-xl font-bold text-brand-ink">10+</div>
                <p className="text-xs text-brand-ink-soft leading-snug">Centers and active programs across India</p>
              </div>

              <div className="space-y-2">
                <HeartHandshakeIcon className="w-6 h-6 text-[#0f3d2b] mx-auto" />
                <div className="font-serif text-xl font-bold text-brand-ink">50,000+</div>
                <p className="text-xs text-brand-ink-soft leading-snug">Therapy, education and training sessions delivered</p>
              </div>

              <div className="space-y-2 flex flex-col justify-center">
                <GraduationIcon className="w-6 h-6 text-[#0f3d2b] mx-auto mb-1" />
                <h4 className="font-sans font-bold text-xs uppercase text-brand-ink">Stronger Families</h4>
              </div>

              <div className="space-y-2 flex flex-col justify-center">
                <GlobeIcon className="w-6 h-6 text-[#0f3d2b] mx-auto mb-1" />
                <h4 className="font-sans font-bold text-xs uppercase text-brand-ink">Inclusive Communities</h4>
              </div>

              <div className="space-y-2 flex flex-col justify-center">
                <HeartIcon className="w-6 h-6 text-[#0f3d2b] mx-auto mb-1" />
                <h4 className="font-sans font-bold text-xs uppercase text-brand-ink">Brighter Futures</h4>
              </div>
            </div>
          </div>
        </section>

        {/* --- Community Banner Section 2 --- */}
        <section className="bg-[#0f3d2b] text-white rounded-2xl overflow-hidden border border-[#114b35]/30 shadow-[0_8px_30px_rgba(15,61,43,0.12)] grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Image Column */}
          <div className="lg:col-span-3 min-h-[250px] relative">
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Hands stacked together" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-center space-y-8">
            <h2 className="font-serif text-2xl md:text-3xl font-normal leading-snug">
              Join a community that believes in empathy, inclusion and the power of human potential.
            </h2>
            <div className="flex flex-wrap gap-8 md:gap-12">
              <div className="flex flex-col items-center text-center space-y-2">
                <Heart className="w-6 h-6 text-[#c78b32]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#f4f4f0]/95">Care deeply</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <Users className="w-6 h-6 text-[#c78b32]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#f4f4f0]/95">Act together</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <Trees className="w-6 h-6 text-[#c78b32]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#f4f4f0]/95">Create change</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <Star className="w-6 h-6 text-[#c78b32]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#f4f4f0]/95">Leave a legacy</span>
              </div>
            </div>
          </div>

          {/* Quote Column */}
          <div className="lg:col-span-3 p-8 md:p-12 bg-[#0c3122] flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 relative min-h-[220px]">
            <div className="font-serif text-xs md:text-sm leading-relaxed text-[#f4f4f0]/90 space-y-4">
              <p>
                <span className="text-[#c78b32] font-sans font-bold text-xs uppercase tracking-wider block mb-1">Be the reason</span>
                a child smiles today.
              </p>
              <p>
                <span className="text-[#c78b32] font-sans font-bold text-xs uppercase tracking-wider block mb-1">Be the reason</span>
                a family feels hope.
              </p>
              <p>
                <span className="text-[#c78b32] font-sans font-bold text-xs uppercase tracking-wider block mb-1">Be the reason</span>
                a world becomes more inclusive.
              </p>
            </div>
            <div className="flex justify-end">
              <Trees className="w-8 h-8 text-[#c78b32] opacity-80" />
            </div>
          </div>
        </section>

        {/* --- Testimonials Section 2 --- */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <h3 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-[#c78b32]">
              Voices from our community
            </h3>
            <div className="w-12 h-0.5 bg-[#c78b32] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#fcfcfa] border border-brand-line rounded-xl p-8 space-y-6 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#c78b32] rotate-180 opacity-40" />
                <p className="font-serif italic text-xs leading-relaxed text-brand-ink">
                  Volunteering at Beyond Heights changed my perspective on life. The love and joy here are beyond words.
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-brand-line/40 pt-4 mt-4">
                <span className="font-sans font-bold text-xs uppercase text-brand-muted">
                  — Volunteer, Bengaluru
                </span>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Volunteer portrait" 
                  className="w-10 h-10 rounded-full object-cover border border-brand-line"
                />
              </div>
            </div>

            <div className="bg-[#fcfcfa] border border-brand-line rounded-xl p-8 space-y-6 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#c78b32] rotate-180 opacity-40" />
                <p className="font-serif italic text-xs leading-relaxed text-brand-ink">
                  Beyond Heights gave my son confidence, skills and a future we once thought impossible. Today, he dreams big.
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-brand-line/40 pt-4 mt-4">
                <span className="font-sans font-bold text-xs uppercase text-brand-muted">
                  — Parent, Pune
                </span>
                <img 
                  src="https://images.unsplash.com/photo-1609132718484-cc90df3417f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Parent portrait" 
                  className="w-10 h-10 rounded-full object-cover border border-brand-line"
                />
              </div>
            </div>

            <div className="bg-[#fcfcfa] border border-brand-line rounded-xl p-8 space-y-6 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#c78b32] rotate-180 opacity-40" />
                <p className="font-serif italic text-xs leading-relaxed text-brand-ink">
                  Partnering with Beyond Heights has been one of the most meaningful decisions our organization has made.
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-brand-line/40 pt-4 mt-4">
                <span className="font-sans font-bold text-xs uppercase text-brand-muted">
                  — Partner Organization
                </span>
                <img 
                  src="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Partner holding a small plant" 
                  className="w-10 h-10 rounded-full object-cover border border-brand-line"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- Bottom CTA Section 2 --- */}
        <section className="bg-[#0f3d2b] text-white rounded-2xl p-8 md:p-12 relative overflow-hidden border border-[#114b35]/30 shadow-[0_8px_30px_rgba(15,61,43,0.12)]">
          <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl md:text-3xl font-normal leading-snug">
                Together, we can go beyond.<br />Together, we can reach <span className="text-[#c78b32] italic">new heights.</span>
              </h2>
            </div>
            
            <div className="font-serif text-sm italic text-[#f4f4f0]/80 border-l border-white/20 pl-6 py-2">
              Join us in building a world where<br />every life has the chance to thrive.
            </div>

            <button
              onClick={() => navigate('/donate')}
              className="bg-[#c78b32] hover:bg-[#a57022] text-[#faf9f6] font-sans font-bold text-xs tracking-[0.06em] px-8 py-3.5 rounded-lg uppercase transition-all duration-200 shadow-md flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              JOIN OUR MISSION <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

// Inline helper SVG representations to replace FA icons
const CompassIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const HeartHandshakeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
  </svg>
);

const GraduationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

const GlobeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    <path d="M2 12h20" />
  </svg>
);

const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

export default Support;
