import React from 'react';
import { InquiryFormData } from '../types';
import { Check, X } from 'lucide-react';

interface ConfirmationModalProps {
  data: InquiryFormData | null;
  onClose: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-md w-full p-6 border border-neutral-300 shadow-xl font-sans"
        role="dialog"
        aria-modal="true"
        aria-label="Inquiry Confirmed"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-black p-1"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mb-4">
          <Check className="w-5 h-5" />
        </div>

        <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block mb-1">
          Inquiry Received
        </span>
        <h3 className="font-serif text-xl font-normal text-black mb-2">
          Director Dossier Activated
        </h3>
        <p className="text-xs text-neutral-600 font-light mb-5">
          An assigned Luxury Wedding Director will review your dates with care.
        </p>

        <div className="bg-neutral-100 rounded-xl p-3.5 border border-neutral-200 flex items-center space-x-3 mb-5">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
            alt="Director"
            className="w-11 h-11 rounded-full object-cover border border-black filter grayscale"
          />
          <div className="text-xs">
            <span className="font-semibold text-black block">Ananya Sen</span>
            <span className="text-neutral-500 text-[11px] block">Lead Wedding Director</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-black hover:bg-neutral-800 text-white py-2.5 rounded-xl text-xs uppercase tracking-wider font-medium transition-colors"
        >
          Return to Portal
        </button>
      </div>
    </div>
  );
};
