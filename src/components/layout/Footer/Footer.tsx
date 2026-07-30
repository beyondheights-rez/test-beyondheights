import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <footer className="py-[60px] border-t border-brand-line bg-brand-bg text-brand-ink">
      <div className="max-w-[1280px] mx-auto px-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-[50px]">
          {/* Brand block */}
          <div className="space-y-3.5">
            <div className="font-serif text-[20px] font-medium text-brand-ink uppercase">
              Beyond Heights
            </div>
            <p className="text-sm text-brand-ink-soft max-w-[280px] leading-[1.6]">
              Structured autism intervention and specialized athletics. A system born from one family's search for capability.
            </p>
            <p className="text-xs text-brand-ink-soft leading-relaxed font-mono">
              Vadavalli, Coimbatore,<br />
              Tamil Nadu, India
            </p>
          </div>

          {/* Links Columns */}
          <div className="flex gap-[64px] flex-wrap">
            {/* Explore column */}
            <div>
              <h5 className="font-mono text-xs tracking-[0.08em] uppercase text-brand-muted font-semibold mb-4">
                Explore
              </h5>
              <div className="space-y-[11px]">
                {[
                  { name: 'The idea', id: 'idea' },
                  { name: 'autism', id: 'autism' },
                  { name: 'the story', id: 'story' },
                  { name: 'the blueprint', id: 'blueprint' },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleSmoothScroll(e, item.id)}
                    className="block text-sm text-brand-ink-soft hover:text-brand-ink transition-colors font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Build / Operations column */}
            <div>
              <h5 className="font-mono text-xs tracking-[0.08em] uppercase text-brand-muted font-semibold mb-4">
                Structured
              </h5>
              <div className="space-y-[11px]">
                {[
                  { name: 'money ball', id: 'moneyball' },
                  { name: 'the lab', id: 'lab' },
                  { name: 'the platform', id: 'platform' },
                  { name: 'the impact', id: 'impact' },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleSmoothScroll(e, item.id)}
                    className="block text-sm text-brand-ink-soft hover:text-brand-ink transition-colors font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Join column */}
            <div>
              <h5 className="font-mono text-xs tracking-[0.08em] uppercase text-brand-muted font-semibold mb-4">
                Initiative
              </h5>
              <div className="space-y-[11px]">
                {[
                  { name: 'ethics', id: 'ethics' },
                  { name: 'partner', id: 'partner' },
                  { name: 'Sponsorships', id: 'give' },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleSmoothScroll(e, item.id)}
                    className="block text-sm text-brand-ink-soft hover:text-brand-ink transition-colors font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-[26px] border-t border-brand-line font-mono text-xs text-brand-muted tracking-[0.03em] gap-3 text-center">
          <span>© {currentYear} BEYOND HEIGHTS. ALL RIGHTS RESERVED.</span>
          <span>FOR EVERY CAPABILITY. FOR OUR SHARED FUTURE.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
