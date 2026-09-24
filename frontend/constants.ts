import { Destination, HotelProperty, RealWeddingCase, VisualiseFunctionData } from './types';

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    tagline: 'Palaces & Heritage Citadels',
    vibe: 'Royal Heritage',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    heroSnippet: '14th-century stepwells and torchlit courtyards beneath starlit desert skies.',
    editorial: 'Restored royal citadels blending medieval Rajputana architecture with bespoke bridal suites, private plunge pools, and consecrated sacred courtyards.',
    signatureVenues: ['Royal Stepwell Amphitheater', 'Zanana Mahal Courtyard', 'Aravalli Hilltop Terraces'],
    climateWindow: 'Oct – Mar (18°C – 26°C)',
    readiness: {
      havanFireSpace: {
        title: 'Consecrated Open-Air Havan',
        detail: 'Engineered stone courtyards certified for 4-hour sacred Vedic fire rituals.',
        verified: true
      },
      baraatRoute: {
        title: 'Grand Processional Route',
        detail: '800m stone driveway for vintage motorcades and live percussion.',
        verified: true
      },
      dietarySegregation: {
        title: 'Dedicated Sattvic & Jain Kitchens',
        detail: 'Isolated culinary lines with strict zero onion/garlic pantry protocols.',
        verified: true
      },
      lateNightAcoustics: {
        title: 'Sound-Insulated Ballrooms',
        detail: 'Pillarless halls engineered for high-energy Sangeets until late hours.',
        verified: true
      },
      vipSuites: {
        title: 'Private Family Villas',
        detail: 'Expansive multi-room sanctuaries for private family rituals.',
        verified: true
      }
    }
  },
  {
    id: 'goa',
    name: 'Goa',
    tagline: 'Coastal Sanctuaries',
    vibe: 'Barefoot Luxury',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    heroSnippet: 'Oceanfront lawns fringed by palms, where sunset mandaps meet golden shores.',
    editorial: 'Seaside ease meets refined luxury. Seamlessly transition from a sun-dappled pool brunch to an oceanfront sunset Phera and starlit banquets.',
    signatureVenues: ['Horizon Beach Lawn', 'Portuguese Manor Hall', 'Palm Grove Deck'],
    climateWindow: 'Nov – Feb (24°C – 29°C)',
    readiness: {
      havanFireSpace: {
        title: 'Wind-Shielded Mandap Deck',
        detail: 'Marine-grade glass windscreens protecting sacred flames on the coast.',
        verified: true
      },
      baraatRoute: {
        title: 'Palm-Lined Entry Avenue',
        detail: 'Wide ocean-breeze boulevard welcoming open-top vintage entries.',
        verified: true
      },
      dietarySegregation: {
        title: 'Dual Regional Kitchen Galleys',
        detail: 'Pure vegetarian regional thalis alongside coastal seafood stations.',
        verified: true
      },
      lateNightAcoustics: {
        title: 'Indoor Sea Club Space',
        detail: 'Licensed indoor party venues for after-hours celebrations.',
        verified: true
      },
      vipSuites: {
        title: 'Sea-Facing Bridal Pavilions',
        detail: 'Direct beach access for private golden-hour portraits.',
        verified: true
      }
    }
  },
  {
    id: 'mahabalipuram',
    name: 'Mahabalipuram',
    tagline: 'Temple Shorelines',
    vibe: 'Dravidian Serenity',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    heroSnippet: 'Granite temple accents, lotus ponds, and sea mist along the Bay of Bengal.',
    editorial: 'Just 45 minutes from Chennai, featuring stone pillar courtyards and manicured lawns directly overlooking the Bay of Bengal.',
    signatureVenues: ['Lotus Pond Courtyard', 'Oceanfront Sagar Lawn', 'Coromandel Ballroom'],
    climateWindow: 'Dec – Feb (22°C – 28°C)',
    readiness: {
      havanFireSpace: {
        title: 'Granite Temple Kulam',
        detail: 'Stone platforms built for traditional sunrise Vedic Muhurthams.',
        verified: true
      },
      baraatRoute: {
        title: 'Bougainvillea Driveway',
        detail: 'Spacious avenue suited for ceremonial horse-drawn entries.',
        verified: true
      },
      dietarySegregation: {
        title: 'Traditional South Indian Galleys',
        detail: 'Authentic plantain leaf setups and dedicated pure vegetarian pantries.',
        verified: true
      },
      lateNightAcoustics: {
        title: 'Acoustic Pillarless Hall',
        detail: 'High-fidelity acoustic isolation for vibrant percussion and DJ sets.',
        verified: true
      },
      vipSuites: {
        title: 'Ocean Pool Pavilions',
        detail: 'Private drawing rooms for intimate Kanyadaan blessings.',
        verified: true
      }
    }
  },
  {
    id: 'kerala',
    name: 'Kerala',
    tagline: 'Verdant Backwaters',
    vibe: 'Tropical Sanctuary',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    heroSnippet: 'Spice-scented gardens and tranquil island vows wrapped in lush greenery.',
    editorial: 'For couples seeking soulfulness. Gentle backwaters, coconut groves, and heritage colonial design for an unhurried 3-day celebration.',
    signatureVenues: ['Island Mandap Pier', 'Colonial Courtyard', 'Sunset Water Amphitheater'],
    climateWindow: 'Oct – Mar (23°C – 29°C)',
    readiness: {
      havanFireSpace: {
        title: 'Waterfront Mandap Deck',
        detail: 'Timber pier with 360-degree water panoramas and fire-safe hearths.',
        verified: true
      },
      baraatRoute: {
        title: 'Ceremonial Boat Flotilla',
        detail: 'Decorated floral Shikara boats escorting the groom with Chenda Melam.',
        verified: true
      },
      dietarySegregation: {
        title: 'Royal Sadya & Global Menus',
        detail: '24-item traditional Sadya prepared alongside continental live stations.',
        verified: true
      },
      lateNightAcoustics: {
        title: 'Sound-Treated Ballrooms',
        detail: 'Indoor halls allowing late-night celebration without exterior noise.',
        verified: true
      },
      vipSuites: {
        title: 'Heritage Water Cottages',
        detail: 'Ayurvedic wellness suites for bridal entourage preparation.',
        verified: true
      }
    }
  },
  {
    id: 'ncr-corbett',
    name: 'NCR & Corbett',
    tagline: 'Grand Halls & Wilderness',
    vibe: 'Modern Grandeur',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    heroSnippet: 'From grand 1,500-guest arenas in the capital to riverside foothill retreats.',
    editorial: 'Unrivaled logistical scale with premier airport proximity, paired with peaceful riverfront foothill lodges for intimate wilderness vows.',
    signatureVenues: ['Grand Crystal Arena', 'River Kosi Meadow', 'Glasshouse Pavilion'],
    climateWindow: 'Oct – Apr (16°C – 25°C)',
    readiness: {
      havanFireSpace: {
        title: 'All-Weather Atrium',
        detail: 'Expansive climate-controlled glass pavilions open to the sky.',
        verified: true
      },
      baraatRoute: {
        title: '1-Km Dedicated Drive',
        detail: 'Unrestricted grand avenue for motorcades and brass bands.',
        verified: true
      },
      dietarySegregation: {
        title: 'Triple Isolated Kitchens',
        detail: 'Simultaneous strict Jain, Halal, and continental confectionery lines.',
        verified: true
      },
      lateNightAcoustics: {
        title: 'Soundproof Arena',
        detail: 'Fully sound-isolated environments for all-night celebrations.',
        verified: true
      },
      vipSuites: {
        title: 'Presidential Suites',
        detail: 'Dual styling vanities, private butler pantries, and lounge wings.',
        verified: true
      }
    }
  }
];

