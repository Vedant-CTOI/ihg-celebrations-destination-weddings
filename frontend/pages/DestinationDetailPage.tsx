import React from 'react';
import { Destination, HotelProperty } from '../types';
import { DESTINATIONS_DATA, HOTELS_DATA } from '../constants';
import { ArrowLeft, Check, MapPin, Sun, ShieldCheck, Flame, Compass, Utensils, Volume2, Home, ArrowRight, BedDouble, Users } from 'lucide-react';

interface DestinationDetailPageProps {
  destinationId: string;
  onNavigateBack: () => void;
  onNavigateToHotel: (hotelId: string) => void;
  onNavigateToInquiry: (destinationName: string) => void;
}

export const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({
  destinationId,
  onNavigateBack,
  onNavigateToHotel,
  onNavigateToInquiry
}) => {
  const destination: Destination =
    DESTINATIONS_DATA.find((d) => d.id === destinationId) || DESTINATIONS_DATA[0];

  // Properties within this region
  const localHotels = HOTELS_DATA.filter((h) => {
    if (destination.id === 'rajasthan') return h.region === 'Rajasthan';
    if (destination.id === 'goa') return h.region === 'Goa';
    if (destination.id === 'mahabalipuram') return h.region === 'Mahabalipuram';
    if (destination.id === 'kerala') return h.region === 'Kerala';
    if (destination.id === 'ncr-corbett') return h.region === 'NCR / Corbett';
    return true;
  });

  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24 animate-fade-in">
      
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-neutral-200 bg-neutral-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-neutral-500">
            <button onClick={onNavigateBack} className="hover:text-black">Exploration</button>
            <span>/</span>
            <button onClick={onNavigateBack} className="hover:text-black">Destinations</button>
            <span>/</span>
            <span className="text-black font-medium">{destination.name}</span>
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
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover filter grayscale contrast-115"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/1800x800/000000/FFFFFF?text=' + encodeURIComponent(destination.name);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        <div className="absolute bottom-10 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <span className="bg-white text-black text-xs uppercase tracking-widest px-3 py-1 rounded-full font-semibold mb-3 inline-block">
              {destination.vibe}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-3">
              {destination.name}
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 max-w-2xl font-light leading-relaxed flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-white shrink-0" />
              <span>{destination.tagline}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Editorial Narrative & Fast Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-semibold block mb-2">
                Dossier Overview
              </span>
              <p className="font-serif text-2xl text-black italic leading-snug">
                "{destination.heroSnippet}"
              </p>
            </div>

            <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
              {destination.editorial}
            </p>

            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              Every celebration in {destination.name} is paired with certified ceremony masters, customized acoustic boundaries, and physical kitchen infrastructure built specifically for high-stakes traditional ceremonies.
            </p>
          </div>

          <div className="lg:col-span-4 bg-neutral-50 p-6 rounded-2xl border border-neutral-200 space-y-5 text-xs">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block">
              Destination Vital Signs
            </span>

            <div>
              <span className="text-neutral-500 block mb-1">Optimal Climate Window</span>
              <div className="font-serif text-lg text-black font-semibold flex items-center space-x-1.5">
                <Sun className="w-4 h-4 text-black" />
                <span>{destination.climateWindow}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-200">
              <span className="text-neutral-500 block mb-1">Signature Venues</span>
              <ul className="space-y-1 text-black font-medium">
                {destination.signatureVenues.map((v, i) => (
                  <li key={i}>• {v}</li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-neutral-200">
              <span className="text-neutral-500 block mb-1">Ceremonial Audit Status</span>
              <div className="flex items-center space-x-1.5 text-black font-semibold">
                <ShieldCheck className="w-4 h-4 text-black" />
                <span>100% Certified (5-Point Audit)</span>
              </div>
            </div>

            <button
              onClick={() => onNavigateToInquiry(destination.name)}
              className="w-full bg-black hover:bg-neutral-800 text-white py-3 rounded-xl uppercase tracking-wider text-xs font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <span>Enquire for {destination.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 5-Point Ceremonial Readiness Breakdown */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-semibold block mb-1">
              Verification Protocol
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-black">
              5-Point Ceremonial Readiness Audit
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-light mt-1">
              Guaranteed operational infrastructure certified across {destination.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-white border border-neutral-300 flex items-center justify-center text-black mb-4">
                  <Flame className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base text-black font-normal mb-1">
                  {destination.readiness.havanFireSpace.title}
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  {destination.readiness.havanFireSpace.detail}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center space-x-1 text-[11px] text-black font-semibold">
                <Check className="w-3.5 h-3.5" />
                <span>Vedic Fire Certified</span>
              </div>
            </div>

            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-white border border-neutral-300 flex items-center justify-center text-black mb-4">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base text-black font-normal mb-1">
                  {destination.readiness.baraatRoute.title}
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  {destination.readiness.baraatRoute.detail}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center space-x-1 text-[11px] text-black font-semibold">
                <Check className="w-3.5 h-3.5" />
                <span>Processional Verified</span>
              </div>
            </div>

            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-white border border-neutral-300 flex items-center justify-center text-black mb-4">
                  <Utensils className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base text-black font-normal mb-1">
                  {destination.readiness.dietarySegregation.title}
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  {destination.readiness.dietarySegregation.detail}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center space-x-1 text-[11px] text-black font-semibold">
                <Check className="w-3.5 h-3.5" />
                <span>Strict Sattvic Custody</span>
              </div>
            </div>

            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-white border border-neutral-300 flex items-center justify-center text-black mb-4">
                  <Volume2 className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base text-black font-normal mb-1">
                  {destination.readiness.lateNightAcoustics.title}
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  {destination.readiness.lateNightAcoustics.detail}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center space-x-1 text-[11px] text-black font-semibold">
                <Check className="w-3.5 h-3.5" />
                <span>Soundproofed 98dB</span>
              </div>
            </div>

            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-9 h-9 rounded-xl bg-white border border-neutral-300 flex items-center justify-center text-black mb-4">
                  <Home className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base text-black font-normal mb-1">
                  {destination.readiness.vipSuites.title}
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  {destination.readiness.vipSuites.detail}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center space-x-1 text-[11px] text-black font-semibold">
                <Check className="w-3.5 h-3.5" />
                <span>Multi-Generational Villas Guaranteed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Properties within this destination */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-semibold block mb-1">
              Sanctuaries
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-black">
              Flagship Hotels in {destination.name}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-light mt-1">
              Select a sanctuary to inspect floorplans, capacities, and venue layouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localHotels.map((hotel) => (
              <div
                key={hotel.id}
                onClick={() => onNavigateToHotel(hotel.id)}
                className="group bg-white rounded-2xl border border-neutral-200 hover:border-black overflow-hidden transition-all duration-300 cursor-pointer shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-neutral-900">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-103 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 text-black text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-medium">
                      {hotel.brand}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif text-lg font-normal text-black mb-1 group-hover:underline">
                      {hotel.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mb-3">{hotel.location}</p>

                    <div className="flex items-center space-x-4 text-xs text-neutral-700 py-2 border-y border-neutral-200 mb-2">
                      <span className="flex items-center space-x-1">
                        <Users className="w-3.5 h-3.5 text-black" />
                        <span>{hotel.capacityMin}–{hotel.capacityMax} Guests</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <BedDouble className="w-3.5 h-3.5 text-black" />
                        <span>{hotel.roomsCount} Rooms</span>
                      </span>
                    </div>

                    <p className="text-[11px] text-neutral-500 italic">
                      Mandap: {hotel.mandapType}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    type="button"
                    className="w-full text-center border border-neutral-300 group-hover:bg-black group-hover:text-white text-black text-[11px] uppercase tracking-wider font-medium py-2 rounded-xl transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <span>Inspect Hotel Blueprint</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
