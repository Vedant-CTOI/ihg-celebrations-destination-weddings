import React, { useState } from 'react';
import { HOTELS_DATA } from '../constants';
import { QuizAnswers, QuizMatchResult } from '../types';
import { ArrowLeft, ArrowRight, Check, Sparkles, RefreshCw, Users, BedDouble, HelpCircle, ShieldCheck } from 'lucide-react';

interface WeddingQuizPageProps {
  onNavigateBack: () => void;
  onNavigateToHotel: (hotelId: string) => void;
  onProceedToInquiry: (hotelName: string) => void;
}

export const WeddingQuizPage: React.FC<WeddingQuizPageProps> = ({
  onNavigateBack,
  onNavigateToHotel,
  onProceedToInquiry
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const [answers, setAnswers] = useState<QuizAnswers>({
    vibe: '',
    functions: [],
    guestScale: '',
    mandapSetting: '',
    culinaryPriority: ''
  });

  const questions = [
    {
      id: 'vibe',
      title: 'What is the guiding vision or aesthetic for your celebration?',
      subtitle: 'Select the architectural backdrop that captures your private promises.',
      type: 'single',
      options: [
        { id: 'royal', label: 'Royal Heritage Fortress', detail: 'Centuries-old stone ramparts, torchlit stepwells, and ancient Rajputana majesty.' },
        { id: 'coastal', label: 'Barefoot Coastal Sands', detail: 'Gentle ocean breezes, swaying palm canopies, and barefoot sunset vows.' },
        { id: 'temple', label: 'Dravidian Temple Serenity', detail: 'Ancient granite stone pillars, sacred lotus ponds, and Bay of Bengal sea mist.' },
        { id: 'backwater', label: 'Emerald Backwater Sanctuary', detail: 'Ceremonial waterway Shikaras, spice gardens, and tranquil tropical lagoons.' },
        { id: 'grand', label: 'Modern Cosmopolitan Grandeur', detail: 'Monumental pillarless arenas, climate-controlled glasshouses, and limitless scale.' }
      ]
    },
    {
      id: 'functions',
      title: 'Which ceremonies and milestones will form your celebration itinerary?',
      subtitle: 'Multi-select all the functions planned across your 2 to 4-day gathering.',
      type: 'multi',
      options: [
        { id: 'mehendi', label: 'Mehendi & Floral High-Tea', detail: 'Daytime palm grove brunch, shaded cabanas, live folk percussion.' },
        { id: 'sangeet', label: 'High-Energy Gala Sangeet', detail: 'Acoustically insulated hall (certified up to 98dB), concert staging, late curfew.' },
        { id: 'muhurtham', label: 'Auspicious Vedic Sunrise Muhurtham', detail: 'Consecrated 4-hour open-air Vedic Havan, early morning chanting.' },
        { id: 'sunset_vows', label: 'Sunset Beach / Stepwell Pheras', detail: 'Open-sky golden hour vow exchange surrounded by candlelight.' },
        { id: 'reception', label: 'Formal Starlit Banquet Reception', detail: 'Orchestral seating, multi-course banquet, formal addresses.' },
        { id: 'pool_haldi', label: 'Poolside Haldi Splash', detail: 'Vibrant marigold splashes, live dholis, relaxed poolside luxury.' }
      ]
    },
    {
      id: 'guestScale',
      title: 'What is your target celebration guest count?',
      subtitle: 'IHG sanctuaries provide zoned guest wings and isolated privacy.',
      type: 'single',
      options: [
        { id: 'intimate', label: 'Intimate Gathering (50 – 150 Guests)', detail: 'Private palace buyout, personalized butler service, private plunge pools.' },
        { id: 'mid', label: 'Mid-Sized Celebration (150 – 350 Guests)', detail: 'Expansive coastal lawns, balanced ballroom and outdoor venues.' },
        { id: 'grand', label: 'Grand Destination (350 – 650 Guests)', detail: 'Extensive room blocks, multi-venue flow, expansive staging.' },
        { id: 'mega', label: 'Monumental Royal Scale (650 – 1,500+ Guests)', detail: 'North India’s largest pillarless hall, 390+ rooms, satellite culinary wings.' }
      ]
    },
    {
      id: 'mandapSetting',
      title: 'Where do you envision your sacred Pheras taking place?',
      subtitle: 'Select the ceremonial altar that anchors your sacred vows.',
      type: 'single',
      options: [
        { id: 'stepwell', label: 'Ancient Heritage Stepwell & Floating Diyas', detail: 'Tiered amphitheater stone seating with torchlit reflecting waters.' },
        { id: 'beach', label: 'Ocean-Breeze Floral Beach Canopy', detail: 'Engineered marine-grade glass windscreens on open beach lawns.' },
        { id: 'temple_kulam', label: 'Granite Temple Reflection Pond', detail: 'Sacred water platform modeled on historic South Indian temple kulams.' },
        { id: 'glasshouse', label: 'All-Weather Temperature-Controlled Glasshouse', detail: 'Monumental indoor-outdoor glass pavilion protected from climate shifts.' }
      ]
    },
    {
      id: 'culinaryPriority',
      title: 'What is your primary culinary & dietary requirement?',
      subtitle: 'Certified chain-of-custody kitchens across all Indian sanctuaries.',
      type: 'single',
      options: [
        { id: 'jain', label: 'Physically Segregated Jain & Sattvic Kitchen', detail: 'Certified zero-root vegetable line with dedicated dishwashing.' },
        { id: 'sadya', label: 'Authentic 28-Course Plantain Leaf Sadya', detail: 'Traditional brass cooking and visiting regional master chefs.' },
        { id: 'coastal_global', label: 'Live Coastal Grills & Global Gourmet', detail: 'Fresh coastal seafood counters paired with curated international buffets.' },
        { id: 'multi_wing', label: 'Dual/Triple Parallel Kitchens', detail: 'Simultaneous strict vegetarian and non-vegetarian banquet wings.' }
      ]
    }
  ];

  const handleSelectSingle = (key: keyof QuizAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleToggleMulti = (value: string) => {
    setAnswers((prev) => {
      const exists = prev.functions.includes(value);
      const updated = exists
        ? prev.functions.filter((f) => f !== value)
        : [...prev.functions, value];
      return { ...prev, functions: updated };
    });
  };

  const handleGoBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      onNavigateBack();
    }
  };

  const handleGoNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleRestart = () => {
    setAnswers({
      vibe: '',
      functions: [],
      guestScale: '',
      mandapSetting: '',
      culinaryPriority: ''
    });
    setCurrentStep(0);
  };

  const computeMatches = (): QuizMatchResult[] => {
    return HOTELS_DATA.map((hotel) => {
      let score = 75;
      const reasons: string[] = [];

      if (answers.vibe === 'royal' && hotel.region === 'Rajasthan') {
        score += 15;
        reasons.push('Restored 14th-century fortress architecture matches your royal vision');
      } else if (answers.vibe === 'coastal' && hotel.region === 'Goa') {
        score += 15;
        reasons.push('Direct private beachfront lawn matches your barefoot coastal preference');
      } else if (answers.vibe === 'temple' && hotel.region === 'Mahabalipuram') {
        score += 15;
        reasons.push('Lotus pond courtyard and Dravidian temple pillars echo your serene vision');
      } else if (answers.vibe === 'backwater' && hotel.region === 'Kerala') {
        score += 15;
        reasons.push('Tranquil backwater island pier aligns with your intimate water vows');
      } else if (answers.vibe === 'grand' && hotel.region === 'NCR / Corbett') {
        score += 15;
        reasons.push('Monumental 51,000 sq.ft pillarless halls fit your grand scale perfectly');
      }

      if (answers.guestScale === 'intimate' && hotel.capacityMin <= 100) {
        score += 10;
        reasons.push(`Tailored buyout options for ${hotel.capacityMin}–${hotel.capacityMax} guests`);
      } else if (answers.guestScale === 'mid' && hotel.capacityMax >= 300) {
        score += 10;
        reasons.push(`Optimal spatial sizing for up to ${hotel.capacityMax} attendees`);
      } else if (answers.guestScale === 'grand' && hotel.capacityMax >= 550) {
        score += 10;
        reasons.push(`Ample capacity for grand gatherings of ${hotel.capacityMax} guests`);
      } else if (answers.guestScale === 'mega' && hotel.capacityMax >= 1000) {
        score += 15;
        reasons.push(`North India's premier high-capacity venue accommodating ${hotel.capacityMax} guests`);
      }

      if (answers.mandapSetting === 'stepwell' && hotel.mandapType.toLowerCase().includes('stepwell')) {
        score += 10;
        reasons.push(`Signature setting: ${hotel.mandapType}`);
      } else if (answers.mandapSetting === 'beach' && hotel.mandapType.toLowerCase().includes('beach')) {
        score += 10;
        reasons.push(`Signature setting: ${hotel.mandapType}`);
      } else if (answers.mandapSetting === 'temple_kulam' && hotel.mandapType.toLowerCase().includes('lotus')) {
        score += 10;
        reasons.push(`Signature setting: ${hotel.mandapType}`);
      }

      if (answers.culinaryPriority === 'jain') {
        reasons.push('Features certified zero-root segregated satellite kitchen custody');
      } else if (answers.culinaryPriority === 'sadya' && hotel.region === 'Kerala') {
        reasons.push('Dedicated authentic 28-course Elai Sadya banquet masters');
      }

      const finalScore = Math.min(score, 99);
      return {
        hotel,
        matchScore: finalScore,
        matchReasons: reasons.slice(0, 3)
      };
    }).sort((a, b) => b.matchScore - a.matchScore);
  };

  const currentQ = questions[currentStep];
  const isLastQuestion = currentStep === questions.length - 1;
  const isResultsStep = currentStep === questions.length;
  const results = isResultsStep ? computeMatches() : [];

  const isCurrentStepAnswered = () => {
    if (!currentQ) return true;
    if (currentQ.id === 'vibe') return !!answers.vibe;
    if (currentQ.id === 'functions') return answers.functions.length > 0;
    if (currentQ.id === 'guestScale') return !!answers.guestScale;
    if (currentQ.id === 'mandapSetting') return !!answers.mandapSetting;
    if (currentQ.id === 'culinaryPriority') return !!answers.culinaryPriority;
    return false;
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24 animate-fade-in">
      
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-neutral-200 bg-neutral-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-neutral-500">
            <button onClick={onNavigateBack} className="hover:text-black">Exploration</button>
            <span>/</span>
            <span className="text-black font-medium">Take the Wedding Quiz</span>
          </div>

          <button
            onClick={onNavigateBack}
            className="inline-flex items-center space-x-1 text-black hover:text-neutral-600 font-medium uppercase tracking-wider text-[11px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Exploration</span>
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Page Title & Context */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Curated Sanctuary Intelligence</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-tight">
            Take the Wedding Quiz
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-2xl leading-relaxed">
            Answer 5 questions to pinpoint the most compatible IHG destination sanctuaries for your celebration. You can step backward or adjust your answers at any point.
          </p>
        </div>

        {/* Wizard Box */}
        <div className="bg-white rounded-3xl border border-neutral-300 p-6 sm:p-12 shadow-sm">
          
          {/* Progress Header */}
          <div className="flex items-center justify-between pb-6 border-b border-neutral-200 text-xs">
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={handleGoBack}
                className="inline-flex items-center space-x-1.5 text-black hover:text-neutral-600 font-medium uppercase tracking-wider text-[11px] border border-neutral-300 px-3 py-1.5 rounded-full transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{currentStep === 0 ? 'Back to Portal' : 'Go Back'}</span>
              </button>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-black">
                {isResultsStep ? 'Recommendation Results' : `Question 0${currentStep + 1} of 05`}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              {!isResultsStep ? (
                <div className="flex space-x-1.5">
                  {questions.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentStep
                          ? 'w-8 bg-black'
                          : idx < currentStep
                          ? 'w-3.5 bg-neutral-400'
                          : 'w-3.5 bg-neutral-200'
                      }`}
                    />
                  ))}
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex items-center space-x-1 text-neutral-600 hover:text-black font-medium text-[11px] uppercase tracking-wider"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Retake Quiz</span>
                </button>
              )}
            </div>
          </div>

          {/* ACTIVE QUESTION STEP */}
          {!isResultsStep && currentQ && (
            <div className="py-8 space-y-8 animate-fade-in">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block mb-1">
                  Question 0{currentStep + 1} • {currentQ.type === 'multi' ? 'Multi-Select Multiple' : 'Single Selection'}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-black mb-2">
                  {currentQ.title}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 font-light">
                  {currentQ.subtitle}
                </p>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentQ.options.map((opt) => {
                  const isSelected =
                    currentQ.type === 'single'
                      ? answers[currentQ.id as keyof QuizAnswers] === opt.id
                      : answers.functions.includes(opt.id);

                  return (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => {
                        if (currentQ.type === 'single') {
                          handleSelectSingle(currentQ.id as keyof QuizAnswers, opt.id);
                        } else {
                          handleToggleMulti(opt.id);
                        }
                      }}
                      className={`p-5 rounded-2xl border text-left transition-all flex items-start justify-between ${
                        isSelected
                          ? 'border-black bg-black text-white shadow-xs'
                          : 'border-neutral-200 hover:border-black bg-neutral-50 text-black'
                      }`}
                    >
                      <div className="pr-3">
                        <span className="font-serif text-lg font-normal block mb-1">
                          {opt.label}
                        </span>
                        <span className={`text-xs block font-light leading-relaxed ${isSelected ? 'text-neutral-300' : 'text-neutral-600'}`}>
                          {opt.detail}
                        </span>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected
                            ? 'border-white bg-white text-black'
                            : 'border-neutral-300 text-transparent'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Step Navigation Bar */}
              <div className="pt-8 border-t border-neutral-200 flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-light">
                  Step {currentStep + 1} of 5 • You can go back at any point.
                </span>

                <button
                  type="button"
                  disabled={!isCurrentStepAnswered()}
                  onClick={handleGoNext}
                  className={`px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-medium flex items-center space-x-2 transition-all ${
                    isCurrentStepAnswered()
                      ? 'bg-black hover:bg-neutral-800 text-white shadow-xs cursor-pointer'
                      : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                  }`}
                >
                  <span>{isLastQuestion ? 'View Matched Sanctuaries' : 'Proceed to Next'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* RESULTS VIEW */}
          {isResultsStep && (
            <div className="py-8 space-y-10 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block mb-1">
                    Quiz Evaluation Complete
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-normal text-black">
                    Your Tailored Property Suggestions
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light mt-1">
                    Matched against your preferred ceremonial format, function timeline, and guest scale.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleGoBack}
                  className="inline-flex items-center space-x-1.5 text-xs text-neutral-600 hover:text-black font-medium uppercase tracking-wider self-start sm:self-auto"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Adjust Answers</span>
                </button>
              </div>

              {/* Matched Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {results.slice(0, 3).map((match, idx) => {
                  const { hotel, matchScore, matchReasons } = match;
                  return (
                    <div
                      key={hotel.id}
                      className="bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden flex flex-col justify-between hover:border-black transition-colors"
                    >
                      <div>
                        <div className="relative h-52 overflow-hidden bg-black">
                          <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="w-full h-full object-cover filter grayscale contrast-110"
                          />
                          <div className="absolute top-3 left-3 bg-white text-black text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                            #{idx + 1} Best Match • {matchScore}%
                          </div>
                          <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                            <span className="bg-black/80 px-2 py-0.5 rounded text-[10px] uppercase">
                              {hotel.region}
                            </span>
                          </div>
                        </div>

                        <div className="p-5 space-y-3">
                          <h3 className="font-serif text-xl font-normal text-black leading-snug">
                            {hotel.name}
                          </h3>

                          <div className="flex items-center space-x-3 text-xs text-neutral-600 pb-2 border-b border-neutral-200">
                            <span className="flex items-center space-x-1">
                              <Users className="w-3.5 h-3.5 text-black" />
                              <span>{hotel.capacityMin}–{hotel.capacityMax}</span>
                            </span>
                            <span>•</span>
                            <span className="flex items-center space-x-1">
                              <BedDouble className="w-3.5 h-3.5 text-black" />
                              <span>{hotel.roomsCount} Keys</span>
                            </span>
                          </div>

                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold block mb-1.5">
                              Why it matches your wedding:
                            </span>
                            <ul className="space-y-1.5 text-xs text-neutral-700 font-light">
                              {matchReasons.map((reason, i) => (
                                <li key={i} className="flex items-start space-x-1.5">
                                  <Check className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                                  <span>{reason}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 pt-0 grid grid-cols-2 gap-2 text-xs">
                        <button
                          type="button"
                          onClick={() => onNavigateToHotel(hotel.id)}
                          className="border border-neutral-300 hover:border-black text-black py-2.5 rounded-xl text-center font-medium uppercase tracking-wider text-[10px] transition-colors"
                        >
                          View Sanctuary
                        </button>
                        <button
                          type="button"
                          onClick={() => onProceedToInquiry(hotel.name)}
                          className="bg-black hover:bg-neutral-800 text-white py-2.5 rounded-xl text-center font-medium uppercase tracking-wider text-[10px] transition-colors"
                        >
                          Enquire
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* Callout Action */}
              <div className="p-8 bg-black text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-white mb-1">
                    Connect with an on-ground Luxury Wedding Director
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light">
                    We will share bespoke banquet floorplans and room inventory corresponding to your quiz answers.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onProceedToInquiry(results[0]?.hotel.name || 'Recommended Sanctuary')}
                  className="bg-white hover:bg-neutral-200 text-black text-xs uppercase tracking-wider font-medium px-8 py-3.5 rounded-full transition-colors flex items-center space-x-2 shrink-0"
                >
                  <span>Inquire with These Choices</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};