export const HOTELS_DATA: HotelProperty[] = [
  {
    id: 'six-senses-fort-barwara',
    name: 'Six Senses Fort Barwara',
    brand: 'Six Senses',
    location: 'Ranthambore, Rajasthan',
    region: 'Rajasthan',
    capacityMin: 80,
    capacityMax: 300,
    roomsCount: 48,
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    priceBand: 'Ultra Luxury',
    traditionFormats: ['Royal', 'Traditional Mandap'],
    keyHighlights: ['14th-century royal fortress', 'Ancient stepwell ceremony site', 'Dedicated guest butlers'],
    mandapType: 'Heritage Stepwell with Floating Candles',
    airportDistance: '2.5 hrs from Jaipur International Airport',
    overview: 'Sensitively transformed from a 14th-century fort originally owned by the Rajasthani Royal Family. Features two ancient palaces, two original temples, and 48 suites overlooking the Aravalli hills.',
    curatedSpaces: [
      { name: 'Barwara Stepwell Amphitheater', capacity: '180 guests', type: 'Open-Air Sacred' },
      { name: 'Zanana Palace Courtyard', capacity: '260 guests', type: 'Starlit Banquet' },
      { name: 'The Fort Ramparts Lawn', capacity: '320 guests', type: 'Panoramic Sunset' }
    ],
    culinaryHighlights: ['Farm-to-table organic Rajasthani thalis', 'Certified segregated Sattvic & Jain kitchens', 'Bespoke Sommelier-paired courtyard dinners']
  },
  {
    id: 'intercon-chennai-mahabalipuram',
    name: 'InterContinental Chennai Mahabalipuram',
    brand: 'InterContinental',
    location: 'Mahabalipuram, Tamil Nadu',
    region: 'Mahabalipuram',
    capacityMin: 150,
    capacityMax: 600,
    roomsCount: 105,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    priceBand: 'Luxury Flagship',
    traditionFormats: ['Beachside', 'Traditional Mandap'],
    keyHighlights: ['Direct beachfront lawns', 'Central lotus reflection pond', 'Grand 600-guest ballroom'],
    mandapType: 'Lotus Pond Open-Sky Mandap',
    airportDistance: '45 mins from Chennai International Airport',
    overview: 'An architectural tribute to the Dravidian temple architecture of the 7th century, set amidst 15 acres of casuarina groves fronting the Bay of Bengal.',
    curatedSpaces: [
      { name: 'Sagar Oceanfront Lawn', capacity: '600 guests', type: 'Beachfront Lawn' },
      { name: 'The Lotus Pond Courtyard', capacity: '350 guests', type: 'Sacred Water Terrace' },
      { name: 'Coromandel Grand Ballroom', capacity: '450 guests', type: 'Pillarless Indoor' }
    ],
    culinaryHighlights: ['Authentic 28-course Elai Sadya on banana leaves', 'Dedicated Coastal Seafood live grills', 'Separate pure vegetarian banquet line']
  },
  {
    id: 'crowne-plaza-resort-goa',
    name: 'Crowne Plaza Resort Goa',
    brand: 'Crowne Plaza',
    location: 'Arossim Beach, South Goa',
    region: 'Goa',
    capacityMin: 120,
    capacityMax: 650,
    roomsCount: 185,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    priceBand: 'Coastal Luxury',
    traditionFormats: ['Beachside', 'Modern Minimalist'],
    keyHighlights: ['30-acre landscaped beachfront', 'Tropical tiered lagoons', 'Private beach lawn'],
    mandapType: 'Ocean-Breeze Floral Canopy',
    airportDistance: '20 mins from Dabolim International Airport',
    overview: 'A sprawling 30-acre coastal estate along pristine white sands of Arossim, fusing Portuguese-Goan heritage with modern event infrastructure.',
    curatedSpaces: [
      { name: 'Arossim Beach Sands', capacity: '500 guests', type: 'Barefoot Beachfront' },
      { name: 'Palm Grove Meadow', capacity: '650 guests', type: 'Lawn & Palms' },
      { name: 'The Portuguese Manor Ballroom', capacity: '380 guests', type: 'Indoor Sound-Isolated' }
    ],
    culinaryHighlights: ['Goan Portuguese fusion catering', 'Midnight street-food bazaar counters', 'Multi-regional live vegetarian chaat galleys']
  },
  {
    id: 'crowne-plaza-greater-noida',
    name: 'Crowne Plaza Greater Noida',
    brand: 'Crowne Plaza',
    location: 'Delhi NCR',
    region: 'NCR / Corbett',
    capacityMin: 250,
    capacityMax: 1500,
    roomsCount: 398,
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80',
    priceBand: 'Grand Scale',
    traditionFormats: ['Royal', 'Traditional Mandap', 'Modern Minimalist'],
    keyHighlights: ['51,000 sq.ft banquet spaces', 'Pillarless mega hall', 'Dedicated satellite kitchens'],
    mandapType: 'All-Weather Glasshouse Pavilion',
    airportDistance: '60 mins from Indira Gandhi International Airport, New Delhi',
    overview: 'The largest luxury convention and celebration address in Delhi NCR, capable of hosting grand productions with ease.',
    curatedSpaces: [
      { name: 'Grand Crystal Pillarless Arena', capacity: '1,400 guests', type: 'Monumental Ballroom' },
      { name: 'Amphitheater Open Courtyard', capacity: '750 guests', type: 'Tiered Ceremony Space' },
      { name: 'Verdant Central Lawn', capacity: '1,200 guests', type: 'Open-Sky Lawn' }
    ],
    culinaryHighlights: ['Triple-isolated kitchens: Pure Jain, Halal, and Continental', '24-hour celebration catering', 'Master sweet-makers on site']
  },
  {
    id: 'crowne-plaza-kochi',
    name: 'Crowne Plaza Kochi',
    brand: 'Crowne Plaza',
    location: 'Kochi, Kerala',
    region: 'Kerala',
    capacityMin: 100,
    capacityMax: 500,
    roomsCount: 269,
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80',
    priceBand: 'Waterfront Luxury',
    traditionFormats: ['Riverside & Backwater', 'Traditional Mandap'],
    keyHighlights: ['Panoramic backwater views', 'Private boat jetty for Baraat', 'Authentic Sadya master chefs'],
    mandapType: 'Floating Backwater Island Mandap',
    airportDistance: '40 mins from Cochin International Airport',
    overview: 'Overlooking tranquil Vembanad waters with dedicated private boat jetties, ideal for water-borne baraats and soul-calming rituals.',
    curatedSpaces: [
      { name: 'Backwater Island Pier', capacity: '300 guests', type: 'Waterfront Deck' },
      { name: 'Travancore Grand Hall', capacity: '500 guests', type: 'Water-Facing Ballroom' },
      { name: 'Spice Route Garden', capacity: '250 guests', type: 'Lush Botanical' }
    ],
    culinaryHighlights: ['Royal Syrian Christian and Kerala Hindu authentic menus', 'Fresh backwater seafood live griddle', 'Traditional brass lamp high-tea']
  },
  {
    id: 'holiday-inn-resort-goa',
    name: 'Holiday Inn Resort Goa',
    brand: 'Holiday Inn Resort',
    location: 'Mobor Beach, Goa',
    region: 'Goa',
    capacityMin: 150,
    capacityMax: 550,
    roomsCount: 205,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    priceBand: 'Seaside Resort',
    traditionFormats: ['Beachside', 'Traditional Mandap'],
    keyHighlights: ['Direct Mobor beach access', 'Goan-Portuguese architecture', 'Expansive 20,000 sq.ft lawn'],
    mandapType: 'Minimalist Driftwood & Marigold Mandap',
    airportDistance: '60 mins from Dabolim International Airport',
    overview: 'Prime location at Mobor Beach with endless ocean frontage, sweeping lawns, and warm hospitality for relaxed multi-generational celebrations.',
    curatedSpaces: [
      { name: 'Mobor Beachfront Lawn', capacity: '550 guests', type: 'Ocean Lawn' },
      { name: 'The Figueiredo Ballroom', capacity: '350 guests', type: 'Indoor Pillarless' },
      { name: 'Sunset Beach Deck', capacity: '200 guests', type: 'Cocktail & Pheras' }
    ],
    culinaryHighlights: ['Beachfront BBQ and tandoor grills', 'Authentic North Indian halwai counters', 'Tropical cocktail bars']
  }
];

