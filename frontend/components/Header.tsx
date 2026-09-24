import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { PageView } from '../types';

interface HeaderProps {
  currentView: PageView;
  onNavigateHome: (anchor?: string) => void;
  onNavigateToCharter: () => void;
  onNavigateToQuiz?: () => void;
  onNavigateToConversation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigateHome,
  onNavigateToCharter,
  onNavigateToQuiz,
  onNavigateToConversation
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = currentView.type === 'home';

  const navLinks = [
    { label: 'Destinations', anchor: 'destinations' },
    { label: 'Hotels & Palaces', anchor: 'hotels-exploration' },
    { label: 'Real Weddings', anchor: 'real-weddings' },
    { label: 'Visualise', anchor: 'visualise' },
    { label: 'Wedding Quiz', isQuiz: true },
    { label: 'Charter', isCharter: true },
  ];

  const handleLinkClick = (link: typeof navLinks[0]) => {
    setMobileMenuOpen(false);
    if (link.isCharter) {
      onNavigateToCharter();
    } else if (link.isQuiz && onNavigateToQuiz) {
      onNavigateToQuiz();
    } else {
      onNavigateHome(link.anchor);
    }
  };

  const handleEnquireClick = () => {
    setMobileMenuOpen(false);
    if (onNavigateToConversation) {
      onNavigateToConversation();
    } else {
      onNavigateHome('contact');
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop: Double-Height Header (h-36 / 144px) */}
        <div className="hidden lg:flex flex-col justify-between h-36 py-4">
          
          {/* Upper Tier: Brand Monogram & Enquire Action */}
          <div className="flex items-center justify-between">
            
            {/* Wordmark */}
            <button
              onClick={() => onNavigateHome()}
              className="flex items-center space-x-3.5 group text-left"
            >
              <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center bg-white text-black font-serif font-bold text-sm tracking-widest group-hover:bg-black group-hover:text-white transition-all">
                IHG
              </div>
              <div>
                <div className="font-serif text-2xl tracking-widest text-black font-normal leading-none">
                  IHG CELEBRATIONS
                </div>
                <div className="text-[10px] uppercase font-sans tracking-[0.32em] text-neutral-500 font-medium mt-1">
                  Hotels & Resorts India
                </div>
              </div>
            </button>

            {/* Right: Enquire & Back-to-explore Actions */}
            <div className="flex items-center space-x-4">
              {!isHome && (
                <button
                  onClick={() => onNavigateHome()}
                  className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-sans font-medium text-black hover:text-neutral-600 transition-colors py-2 px-3 border border-neutral-300 rounded-full hover:border-black"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Main Exploration</span>
                </button>
              )}

              <button
                onClick={handleEnquireClick}
                className="bg-black hover:bg-neutral-800 text-white text-xs uppercase tracking-widest font-medium px-6 py-2.5 rounded-full transition-all flex items-center space-x-1.5 border border-black shadow-xs cursor-pointer"
              >
                <span>Enquire</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Lower Tier: Centered Nav Anchor Links */}
          <div className="border-t border-neutral-200 pt-3">
            <nav className="flex items-center justify-center space-x-9 text-xs font-sans uppercase tracking-[0.22em] text-neutral-600 font-medium">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link)}
                  className="hover:text-black transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-black hover:after:w-full after:transition-all cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

        </div>

        {/* Mobile & Small Screen Layout */}
        <div className="flex lg:hidden flex-col justify-center min-h-[88px] py-3">
          <div className="flex items-center justify-between">
            
            {/* Wordmark */}
            <button
              onClick={() => onNavigateHome()}
              className="flex items-center space-x-2.5 text-left"
            >
              <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center bg-white text-black font-serif font-bold text-xs">
                IHG
              </div>
              <div>
                <span className="font-serif text-lg tracking-wider text-black font-normal block leading-tight">
                  IHG CELEBRATIONS
                </span>
                <span className="text-[9px] uppercase font-sans tracking-[0.24em] text-neutral-500 block">
                  India Sanctuaries
                </span>
              </div>
            </button>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-2">
              {!isHome && (
                <button
                  onClick={() => onNavigateHome()}
                  className="border border-neutral-300 text-black text-[10px] uppercase tracking-wider px-2.5 py-1.5 rounded-full font-medium"
                >
                  Back
                </button>
              )}
              <button
                onClick={handleEnquireClick}
                className="bg-black text-white text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full font-medium"
              >
                Enquire
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-black focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

          <div className="flex items-center justify-between text-[11px] font-sans text-neutral-500 border-t border-neutral-200 pt-2 mt-2">
            <span className="truncate pr-2">
              {isHome ? 'Luxury Destination Weddings' : 'Separate Dossier View'}
            </span>
            <span className="text-black font-medium tracking-wider text-[10px] uppercase">
              India Portfolio
            </span>
          </div>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-black/10 px-6 py-5 space-y-3 font-sans text-xs tracking-wider uppercase animate-fade-in shadow-lg">
          <div className="flex flex-col space-y-2.5 text-neutral-700">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link)}
                className="text-left hover:text-black transition-colors py-1.5 flex items-center justify-between border-b border-neutral-100 last:border-0"
              >
                <span>{link.label}</span>
                <span className="text-neutral-400 text-[10px]">→</span>
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-200">
            <button
              onClick={handleEnquireClick}
              className="w-full bg-black text-white py-2.5 rounded-full text-center font-medium block cursor-pointer"
            >
              Enquire Directly
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
