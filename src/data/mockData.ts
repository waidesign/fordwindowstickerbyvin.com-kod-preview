export interface StickerOption {
  code?: string;
  name: string;
  price: number;
}

export interface SampleSticker {
  id: string;
  vin: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  engine: string;
  transmission: string;
  exteriorColor: string;
  interiorColor: string;
  wheelbase: string;
  baseMsrp: number;
  options: StickerOption[];
  destinationCharge: number;
  totalMsrp: number;
  cityMpg: number;
  hwyMpg: number;
  combMpg: number;
  annualFuelCost: number;
  standardEquipment: {
    exterior: string[];
    interior: string[];
    functional: string[];
    safety: string[];
  };
  safetyRatings: {
    overall: number;
    frontal: number;
    side: number;
    rollover: number;
  };
}

export const SAMPLE_STICKERS: Record<string, SampleSticker> = {
  '1FTFW1E85MFA12345': {
    id: 'f150-2021',
    vin: '1FTFW1E85MFA12345',
    year: 2021,
    make: 'FORD',
    model: 'F-150 4X4 SUPERCREW',
    trim: 'XLT 145" WHEELBASE',
    engine: '3.5L V6 ECOBOOST ENGINE',
    transmission: 'ELEC 10-SPEED AUTO W/TOW M',
    exteriorColor: 'AGATE BLACK METALLIC',
    interiorColor: 'DARK SLATE CLOTH 40/20/40',
    wheelbase: '145 INCH',
    baseMsrp: 43805,
    options: [
      { code: '302A', name: 'EQUIPMENT GROUP 302A (XLT HIGH CHROME/LUXURY)', price: 5730 },
      { code: '998', name: '3.5L V6 ECOBOOST ENGINE', price: 2595 },
      { code: 'XL3', name: '3.55 ELECTRONIC LOCK RR AXLE', price: 470 },
      { code: '43V', name: 'TWIN PANEL MOONROOF', price: 1495 },
      { code: '53A', name: 'MAX TRAILER TOW PACKAGE (INTEGRATED BRAKE CONTROLLER)', price: 1350 },
      { code: '55A', name: 'FX4 OFF-ROAD PACKAGE (SKID PLATES, HILL DESCENT)', price: 1005 },
      { code: '64F', name: '20" CHROME-LIKE PVD WHEELS', price: 1395 },
      { code: '63T', name: 'TAILGATE STEP W/ TAILGATE WORK SURFACE', price: 430 },
      { code: 'XLT-D', name: 'XLT HIGH CHROME OR SPRT PKG DISCOUNT', price: -2000 },
    ],
    destinationCharge: 1695,
    totalMsrp: 57975,
    cityMpg: 18,
    hwyMpg: 23,
    combMpg: 20,
    annualFuelCost: 2450,
    standardEquipment: {
      exterior: [
        'AUTO HIGH BEAMS',
        'DAYTIME RUNNING LAMPS',
        'EASY FUEL® CAPLESS FILLER',
        'FOG LAMPS - FULL LED',
        'FULLY BOXED STEEL FRAME',
        'HEADLAMPS - AUTOLAMP (ON/OFF)',
        'MANUAL FOLD POWER MIRRORS',
        'PICKUP BOX TIE DOWN HOOKS',
        'POWER TAILGATE LOCK',
      ],
      interior: [
        '1TOUCH UP/DOWN DR/PASS WIN',
        '60/40 FOLD-UP REAR BENCH SEAT',
        'DOOR LOCKS - POWER',
        'DUAL VISOR VANITY MIRRORS',
        'ILLUMINATED ENTRY',
        'MESSAGE CTR: OUTSIDE TEMP, COMPASS, TRIP COMPUTER',
        'POWERPOINTS - 12V',
        'TILT/TELESCOPE STR COLUMN',
      ],
      functional: [
        'AUTO START STOP TECH',
        'BLIS W/CROSS-TRAFFIC ALERT',
        'DYNAMIC HITCH ASSIST',
        'ELECT 4X4 SHIFT-ON-FLY',
        'FORDPASS™ CONNECT 4G',
        'LANE-KEEPING SYSTEM',
        'POST-COLLISION BRAKING',
        'PRE-COLLISION ASSIST W/AEB',
        'REAR VIEW CAMERA W/ DYNAMIC HITCH',
      ],
      safety: [
        'ADVANCETRAC™ WITH RSC®',
        'AIRBAGS - FRONT SEAT MOUNTED SIDE IMPACT',
        'AIRBAGS - SAFETY CANOPY®',
        'CTR HIGH MOUNT STOP LAMP',
        'PERIMETER ALARM',
        'SOS POST-CRASH ALERT SYS™',
        'TIRE PRESSURE MONITOR SYS',
      ],
    },
    safetyRatings: {
      overall: 5,
      frontal: 5,
      side: 5,
      rollover: 4,
    },
  },
  '1FTEW1EF5DKD98765': {
    id: 'f150-2013-stephen',
    vin: '1FTEW1EF5DKD98765',
    year: 2013,
    make: 'FORD',
    model: 'F-150 4X4 SUPERCREW',
    trim: 'XLT 145" WHEELBASE',
    engine: '5.0L V8 FFV ENGINE',
    transmission: 'ELECTRONIC 6-SPD AUTO',
    exteriorColor: 'OXFORD WHITE',
    interiorColor: 'STEEL GRAY CLOTH 40/20/40',
    wheelbase: '145 INCH',
    baseMsrp: 37495,
    options: [
      { code: '302A', name: 'EQUIPMENT GROUP 302A - XLT CONVENIENCE PKG & REAR CAM', price: 4080 },
      { code: '535', name: 'TRAILER TOW PACKAGE (CLASS IV HITCH, 7-PIN CONNECTOR)', price: 595 },
      { code: '86X', name: 'XLT CHROME PACKAGE (18" CHROME WHEELS, STEP BARS)', price: 1495 },
      { code: '995', name: '5.0L V8 FFV ENGINE', price: 1000 },
      { code: 'XL9', name: '3.55 ELECTRONIC LOCKING AXLE', price: 470 },
      { code: '67T', name: 'INTEGRATED TRAILER BRAKE CONTROLLER', price: 230 },
      { code: 'XLT-D', name: '302A & CHROME PKG DISCOUNT', price: -1750 },
    ],
    destinationCharge: 995,
    totalMsrp: 44610,
    cityMpg: 14,
    hwyMpg: 19,
    combMpg: 16,
    annualFuelCost: 3100,
    standardEquipment: {
      exterior: [
        'AUTOLAMP - AUTO ON/OFF HDLMP',
        'DOOR HANDLES - BLACK',
        'FRONT TOW HOOKS',
        'LOCKING REMOVABLE TAILGATE',
        'REAR PRIVACY GLASS',
        'SPARE TIRE & WHEEL LOCK',
      ],
      interior: [
        'AIR CONDITIONING - MANUAL',
        'CRUISE CONTROL / TILT WHEEL',
        'LEATHER WRAPPED STEERING WHL',
        'POWER DRIVER SEAT 6-WAY',
        'SYNC VOICE ACTIVATED SYS',
      ],
      functional: [
        '4-WHEEL DISC BRAKES W/ABS',
        '12V AUXILIARY POWER POINT',
        'AUTOHAL AIR CONDITIONING',
        'EASYFUEL CAPLESS FILLER',
        'HILL START ASSIST',
        'POWER RACK PINION STEERING',
      ],
      safety: [
        'ADVANCETRAC WITH RSC',
        'AIRBAGS - FRONT SEAT MOUNTED',
        'SAFETY CANOPY - 2-ROW',
        'SECURILOCK ANTI-THEFT SYS',
        'TIRE PRESSURE MONITORING SYS',
      ],
    },
    safetyRatings: {
      overall: 4,
      frontal: 4,
      side: 5,
      rollover: 4,
    },
  },
  '1FMEU5DP7NLA45678': {
    id: 'bronco-2022',
    vin: '1FMEU5DP7NLA45678',
    year: 2022,
    make: 'FORD',
    model: 'BRONCO 4-DOOR ADVANCED 4X4',
    trim: 'BADLANDS - 5 PASSENGER',
    engine: '2.7L ECOBOOST V6 ENGINE',
    transmission: '10-SPEED AUTO TRANSMISSION',
    exteriorColor: 'ERUPTION GREEN METALLIC',
    interiorColor: 'VINYL BLACK SEATS W/ ORANGE STITCH',
    wheelbase: '116 INCH',
    baseMsrp: 46590,
    options: [
      { code: '334A', name: 'EQUIPMENT GROUP 334A - LUX PACKAGE (12" SCREEN, B&O)', price: 5085 },
      { code: '99P', name: '2.7L ECOBOOST V6 ENGINE', price: 1895 },
      { code: '44T', name: '10-SPEED AUTO TRANSMISSION', price: 1595 },
      { code: '43L', name: 'HARD TOP, MOLDED-IN-COLOR', price: 695 },
      { code: '50B', name: 'FRONT BUMPER - HEAVY DUTY MODULAR', price: 575 },
      { code: '64W', name: '17" BLACK HIGH GLOSS-PNTD ALUM WHEELS', price: 995 },
      { code: 'TOW', name: 'TOWING CAPABILITY', price: 595 },
    ],
    destinationCharge: 1595,
    totalMsrp: 59620,
    cityMpg: 17,
    hwyMpg: 17,
    combMpg: 17,
    annualFuelCost: 2950,
    standardEquipment: {
      exterior: [
        'BUMPER, FRONT - HD MODULAR',
        'EASY FUEL® CAPLESS FILLER',
        'FENDER TIE-DOWN HOOKS',
        'FULL VEH STEEL BASH PLATES',
        'GRILLE-GRAY/BRONCO WHITE',
        'HEADLAMPS - AUTO HIGH BEAM',
        'MIRRORS-HTD/POWER GLASS',
        'ROCK RAILS & TOW HOOKS FRT/RR',
      ],
      interior: [
        '60/40 SPLIT FOLD REAR SEAT',
        'AUX SWITCHES W/PRE-WIRING',
        'CRUISE CONTROL',
        'IP CLUSTER 8" DIGITAL SCRN',
        'LOCKING GLOVE BOX',
        'MOLLE STRAP SYSTEM',
        'RUBBERIZED FLOORING W/DRAIN',
      ],
      functional: [
        'BADLANDS SUSPENSION - BILSTEIN',
        'BRAKES, 4-WHEEL DISC/ABS',
        'FRONT STABILIZER BAR DISCONNECT',
        'HILL START ASSIST',
        'PRE-COLLISION ASSIST W/AEB',
        'REAR VIEW CAMERA',
        'TERRAIN MGMT SYSTEM W/ G.O.A.T.',
      ],
      safety: [
        'ADVANCETRAC™ WITH RSC®',
        'AIRBAGS-FRT (DUAL STAGE) & SIDE',
        'BELT-MINDER CHIME',
        'CHILD SAFETY REAR DR LOCKS',
        'INDIV TIRE PRESS MONIT SYS',
        'LATCH CHILD SAFETY SYSTEM',
        'PERIMETER ALARM',
      ],
    },
    safetyRatings: {
      overall: 4,
      frontal: 4,
      side: 5,
      rollover: 3,
    },
  },
  '3FMTK3SU9PMA78901': {
    id: 'mache-2023',
    vin: '3FMTK3SU9PMA78901',
    year: 2023,
    make: 'FORD',
    model: 'MUSTANG MACH-E GT EAWD',
    trim: '91KWH USABLE EXT BATTERY',
    engine: 'DUAL EMOTOR (FRONT/REAR)',
    transmission: 'SINGLE SPEED TRANSMISSION',
    exteriorColor: 'CYBER ORANGE METALLIC TRI-COAT',
    interiorColor: 'BLACK ONYX ACTIVEX SEATS W/ COPPER ACCENTS',
    wheelbase: '117 INCH',
    baseMsrp: 63995,
    options: [
      { code: '99U', name: 'GT PERFORMANCE EDITION (MAGNERIDE, 20" WHEELS, FORD PERFORMANCE SEATS)', price: 5000 },
      { code: '43M', name: 'PANORAMIC FIXED-GLASS ROOF', price: 1300 },
      { code: '76P', name: 'FORD BLUECRUISE 1.2 (3-YR SUBSCRIPTION)', price: 2100 },
      { code: 'EXT', name: 'CYBER ORANGE METALLIC TRI-COAT PAINT', price: 795 },
    ],
    destinationCharge: 1800,
    totalMsrp: 74990,
    cityMpg: 90,
    hwyMpg: 77,
    combMpg: 84,
    annualFuelCost: 850,
    standardEquipment: {
      exterior: [
        'ACTIVE GRILLE SHUTTERS',
        'FRUNK - DRAINABLE DUAL STORAGE',
        'HEADLAMPS-AUTO LED PROJCTR',
        'LED SIGNATURE LIGHTING',
        'POWER LIFTGATE',
        'RED PAINTED BRAKE CALIPERS',
      ],
      interior: [
        '10.2" DIGITAL INSTR CLSTR',
        '15.5" TOUCHSCREEN W/ SYNC 4A',
        'AMBIENT LIGHTING - ILLUM ENTRY',
        'B&O SOUND SYSTEM 10 SPKR',
        'HEATED FRONT SEATS & STEERING',
        'ROTARY GEAR SHIFT DIAL',
      ],
      functional: [
        '360-DEGREE CAMERA',
        'BLUECRUISE CONNECTIVITY',
        'DRIVE MODES/ONE PEDAL DRV',
        'FORD CO-PILOT360™ ACTIVE 2.0',
        'PHONE AS A KEY FUNCTION',
        'WIRELESS CHARGING PAD',
      ],
      safety: [
        'ADVANCED SECURITY PACK',
        'ELCTR STABILITY/TRACTN CTL',
        'AIRBAG - DRIVER KNEE',
        'AIRBAGS - DUAL STAGE FRONT',
        'AIRBAGS - FRT/REAR SIDE IMPACT',
        'SOS POST-CRASH ALERT SYS',
      ],
    },
    safetyRatings: {
      overall: 5,
      frontal: 5,
      side: 5,
      rollover: 5,
    },
  },
};

