import React, { useState, useRef } from 'react';
import { VISUALISE_FUNCTIONS } from '../constants';
import { VisualiseFunctionData, WeddingFunctionId } from '../types';
import { Sparkles, SlidersHorizontal, ArrowRight, Layers, Eye } from 'lucide-react';

interface VisualiseWeddingProps {
  onOpenStudio: (fnId?: WeddingFunctionId) => void;
}

export const VisualiseWedding: React.FC<VisualiseWeddingProps> = ({ onOpenStudio }) => {
  const [activeFunctionId, setActiveFunctionId] = useState<WeddingFunctionId>('wedding');
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 - 100
  const containerRef = useRef<HTMLDivElement>(null);

  const activeData: VisualiseFunctionData =
    VISUALISE_FUNCTIONS.find((f) => f.id === activeFunctionId) || VISUALISE_FUNCTIONS[0];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section id="visualise" className="py-20 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-sans font-medium block mb-2">
              Spatial Immersion
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-black font-normal mb-2">
              Visualise Your Wedding
            </h2>
            <p className="font-sans text-neutral-600 text-sm font-light">
              Experience the architectural transformation. Drag the slider to witness raw IHG sanctuary grounds elevate into curated ceremonial stages.
            </p>
          </div>

          {/* Deep-dive CTA trigger */}
          <button
            onClick={() => onOpenStudio(activeFunctionId)}
            className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-widest bg-black text-white px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors shadow-2xs font-medium shrink-0"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Explore Studio in Detail</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Wedding Function Selector Tabs */}
        <div className="flex space-x-2 mb-8 overflow-x-auto no-scrollbar pb-1">
          {VISUALISE_FUNCTIONS.map((fn) => {
            const isActive = fn.id === activeFunctionId;
            return (
              <button
                key={fn.id}
                onClick={() => setActiveFunctionId(fn.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-sans transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-black text-white font-medium shadow-2xs'
                    : 'text-neutral-600 hover:text-black bg-white border border-neutral-300'
                }`}
              >
                {fn.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Comparison Card */}
        <div className="bg-white rounded-2xl border border-neutral-300 overflow-hidden shadow-2xs">
          
          {/* Top Venue Spec Bar */}
          <div className="px-6 py-4 border-b border-neutral-200 flex flex-wrap items-center justify-between text-xs font-sans gap-2">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold bg-neutral-100 text-black px-2 py-0.5 rounded">
                {activeData.label}
              </span>
              <span className="font-serif text-sm font-normal text-black">
                {activeData.venueName}
              </span>
            </div>
            <div className="text-[11px] text-neutral-500 font-light">
              {activeData.property}
            </div>
          </div>

          {/* Visual Transformation Frame (Split Slider View) */}
          <div
            ref={containerRef}
            className="relative h-[380px] sm:h-[480px] w-full select-none overflow-hidden bg-black"
          >
            {/* Background Layer: Transformed Wedding Setup */}
            <img
              src={activeData.transformedImage}
              alt={`${activeData.label} Wedding Decoration`}
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-115"
            />

            {/* Foreground Layer (Clipped): Raw Sanctuary Property Picture */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={activeData.rawImage}
                alt={`${activeData.venueName} Raw Architecture`}
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-105"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%', maxWidth: 'none' }}
              />
            </div>

            {/* Divider Line & Draggable Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)] pointer-events-none z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-black border-2 border-white text-white flex items-center justify-center shadow-md">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
            </div>

            {/* Labels on opposite sides */}
            <div className="absolute top-4 left-4 z-10 pointer-events-none">
              <span className="bg-black/80 backdrop-blur-xs text-white text-[10px] uppercase tracking-wider font-sans px-3 py-1 rounded-full font-medium border border-white/20">
                Raw Sanctuary Architecture
              </span>
            </div>

            <div className="absolute top-4 right-4 z-10 pointer-events-none">
              <span className="bg-white/95 text-black text-[10px] uppercase tracking-wider font-sans px-3 py-1 rounded-full font-medium border border-black/20 shadow-xs">
                Transformed Wedding Setup
              </span>
            </div>

            {/* Slider Input overlay spanning entire container */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Drag to compare raw sanctuary vs wedding decoration"
            />
          </div>

          {/* Interactive Scrub Bar & Function Details */}
          <div className="p-6 sm:p-8 bg-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-sans font-semibold block mb-1">
                Decor Curation
              </span>
              <h4 className="font-serif text-lg font-normal text-black mb-1.5">
                {activeData.decorTheme}
              </h4>
              <p className="text-xs text-neutral-600 font-sans font-light leading-relaxed">
                {activeData.guestLayout} • {activeData.lightingMood}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex flex-col text-right text-[11px] font-sans text-neutral-500">
                <span>Drag slider across canvas</span>
                <span className="font-medium text-black">Slide left or right</span>
              </div>
              <button
                onClick={() => onOpenStudio(activeFunctionId)}
                className="bg-neutral-100 hover:bg-black hover:text-white text-black border border-neutral-300 text-xs font-sans uppercase tracking-wider font-medium px-5 py-2.5 rounded-full transition-all flex items-center space-x-1.5"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Launch Full Studio</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
