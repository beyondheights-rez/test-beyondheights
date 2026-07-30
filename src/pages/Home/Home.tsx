import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ConstellationBackdrop from '../../components/common/ConstellationBackdrop';
import RadialDiagram from '../../components/common/RadialDiagram';
import ImpactFlow from '../../components/common/ImpactFlow';

const Home: React.FC = () => {
  const location = useLocation();

  // Scroll to hash on load or location change
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location]);
  const [activeTier, setActiveTier] = useState<string>('$100');

  const tiers = [
    { amount: '$25', label: 'Sensory Kit', desc: 'Sponsor sensory integration items and coordination tools.' },
    { amount: '$100', label: 'Therapy Session', desc: 'Sponsor a personalized 1-on-1 speech or occupational therapy session.' },
    { amount: '$500', label: 'Monthly Sponsorship', desc: 'Sponsor a child\'s full monthly structured therapy and athletics package.' },
    { amount: 'Custom', label: 'Custom Amount', desc: 'Enter a custom amount to sponsor specialized athletics and therapy equipment.' }
  ];

  // IntersectionObserver to add "in" class to .fade-up elements
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-up');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target); // Trigger once
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeElements.forEach((el) => observer.observe(el));
    return () => fadeElements.forEach((el) => observer.unobserve(el));
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <div className="relative">
      
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 py-[160px] pb-[80px] bg-gradient-to-b from-[#5a86e0]/5 via-transparent to-[#dd9a3c]/5 overflow-hidden">
        <ConstellationBackdrop />
        
        <div className="relative z-10 max-w-[1280px] mx-auto w-full text-center space-y-6">
          <div className="flex justify-center gap-1.5 opacity-50">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="w-[3px] h-[3px] rounded-full bg-brand-ink-soft" />
            ))}
          </div>

          <h1 className="fade-up text-[36px] sm:text-[4.5vw] xl:text-[52px] font-serif leading-[1.15] max-w-[960px] mx-auto text-brand-ink">
            We designed the world<br />
            <span className="italic text-brand-ink-soft">around the typical pacing.</span>
          </h1>

          <p className="fade-up d1 text-[15px] md:text-base text-brand-ink-soft max-w-[560px] mx-auto leading-[1.6]">
            Every developmental system — classroom, daily schedule, physical sport — assumes one speed of processing. Beyond Heights maps the coordinates where different tempos thrive.
          </p>

          <div className="fade-up d2 flex gap-4 justify-center flex-wrap pt-4">
            <a
              href="#idea"
              onClick={(e) => handleSmoothScroll(e, 'idea')}
              className="bg-brand-ink text-brand-bg px-8 py-3.5 font-mono text-xs tracking-[0.06em] uppercase rounded-[2px] hover:opacity-[0.78] transition-opacity"
            >
              Explore the Approach
            </a>
            <a
              href="#give"
              onClick={(e) => handleSmoothScroll(e, 'give')}
              className="border border-brand-line text-brand-ink-soft px-8 py-3.5 font-mono text-xs tracking-[0.06em] uppercase rounded-[2px] hover:border-brand-ink-soft hover:text-brand-ink transition-all"
            >
              Become a Sponsor
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-xs tracking-[0.12em] text-brand-muted select-none">
          <span>SCROLL</span>
          <span className="w-[1px] h-[34px] bg-gradient-to-b from-brand-muted to-transparent animate-[pulse_2.4s_ease-in-out_infinite]" />
        </div>
      </section>

      {/* ================= PREMISE STRIP ================= */}
      <section className="py-[110px] border-t border-brand-line bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-10 grid md:grid-cols-2 gap-12 md:gap-[80px] items-center">
          <h2 className="fade-up text-[24px] md:text-[28px] lg:text-[32px] font-serif leading-[1.2] text-brand-ink">
            The problem was never<br />different capability.
          </h2>
          <div className="fade-up d1 font-sans text-brand-ink-soft text-[15px] md:text-base leading-[1.75] space-y-4">
            <p>
              It was expecting one pattern to explain every mind. When a training style works long enough, it stops looking like design — it starts looking like reality.
            </p>
            <p>
              Autism exposes everything that speed-based systems miss. Difference is often a limitation of the observer, not the observed. Pacing shifts perspective.
            </p>
            <p>
              <strong className="text-brand-ink font-semibold">This is not a care program.</strong> It is a structured methodology for athletic and cognitive integration — starting with the minds standard frameworks fail to recognize.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 01 THE IDEA ================= */}
      <section className="py-[130px] border-t border-brand-line bg-brand-bg" id="idea">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-[100px] items-center">
            <div className="space-y-6">
              <div className="eyebrow">
                <span className="text-brand-ink-soft mr-2">01</span> The Idea
              </div>
              <h2 className="fade-up text-[24px] md:text-[28px] lg:text-[32px] font-serif leading-[1.2] text-brand-ink">
                Every routine is a track.<br />Every track builds capability.
              </h2>
              <p className="fade-up d1 text-[15px] md:text-base text-brand-ink-soft leading-[1.7]">
                A simple but radical practice: structure is safety, and consistency is capability. By organizing sensory stimuli and motor tasks into consistent routines, we clear the static, letting the student's true potential express itself.
              </p>
              <div className="fade-up d2 flex flex-wrap gap-2 pt-2">
                {['Routine', 'Structure', 'Consistency', 'Capability'].map((tag) => (
                  <span key={tag} className="font-mono text-xs tracking-[0.04em] uppercase border border-brand-line rounded-full px-3 py-1.5 text-brand-ink-soft">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="fade-up d2 font-serif italic text-[15px] md:text-base text-brand-ink-soft border-l-2 border-brand-line pl-4 py-1">
                Structure replaces developmental uncertainty with trackable growth.
              </div>
              <a
                href="#autism"
                onClick={(e) => handleSmoothScroll(e, 'autism')}
                className="fade-up d2 inline-flex items-center font-mono text-xs tracking-[0.06em] uppercase text-brand-ink border-b border-brand-ink pb-1 hover:opacity-[0.7] transition-opacity"
              >
                Autism & Focus →
              </a>
              <div className="pt-4 border-t border-dashed border-brand-line font-mono text-xs tracking-[0.03em] text-brand-muted">
                <b>Takeaway —</b> progress on the spectrum is a factor of consistency.
              </div>
            </div>
            <div className="fade-up d3 flex justify-center items-center">
              <img
                src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/new%20assets/1.png"
                alt="The Idea Visual"
                className="w-full max-h-[450px] object-contain mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= 02 AUTISM & FOCUS ================= */}
      <section className="py-[130px] border-t border-brand-line bg-brand-bg-alt" id="autism">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-[100px] items-center">
            <div className="fade-up d3 flex justify-center items-center order-last md:order-first">
              <img
                src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/new%20assets/2.png"
                alt="Autistic Experience Diagram"
                className="w-full max-h-[450px] object-contain mix-blend-multiply"
              />
            </div>
            <div className="space-y-6">
              <div className="eyebrow">
                <span className="text-brand-ink-soft mr-2">02</span> Autism & Focus
              </div>
              <h2 className="fade-up text-[24px] md:text-[28px] lg:text-[32px] font-serif leading-[1.2] text-brand-ink">
                Autism is not a boundary.<br />It is a focused architecture.
              </h2>
              <p className="fade-up d1 text-[15px] md:text-base text-brand-ink-soft leading-[1.7]">
                We view autism as a unique cognitive configuration. Deep concentration, visual scanning speed, meticulous details mapping, and intense dedication are standard markers we map and channel.
              </p>
              <div className="fade-up d2 flex flex-wrap gap-2 pt-2">
                {['Deep Focus', 'Visual Scanning', 'Detail Focus', 'Sustained Stamina'].map((tag) => (
                  <span key={tag} className="font-mono text-xs tracking-[0.04em] uppercase border border-brand-line rounded-full px-3 py-1.5 text-brand-ink-soft bg-brand-bg">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="fade-up d2 font-serif italic text-[15px] md:text-base text-brand-ink-soft border-l-2 border-brand-line pl-4 py-1">
                Neurodiversity is capability, expressed in different paces.
              </div>
              <a
                href="#story"
                onClick={(e) => handleSmoothScroll(e, 'story')}
                className="fade-up d2 inline-flex items-center font-mono text-xs tracking-[0.06em] uppercase text-brand-ink border-b border-brand-ink pb-1 hover:opacity-[0.7] transition-opacity"
              >
                Our Story →
              </a>
              <div className="pt-4 border-t border-dashed border-brand-line font-mono text-xs tracking-[0.03em] text-brand-muted">
                <b>Takeaway —</b> when the environment is structured, different minds excel.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 03 OUR STORY ================= */}
      <section className="py-[130px] border-t border-brand-line bg-brand-bg scroll-mt-24" id="about">
        <div id="story" className="scroll-mt-24" />
        <div className="max-w-[1280px] mx-auto px-10 space-y-12">
          <div className="space-y-4">
            <div className="eyebrow">
              <span className="text-brand-ink-soft mr-2">03</span> Our Story
            </div>
            <h2 className="fade-up text-[24px] md:text-[28px] lg:text-[32px] font-serif leading-[1.2] text-brand-ink max-w-[720px]">
              One family rewrote the developmental roadmap.
            </h2>
            <p className="fade-up d1 text-[15px] md:text-base text-brand-ink-soft leading-[1.7] max-w-[640px]">
              It began at home. When Ranjani's son Rithvik was diagnosed on the autism spectrum, they found clinical classifications but no practical coordinate system for daily capability. By building rigorous routine structures and introducing physical endurance running, Rithvik transitioned from uncertainty into an ultra-marathon athlete now training for the Ironman.
            </p>
          </div>

          <div id="moneyball" className="fade-up d2 py-8 overflow-x-auto scroll-mt-24">
            <ImpactFlow
              nodes={[
                { symbol: '?', label: 'Diagnosis Mapped', color: 'var(--color-brand-green)' },
                { symbol: '◎', label: 'Structured routine', color: 'var(--color-brand-rose)' },
                { symbol: '▶', label: 'Stamina running', color: 'var(--color-brand-blue)' },
                { symbol: '✳', label: 'Ultra-marathons', color: 'var(--color-brand-violet)' },
                { symbol: '✦', label: 'Ironman Prep', color: 'var(--color-brand-amber)' },
              ]}
            />
          </div>

          <div className="fade-up d3 font-serif italic text-[15px] md:text-base text-brand-ink-soft border-l-2 border-brand-line pl-4 py-1 max-w-[560px]">
            "Behavior is a form of communication. Physical endurance channeling is a form of regulation."
          </div>
          <a
            href="#blueprint"
            onClick={(e) => handleSmoothScroll(e, 'blueprint')}
            className="fade-up d3 inline-flex items-center font-mono text-xs tracking-[0.06em] uppercase text-brand-ink border-b border-brand-ink pb-1 hover:opacity-[0.7] transition-opacity"
          >
            The Framework →
          </a>
          <div className="pt-4 border-t border-dashed border-brand-line font-mono text-xs tracking-[0.03em] text-brand-muted max-w-[400px]">
            <b>Takeaway —</b> Rithvik's journey stands as proof-of-capability for structured athletics.
          </div>
        </div>
      </section>

      {/* ================= 04 THE BLUEPRINT ================= */}
      <section className="py-[130px] border-t border-brand-line bg-brand-bg-alt" id="blueprint">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-[100px] items-center">
            <div className="space-y-6">
              <div className="eyebrow">
                <span className="text-brand-ink-soft mr-2">04</span> The Blueprint
              </div>
              <h2 className="fade-up text-[24px] md:text-[28px] lg:text-[32px] font-serif leading-[1.2] text-brand-ink">
                Five pillars working as one connected system.
              </h2>
              <p className="fade-up d1 text-[15px] md:text-base text-brand-ink-soft leading-[1.7]">
                We do not deliver treatments in isolation. Speech, occupational, and behavioral support plans map directly into special education and athletic fitness targets, creating a unified sensory script.
              </p>
              <div className="fade-up d2 flex flex-wrap gap-2 pt-2">
                {['Speech comms', 'Sensory OT', 'Behavior BSP', 'Life Academics', 'Athletics Run'].map((tag) => (
                  <span key={tag} className="font-mono text-xs tracking-[0.04em] uppercase border border-brand-line rounded-full px-3 py-1.5 text-brand-ink-soft bg-brand-bg">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="fade-up d2 font-serif italic text-[15px] md:text-base text-brand-ink-soft border-l-2 border-brand-line pl-4 py-1">
                A unified cognitive map eliminates sensory scripts conflict.
              </div>
              <a
                href="#lab"
                onClick={(e) => handleSmoothScroll(e, 'lab')}
                className="fade-up d2 inline-flex items-center font-mono text-xs tracking-[0.06em] uppercase text-brand-ink border-b border-brand-ink pb-1 hover:opacity-[0.7] transition-opacity"
              >
                Athletics Lab →
              </a>
              <div className="pt-4 border-t border-dashed border-brand-line font-mono text-xs tracking-[0.03em] text-brand-muted">
                <b>Takeaway —</b> cross-discipline mapping maintains progress thresholds.
              </div>
            </div>
            <div className="fade-up d3 flex justify-center items-center">
              <RadialDiagram
                center="DEVELOPMENT"
                spokes={[
                  { label: 'SPEECH COMMS', color: 'var(--color-brand-blue)' },
                  { label: 'SENSORY OT', color: 'var(--color-brand-amber)' },
                  { label: 'BEHAVIOR SUPPORT', color: 'var(--color-brand-violet)' },
                  { label: 'ACADEMICS', color: 'var(--color-brand-teal)' },
                  { label: 'ATHLETICS RUN', color: 'var(--color-brand-green)' },
                  { label: 'PARENT PORTAL', color: 'var(--color-brand-rose)' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= 05 THE LAB ================= */}
      <section className="py-[130px] border-t border-brand-line bg-brand-bg" id="lab">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-[100px] items-center">
            <div className="fade-up d3 flex justify-center items-center order-last md:order-first">
              <RadialDiagram
                center="ATHLETICS"
                spokes={[
                  { label: 'REGULATION', color: 'var(--color-brand-teal)' },
                  { label: 'MOTOR SKILL', color: 'var(--color-brand-blue)' },
                  { label: 'STAMINA', color: 'var(--color-brand-violet)' },
                  { label: 'BALANCE', color: 'var(--color-brand-rose)' },
                  { label: 'DESENSITIZE', color: 'var(--color-brand-amber)' },
                  { label: 'CONFIDENCE', color: 'var(--color-brand-green)' },
                ]}
              />
            </div>
            <div className="space-y-6">
              <div className="eyebrow">
                <span className="text-brand-ink-soft mr-2">05</span> The Lab
              </div>
              <h2 className="fade-up text-[24px] md:text-[28px] lg:text-[32px] font-serif leading-[1.2] text-brand-ink">
                Sports as a vehicle for sensory regulation.
              </h2>
              <p className="fade-up d1 text-[15px] md:text-base text-brand-ink-soft leading-[1.7]">
                Running isn't a leisure activity; it's a sensory regulator. Steady, rhythmic movement supplies deep proprioceptive inputs, calming overstimulation and training coordinate motor paths.
              </p>
              <div className="fade-up d2 flex flex-wrap gap-2 pt-2">
                {['Aerobic Pacing', 'Stamina Coordination', 'Crowd Adaptation', 'Ironman Prep'].map((tag) => (
                  <span key={tag} className="font-mono text-xs tracking-[0.04em] uppercase border border-brand-line rounded-full px-3 py-1.5 text-brand-ink-soft">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="fade-up d2 font-serif italic text-[15px] md:text-base text-brand-ink-soft border-l-2 border-brand-line pl-4 py-1">
                Calming sensory static by moving the body.
              </div>
              <a
                href="#platform"
                onClick={(e) => handleSmoothScroll(e, 'platform')}
                className="fade-up d2 inline-flex items-center font-mono text-xs tracking-[0.06em] uppercase text-brand-ink border-b border-brand-ink pb-1 hover:opacity-[0.7] transition-opacity"
              >
                Coimbatore Center →
              </a>
              <div className="pt-4 border-t border-dashed border-brand-line font-mono text-xs tracking-[0.03em] text-brand-muted">
                <b>Takeaway —</b> running builds the endurance base for learning.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 06 THE PLATFORM ================= */}
      <section className="py-[130px] border-t border-brand-line bg-brand-bg-alt" id="platform">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-[100px] items-center">
            <div className="space-y-6">
              <div className="eyebrow">
                <span className="text-brand-ink-soft mr-2">06</span> The Platform
              </div>
              <h2 className="fade-up text-[24px] md:text-[28px] lg:text-[32px] font-serif leading-[1.2] text-brand-ink">
                Our physical hub in Vadavalli.
              </h2>
              <p className="fade-up d1 text-[15px] md:text-base text-brand-ink-soft leading-[1.7]">
                Replicating real-world coordinates inside a safe, structured facility. Here, specialized trainers, therapists, and running coaches deliver daily routines and progressive stamina assessments.
              </p>
              <div className="fade-up d2 flex flex-wrap gap-2 pt-2">
                {['Therapy Rooms', 'Track Drill Areas', 'Sensory Play', 'Parent Classrooms'].map((tag) => (
                  <span key={tag} className="font-mono text-xs tracking-[0.04em] uppercase border border-brand-line rounded-full px-3 py-1.5 text-brand-ink-soft bg-brand-bg">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="fade-up d2 font-serif italic text-[15px] md:text-base text-brand-ink-soft border-l-2 border-brand-line pl-4 py-1">
                Bridging specialized training into community integrations.
              </div>
              <a
                href="#impact"
                onClick={(e) => handleSmoothScroll(e, 'impact')}
                className="fade-up d2 inline-flex items-center font-mono text-xs tracking-[0.06em] uppercase text-brand-ink border-b border-brand-ink pb-1 hover:opacity-[0.7] transition-opacity"
              >
                The Impact →
              </a>
              <div className="pt-4 border-t border-dashed border-brand-line font-mono text-xs tracking-[0.03em] text-brand-muted">
                <b>Takeaway —</b> controlled environments form the launchpad for real-world independence.
              </div>
            </div>
            <div className="fade-up d3 flex justify-center items-center">
              <RadialDiagram
                center="ACL HUB"
                spokes={[
                  { label: 'THERAPY AREA', color: 'var(--color-brand-blue)' },
                  { label: 'RUNNING TRACK', color: 'var(--color-brand-violet)' },
                  { label: 'SENSORY LAB', color: 'var(--color-brand-amber)' },
                  { label: 'PARENT ACAD', color: 'var(--color-brand-teal)' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= 07 THE IMPACT ================= */}
      <section className="py-[130px] border-t border-brand-line bg-brand-bg" id="impact">
        <div className="max-w-[1280px] mx-auto px-10 text-center space-y-12">
          <div className="space-y-4">
            <div className="eyebrow justify-center">
              <span className="text-brand-ink-soft mr-2">07</span> The Impact
            </div>
            <h2 className="fade-up text-[24px] md:text-[28px] lg:text-[32px] font-serif leading-[1.2] text-brand-ink max-w-[640px] mx-auto">
              Structured routines create active independence.
            </h2>
            <p className="fade-up d1 text-[15px] md:text-base text-brand-ink-soft max-w-[520px] mx-auto">
              Every coordinate mapping, every track step completed, and every speech routine mastered elevates developmental capability.
            </p>
          </div>

          <div className="fade-up d2 py-8 overflow-x-auto">
            <ImpactFlow
              nodes={[
                { symbol: '◐', label: 'Evaluation Mapped', color: 'var(--color-brand-blue)' },
                { symbol: '♥', label: 'Sensory Balance', color: 'var(--color-brand-rose)' },
                { symbol: '▶', label: 'Athletics Focus', color: 'var(--color-brand-green)' },
                { symbol: '◎◎◎', label: 'Autonomy Reached', color: 'var(--color-brand-amber)' },
              ]}
            />
          </div>

          <div className="fade-up d3 pt-6 max-w-[400px] mx-auto border-t border-dashed border-brand-line text-left font-mono text-xs tracking-[0.03em] text-brand-muted">
            <b>Takeaway —</b> autonomy is the ultimate target of all running and support routines.
          </div>
        </div>
      </section>

      {/* ================= 08 ETHICS & VALUES ================= */}
      <section className="py-[130px] border-t border-brand-line bg-brand-bg-alt" id="ethics">
        <div className="max-w-[1280px] mx-auto px-10 space-y-12">
          <div className="space-y-4">
            <div className="eyebrow">
              <span className="text-brand-ink-soft mr-2">08</span> Ethics
            </div>
            <h2 className="fade-up text-[24px] md:text-[28px] lg:text-[32px] font-serif leading-[1.2] text-brand-ink max-w-[640px]">
              Child dignity is our ultimate guideline.
            </h2>
            <p className="fade-up d1 text-[15px] md:text-base text-brand-ink-soft max-w-[560px]">
              Working with neurodivergent individuals requires absolute ethical accountability. We operate on transparency and respect for developmental rhythms.
            </p>
          </div>

          <div className="fade-up d2 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-line border border-brand-line">
            {[
              { num: '01', title: 'Privacy', desc: 'Protect absolute dignity in every daily evaluation dataset we hold.' },
              { num: '02', title: 'Pacing', desc: 'Empower individual tempo — routines change based on student comfort, not calendar templates.' },
              { num: '03', title: 'Transparency', desc: 'Keep all therapy metrics, blueprints, and progress sheets completely visible to parents.' },
              { num: '04', title: 'Autonomy First', desc: 'Focus strictly on active self-reliance and motor control, rejecting compliance-only methods.' }
            ].map((card) => (
              <div key={card.num} className="bg-brand-bg p-8 flex flex-col justify-between min-h-[220px]">
                <span className="font-mono text-xs text-brand-muted block mb-4">{card.num}</span>
                <h4 className="font-serif text-[20px] text-brand-ink mb-2">{card.title}</h4>
                <p className="text-xs md:text-sm text-brand-ink-soft leading-[1.6]">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 font-mono text-xs tracking-[0.03em] text-brand-muted">
            <b>Takeaway —</b> intervention is always in service of human capabilities, never conformity.
          </div>
        </div>
      </section>

      {/* ================= 09 PARTNER ================= */}
      <section className="py-[130px] border-t border-brand-line bg-brand-bg" id="partner">
        <div className="max-w-[1280px] mx-auto px-10 space-y-12">
          <div className="space-y-4">
            <div className="eyebrow">
              <span className="text-brand-ink-soft mr-2">09</span> Partner
            </div>
            <h2 className="fade-up text-[24px] md:text-[28px] lg:text-[32px] font-serif leading-[1.2] text-brand-ink max-w-[680px]">
              No path is built in isolation.
            </h2>
            <p className="fade-up d1 text-[15px] md:text-base text-brand-ink-soft max-w-[560px]">
              Expanding special-needs athletics and structured routine care requires a diverse, multi-disciplinary partner ecosystem.
            </p>
          </div>

          <div className="fade-up d2 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Researchers & Doctors', desc: 'Analyzing the sensory effects of aerobic running and physical coordination models.' },
              { title: 'Educators & Coaches', desc: 'Executing structured daily life scripts and athletic training schedules.' },
              { title: 'Families & Parents', desc: 'Carrying the home blueprints forward to keep support routines consistent.' },
              { title: 'Running Clubs', desc: 'Supporting inclusive running events and welcoming neurodivergent athletes.' },
              { title: 'Corporate Sponsors', desc: 'Funding child therapy allocations and helping us scale our Coimbatore hub.' },
              { title: 'Lived Advocates', desc: 'Spreading the simple question: "What is this child trying to convey?"' }
            ].map((p, idx) => (
              <div key={idx} className="border border-brand-line p-8 bg-brand-bg flex flex-col justify-between min-h-[180px]">
                <h4 className="font-serif text-[19px] text-brand-ink mb-3">{p.title}</h4>
                <p className="text-xs md:text-sm text-brand-ink-soft leading-[1.6]">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 font-mono text-xs tracking-[0.03em] text-brand-muted">
            <b>Takeaway —</b> every partner broadens the spectrum of capabilities.
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA / SPONSOR ================= */}
      <section className="py-[150px] text-center bg-brand-ink text-brand-bg relative overflow-hidden border-t border-brand-line" id="give">
        {/* Glow backdrop */}
        <div className="absolute inset-0 w-full h-full bg-radial-gradient from-brand-blue/10 to-transparent pointer-events-none opacity-50" />
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-10 space-y-10">
          <div className="eyebrow justify-center text-[#faf9f6]/70 border-none">
            Sponsorship & Support
          </div>

          <h2 className="text-[28px] sm:text-[4vw] xl:text-[44px] font-serif leading-[1.2] max-w-[760px] mx-auto text-brand-bg">
            Sponsor the infrastructure of capability.
          </h2>

          <p className="text-[15px] md:text-base text-[#faf9f6]/80 max-w-[520px] mx-auto leading-[1.7]">
            Your contribution directly funds special therapy kits, therapist hours, and comprehensive athletics training sponsorships for special-needs children.
          </p>

          {/* interactive tiers */}
          <div className="fade-up d1 flex gap-3.5 justify-center flex-wrap max-w-2xl mx-auto py-2">
            {tiers.map((tier) => (
              <button
                key={tier.amount}
                onClick={() => setActiveTier(tier.amount)}
                className={`font-mono text-xs tracking-[0.04em] border px-[22px] py-3 transition-all duration-200 rounded-[2px] cursor-pointer ${
                  activeTier === tier.amount
                    ? 'bg-[#faf9f6]/10 border-[#faf9f6]/50 text-brand-bg font-bold'
                    : 'border-[#faf9f6]/25 text-[#faf9f6]/85 hover:bg-[#faf9f6]/5 hover:border-[#faf9f6]/40'
                }`}
              >
                {tier.amount === 'Custom' ? 'Custom' : `${tier.amount}`}
              </button>
            ))}
          </div>

          {/* Active tier display */}
          <div className="fade-up d2 min-h-[48px] max-w-sm mx-auto text-center text-[#faf9f6]/80 text-xs md:text-sm font-mono leading-tight">
            {tiers.find(t => t.amount === activeTier)?.desc}
          </div>

          <div className="fade-up d2 flex gap-4 justify-center flex-wrap pt-4">
            <a
              href="#contact"
              className="bg-brand-bg text-brand-ink px-8 py-3.5 font-mono text-xs tracking-[0.06em] uppercase rounded-[2px]"
            >
              Continue to Sponsorship
            </a>
            <a
              href="#partner"
              onClick={(e) => handleSmoothScroll(e, 'partner')}
              className="border border-[#faf9f6]/30 text-[#faf9f6]/80 px-8 py-3.5 font-mono text-xs tracking-[0.06em] uppercase rounded-[2px] hover:border-brand-bg hover:text-brand-bg transition-all"
            >
              Become a Partner
            </a>
          </div>

          <div className="pt-10 border-t border-[#faf9f6]/15 font-mono text-xs text-[#faf9f6]/60 tracking-[0.03em] max-w-[400px] mx-auto text-center">
            <b>Every contribution builds the Lab —</b> securely processed and audited to assist Coimbatore families directly.
          </div>
        </div>
      </section>

      {/* ================= INQUIRY / CONTACT SECTION ================= */}
      <section className="py-[130px] border-t border-brand-line bg-brand-bg" id="contact">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-[100px] items-start">
            <div className="space-y-6">
              <div className="eyebrow">
                Contact & Inquiry
              </div>
              <h2 className="fade-up text-[24px] md:text-[28px] lg:text-[32px] font-serif leading-[1.2] text-brand-ink">
                Schedule a visit or get in touch.
              </h2>
              <p className="fade-up d1 text-[15px] md:text-base text-brand-ink-soft leading-[1.7]">
                We are based in Vadavalli, Coimbatore. Fill out the contact inquiry to book a detailed, personalized sensory and athletic capability assessment.
              </p>
              <div className="space-y-4 pt-4 font-mono text-xs text-brand-ink-soft">
                <p><b>Center Location:</b> Vadavalli, Coimbatore, Tamil Nadu, India</p>
                <p><b>Phone:</b> +91 98765 43210</p>
                <p><b>Email:</b> info@beyondheights.com</p>
                <p><b>Hours:</b> Monday – Saturday, 9:00 AM – 6:00 PM</p>
              </div>
            </div>

            <div className="fade-up d2 bg-brand-bg-alt p-8 sm:p-10 border border-brand-line space-y-6">
              <h3 className="font-serif text-[22px] text-brand-ink">Send an Assessment Request</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Parent Name"
                  className="w-full bg-brand-bg border border-brand-line px-4 py-3 text-xs font-mono tracking-wide placeholder-brand-muted text-brand-ink focus:outline-none focus:border-brand-ink-soft"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-brand-bg border border-brand-line px-4 py-3 text-xs font-mono tracking-wide placeholder-brand-muted text-brand-ink focus:outline-none focus:border-brand-ink-soft"
                />
                <select className="w-full bg-brand-bg border border-brand-line px-4 py-3 text-xs font-mono tracking-wide text-brand-ink focus:outline-none focus:border-brand-ink-soft">
                  <option>Select Therapy / Sport</option>
                  <option>Speech Therapy</option>
                  <option>Sensory Occupational Therapy</option>
                  <option>Behavioral Intervention</option>
                  <option>Athletics / Running Pacing</option>
                  <option>General Assessment Inquiry</option>
                </select>
                <textarea
                  placeholder="Notes on student capabilities..."
                  rows={4}
                  className="w-full bg-brand-bg border border-brand-line px-4 py-3 text-xs font-mono tracking-wide placeholder-brand-muted text-brand-ink focus:outline-none focus:border-brand-ink-soft resize-none"
                />
                <button
                  type="button"
                  onClick={() => alert('assessment inquiry simulated successfully')}
                  className="w-full bg-brand-ink text-brand-bg font-mono text-xs tracking-[0.06em] py-3.5 uppercase rounded-[2px] transition-opacity hover:opacity-[0.85]"
                >
                  Submit Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
