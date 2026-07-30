import React, { useEffect } from 'react';
import { ShieldCheck, Workflow, Cpu, Layers, Milestone } from 'lucide-react';

const Platform: React.FC = () => {
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
              The Platform
            </div>
            <h1 className="font-serif text-[36px] md:text-[44px] lg:text-[52px] font-normal leading-[1.15] text-[#111827]">
              The Empathy Initiative Platform.
            </h1>
            <h2 className="font-serif text-[24px] md:text-[28px] font-normal leading-snug text-brand-ink-soft max-w-[600px]">
              A continuously learning infrastructure<br />for understanding cognition.
            </h2>
          </div>
          <div className="w-full lg:max-w-[400px] border-l-2 border-brand-blue pl-6 py-2">
            <div className="font-serif text-xl text-brand-ink leading-relaxed">
              <span className="text-brand-muted text-lg font-serif">“</span>
              This is not a tool.<br />
              This is not a database.<br />
              This is a living platform<br />
              that learns, adapts, and evolves<br />
              as <span className="text-brand-blue italic">understanding deepens</span>.
              <span className="text-brand-muted text-lg font-serif">”</span>
            </div>
          </div>
        </header>

        {/* --- 7 Column Flow Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-6 border-t border-brand-line pt-12">
          
          {/* Column 1 */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue flex gap-1.5">
                <span className="text-sm font-serif font-normal">01</span> Observe
              </div>
              <div className="text-xs md:text-sm font-semibold text-brand-ink leading-snug">
                Capture the full spectrum<br />of human experience.
              </div>
            </div>

            {/* SVG 1 */}
            <div className="py-4 border border-dashed border-slate-200 bg-[#f8fafc] rounded-full aspect-square flex items-center justify-center max-w-[150px] mx-auto w-full my-4">
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-blue opacity-85">
                <path d="M10,50 Q50,15 90,50 Q50,85 10,50 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="14" fill="none" stroke="var(--color-brand-blue)" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="6" fill="var(--color-brand-teal)" />
              </svg>
            </div>

            <ul className="text-xs text-brand-ink-soft space-y-2 flex-grow">
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[4px] before:h-[4px] before:rounded-full before:bg-brand-blue">Parent observations</li>
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[4px] before:h-[4px] before:rounded-full before:bg-brand-blue">Behavioral signals</li>
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[4px] before:h-[4px] before:rounded-full before:bg-brand-blue">Communication</li>
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[4px] before:h-[4px] before:rounded-full before:bg-brand-blue">Emotional states</li>
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[4px] before:h-[4px] before:rounded-full before:bg-brand-blue">Learning interactions</li>
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[4px] before:h-[4px] before:rounded-full before:bg-brand-blue">Environmental context</li>
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[4px] before:h-[4px] before:rounded-full before:bg-brand-blue">Clinical data</li>
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[4px] before:h-[4px] before:rounded-full before:bg-brand-blue">Wearables & sensors</li>
            </ul>

            <div className="text-xs text-brand-ink border-t border-brand-line pt-4 leading-normal">
              Every data point is a moment.<br />Every moment matters.
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue flex gap-1.5">
                <span className="text-sm font-serif font-normal">02</span> Connect
              </div>
              <div className="text-xs md:text-sm font-semibold text-brand-ink leading-snug">
                Transform moments<br />into meaningful patterns.
              </div>
            </div>

            {/* SVG 2 */}
            <div className="py-4 border border-dashed border-slate-200 bg-[#f8fafc] rounded-full aspect-square flex items-center justify-center max-w-[150px] mx-auto w-full my-4">
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-teal opacity-85">
                <circle cx="50" cy="50" r="4.5" fill="currentColor" />
                <circle cx="25" cy="30" r="3" fill="currentColor" />
                <circle cx="75" cy="30" r="3" fill="currentColor" />
                <circle cx="30" cy="70" r="3" fill="currentColor" />
                <circle cx="70" cy="70" r="3" fill="currentColor" />
                <line x1="50" y1="50" x2="25" y2="30" stroke="currentColor" strokeWidth="1" />
                <line x1="50" y1="50" x2="75" y2="30" stroke="currentColor" strokeWidth="1" />
                <line x1="50" y1="50" x2="30" y2="70" stroke="currentColor" strokeWidth="1" />
                <line x1="50" y1="50" x2="70" y2="70" stroke="currentColor" strokeWidth="1" />
                <line x1="25" y1="30" x2="75" y2="30" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
              </svg>
            </div>

            <ul className="text-xs text-brand-ink-soft space-y-2.5 flex-grow">
              <li>• Signal detection</li>
              <li>• Pattern recognition</li>
              <li>• Contextual linking</li>
              <li>• Temporal mapping</li>
              <li>• Cross-domain integration</li>
            </ul>

            <div className="text-xs text-brand-ink border-t border-brand-line pt-4 leading-normal">
              We connect what traditional systems treat as separate.
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue flex gap-1.5">
                <span className="text-sm font-serif font-normal">03</span> Understand
              </div>
              <div className="text-xs md:text-sm font-semibold text-brand-ink leading-snug">
                Reveal the cognitive<br />architecture.
              </div>
            </div>

            {/* SVG 3 */}
            <div className="py-4 border border-dashed border-slate-200 bg-[#f8fafc] rounded-full aspect-square flex items-center justify-center max-w-[150px] mx-auto w-full my-4">
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-blue opacity-85">
                <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <polygon points="50,30 70,41 70,59 50,70 30,59 30,41" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="5" fill="var(--color-brand-rose)" />
              </svg>
            </div>

            <ul className="text-xs text-brand-ink-soft space-y-2.5 flex-grow">
              <li>• Cognitive Blueprint Modeling</li>
              <li>• Strengths & differences</li>
              <li>• Regulation patterns</li>
              <li>• Learning pathways</li>
              <li>• Communication styles</li>
              <li>• Sensory processing</li>
              <li>• Motivation & meaning</li>
            </ul>

            <div className="text-xs text-brand-ink border-t border-brand-line pt-4 leading-normal">
              Understanding emerges when patterns become structure.
            </div>
          </div>

          {/* Column 4 */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue flex gap-1.5">
                <span className="text-sm font-serif font-normal">04</span> Personalize
              </div>
              <div className="text-xs md:text-sm font-semibold text-brand-ink leading-snug">
                Make understanding<br />actionable.
              </div>
            </div>

            {/* SVG 4 */}
            <div className="py-4 border border-dashed border-slate-200 bg-[#f8fafc] rounded-full aspect-square flex items-center justify-center max-w-[150px] mx-auto w-full my-4">
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-rose opacity-85">
                <circle cx="50" cy="38" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M30,75 C30,60 40,55 50,55 C60,55 70,60 70,75" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="var(--color-brand-amber)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>

            <ul className="text-xs text-brand-ink-soft space-y-2.5 flex-grow">
              <li>• Personalized insights</li>
              <li>• Intervention guidance</li>
              <li>• Learning recommendations</li>
              <li>• Environmental adjustments</li>
              <li>• Regulation strategies</li>
              <li>• Strength-based pathways</li>
            </ul>

            <div className="text-xs text-brand-ink border-t border-brand-line pt-4 leading-normal">
              Every mind is unique. Every plan should be too.
            </div>
          </div>

          {/* Column 5 */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue flex gap-1.5">
                <span className="text-sm font-serif font-normal">05</span> Learn
              </div>
              <div className="text-xs md:text-sm font-semibold text-brand-ink leading-snug">
                The platform learns<br />alongside the individual.
              </div>
            </div>

            {/* SVG 5 */}
            <div className="py-4 border border-dashed border-slate-200 bg-[#f8fafc] rounded-full aspect-square flex items-center justify-center max-w-[150px] mx-auto w-full my-4">
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-violet opacity-85">
                <path d="M30,50 Q40,30 50,50 T70,50" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M30,50 Q40,70 50,50 T70,50" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M50,20 C30,40 30,60 50,80" fill="none" stroke="var(--color-brand-blue)" strokeWidth="1.2" />
                <path d="M50,20 C70,40 70,60 50,80" fill="none" stroke="var(--color-brand-blue)" strokeWidth="1.2" />
                <circle cx="50" cy="50" r="3" fill="var(--color-brand-teal)" />
              </svg>
            </div>

            <ul className="text-xs text-brand-ink-soft space-y-2.5 flex-grow">
              <li>• Outcome feedback</li>
              <li>• Real-world results</li>
              <li>• Continuous refinement</li>
              <li>• Model improvement</li>
              <li>• Evidence validation</li>
              <li>• Adaptive learning</li>
            </ul>

            <div className="text-xs text-brand-ink border-t border-brand-line pt-4 leading-normal">
              The more we learn, the more accurate we become.
            </div>
          </div>

          {/* Column 6 */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue flex gap-1.5">
                <span className="text-sm font-serif font-normal">06</span> Collaborate
              </div>
              <div className="text-xs md:text-sm font-semibold text-brand-ink leading-snug">
                Bring the entire ecosystem<br />together.
              </div>
            </div>

            {/* SVG 6 */}
            <div className="py-4 border border-dashed border-slate-200 bg-[#f8fafc] rounded-full aspect-square flex items-center justify-center max-w-[150px] mx-auto w-full my-4">
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-amber opacity-85">
                <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="38" cy="45" r="12" fill="none" stroke="var(--color-brand-blue)" strokeWidth="1.2" />
                <circle cx="62" cy="45" r="12" fill="none" stroke="var(--color-brand-rose)" strokeWidth="1.2" />
                <circle cx="50" cy="62" r="12" fill="none" stroke="var(--color-brand-teal)" strokeWidth="1.2" />
              </svg>
            </div>

            <ul className="text-xs text-brand-ink-soft space-y-2.5 flex-grow">
              <li>• Families</li>
              <li>• Clinicians</li>
              <li>• Educators</li>
              <li>• Researchers</li>
              <li>• Therapists</li>
              <li>• Technologists</li>
              <li>• Communities</li>
            </ul>

            <div className="text-xs text-brand-ink border-t border-brand-line pt-4 leading-normal">
              Understanding grows faster when we grow together.
            </div>
          </div>

          {/* Column 7 */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue flex gap-1.5">
                <span className="text-sm font-serif font-normal">07</span> Transform
              </div>
              <div className="text-xs md:text-sm font-semibold text-brand-ink leading-snug">
                Create better outcomes.<br />Build a better world.
              </div>
            </div>

            {/* SVG 7 */}
            <div className="py-4 border border-dashed border-slate-200 bg-[#f8fafc] rounded-full aspect-square flex items-center justify-center max-w-[150px] mx-auto w-full my-4">
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-green opacity-85">
                <path d="M50,15 L56,44 L85,50 L56,56 L50,85 L44,56 L15,50 L44,44 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="6" fill="var(--color-brand-teal)" />
              </svg>
            </div>

            <ul className="text-xs text-brand-ink-soft space-y-2.5 flex-grow">
              <li>• Better individuals</li>
              <li>• Stronger families</li>
              <li>• Smarter systems</li>
              <li>• Inclusive communities</li>
              <li>• Human flourishing</li>
            </ul>

            <div className="text-xs text-brand-ink border-t border-brand-line pt-4 leading-normal">
              Understanding one mind helps transform every mind.
            </div>
          </div>

        </div>

        {/* --- Bottom Bar Section --- */}
        <div className="border border-brand-line rounded-xl p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 bg-brand-bg-alt">
          
          <div className="space-y-4">
            <h3 className="font-mono text-xs tracking-[0.08em] font-bold text-brand-blue uppercase flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
              THE FOUNDATION
            </h3>
            <ul className="text-xs text-brand-ink-soft space-y-2.5">
              <li>• Privacy by design.</li>
              <li>• Ethics at the core.</li>
              <li>• Security always.</li>
              <li>• Human dignity above all.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-xs tracking-[0.08em] font-bold text-brand-blue uppercase flex items-center gap-2">
              <Workflow className="w-4 h-4 text-brand-blue" />
              OUR PRINCIPLES
            </h3>
            <ul className="text-xs text-brand-ink-soft space-y-2.5">
              <li>• Science before technology.</li>
              <li>• Empathy before intervention.</li>
              <li>• Strengths before deficits.</li>
              <li>• Partnership before prescription.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-xs tracking-[0.08em] font-bold text-brand-blue uppercase flex items-center gap-2">
              <Cpu className="w-4 h-4 text-brand-blue" />
              POWERED BY
            </h3>
            <ul className="text-xs text-brand-ink-soft space-y-2.5">
              <li>• The Cognitive Blueprint</li>
              <li>• The Autism Consciousness Lab</li>
              <li>• Advanced AI & Analytics</li>
              <li>• Human expertise</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-xs tracking-[0.08em] font-bold text-brand-blue uppercase flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-blue" />
              BUILT FOR
            </h3>
            <ul className="text-xs text-brand-ink-soft space-y-2.5">
              <li>• Every child.</li>
              <li>• Every family.</li>
              <li>• Every community.</li>
              <li>• Every generation.</li>
            </ul>
          </div>

          <div className="space-y-4 flex flex-col justify-between">
            <h3 className="font-mono text-xs tracking-[0.08em] font-bold text-brand-blue uppercase flex items-center gap-2">
              <Milestone className="w-4 h-4 text-brand-blue" />
              THE PROCESS
            </h3>
            {/* Process layout */}
            <div className="bg-brand-bg border border-dashed border-slate-200 rounded-lg p-3 flex justify-between items-center h-20 w-full px-4">
              <div className="flex justify-between items-center w-full font-mono text-xs tracking-wider text-brand-ink-soft">
                <div className="text-center">
                  <div className="text-xs text-brand-blue mb-0.5">◎</div>
                  Data
                </div>
                <div className="text-brand-muted font-bold">&rarr;</div>
                <div className="text-center">
                  <div className="text-xs text-brand-teal mb-0.5">✦</div>
                  Insight
                </div>
                <div className="text-brand-muted font-bold">&rarr;</div>
                <div className="text-center">
                  <div className="text-xs text-brand-orange mb-0.5">▶</div>
                  Action
                </div>
                <div className="text-brand-muted font-bold">&rarr;</div>
                <div className="text-center">
                  <div className="text-xs text-brand-violet mb-0.5">✳</div>
                  Impact
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --- Footer Section --- */}
        <footer className="text-center pt-8 border-t border-brand-line space-y-3">
          <h2 className="font-serif text-[24px] md:text-[28px] font-normal text-brand-ink max-w-2xl mx-auto leading-snug">
            The Empathy Initiative Platform is not finished.
          </h2>
          <span className="font-serif italic text-brand-blue text-[28px] md:text-[32px] block max-w-lg mx-auto leading-snug">
            It evolves with every life it touches.
          </span>
          <p className="text-xs text-brand-muted font-mono tracking-wide">
            BECAUSE UNDERSTANDING IS NOT STATIC. AND NEITHER IS HUMANITY.
          </p>
        </footer>

      </div>
    </div>
  );
};

export default Platform;