export const DEFAULT_STICKER = SAMPLE_STICKERS['1FTFW1E85MFA12345'];

export const SPEC_CARDS = [
  {
    id: 'vehicle-desc',
    number: '01',
    title: 'Vehicle Description',
    tag: 'Factory Build Specs',
    description: 'Exact trim level, wheelbase length, exterior and interior paint/trim codes, engine displacement, and transmission type as configured on the assembly line.',
    details: ['Official Trim Designation', 'Exterior Color Code', 'Engine & Transmission ID', 'Cab & Wheelbase Length'],
  },
  {
    id: 'standard-eq',
    number: '02',
    title: 'Standard Equipment',
    tag: 'Included Hardware',
    description: 'Line-by-line categorization of standard mechanical, exterior lighting, interior cabin features, and active safety systems included in base trim.',
    details: ['Safety & Security Systems', 'Exterior Functional Hardware', 'Interior Technology & Seating', 'Chassis & Powertrain Basics'],
  },
  {
    id: 'base-msrp',
    number: '03',
    title: 'Base MSRP',
    tag: 'Starting Price',
    description: 'The baseline Manufacturer’s Suggested Retail Price before any factory packages, individual standalone options, or delivery fees were added.',
    details: ['Official Dealer Invoice Starting MSRP', 'Model Year Baseline', 'Excludes Factory Options'],
  },
  {
    id: 'optional-eq',
    number: '04',
    title: 'Optional Equipment',
    tag: 'Itemized Pricing',
    description: 'Itemized factory package codes (e.g. 302A, FX4, Max Tow, Moonroof) with individual original retail pricing and package discounts.',
    details: ['Equipment Group Codes (e.g., 302A)', 'Performance & Tow Packages', 'Standalone Wheel & Tech Upgrades', 'Original Option Discounts'],
  },
  {
    id: 'destination',
    number: '05',
    title: 'Destination Charge',
    tag: 'Logistics Fee',
    description: 'Federally mandated factory transportation and delivery fee from the manufacturing assembly plant to the original selling dealership.',
    details: ['Fixed Federal Freight Charge', 'Assembly Plant to Dealer', 'Included in Final Window Sticker'],
  },
  {
    id: 'total-msrp',
    number: '06',
    title: 'Total Vehicle Price',
    tag: 'Bottom-Line MSRP',
    description: 'The final, official manufacturer bottom-line total price — the single most important number for negotiating fair market resale value.',
    details: ['Base MSRP + Options + Freight', 'Essential for Insurance & Resale', 'Definitive Valuation Baseline'],
  },
  {
    id: 'warranty-info',
    number: '07',
    title: 'Warranty Information',
    tag: 'Factory Coverage',
    description: 'Summary of original manufacturer bumper-to-bumper (3yr/36k), powertrain (5yr/60k), corrosion perforation, and 24-hour roadside assistance.',
    details: ['3 Yr / 36,000 Mi Bumper-to-Bumper', '5 Yr / 60,000 Mi Powertrain', 'Roadside Assistance Terms', 'Corrosion Coverage Limits'],
  },
  {
    id: 'epa-fuel',
    number: '08',
    title: 'Fuel Economy & EPA',
    tag: 'Official Ratings',
    description: 'Official EPA-estimated city, highway, and combined MPG or MPGe, estimated annual fuel cost, and greenhouse gas environmental ratings.',
    details: ['City / Highway / Combined MPG', 'Annual Fuel Spending Estimate', 'Smog & Greenhouse Gas Scores', 'Comparison vs. Average Vehicle'],
  },
  {
    id: 'safety-ratings',
    number: '09',
    title: 'NHTSA Safety Ratings',
    tag: '5-Star Govt Testing',
    description: 'Official National Highway Traffic Safety Administration (NHTSA) 5-Star government crash test results for frontal, side, and rollover impacts.',
    details: ['Overall Vehicle Star Rating', 'Frontal Crash Driver / Passenger', 'Side Barrier & Pole Impact', 'Rollover Resistance Rating'],
  },
];

