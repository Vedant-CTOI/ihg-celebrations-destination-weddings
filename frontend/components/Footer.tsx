import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-neutral-800 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-neutral-800">
          
          <div>
            <span className="font-serif text-base text-white block mb-2 font-normal tracking-wide">
              IHG Celebrations
            </span>
            <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
              Timeless Indian destination weddings across palaces, beaches, and backwaters.
            </p>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium block mb-2">
              Destinations
            </span>
            <ul className="space-y-1 text-[11px] text-neutral-300 font-light">
              <li>Rajasthan</li>
              <li>Goa Coast</li>
              <li>Mahabalipuram</li>
              <li>Kerala</li>
            </ul>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium block mb-2">
              Portfolio
            </span>
            <ul className="space-y-1 text-[11px] text-neutral-300 font-light">
              <li>Six Senses Fort Barwara</li>
              <li>InterContinental Chennai</li>
              <li>Crowne Plaza Goa</li>
            </ul>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium block mb-2">
              Concierge
            </span>
            <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
              Dedicated destination wedding directors for personalized celebrations.
            </p>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-2">
          <p>© {new Date().getFullYear()} IHG Hotels & Resorts India.</p>
          <div className="flex space-x-4">
            <span>Privacy Standard</span>
            <span>Ceremonial Charter</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
