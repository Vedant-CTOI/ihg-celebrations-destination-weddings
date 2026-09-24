import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';

interface DiscoveryFormProps {
  onOpenConversationPage: () => void;
  onOpenCharter?: () => void;
}

export const DiscoveryForm: React.FC<DiscoveryFormProps> = ({
  onOpenConversationPage,
  onOpenCharter
}) => {
  return (
    <section id="contact" className="py-24 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Minimal Category Header */}
        <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-sans font-medium block mb-2">
          Consultation & Reservation
        </span>

        {/* Title */}
        <h2 className="font-serif text-3xl sm:text-4xl text-black font-normal mb-3">
          Begin the Conversation
        </h2>

        {/* Limited Single-Line Description */}
        <p className="font-sans text-neutral-600 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed mb-8">
          Connect directly with an assigned IHG Luxury Wedding Director to reserve auspicious date blocks, coordinate multi-sanctuary layouts, and tailor ceremonial catering across India.
        </p>

        {/* Primary CTA and Secondary Charter Trigger */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={onOpenConversationPage}
            className="w-full sm:w-auto bg-black hover:bg-neutral-800 text-white px-8 py-3.5 rounded-full text-xs font-sans uppercase tracking-wider font-medium transition-all shadow-sm flex items-center justify-center space-x-2"
          >
            <span>Open Discovery Intake</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {onOpenCharter && (
            <button
              type="button"
              onClick={onOpenCharter}
              className="w-full sm:w-auto border border-neutral-300 hover:border-black text-black bg-white px-6 py-3.5 rounded-full text-xs font-sans uppercase tracking-wider font-medium transition-colors flex items-center justify-center space-x-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Inspect Wedding Charter</span>
            </button>
          )}
        </div>

        {/* Subtle Assurance Indicators */}
        <div className="mt-10 pt-6 border-t border-neutral-200/80 flex flex-wrap items-center justify-center gap-6 text-[11px] font-sans text-neutral-500 font-light">
          <span className="flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Dedicated Director Assignment</span>
          </span>
          <span>•</span>
          <span>Multi-Location Hold Capability</span>
          <span>•</span>
          <span>Confidentiality & NDA Enforced</span>
        </div>

      </div>
    </section>
  );
};