export const FORD_MODELS_BY_CATEGORY = {
  Trucks: [
    { name: 'F-150', years: '1990–2026', sampleVin: '1FTFW1E85MFA12345', badge: 'Most Popular' },
    { name: 'Super Duty (F-250 / F-350 / F-450)', years: '1999–2026', sampleVin: '1FT8W3BT3NED12345', badge: 'Heavy Duty' },
    { name: 'Ranger', years: '1990–2026', sampleVin: '1FTER4FH4LLA12345', badge: 'Midsize' },
    { name: 'Maverick', years: '2022–2026', sampleVin: '3FTTW8F94NRA12345', badge: 'Hybrid/Turbo' },
    { name: 'F-150 Lightning', years: '2022–2026', sampleVin: '1FTVW1EV8NWB12345', badge: 'All-Electric' },
  ],
  'SUVs & Crossovers': [
    { name: 'Bronco (2-Door & 4-Door)', years: '1990–2026', sampleVin: '1FMEU5DP7NLA45678', badge: '4x4 Icon' },
    { name: 'Bronco Sport', years: '2021–2026', sampleVin: '3FMCR9B65MRA12345', badge: 'Compact 4x4' },
    { name: 'Explorer', years: '1991–2026', sampleVin: '1FMSK8DH8NGA12345', badge: '3-Row SUV' },
    { name: 'Expedition / MAX', years: '1997–2026', sampleVin: '1FMJU1J87MEA12345', badge: 'Full-Size' },
    { name: 'Escape', years: '2001–2026', sampleVin: '1FMCU9J93MUA12345', badge: 'EcoBoost/Hybrid' },
    { name: 'Edge', years: '2007–2024', sampleVin: '2FMPK4K97RBA12345', badge: 'Midsize Crossover' },
  ],
  'Cars & Performance': [
    { name: 'Mustang (EcoBoost / GT / Dark Horse)', years: '1990–2026', sampleVin: '1FA6P8CF4R5112345', badge: 'V8 / Fastback' },
    { name: 'Mustang Mach-E', years: '2021–2026', sampleVin: '3FMTK3SU9PMA78901', badge: 'All-Electric SUV' },
    { name: 'Shelby GT350 / GT500', years: '2015–2022', sampleVin: '1FA6P8JZ9K5512345', badge: 'Track Performance' },
    { name: 'Fusion', years: '2006–2020', sampleVin: '3FA6P0H77LR112345', badge: 'Sedan / Hybrid' },
    { name: 'Focus (incl. ST / RS)', years: '2000–2018', sampleVin: '1FADP3K93HL112345', badge: 'Hatchback / Sedan' },
    { name: 'Taurus (incl. SHO)', years: '1990–2019', sampleVin: '1FAHP2KT7KG112345', badge: 'Twin-Turbo V6' },
  ],
  'Vans, EV & Commercial': [
    { name: 'Transit-150 / 250 / 350', years: '2015–2026', sampleVin: '1FTBR1Y84NKA12345', badge: 'Cargo & Passenger' },
    { name: 'E-Transit', years: '2022–2026', sampleVin: '1FTBR1EV7NKB12345', badge: '100% Electric Van' },
    { name: 'Transit Connect', years: '2010–2023', sampleVin: 'NM0LS7E74N1112345', badge: 'Compact Cargo' },
    { name: 'E-Series Cutaway & Stripped Chassis', years: '1990–2026', sampleVin: '1FDWE3FN7NDD12345', badge: 'Commercial' },
    { name: 'Escape Plug-In Hybrid', years: '2020–2026', sampleVin: '1FMCU0E18NUA12345', badge: 'PHEV' },
  ],
};

