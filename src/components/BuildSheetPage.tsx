import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight, 
  Clock, 
  Database, 
  HelpCircle, 
  Award, 
  Layers, 
  Car, 
  Check, 
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface BuildSheetPageProps {
  onScrollToLookup: () => void;
  onOpenVinFinder: () => void;
  onOpenSampleSticker: () => void;
  onSelectModelVin: (vin: string) => void;
  onNavigateHome: () => void;
}

export const BuildSheetPage: React.FC<BuildSheetPageProps> = ({
  onScrollToLookup,
  onOpenVinFinder,
  onOpenSampleSticker,
  onSelectModelVin,
  onNavigateHome,
}) => {
  const [activeTab, setActiveTab] = useState<'vin' | 'plate' | 'year'>('vin');
  const [vinInput, setVinInput] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [expandedInfoIndex, setExpandedInfoIndex] = useState<number | null>(0);

  const handleLookupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (vinInput.trim()) {
      onSelectModelVin(vinInput.trim());
    } else {
      onScrollToLookup();
    }
  };

  const includedSections = [
    {
      title: "Core Engine Specifications",
      desc: "Detailed exact engine displacement, cylinder count, fuel system configuration, horsepower ratings, and stock tuning specifications."
    },
    {
      title: "Transmission and Drivetrain Details",
      desc: "Factory transmission code, gear ratios, axle ratio, differential type (limited-slip or open), and 4WD/AWD transfer case specs."
    },
    {
      title: "Exterior Paint and Trim Codes",
      desc: "Primary paint color name, paint code, secondary/accent colors, wheel finish, glass tint, and exterior trim packages."
    },
    {
      title: "Interior Features and Materials",
      desc: "Seat material (leather/cloth), colorway, trim accents, audio system specifications, and comfort convenience packages."
    },
    {
      title: "Factory-Installed Options and Packages",
      desc: "Comprehensive itemized list of all optional equipment, tow packages, lighting groups, and trailering equipment added at the factory."
    },
    {
      title: "Production Dates and Assembly Location",
      desc: "Exact build date, plant location (e.g. Dearborn, Flat Rock, Kansas City), and line sequence number."
    },
    {
      title: "Safety Equipment and Braking Systems",
      desc: "Brake type, anti-lock systems, airbag configurations, stability control modules, and security features installed during assembly."
    }
  ];

  const faqs = [
    {
      q: "How can I get a free Ford build sheet by VIN?",
      a: "You can obtain standard vehicle specifications through free VIN decoders, but official factory build sheets containing exact assembly line specifications require a certified database lookup. Our service provides instantaneous factory records."
    },
    {
      q: "What information does a Ford factory build sheet show?",
      a: "A build sheet lists every nut, bolt, option, paint code, interior trim, axle ratio, and transmission code your Ford left the factory with, providing 100% verification of its original build."
    },
    {
      q: "How do I read a Ford build sheet?",
      a: "Our decoded build sheets present raw assembly line codes in clear, plain English categories (Engine, Drivetrain, Interior, Packages) so you can easily verify every component."
    },
    {
      q: "Why do I need a Ford VIN decoder build sheet for parts?",
      a: "When restoring or repairing older Fords, mid-year production changes mean generic parts stores often list the wrong components. A build sheet guarantees you order the exact factory-matched replacement parts."
    },
    {
      q: "What is the difference between a build sheet and a window sticker?",
      a: "A window sticker (Monroney) was displayed on the dealer window showing MSRP and standard features for buyers. A build sheet is the internal factory assembly document used on the plant floor."
    },
    {
      q: "Can I get a build sheet for a classic Ford?",
      a: "Yes! While modern Fords use 17-digit VINs, classic Fords (pre-1981) often use door tags, data plates, and shorter VINs which our classic database can decode."
    }
  ];

  return (
    <div className="bg-white text-[#111827]">
      {/* Hero Section - Clean Professional Blue Theme (No Orange) */}
      <section className="bg-gradient-to-b from-[#003478] to-[#00285E] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider mb-5 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#85B7E3]" />
            Official Factory Build Sheet Decoder
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight mb-4 leading-tight">
            Get Your Ford Build Sheet by VIN
          </h1>
          
          <p className="text-base sm:text-lg text-[#DCE8F5] max-w-2xl mx-auto mb-8 font-normal">
            Discover how your Ford was exactly built at the factory. Uncover original engine specs, drivetrain ratios, paint codes, and factory-installed packages instantly.
          </p>

          {/* Search Card Widget */}
          <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 text-left border border-white/20 max-w-2xl mx-auto">
            {/* Search Tabs */}
            <div className="flex rounded-xl bg-[#F7F9FC] p-1 mb-4 border border-[#DCE2E9]">
              <button
                type="button"
                onClick={() => setActiveTab('vin')}
                className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'vin'
                    ? 'bg-[#003478] text-white shadow-xs'
                    : 'text-[#52606D] hover:text-[#111827]'
                }`}
              >
                By VIN
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('plate')}
                className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'plate'
                    ? 'bg-[#003478] text-white shadow-xs'
                    : 'text-[#52606D] hover:text-[#111827]'
                }`}
              >
                By License Plate
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('year')}
                className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'year'
                    ? 'bg-[#003478] text-white shadow-xs'
                    : 'text-[#52606D] hover:text-[#111827]'
                }`}
              >
                By Year, Make, Model
              </button>
            </div>

            <form onSubmit={handleLookupSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                  {activeTab === 'vin' && 'Enter 17-Digit Vehicle Identification Number (VIN)'}
                  {activeTab === 'plate' && 'Enter License Plate & State'}
                  {activeTab === 'year' && 'Select Vehicle Year, Make & Model'}
                </label>
                
                {activeTab === 'vin' ? (
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7B8794]">
                      <Search className="w-5 h-5" />
                    </span>
                    <input
                      type="text"
                      maxLength={17}
                      value={vinInput}
                      onChange={(e) => setVinInput(e.target.value.toUpperCase())}
                      placeholder="e.g., 1FTFW1E85MFA12345"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#DCE2E9] focus:outline-none focus:border-[#003478] text-sm sm:text-base font-mono uppercase text-[#111827]"
                    />
                  </div>
                ) : activeTab === 'plate' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <input
                      type="text"
                      placeholder="License Plate"
                      className="sm:col-span-2 px-4 py-3 rounded-xl border border-[#DCE2E9] focus:outline-none focus:border-[#003478] text-sm uppercase text-[#111827]"
                    />
                    <select className="px-3 py-3 rounded-xl border border-[#DCE2E9] focus:outline-none focus:border-[#003478] text-sm text-[#111827] bg-white">
                      <option value="">State / Prov</option>
                      <option value="CA">California (CA)</option>
                      <option value="TX">Texas (TX)</option>
                      <option value="FL">Florida (FL)</option>
                      <option value="NY">New York (NY)</option>
                    </select>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <select className="px-3 py-3 rounded-xl border border-[#DCE2E9] focus:outline-none focus:border-[#003478] text-sm text-[#111827] bg-white">
                      <option value="">Year</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                    </select>
                    <select className="px-3 py-3 rounded-xl border border-[#DCE2E9] focus:outline-none focus:border-[#003478] text-sm text-[#111827] bg-white">
                      <option value="Ford">Ford</option>
                    </select>
                    <select className="px-3 py-3 rounded-xl border border-[#DCE2E9] focus:outline-none focus:border-[#003478] text-sm text-[#111827] bg-white">
                      <option value="">Model</option>
                      <option value="F-150">F-150</option>
                      <option value="Mustang">Mustang</option>
                      <option value="Explorer">Explorer</option>
                      <option value="Bronco">Bronco</option>
                    </select>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#003478] hover:bg-[#00285E] text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Generate Official Build Sheet</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center justify-between text-xs text-[#52606D] mt-4 pt-3 border-t border-[#DCE2E9]">
              <button
                onClick={onOpenVinFinder}
                className="hover:text-[#003478] underline font-medium cursor-pointer"
              >
                Where to find your VIN?
              </button>
              <button
                onClick={onOpenSampleSticker}
                className="hover:text-[#003478] underline font-medium cursor-pointer"
              >
                View Sample Build Sheet
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb & Intro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-xs text-[#52606D] mb-6">
          <button onClick={onNavigateHome} className="hover:text-[#003478] cursor-pointer">Home</button>
          <span className="mx-2">/</span>
          <span className="text-[#111827] font-semibold">Ford Build Sheet by VIN</span>
        </div>

        <div className="max-w-[1440px] mx-auto text-center space-y-4 mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111827]">
            What Is a Ford Build Sheet?
          </h2>
          <p className="text-sm sm:text-base text-[#52606D] leading-relaxed max-w-4xl mx-auto">
            A Ford build sheet is a factory assembly document that can help determine how a particular Ford was originally built. Some information that may be included in a build sheet includes technical information regarding engine assembly, transmission, drivetrain, axles, paint colors, interior, factory options, packages, and manufacturing information.
          </p>
          <p className="text-sm sm:text-base text-[#52606D] leading-relaxed max-w-4xl mx-auto">
            For ford owners, consumers, dealers, collectors, and restorers, a build sheet is a valuable resource because it determines the original assembly of a vehicle without depending solely on pictures, dealer claims, or incomplete documentation.
          </p>
        </div>

        {/* What Information Is Included Section */}
        <div className="max-w-[1440px] mx-auto mb-16">
          <div className="text-center mb-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#111827] mb-2">
              What Information Is Included in a Ford Build Sheet?
            </h3>
            <p className="text-xs sm:text-sm text-[#52606D]">
              When you run a ford build sheet by VIN tool, you unlock the hidden DNA of your vehicle. Here's exactly what you'll find inside your ford build sheet.
            </p>
          </div>

          <div className="space-y-3 max-w-4xl mx-auto">
            {includedSections.map((sec, idx) => (
              <div 
                key={idx}
                className="border border-[#DCE2E9] rounded-xl overflow-hidden bg-white shadow-2xs transition-all"
              >
                <button
                  onClick={() => setExpandedInfoIndex(expandedInfoIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-[#111827] hover:bg-[#EEF4FB] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-[#EEF4FB] text-[#003478] flex items-center justify-center text-xs font-mono font-bold border border-[#DCE2E9]">
                      0{idx + 1}
                    </span>
                    {sec.title}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#52606D] transition-transform ${expandedInfoIndex === idx ? 'rotate-180 text-[#003478]' : ''}`} />
                </button>
                {expandedInfoIndex === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#52606D] bg-[#FAFCFF] border-t border-[#DCE2E9] leading-relaxed">
                    {sec.desc}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={onOpenSampleSticker}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#003478] hover:bg-[#00285E] text-white text-sm font-bold rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <span>View Full Sample Build Sheet</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Classic Ford Support */}
        <div className="bg-[#EEF4FB] rounded-2xl border border-[#DCE2E9] p-6 sm:p-10 mb-16 max-w-[1440px] mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#111827] mb-3">
              Classic Ford Build Sheet Support
            </h3>
            <p className="text-xs sm:text-sm text-[#52606D] mb-6 leading-relaxed">
              Classic Ford vehicles often need more research than modern 17-character VINs. Older Ford models may use shorter VINs, door tags, data plates, trim codes, axle codes, paint codes, or body codes to confirm original details.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#111827] mb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#16834B]" />
                  <span>Engine type and specifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#16834B]" />
                  <span>Rims & Tires</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#16834B]" />
                  <span>Basic vehicle information</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#16834B]" />
                  <span>Production numbers</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#16834B]" />
                  <span>Transmission and drivetrain</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#16834B]" />
                  <span>Options and packages</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#16834B]" />
                  <span>Suspension and steering</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#16834B]" />
                  <span>Exterior color (paint codes)</span>
                </div>
              </div>
            </div>

            <button
              onClick={onScrollToLookup}
              className="px-5 py-2.5 bg-[#003478] hover:bg-[#00285E] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xs cursor-pointer"
            >
              Lookup Classic Ford VIN
            </button>
          </div>
        </div>

        {/* Why a Build Sheet Matters */}
        <div className="max-w-[1440px] mx-auto mb-16">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#111827] mb-2">
              Why a Ford Build Sheet Matters: Unlocking Hidden Value
            </h3>
            <p className="text-xs sm:text-sm text-[#52606D]">
              Using a Ford VIN decoder build sheet tool is not just for collectors. It provides real value to buyers, sellers, and everyday drivers alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCE2E9] shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF4FB] text-[#003478] flex items-center justify-center font-bold border border-[#DCE2E9]">
                01
              </div>
              <h4 className="font-bold text-[#111827] text-base">Used Car and Truck Buyers</h4>
              <p className="text-xs sm:text-sm text-[#52606D] leading-relaxed">
                If you're buying a used Ford, a build sheet gives you peace of mind. Verify original options and confirm whether the features listed by the seller actually match the factory record, avoiding vehicles with false claims about trim level or engine size.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCE2E9] shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF4FB] text-[#003478] flex items-center justify-center font-bold border border-[#DCE2E9]">
                02
              </div>
              <h4 className="font-bold text-[#111827] text-base">Vehicle Sellers and Dealerships</h4>
              <p className="text-xs sm:text-sm text-[#52606D] leading-relaxed">
                Justify asking price with proof of rare factory options that support a higher valuation. Show buyers a transparent record of original equipment to close deals quickly and securely.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCE2E9] shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF4FB] text-[#003478] flex items-center justify-center font-bold border border-[#DCE2E9]">
                03
              </div>
              <h4 className="font-bold text-[#111827] text-base">Current Ford Owners</h4>
              <p className="text-xs sm:text-sm text-[#52606D] leading-relaxed">
                Owning a Ford comes with paperwork. A build sheet adds real value to your records. If you are restoring a classic Ford, the build sheet tells you exactly what parts and colors to use.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCE2E9] shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF4FB] text-[#003478] flex items-center justify-center font-bold border border-[#DCE2E9]">
                04
              </div>
              <h4 className="font-bold text-[#111827] text-base">Collectors and Restorers</h4>
              <p className="text-xs sm:text-sm text-[#52606D] leading-relaxed">
                Classic Ford collectors rely heavily on build sheets. It helps you rebuild a vehicle exactly as it left the factory, down to the smallest detail, boosting buyer trust and raising your vehicle's resale price.
              </p>
            </div>
          </div>
        </div>

        {/* Build Sheet vs Window Sticker Comparison Table */}
        <div className="max-w-[1440px] mx-auto mb-16">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#111827] mb-2">
              Ford Build Sheet vs Ford Window Sticker
            </h3>
            <p className="text-xs sm:text-sm text-[#52606D]">
              What sets them apart? Many people confuse these two documents. Here is how they compare.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#DCE2E9] shadow-2xs max-w-4xl mx-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#003478] text-white">
                  <th className="p-3.5 sm:p-4 font-bold">Feature</th>
                  <th className="p-3.5 sm:p-4 font-bold">Ford Build Sheet</th>
                  <th className="p-3.5 sm:p-4 font-bold">Ford Window Sticker</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCE2E9] bg-white text-[#111827]">
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#52606D]">Primary Purpose</td>
                  <td className="p-3.5 sm:p-4">Used on the factory line</td>
                  <td className="p-3.5 sm:p-4">Shown to buyers at the dealership</td>
                </tr>
                <tr className="bg-[#FAFCFF]">
                  <td className="p-3.5 sm:p-4 font-semibold text-[#52606D]">Shows Pricing</td>
                  <td className="p-3.5 sm:p-4 font-medium text-[#52606D]">No</td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#16834B]">Yes (MSRP & Options)</td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#52606D]">Format</td>
                  <td className="p-3.5 sm:p-4">High technical detail</td>
                  <td className="p-3.5 sm:p-4">Easy-to-read layout</td>
                </tr>
                <tr className="bg-[#FAFCFF]">
                  <td className="p-3.5 sm:p-4 font-semibold text-[#52606D]">Best For</td>
                  <td className="p-3.5 sm:p-4">Restoration and verification</td>
                  <td className="p-3.5 sm:p-4">Buying decisions and MSRP details</td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#52606D]">Availability</td>
                  <td className="p-3.5 sm:p-4">Modern and classic Fords</td>
                  <td className="p-3.5 sm:p-4">Mostly modern Ford models</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Supported Models Grid */}
        <div className="max-w-[1440px] mx-auto mb-16">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#111827] mb-2">
              Get the Build Sheet for Any Ford Model
            </h3>
            <p className="text-xs sm:text-sm text-[#52606D]">
              Our Ford VIN decoder build sheet tool works seamlessly across the entire Ford lineup.
            </p>
          </div>

          <div className="bg-[#EEF4FB] rounded-2xl p-6 sm:p-8 border border-[#DCE2E9] space-y-6 max-w-5xl mx-auto">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#003478] mb-3">Modern Ford Models</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
                {['Ford Mustang', 'Ford F-150', 'Ford F-250', 'Ford Explorer', 'Ford Bronco', 'Ford Escape', 'Ford Ranger', 'Ford Edge', 'Ford Expedition', 'Ford Fusion', 'Ford Focus', 'Ford Maverick'].map((m) => (
                  <button
                    key={m}
                    onClick={() => onSelectModelVin('1FTFW1E85MFA12345')}
                    className="p-2.5 bg-white hover:bg-[#003478] hover:text-white rounded-xl text-xs font-semibold text-[#111827] border border-[#DCE2E9] transition-all text-center cursor-pointer shadow-2xs"
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#003478] mb-3">Classic Ford Models</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {['Ford Model T', 'Ford Model A', 'Ford Thunderbird', 'Ford Galaxie', 'Ford Fairlane', 'Ford Falcon', 'Ford Torino', 'Ford Mustang Shelby GT500', 'Ford Bronco (1st gen)', 'Ford F100', 'Ford Custom', 'Ford Pinto'].map((m) => (
                  <button
                    key={m}
                    onClick={() => onSelectModelVin('1FTEW1EF5DKD98765')}
                    className="p-2.5 bg-white hover:bg-[#003478] hover:text-white rounded-xl text-xs font-semibold text-[#111827] border border-[#DCE2E9] transition-all text-center cursor-pointer shadow-2xs"
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-[1440px] mx-auto mb-16">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold font-heading text-[#111827] mb-2">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-[#52606D]">
              Everything you need to know about Ford factory build sheets.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#DCE2E9] rounded-xl overflow-hidden bg-white shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-[#111827] hover:bg-[#EEF4FB] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#52606D] transition-transform ${openFaqIndex === idx ? 'rotate-180 text-[#003478]' : ''}`} />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#52606D] bg-[#FAFCFF] border-t border-[#DCE2E9] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-[#003478] rounded-2xl p-8 sm:p-12 text-center text-white relative overflow-hidden mb-8 max-w-[1440px] mx-auto">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
              Ready to Discover Your Ford's Factory DNA?
            </h3>
            <p className="text-sm sm:text-base text-[#DCE8F5]">
              Instant access to authentic factory build sheets and Monroney window stickers for any Ford vehicle.
            </p>
            <div className="pt-2">
              <button
                onClick={onScrollToLookup}
                className="px-8 py-3.5 bg-white text-[#003478] hover:bg-[#F1F4F8] font-bold text-sm sm:text-base rounded-xl shadow-lg transition-all cursor-pointer"
              >
                Lookup VIN Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
