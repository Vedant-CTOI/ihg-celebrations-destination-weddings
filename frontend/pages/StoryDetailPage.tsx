import React from 'react';
import { RealWeddingCase } from '../types';
import { REAL_WEDDINGS_DATA } from '../constants';
import { ArrowLeft, MapPin, Users, Calendar, ArrowRight, Quote, Sparkles } from 'lucide-react';

interface StoryDetailPageProps {
  storyId: string;
  onNavigateBack: () => void;
  onNavigateToInquiry: (weddingTitle: string) => void;
}

export const StoryDetailPage: React.FC<StoryDetailPageProps> = ({
  storyId,
  onNavigateBack,
  onNavigateToInquiry
}) => {
  const wedding: RealWeddingCase =
    REAL_WEDDINGS_DATA.find((w) => w.id === storyId) || REAL_WEDDINGS_DATA[0];

  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24 animate-fade-in">
      
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-neutral-200 bg-neutral-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-neutral-500">
            <button onClick={onNavigateBack} className="hover:text-black">Exploration</button>
            <span>/</span>
            <button onClick={onNavigateBack} className="hover:text-black">Real Weddings</button>
            <span>/</span>
            <span className="text-black font-medium">{wedding.couple}</span>
          </div>

          <button
            onClick={onNavigateBack}
            className="inline-flex items-center space-x-1 text-black hover:text-neutral-600 font-medium uppercase tracking-wider text-[11px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Main Page</span>
          </button>
        </div>
      </div>

      {/* Hero Banner (Grayscale Luxury) */}
      <div className="relative h-[480px] lg:h-[560px] w-full overflow-hidden bg-black">
        <img
          src={wedding.gallery[0] || wedding.coverImage}
          alt={wedding.couple}
          className="w-full h-full object-cover filter grayscale contrast-115"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/1800x800/000000/FFFFFF?text=' + encodeURIComponent(wedding.couple);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        <div className="absolute bottom-10 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <span className="bg-white text-black text-xs uppercase tracking-widest px-3 py-1 rounded-full font-semibold mb-3 inline-block">
              {wedding.title}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-2">
              {wedding.couple}
            </h1>
            <div className="flex items-center space-x-4 text-xs sm:text-sm text-neutral-300 font-light">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-white" />
                <span>{wedding.property}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Users className="w-3.5 h-3.5 text-white" />
                <span>{wedding.guestCount} Guests</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* The Cultural Confluence Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-semibold block mb-2">
                Cultural Confluence
              </span>
              <h2 className="font-serif text-3xl font-normal text-black leading-snug">
                "{wedding.culturalConfluence}"
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
              {wedding.resolutionStory}
            </p>

            <blockquote className="border-l-2 border-black pl-5 py-2 text-sm sm:text-base italic font-serif text-neutral-800">
              {wedding.coupleTestimonial}
              <span className="block text-xs font-sans not-italic text-neutral-500 mt-2 font-medium">
                — {wedding.couple}, IHG Celebrations Review
              </span>
            </blockquote>
          </div>

          <div className="lg:col-span-4 bg-neutral-50 p-6 rounded-2xl border border-neutral-200 space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block">
              Case Study Blueprint
            </span>
            <h3 className="font-serif text-xl text-black font-normal">
              Inquire for Similar Format
            </h3>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Replicate this multi-cultural harmony with certified dietary custody and sound-isolated afterparties.
            </p>
            <button
              onClick={() => onNavigateToInquiry(wedding.title)}
              className="w-full bg-black hover:bg-neutral-800 text-white py-3 rounded-xl uppercase tracking-wider text-xs font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <span>Enquire with Director</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Hour-by-Hour Timeline Execution */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-semibold block mb-1">
              Execution Protocol
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-black">
              Orchestrated Run-of-Show Timeline
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-light mt-1">
              Synchronized milestones ensuring traditional sanctity alongside celebration.
            </p>
          </div>

          <div className="bg-neutral-50 p-6 sm:p-8 rounded-2xl border border-neutral-200 space-y-4">
            {wedding.timelineHighlights.map((tl, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-200 last:border-0 gap-2">
                <div className="w-44 font-semibold text-black text-xs">
                  {tl.time}
                </div>
                <div className="flex-1 text-xs text-neutral-700 font-light">
                  {tl.ritual}
                </div>
                <div className="text-[11px] text-neutral-500 font-medium uppercase tracking-wider">
                  {tl.space}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Documentary Gallery */}
        {wedding.gallery.length > 0 && (
          <div>
            <div className="max-w-2xl mb-8">
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-semibold block mb-1">
                Visual Archive
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-black">
                Ceremony Moments
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wedding.gallery.map((img, idx) => (
                <div key={idx} className="h-80 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200">
                  <img
                    src={img}
                    alt="Wedding moment"
                    className="w-full h-full object-cover filter grayscale contrast-110"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