export const RELATED_TOOLS = [
  {
    id: 'option-check',
    title: 'Option Check',
    description: 'Decode factory build codes and verify all optional equipment included on your specific vehicle build.',
    iconName: 'PackageCheck',
  },
  {
    id: 'build-sheet',
    title: 'Build Sheet Lookup',
    description: 'Retrieve full engineering assembly specifications, module configs, and detailed component part numbers.',
    iconName: 'FileSpreadsheet',
  },
  {
    id: 'msrp-lookup',
    title: 'MSRP & Price History',
    description: 'Lookup historical base pricing, factory options costs, and price adjustments across Ford model years.',
    iconName: 'CircleDollarSign',
  },
  {
    id: 'paint-code',
    title: 'Paint Code Lookup',
    description: 'Find factory paint codes, exact exterior color names, clearcoat types, and OEM touch-up match specs.',
    iconName: 'Palette',
  },
  {
    id: 'warranty-check',
    title: 'Warranty Status Check',
    description: 'Verify remaining bumper-to-bumper, powertrain, corrosion, and hybrid/EV battery factory warranties.',
    iconName: 'ShieldCheck',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'What is a Ford window sticker (Monroney label)?',
    answer: 'A window sticker (also known as a Monroney label) is the federally mandated factory document affixed to every new vehicle sold in the United States. It functions as the vehicle’s official "birth certificate," displaying original base MSRP, itemized factory options with prices, standard equipment, engine and transmission specs, exterior/interior color codes, EPA fuel economy ratings, and NHTSA 5-star crash safety ratings.',
  },
  {
    question: 'Can I get an original window sticker for older or classic Ford models?',
    answer: 'Yes! Our database covers Ford models dating from 1990 through 2026+, including trucks, SUVs, performance cars, and specialty models like classic F-150s, SVT Cobras, Lightnings, Shelby GTs, and Ford GT supercars. If your vehicle was manufactured with a 17-character VIN, we can decode its authentic factory window sticker.',
  },
  {
    question: 'How quickly do I receive my window sticker after entering my VIN?',
    answer: 'Delivery is instant. Once you enter your 17-character VIN or license plate, our automated factory decoder queries original build archives and generates a high-resolution, pixel-accurate reproduction PDF in seconds, ready for immediate download, printing, or digital sharing.',
  },
  {
    question: 'What is the difference between a VIN decoder build sheet and a Monroney window sticker?',
    answer: 'A standard VIN decoder or build sheet simply outputs an unformatted text list of engineering codes and generic equipment. A Monroney window sticker provides the official, legal layout including original dollar amounts for every option, base MSRP, destination freight charges, total window price, official EPA fuel ratings, and crash test ratings formatted exactly as displayed at the original dealership.',
  },
  {
    question: 'Can I use a license plate if I don’t have my VIN handy?',
    answer: 'Yes. Our tool allows you to enter any U.S. state license plate and state registration. Our system will securely cross-reference the state registry to resolve the underlying 17-character VIN and retrieve your original factory Monroney window sticker.',
  },
  {
    question: 'Is this window sticker accepted for resale and dealership trade-in verification?',
    answer: 'Absolutely. Buyers, private sellers, appraisers, auction houses (like Bring a Trailer, Cars & Bids), and franchised automotive dealerships regularly use our authentic Monroney window stickers to substantiate high-value packages (such as FX4, Max Tow, 302A/502A Luxury Packages, Tremor, Raptor, or Shelby equipment) and justify fair market asking prices.',
  },
  {
    question: 'What if my vehicle is a Canadian or export market Ford?',
    answer: 'We support North American market Ford vehicles (United States and Canada) with 17-character VINs. For Canadian specification vehicles, options and equipment will reflect Canadian market packages and factory specifications.',
  },
];

