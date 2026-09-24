import React from 'react';
import { X, ShieldCheck, Check, Clock, FileText, Lock, Users, HeartHandshake, ArrowRight } from 'lucide-react';

interface PlanningCharterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToForm: () => void;
}

export const PlanningCharterModal: React.FC<PlanningCharterModalProps> = ({
  isOpen,
  onClose,
  onProceedToForm
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 transition-opacity animate-fade-in font-sans">
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-neutral-300 shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="IHG Ceremonial & Privacy Charter"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-black hover:text-white text-black p-2 rounded-full shadow-md transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-neutral-200">
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-neutral-500 font-semibold mb-2">
            <ShieldCheck className="w-4 h-4 text-black" />
            <span>Official Operating Protocol</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-black">
            IHG Luxury Wedding Charter
          </h2>
          <p className="text-xs text-neutral-600 font-light mt-1">
            Standardized operational, ceremonial, and privacy commitments across all flagship Indian sanctuaries.
          </p>
        </div>

        {/* Content Pillars */}
        <div className="p-6 sm:p-8 space-y-6 text-xs">
          
          {/* Pillar 1: Dedicated Director & Pandits */}
          <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
            <div className="flex items-center space-x-2 text-black font-semibold mb-1">
              <Users className="w-4 h-4" />
              <span>Dedicated On-Ground Luxury Wedding Director</span>
            </div>
            <p className="text-neutral-600 font-light leading-relaxed">
              Every couple and family is assigned a single-point Wedding Director who coordinates months in advance with family elders, visiting Pandits, and culinary teams.
            </p>
          </div>

          {/* Pillar 2: Dietary Chain of Custody */}
          <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
            <div className="flex items-center space-x-2 text-black font-semibold mb-1">
              <Check className="w-4 h-4" />
              <span>Dietary Sanctity & Segregated Kitchen Custody</span>
            </div>
            <p className="text-neutral-600 font-light leading-relaxed">
              Certified zero onion/garlic Sattvic lines, separate dishwashing facilities, consecrated brass cooking utensils, and pandit inspection access prior to all sacred rituals.
            </p>
          </div>

          {/* Pillar 3: Privacy & NDA Protocol */}
          <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
            <div className="flex items-center space-x-2 text-black font-semibold mb-1">
              <Lock className="w-4 h-4" />
              <span>Dignitary Privacy & Photography NDA</span>
            </div>
            <p className="text-neutral-600 font-light leading-relaxed">
              Comprehensive privacy agreements for high-profile couples and families, strictly prohibiting unauthorized photography by hotel personnel and providing private air-charter arrival gates.
            </p>
          </div>

          {/* Pillar 4: All-Weather & Fire Safety */}
          <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
            <div className="flex items-center space-x-2 text-black font-semibold mb-1">
              <Clock className="w-4 h-4" />
              <span>Two-Hour Weather Contingency Guarantee</span>
            </div>
            <p className="text-neutral-600 font-light leading-relaxed">
              Every outdoor lawn mandap reservation automatically includes a pre-reserved, temperature-controlled ballroom with mirrored staging, ready to activate within 120 minutes.
            </p>
          </div>

        </div>

        {/* Footer Action */}
        <div className="p-6 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between">
          <span className="text-xs text-neutral-500 font-light">
            Enforced across all IHG India Sanctuaries.
          </span>
          <button
            onClick={() => {
              onClose();
              onProceedToForm();
            }}
            className="bg-black hover:bg-neutral-800 text-white text-xs uppercase tracking-wider font-medium px-6 py-2.5 rounded-full transition-all flex items-center space-x-2"
          >
            <span>Proceed to Inquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
