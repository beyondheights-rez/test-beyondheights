import React, { useEffect } from 'react';
import { User, Activity, GraduationCap, Users2, Heart, Info } from 'lucide-react';

const Blueprint: React.FC = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 px-6 md:px-12 bg-brand-bg text-brand-ink min-h-screen">
      <div className="max-w-[1600px] mx-auto space-y-16">

        {/* --- Header Section --- */}
        <header className="text-center space-y-4">
          <div className="font-mono text-xs tracking-[0.2em] text-brand-blue uppercase font-bold">
            Rithvik's Story
          </div>
          <h1 className="font-sans text-[36px] md:text-[44px] lg:text-[52px] font-light tracking-[0.15em] uppercase text-brand-ink">
            The Child Who Changed The Question
          </h1>
          <div className="font-serif text-[15px] md:text-base text-brand-ink-soft max-w-[600px] mx-auto leading-relaxed">
            <p>Not a story about overcoming autism.<br />A story about discovering a new way to understand the mind.</p>
          </div>
        </header>

        {/* --- 6 Column Main Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.6fr_1.2fr_1fr_1fr] gap-8">
          
          {/* Column 1 */}
          <div className="flex flex-col justify-between space-y-5">
            <div className="space-y-4 text-left">
              <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue">
                CHAPTER ONE
              </div>
              <h2 className="font-serif text-xl text-[#111827] leading-snug">
                We met the diagnosis.
              </h2>
              <div className="text-xs text-brand-ink-soft leading-relaxed space-y-2">
                <p>We had entered a world that millions of families know.</p>
                <p>Appointments.<br />Assessments.<br />Milestones.<br />Goals.<br />Interventions.<br />Expert opinions.</p>
                <p className="pt-4 text-brand-ink-soft">Every conversation revolved around one question:</p>
                <p className="font-bold text-brand-ink">How do we help him become more typical?</p>
              </div>
            </div>

            {/* Child outline sketch graphic */}
            <div className="w-full h-[180px] bg-[#f1f5f9] rounded-xl flex items-center justify-center relative overflow-hidden group">
              <svg viewBox="0 0 100 100" className="w-20 h-20 text-brand-blue opacity-50 group-hover:scale-105 transition-transform duration-300">
                <path d="M50,30 C40,30 35,35 35,45 C35,60 50,75 50,75 C50,75 65,60 65,45 C65,35 60,30 50,30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="50" cy="45" r="5" fill="currentColor" />
              </svg>
              <div className="absolute bottom-2 left-2 font-mono text-xs text-brand-muted tracking-wider uppercase">
                RITHVIK AT FOUR
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col justify-between space-y-5">
            <div className="space-y-4 text-left">
              <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue">
                CHAPTER TWO
              </div>
              <h2 className="font-serif text-xl text-[#111827] leading-snug">
                We saw the gaps.
              </h2>
              <div className="text-xs text-brand-ink-soft leading-relaxed space-y-3">
                <p>The reports measured delay.<br />The assessments measured difference.<br />The therapies measured progress.</p>
                <p className="font-bold text-brand-ink my-2 leading-snug">
                  But no one was measuring understanding.
                </p>
                <p>
                  The more we learned about autism, the more we realized how little anyone understood our son.
                </p>
              </div>
            </div>

            {/* Scatter dots SVG */}
            <div className="w-full h-[150px] bg-[#f8fafc] border border-dashed border-slate-200 rounded-xl flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-blue opacity-85">
                <circle cx="20" cy="30" r="2.5" fill="currentColor" />
                <circle cx="70" cy="20" r="2.5" fill="currentColor" />
                <circle cx="45" cy="60" r="2.5" fill="currentColor" />
                <circle cx="80" cy="70" r="2.5" fill="currentColor" />
                <circle cx="30" cy="50" r="2.5" fill="currentColor" />
                <circle cx="65" cy="45" r="2.5" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Column 3 (Circular Hub) */}
          <div className="flex flex-col justify-between space-y-5 text-center items-center">
            <div className="space-y-2">
              <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue">
                CHAPTER THREE
              </div>
              <h2 className="font-serif text-xl text-[#111827] leading-tight">
                We started collecting moments.
              </h2>
              <div className="font-mono text-xs text-brand-muted uppercase tracking-wider">
                Not for reports. Not for goals. For understanding.
              </div>
            </div>

            {/* Hub design */}
            <div className="relative w-full h-[300px]">
              {/* Inner core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] rounded-full bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] border border-blue-200 shadow-[0_0_35px_rgba(59,130,246,0.3)] flex items-center justify-center text-center">
                <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-blue opacity-95">
                  <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="50" cy="42" r="7" fill="var(--color-brand-blue)" />
                  <path d="M35,68 C35,58 42,54 50,54 C58,54 65,58 65,68" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Node 1: Parents */}
              <div className="absolute top-[8%] left-[10%] flex flex-col items-center w-20 text-xs font-bold text-brand-ink-soft">
                <div className="w-7 h-7 rounded-full border border-blue-400 bg-white flex items-center justify-center mb-1 text-brand-blue"><User className="w-3.5 h-3.5" /></div>
                Parents
              </div>
              {/* Node 2: Doctors */}
              <div className="absolute top-[8%] right-[10%] flex flex-col items-center w-20 text-xs font-bold text-brand-ink-soft">
                <div className="w-7 h-7 rounded-full border border-blue-400 bg-white flex items-center justify-center mb-1 text-brand-blue"><Activity className="w-3.5 h-3.5" /></div>
                Doctors
              </div>
              {/* Node 3: Teachers */}
              <div className="absolute top-[42%] left-[2%] flex flex-col items-center w-20 text-xs font-bold text-brand-ink-soft">
                <div className="w-7 h-7 rounded-full border border-blue-400 bg-white flex items-center justify-center mb-1 text-brand-blue"><GraduationCap className="w-3.5 h-3.5" /></div>
                Teachers
              </div>
              {/* Node 4: Caregivers */}
              <div className="absolute top-[42%] right-[2%] flex flex-col items-center w-20 text-xs font-bold text-brand-ink-soft">
                <div className="w-7 h-7 rounded-full border border-blue-400 bg-white flex items-center justify-center mb-1 text-brand-blue"><Users2 className="w-3.5 h-3.5" /></div>
                Caregivers
              </div>
              {/* Node 5: Therapists */}
              <div className="absolute bottom-[8%] left-[15%] flex flex-col items-center w-20 text-xs font-bold text-brand-ink-soft">
                <div className="w-7 h-7 rounded-full border border-blue-400 bg-white flex items-center justify-center mb-1 text-brand-blue"><Heart className="w-3.5 h-3.5" /></div>
                Therapists
              </div>
              {/* Node 6: Schools */}
              <div className="absolute bottom-[8%] right-[15%] flex flex-col items-center w-20 text-xs font-bold text-brand-ink-soft">
                <div className="w-7 h-7 rounded-full border border-blue-400 bg-white flex items-center justify-center mb-1 text-brand-blue"><Info className="w-3.5 h-3.5" /></div>
                Schools
              </div>
            </div>

            <div className="text-xs text-brand-ink-soft leading-relaxed space-y-2">
              <p>Families remember thousands of moments.</p>
              <p className="font-semibold text-brand-blue">We began to see what others had seen, but never connected.</p>
            </div>
          </div>

          {/* Column 4 (Moments List) */}
          <div className="flex flex-col justify-between space-y-5">
            <div className="space-y-4 text-center">
              <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue">
                THE MOMENTS
              </div>
              <h2 className="font-serif text-lg text-[#111827] leading-tight">
                At first, it felt like noise.
              </h2>
            </div>

            <ul className="text-xs text-brand-ink-soft space-y-1.5 pl-4 border-l border-brand-line flex-grow py-2">
              <li className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-brand-blue before:font-bold">Didn't sleep</li>
              <li className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-brand-blue before:font-bold">Covered ears</li>
              <li className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-brand-blue before:font-bold">Avoided eye contact</li>
              <li className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-brand-blue before:font-bold">Lined up toys</li>
              <li className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-brand-blue before:font-bold">Hyperfocused</li>
              <li className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-brand-blue before:font-bold">Wouldn't transition</li>
              <li className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-brand-blue before:font-bold">Ran outside</li>
              <li className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-brand-blue before:font-bold">Didn't speak</li>
              <li className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-brand-blue before:font-bold">Repeated words</li>
              <li className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-brand-blue before:font-bold">Rocked continuously</li>
              <li className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-brand-blue before:font-bold">Calm after swinging</li>
              <li className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-brand-blue before:font-bold">Loved water</li>
              <li className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-brand-blue before:font-bold">Needed silence</li>
            </ul>

            {/* Funnel SVG */}
            <div className="w-full h-[80px] flex items-center justify-center my-2">
              <svg viewBox="0 0 100 80" className="w-16 h-14 text-brand-rose opacity-85">
                <polygon points="15,10 85,10 60,50 40,50" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <line x1="50" y1="50" x2="50" y2="75" stroke="var(--color-brand-blue)" strokeWidth="2" />
                <circle cx="35" cy="20" r="1.5" fill="currentColor" />
                <circle cx="65" cy="22" r="1.5" fill="currentColor" />
                <circle cx="50" cy="28" r="1.5" fill="currentColor" />
                <circle cx="50" cy="65" r="3" fill="var(--color-brand-teal)" />
              </svg>
            </div>

            <div className="text-xs text-brand-ink-soft leading-normal text-center">
              So many moments.<br />So little meaning.
            </div>
          </div>

          {/* Column 5 (Vertical Flow) */}
          <div className="flex flex-col justify-between space-y-5 text-center items-center">
            <div className="space-y-2">
              <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue">
                THE SHIFT
              </div>
              <h2 className="font-serif text-lg text-[#111827] leading-tight">
                Then patterns appeared.
              </h2>
            </div>

            <div className="flex flex-col items-center gap-1.5 py-4">
              <div className="flex flex-col items-center text-xs font-semibold text-brand-ink-soft">
                <div className="w-7 h-7 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mb-0.5 text-xs font-bold">S</div> Sleep
              </div>
              <div className="text-slate-300 text-xs leading-none">&darr;</div>
              <div className="flex flex-col items-center text-xs font-semibold text-brand-ink-soft">
                <div className="w-7 h-7 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mb-0.5 text-xs font-bold">R</div> Regulation
              </div>
              <div className="text-slate-300 text-xs leading-none">&darr;</div>
              <div className="flex flex-col items-center text-xs font-semibold text-brand-ink-soft">
                <div className="w-7 h-7 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mb-0.5 text-xs font-bold">A</div> Attention
              </div>
              <div className="text-slate-300 text-xs leading-none">&darr;</div>
              <div className="flex flex-col items-center text-xs font-semibold text-brand-ink-soft">
                <div className="w-7 h-7 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mb-0.5 text-xs font-bold">L</div> Learning
              </div>
              <div className="text-slate-300 text-xs leading-none">&darr;</div>
              <div className="flex flex-col items-center text-xs font-semibold text-brand-ink-soft">
                <div className="w-7 h-7 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mb-0.5 text-xs font-bold">C</div> Confidence
              </div>
              <div className="text-slate-300 text-xs leading-none">&darr;</div>
              <div className="flex flex-col items-center text-xs font-semibold text-brand-ink-soft">
                <div className="w-7 h-7 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mb-0.5 text-xs font-bold">I</div> Independence
              </div>
            </div>

            <div className="text-xs text-brand-ink-soft leading-relaxed space-y-1">
              <p>Everything reorganized.</p>
              <p className="font-semibold text-brand-blue">Exactly like Moneyball.</p>
            </div>
          </div>

          {/* Column 6 */}
          <div className="flex flex-col justify-between space-y-5 text-center items-center">
            <div className="space-y-2">
              <div className="font-mono text-xs tracking-[0.05em] uppercase font-bold text-brand-blue">
                THE BREAKTHROUGH
              </div>
              <h2 className="font-serif text-lg text-[#111827] leading-tight">
                Nothing about Rithvik changed.
              </h2>
            </div>

            {/* Profile Network SVG */}
            <div className="w-[150px] h-[150px] rounded-full bg-[#f8fafc] border border-slate-100 flex items-center justify-center shadow-[inset_0_0_20px_rgba(59,130,246,0.04)] my-4">
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-teal opacity-85">
                <path d="M35,75 C35,65 32,55 32,45 C32,25 46,15 62,15 C76,15 80,27 80,43 C80,55 72,65 65,75" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="48" cy="32" r="3" fill="var(--color-brand-blue)" />
                <circle cx="64" cy="38" r="3" fill="var(--color-brand-blue)" />
                <circle cx="52" cy="52" r="3" fill="var(--color-brand-blue)" />
                <line x1="48" y1="32" x2="64" y2="38" stroke="currentColor" strokeWidth="1.2" />
                <line x1="52" y1="52" x2="64" y2="38" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>

            <div className="text-xs text-brand-ink-soft leading-relaxed space-y-1">
              <p>Our ability to see him did.</p>
              <p className="font-semibold text-brand-blue">That is the breakthrough.</p>
            </div>
          </div>

        </div>

        {/* --- Bottom Panels Section --- */}
        <div className="border-t border-brand-line pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 bg-brand-bg">
          
          {/* Panel 1 */}
          <div className="px-6 border-b md:border-b-0 md:border-r border-brand-line pb-6 md:pb-0">
            <h3 className="font-mono text-xs tracking-[0.05em] font-bold text-brand-blue uppercase mb-4">THE CONTRARIAN TRUTH</h3>
            <div className="flex gap-4 items-start mb-4">
              <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-lg text-slate-700 shrink-0">⚾</div>
              <div className="text-xs font-bold text-brand-ink leading-snug">Moneyball did not discover better baseball players. It discovered a better model for recognizing value.</div>
            </div>
            <div className="text-xs text-brand-blue font-semibold mb-3">The Empathy Initiative is attempting exactly the same shift.</div>
            <div className="text-xs text-brand-ink-soft">Not for baseball. For human cognition.</div>
          </div>

          {/* Panel 2 */}
          <div className="px-6 border-b md:border-b-0 lg:border-r border-brand-line py-6 md:py-0">
            <h3 className="font-mono text-xs tracking-[0.05em] font-bold text-brand-blue uppercase mb-4">THE OLD MODEL</h3>
            <p className="text-xs font-bold text-brand-ink mb-2">For decades we measured:</p>
            <div className="text-xs text-brand-ink-soft leading-relaxed space-y-1">
              <p>IQ • Speech • Compliance</p>
              <p>Milestones • Behaviors • Diagnoses</p>
            </div>
            <p className="text-xs font-semibold text-brand-ink mt-4 leading-snug">Those measurements describe how closely someone resembles the average.</p>
            <p className="text-xs text-brand-ink-soft mt-1 leading-snug">They do not describe how that mind actually works.</p>
          </div>

          {/* Panel 3 */}
          <div className="px-6 border-b md:border-b-0 md:border-r border-brand-line py-6 md:py-0">
            <h3 className="font-mono text-xs tracking-[0.05em] font-bold text-brand-blue uppercase mb-4">THE NEW QUESTION</h3>
            <div className="space-y-4 text-xs text-brand-ink-soft leading-relaxed">
              <p>Instead of asking</p>
              <p className="font-serif italic text-brand-blue text-base">"How different is this child?"</p>
              <p>we ask</p>
              <p className="font-serif italic text-brand-blue text-base font-bold leading-snug">Under what conditions does this mind flourish?</p>
              <p className="text-brand-ink pt-2 font-medium">That single question changes everything.</p>
            </div>
          </div>

          {/* Panel 4 (Wider Formula Flow) */}
          <div className="px-6 border-b md:border-b-0 border-brand-line py-6 md:py-0 md:col-span-2 lg:col-span-1 lg:border-r text-center">
            <h3 className="font-mono text-xs tracking-[0.05em] font-bold text-brand-blue uppercase mb-4">THE FORMULA</h3>
            <div className="grid grid-cols-3 gap-y-4 gap-x-2">
              <div className="text-center space-y-1">
                <span className="font-mono text-xs text-[#8b5cf6] font-bold">OBSERVE</span>
              </div>
              <div className="text-center space-y-1">
                <span className="font-mono text-xs text-[#3b82f6] font-bold">PATTERN</span>
              </div>
              <div className="text-center space-y-1 border border-brand-blue rounded p-0.5">
                <span className="font-mono text-xs text-[#10b981] font-bold">UNDERSTAND</span>
              </div>
              <div className="text-center space-y-1">
                <span className="font-mono text-xs text-[#f59e0b] font-bold">PREDICT</span>
              </div>
              <div className="text-center space-y-1">
                <span className="font-mono text-xs text-[#ef4444] font-bold">DESIGN</span>
              </div>
              <div className="text-center space-y-1">
                <span className="font-mono text-xs text-[#14b8a6] font-bold">POTENTIAL</span>
              </div>
            </div>
            <div className="text-brand-blue font-bold text-xs mt-4">This is Autism's Moneyball Moment.</div>
            <p className="text-xs text-brand-ink-soft mt-1 leading-normal">Not because autism needs another therapy. Because autism needs a new way of being understood.</p>
          </div>

          {/* Panel 5 */}
          <div className="px-6 py-6 md:py-0">
            <h3 className="font-mono text-xs tracking-[0.05em] font-bold text-brand-blue uppercase mb-4">CLOSING STATEMENT</h3>
            <div className="text-xs text-brand-ink-soft space-y-4">
              <p>Moneyball changed baseball by discovering that value had been hiding inside plain sight.</p>
              <p className="text-brand-blue font-semibold">The Empathy Initiative believes the same thing is true of autism.</p>
              <p className="font-bold text-brand-ink leading-snug">The intelligence was never missing. The model for seeing it was.</p>
            </div>
          </div>

        </div>

        {/* --- Footer --- */}
        <footer className="text-center pt-8 border-t border-brand-line space-y-2">
          <p className="text-xs text-brand-ink-soft font-mono tracking-wider">
            ONE CHILD. THOUSANDS OF MOMENTS. ONE QUESTION THAT CHANGED EVERYTHING.
          </p>
          <p className="text-xs text-brand-blue font-mono font-bold tracking-wider">
            A NEW SCIENCE OF UNDERSTANDING HUMAN CONSCIOUSNESS.
          </p>
        </footer>

      </div>
    </div>
  );
};

export default Blueprint;
