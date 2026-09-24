import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  // High-resolution authentic Indian destination wedding imagery
  const heroImage = 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2400&q=85';

  return (
    <section className="relative overflow-hidden min-h-[78vh] md:min-h-[85vh] flex items-center bg-black text-white border-b border-neutral-800">
      
      {/* Distinct faded Indian wedding background imagery in pure monochrome */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        <img
          src={heroImage}
          alt="Traditional Indian wedding ceremony and sacred mandap"
          className="w-full h-full object-cover object-center animate-ken-burns opacity-25 filter grayscale contrast-125 brightness-90 scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80';
          }}
        />

        {/* Deep black luxury monochrome gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 sm:via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      {/* Editorial Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-xl lg:max-w-2xl">
          
          {/* Minimal Monochrome Eyebrow */}
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.28em] text-neutral-400 mb-6 font-sans">
            <span className="w-8 h-px bg-neutral-400" />
            <span>Couple’s Sanctuary</span>
          </div>

          {/* Single Focused Headline: Sacred vows in quiet majesty */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] text-white mb-6 tracking-tight">
            Sacred vows in <br />
            <span className="italic text-neutral-300 font-light">quiet majesty.</span>
          </h1>

          {/* Concise subtext */}
          <p className="font-sans text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8 max-w-md">
            Understated sunset mandaps, torchlit courtyards, and quiet luxury curated for your private promise.
          </p>

          {/* Clean Black and White CTA button */}
          <div className="flex items-center text-xs font-sans">
            <a
              href="#contact"
              className="bg-white hover:bg-neutral-200 text-black px-7 py-3.5 rounded-full font-medium tracking-wider uppercase transition-all flex items-center space-x-2.5 shadow-md active:scale-95"
            >
              <span>Plan Celebration</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
