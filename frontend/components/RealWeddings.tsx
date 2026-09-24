import React from 'react';
import { REAL_WEDDINGS_DATA } from '../constants';
import { RealWeddingCase } from '../types';
import { BookOpen, ArrowRight, Sparkles } from 'lucide-react';

interface RealWeddingsProps {
  onSelectStory: (wedding: RealWeddingCase) => void;
}

export const RealWeddings: React.FC<RealWeddingsProps> = ({ onSelectStory }) => {
  return (
    <section id="real-weddings" className="py-20 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Header with Section CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-sans font-medium block mb-2">
              Case Studies
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-black font-normal mb-2">
              Real Weddings
            </h2>
            <p className="font-sans text-neutral-600 text-sm font-light">
              How diverse family traditions, dietary purity, and sacred hours were brought into harmony.
            </p>
          </div>

          <button
            onClick={() => onSelectStory(REAL_WEDDINGS_DATA[0])}
            className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-widest bg-black text-white px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors shadow-2xs font-medium shrink-0 self-start md:self-auto"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Open Featured Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Minimal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REAL_WEDDINGS_DATA.map((wedding) => (
            <article
              key={wedding.id}
              onClick={() => onSelectStory(wedding)}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden flex flex-col justify-between hover:border-black transition-colors cursor-pointer group shadow-2xs hover:shadow-md"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-neutral-900">
                  <img
                    src={wedding.coverImage}
                    alt={wedding.couple}
                    className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-103 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/600x450/000000/FFFFFF?text=' + encodeURIComponent(wedding.couple);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-wider font-sans text-neutral-300 block">
                      {wedding.location}
                    </span>
                    <h3 className="font-serif text-xl font-normal text-white">
                      {wedding.couple}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-[11px] font-sans font-semibold text-black uppercase tracking-wider block mb-1">
                    The Confluence:
                  </span>
                  <p className="text-xs text-neutral-800 font-sans mb-3 font-medium">
                    {wedding.culturalConfluence}
                  </p>

                  <p className="text-xs text-neutral-600 font-sans leading-relaxed line-clamp-3 mb-4 font-light">
                    {wedding.resolutionStory}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectStory(wedding);
                  }}
                  className="w-full border border-neutral-300 group-hover:bg-black group-hover:text-white text-black text-[11px] uppercase tracking-wider font-sans font-medium py-2 rounded-xl transition-colors flex items-center justify-center space-x-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Full Story & Run-of-Show</span>
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
