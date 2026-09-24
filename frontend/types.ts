export type Perspective = 'couple' | 'family';

export interface ReadinessItem {
  title: string;
  detail: string;
  verified: boolean;
}

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  vibe: string;
  image: string;
  heroSnippet: string;
  editorial: string;
  signatureVenues: string[];
  climateWindow: string;
  readiness: {
    havanFireSpace: ReadinessItem;
    baraatRoute: ReadinessItem;
    dietarySegregation: ReadinessItem;
    lateNightAcoustics: ReadinessItem;
    vipSuites: ReadinessItem;
  };
}

export type CeremonyFormat = 'Royal' | 'Beachside' | 'Traditional Mandap' | 'Riverside & Backwater' | 'Modern Minimalist';

export interface HotelProperty {
  id: string;
  name: string;
  brand: 'Six Senses' | 'InterContinental' | 'Crowne Plaza' | 'voco' | 'Holiday Inn Resort';
  location: string;
  region: 'Rajasthan' | 'Goa' | 'Mahabalipuram' | 'Kerala' | 'NCR / Corbett';
  capacityMin: number;
  capacityMax: number;
  roomsCount: number;
  image: string;
  priceBand: string;
  traditionFormats: CeremonyFormat[];
  keyHighlights: string[];
  mandapType: string;
  curatedSpaces?: { name: string; capacity: string; type: string }[];
  culinaryHighlights?: string[];
  airportDistance?: string;
  overview?: string;
}

export interface RealWeddingCase {
  id: string;
  couple: string;
  title: string;
  location: string;
  property: string;
  guestCount: number;
  coverImage: string;
  gallery: string[];
  culturalConfluence: string;
  resolutionStory: string;
  timelineHighlights: { time: string; ritual: string; space: string }[];
  coupleTestimonial: string;
}

export type WeddingFunctionId = 'mehendi' | 'sangeet' | 'wedding' | 'reception' | 'cocktail';

export interface VisualiseFunctionData {
  id: WeddingFunctionId;
  label: string;
  tagline: string;
  venueName: string;
  property: string;
  rawImage: string;
  transformedImage: string;
  decorTheme: string;
  lightingMood: string;
  keyElements: string[];
  guestLayout: string;
}

export type UserPersona = 'Bride' | 'Groom' | 'Parent' | 'Wedding Planner';

export interface InquiryFormData {
  primaryContactName: string;
  email: string;
  phone: string;
  decisionRole: UserPersona;
  destinations: string[]; // Multiple locations selection
  targetWindow: string;
  guestRange: string;     // Dropdown range
  estimatedGuests: number;
  ceremonyTraditions: string[];
  priorityDietary: string[];
  notes: string;
  // Persona-specific fields:
  partnerName?: string;
  planningAgency?: string;
  coupleReference?: string;
  elderAccessibilityNeeds?: string;
  vendorProductionNotes?: string;
  bridalStylingNeeds?: string;
  baraatSpec?: string;
}

export interface QuizAnswers {
  vibe: string;
  functions: string[];
  guestScale: string;
  mandapSetting: string;
  culinaryPriority: string;
}

export interface QuizMatchResult {
  hotel: HotelProperty;
  matchScore: number;
  matchReasons: string[];
}

export type PageView =
  | { type: 'home' }
  | { type: 'destination-detail'; destinationId: string }
  | { type: 'hotel-detail'; hotelId: string }
  | { type: 'story-detail'; storyId: string }
  | { type: 'visualise-studio'; functionId?: WeddingFunctionId }
  | { type: 'wedding-quiz' }
  | { type: 'conversation'; prefilledDestination?: string; prefilledHotel?: string }
  | { type: 'planning-charter' }
  | { type: 'confirmation'; data: InquiryFormData };
