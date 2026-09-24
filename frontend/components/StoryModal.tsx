import React from 'react';
import { RealWeddingCase } from '../types';
import { X } from 'lucide-react';

interface StoryModalProps {
  wedding: RealWeddingCase | null;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ wedding, onClose }) => {
  if (!wedding) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 font-sans">
      <div 
        className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-neutral-300 shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-label={wedding.couple}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-black hover:text-white p-1.5 rounded-full text-black transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative h-60 w-full overflow-hidden bg-neutral-900">
          <img
            src={wedding.gallery[0] || wedding.coverImage}
            alt={wedding.couple}
            className="w-full h-full object-cover filter grayscale contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[10px] uppercase tracking-widest text-neutral-300">
              {wedding.location}
            </span>
            <h2 className="font-serif text-2xl font-normal text-white">
              {wedding.couple}
            </h2>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block mb-1">
              Cultural Confluence
            </span>
            <p className="font-serif text-lg text-black italic mb-2">
              "{wedding.culturalConfluence}"
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
              {wedding.resolutionStory}
            </p>
          </div>

          <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 space-y-2 text-xs">
            <span className="text-[10px] uppercase tracking-wider text-black font-semibold block mb-1">
              Run-of-Show Protocol
            </span>
            {wedding.timelineHighlights.map((tl, i) => (
              <div key={i} className="flex justify-between py-1 border-b border-neutral-200 last:border-0">
                <span className="font-medium text-black">{tl.time}</span>
                <span className="text-neutral-700 font-light">{tl.ritual}</span>
                <span className="text-black text-[11px] font-medium">{tl.space}</span>
              </div>
            ))}
          </div>

          <blockquote className="border-l-2 border-black pl-3 text-xs italic font-serif text-neutral-800">
            {wedding.coupleTestimonial}
          </blockquote>
        </div>

      </div>
    </div>
  );
};
