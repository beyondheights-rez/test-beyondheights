import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, Brain, ShieldCheck, Eye, ClipboardCheck, Target, Lightbulb, TrendingUp, RefreshCw, BarChart2, Globe, FileText, Lock, Scale, Handshake, Compass, Trees, ArrowRight, MessageSquare, Activity, UserPlus, Sprout, BookOpen, Quote, Star } from 'lucide-react';

const Science: React.FC = () => {
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
          {/* Left Column - Scientific Dossier Style */}
          <div className="bg-brand-bg-alt border border-brand-line rounded-2xl p-8 md:p-10 space-y-6 shadow-sm">
            <div className="space-y-4">
              <div className="font-mono text-xs tracking-[0.1em] text-[#c5832b] uppercase font-bold flex items-center gap-3">
                <span className="w-8 h-0.5 bg-[#c5832b]" />
                THE SCIENCE
              </div>
              
              <h1 className="font-serif text-[36px] md:text-[44px] lg:text-[52px] font-normal leading-[1.15] text-brand-ink">
                We are guided by evidence. Grounded in research. <span className="text-[#c5832b] italic">Driven by human potential.</span>
              </h1>
              
              <p className="text-[15px] md:text-base text-brand-ink-soft leading-relaxed">
                At Beyond Heights, everything we do is informed by science and shaped by empathy. We combine global research, data, and real-world experience to create interventions that are effective, compassionate, and life-changing.
              </p>

              {/* Quote Block inside the Card */}
              <div className="border-t border-brand-line/80 pt-4 mt-2 flex items-start gap-3">
                <Quote className="w-5 h-5 text-[#c5832b] shrink-0 mt-1 rotate-180 opacity-60" />
                <p className="font-serif italic text-sm md:text-base text-[#0b3b24] leading-relaxed">
                  Science helps us understand potential. Compassion helps us unlock it.
                </p>
              </div>
            </div>

            {/* Core Features list */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-brand-line/80">
              <div className="space-y-2">
                <Compass className="w-5 h-5 text-[#c5832b]" />
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Research Informed</h4>
                <p className="text-xs text-brand-ink-soft">We learn from and contribute to the best global developmental science.</p>
              </div>
              <div className="space-y-2">
                <BarChart2 className="w-5 h-5 text-[#c5832b]" />
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Data Driven</h4>
                <p className="text-xs text-brand-ink-soft">Using metric analysis to continuously track milestones and adjust pathways.</p>
              </div>
              <div className="space-y-2">
                <Users className="w-5 h-5 text-[#c5832b]" />
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Human Centered</h4>
                <p className="text-xs text-brand-ink-soft">Seeing the unique child behind every benchmark and dataset.</p>
              </div>
              <div className="space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#c5832b]" />
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Ethical & Responsible</h4>
                <p className="text-xs text-brand-ink-soft">Unwavering commitment to protect child dignity, privacy, and rights.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Clean Image Banner */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-brand-line shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white p-2">
              <img 
                src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/new%20assets/image6.jpg" 
                alt="The Science" 
                className="w-full h-[400px] sm:h-[500px] lg:h-[550px] object-cover rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* --- Built on Science Section --- */}
        <section className="bg-brand-bg-alt border border-brand-line rounded-2xl p-8 md:p-12 space-y-10">
          <div className="text-center space-y-4 max-w-[700px] mx-auto">
            <h3 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-[#c5832b]">
              BUILT ON SCIENCE
            </h3>
            <p className="text-sm md:text-base text-brand-ink-soft leading-relaxed">
              We integrate the latest research from multiple developmental disciplines to create a holistic, personalized, and effective support environment.
            </p>
            <div className="w-12 h-0.5 bg-[#c5832b] mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 text-center">
            <div className="space-y-3">
              <Brain className="w-8 h-8 text-[#c5832b] mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Neuroscience</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">Brain development, sensory maps, and learning pathways.</p>
            </div>

            <div className="space-y-3">
              <UserPlus className="w-8 h-8 text-[#c5832b] mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Developmental Psych</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">Cognitive, social, and emotional milestones.</p>
            </div>

            <div className="space-y-3">
              <MessageSquare className="w-8 h-8 text-[#c5832b] mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Speech & Language</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">Communication, expressive tools, and language acquisition.</p>
            </div>

            <div className="space-y-3">
              <Activity className="w-8 h-8 text-[#c5832b] mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Occupational Therapy</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">Daily living skills, motor planning, and sensory integration.</p>
            </div>

            <div className="space-y-3">
              <Heart className="w-8 h-8 text-[#c5832b] mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Behavioral Science</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">Positive behavior supports and functional analysis.</p>
            </div>

            <div className="space-y-3">
              <BookOpen className="w-8 h-8 text-[#c5832b] mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Special Education</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">Evidence-based adaptive teaching curriculum structures.</p>
            </div>

            <div className="space-y-3">
              <Users className="w-8 h-8 text-[#c5832b] mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Family & Social</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">Strengthening home systems and community support nets.</p>
            </div>
          </div>
        </section>

        {/* --- Scientific Pillars Section --- */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <h3 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-[#c5832b]">
              OUR SCIENTIFIC PILLARS
            </h3>
            <div className="w-12 h-0.5 bg-[#c5832b] mx-auto" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            <div className="bg-[#0b3b24] text-white rounded-xl p-6 text-center space-y-4 border border-[#114f31]/30">
              <Eye className="w-8 h-8 text-[#c5832b] mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider">Observe</h4>
              <p className="text-xs text-[#f4f4f0]/90 leading-normal">Observing natural behaviors with deep curiosity and no assumptions.</p>
            </div>

            <div className="bg-[#0b3b24] text-white rounded-xl p-6 text-center space-y-4 border border-[#114f31]/30">
              <ClipboardCheck className="w-8 h-8 text-[#c5832b] mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider">Assess</h4>
              <p className="text-xs text-[#f4f4f0]/90 leading-normal">Utilizing validated clinical diagnostic metrics and expert consultations.</p>
            </div>

            <div className="bg-[#0b3b24] text-white rounded-xl p-6 text-center space-y-4 border border-[#114f31]/30">
              <Target className="w-8 h-8 text-[#c5832b] mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider">Understand</h4>
              <p className="text-xs text-[#f4f4f0]/90 leading-normal">Analyzing patterns to map developmental strengths and core challenges.</p>
            </div>

            <div className="bg-[#0b3b24] text-white rounded-xl p-6 text-center space-y-4 border border-[#114f31]/30">
              <Lightbulb className="w-8 h-8 text-[#c5832b] mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider">Design</h4>
              <p className="text-xs text-[#f4f4f0]/90 leading-normal">Drafting personalized, highly specific program target modules.</p>
            </div>

            <div className="bg-[#0b3b24] text-white rounded-xl p-6 text-center space-y-4 border border-[#114f31]/30">
              <Sprout className="w-8 h-8 text-[#c5832b] mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider">Implement</h4>
              <p className="text-xs text-[#f4f4f0]/90 leading-normal">Delivering quality, consistent therapy, life skills, and academic training.</p>
            </div>

            <div className="bg-[#0b3b24] text-white rounded-xl p-6 text-center space-y-4 border border-[#114f31]/30">
              <TrendingUp className="w-8 h-8 text-[#c5832b] mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider">Measure</h4>
              <p className="text-xs text-[#f4f4f0]/90 leading-normal">Recording regular milestone datasets to continuously iterate methods.</p>
            </div>
          </div>
        </section>

        {/* --- Evidence Based Timeline --- */}
        <section className="timeline-section bg-brand-bg-alt border border-brand-line rounded-2xl p-8 md:p-12 space-y-16">
          <div className="text-center space-y-2">
            <h3 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-[#c5832b]">
              OUR EVIDENCE-BASED APPROACH
            </h3>
            <div className="w-12 h-0.5 bg-[#c5832b] mx-auto" />
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-4 px-4">
            {/* Connecting line */}
            <div className="absolute top-[35px] left-[5%] right-[5%] h-[1px] border-t border-dashed border-[#c5832b]/40 hidden md:block z-0" />

            <div className="flex flex-col items-center text-center relative z-10 max-w-[150px] space-y-4">
              <div className="w-[70px] h-[70px] rounded-full bg-white border border-brand-line flex items-center justify-center text-xl shadow-[0_0_0_8px_#faf9f6]">
                <Users className="w-5 h-5 text-brand-ink" />
              </div>
              <h4 className="font-sans font-bold text-xs text-brand-ink">Identify</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Determine developmental profiles and family goals.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative z-10 max-w-[150px] space-y-4">
              <div className="w-[70px] h-[70px] rounded-full bg-white border border-brand-line flex items-center justify-center text-xl shadow-[0_0_0_8px_#faf9f6]">
                <ClipboardCheck className="w-5 h-5 text-brand-ink" />
              </div>
              <h4 className="font-sans font-bold text-xs text-brand-ink">Assess</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Perform diagnostics and observations.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative z-10 max-w-[150px] space-y-4">
              <div className="w-[70px] h-[70px] rounded-full bg-white border border-brand-line flex items-center justify-center text-xl shadow-[0_0_0_8px_#faf9f6]">
                <Target className="w-5 h-5 text-brand-ink" />
              </div>
              <h4 className="font-sans font-bold text-xs text-brand-ink">Analyse</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Identify functional hurdles and triggers.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative z-10 max-w-[150px] space-y-4">
              <div className="w-[70px] h-[70px] rounded-full bg-white border border-brand-line flex items-center justify-center text-xl shadow-[0_0_0_8px_#faf9f6]">
                <FileText className="w-5 h-5 text-brand-ink" />
              </div>
              <h4 className="font-sans font-bold text-xs text-brand-ink">Plan</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Map milestones and daily routines.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative z-10 max-w-[150px] space-y-4">
              <div className="w-[70px] h-[70px] rounded-full bg-white border border-brand-line flex items-center justify-center text-xl shadow-[0_0_0_8px_#faf9f6]">
                <Heart className="w-5 h-5 text-brand-ink" />
              </div>
              <h4 className="font-sans font-bold text-xs text-brand-ink">Intervene</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Consistent clinical and school interventions.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative z-10 max-w-[150px] space-y-4">
              <div className="w-[70px] h-[70px] rounded-full bg-white border border-brand-line flex items-center justify-center text-xl shadow-[0_0_0_8px_#faf9f6]">
                <BarChart2 className="w-5 h-5 text-brand-ink" />
              </div>
              <h4 className="font-sans font-bold text-xs text-brand-ink">Evaluate</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Record outcome parameters and data metrics.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative z-10 max-w-[150px] space-y-4">
              <div className="w-[70px] h-[70px] rounded-full bg-white border border-brand-line flex items-center justify-center text-xl shadow-[0_0_0_8px_#faf9f6]">
                <RefreshCw className="w-5 h-5 text-brand-ink" />
              </div>
              <h4 className="font-sans font-bold text-xs text-brand-ink">Evolve</h4>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Scale successes and optimize functional program loops.
              </p>
            </div>
          </div>
        </section>

        {/* --- Research Outcomes Impact Section --- */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
          <div className="bg-[#0b3b24] text-white rounded-2xl p-10 flex flex-col justify-center min-h-[300px] border border-[#114f31]/30 relative overflow-hidden shadow-sm">
            <div className="relative z-10 space-y-4">
              <div className="font-mono text-xs tracking-[0.1em] text-[#c5832b] font-bold uppercase">
                RESEARCH. OUTCOMES. IMPACT.
              </div>
              <h2 className="font-serif text-2xl md:text-3xl leading-snug max-w-[90%]">
                We believe in transparency and continuous learning.
              </h2>
            </div>
            
            <div className="absolute right-[-10px] bottom-[-20px] opacity-10 pointer-events-none">
              <Trees className="w-48 h-48 text-[#c5832b]" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[#f7f6f1] border border-brand-line rounded-xl p-6 text-center flex flex-col justify-center space-y-2">
              <FileText className="w-6 h-6 text-brand-ink mx-auto" />
              <h3 className="font-serif text-xl font-bold text-brand-ink">50+</h3>
              <p className="text-xs text-brand-ink-soft">Evidence-based developmental frameworks utilized.</p>
            </div>

            <div className="bg-[#f7f6f1] border border-brand-line rounded-xl p-6 text-center flex flex-col justify-center space-y-2">
              <Users className="w-6 h-6 text-brand-ink mx-auto" />
              <h3 className="font-serif text-xl font-bold text-brand-ink">100+</h3>
              <p className="text-xs text-brand-ink-soft">Individual case plans actively tracked.</p>
            </div>

            <div className="bg-[#f7f6f1] border border-brand-line rounded-xl p-6 text-center flex flex-col justify-center space-y-2">
              <Globe className="w-6 h-6 text-brand-ink mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase text-brand-ink">Global Research</h4>
              <p className="text-xs text-brand-ink-soft">Collaborating with diagnostic institutions worldwide.</p>
            </div>

            <div className="bg-[#f7f6f1] border border-brand-line rounded-xl p-6 text-center flex flex-col justify-center space-y-2">
              <TrendingUp className="w-6 h-6 text-brand-ink mx-auto" />
              <h4 className="font-sans font-bold text-xs uppercase text-brand-ink">Better Outcomes</h4>
              <p className="text-xs text-brand-ink-soft">Tracking milestones to secure real-world independence.</p>
            </div>
          </div>
        </section>

        {/* --- Commitment to Ethical Science --- */}
        <section className="border-t border-brand-line pt-16 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 items-center">
            <h2 className="font-serif text-2xl md:text-3xl text-brand-ink leading-snug">
              Our commitment<br />to ethical science.
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div className="space-y-2">
                <ShieldCheck className="w-5 h-5 text-brand-ink mx-auto" />
                <p className="text-xs font-bold text-brand-ink uppercase tracking-wide">Safety & Well-being</p>
              </div>
              <div className="space-y-2">
                <Lock className="w-5 h-5 text-brand-ink mx-auto" />
                <p className="text-xs font-bold text-brand-ink uppercase tracking-wide">Data Privacy</p>
              </div>
              <div className="space-y-2">
                <Scale className="w-5 h-5 text-brand-ink mx-auto" />
                <p className="text-xs font-bold text-brand-ink uppercase tracking-wide">Ethical Standards</p>
              </div>
              <div className="space-y-2">
                <Users className="w-5 h-5 text-brand-ink mx-auto" />
                <p className="text-xs font-bold text-brand-ink uppercase tracking-wide">Family Partners</p>
              </div>
              <div className="space-y-2">
                <Handshake className="w-5 h-5 text-brand-ink mx-auto" />
                <p className="text-xs font-bold text-brand-ink uppercase tracking-wide">Respect & Dignity</p>
              </div>
            </div>

            <div className="bg-[#0b3b24] text-white p-6 rounded-xl border border-[#114f31]/30 space-y-4">
              <Quote className="w-6 h-6 text-[#c5832b] rotate-180 opacity-40" />
              <p className="font-serif italic text-sm leading-relaxed text-[#f4f4f0]/95">
                Science shows us what is possible. Compassion makes it possible for every child.
              </p>
              <div className="flex justify-end">
                <Trees className="w-4 h-4 text-[#c5832b]" />
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA Banner --- */}
        <section className="bg-[#0b3b24] text-white rounded-2xl p-8 md:p-12 relative overflow-hidden border border-[#114f31]/30 shadow-[0_8px_30px_rgba(11,59,36,0.12)]">
          <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-12">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl md:text-3xl font-normal leading-snug">
                When science and compassion come together,<br /><span className="text-[#c5832b] italic">limitless potential</span> becomes real.
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-1">
                <Heart className="w-5 h-5 text-[#c5832b] mx-auto" />
                <p className="text-xs font-bold text-[#faf9f6]/95 uppercase tracking-wide">Support a Child</p>
              </div>
              <div className="space-y-1">
                <Users className="w-5 h-5 text-[#c5832b] mx-auto" />
                <p className="text-xs font-bold text-[#faf9f6]/95 uppercase tracking-wide">Strengthen Families</p>
              </div>
              <div className="space-y-1">
                <Globe className="w-5 h-5 text-[#c5832b] mx-auto" />
                <p className="text-xs font-bold text-[#faf9f6]/95 uppercase tracking-wide">Build Inclusion</p>
              </div>
              <div className="space-y-1">
                <Star className="w-5 h-5 text-[#c5832b] mx-auto" />
                <p className="text-xs font-bold text-[#faf9f6]/95 uppercase tracking-wide">Create Change</p>
              </div>
            </div>

            <button
              onClick={() => navigate('/partner')}
              className="bg-[#c5832b] hover:bg-[#a56d22] text-[#faf9f6] font-sans font-bold text-xs tracking-[0.06em] px-8 py-3.5 rounded-lg uppercase transition-all duration-200 shadow-md flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              GET INVOLVED <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Science;
