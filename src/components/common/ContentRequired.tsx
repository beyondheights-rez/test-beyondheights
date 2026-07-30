import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ArrowLeft, Trees } from 'lucide-react';

interface ContentRequiredProps {
  category: string;
  title: string;
}

const ContentRequired: React.FC<ContentRequiredProps> = ({ category, title }) => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-brand-bg text-brand-ink min-h-screen flex items-center justify-center">
      <div className="max-w-[800px] w-full text-center space-y-8 bg-white border border-brand-line p-10 md:p-16 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.03)]">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#fdfcf8] border border-brand-line text-[#c5832b]">
          <FileText className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <div className="font-mono text-xs tracking-[0.15em] text-[#c5832b] uppercase font-bold">
            {category}
          </div>
          <h1 className="font-serif text-[36px] md:text-[44px] lg:text-[52px] font-normal text-brand-ink leading-[1.15]">
            {title}
          </h1>
        </div>

        <div className="w-16 h-0.5 bg-[#c5832b] mx-auto opacity-70" />

        <div className="space-y-4 max-w-[500px] mx-auto">
          <div className="inline-block bg-[#f7f6f1] text-[#0b3b24] border border-brand-line font-mono font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-md">
            Content Required
          </div>
          <p className="text-[15px] md:text-base text-brand-ink-soft leading-relaxed">
            The content for this section is currently being updated. Detailed information will be published shortly.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="bg-[#0b3b24] hover:bg-[#072a19] text-white font-sans font-bold text-xs tracking-[0.06em] px-6 py-3 rounded-lg uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Home
          </button>
        </div>

        <div className="pt-6 border-t border-brand-line flex items-center justify-center gap-2 text-brand-ink-soft opacity-60">
          <Trees className="w-4 h-4 text-[#c5832b]" />
          <span className="font-serif italic text-xs">Beyond Heights</span>
        </div>
      </div>
    </div>
  );
};

export default ContentRequired;
