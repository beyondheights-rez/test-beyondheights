import React, { useEffect } from 'react';
import { Search, Layers, Compass, Brain } from 'lucide-react';

const Moneyball: React.FC = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 px-6 md:px-12 bg-brand-bg text-brand-ink min-h-screen">
      <div className="max-w-[1600px] mx-auto space-y-16">

        {/* --- Header Section --- */}
        <header className="flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-16">
          <div className="flex-1 space-y-6">
            <div className="font-mono text-xs tracking-[0.1em] text-brand-blue uppercase font-bold">
              The Turning Point
            </div>
            <h1 className="font-serif text-[36px] md:text-[44px] lg:text-[52px] font-normal leading-[1.15] text-[#111827]">
              The Moneyball Moment.
            </h1>
            <div className="font-serif text-xl md:text-2xl text-brand-ink-soft space-y-1.5">
              <p>We don't need better children.</p>
              <p className="font-semibold text-brand-ink">We need better ways of seeing them.</p>
            </div>
          </div>
          <div className="w-full lg:max-w-[450px] text-brand-ink-soft text-[15px] md:text-base leading-relaxed space-y-4 lg:pt-8">
            <p>Moneyball didn't find better baseball players.<br />It found a better model for recognizing value.</p>
            <p>The Empathy Initiative is attempting the same shift.</p>
            <p className="font-semibold text-brand-ink">Not for baseball. For human cognition.</p>
          </div>
        </header>

        {/* --- 6 Column Flow Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 border-t border-brand-line pt-12">
          
          {/* Column 1 */}
          <div className="space-y-4 flex flex-col justify-between items-center text-center relative group">
            <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue min-h-[30px] flex items-center justify-center">
              BASEBALL HAD DATA.
            </div>
            
            <div className="relative w-full flex justify-center py-4">
              <div className="hidden lg:block absolute right-[-25px] top-1/2 -translate-y-1/2 text-brand-blue text-lg font-mono pointer-events-none group-hover:translate-x-1 transition-transform">
                &rarr;
              </div>
              <div className="w-[180px] h-[180px] rounded-full bg-[#f8fafc] border border-slate-100 flex items-center justify-center shadow-[inset_0_0_20px_rgba(59,130,246,0.04)]">
                <svg viewBox="0 0 100 100" className="w-20 h-20 text-brand-blue opacity-85">
                  <circle cx="20" cy="80" r="1.5" fill="currentColor" />
                  <circle cx="30" cy="72" r="1.5" fill="currentColor" />
                  <circle cx="25" cy="65" r="1.5" fill="currentColor" />
                  <circle cx="45" cy="50" r="1.5" fill="currentColor" />
                  <circle cx="35" cy="58" r="1.5" fill="currentColor" />
                  <circle cx="55" cy="40" r="1.5" fill="currentColor" />
                  <circle cx="65" cy="30" r="1.5" fill="currentColor" />
                  <circle cx="58" cy="35" r="1.5" fill="currentColor" />
                  <circle cx="75" cy="22" r="1.5" fill="currentColor" />
                  <circle cx="85" cy="15" r="1.5" fill="currentColor" />
                  <line x1="15" y1="85" x2="88" y2="12" stroke="var(--color-brand-rose)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="15" y1="85" x2="88" y2="85" stroke="currentColor" strokeWidth="1.2" />
                  <line x1="15" y1="15" x2="15" y2="85" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
            </div>

            <div className="text-xs text-brand-ink-soft leading-relaxed min-h-[100px] flex items-center">
              <p className="italic text-brand-muted">...and hundreds more stats without context.</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4 flex flex-col justify-between items-center text-center relative group">
            <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue min-h-[30px] flex items-center justify-center">
              ONE METRIC CHANGED EVERYTHING.
            </div>
            
            <div className="relative w-full flex justify-center py-4">
              <div className="hidden lg:block absolute right-[-25px] top-1/2 -translate-y-1/2 text-brand-blue text-lg font-mono pointer-events-none group-hover:translate-x-1 transition-transform">
                &rarr;
              </div>
              <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-br from-[#eff6ff] to-[#ffffff] border border-blue-100 flex items-center justify-center text-center shadow-[0_0_40px_rgba(59,130,246,0.15)]">
                <div className="font-mono text-xs leading-normal tracking-wide text-brand-blue uppercase font-extrabold">
                  ON-BASE<br />PERCENTAGE
                </div>
              </div>
            </div>

            <div className="text-xs text-brand-ink-soft leading-relaxed min-h-[100px] flex items-center">
              <p>Everything else faded. One metric revealed real value. Unknown players became stars. Not because they changed, but because the system saw them.</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-4 flex flex-col justify-between items-center text-center relative group">
            <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue min-h-[30px] flex items-center justify-center">
              THE FIELD REORGANIZED.
            </div>
            
            <div className="relative w-full flex justify-center py-4">
              <div className="hidden lg:block absolute right-[-25px] top-1/2 -translate-y-1/2 text-brand-blue text-lg font-mono pointer-events-none group-hover:translate-x-1 transition-transform">
                &rarr;
              </div>
              <div className="w-[180px] h-[180px] rounded-full bg-[#f8fafc] border border-slate-100 flex items-center justify-center shadow-[inset_0_0_20px_rgba(59,130,246,0.04)]">
                <svg viewBox="0 0 100 100" className="w-20 h-20 text-brand-teal opacity-85">
                  <polygon points="50,15 80,45 50,75 20,45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="50" cy="15" r="3" fill="currentColor" />
                  <circle cx="80" cy="45" r="3" fill="currentColor" />
                  <circle cx="50" cy="75" r="3.5" fill="var(--color-brand-rose)" />
                  <circle cx="20" cy="45" r="3" fill="currentColor" />
                  <circle cx="50" cy="48" r="4.5" fill="currentColor" />
                  <line x1="50" y1="48" x2="50" y2="75" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
            </div>

            <div className="text-xs text-brand-ink-soft leading-relaxed min-h-[100px] flex items-center">
              <p>The model changed. The players didn't. Value was always there, the system just had to learn how to see it.</p>
            </div>
          </div>

          {/* Column 4 */}
          <div className="space-y-4 flex flex-col justify-between items-center text-center relative group border-b lg:border-b-0 lg:border-r border-brand-line pb-8 lg:pb-0">
            <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue min-h-[30px] flex items-center justify-center">
              THE GAME BECAME CLEAR.
            </div>
            
            <div className="relative w-full flex justify-center py-4">
              <div className="w-[180px] h-[180px] rounded-full bg-[#f8fafc] border border-slate-100 flex items-center justify-center shadow-[inset_0_0_20px_rgba(59,130,246,0.04)]">
                <svg viewBox="0 0 100 100" className="w-20 h-20 text-brand-blue opacity-85">
                  <polygon points="50,18 78,46 50,74 22,46" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="50" cy="18" r="3" fill="var(--color-brand-blue)" />
                  <circle cx="78" cy="46" r="3" fill="var(--color-brand-blue)" />
                  <circle cx="50" cy="74" r="3" fill="var(--color-brand-blue)" />
                  <circle cx="22" cy="46" r="3" fill="var(--color-brand-blue)" />
                </svg>
              </div>
            </div>

            <div className="text-xs text-brand-ink-soft leading-relaxed min-h-[100px] flex items-center">
              <p>Better decisions. Better outcomes. A smarter game. Because understanding became the advantage.</p>
            </div>
          </div>

          {/* Column 5 */}
          <div className="space-y-4 flex flex-col justify-between items-center text-center relative group pt-8 lg:pt-0">
            <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue min-h-[30px] flex items-center justify-center">
              AUTISM HAS DATA.
            </div>
            
            <div className="relative w-full flex justify-center py-4">
              <div className="hidden lg:block absolute right-[-25px] top-1/2 -translate-y-1/2 text-brand-blue text-lg font-mono pointer-events-none group-hover:translate-x-1 transition-transform">
                &rarr;
              </div>
              <div className="w-[180px] h-[180px] rounded-full bg-[#f8fafc] border border-slate-100 flex items-center justify-center shadow-[inset_0_0_20px_rgba(59,130,246,0.04)]">
                <svg viewBox="0 0 100 100" className="w-20 h-20 text-brand-ink-soft opacity-85">
                  <circle cx="30" cy="30" r="1.5" fill="currentColor" />
                  <circle cx="70" cy="25" r="1.5" fill="currentColor" />
                  <circle cx="40" cy="65" r="1.5" fill="currentColor" />
                  <circle cx="80" cy="75" r="1.5" fill="currentColor" />
                  <circle cx="25" cy="55" r="1.5" fill="currentColor" />
                  <circle cx="60" cy="45" r="1.5" fill="currentColor" />
                  <circle cx="50" cy="80" r="1.5" fill="currentColor" />
                  <circle cx="85" cy="35" r="1.5" fill="currentColor" />
                  <circle cx="35" cy="20" r="1.5" fill="currentColor" />
                  <line x1="15" y1="85" x2="88" y2="85" stroke="currentColor" strokeWidth="1" />
                  <line x1="15" y1="15" x2="15" y2="85" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
            </div>

            <div className="text-xs text-brand-ink-soft leading-relaxed min-h-[100px] flex items-center">
              <p>Thousands of observations. Everyone sees something, but almost nothing connects.</p>
            </div>
          </div>

          {/* Column 6 */}
          <div className="space-y-4 flex flex-col justify-between items-center text-center relative pt-8 lg:pt-0">
            <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue min-h-[30px] flex items-center justify-center">
              THE BLUEPRINT EMERGES.
            </div>
            
            <div className="relative w-full flex justify-center py-4">
              <div className="w-[180px] h-[180px] rounded-full bg-[#f8fafc] border border-slate-100 flex items-center justify-center shadow-[inset_0_0_20px_rgba(59,130,246,0.04)]">
                <svg viewBox="0 0 100 100" className="w-20 h-20 text-brand-green opacity-85">
                  <path d="M15,75 C30,60 40,80 55,45 C70,10 80,40 85,25" fill="none" stroke="var(--color-brand-blue)" strokeWidth="1.8" />
                  <circle cx="15" cy="75" r="3.5" fill="currentColor" />
                  <circle cx="35" cy="65" r="3" fill="var(--color-brand-rose)" />
                  <circle cx="55" cy="45" r="3.5" fill="currentColor" />
                  <circle cx="65" cy="25" r="3" fill="var(--color-brand-rose)" />
                  <circle cx="85" cy="25" r="3.5" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div className="text-xs text-brand-ink-soft leading-relaxed min-h-[100px] flex items-center">
              <p>The system connects. Patterns emerge. Understanding appears. Insight replaces noise.</p>
            </div>
          </div>

        </div>

        {/* --- Bottom Features Panel --- */}
        <div className="border border-brand-line rounded-xl py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-brand-bg">
          
          {/* Block 1 */}
          <div className="px-8 border-b md:border-b-0 md:border-r border-brand-line pb-8 md:pb-0">
            <h3 className="font-mono text-xs tracking-[0.08em] font-bold text-brand-blue uppercase flex items-center gap-2 mb-6">
              <Compass className="w-4 h-4 text-brand-blue shrink-0" />
              THE CONTRARIAN TRUTH
            </h3>
            <div className="text-xs md:text-sm text-brand-ink-soft space-y-4">
              <p>Moneyball didn't find better players. It found a better model for recognizing value.</p>
              <p>The Empathy Initiative is attempting the same shift.</p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="px-8 border-b md:border-b-0 lg:border-r border-brand-line py-8 md:py-0">
            <h3 className="font-mono text-xs tracking-[0.08em] font-bold text-brand-blue uppercase flex items-center gap-2 mb-6">
              <Layers className="w-4 h-4 text-brand-blue shrink-0" />
              THE MISSING METRIC
            </h3>
            <div className="text-xs md:text-sm text-brand-ink-soft space-y-4">
              <p>For decades we measured IQ, compliance, behaviors, and labels.</p>
              <p>These measure how closely someone matches the average, not how that mind works.</p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="px-8 border-b md:border-b-0 md:border-r border-brand-line py-8 md:py-0">
            <h3 className="font-mono text-xs tracking-[0.08em] font-bold text-brand-blue uppercase flex items-center gap-2 mb-6">
              <Search className="w-4 h-4 text-brand-blue shrink-0" />
              THE NEW METRIC
            </h3>
            <div className="text-xs md:text-sm text-brand-ink-soft space-y-4">
              <p>Instead of asking "How different is this child?" we ask "Under what conditions does this mind flourish?"</p>
              <p className="font-semibold text-brand-ink">That changes everything.</p>
            </div>
          </div>

          {/* Block 4 */}
          <div className="px-8 py-8 md:py-0">
            <h3 className="font-mono text-xs tracking-[0.08em] font-bold text-brand-blue uppercase flex items-center gap-2 mb-6">
              <Brain className="w-4 h-4 text-brand-blue shrink-0" />
              THE FORMULA
            </h3>
            <div className="grid grid-cols-3 gap-y-4 gap-x-2">
              <div className="text-center space-y-1">
                <span className="font-mono text-xs text-brand-blue font-bold">[ O ]</span>
                <p className="text-xs text-brand-ink-soft leading-normal">Observe</p>
              </div>
              <div className="text-center space-y-1">
                <span className="font-mono text-xs text-brand-teal font-bold">[ :: ]</span>
                <p className="text-xs text-brand-ink-soft leading-normal">Pattern</p>
              </div>
              <div className="text-center space-y-1 border border-brand-blue rounded p-0.5">
                <span className="font-mono text-xs text-brand-blue font-bold font-extrabold">[ * ]</span>
                <p className="text-xs text-brand-ink font-bold leading-normal">Understand</p>
              </div>
              <div className="text-center space-y-1">
                <span className="font-mono text-xs text-brand-orange font-bold">[ ~ ]</span>
                <p className="text-xs text-brand-ink-soft leading-normal">Predict</p>
              </div>
              <div className="text-center space-y-1">
                <span className="font-mono text-xs text-brand-violet font-bold">[  ]</span>
                <p className="text-xs text-brand-ink-soft leading-normal">Design</p>
              </div>
              <div className="text-center space-y-1">
                <span className="font-mono text-xs text-brand-green font-bold">[ P ]</span>
                <p className="text-xs text-brand-ink-soft leading-normal">Potential</p>
              </div>
            </div>
          </div>

        </div>

        {/* --- Footer Section --- */}
        <footer className="text-center pt-8 border-t border-brand-line space-y-3">
          <h2 className="font-serif text-[24px] md:text-[28px] font-normal text-brand-ink max-w-3xl mx-auto leading-snug">
            Moneyball changed baseball by discovering that value had been hiding inside plain sight.
          </h2>
          <span className="font-serif italic text-brand-blue text-[28px] md:text-[32px] block max-w-2xl mx-auto leading-snug">
            The Empathy Initiative believes the same thing is true of autism.
          </span>
          <p className="text-xs text-brand-muted font-mono tracking-wide uppercase">
            The intelligence was never missing. The model for seeing it was.
          </p>
        </footer>

      </div>
    </div>
  );
};

export default Moneyball;