export const VIN_LOCATIONS = [
  {
    id: 'dashboard',
    title: "Driver's Side Dashboard",
    shortDesc: 'Visible through the bottom-left corner of the windshield from outside the vehicle.',
    instructions: 'Stand outside by the driver side windshield wiper and look down at the lower edge of the dash.',
  },
  {
    id: 'door-jamb',
    title: "Driver's Side Door Jamb",
    shortDesc: 'On the Federal Safety Certification label attached to the B-pillar post.',
    instructions: 'Open the front driver door and inspect the white or silver barcode sticker on the door frame.',
  },
  {
    id: 'registration',
    title: 'Vehicle Registration Card',
    shortDesc: 'Printed clearly on your official state vehicle registration card or renewal slip.',
    instructions: 'Check the "VIN" or "Vehicle Identification Number" box on your active DMV registration document.',
  },
  {
    id: 'insurance',
    title: 'Auto Insurance Card & Policy',
    shortDesc: 'Listed on your physical insurance proof card or insurance mobile app.',
    instructions: 'Pull up your insurance card in your glovebox or auto insurer mobile application.',
  },
  {
    id: 'title',
    title: 'Vehicle Title (Certificate of Title)',
    shortDesc: 'Prominently recorded on the front face of your state vehicle title certificate.',
    instructions: 'Look at the top section of the Certificate of Title document issued by your state department of motor vehicles.',
  },
  {
    id: 'fordpass',
    title: 'FordPass App & Ford Account',
    shortDesc: 'Stored in your vehicle profile inside the official FordPass smartphone application.',
    instructions: 'Open the FordPass app > Select "Vehicle" tab > Scroll to "Vehicle Details" to view and copy your 17-digit VIN.',
  },
  {
    id: 'sync-screen',
    title: 'In-Vehicle SYNC Touchscreen',
    shortDesc: 'Accessible via the digital infotainment display inside your Ford vehicle.',
    instructions: 'On your SYNC touchscreen: Go to Settings > General > About SYNC > View Vehicle Identification Number.',
  },
  {
    id: 'service-records',
    title: 'Dealership & Service Invoices',
    shortDesc: 'Printed at the top of maintenance receipts, repair orders, and oil change slips.',
    instructions: 'Inspect any recent dealership service receipt or mechanic invoice in your vehicle history folder.',
  },
];
