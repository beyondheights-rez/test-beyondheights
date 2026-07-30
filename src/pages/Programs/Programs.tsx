import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ShieldAlert, Award, Compass, HeartHandshake, ChevronRight, Activity } from 'lucide-react';

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const ProgramCard: React.FC<ProgramCardProps> = ({ icon, title, description, details }) => {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover-lift flex flex-col justify-between h-full space-y-6">
      <div className="space-y-6">
        <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 text-brand-blue flex items-center justify-center">
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-brand-blue uppercase tracking-tight">{title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
        </div>
        <div className="w-full h-[1px] bg-slate-100" />
        <ul className="space-y-2">
          {details.map((detail, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-cyan hover:text-brand-blue transition-colors group pt-4"
        >
          Enquire About Program
          <ChevronRight className="h-4 w-4 transform group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

const Programs: React.FC = () => {
  const programData = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Speech & Language Therapy",
      description: "Building verbal and non-verbal paths to expression. Our sessions focus on active interaction, language comprehension, and communication frameworks.",
      details: [
        "Articulative & Phonetic training",
        "Alternative Communication (AAC) systems",
        "Conversational flow coaching",
        "Social cues & receptive understanding"
      ]
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: "Occupational Therapy",
      description: "Enhancing sensory processing and fine/gross motor skills, helping students execute daily operations with precision and ease.",
      details: [
        "Sensory integration therapies",
        "Fine motor skill enhancement",
        "Hand-eye coordination drills",
        "Daily lifestyle execution training"
      ]
    },
    {
      icon: <ShieldAlert className="h-6 w-6" />,
      title: "Behavioral Intervention",
      description: "Consistency-driven support aiming to replace anxiety and challenging behaviors with emotional regulation and healthy communication.",
      details: [
        "Individualized Behavior Support Plans (BSP)",
        "Emotional regulation coaching",
        "Positive Reinforcement routines",
        "Crisis navigation blueprints"
      ]
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Special Ed & Life Skills",
      description: "Equipping individuals with academic foundation and core life skills for higher autonomy at home, school, and work settings.",
      details: [
        "Functional literacy and numeracy",
        "Self-care & grooming routines",
        "Time and resource management",
        "Community integration preparation"
      ]
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Athletic & Fitness Training",
      description: "Integrating structured running, athletics, and strength coordination to channel high energy and boost cardiovascular strength.",
      details: [
        "Customized running blueprints",
        "Balance, stamina, and motor control",
        "Special needs athletic coaching",
        "Confidence & team integration sports"
      ]
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Parent Blueprint Programs",
      description: "Providing parents with structured strategies and daily routines to bridge classroom achievements into consistent home life.",
      details: [
        "Interactive home schedule mapping",
        "Parent-coached therapy scripts",
        "Progress metric tracking support",
        "Community support networks"
      ]
    }
  ];

  return (
    <div className="relative">
      {/* Banner */}
      <section className="bg-brand-blue text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-brand-cyan text-xs font-black uppercase tracking-[0.2em]">Our Programs</span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">Structured Interventions</h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-medium leading-relaxed">
            Every child is unique. Our structured programs are custom-tailored to provide consistent, trackable, and encouraging progress.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programData.map((prog, index) => (
              <ProgramCard
                key={index}
                icon={prog.icon}
                title={prog.title}
                description={prog.description}
                details={prog.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Structured Journey Flow Section */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-brand-orange text-xs font-black uppercase tracking-[0.2em]">Development Workflow</span>
            <h2 className="text-3xl font-black text-brand-blue uppercase tracking-tight">Path to Progress</h2>
            <div className="w-12 h-1 bg-brand-cyan mx-auto rounded-full" />
            <p className="text-slate-600 text-sm">How we build and execute custom roadmaps for capability.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4 relative">
              <span className="absolute top-4 right-6 text-slate-200 text-3xl font-black">01</span>
              <h4 className="text-lg font-bold text-brand-blue uppercase tracking-tight">Intake & Audit</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A thorough initial assessment to identify current sensory, speech, and physical markers.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4 relative">
              <span className="absolute top-4 right-6 text-slate-200 text-3xl font-black">02</span>
              <h4 className="text-lg font-bold text-brand-blue uppercase tracking-tight">Custom Mappings</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Design of daily routines and therapeutic targets tailored directly to student capabilities.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4 relative">
              <span className="absolute top-4 right-6 text-slate-200 text-3xl font-black">03</span>
              <h4 className="text-lg font-bold text-brand-blue uppercase tracking-tight">Daily Execution</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Highly consistent, structured sessions led by trained therapists and physical coordinators.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4 relative">
              <span className="absolute top-4 right-6 text-slate-200 text-3xl font-black">04</span>
              <h4 className="text-lg font-bold text-brand-blue uppercase tracking-tight">Parent Blueprint</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Coordinated guides to run identical behavioral structures at home, maintaining progress.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
