import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Puzzle, Ribbon, Brain, Heart, ShieldAlert, TrendingUp, Users, Footprints, Calendar, Sun, MessageSquare, Handshake, Share2, Play, Users2, DoorOpen, BookOpen, Star, ArrowRight, HeartCrack, HelpCircle, Trees, Activity, Sprout, Quote, Fingerprint, Check, Lock, IndianRupee } from 'lucide-react';

const Athletics: React.FC = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="pt-20 bg-brand-bg text-brand-ink min-h-screen space-y-24 pb-20">
      
      {/* ======================================================== */}
      {/* PART 1: THE BEYOND EVENTS - BEYOND HEIGHTS MARATHON 2026 */}
      {/* ======================================================== */}
      <div>
        {/* --- Hero Section --- */}
        <section className="relative py-36 px-6 md:px-12 flex items-center min-h-[80vh] text-white bg-gradient-to-br from-[#072419] to-[#03110b] overflow-hidden">
          {/* Subtle abstract glows in the background */}
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#c95c27]/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-[#0a2e21]/40 blur-[80px] pointer-events-none" />
          
          <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10">
            <div className="space-y-6 max-w-[620px]">
              <div className="font-mono text-xs tracking-[0.2em] text-[#c95c27] uppercase font-bold flex items-center gap-3">
                <span className="w-8 h-0.5 bg-[#c95c27]" />
                THE BEYOND EVENTS. ONE PURPOSE.
              </div>
              
              <h1 className="font-serif text-[36px] md:text-[44px] lg:text-[52px] font-bold leading-[1.15] text-white">
                EVERY LIFE<br />WILL BE<br />
                <span className="text-[#c95c27] italic">TESTED.</span>
              </h1>
              
              <h3 className="font-serif text-xl md:text-2xl font-light text-slate-300">
                What happens next reveals our resilience.
              </h3>
              
              <p className="text-[15px] md:text-base text-slate-300 leading-relaxed font-medium">
                Different events. Different stories. Different people. One purpose. No one plays alone.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => navigate('/donate')}
                  className="bg-[#c95c27] hover:bg-[#b04a1b] text-white font-sans font-bold text-xs tracking-[0.06em] px-8 py-3.5 rounded-lg uppercase transition-all duration-200 shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  Register for the Marathon <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => navigate('/story')}
                  className="border border-white hover:bg-white hover:text-[#0a2e21] text-white font-sans font-bold text-xs tracking-[0.06em] px-8 py-3.5 rounded-lg uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current text-[#c95c27]" /> Watch the Story
                </button>
              </div>
            </div>

            {/* Hero Image Block (Right Side) */}
            <div className="relative flex justify-center items-center">
              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.3)] bg-white/5 backdrop-blur-sm p-2 w-full max-w-[540px]">
                <img 
                  src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/index-Hero-section/family3.JPG" 
                  alt="Beyond Heights Marathon" 
                  className="w-full h-auto object-cover rounded-xl max-h-[480px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- Icon Banner --- */}
        <section className="bg-[#0a2e21] text-white py-12 border-t border-white/10">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 space-y-8">
            <h3 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#c95c27] text-center">
              DIFFERENT EVENTS. ONE PURPOSE.
            </h3>
            
            <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-11 gap-6 text-center">
              <div className="space-y-2">
                <Puzzle className="w-6 h-6 text-[#c95c27] mx-auto" />
                <p className="font-sans font-bold text-xs tracking-wide uppercase text-slate-300">Autism</p>
              </div>
              <div className="space-y-2">
                <Ribbon className="w-6 h-6 text-[#c95c27] mx-auto" />
                <p className="font-sans font-bold text-xs tracking-wide uppercase text-slate-300">Down Syndrome</p>
              </div>
              <div className="space-y-2">
                <Ribbon className="w-6 h-6 text-pink-500 mx-auto" />
                <p className="font-sans font-bold text-xs tracking-wide uppercase text-slate-300">Cancer</p>
              </div>
              <div className="space-y-2">
                <HelpCircle className="w-6 h-6 text-[#c95c27] mx-auto" />
                <p className="font-sans font-bold text-xs tracking-wide uppercase text-slate-300">Disability</p>
              </div>
              <div className="space-y-2">
                <Brain className="w-6 h-6 text-[#c95c27] mx-auto" />
                <p className="font-sans font-bold text-xs tracking-wide uppercase text-slate-300">Mental Health</p>
              </div>
              <div className="space-y-2">
                <Activity className="w-6 h-6 text-[#c95c27] mx-auto" />
                <p className="font-sans font-bold text-xs tracking-wide uppercase text-slate-300">Obesity</p>
              </div>
              <div className="space-y-2">
                <Sprout className="w-6 h-6 text-[#c95c27] mx-auto" />
                <p className="font-sans font-bold text-xs tracking-wide uppercase text-slate-300">Diabetes</p>
              </div>
              <div className="space-y-2">
                <ShieldAlert className="w-6 h-6 text-[#c95c27] mx-auto" />
                <p className="font-sans font-bold text-xs tracking-wide uppercase text-slate-300">Cybercrime</p>
              </div>
              <div className="space-y-2">
                <TrendingUp className="w-6 h-6 text-[#c95c27] mx-auto" />
                <p className="font-sans font-bold text-xs tracking-wide uppercase text-slate-300">Financial Loss</p>
              </div>
              <div className="space-y-2">
                <HeartCrack className="w-6 h-6 text-[#c95c27] mx-auto" />
                <p className="font-sans font-bold text-xs tracking-wide uppercase text-slate-300">Grief</p>
              </div>
              <div className="space-y-2">
                <Users className="w-6 h-6 text-[#c95c27] mx-auto" />
                <p className="font-sans font-bold text-xs tracking-wide uppercase text-slate-300">Betrayal</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Belief Section --- */}
        <section className="bg-brand-bg-alt py-24 border-b border-brand-line">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-serif text-[2.5rem] font-bold text-brand-ink leading-[1.2]">
                Two Expressions.<br />
                <span className="text-[#c95c27] italic">One Belief.</span>
              </h2>
              <p className="text-[1.05rem] text-brand-ink-soft leading-relaxed max-w-[500px]">
                <strong>Beyond Heights</strong> builds resilience in people.<br />
                <strong>Rezilyens</strong> builds resilience in organizations.<br />
                Together, we build a more resilient world.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="space-y-4 border-l-2 border-[#c95c27] pl-4">
                  <h3 className="font-serif text-lg font-bold text-[#0a2e21]">Beyond Heights</h3>
                  <p className="text-xs text-brand-ink-soft">The human expression of resilience.</p>
                  <button 
                    onClick={() => navigate('/about')}
                    className="bg-[#0a2e21] hover:bg-[#071c14] text-white font-sans font-bold text-xs tracking-wider px-5 py-2.5 rounded uppercase transition-all duration-200 cursor-pointer"
                  >
                    Learn More &rarr;
                  </button>
                </div>

                <div className="space-y-4 border-l-2 border-slate-300 pl-4">
                  <h3 className="font-serif text-lg font-bold text-[#0a2e21]">rezilyens</h3>
                  <p className="text-xs text-brand-ink-soft">The enterprise expression of resilience.</p>
                  <button 
                    onClick={() => navigate('/partner')}
                    className="bg-[#0a2e21] hover:bg-[#071c14] text-white font-sans font-bold text-xs tracking-wider px-5 py-2.5 rounded uppercase transition-all duration-200 cursor-pointer"
                  >
                    Learn More &rarr;
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              {/* Infographic block with circular image representation */}
              <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-full border-4 border-[#c95c27] overflow-hidden shadow-lg p-2 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Infographic circular backdrop showing nature"
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute inset-0 bg-[#0a2e21]/20 flex items-center justify-center">
                  <Trees className="w-16 h-16 text-[#c95c27] drop-shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Why A Marathon Section --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#0a2e21] text-white p-8 md:p-16 flex flex-col justify-center space-y-8">
            <h2 className="font-serif text-[2.5rem] font-bold leading-tight">
              Why a Marathon?
            </h2>
            <p className="text-[1.1rem] text-slate-300 leading-relaxed max-w-[500px]">
              Because resilience is rarely one heroic moment.<br />
              It is usually a thousand ordinary ones.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 py-4 text-center">
              <div className="space-y-2">
                <Footprints className="w-6 h-6 text-[#c95c27] mx-auto" />
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wide">One more step</p>
              </div>
              <div className="space-y-2">
                <Calendar className="w-6 h-6 text-[#c95c27] mx-auto" />
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wide">One appointment</p>
              </div>
              <div className="space-y-2">
                <Heart className="w-6 h-6 text-[#c95c27] mx-auto" />
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wide">One act of courage</p>
              </div>
              <div className="space-y-2">
                <Users2 className="w-6 h-6 text-[#c95c27] mx-auto" />
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wide">One conversation</p>
              </div>
              <div className="space-y-2">
                <Sun className="w-6 h-6 text-[#c95c27] mx-auto" />
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wide">One more morning</p>
              </div>
            </div>

            <p className="text-[#c95c27] font-serif italic text-base font-semibold">
              Not every step is fast. But every step forward matters.
            </p>
            
            <button 
              onClick={() => navigate('/story')}
              className="border border-white hover:bg-white hover:text-[#0a2e21] text-white font-sans font-bold text-xs tracking-[0.06em] px-8 py-3.5 rounded-lg uppercase transition-all duration-200 flex items-center gap-1.5 cursor-pointer w-fit"
            >
              The Marathon Story &rarr;
            </button>
          </div>

          <div 
            className="min-h-[400px] lg:min-h-auto bg-cover bg-center"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1530143311094-34d807799e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')` 
            }}
          />
        </section>

        {/* --- Movement Section --- */}
        <section className="bg-brand-bg py-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-center">
            <div className="space-y-4">
              <h2 className="font-serif text-[2.5rem] font-bold text-brand-ink leading-tight">
                This is not a race.<br />
                <span className="text-[#c95c27] italic">It is a movement.</span>
              </h2>
              <p className="text-[1rem] text-brand-ink-soft leading-relaxed max-w-[400px]">
                You don't have to run far to make a difference. You just have to care enough to show up.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div className="space-y-3">
                <Footprints className="w-8 h-8 text-[#c95c27] mx-auto" />
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Run For Someone</h4>
                <p className="text-xs text-brand-ink-soft leading-relaxed">Carry their name. Carry their story.</p>
              </div>

              <div className="space-y-3">
                <Handshake className="w-8 h-8 text-[#c95c27] mx-auto" />
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Partner Movement</h4>
                <p className="text-xs text-brand-ink-soft leading-relaxed">Organizations creating changes collectively.</p>
              </div>

              <div className="space-y-3">
                <Heart className="w-8 h-8 text-[#c95c27] mx-auto" />
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Help Someone Rise</h4>
                <p className="text-xs text-brand-ink-soft leading-relaxed">Your support. Their new beginning.</p>
              </div>

              <div className="space-y-3">
                <Users className="w-8 h-8 text-[#c95c27] mx-auto" />
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Volunteer</h4>
                <p className="text-xs text-brand-ink-soft leading-relaxed">Your time. Their structural strength.</p>
              </div>

              <div className="space-y-3">
                <Share2 className="w-8 h-8 text-[#c95c27] mx-auto" />
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Share the Word</h4>
                <p className="text-xs text-brand-ink-soft leading-relaxed">Spread active hope. Inspire others.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Quote Banner --- */}
        <section 
          className="relative bg-cover bg-center py-24 px-6 md:px-12 text-white flex items-center"
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(10, 46, 33, 0.95) 40%, rgba(10, 46, 33, 0.7)), url('https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` 
          }}
        >
          <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div className="space-y-4">
              <Quote className="w-10 h-10 text-[#c95c27] rotate-180 opacity-40" />
              <h2 className="font-serif text-2xl md:text-3xl leading-snug">
                We do not promise an easier life. We help make a fuller life possible.
              </h2>
            </div>

            <div className="grid grid-cols-5 gap-4 text-center">
              <div className="space-y-2">
                <Users className="w-6 h-6 text-[#c95c27] mx-auto" />
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wide">Community</p>
              </div>
              <div className="space-y-2">
                <DoorOpen className="w-6 h-6 text-[#c95c27] mx-auto" />
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wide">Opportunity</p>
              </div>
              <div className="space-y-2">
                <BookOpen className="w-6 h-6 text-[#c95c27] mx-auto" />
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wide">Experience</p>
              </div>
              <div className="space-y-2">
                <Handshake className="w-6 h-6 text-[#c95c27] mx-auto" />
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wide">Support</p>
              </div>
              <div className="space-y-2">
                <Star className="w-6 h-6 text-[#c95c27] mx-auto" />
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wide">Belief</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="bg-brand-bg-alt py-24 border-t border-brand-line">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
            <div className="space-y-6">
              <h2 className="font-serif text-[2.5rem] font-bold text-brand-ink leading-tight">
                Join the Movement.<br />
                <span className="text-[#c95c27] italic">Be part of something bigger than yourself.</span>
              </h2>
              <p className="text-xs text-brand-ink-soft leading-relaxed max-w-[340px]">
                Every step honors someone who kept going.<br />
                Every participant helps someone feel seen.<br />
                Every story reminds us that adversity may change a life—but it does not get to define everything that life can still become.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              
              <div className="bg-white border border-brand-line rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-all space-y-6 text-center">
                <div className="space-y-3">
                  <Footprints className="w-8 h-8 text-[#c95c27] mx-auto" />
                  <h4 className="font-sans font-bold text-xs uppercase text-brand-ink">Register Marathon</h4>
                  <p className="text-xs text-brand-ink-soft">Run your distance. Change a life.</p>
                </div>
                <button 
                  onClick={() => navigate('/donate')}
                  className="w-full bg-[#0a2e21] hover:bg-[#071c14] text-white font-sans font-bold text-xs tracking-wider py-2.5 rounded uppercase transition-all duration-200 cursor-pointer"
                >
                  Register Now &rarr;
                </button>
              </div>

              <div className="bg-white border border-brand-line rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-all space-y-6 text-center">
                <div className="space-y-3">
                  <Heart className="w-8 h-8 text-[#c95c27] mx-auto" />
                  <h4 className="font-sans font-bold text-xs uppercase text-brand-ink">Run for Someone</h4>
                  <p className="text-xs text-brand-ink-soft">Carry their name. Carry their story.</p>
                </div>
                <button 
                  onClick={() => navigate('/partner')}
                  className="w-full bg-[#0a2e21] hover:bg-[#071c14] text-white font-sans font-bold text-xs tracking-wider py-2.5 rounded uppercase transition-all duration-200 cursor-pointer"
                >
                  Learn More &rarr;
                </button>
              </div>

              <div className="bg-white border border-brand-line rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-all space-y-6 text-center">
                <div className="space-y-3">
                  <Handshake className="w-8 h-8 text-[#c95c27] mx-auto" />
                  <h4 className="font-sans font-bold text-xs uppercase text-brand-ink">Partner Movement</h4>
                  <p className="text-xs text-brand-ink-soft">Build Impact. Create change.</p>
                </div>
                <button 
                  onClick={() => navigate('/partner')}
                  className="w-full bg-[#0a2e21] hover:bg-[#071c14] text-white font-sans font-bold text-xs tracking-wider py-2.5 rounded uppercase transition-all duration-200 cursor-pointer"
                >
                  Partner With Us &rarr;
                </button>
              </div>

              <div className="bg-white border border-brand-line rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-all space-y-6 text-center">
                <div className="space-y-3">
                  <MessageSquare className="w-8 h-8 text-[#c95c27] mx-auto" />
                  <h4 className="font-sans font-bold text-xs uppercase text-brand-ink">Help Someone Rise</h4>
                  <p className="text-xs text-brand-ink-soft">Your support creates their future.</p>
                </div>
                <button 
                  onClick={() => navigate('/donate')}
                  className="w-full bg-[#0a2e21] hover:bg-[#071c14] text-white font-sans font-bold text-xs tracking-wider py-2.5 rounded uppercase transition-all duration-200 cursor-pointer"
                >
                  Donate Now &rarr;
                </button>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* ============================================== */}
      {/* PART 2: EVERY LIFE HAS A MOUNTAIN (SECTION 2) */}
      {/* ============================================== */}
      <div className="space-y-24 border-t border-brand-line pt-20">
        
        {/* --- Hero Section 2 --- */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[1.2fr_2fr_1fr] gap-12 items-center">
          <div className="space-y-6">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#c95c27]">
              The Beyond Heights Marathon
            </h4>
            <h1 className="font-serif text-[36px] md:text-[44px] lg:text-[52px] font-black leading-none text-[#0a2e21]">
              EVERY LIFE<br />HAS A<br />
              <span className="text-[#c95c27] italic">MOUNTAIN.</span>
            </h1>
            <p className="text-sm font-semibold text-brand-ink leading-relaxed">
              The mountains are different.<br />
              The human need is not.<br />
              No one should climb alone.
            </p>
            <p className="text-xs text-brand-ink-soft font-bold leading-normal">
              Run for your mountain.<br />
              Walk beside someone climbing theirs.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-brand-line shadow-md bg-white p-2">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Group of people facing mountains" 
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          <div className="space-y-6 md:pl-4">
            <div className="relative">
              <span className="absolute top-[-35px] left-[-15px] font-serif text-5xl text-[#c95c27] leading-none opacity-40">“</span>
              <p className="font-serif text-sm font-semibold leading-relaxed text-brand-ink-soft relative z-10 pt-2">
                It is not the mountain that defines us. It is how we climb together.
              </p>
            </div>
            <Trees className="w-8 h-8 text-[#0a2e21]" />
          </div>
        </section>

        {/* --- Icons Banner 2 --- */}
        <section className="bg-[#eee9e0] border-t border-b border-brand-line py-8">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-11 gap-6 text-center flex-grow">
              <div className="space-y-1">
                <Puzzle className="w-5 h-5 text-brand-ink-soft mx-auto" />
                <p className="font-sans font-bold text-xs uppercase tracking-wide">Autism</p>
              </div>
              <div className="space-y-1">
                <Ribbon className="w-5 h-5 text-brand-ink-soft mx-auto" />
                <p className="font-sans font-bold text-xs uppercase tracking-wide">Down Syndrome</p>
              </div>
              <div className="space-y-1">
                <Ribbon className="w-5 h-5 text-slate-400 mx-auto" />
                <p className="font-sans font-bold text-xs uppercase tracking-wide">Cancer</p>
              </div>
              <div className="space-y-1">
                <HeartCrack className="w-5 h-5 text-brand-ink-soft mx-auto" />
                <p className="font-sans font-bold text-xs uppercase tracking-wide">Grief</p>
              </div>
              <div className="space-y-1">
                <HelpCircle className="w-5 h-5 text-brand-ink-soft mx-auto" />
                <p className="font-sans font-bold text-xs uppercase tracking-wide">Disability</p>
              </div>
              <div className="space-y-1">
                <Brain className="w-5 h-5 text-brand-ink-soft mx-auto" />
                <p className="font-sans font-bold text-xs uppercase tracking-wide">Mental Health</p>
              </div>
              <div className="space-y-1">
                <Activity className="w-5 h-5 text-brand-ink-soft mx-auto" />
                <p className="font-sans font-bold text-xs uppercase tracking-wide">Obesity</p>
              </div>
              <div className="space-y-1">
                <Sprout className="w-5 h-5 text-brand-ink-soft mx-auto" />
                <p className="font-sans font-bold text-xs uppercase tracking-wide">Diabetes</p>
              </div>
              <div className="space-y-1">
                <Lock className="w-5 h-5 text-brand-ink-soft mx-auto" />
                <p className="font-sans font-bold text-xs uppercase tracking-wide">Cybercrime</p>
              </div>
              <div className="space-y-1">
                <IndianRupee className="w-5 h-5 text-brand-ink-soft mx-auto" />
                <p className="font-sans font-bold text-xs uppercase tracking-wide">Financial Loss</p>
              </div>
              <div className="space-y-1">
                <Users className="w-5 h-5 text-brand-ink-soft mx-auto" />
                <p className="font-sans font-bold text-xs uppercase tracking-wide">Betrayal</p>
              </div>
            </div>
            
            <div className="text-xs font-semibold text-brand-ink-soft border-l border-brand-line pl-6 max-w-[200px] leading-relaxed shrink-0">
              A future that suddenly looks nothing like the one we imagined.
            </div>
          </div>
        </section>

        {/* --- Content Grid 2 --- */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Card 01 */}
            <div className="bg-white border border-brand-line rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start shadow-sm">
              <div className="text-3xl font-extrabold text-[#c95c27] leading-none shrink-0">01</div>
              <div className="space-y-3 flex-grow">
                <h3 className="font-sans font-bold text-xs uppercase text-brand-ink tracking-wide">
                  This is not a marathon about running.
                </h3>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  It is a marathon about continuing.<br />
                  Continuing after the diagnosis.<br />
                  Continuing after the phone call.<br />
                  Continuing after the loss.<br />
                  Continuing after trust is broken.<br />
                  Continuing when the road changes and the destination disappears from view.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1502224562085-639556652f33?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Runner path" 
                className="w-full md:w-32 h-24 object-cover rounded-lg shrink-0 border border-brand-line"
              />
            </div>

            {/* Card 02 */}
            <div className="bg-white border border-brand-line rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start shadow-sm">
              <div className="text-3xl font-extrabold text-[#c95c27] leading-none shrink-0">02</div>
              <div className="space-y-3 flex-grow">
                <h3 className="font-sans font-bold text-xs uppercase text-brand-ink tracking-wide">
                  The mountain is a metaphor.
                </h3>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  The mountain is whatever life places in front of us and asks us to carry, navigate or grow through.
                </p>
                <p className="text-xs text-[#c95c27] font-semibold">
                  No two mountains are the same. No two climbs should be compared.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Mountains" 
                className="w-full md:w-32 h-24 object-cover rounded-lg shrink-0 border border-brand-line"
              />
            </div>

            {/* Card 03 */}
            <div className="bg-white border border-brand-line rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start shadow-sm">
              <div className="text-3xl font-extrabold text-[#c95c27] leading-none shrink-0">03</div>
              <div className="space-y-3 flex-grow">
                <h3 className="font-sans font-bold text-xs uppercase text-brand-ink tracking-wide">
                  We have been taught to admire the summit.
                </h3>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  But most courage does not look like that.
                </p>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  The summit gets the photograph. The climb reveals the person.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1522346513757-54c552451fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Climbers" 
                className="w-full md:w-32 h-24 object-cover rounded-lg shrink-0 border border-brand-line"
              />
            </div>

            {/* Card 04 */}
            <div className="bg-white border border-brand-line rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start shadow-sm">
              <div className="text-3xl font-extrabold text-[#c95c27] leading-none shrink-0">04</div>
              <div className="space-y-3 flex-grow">
                <h3 className="font-sans font-bold text-xs uppercase text-brand-ink tracking-wide">
                  The mountain is not the hero.
                </h3>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  At Beyond Heights, we do not begin with what happened to someone.
                </p>
                <p className="text-xs font-semibold text-[#0a2e21]">
                  We begin with the person still standing within it.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Boy standing in field" 
                className="w-full md:w-32 h-24 object-cover rounded-lg shrink-0 border border-brand-line"
              />
            </div>

            {/* Card 05 */}
            <div className="bg-white border border-brand-line rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start shadow-sm">
              <div className="text-3xl font-extrabold text-[#c95c27] leading-none shrink-0">05</div>
              <div className="space-y-3 flex-grow">
                <h3 className="font-sans font-bold text-xs uppercase text-brand-ink tracking-wide">
                  Growing beyond does not mean getting over it.
                </h3>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  It means the challenge does not receive the final word.
                </p>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  Growing beyond is not escape. It is becoming larger than what tried to contain you.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Scenic road" 
                className="w-full md:w-32 h-24 object-cover rounded-lg shrink-0 border border-brand-line"
              />
            </div>

            {/* Card 06 */}
            <div className="bg-white border border-brand-line rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start shadow-sm">
              <div className="text-3xl font-extrabold text-[#c95c27] leading-none shrink-0">06</div>
              <div className="space-y-3 flex-grow">
                <h3 className="font-sans font-bold text-xs uppercase text-brand-ink tracking-wide">
                  The modern mountains
                </h3>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  Technology has created extraordinary possibility. It has also created new forms of vulnerability.
                </p>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  Cybercrime leaves behind shame, fear, loss and distrust. They too are climbing. They too deserve someone beside them.
                </p>
              </div>
              <div className="w-full md:w-32 h-24 bg-[#faf9f6] border border-brand-line rounded-lg shrink-0 flex items-center justify-center">
                <Fingerprint className="w-10 h-10 text-brand-ink" />
              </div>
            </div>

            {/* Card 07 */}
            <div className="bg-white border border-brand-line rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start shadow-sm">
              <div className="text-3xl font-extrabold text-[#c95c27] leading-none shrink-0">07</div>
              <div className="space-y-2 flex-grow">
                <h3 className="font-sans font-bold text-xs uppercase text-brand-ink tracking-wide">
                  Why we run
                </h3>
                <ul className="text-xs text-brand-ink-soft space-y-1">
                  <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#0a2e21] shrink-0" /> For the child whose potential has been underestimated.</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#0a2e21] shrink-0" /> For the person fighting cancer.</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#0a2e21] shrink-0" /> For the family learning to live beside loss.</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#0a2e21] shrink-0" /> For those rebuilding after deception or financial harm.</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#0a2e21] shrink-0" /> For the caregivers who carry more than we see.</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#0a2e21] shrink-0" /> And sometimes, we run for ourselves.</li>
                </ul>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Athletes running" 
                className="w-full md:w-32 h-24 object-cover rounded-lg shrink-0 border border-brand-line"
              />
            </div>

            {/* Card 08 */}
            <div className="bg-white border border-brand-line rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start shadow-sm">
              <div className="text-3xl font-extrabold text-[#c95c27] leading-none shrink-0">08</div>
              <div className="space-y-3 flex-grow">
                <h3 className="font-sans font-bold text-xs uppercase text-brand-ink tracking-wide">
                  One marathon. Many mountains.
                </h3>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  Different mountains. Different journeys. One shared promise.
                </p>
                <p className="text-xs font-bold text-[#0a2e21]">
                  No one should climb alone.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1541534401786-2077ee8c4083?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Climbers team" 
                className="w-full md:w-32 h-24 object-cover rounded-lg shrink-0 border border-brand-line"
              />
            </div>

            {/* Card 09 */}
            <div className="bg-white border border-brand-line rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start shadow-sm">
              <div className="text-3xl font-extrabold text-[#c95c27] leading-none shrink-0">09</div>
              <div className="space-y-2 flex-grow">
                <h3 className="font-sans font-bold text-xs uppercase text-brand-ink tracking-wide">
                  Run your mountain
                </h3>
                <ul className="text-xs text-brand-ink-soft space-y-1">
                  <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#c95c27] shrink-0" /> Run for the mountain you have climbed.</li>
                  <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#c95c27] shrink-0" /> Run for the one still ahead.</li>
                  <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#c95c27] shrink-0" /> Run for someone who cannot run beside you.</li>
                  <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#c95c27] shrink-0" /> Run to make another person's climb feel less lonely.</li>
                </ul>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1502224562085-639556652f33?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Runner details" 
                className="w-full md:w-32 h-24 object-cover rounded-lg shrink-0 border border-brand-line"
              />
            </div>

            {/* Card 10 */}
            <div className="bg-white border border-brand-line rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start shadow-sm">
              <div className="text-3xl font-extrabold text-[#c95c27] leading-none shrink-0">10</div>
              <div className="space-y-3 flex-grow">
                <h3 className="font-sans font-bold text-xs uppercase text-brand-ink tracking-wide">
                  The race changes when we move together.
                </h3>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  This is a race where turning back to help someone may be the most meaningful way to move forward.
                </p>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  Progress is measured by who was not left behind.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Group success" 
                className="w-full md:w-32 h-24 object-cover rounded-lg shrink-0 border border-brand-line"
              />
            </div>

            {/* Card 11 */}
            <div className="bg-white border border-brand-line rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start shadow-sm">
              <div className="text-3xl font-extrabold text-[#c95c27] leading-none shrink-0">11</div>
              <div className="space-y-3 flex-grow">
                <h3 className="font-sans font-bold text-xs uppercase text-brand-ink tracking-wide">
                  Beyond Heights
                </h3>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  Our name has never meant rising above other people. It means rising beyond what life says is possible.
                </p>
                <p className="text-xs text-brand-ink-soft leading-relaxed">
                  Heights are not measured against someone else. They are measured against the distance a person once believed they could never travel.
                </p>
              </div>
              <div className="w-full md:w-32 h-24 bg-[#faf9f6] border border-brand-line rounded-lg shrink-0 flex items-center justify-center">
                <Trees className="w-10 h-10 text-[#0a2e21]" />
              </div>
            </div>

            {/* Card 12 */}
            <div className="bg-white border border-brand-line rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start shadow-sm">
              <div className="text-3xl font-extrabold text-[#c95c27] leading-none shrink-0">12</div>
              <div className="space-y-2 flex-grow">
                <h3 className="font-sans font-bold text-xs uppercase text-brand-ink tracking-wide">
                  What your step makes possible
                </h3>
                <ul className="text-xs text-brand-ink-soft space-y-1">
                  <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#0a2e21] shrink-0" /> Every registration becomes support.</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#0a2e21] shrink-0" /> Every partnership creates access.</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#0a2e21] shrink-0" /> Every kilometre raises visibility.</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#0a2e21] shrink-0" /> One story helps another person feel less alone.</li>
                </ul>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Nature walk" 
                className="w-full md:w-32 h-24 object-cover rounded-lg shrink-0 border border-brand-line"
              />
            </div>

            {/* Card 13 */}
            <div className="bg-white border border-brand-line rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start shadow-sm">
              <div className="text-3xl font-extrabold text-[#c95c27] leading-none shrink-0">13</div>
              <div className="space-y-2 flex-grow">
                <h3 className="font-sans font-bold text-xs uppercase text-brand-ink tracking-wide">
                  Every life has a mountain.
                </h3>
                <ul className="text-xs text-brand-ink-soft space-y-1">
                  <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#0a2e21] shrink-0" /> You may not have chosen yours.</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#0a2e21] shrink-0" /> You may not know how long the climb will take.</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#0a2e21] shrink-0" /> You may not be able to see the summit.</li>
                </ul>
                <p className="text-xs font-bold text-[#0a2e21] pt-1">
                  But you do not have to climb alone.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Marathon team running" 
                className="w-full md:w-32 h-24 object-cover rounded-lg shrink-0 border border-brand-line"
              />
            </div>

            {/* Card 14 - CTA Block */}
            <div className="bg-[#0a2e21] text-white rounded-2xl p-6 flex flex-col justify-between border border-[#114f31]/30 shadow-md">
              <div className="flex items-center gap-4">
                <Trees className="w-10 h-10 text-[#c95c27]" />
                <div>
                  <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-white">
                    The Beyond Heights Marathon
                  </h3>
                  <p className="text-xs text-slate-300">
                    Different mountains. One human capacity to rise. No one climbs alone.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                <button 
                  onClick={() => navigate('/donate')}
                  className="bg-[#c95c27] hover:bg-[#b04a1b] text-white font-sans font-bold text-xs tracking-wider px-4 py-2.5 rounded uppercase transition-all cursor-pointer"
                >
                  Register to run &rarr;
                </button>
                <button 
                  onClick={() => navigate('/partner')}
                  className="border border-white/30 hover:border-white text-white font-sans font-bold text-xs tracking-wider px-4 py-2.5 rounded uppercase transition-all cursor-pointer"
                >
                  Run for someone
                </button>
                <button 
                  onClick={() => navigate('/donate')}
                  className="border border-white/30 hover:border-white text-white font-sans font-bold text-xs tracking-wider px-4 py-2.5 rounded uppercase transition-all cursor-pointer"
                >
                  Help someone rise
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* --- Footer CTA Bar 2 --- */}
        <section className="bg-[#051a12] text-white py-8 border-t border-white/10">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <Heart className="w-6 h-6 text-[#c95c27]" />
              <span className="text-xs font-bold tracking-wide leading-relaxed text-slate-300">
                Every step you take helps someone else keep going.
              </span>
            </div>

            <div className="flex gap-8 text-center">
              <div className="space-y-1">
                <Users className="w-4 h-4 text-[#c95c27] mx-auto" />
                <p className="text-xs uppercase tracking-wider text-slate-300 font-medium">Inclusion</p>
              </div>
              <div className="space-y-1">
                <Handshake className="w-4 h-4 text-[#c95c27] mx-auto" />
                <p className="text-xs uppercase tracking-wider text-slate-300 font-medium">Understanding</p>
              </div>
              <div className="space-y-1">
                <Brain className="w-4 h-4 text-[#c95c27] mx-auto" />
                <p className="text-xs uppercase tracking-wider text-slate-300 font-medium">Every mind</p>
              </div>
              <div className="space-y-1">
                <Sprout className="w-4 h-4 text-[#c95c27] mx-auto" />
                <p className="text-xs uppercase tracking-wider text-slate-300 font-medium">Better Future</p>
              </div>
            </div>

            <button 
              onClick={() => navigate('/join')}
              className="bg-[#c95c27] hover:bg-[#b04a1b] text-white font-sans font-bold text-xs tracking-[0.06em] px-6 py-2.5 rounded uppercase transition-all duration-200 cursor-pointer shrink-0"
            >
              Join the movement &rarr;
            </button>
          </div>
        </section>

      </div>

    </div>
  );
};

export default Athletics;