export const REAL_WEDDINGS_DATA: RealWeddingCase[] = [
  {
    id: 'ananya-karthik',
    couple: 'Ananya & Karthik',
    title: 'The Coromandel Confluence',
    location: 'Mahabalipuram, Tamil Nadu',
    property: 'InterContinental Chennai Mahabalipuram',
    guestCount: 380,
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
    ],
    culturalConfluence: 'Tamil Brahmin Vedic Muhurtham & Punjabi Sangeet',
    resolutionStory: 'Two parallel experiences: an alcohol-free, certified Sattvic dining wing for the sunrise Muhurtham, followed by a soundproofed glasshouse ballroom transformation for the midnight Sangeet.',
    timelineHighlights: [
      { time: '06:15 AM', ritual: 'Sunrise Muhurtham & Vedic Havan', space: 'Temple Courtyard' },
      { time: '12:30 PM', ritual: '28-Course Elai Sadya Banquet', space: 'Sagar Pavilion' },
      { time: '08:30 PM', ritual: 'Coromandel Sangeet & Live Percussion', space: 'Ballroom' }
    ],
    coupleTestimonial: '“Both our families had their heritage honored without a single logistical clash.”'
  },
  {
    id: 'rohan-elena',
    couple: 'Rohan & Elena',
    title: 'Rajputana Meets French Provence',
    location: 'Ranthambore, Rajasthan',
    property: 'Six Senses Fort Barwara',
    guestCount: 160,
    coverImage: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80'
    ],
    culturalConfluence: 'Marwari Protocol & European Minimalist Dining',
    resolutionStory: 'An understated desert-flora mandap paired with a dual-course banquet serving French seasonal plates and traditional Rajasthani dishes side by side.',
    timelineHighlights: [
      { time: '05:00 PM', ritual: 'Stepwell Candlelight Cocktails', space: 'Fort Stepwell' },
      { time: '04:30 PM', ritual: 'Sunset Pheras', space: 'Zenana Courtyard' },
      { time: '08:00 PM', ritual: 'Starlit Banquet with Folk Maestros', space: 'Palace Terrace' }
    ],
    coupleTestimonial: '“Authentic palace grandeur with effortless elegance and dietary comfort for all.”'
  },
  {
    id: 'priya-sid',
    couple: 'Priya & Siddharth',
    title: 'Barefoot Coastal Euphoria',
    location: 'Arossim Beach, Goa',
    property: 'Crowne Plaza Resort Goa',
    guestCount: 290,
    coverImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80'
    ],
    culturalConfluence: 'Gujarati Dandiya Garba & Barefoot Beach Vows',
    resolutionStory: 'An acoustically contained lawn tent for night-one Garba, transitioning to a serene ocean-facing bamboo mandap at sunset with acoustic sitar.',
    timelineHighlights: [
      { time: '07:30 PM', ritual: 'Coastal Garba & Street Bazaar', space: 'Grand Lawn' },
      { time: '10:30 AM', ritual: 'Poolside Haldi Splash', space: 'Lagoon Deck' },
      { time: '05:15 PM', ritual: 'Sunset Beach Vows & Pheras', space: 'Private Beach' }
    ],
    coupleTestimonial: '“A joyous holiday wrapped into the most romantic celebration of our lives.”'
  }
];

