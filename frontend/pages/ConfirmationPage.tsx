import React from 'react';
import { InquiryFormData } from '../types';
import { Check, ArrowRight, ArrowLeft, Users, MapPin, Sparkles } from 'lucide-react';

interface ConfirmationPageProps {
  data: InquiryFormData;
  onNavigateHome: () => void;
}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({
  data,
  onNavigateHome
}) => {
  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24 animate-fade-in">
      
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-neutral-200 bg-neutral-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-neutral-500">
            <button onClick={onNavigateHome} className="hover:text-black">Exploration</button>
            <span>/</span>
            <span className="text-black font-medium">Inquiry Confirmation</span>
          </div>

          <button
            onClick={onNavigateHome}
            className="inline-flex items-center space-x-1 text-black hover:text-neutral-600 font-medium uppercase tracking-wider text-[11px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Exploration</span>
          </button>
        </div>
      </div>

      {/* Main Confirmation Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        
        <div className="text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4">
            <Check className="w-7 h-7" />
          </div>

          <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-semibold block">
            Inquiry Successfully Received
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-black">
            Director Dossier Activated
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-md mx-auto">
            An assigned Luxury Wedding Director has logged your celebration blueprint for {data.destinations.join(', ')}.
          </p>
        </div>

        {/* Assigned Director Profile Card */}
        <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 border border-neutral-200 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
            alt="Director"
            className="w-20 h-20 rounded-full object-cover border-2 border-black filter grayscale"
          />
          <div className="text-center sm:text-left space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block">
              Assigned Wedding Director
            </span>
            <h2 className="font-serif text-2xl font-normal text-black">
              Ananya Sen
            </h2>
            <p className="text-xs text-neutral-700 font-medium">
              Lead Wedding Director, IHG Luxury Celebrations India
            </p>
            <p className="text-xs text-neutral-500 font-light pt-1">
              "We have received your dates and requirements as a {data.decisionRole}. I will review room blocks across your chosen sanctuaries before contacting you."
            </p>
          </div>
        </div>

        {/* Summary of Inquiry Details */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 space-y-4 text-xs">
          <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block">
            Celebration Blueprint Summary
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <span className="text-neutral-500 block mb-0.5">Contact Persona:</span>
              <strong className="text-black font-medium">{data.primaryContactName} ({data.decisionRole})</strong>
            </div>

            <div>
              <span className="text-neutral-500 block mb-0.5">Phone / WhatsApp:</span>
              <strong className="text-black font-medium">{data.phone}</strong>
            </div>

            <div>
              <span className="text-neutral-500 block mb-0.5">Email:</span>
              <strong className="text-black font-medium">{data.email}</strong>
            </div>

            <div>
              <span className="text-neutral-500 block mb-0.5">Guest Count Scale:</span>
              <strong className="text-black font-medium">{data.guestRange} (~{data.estimatedGuests} guests)</strong>
            </div>

            <div>
              <span className="text-neutral-500 block mb-0.5">Target Celebration Window:</span>
              <strong className="text-black font-medium">{data.targetWindow}</strong>
            </div>

            {data.partnerName && (
              <div>
                <span className="text-neutral-500 block mb-0.5">Partner's Name:</span>
                <strong className="text-black font-medium">{data.partnerName}</strong>
              </div>
            )}

            {data.planningAgency && (
              <div>
                <span className="text-neutral-500 block mb-0.5">Planning Agency:</span>
                <strong className="text-black font-medium">{data.planningAgency}</strong>
              </div>
            )}

            <div className="sm:col-span-2">
              <span className="text-neutral-500 block mb-0.5">Selected Sanctuaries (Multiple):</span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {data.destinations.map((d, i) => (
                  <span key={i} className="bg-neutral-100 text-black px-2.5 py-1 rounded-full font-medium text-[11px] border border-neutral-200">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center pt-4">
          <button
            onClick={onNavigateHome}
            className="bg-black hover:bg-neutral-800 text-white text-xs uppercase tracking-wider font-medium px-8 py-3 rounded-full transition-colors inline-flex items-center space-x-2 cursor-pointer shadow-xs"
          >
            <span>Return to Sanctuary Exploration</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
};
