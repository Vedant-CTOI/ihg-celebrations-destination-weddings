import React, { useState } from 'react';
import { InquiryFormData, UserPersona } from '../types';
import { ArrowLeft, ArrowRight, MessageSquare, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface ConversationPageProps {
  prefilledDestination?: string;
  prefilledHotel?: string;
  onNavigateBack: () => void;
  onSubmitSuccess: (data: InquiryFormData) => void;
  onOpenCharter: () => void;
}

export const ConversationPage: React.FC<ConversationPageProps> = ({
  prefilledDestination,
  prefilledHotel,
  onNavigateBack,
  onSubmitSuccess,
  onOpenCharter
}) => {
  const initialDestinations = prefilledDestination
    ? [prefilledDestination]
    : ['Rajasthan (Jaipur & Ranthambore)'];

  const [formData, setFormData] = useState<InquiryFormData>({
    primaryContactName: '',
    email: '',
    phone: '',
    decisionRole: 'Bride',
    destinations: initialDestinations,
    targetWindow: 'Nov 2025 – Feb 2026',
    guestRange: 'Mid-Sized Celebration (150 – 350 guests)',
    estimatedGuests: 250,
    ceremonyTraditions: ['North Indian Mandap'],
    priorityDietary: ['Dedicated Jain Kitchen'],
    notes: prefilledHotel ? `Inquiry initiated for ${prefilledHotel}.` : '',
    partnerName: '',
    planningAgency: '',
    coupleReference: '',
    elderAccessibilityNeeds: '',
    vendorProductionNotes: '',
    bridalStylingNeeds: '',
    baraatSpec: ''
  });

  const [submitting, setSubmitting] = useState(false);

  // Available Indian destinations for multi-select
  const destinationOptions = [
    'Rajasthan (Jaipur & Ranthambore)',
    'Goa Coastal Coastline',
    'Mahabalipuram & Coromandel',
    'Kerala Backwaters & Kochi',
    'Delhi NCR & Jim Corbett'
  ];

  // Guest count range presets
  const guestRanges = [
    { label: 'Intimate Gathering (50 – 150 guests)', defaultCount: 120 },
    { label: 'Mid-Sized Celebration (150 – 350 guests)', defaultCount: 250 },
    { label: 'Grand Destination (350 – 650 guests)', defaultCount: 450 },
    { label: 'Monumental Royal (650 – 1,500+ guests)', defaultCount: 850 }
  ];

  // Handle multi-select location toggle
  const toggleDestination = (dest: string) => {
    setFormData((prev) => {
      const exists = prev.destinations.includes(dest);
      if (exists) {
        if (prev.destinations.length === 1) return prev;
        return { ...prev, destinations: prev.destinations.filter((d) => d !== dest) };
      } else {
        return { ...prev, destinations: [...prev.destinations, dest] };
      }
    });
  };

  // Handle guest range change
  const handleRangeChange = (rangeLabel: string) => {
    const matched = guestRanges.find((r) => r.label === rangeLabel);
    setFormData((prev) => ({
      ...prev,
      guestRange: rangeLabel,
      estimatedGuests: matched ? matched.defaultCount : prev.estimatedGuests
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onSubmitSuccess(formData);
    }, 500);
  };

  const getInstantWhatsAppUrl = () => {
    const text = `Namaste IHG Celebrations,\n\nI would like to enquire:\n- Persona: ${formData.decisionRole}\n- Primary Contact: ${formData.primaryContactName || 'Family'}\n- Destinations: ${formData.destinations.join(', ')}\n- Scale: ${formData.guestRange} (~${formData.estimatedGuests} guests)\n- Window: ${formData.targetWindow}`;
    return `https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24 animate-fade-in">
      
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-neutral-200 bg-neutral-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-neutral-500">
            <button onClick={onNavigateBack} className="hover:text-black">Exploration</button>
            <span>/</span>
            <span className="text-black font-medium">Begin the Conversation</span>
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Page Header */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Bespoke Sanctuary Intake</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-tight">
            Begin the Conversation
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-2xl leading-relaxed">
            Share your preliminary celebration blueprint. Our luxury wedding directors will review your dates, dietary requirements, and room inventory before orchestrating your personalized itinerary.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-white rounded-3xl border border-neutral-300 p-6 sm:p-12 shadow-sm font-sans text-xs">
          <form onSubmit={handleSubmit} className="space-y-7">
            
            {/* 1. Describe your persona */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="font-serif text-lg text-black font-normal">
                  Describe your persona
                </label>
                <span className="text-[11px] text-neutral-400 font-light">
                  Input fields adjust based on your role
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['Bride', 'Groom', 'Parent', 'Wedding Planner'] as UserPersona[]).map((persona) => {
                  const isSelected = formData.decisionRole === persona;
                  return (
                    <button
                      type="button"
                      key={persona}
                      onClick={() => setFormData({ ...formData, decisionRole: persona })}
                      className={`py-3 px-3 rounded-xl border text-center transition-all ${
                        isSelected
                          ? 'border-black bg-black text-white font-medium shadow-2xs'
                          : 'border-neutral-200 text-neutral-700 hover:border-black bg-neutral-50'
                      }`}
                    >
                      <span className="block text-xs">{persona}</span>
                      <span className={`text-[10px] block opacity-70 ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                        {persona === 'Parent' ? 'Father / Mother' : persona === 'Wedding Planner' ? 'Agency Lead' : 'Couple'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Persona-Specific Dynamic Fields */}
            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-4 animate-fade-in">
              <div className="flex items-center space-x-2 text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>Tailored for: {formData.decisionRole}</span>
              </div>

              {/* BRIDE Specific Fields */}
              {formData.decisionRole === 'Bride' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-neutral-600 mb-1 font-medium">Bride's Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Meera Singhania"
                      value={formData.primaryContactName}
                      onChange={(e) => setFormData({ ...formData, primaryContactName: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl p-2.5 focus:outline-none focus:border-black text-xs text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-600 mb-1 font-medium">Groom / Partner's Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Siddharth Kapur"
                      value={formData.partnerName || ''}
                      onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl p-2.5 focus:outline-none focus:border-black text-xs text-black"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-neutral-600 mb-1 font-medium">Bridal Suite, Vanity & Sanctuary Privacy Preferences</label>
                    <input
                      type="text"
                      placeholder="e.g. Dual bridal dressing suite with natural daylight, private garden access for family portraits"
                      value={formData.bridalStylingNeeds || ''}
                      onChange={(e) => setFormData({ ...formData, bridalStylingNeeds: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl p-2.5 focus:outline-none focus:border-black text-xs text-black"
                    />
                  </div>
                </div>
              )}

              {/* GROOM Specific Fields */}
              {formData.decisionRole === 'Groom' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-neutral-600 mb-1 font-medium">Groom's Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Siddharth Kapur"
                      value={formData.primaryContactName}
                      onChange={(e) => setFormData({ ...formData, primaryContactName: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl p-2.5 focus:outline-none focus:border-black text-xs text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-600 mb-1 font-medium">Bride / Partner's Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Meera Singhania"
                      value={formData.partnerName || ''}
                      onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl p-2.5 focus:outline-none focus:border-black text-xs text-black"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-neutral-600 mb-1 font-medium">Baraat Procession & Arrival Protocol</label>
                    <input
                      type="text"
                      placeholder="e.g. Vintage open-top car, acoustic live brass band + dholis, 60-min processional route"
                      value={formData.baraatSpec || ''}
                      onChange={(e) => setFormData({ ...formData, baraatSpec: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl p-2.5 focus:outline-none focus:border-black text-xs text-black"
                    />
                  </div>
                </div>
              )}

              {/* PARENT Specific Fields */}
              {formData.decisionRole === 'Parent' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-neutral-600 mb-1 font-medium">Parent / Family Representative Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Singhania (Father of Bride)"
                      value={formData.primaryContactName}
                      onChange={(e) => setFormData({ ...formData, primaryContactName: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl p-2.5 focus:outline-none focus:border-black text-xs text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-600 mb-1 font-medium">Couple Being Celebrated</label>
                    <input
                      type="text"
                      placeholder="e.g. Meera & Siddharth"
                      value={formData.coupleReference || ''}
                      onChange={(e) => setFormData({ ...formData, coupleReference: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl p-2.5 focus:outline-none focus:border-black text-xs text-black"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-neutral-600 mb-1 font-medium">Elder Comfort, Golf Cart Transit & Traditional Pandit Ritual Needs</label>
                    <input
                      type="text"
                      placeholder="e.g. Step-free access for grandparents, golf buggy fleet to mandap, 05:30 AM sunrise muhurtham setup"
                      value={formData.elderAccessibilityNeeds || ''}
                      onChange={(e) => setFormData({ ...formData, elderAccessibilityNeeds: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl p-2.5 focus:outline-none focus:border-black text-xs text-black"
                    />
                  </div>
                </div>
              )}

              {/* WEDDING PLANNER Specific Fields */}
              {formData.decisionRole === 'Wedding Planner' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-neutral-600 mb-1 font-medium">Lead Wedding Planner Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sonam Verma"
                      value={formData.primaryContactName}
                      onChange={(e) => setFormData({ ...formData, primaryContactName: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl p-2.5 focus:outline-none focus:border-black text-xs text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-600 mb-1 font-medium">Planning Agency / Production Firm</label>
                    <input
                      type="text"
                      placeholder="e.g. Artisan Celebrations LLP"
                      value={formData.planningAgency || ''}
                      onChange={(e) => setFormData({ ...formData, planningAgency: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl p-2.5 focus:outline-none focus:border-black text-xs text-black"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-neutral-600 mb-1 font-medium">Client Family Reference & Production Staging Requirements</label>
                    <input
                      type="text"
                      placeholder="e.g. Singhania–Kapur Wedding; Requires 24-hr load-in for kinetic LED stage and sound isolation"
                      value={formData.vendorProductionNotes || ''}
                      onChange={(e) => setFormData({ ...formData, vendorProductionNotes: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl p-2.5 focus:outline-none focus:border-black text-xs text-black"
                    />
                  </div>
                </div>
              )}

              {/* Common Contact Fields (Phone & Email) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div>
                  <label className="block text-neutral-600 mb-1 font-medium">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-neutral-300 rounded-xl p-2.5 focus:outline-none focus:border-black text-xs text-black"
                  />
                </div>
                <div>
                  <label className="block text-neutral-600 mb-1 font-medium">Official Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-neutral-300 rounded-xl p-2.5 focus:outline-none focus:border-black text-xs text-black"
                  />
                </div>
              </div>
            </div>

            {/* 3. MULTI-SELECT LOCATIONS (Option to choose multiple locations) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="font-serif text-lg text-black font-normal">
                  Preferred Sanctuary Locations (Select Multiple)
                </label>
                <span className="text-[11px] text-neutral-400 font-light">
                  {formData.destinations.length} destination{formData.destinations.length > 1 ? 's' : ''} selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {destinationOptions.map((dest) => {
                  const isSelected = formData.destinations.includes(dest);
                  return (
                    <button
                      type="button"
                      key={dest}
                      onClick={() => toggleDestination(dest)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-black bg-black text-white shadow-2xs'
                          : 'border-neutral-200 hover:border-black bg-neutral-50 text-neutral-800'
                      }`}
                    >
                      <span className="text-xs font-medium pr-2">{dest}</span>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'border-white bg-white text-black'
                            : 'border-neutral-300 text-transparent'
                        }`}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. NO OF GUESTS (Text above number input field + 3-4 ranges as a dropdown) */}
            <div className="space-y-2">
              <label className="font-serif text-lg text-black font-normal block">
                No of Guests
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                {/* 3-4 Ranges Dropdown (8 cols) */}
                <div className="sm:col-span-8">
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                    Select Guest Scale / Range Preset:
                  </label>
                  <select
                    value={formData.guestRange}
                    onChange={(e) => handleRangeChange(e.target.value)}
                    className="w-full bg-white border border-neutral-300 rounded-xl p-2.5 focus:outline-none focus:border-black text-xs text-black cursor-pointer font-medium"
                  >
                    {guestRanges.map((range) => (
                      <option key={range.label} value={range.label}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Approximate Number input field (4 cols) */}
                <div className="sm:col-span-4">
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                    Approximate Attendees:
                  </label>
                  <input
                    type="number"
                    min="25"
                    max="2000"
                    placeholder="Guest Count"
                    value={formData.estimatedGuests}
                    onChange={(e) => setFormData({ ...formData, estimatedGuests: Number(e.target.value) })}
                    className="w-full bg-white border border-neutral-300 rounded-xl p-2.5 focus:outline-none focus:border-black text-xs text-black font-medium"
                  />
                </div>
              </div>
            </div>

            {/* 5. Target Celebration Window */}
            <div>
              <label className="font-serif text-lg text-black font-normal block mb-1.5">
                Target Celebration Window
              </label>
              <select
                value={formData.targetWindow}
                onChange={(e) => setFormData({ ...formData, targetWindow: e.target.value })}
                className="w-full border border-neutral-300 rounded-xl p-2.5 focus:outline-none focus:border-black bg-white text-xs text-black cursor-pointer"
              >
                <option value="Nov 2025 – Feb 2026">Nov 2025 – Feb 2026 (Peak Auspicious Winter)</option>
                <option value="Mar 2026 – Jun 2026">Mar 2026 – Jun 2026 (Spring & Summer Royal)</option>
                <option value="Jul 2026 – Sep 2026">Jul 2026 – Sep 2026 (Monsoon Coastal Romance)</option>
                <option value="Late 2026 / 2027">Late 2026 / 2027 (Advance Buyout Reservation)</option>
              </select>
            </div>

            {/* 6. Notes & Dietary Safeguards */}
            <div>
              <label className="font-serif text-lg text-black font-normal block mb-1.5">
                Ceremony Notes & Dietary Safeguards
              </label>
              <textarea
                rows={3}
                placeholder="Share any special Pandit preferences, strict Jain kitchen mandates, or specific sacred dates you have blocked..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full border border-neutral-300 rounded-xl p-3 focus:outline-none focus:border-black resize-none text-xs text-black"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="bg-black hover:bg-neutral-800 text-white py-3.5 rounded-xl font-medium tracking-wider uppercase text-xs transition-colors flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs"
              >
                <span>{submitting ? "Submitting Inquiry..." : "Submit Inquiry to Wedding Director"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getInstantWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black text-black hover:bg-black hover:text-white py-3.5 rounded-xl font-medium tracking-wider uppercase text-xs transition-colors flex items-center justify-center space-x-1.5 text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant Connect via WhatsApp</span>
              </a>
            </div>

          </form>
        </div>

        {/* Bottom Charter Link */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={onOpenCharter}
            className="inline-flex items-center space-x-1.5 text-xs text-neutral-500 hover:text-black uppercase tracking-wider font-medium"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Read IHG Institutional Wedding & Privacy Charter</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
};
