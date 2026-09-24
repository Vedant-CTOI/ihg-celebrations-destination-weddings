import React, { useState, useMemo } from 'react';
import { HOTELS_DATA } from '../constants';
import { HotelProperty, CeremonyFormat } from '../types';
import { Users, BedDouble, Eye, ArrowRight } from 'lucide-react';

interface HotelsExplorationProps {
  onSelectHotel: (hotel: HotelProperty) => void;
}

export const HotelsExploration: React.FC<HotelsExplorationProps> = ({ onSelectHotel }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedTradition, setSelectedTradition] = useState<string>('All');

  const filteredHotels = useMemo(() => {
    return HOTELS_DATA.filter((hotel) => {
      if (selectedRegion !== 'All' && hotel.region !== selectedRegion) return false;
      if (selectedTradition !== 'All' && !hotel.traditionFormats.includes(selectedTradition as CeremonyFormat)) return false;
      return true;
    });
  }, [selectedRegion, selectedTradition]);

  const regions = ['All', 'Rajasthan', 'Goa', 'Mahabalipuram', 'Kerala', 'NCR / Corbett'];
  const ceremonyFormats: ('All' | CeremonyFormat)[] = [
    'All',
    'Royal',
    'Beachside',
    'Traditional Mandap',
    'Riverside & Backwater',
    'Modern Minimalist'
  ];

  return (
    <section id="hotels-exploration" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Section Header with Section CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-sans font-medium block mb-2">
              Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-black font-normal mb-1">
              Hotels & Palaces
            </h2>
            <p className="text-xs text-neutral-500 font-sans font-light">
              Click any sanctuary card to inspect detailed celebration spaces, banquet capacities, and dietary blueprints.
            </p>
          </div>

          {/* Ceremony Formats & Region Filter */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-sans">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-neutral-100 border border-neutral-300 rounded-full px-3.5 py-1.5 text-black focus:outline-none focus:border-black text-xs cursor-pointer"
            >
              {regions.map((reg) => (
                <option key={reg} value={reg}>{reg === 'All' ? 'All Destinations' : reg}</option>
              ))}
            </select>

            <select
              value={selectedTradition}
              onChange={(e) => setSelectedTradition(e.target.value)}
              className="bg-neutral-100 border border-neutral-300 rounded-full px-3.5 py-1.5 text-black focus:outline-none focus:border-black text-xs cursor-pointer"
            >
              {ceremonyFormats.map((trad) => (
                <option key={trad} value={trad}>
                  {trad === 'All' ? 'All Ceremony Formats' : `${trad} Ceremony`}
                </option>
              ))}
            </select>

            <button
              onClick={() => onSelectHotel(filteredHotels[0] || HOTELS_DATA[0])}
              className="hidden lg:inline-flex items-center space-x-1.5 text-xs font-sans uppercase tracking-wider bg-black text-white px-4 py-1.5 rounded-full hover:bg-neutral-800 transition-colors font-medium shadow-2xs"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Explore Featured Sanctuary</span>
            </button>
          </div>
        </div>

        {/* Minimal Grid with Clickable Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              onClick={() => onSelectHotel(hotel)}
              className="group bg-white rounded-2xl border border-neutral-200 hover:border-black overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-2xs hover:shadow-md"
            >
              <div>
                {/* Photo with Overlay (Grayscale) */}
                <div className="relative h-56 overflow-hidden bg-neutral-900">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-103 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/000000/FFFFFF?text=' + encodeURIComponent(hotel.name);
                    }}
                  />
                  <span className="absolute top-3 left-3 bg-white/95 text-black text-[10px] uppercase tracking-wider font-sans px-2.5 py-0.5 rounded-full font-medium shadow-xs">
                    {hotel.brand}
                  </span>

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-black px-3 py-1.5 rounded-full text-xs font-sans font-medium flex items-center space-x-1.5 shadow-sm">
                      <Eye className="w-3.5 h-3.5 text-black" />
                      <span>View Sanctuary Details</span>
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] uppercase tracking-wider font-sans text-neutral-500 font-medium">
                      {hotel.location}
                    </span>
                    <span className="text-[10px] bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-full font-medium">
                      {hotel.traditionFormats[0]}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-normal text-black mb-2 group-hover:underline transition-colors">
                    {hotel.name}
                  </h3>

                  <div className="flex items-center space-x-4 text-xs font-sans text-neutral-700 py-2 border-y border-neutral-200 mb-3">
                    <span className="flex items-center space-x-1">
                      <Users className="w-3.5 h-3.5 text-black" />
                      <span>{hotel.capacityMin}–{hotel.capacityMax} Guests</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <BedDouble className="w-3.5 h-3.5 text-black" />
                      <span>{hotel.roomsCount} Rooms</span>
                    </span>
                  </div>

                  <p className="text-[11px] text-neutral-500 font-sans italic mb-2">
                    Mandap: {hotel.mandapType}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectHotel(hotel);
                  }}
                  className="w-full text-center border border-neutral-300 group-hover:bg-black group-hover:text-white text-black text-[11px] uppercase tracking-wider font-sans font-medium py-2 rounded-xl transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>View Sanctuary Details & CTA</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
