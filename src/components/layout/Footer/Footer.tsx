import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, BookOpen, Heart, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavigation = (path: string, targetId?: string) => {
    navigate(path);
    if (targetId) {
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-white py-8 md:py-14 px-4 md:px-8 border-t border-brand-line/40">
      {/* Floating Dark Card Container matching Reference Design */}
      <div className="max-w-[1280px] mx-auto bg-[#14211A] text-white rounded-[28px] md:rounded-[36px] p-8 md:p-12 lg:p-14 shadow-2xl relative overflow-hidden border border-white/10">
        
        {/* Subtle Ambient Background Glow */}
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#c68a2c]/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#123524]/40 blur-3xl pointer-events-none" />

        {/* Top Section */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 pb-10 border-b border-white/10">
          
          {/* Brand Block (Left Column) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Brand Logo from Header */}
            <div 
              onClick={() => handleNavigation('/')}
              className="cursor-pointer space-y-2 inline-block"
            >
              <img
                src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/marathon%20website/hero%20Section/Beyond%20Heights%20Logo-02%204.svg"
                alt="Beyond Heights Logo"
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
              />
              <p className="text-[11px] font-sans text-[#e5b364] tracking-wider uppercase font-semibold">
                Structured Capability Hub
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-white/75 max-w-[360px] leading-relaxed font-sans font-normal">
              Empowering children with structured autism interventions, specialized athletics, and dedicated family support systems.
            </p>

            {/* Location Info */}
            <p className="text-xs text-white/60 leading-relaxed font-mono">
              Vadavalli, Coimbatore,<br />
              Tamil Nadu, India
            </p>

            {/* Social Icons Pill Buttons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c68a2c] flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c68a2c] flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"/>
                </svg>
              </a>
              <a 
                href="mailto:contact@beyondheights.org" 
                aria-label="Email Us"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c68a2c] flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns (Right Section in Title Case Capitalize format) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            
            {/* Column 1: Explore */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#e5b364] font-sans font-semibold text-sm">
                <BookOpen className="w-4 h-4" />
                <span>Explore</span>
              </div>
              <ul className="space-y-2.5">
                {[
                  { name: 'The Idea', path: '/story' },
                  { name: 'Autism Support', path: '/story' },
                  { name: 'Our Story', path: '/story' },
                  { name: 'The Blueprint', path: '/blueprint' },
                ].map((item, idx) => (
                  <li key={`explore-${idx}`}>
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="text-xs md:text-sm text-white/70 hover:text-[#e5b364] transition-colors duration-200 font-sans text-left flex items-center gap-1 group cursor-pointer"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#e5b364]" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Structured */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#e5b364] font-sans font-semibold text-sm">
                <Compass className="w-4 h-4" />
                <span>Structured</span>
              </div>
              <ul className="space-y-2.5">
                {[
                  { name: 'Moneyball System', path: '/moneyball' },
                  { name: 'The Lab', path: '/athletics' },
                  { name: 'The Platform', path: '/platform' },
                  { name: 'Our Impact', path: '/impact' },
                ].map((item, idx) => (
                  <li key={`struct-${idx}`}>
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="text-xs md:text-sm text-white/70 hover:text-[#e5b364] transition-colors duration-200 font-sans text-left flex items-center gap-1 group cursor-pointer"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#e5b364]" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Initiative */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#e5b364] font-sans font-semibold text-sm">
                <Heart className="w-4 h-4" />
                <span>Initiative</span>
              </div>
              <ul className="space-y-2.5">
                {[
                  { name: 'Ethics & Safety', path: '/partner' },
                  { name: 'Partner With Us', path: '/partner' },
                  { name: 'Sponsorships', path: '/donate' },
                  { name: 'Contact Us', path: '/contact' },
                ].map((item, idx) => (
                  <li key={`init-${idx}`}>
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="text-xs md:text-sm text-white/70 hover:text-[#e5b364] transition-colors duration-200 font-sans text-left flex items-center gap-1 group cursor-pointer"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#e5b364]" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section inside Card */}
        <div className="relative z-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-white/60">
          {/* Copyright */}
          <div>
            © {currentYear} Beyond Heights. All Rights Reserved.
          </div>

          {/* System Status Indicator */}
          <div className="flex items-center gap-2 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10 text-white/80">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-medium">All Systems Operational</span>
          </div>

          {/* Footer Policy Links in Capitalize Style */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-white/70">
            <button onClick={() => handleNavigation('/about')} className="hover:text-[#e5b364] transition-colors cursor-pointer">
              About Us
            </button>
            <button onClick={() => handleNavigation('/privacy')} className="hover:text-[#e5b364] transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => handleNavigation('/terms')} className="hover:text-[#e5b364] transition-colors cursor-pointer">
              Terms Of Service
            </button>
            <button onClick={() => handleNavigation('/refund-policy')} className="hover:text-[#e5b364] transition-colors cursor-pointer">
              Refund Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
