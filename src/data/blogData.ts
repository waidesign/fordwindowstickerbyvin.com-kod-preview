export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: 'Factory Information' | 'Original MSRP' | 'Factory Options' | 'VIN Decoding';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const BLOG_CATEGORIES = [
  { id: 'All', label: 'All Guides & Articles', description: 'Complete archive of Ford window sticker and build sheet research.' },
  { id: 'Factory Information', label: 'Factory Information', description: 'Original OEM archives, assembly plant codes, and production history.' },
  { id: 'Original MSRP', label: 'Original MSRP', description: 'Official base pricing, option totals, and window sticker valuation.' },
  { id: 'Factory Options', label: 'Factory Options', description: 'Itemized packages, interior trims, axle ratios, and equipment codes.' },
  { id: 'VIN Decoding', label: 'VIN Decoding', description: '17-digit modern VINs and classic door tag identification.' }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'factory-information-and-oem-archives',
    title: 'Unlocking Original OEM Archives: What Factory Information Reveals',
    excerpt: 'Discover how original OEM factory archives document every bolt, paint code, and assembly plant specification for your Ford vehicle.',
    category: 'Factory Information',
    author: {
      name: 'Sarah Jenkins',
      role: 'Automotive Historian & Archivist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200'
    },
    publishedAt: 'October 14, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200',
    featured: true,
    content: [
      'When restoring or verifying a Ford vehicle, accessing authentic factory information is paramount. OEM archives preserve the exact assembly plant logs, production build dates, and engineering specifications recorded when the vehicle was manufactured.',
      'Factory records provide undeniable proof of authenticity, distinguishing true numbers-matching collector models from restamped or modified clones.',
      'Through digital window sticker and build sheet archives, enthusiasts can instantly pull original equipment manifests dating back decades without sorting through dusty microfilm or paper dealer ledgers.'
    ]
  },
  {
    id: '2',
    slug: 'understanding-original-msrp-valuation',
    title: 'How Original MSRP and Window Sticker Pricing Are Calculated',
    excerpt: 'Explore how base manufacturer suggested retail prices (MSRP), destination charges, and optional equipment totals appear on official Monroney labels.',
    category: 'Original MSRP',
    author: {
      name: 'Michael Vance',
      role: 'Fleet Manager & Pricing Analyst',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    publishedAt: 'November 2, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    featured: false,
    content: [
      'The original MSRP (Manufacturer Suggested Retail Price) on a Ford window sticker represents far more than just a single dollar amount. It is an itemized financial breakdown mandated by the Monroney Act.',
      'Understanding the base vehicle price versus added optional packages helps used car buyers and appraisers determine fair market value and verify whether a vehicle was heavily optioned from the factory.',
      'Destination and delivery charges are standardized per model year, while individual option codes reflect factory adjustments at the time of initial dealership invoicing.'
    ]
  },
  {
    id: '3',
    slug: 'navigating-factory-options-and-packages',
    title: 'Mastering Factory Options: Decoding Itemized Packages & Codes',
    excerpt: 'Learn how to read and interpret complex factory option codes, towing packages, interior upholstery groups, and electronic tech suites.',
    category: 'Factory Options',
    author: {
      name: 'Robert Miller',
      role: 'Classic Ford Restoration Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    },
    publishedAt: 'December 10, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1200',
    featured: false,
    content: [
      'Factory options dictate the true character and capability of any Ford truck, SUV, or car. Whether looking for the Max Trailer Tow Package on an F-150 or specialized handling suspension on a Mustang, factory option codes tell the complete story.',
      'Itemized factory codes on build sheets and window stickers ensure you never get misled by aftermarket upgrades presented as original equipment.',
      'By reviewing your vehicle VIN or build sheet, you can verify exact axle gear ratios, premium sound systems, seating materials, and driver-assist safety packages.'
    ]
  },
  {
    id: '4',
    slug: 'decoding-17-digit-ford-vin-numbers',
    title: 'Decoding 17-Digit Ford VIN Numbers: A Step-by-Step Breakdown',
    excerpt: 'Learn what every single character in your 17-digit Ford Vehicle Identification Number reveals about your engine, year, and assembly plant.',
    category: 'VIN Decoding',
    author: {
      name: 'Sarah Jenkins',
      role: 'Automotive Historian & Archivist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200'
    },
    publishedAt: 'January 18, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200',
    featured: false,
    content: [
      'Every Ford vehicle manufactured since 1981 carries a unique 17-digit Vehicle Identification Number (VIN). Each section of the VIN identifies country of origin, manufacturer, vehicle attributes, engine displacement, model year, and assembly plant.',
      'Using our instant VIN decoder tool alongside these educational guides allows you to verify build specifications in seconds before making a purchase or starting a restoration project.'
    ]
  }
];
