import React, { useState, useRef } from 'react';
import { VISUALISE_FUNCTIONS } from '../constants';
import { VisualiseFunctionData, WeddingFunctionId } from '../types';
import { X, SlidersHorizontal, Check, ArrowRight, Sparkles, Sun, Moon, CloudSun, Eye } from 'lucide-react';

interface VisualiseStudioModalProps {
  isOpen: boolean;
  initialFunctionId?: WeddingFunctionId;
  onClose: () => void;
  onAdoptSetup: () => void;
}

export const VisualiseStudioModal: React.FC<VisualiseStudioModalProps> = ({
  isOpen,
  initialFunctionId = 'wedding',
  onClose,
  onAdoptSetup
}) => {
  const [activeId, setActiveId] = useState<WeddingFunctionId>(initialFunctionId);
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [lightingPreset, setLightingPreset] = useState<'sunset' | 'starlit' | 'daylight'>('sunset');
  const containerRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const current: VisualiseFunctionData =
    VISUALISE_FUNCTIONS.find((f) => f.id === activeId) || VISUALISE_FUNCTIONS[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-6 transition-opacity animate-fade-in font-sans">
      <div 
        className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto border border-neutral-300 shadow-2xl flex flex-col justify-between"
        role="dialog"
        aria-modal="true"
        aria-label="Visualise Your Wedding Studio"
      >
        
        {/* Studio Top Navigation Bar */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between sticky top-0 bg-white z-40">
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-serif text-lg text-black font-normal tracking-wide">
                Visualise Studio
              </span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded font-medium">
                IHG Curation Simulator
              </span>
            </div>
            <p className="text-xs text-neutral-500 font-light mt-0.5">
              Inspect setup transformations across all ceremonial milestones
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-600 hover:text-black transition-colors"
            aria-label="Close Studio"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Studio Body */}
        <div className="p-6 space-y-6">
          
          {/* Function Selector Buttons */}
          <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-1">
            {VISUALISE_FUNCTIONS.map((fn) => {
              const isActive = fn.id === activeId;
              return (
                <button
                  key={fn.id}
                  onClick={() => setActiveId(fn.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-sans transition-all whitespace-nowrap text-left border ${
                    isActive
                      ? 'border-black bg-black text-white font-medium shadow-xs'
                      : 'border-neutral-200 text-neutral-700 hover:border-black bg-neutral-50'
                  }`}
                >
                  <span className="block text-[11px] font-semibold">{fn.label}</span>
                  <span className={`text-[10px] block opacity-80 ${isActive ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    {fn.tagline}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Split-Screen Comparison Canvas */}
          <div
            ref={containerRef}
            className="relative h-[360px] sm:h-[460px] w-full select-none overflow-hidden rounded-2xl bg-black border border-neutral-300"
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
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.9)] pointer-events-none z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-2 border-white text-white flex items-center justify-center shadow-lg">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
            </div>

            {/* Floating Context Badges */}
            <div className="absolute top-4 left-4 z-10 pointer-events-none">
              <span className="bg-black/85 backdrop-blur-xs text-white text-[10px] uppercase tracking-wider font-sans px-3 py-1 rounded-full font-medium border border-white/20">
                Raw Venue Grounds
              </span>
            </div>

            <div className="absolute top-4 right-4 z-10 pointer-events-none">
              <span className="bg-white/95 text-black text-[10px] uppercase tracking-wider font-sans px-3 py-1 rounded-full font-medium border border-black/20 shadow-xs">
                Decorated Function Setup
              </span>
            </div>

            {/* Bottom percentage indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
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

          {/* Lighting Mood Simulators & Function Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Lighting Tone Selector */}
            <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 text-xs">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block mb-2">
                Simulate Lighting Mood
              </span>
              <div className="grid grid-cols-3 gap-1.5 font-sans">
                <button
                  type="button"
                  onClick={() => setLightingPreset('daylight')}
                  className={`p-2 rounded-lg border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                    lightingPreset === 'daylight'
                      ? 'border-black bg-white text-black font-medium shadow-2xs'
                      : 'border-neutral-200 text-neutral-600 hover:border-black'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span className="text-[10px]">Daylight</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLightingPreset('sunset')}
                  className={`p-2 rounded-lg border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                    lightingPreset === 'sunset'
                      ? 'border-black bg-white text-black font-medium shadow-2xs'
                      : 'border-neutral-200 text-neutral-600 hover:border-black'
                  }`}
                >
                  <CloudSun className="w-3.5 h-3.5" />
                  <span className="text-[10px]">Sunset</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLightingPreset('starlit')}
                  className={`p-2 rounded-lg border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                    lightingPreset === 'starlit'
                      ? 'border-black bg-white text-black font-medium shadow-2xs'
                      : 'border-neutral-200 text-neutral-600 hover:border-black'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span className="text-[10px]">Starlit</span>
                </button>
              </div>
            </div>

            {/* Key Blueprint Elements */}
            <div className="md:col-span-2 bg-neutral-50 p-4 rounded-xl border border-neutral-200 text-xs">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block mb-2">
                Curated Setup Blueprint ({current.label})
              </span>
              <ul className="space-y-1.5 text-neutral-700 font-light">
                {current.keyElements.map((elem, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                    <span>{elem}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Studio Bottom Action Bar */}
        <div className="p-6 border-t border-neutral-200 bg-neutral-50 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-40">
          <div>
            <div className="text-xs font-semibold text-black">
              Venue: {current.venueName}
            </div>
            <div className="text-[11px] text-neutral-500 font-light">
              {current.property}
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none border border-neutral-300 hover:border-black text-black text-xs uppercase tracking-wider font-medium px-5 py-2.5 rounded-full transition-colors"
            >
              Close Studio
            </button>
            <button
              onClick={() => {
                onAdoptSetup();
                onClose();
              }}
              className="flex-1 sm:flex-none bg-black hover:bg-neutral-800 text-white text-xs uppercase tracking-wider font-medium px-6 py-2.5 rounded-full transition-all flex items-center justify-center space-x-2 shadow-sm"
            >
              <span>Adopt Setup & Enquire</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
