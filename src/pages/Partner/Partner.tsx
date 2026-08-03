import React, { useEffect } from 'react';
import { Sparkles, HelpingHand, Target, Route, Heart } from 'lucide-react';

const Partner: React.FC = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 sm:pt-28 pb-14 sm:pb-20 px-4 sm:px-6 md:px-12 bg-brand-bg text-brand-ink min-h-screen">
      <div className="max-w-[1600px] mx-auto space-y-10 sm:space-y-16">

        {/* --- Header Section --- */}
        <header className="space-y-3 sm:space-y-4">
          <div className="font-mono text-xs tracking-[0.1em] text-brand-blue uppercase font-bold">
            An Invitation to Partner
          </div>
          <h1 className="font-serif text-3xl sm:text-[44px] lg:text-[52px] font-normal leading-[1.15] text-[#111827]">
            Be Part of the Breakthrough.
          </h1>
          <div className="font-serif text-lg sm:text-xl md:text-2xl text-brand-ink-soft space-y-1">
            <p>This is not a donation to a program.</p>
            <p className="font-semibold text-brand-ink">This is an investment in a new science of human understanding.</p>
          </div>
        </header>

        {/* --- 5 Column Flow Section --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 border-t border-brand-line pt-8 sm:pt-12">
          
          {/* Step 1 */}
          <div className="space-y-3 sm:space-y-4 flex flex-col items-center text-center relative group">
            <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue min-h-[30px] flex items-center justify-center">
              A CHILD'S STORY<br />STARTED THIS.
            </div>
            
            <div className="relative w-full flex justify-center py-2 sm:py-4">
              <div className="hidden lg:block absolute right-[-20px] top-1/2 -translate-y-1/2 text-brand-blue text-lg font-mono pointer-events-none group-hover:translate-x-1 transition-transform">
                &rarr;
              </div>
              <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] rounded-full bg-[#f8fafc] border border-slate-100 flex items-center justify-center shadow-[inset_0_0_20px_rgba(59,130,246,0.04)]">
                <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 text-brand-blue opacity-85">
                  <circle cx="50" cy="50" r="10" fill="currentColor" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 6" />
                  <circle cx="20" cy="40" r="3" fill="var(--color-brand-rose)" />
                  <circle cx="80" cy="60" r="3.5" fill="var(--color-brand-teal)" />
                </svg>
              </div>
            </div>

            <div className="text-xs md:text-sm text-brand-ink-soft leading-relaxed space-y-1.5 sm:space-y-2">
              <p>One child.<br />Thousands of moments.</p>
              <p>A family that refused to stop at labels and limits.</p>
              <p className="font-serif italic font-semibold text-brand-ink">That story became the spark.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-3 sm:space-y-4 flex flex-col items-center text-center relative group">
            <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue min-h-[30px] flex items-center justify-center">
              A QUESTION<br />CHANGED EVERYTHING.
            </div>
            
            <div className="relative w-full flex justify-center py-2 sm:py-4">
              <div className="hidden lg:block absolute right-[-20px] top-1/2 -translate-y-1/2 text-brand-blue text-lg font-mono pointer-events-none group-hover:translate-x-1 transition-transform">
                &rarr;
              </div>
              <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] rounded-full border border-brand-line bg-brand-bg-alt flex items-center justify-center p-4 sm:p-6 text-center shadow-[inset_0_0_20px_rgba(59,130,246,0.03)]">
                <div className="font-mono text-[10px] sm:text-xs leading-normal tracking-wide text-brand-ink uppercase font-bold">
                  UNDER WHAT<br />CONDITIONS DOES<br />THIS MIND<br />FLOURISH?
                </div>
              </div>
            </div>

            <div className="text-xs md:text-sm text-brand-ink-soft leading-relaxed space-y-1.5 sm:space-y-2">
              <p>One question shifted our perspective.</p>
              <p>From fixing to understanding.<br />From difference to design.<br />From assumptions to evidence.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-3 sm:space-y-4 flex flex-col items-center text-center relative group">
            <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue min-h-[30px] flex items-center justify-center">
              A NEW MODEL<br />IS EMERGING.
            </div>
            
            <div className="relative w-full flex justify-center py-2 sm:py-4">
              <div className="hidden lg:block absolute right-[-20px] top-1/2 -translate-y-1/2 text-brand-blue text-lg font-mono pointer-events-none group-hover:translate-x-1 transition-transform">
                &rarr;
              </div>
              <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] rounded-full bg-[#f8fafc] border border-slate-100 flex items-center justify-center shadow-[inset_0_0_20px_rgba(59,130,246,0.04)]">
                <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 text-brand-teal opacity-85">
                  <circle cx="50" cy="35" r="4.5" fill="currentColor" />
                  <circle cx="30" cy="65" r="4.5" fill="currentColor" />
                  <circle cx="70" cy="65" r="4.5" fill="currentColor" />
                  <circle cx="50" cy="75" r="3.5" fill="var(--color-brand-amber)" />
                  <circle cx="20" cy="45" r="3" fill="var(--color-brand-rose)" />
                  <circle cx="80" cy="45" r="3" fill="var(--color-brand-blue)" />
                  <line x1="50" y1="35" x2="30" y2="65" stroke="currentColor" strokeWidth="1" />
                  <line x1="50" y1="35" x2="70" y2="65" stroke="currentColor" strokeWidth="1" />
                  <line x1="30" y1="65" x2="70" y2="65" stroke="currentColor" strokeWidth="1" />
                  <line x1="50" y1="35" x2="20" y2="45" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="50" y1="35" x2="80" y2="45" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="30" y1="65" x2="50" y2="75" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="70" y1="65" x2="50" y2="75" stroke="currentColor" strokeWidth="0.8" />
                </svg>
              </div>
            </div>

            <div className="text-xs md:text-sm text-brand-ink-soft leading-relaxed space-y-1.5 sm:space-y-2">
              <p>Patterns connect.<br />Signals make sense.<br />Understanding emerges.</p>
              <p className="font-serif italic font-semibold text-brand-ink">A new model of cognition comes into view.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="space-y-3 sm:space-y-4 flex flex-col items-center text-center relative group">
            <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue min-h-[30px] flex items-center justify-center">
              A NEW SCIENCE<br />IS BEING BUILT.
            </div>
            
            <div className="relative w-full flex justify-center py-2 sm:py-4">
              <div className="hidden lg:block absolute right-[-20px] top-1/2 -translate-y-1/2 text-brand-blue text-lg font-mono pointer-events-none group-hover:translate-x-1 transition-transform">
                &rarr;
              </div>
              <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] rounded-full bg-[#f8fafc] border border-slate-100 flex items-center justify-center shadow-[inset_0_0_20px_rgba(59,130,246,0.04)]">
                <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 text-brand-blue opacity-85">
                  <circle cx="50" cy="42" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="36" cy="62" r="22" fill="none" stroke="var(--color-brand-violet)" strokeWidth="1.5" />
                  <circle cx="64" cy="62" r="22" fill="none" stroke="var(--color-brand-teal)" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            <div className="text-xs md:text-sm text-brand-ink-soft leading-relaxed space-y-1.5 sm:space-y-2">
              <p>The Cognitive Blueprint.<br />The Autism Consciousness Lab.</p>
              <p>A scientific infrastructure for understanding minds that the world has overlooked.</p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="space-y-3 sm:space-y-4 flex flex-col items-center text-center relative col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue min-h-[30px] flex items-center justify-center">
              A FUTURE<br />WE BUILD TOGETHER.
            </div>
            
            <div className="relative w-full flex justify-center py-2 sm:py-4">
              <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] rounded-full bg-[#f8fafc] border border-slate-100 flex items-center justify-center shadow-[inset_0_0_20px_rgba(59,130,246,0.04)]">
                <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 text-brand-ink-soft opacity-85">
                  <path d="M35,80 C35,70 32,60 32,50 C32,30 46,20 62,20 C76,20 80,32 80,48 C80,60 72,70 65,80" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="54" cy="35" r="3" fill="var(--color-brand-blue)" />
                  <circle cx="66" cy="42" r="2.5" fill="var(--color-brand-teal)" />
                  <circle cx="50" cy="48" r="3" fill="var(--color-brand-orange)" />
                  <line x1="54" y1="35" x2="66" y2="42" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5" />
                  <line x1="50" y1="48" x2="66" y2="42" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5" />
                </svg>
              </div>
            </div>

            <div className="text-xs md:text-sm text-brand-ink-soft leading-relaxed space-y-1.5 sm:space-y-2">
              <p>For Rithvik.<br />For millions of children.<br />For families.<br />For humanity.</p>
              <p className="font-serif italic font-semibold text-brand-ink">This is the breakthrough.</p>
            </div>
          </div>

        </div>

        {/* --- Bottom Panel Section --- */}
        <div className="border border-brand-line rounded-xl py-6 sm:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 bg-brand-bg">
          
          {/* Panel 1 */}
          <div className="px-5 sm:px-8 border-b md:border-b-0 md:border-r border-brand-line pb-6 sm:pb-8 md:pb-0">
            <h3 className="font-mono text-xs tracking-[0.08em] font-bold text-brand-blue uppercase flex items-center gap-2 mb-4 sm:mb-6">
              <Sparkles className="w-4 h-4 text-brand-blue shrink-0" />
              WHY YOUR GIFT MATTERS
            </h3>
            <div className="text-xs md:text-sm text-brand-ink-soft space-y-3 sm:space-y-4">
              <p>You help build the foundation for a new science.</p>
              <p>You turn moments into models.</p>
              <p>You transform understanding into human potential.</p>
            </div>
          </div>

          {/* Panel 2 */}
          <div className="px-5 sm:px-8 border-b md:border-b-0 lg:border-r border-brand-line py-6 sm:py-8 md:py-0">
            <h3 className="font-mono text-xs tracking-[0.08em] font-bold text-brand-blue uppercase flex items-center gap-2 mb-4 sm:mb-6">
              <HelpingHand className="w-4 h-4 text-brand-blue shrink-0" />
              WHAT WE BUILD
            </h3>
            <ul className="text-xs md:text-sm text-brand-ink-soft space-y-2.5 sm:space-y-3">
              <li>• Autism Consciousness Lab</li>
              <li>• Cognitive Blueprint Platform</li>
              <li>• Data & Insight Infrastructure</li>
              <li>• Family & Practitioner Tools</li>
              <li>• Global Research Collaborations</li>
            </ul>
          </div>

          {/* Panel 3 */}
          <div className="px-5 sm:px-8 border-b md:border-b-0 md:border-r border-brand-line py-6 sm:py-8 md:py-0">
            <h3 className="font-mono text-xs tracking-[0.08em] font-bold text-brand-blue uppercase flex items-center gap-2 mb-4 sm:mb-6">
              <Target className="w-4 h-4 text-brand-blue shrink-0" />
              WHO IT IMPACTS
            </h3>
            <ul className="text-xs md:text-sm text-brand-ink-soft space-y-2.5 sm:space-y-3">
              <li>• Children and young adults</li>
              <li>• Families and caregivers</li>
              <li>• Educators and therapists</li>
              <li>• Researchers and innovators</li>
              <li>• Society and future generations</li>
            </ul>
          </div>

          {/* Panel 4 (Mini Flow) */}
          <div className="px-5 sm:px-8 border-b md:border-b-0 border-brand-line py-6 sm:py-8 md:py-0 md:col-span-2 lg:col-span-1 lg:border-r">
            <h3 className="font-mono text-xs tracking-[0.08em] font-bold text-brand-blue uppercase flex items-center gap-2 mb-4 sm:mb-6">
              <Route className="w-4 h-4 text-brand-blue shrink-0" />
              THE PROCESS
            </h3>
            <div className="grid grid-cols-3 gap-y-3 sm:gap-y-4 gap-x-2">
              <div className="text-center space-y-1">
                <span className="font-mono text-[10px] sm:text-xs text-brand-blue font-bold">OBSERVE</span>
                <p className="text-[11px] sm:text-xs text-brand-ink-soft leading-normal">We see moments.</p>
              </div>
              <div className="text-center space-y-1">
                <span className="font-mono text-[10px] sm:text-xs text-brand-teal font-bold">PATTERN</span>
                <p className="text-[11px] sm:text-xs text-brand-ink-soft leading-normal">We connect signals.</p>
              </div>
              <div className="text-center space-y-1">
                <span className="font-mono text-[10px] sm:text-xs text-brand-blue font-bold">UNDERSTAND</span>
                <p className="text-[11px] sm:text-xs text-brand-ink-soft leading-normal">We map the mind.</p>
              </div>
              <div className="text-center space-y-1">
                <span className="font-mono text-[10px] sm:text-xs text-brand-orange font-bold">PREDICT</span>
                <p className="text-[11px] sm:text-xs text-brand-ink-soft leading-normal">We anticipate need.</p>
              </div>
              <div className="text-center space-y-1">
                <span className="font-mono text-[10px] sm:text-xs text-brand-violet font-bold">DESIGN</span>
                <p className="text-[11px] sm:text-xs text-brand-ink-soft leading-normal">We build systems.</p>
              </div>
              <div className="text-center space-y-1">
                <span className="font-mono text-[10px] sm:text-xs text-brand-green font-bold">POTENTIAL</span>
                <p className="text-[11px] sm:text-xs text-brand-ink-soft leading-normal">We unlock ability.</p>
              </div>
            </div>
          </div>

          {/* Panel 5 */}
          <div className="px-5 sm:px-8 py-6 sm:py-8 md:py-0">
            <h3 className="font-mono text-xs tracking-[0.08em] font-bold text-brand-blue uppercase flex items-center gap-2 mb-4 sm:mb-6">
              <Heart className="w-4 h-4 text-brand-blue shrink-0" />
              WAYS TO GIVE
            </h3>
            <div className="text-xs md:text-sm text-brand-ink-soft space-y-2">
              <p>One-time Gift</p>
              <p>Monthly Partnership</p>
              <p>Research Sponsorship</p>
              <p>Legacy Giving</p>
              <p>Corporate Partnership</p>
              <a 
                href="#give" 
                className="inline-block text-xs font-mono tracking-wide uppercase text-brand-blue border-b border-brand-blue pb-0.5 mt-2 hover:opacity-[0.8]"
              >
                Explore Options &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* --- Footer Section --- */}
        <footer className="text-center pt-6 sm:pt-8 border-t border-brand-line space-y-2 sm:space-y-3">
          <h2 className="font-serif text-xl sm:text-[24px] md:text-[28px] font-normal text-brand-ink max-w-2xl mx-auto leading-snug">
            Your partnership doesn't just support a mission.
          </h2>
          <span className="font-serif italic text-brand-blue text-2xl sm:text-[28px] md:text-[32px] block max-w-2xl mx-auto leading-snug">
            It helps create a future where every mind can be understood, valued, and empowered.
          </span>
          <p className="text-xs text-brand-muted font-mono tracking-wide uppercase">
            Together, we are building the science of understanding human consciousness.
          </p>
        </footer>

      </div>
    </div>
  );
};

export default Partner;