export const VISUALISE_FUNCTIONS: VisualiseFunctionData[] = [
  {
    id: 'wedding',
    label: 'Wedding (Pheras)',
    tagline: 'Sacred Mandap Transformation',
    venueName: 'Barwara Heritage Stepwell Amphitheater',
    property: 'Six Senses Fort Barwara, Rajasthan',
    rawImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1400&q=80',
    transformedImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80',
    decorTheme: 'Royal Vedic Mandap with Cascading Tuberose & Terracotta Diyas',
    lightingMood: 'Warm Amber Candlelight & Architectural Up-lights',
    keyElements: [
      'Floating lotus mandap on ancient stone tier',
      'Wind-shielded havan hearth certified for 4-hour rituals',
      'Pure brass bell installations and fresh marigold torans'
    ],
    guestLayout: 'Tiered stepwell seating with velvet bolsters (240 guests)'
  },
  {
    id: 'sangeet',
    label: 'Sangeet Night',
    tagline: 'High-Energy Sound & Glamour',
    venueName: 'Coromandel Grand Ballroom & Glass Atrium',
    property: 'InterContinental Chennai Mahabalipuram',
    rawImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80',
    transformedImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=80',
    decorTheme: 'Kinetic Mirror Tunnel & Starlit Ceiling Canopy',
    lightingMood: 'Concert Moving Heads & Subdued Midnight Indigo',
    keyElements: [
      'Pillarless 360-degree LED performance stage',
      'Acoustically isolated dance arena (certified up to 98dB)',
      'Dual island cocktail bars flanking the main performance deck'
    ],
    guestLayout: 'Cabaret-style lounge seating with central dance floor (450 guests)'
  },
  {
    id: 'mehendi',
    label: 'Mehendi Brunch',
    tagline: 'Sun-Drenched Garden Festivities',
    venueName: 'Arossim Tropical Palm Grove',
    property: 'Crowne Plaza Resort Goa',
    rawImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80',
    transformedImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80',
    decorTheme: 'Artisanal Block-Print Canopies & Citrus Botanical Bazaars',
    lightingMood: 'Natural Coastal Daylight & Macramé Lanterns',
    keyElements: [
      'Shaded cane cabanas for bespoke bridal henna artists',
      'Live coconut water cart & cold-pressed regional mocktail bar',
      'Acoustic folk acoustic instrumental seating'
    ],
    guestLayout: 'Bespoke low-seating bohemian floor spreads (320 guests)'
  },
  {
    id: 'cocktail',
    label: 'Cocktail Night',
    tagline: 'Twilight Chic & Jazz Lounge',
    venueName: 'Zenana Palace Torchlit Ramparts',
    property: 'Six Senses Fort Barwara, Rajasthan',
    rawImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1400&q=80',
    transformedImage: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1400&q=80',
    decorTheme: 'Monochrome Velvet Lounges with Minimalist Glass Pillars',
    lightingMood: 'Muted Flame Torches & Warm Filament Glow',
    keyElements: [
      'Elevated jazz band acoustic shell facing the valley',
      'Smoked single-malt tasting counter with bespoke ice carvings',
      'Heated outdoor braziers and stone terrace cocktail tables'
    ],
    guestLayout: 'High-top cocktail tables & intimate private pods (280 guests)'
  },
  {
    id: 'reception',
    label: 'Grand Reception',
    tagline: 'Regal Banqueting Splendor',
    venueName: 'Grand Crystal Pillarless Arena',
    property: 'Crowne Plaza Greater Noida, Delhi NCR',
    rawImage: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1400&q=80',
    transformedImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=80',
    decorTheme: 'Symphony in White & Gold Crystal Chandelier Forest',
    lightingMood: 'Architectural Pin-Spots & Champagne Perimeter Wash',
    keyElements: [
      'Curved royal presidential dining tables with brass chargers',
      'Four dedicated satellite live kitchens for multi-course service',
      'Grand orchestral acoustic platform'
    ],
    guestLayout: 'Formal round-table banquet arrangement (850 guests)'
  }
];
