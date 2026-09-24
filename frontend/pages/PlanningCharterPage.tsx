import React from 'react';
import { ArrowLeft, ShieldCheck, Check, Clock, Lock, Users, ArrowRight } from 'lucide-react';

interface PlanningCharterPageProps {
  onNavigateBack: () => void;
  onProceedToForm: () => void;
}

export const PlanningCharterPage: React.FC<PlanningCharterPageProps> = ({
  onNavigateBack,
  onProceedToForm
}) => {
  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24 animate-fade-in">
      
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-neutral-200 bg-neutral-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-neutral-500">
            <button onClick={onNavigateBack} className="hover:text-black">Exploration</button>
            <span>/</span>
            <span className="text-black font-medium">IHG Luxury Wedding Charter</span>
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

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-neutral-200">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center space-x-2 text-[11px] uppercase tracking-widest text-neutral-500 font-semibold">
            <ShieldCheck className="w-4 h-4 text-black" />
            <span>Standardized Operational Charter</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-black leading-tight">
            The IHG Luxury Wedding & Ceremonial Charter
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Our written institutional commitment to ceremonial purity, multi-generational harmony, all-weather reliability, and dignitary privacy across every IHG sanctuary in India.
          </p>
        </div>
      </div>

      {/* Main Content Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Pillar 1 */}
          <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-neutral-300 flex items-center justify-center text-black">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl font-normal text-black">
              Dedicated On-Ground Luxury Wedding Director
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Every couple and family is assigned a single-point Wedding Director who coordinates months in advance with family elders, visiting Pandits, decorator production teams, and culinary masters.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-neutral-300 flex items-center justify-center text-black">
              <Check className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl font-normal text-black">
              Dietary Sanctity & Segregated Kitchen Custody
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Certified zero onion/garlic Sattvic lines, separate dishwashing facilities, consecrated brass cooking utensils, and visiting pandit inspection access prior to all sacred rituals.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-neutral-300 flex items-center justify-center text-black">
              <Lock className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl font-normal text-black">
              Dignitary Privacy & Photography NDA
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Comprehensive privacy agreements for high-profile couples and families, strictly prohibiting unauthorized photography by hotel personnel, with options for private air-charter arrival gates and secure wings.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-neutral-300 flex items-center justify-center text-black">
              <Clock className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl font-normal text-black">
              Two-Hour Weather Contingency Guarantee
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Every outdoor lawn mandap reservation automatically includes a pre-reserved, temperature-controlled ballroom with mirrored staging, ready to activate seamlessly within 120 minutes.
            </p>
          </div>

        </div>

        {/* Action Callout */}
        <div className="bg-black text-white p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-2">
              Ready to begin your celebration blueprint?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-light">
              Connect with an assigned Luxury Wedding Director to reserve dates and inspect full property guidelines.
            </p>
          </div>

          <button
            onClick={onProceedToForm}
            className="bg-white hover:bg-neutral-200 text-black text-xs uppercase tracking-wider font-medium px-8 py-3.5 rounded-full transition-colors flex items-center space-x-2 shrink-0"
          >
            <span>Proceed to Inquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
};
