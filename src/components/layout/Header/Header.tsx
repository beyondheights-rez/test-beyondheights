import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const navLinks = [
    { name: 'IMPACT', href: '#impact' },
    { name: 'WHY IT MATTERS', href: '#ethics' },
    { name: 'OUR APPROACH', href: '#approach' },
    { name: 'THE SCIENCE', href: '#science' },
    { name: 'WHO WE SERVE', href: '#autism' },
    { name: 'MARATHON', href: '#marathon' },
    { name: 'JOIN US', href: '#join' },
    { name: 'SUPPORT US', href: '#support' },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll hiding header behavior and transparency tracking
  useEffect(() => {
    let lastY = window.scrollY;
    setIsScrolled(window.scrollY > 10);

    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 10);
      if (y > lastY && y > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastY = y;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const handleSmoothScroll = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (targetId === 'idea') {
      navigate('/idea');
      return;
    }

    if (targetId === 'platform') {
      navigate('/platform');
      return;
    }

    if (targetId === 'partner') {
      navigate('/partner');
      return;
    }

    if (targetId === 'moneyball') {
      navigate('/moneyball');
      return;
    }

    if (targetId === 'story') {
      navigate('/story');
      return;
    }

    if (targetId === 'lab') {
      navigate('/lab');
      return;
    }

    if (targetId === 'blueprint') {
      navigate('/blueprint');
      return;
    }

    if (targetId === 'about') {
      navigate('/about');
      return;
    }

    if (targetId === 'donate') {
      navigate('/donate');
      return;
    }

    if (targetId === 'ethics') {
      navigate('/why-it-matters');
      return;
    }

    if (targetId === 'approach') {
      navigate('/our-approach');
      return;
    }

    if (targetId === 'science') {
      navigate('/science');
      return;
    }

    if (targetId === 'join') {
      navigate('/join');
      return;
    }

    if (targetId === 'support') {
      navigate('/support');
      return;
    }

    if (targetId === 'impact') {
      navigate('/impact');
      return;
    }

    if (targetId === 'autism') {
      navigate('/who-we-serve');
      return;
    }

    if (targetId === 'marathon') {
      navigate('/marathon');
      return;
    }

    if (targetId === 'idea') {
      navigate('/idea');
      return;
    }

    if (targetId === 'lab') {
      navigate('/lab');
      return;
    }

    if (targetId === 'story') {
      navigate('/story');
      return;
    }

    if (targetId === 'about') {
      navigate('/about');
      return;
    }

    if (location.pathname !== '/') {
      navigate('/#' + targetId);
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/#${targetId}`);
      }
    }
  };

  const isDarkHeroPage = location.pathname === '/marathon' || location.pathname === '/athletics';
  const isTransparentAtTop = !isScrolled && !isMobileMenuOpen;
  const useWhiteText = isDarkHeroPage && isTransparentAtTop;

  return (
    <header
      id="siteHeader"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isMobileMenuOpen
          ? 'bg-[#faf9f6] border-b border-brand-line'
          : isScrolled
          ? 'bg-[#faf9f6]/80 backdrop-blur-[16px] border-b border-brand-line/50 shadow-sm'
          : isDarkHeroPage
          ? 'bg-black/35 backdrop-blur-[12px] border-b border-white/10'
          : 'bg-white/50 backdrop-blur-[12px] border-b border-black/5'
      } ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <div
          onClick={(e) => handleSmoothScroll(e, 'top')}
          className="cursor-pointer shrink-0 py-1"
        >
          <img
            src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/marathon%20website/hero%20Section/Beyond%20Heights%20Logo-02%204.svg"
            alt="Beyond Heights Logo"
            className={`h-10 w-auto object-contain transition-all duration-300 ${useWhiteText ? 'brightness-0 invert' : ''}`}
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex gap-[26px] items-center">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive =
              (id === 'ethics' && location.pathname === '/why-it-matters') ||
              (id === 'approach' && location.pathname === '/our-approach') ||
              (id === 'science' && location.pathname === '/science') ||
              (id === 'autism' && location.pathname === '/who-we-serve') ||
              (id === 'marathon' && location.pathname === '/marathon') ||
              (id === 'join' && location.pathname === '/join') ||
              (id === 'support' && location.pathname === '/support') ||
              (id === 'impact' && (location.pathname === '/' || location.pathname === '/impact'));
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, id)}
                className={`font-sans font-bold text-xs tracking-[0.06em] uppercase pb-1 border-b-2 transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? `border-[#dd9a3c] ${useWhiteText ? 'text-white' : 'text-brand-ink'}`
                    : `border-transparent ${useWhiteText ? 'text-slate-300 hover:text-white' : 'text-brand-ink-soft hover:text-brand-ink'}`
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:block">
          <a
            href="#donate"
            onClick={(e) => handleSmoothScroll(e, 'donate')}
            className={`font-sans font-bold text-xs tracking-[0.06em] px-6 py-2.5 rounded-lg uppercase whitespace-nowrap transition-all duration-200 flex items-center gap-1 ${
              useWhiteText 
                ? 'bg-white text-[#0c2b20] hover:bg-slate-100 shadow-sm' 
                : 'bg-[#0c2b20] text-white hover:opacity-[0.88]'
            }`}
          >
            DONATE NOW →
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden flex flex-col gap-1 p-1.5 justify-center items-center cursor-pointer w-8 h-8"
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-[1px] transition-transform duration-300 ${
              useWhiteText ? 'bg-white' : 'bg-brand-ink'
            } ${
              isMobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-[1px] transition-opacity duration-200 ${
              useWhiteText ? 'bg-white' : 'bg-brand-ink'
            } ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block w-5 h-[1px] transition-transform duration-300 ${
              useWhiteText ? 'bg-white' : 'bg-brand-ink'
            } ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile drop-down Menu */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-brand-line bg-brand-bg ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-5 bg-brand-bg">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive =
              (id === 'ethics' && location.pathname === '/why-it-matters') ||
              (id === 'approach' && location.pathname === '/our-approach') ||
              (id === 'science' && location.pathname === '/science') ||
              (id === 'autism' && location.pathname === '/who-we-serve') ||
              (id === 'marathon' && location.pathname === '/marathon') ||
              (id === 'join' && location.pathname === '/join') ||
              (id === 'support' && location.pathname === '/support') ||
              (id === 'impact' && (location.pathname === '/' || location.pathname === '/impact'));
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, id)}
                className={`font-sans font-bold text-xs tracking-[0.06em] uppercase pb-1 border-b-2 w-fit transition-all duration-200 ${
                  isActive
                    ? 'text-brand-ink border-[#dd9a3c]'
                    : 'text-brand-ink-soft border-transparent'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#donate"
            onClick={(e) => handleSmoothScroll(e, 'donate')}
            className="bg-[#0c2b20] text-white text-center font-sans font-bold text-xs tracking-[0.06em] py-3 rounded-lg uppercase w-full mt-2 block"
          >
            DONATE NOW →
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
