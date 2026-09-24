import React from 'react';
import { HotelProperty } from '../types';
import { HOTELS_DATA } from '../constants';
import { ArrowLeft, Users, BedDouble, MapPin, Check, ArrowRight, Sparkles, Plane, Utensils, ShieldCheck, Clock } from 'lucide-react';

interface HotelDetailPageProps {
  hotelId: string;
  onNavigateBack: () => void;
  onNavigateToInquiry: (hotelName: string) => void;
}

export const HotelDetailPage: React.FC<HotelDetailPageProps> = ({
  hotelId,
  onNavigateBack,
  onNavigateToInquiry
}) => {
  const hotel: HotelProperty =
    HOTELS_DATA.find((h) => h.id === hotelId) || HOTELS_DATA[0];

  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24 animate-fade-in">
      
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-neutral-200 bg-neutral-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-neutral-500">
            <button onClick={onNavigateBack} className="hover:text-black">Exploration</button>
            <span>/</span>
            <button onClick={onNavigateBack} className="hover:text-black">Sanctuaries</button>
            <span>/</span>
            <span className="text-black font-medium">{hotel.name}</span>
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
      <div className="relative h-[480px] lg:h-[580px] w-full overflow-hidden bg-black">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover filter grayscale contrast-115"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/1800x800/000000/FFFFFF?text=' + encodeURIComponent(hotel.name);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        <div className="absolute bottom-10 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold mb-3">
              <span className="bg-white text-black px-3 py-1 rounded-full">
                {hotel.brand}
              </span>
              <span className="bg-white/20 backdrop-blur-xs text-white px-3 py-1 rounded-full">
                {hotel.priceBand}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-2">
              {hotel.name}
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 flex items-center space-x-2 font-light">
              <MapPin className="w-4 h-4 text-white shrink-0" />
              <span>{hotel.location}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Key Metrics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-neutral-50 p-6 rounded-2xl border border-neutral-200 text-center">
          <div>
            <span className="text-[10px] uppercase text-neutral-500 font-semibold block mb-1">Capacity</span>
            <div className="font-serif text-2xl font-bold text-black flex items-center justify-center space-x-1.5">
              <Users className="w-5 h-5 text-black" />
              <span>{hotel.capacityMin}–{hotel.capacityMax}</span>
            </div>
            <span className="text-[11px] text-neutral-500">Day & Night Banquets</span>
          </div>

          <div>
            <span className="text-[10px] uppercase text-neutral-500 font-semibold block mb-1">Accommodations</span>
            <div className="font-serif text-2xl font-bold text-black flex items-center justify-center space-x-1.5">
              <BedDouble className="w-5 h-5 text-black" />
              <span>{hotel.roomsCount} Keys</span>
            </div>
            <span className="text-[11px] text-neutral-500">Suites & Villas</span>
          </div>

          <div>
            <span className="text-[10px] uppercase text-neutral-500 font-semibold block mb-1">Signature Style</span>
            <div className="font-serif text-lg font-semibold text-black mt-1">
              {hotel.traditionFormats.join(', ')}
            </div>
            <span className="text-[11px] text-neutral-500">Ceremonial Formats</span>
          </div>

          <div>
            <span className="text-[10px] uppercase text-neutral-500 font-semibold block mb-1">Transit</span>
            <div className="font-serif text-sm font-semibold text-black mt-2">
              {hotel.airportDistance || 'Accessible via International Airport'}
            </div>
            <span className="text-[11px] text-neutral-500">Dedicated Arrival Gate</span>
          </div>
        </div>

        {/* Architectural Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-5">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-semibold block mb-1">
                Sanctuary Dossier
              </span>
              <h2 className="font-serif text-3xl font-normal text-black">
                Architectural Pedigree & Ceremonial Setting
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
              {hotel.overview || 'A premier IHG destination sanctuary engineered with dedicated ceremony lawns, consecrated havan courtyards, and secluded villas for multi-generational weddings.'}
            </p>

            <div className="bg-black text-white p-6 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold block mb-1">
                  Signature Mandap Setting
                </span>
                <div className="font-serif text-xl sm:text-2xl text-white">
                  {hotel.mandapType}
                </div>
              </div>
              <Sparkles className="w-6 h-6 text-neutral-400 shrink-0" />
            </div>
          </div>

          <div className="lg:col-span-4 bg-neutral-50 p-6 rounded-2xl border border-neutral-200 space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block">
              Director Assigned Desk
            </span>
            <h3 className="font-serif text-xl text-black font-normal">
              Direct Sanctuary Consultation
            </h3>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Check auspicious date blocks, request full banquet layout sheets, and plan pandit walkthroughs.
            </p>
            <button
              onClick={() => onNavigateToInquiry(hotel.name)}
              className="w-full bg-black hover:bg-neutral-800 text-white py-3 rounded-xl uppercase tracking-wider text-xs font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <span>Enquire for {hotel.name.split(' ')[0]}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Curated Celebration Spaces & Floorplans */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-semibold block mb-1">
              Floorplans
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-black">
              Curated Celebration Spaces
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-light mt-1">
              Engineered spaces calibrated for varying wedding rituals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(hotel.curatedSpaces || [
              { name: 'Grand Horizon Lawn', capacity: '500 guests', type: 'Open-Air Mandap' },
              { name: 'Pillarless Ballroom', capacity: '450 guests', type: 'Indoor Sound-Isolated' },
              { name: 'Sacred Water Terrace', capacity: '200 guests', type: 'Intimate Pheras' }
            ]).map((space, idx) => (
              <div key={idx} className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold block mb-1">
                    {space.type}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-black mb-2">
                    {space.name}
                  </h3>
                  <p className="text-xs text-neutral-600 font-light mb-4">
                    Engineered staging with discrete bridal suite tunnels and VIP entrance ramps.
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs">
                  <span className="text-neutral-500">Seating Capacity:</span>
                  <span className="font-semibold text-black">{space.capacity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culinary & Operational Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block">
              Culinary Custody & Galleys
            </span>
            <h3 className="font-serif text-xl font-normal text-black">
              Segregated Master Kitchens
            </h3>
            <ul className="space-y-2 text-xs text-neutral-700 font-light">
              {(hotel.culinaryHighlights || [
                'Dedicated pure Jain and Sattvic kitchen lines',
                'Live traditional halwai dessert stations',
                'Simultaneous global coastal grills & continental bars'
              ]).map((c, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <Utensils className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block">
              Ceremonial Specifications
            </span>
            <h3 className="font-serif text-xl font-normal text-black">
              Key Property Highlights
            </h3>
            <ul className="space-y-2 text-xs text-neutral-700 font-light">
              {hotel.keyHighlights.map((h, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
};
