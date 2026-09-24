import React, { useState, useRef } from 'react';
import { VISUALISE_FUNCTIONS } from '../constants';
import { VisualiseFunctionData, WeddingFunctionId } from '../types';
import { ArrowLeft, SlidersHorizontal, Check, ArrowRight, Sun, Moon, CloudSun, Layers } from 'lucide-react';

interface VisualiseStudioPageProps {
  initialFunctionId?: WeddingFunctionId;
  onNavigateBack: () => void;
  onAdoptSetup: () => void;
}

export const VisualiseStudioPage: React.FC<VisualiseStudioPageProps> = ({
  initialFunctionId = 'wedding',
  onNavigateBack,
  onAdoptSetup
}) => {
  const [activeId, setActiveId] = useState<WeddingFunctionId>(initialFunctionId);
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [lightingPreset, setLightingPreset] = useState<'sunset' | 'starlit' | 'daylight'>('sunset');
  const containerRef = useRef<HTMLDivElement>(null);

  const current: VisualiseFunctionData =
    VISUALISE_FUNCTIONS.find((f) => f.id === activeId) || VISUALISE_FUNCTIONS[0];

  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24 animate-fade-in">
      
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-neutral-200 bg-neutral-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-neutral-500">
            <button onClick={onNavigateBack} className="hover:text-black">Exploration</button>
            <span>/</span>
            <button onClick={onNavigateBack} className="hover:text-black">Visualise</button>
            <span>/</span>
            <span className="text-black font-medium">{current.label} Studio Simulator</span>
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

      {/* Main Studio Viewport */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-semibold block mb-1">
              Visualise Studio
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-black font-normal">
              Spatial Transformation Simulator
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 font-light mt-1">
              Drag the interactive divider across the canvas to inspect raw property architecture vs curated wedding decoration.
            </p>
          </div>

          <button
            onClick={onAdoptSetup}
            className="inline-flex items-center space-x-2 bg-black hover:bg-neutral-800 text-white text-xs uppercase tracking-wider font-medium px-6 py-2.5 rounded-full transition-all shrink-0 self-start md:self-auto"
          >
            <span>Adopt Setup & Enquire</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Function Selector Buttons */}
        <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-1">
          {VISUALISE_FUNCTIONS.map((fn) => {
            const isActive = fn.id === activeId;
            return (
              <button
                key={fn.id}
                onClick={() => setActiveId(fn.id)}
                className={`px-5 py-3 rounded-2xl text-xs font-sans transition-all whitespace-nowrap text-left border ${
                  isActive
                    ? 'border-black bg-black text-white font-medium shadow-xs'
                    : 'border-neutral-200 text-neutral-700 hover:border-black bg-neutral-50'
                }`}
              >
                <span className="block text-xs font-semibold">{fn.label}</span>
                <span className={`text-[10px] block opacity-80 ${isActive ? 'text-neutral-300' : 'text-neutral-500'}`}>
                  {fn.tagline}
                </span>
              </button>
            );
          })}
        </div>

        {/* Large Split-Screen Comparison Canvas */}
        <div
          ref={containerRef}
          className="relative h-[440px] sm:h-[560px] lg:h-[620px] w-full select-none overflow-hidden rounded-3xl bg-black border border-neutral-300 shadow-xl"
        >
          {/* Background Layer: Transformed Wedding Setup */}
          <img
            src={current.transformedImage}
            alt={`${current.label} Wedding Setup`}
            className={`absolute inset-0 w-full h-full object-cover filter grayscale contrast-115 ${
              lightingPreset === 'starlit' ? 'brightness-75' : lightingPreset === 'sunset' ? 'brightness-95' : 'brightness-110'
            }`}
          />

          {/* Foreground Layer (Clipped): Raw Property Photo */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={current.rawImage}
              alt={`${current.venueName} Raw Venue`}
              className={`absolute inset-0 w-full h-full object-cover filter grayscale contrast-105 ${
                lightingPreset === 'starlit' ? 'brightness-75' : lightingPreset === 'sunset' ? 'brightness-95' : 'brightness-110'
              }`}
              style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%', maxWidth: 'none' }}
            />
          </div>

          {/* Split Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_16px_rgba(0,0,0,0.9)] pointer-events-none z-20"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-black border-2 border-white text-white flex items-center justify-center shadow-2xl">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
          </div>

          {/* Floating Context Badges */}
          <div className="absolute top-5 left-5 z-10 pointer-events-none">
            <span className="bg-black/85 backdrop-blur-xs text-white text-[11px] uppercase tracking-wider font-sans px-3.5 py-1.5 rounded-full font-medium border border-white/20">
              Raw Venue Grounds
            </span>
          </div>

          <div className="absolute top-5 right-5 z-10 pointer-events-none">
            <span className="bg-white/95 text-black text-[11px] uppercase tracking-wider font-sans px-3.5 py-1.5 rounded-full font-medium border border-black/20 shadow-xs">
              Decorated Function Setup
            </span>
          </div>

          {/* Bottom percentage indicator */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
            <span className="bg-black/75 backdrop-blur-xs text-neutral-300 text-[10px] uppercase tracking-widest font-sans px-3 py-1 rounded-full border border-white/10">
              {sliderPos < 50 ? `${100 - sliderPos}% Decor View` : `${sliderPos}% Raw Venue View`}
            </span>
          </div>

          {/* Slider Range Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            aria-label="Drag slider to compare raw venue with decorated setup"
          />
        </div>

        {/* Blueprint Specifications & Lighting Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-4 bg-neutral-50 p-6 rounded-2xl border border-neutral-200 space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block">
              Simulate Lighting Atmosphere
            </span>
            <div className="grid grid-cols-3 gap-2 font-sans">
              <button
                type="button"
                onClick={() => setLightingPreset('daylight')}
                className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                  lightingPreset === 'daylight'
                    ? 'border-black bg-white text-black font-medium shadow-2xs'
                    : 'border-neutral-200 text-neutral-600 hover:border-black'
                }`}
              >
                <Sun className="w-4 h-4" />
                <span className="text-xs">Daylight</span>
              </button>
              <button
                type="button"
                onClick={() => setLightingPreset('sunset')}
                className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                  lightingPreset === 'sunset'
                    ? 'border-black bg-white text-black font-medium shadow-2xs'
                    : 'border-neutral-200 text-neutral-600 hover:border-black'
                }`}
              >
                <CloudSun className="w-4 h-4" />
                <span className="text-xs">Sunset</span>
              </button>
              <button
                type="button"
                onClick={() => setLightingPreset('starlit')}
                className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                  lightingPreset === 'starlit'
                    ? 'border-black bg-white text-black font-medium shadow-2xs'
                    : 'border-neutral-200 text-neutral-600 hover:border-black'
                }`}
              >
                <Moon className="w-4 h-4" />
                <span className="text-xs">Starlit</span>
              </button>
            </div>

            <div className="pt-4 border-t border-neutral-200 text-xs text-neutral-600 font-light">
              Venue: <strong className="text-black font-medium">{current.venueName}</strong> <br />
              Property: <strong className="text-black font-medium">{current.property}</strong>
            </div>
          </div>

          <div className="md:col-span-8 bg-neutral-50 p-6 rounded-2xl border border-neutral-200 space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block">
              Curated Setup Blueprint ({current.label})
            </span>
            <h3 className="font-serif text-xl font-normal text-black">
              {current.decorTheme}
            </h3>
            <p className="text-xs text-neutral-600 font-light">
              {current.guestLayout} • {current.lightingMood}
            </p>

            <div className="pt-4 border-t border-neutral-200">
              <span className="text-xs font-semibold text-black block mb-2">
                Execution Details:
              </span>
              <ul className="space-y-2 text-xs text-neutral-700 font-light">
                {current.keyElements.map((elem, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span>{elem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
