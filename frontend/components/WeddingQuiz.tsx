import React, { useState } from 'react';
import { HOTELS_DATA } from '../constants';
import { HotelProperty, QuizAnswers, QuizMatchResult } from '../types';
import { ArrowLeft, ArrowRight, Check, Compass, Sparkles, RefreshCw, Users, BedDouble, HelpCircle } from 'lucide-react';

interface WeddingQuizProps {
  onOpenFullQuizPage: () => void;
  onSelectHotel: (hotelId: string) => void;
  onProceedToInquiry: (hotelName: string) => void;
}

export const WeddingQuiz: React.FC<WeddingQuizProps> = ({
  onOpenFullQuizPage,
  onSelectHotel,
  onProceedToInquiry
}) => {
  // Step index: 0 = Q1, 1 = Q2, 2 = Q3, 3 = Q4, 4 = Q5, 5 = Results
  const [currentStep, setCurrentStep] = useState<number>(0);

  const [answers, setAnswers] = useState<QuizAnswers>({
    vibe: '',
    functions: [],
    guestScale: '',
    mandapSetting: '',
    culinaryPriority: ''
  });

  // Questions definitions
  const questions = [
    {
      id: 'vibe',
      title: 'What is the guiding vision or aesthetic for your wedding?',
      subtitle: 'Select the ambiance that speaks closest to your private promise.',
      type: 'single',
      options: [
        { id: 'royal', label: 'Royal Heritage Fortress', detail: 'Centuries-old stone ramparts, torchlit courtyards, and palatial majesty.' },
        { id: 'coastal', label: 'Barefoot Coastal Sands', detail: 'Gentle ocean breezes, swaying coconut groves, and barefoot sunset vows.' },
        { id: 'temple', label: 'Dravidian Temple Serenity', detail: 'Ancient granite stone pillars, sacred lotus ponds, and calm sea mist.' },
        { id: 'backwater', label: 'Emerald Backwater Sanctuary', detail: 'Waterway Shikaras, spice-scented gardens, and unhurried tropical calm.' },
        { id: 'grand', label: 'Modern Cosmopolitan Grandeur', detail: 'Pillarless mega arenas, monumental glasshouses, and limitless scale.' }
      ]
    },
    {
      id: 'functions',
      title: 'Which key functions will form your celebration itinerary?',
      subtitle: 'Multi-select all the ceremonial events you are planning to host.',
      type: 'multi',
      options: [
        { id: 'mehendi', label: 'Mehendi & Floral High-Tea', detail: 'Daytime garden brunch, shaded cabanas, live folk music.' },
        { id: 'sangeet', label: 'High-Energy Gala Sangeet', detail: 'Acoustically insulated hall, concert staging, midnight party.' },
        { id: 'muhurtham', label: 'Auspicious Vedic Sunrise Muhurtham', detail: '4-hour certified sacred Havan fire, early morning calm.' },
        { id: 'sunset_vows', label: 'Sunset Beach / Stepwell Pheras', detail: 'Open-sky golden hour vow exchange surrounded by candles.' },
        { id: 'reception', label: 'Formal Starlit Banquet Reception', detail: 'Orchestral seating, multi-course banquet, formal address.' },
        { id: 'pool_haldi', label: 'Poolside Haldi Splash', detail: 'Vibrant marigold splashes, live dhol, relaxed luxury.' }
      ]
    },
    {
      id: 'guestScale',
      title: 'What is your target celebration guest count?',
      subtitle: 'Our properties feature tailored zoning for every scale.',
      type: 'single',
      options: [
        { id: 'intimate', label: 'Intimate Gathering (50 – 150 Guests)', detail: 'Private fortress buyout, personal butler service, exclusive villas.' },
        { id: 'mid', label: 'Mid-Sized Celebration (150 – 350 Guests)', detail: 'Spacious coastal lawns, balanced ballroom and outdoor venues.' },
        { id: 'grand', label: 'Grand Destination (350 – 650 Guests)', detail: 'Extensive room blocks, multi-venue movement, expansive stages.' },
        { id: 'mega', label: 'Monumental Royal Scale (650 – 1,500+ Guests)', detail: 'Largest pillarless hall in North India, 390+ rooms, satellite wings.' }
      ]
    },
    {
      id: 'mandapSetting',
      title: 'Where do you envision your sacred Pheras taking place?',
      subtitle: 'Select your preferred architectural setting for the mandap.',
      type: 'single',
      options: [
        { id: 'stepwell', label: 'Ancient Heritage Stepwell & Floating Diyas', detail: 'Tiered amphitheater stone seating with torchlit reflecting waters.' },
        { id: 'beach', label: 'Ocean-Breeze Floral Beach Canopy', detail: 'Engineered marine-grade glass windscreens on open beach lawns.' },
        { id: 'temple_kulam', label: 'Granite Temple Reflection Pond', detail: 'Sacred water platform modeled on historic South Indian temple kulams.' },
        { id: 'glasshouse', label: 'All-Weather Temperature-Controlled Glasshouse', detail: 'Monumental indoor-outdoor glass pavilion protected from weather.' }
      ]
    },
    {
      id: 'culinaryPriority',
      title: 'What is your primary culinary & dietary requirement?',
      subtitle: 'IHG maintains strict physical kitchen segregation standards.',
      type: 'single',
      options: [
        { id: 'jain', label: 'Physically Segregated Jain & Sattvic Kitchen', detail: 'Certified zero-root vegetable line with dedicated dishwashing.' },
        { id: 'sadya', label: 'Authentic 28-Course Plantain Leaf Sadya', detail: 'Traditional brass cooking and visiting regional master chefs.' },
        { id: 'coastal_global', label: 'Live Coastal Grills & Global Gourmet', detail: 'Fresh coastal seafood counters paired with curated international buffets.' },
        { id: 'multi_wing', label: 'Dual/Triple Parallel Kitchens', detail: 'Simultaneous strict vegetarian and non-vegetarian banquet wings.' }
      ]
    }
  ];

  // Answer selection handlers
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

  // Back button handler
  const handleGoBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Next button handler
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

  // Compute matched IHG properties based on answers
  const computeMatches = (): QuizMatchResult[] => {
    return HOTELS_DATA.map((hotel) => {
      let score = 75; // baseline compatibility
      const reasons: string[] = [];

      // Vibe matching
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

      // Guest scale matching
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

      // Mandap setting matching
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

      // Dietary matching
      if (answers.culinaryPriority === 'jain') {
        reasons.push('Features certified zero-root segregated satellite kitchen custody');
      } else if (answers.culinaryPriority === 'sadya' && hotel.region === 'Kerala') {
        reasons.push('Dedicated authentic 28-course Elai Sadya banquet masters');
      }

      // Clamp score
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

  // Check if user has answered current question to enable Next
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
    <section id="wedding-quiz" className="py-20 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-sans font-medium block mb-2">
              Bespoke Discovery
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-black font-normal mb-2">
              Take the Wedding Quiz
            </h2>
            <p className="font-sans text-neutral-600 text-sm font-light">
              Answer 5 quick questions about your celebration style, functions, and guest size. Our intelligence matches your requirements with the most aligned IHG sanctuaries.
            </p>
          </div>

          <button
            onClick={onOpenFullQuizPage}
            className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-widest bg-black text-white px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors shadow-2xs font-medium shrink-0 self-start md:self-auto"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open Dedicated Quiz Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Quiz Container Box */}
        <div className="bg-white rounded-3xl border border-neutral-300 overflow-hidden shadow-2xs p-6 sm:p-10 font-sans">
          
          {/* Progress & Navigation Header */}
          <div className="flex items-center justify-between pb-6 border-b border-neutral-200 text-xs text-neutral-500">
            <div className="flex items-center space-x-3">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={handleGoBack}
                  className="inline-flex items-center space-x-1.5 text-black hover:text-neutral-600 font-medium uppercase tracking-wider text-[11px] border border-neutral-300 px-3 py-1.5 rounded-full transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Go Back</span>
                </button>
              )}
              <span className="text-[11px] uppercase tracking-wider font-semibold text-black">
                {isResultsStep ? 'Your Sanctuary Recommendations' : `Question 0${currentStep + 1} of 05`}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              {!isResultsStep ? (
                <div className="flex space-x-1">
                  {questions.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentStep
                          ? 'w-7 bg-black'
                          : idx < currentStep
                          ? 'w-3 bg-neutral-400'
                          : 'w-3 bg-neutral-200'
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

          {/* QUESTION STEPS (0 to 4) */}
          {!isResultsStep && currentQ && (
            <div className="py-8 space-y-6 animate-fade-in">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block mb-1">
                  Step 0{currentStep + 1} • {currentQ.type === 'multi' ? 'Multi-Select Permitted' : 'Select One'}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-black mb-2">
                  {currentQ.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-light">
                  {currentQ.subtitle}
                </p>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
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
                      className={`p-4 rounded-2xl border text-left transition-all flex items-start justify-between ${
                        isSelected
                          ? 'border-black bg-black text-white shadow-xs'
                          : 'border-neutral-200 hover:border-black bg-neutral-50 text-black'
                      }`}
                    >
                      <div className="pr-3">
                        <span className="font-serif text-base font-normal block mb-1">
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

              {/* Bottom Nav Bar */}
              <div className="pt-6 border-t border-neutral-200 flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-light">
                  {currentStep === 0
                    ? 'Answer each question to unveil personalized property pairings.'
                    : 'You can go back to adjust earlier choices at any time.'}
                </span>

                <button
                  type="button"
                  disabled={!isCurrentStepAnswered()}
                  onClick={handleGoNext}
                  className={`px-7 py-3 rounded-full text-xs uppercase tracking-wider font-medium flex items-center space-x-2 transition-all ${
                    isCurrentStepAnswered()
                      ? 'bg-black hover:bg-neutral-800 text-white shadow-xs cursor-pointer'
                      : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                  }`}
                >
                  <span>{isLastQuestion ? 'Generate Recommendations' : 'Continue'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* RESULTS STEP (5) */}
          {isResultsStep && (
            <div className="py-8 space-y-8 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block mb-1">
                    Matching Engine Completed
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-black">
                    Your Curated IHG Sanctuaries
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light mt-1">
                    Ranked by alignment with your ceremonial vision, guest size, and dining protocols.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleGoBack}
                  className="inline-flex items-center space-x-1.5 text-xs text-neutral-600 hover:text-black font-medium uppercase tracking-wider self-start sm:self-auto"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Modify Answers</span>
                </button>
              </div>

              {/* Matching Properties Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {results.slice(0, 3).map((match, idx) => {
                  const { hotel, matchScore, matchReasons } = match;
                  return (
                    <div
                      key={hotel.id}
                      className="bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden flex flex-col justify-between hover:border-black transition-colors"
                    >
                      <div>
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden bg-black">
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

                        {/* Content */}
                        <div className="p-5 space-y-3">
                          <h4 className="font-serif text-lg font-normal text-black leading-snug">
                            {hotel.name}
                          </h4>

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

                          {/* Why it matches */}
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold block mb-1.5">
                              Why it matches your quiz:
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

                      {/* Actions */}
                      <div className="p-5 pt-0 grid grid-cols-2 gap-2 text-xs">
                        <button
                          type="button"
                          onClick={() => onSelectHotel(hotel.id)}
                          className="border border-neutral-300 hover:border-black text-black py-2 rounded-xl text-center font-medium uppercase tracking-wider text-[10px] transition-colors"
                        >
                          View Sanctuary
                        </button>
                        <button
                          type="button"
                          onClick={() => onProceedToInquiry(hotel.name)}
                          className="bg-black hover:bg-neutral-800 text-white py-2 rounded-xl text-center font-medium uppercase tracking-wider text-[10px] transition-colors"
                        >
                          Enquire
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* Bottom Summary Callout */}
              <div className="p-6 bg-black text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif text-xl font-normal text-white mb-1">
                    Ready to explore full banquet layout blueprints?
                  </h4>
                  <p className="text-xs text-neutral-300 font-light">
                    Our on-ground Wedding Directors will prepare formal dates and room block options based on this quiz.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onProceedToInquiry(results[0]?.hotel.name || 'Recommended Sanctuary')}
                  className="bg-white hover:bg-neutral-200 text-black text-xs uppercase tracking-wider font-medium px-6 py-2.5 rounded-full transition-colors flex items-center space-x-1.5 shrink-0"
                >
                  <span>Connect with Wedding Director</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
