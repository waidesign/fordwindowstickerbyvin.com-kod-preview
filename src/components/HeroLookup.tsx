import React, { useState, useEffect } from 'react';
import { Search, CheckCircle2, AlertCircle, HelpCircle, ArrowRight, Loader2, Sparkles, ChevronDown } from 'lucide-react';
import { SAMPLE_STICKERS, SampleSticker } from '../data/mockData';
// @ts-ignore
import heroImg from '../assets/images/ford-kod-hero-img.webp';

interface HeroLookupProps {
  onOpenVinFinder: () => void;
  onOpenSampleSticker: (sticker?: SampleSticker) => void;
  initialVin?: string;
}

type TabType = 'vin' | 'plate' | 'ymm';

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
];

const FORD_MODELS_LIST = [
  'F-150', 'Super Duty (F-250/350)', 'Bronco', 'Bronco Sport', 'Mustang',
  'Mustang Mach-E', 'Explorer', 'Expedition', 'Ranger', 'Maverick',
  'Escape', 'Edge', 'Transit-150/250/350', 'Transit Connect', 'Fusion', 'Taurus', 'Focus'
];

export const HeroLookup: React.FC<HeroLookupProps> = ({
  onOpenVinFinder,
  onOpenSampleSticker,
  initialVin = '',
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('vin');
  const [vinInput, setVinInput] = useState(initialVin);
  const [plateInput, setPlateInput] = useState('');
  const [stateInput, setStateInput] = useState('TX');
  const [selectedYear, setSelectedYear] = useState('2022');
  const [selectedModel, setSelectedModel] = useState('F-150');
  const [selectedTrim, setSelectedTrim] = useState('XLT');
  const [isSearching, setIsSearching] = useState(false);
  const [searchStep, setSearchStep] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Update VIN if initialVin prop changes
  useEffect(() => {
    if (initialVin) {
      setVinInput(initialVin.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, ''));
    }
  }, [initialVin]);

  // Clean and sanitize VIN
  const cleanVin = vinInput.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, '');
  const isValidVin = cleanVin.length === 17;
  const isInvalidCharPresent = /[IOQ]/i.test(vinInput);

  const handleVinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase();
    setVinInput(val);
    setErrorMessage('');
  };

  const handlePresetSelect = (presetVin: string) => {
    setVinInput(presetVin);
    setErrorMessage('');
    setActiveTab('vin');
  };

  const handleLookupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (activeTab === 'vin') {
      if (!isValidVin) {
        setErrorMessage(
          `Please enter a complete 17-character VIN (currently ${cleanVin.length}/17).`
        );
        return;
      }

      // Execute simulation search
      setIsSearching(true);
      setSearchStep('Querying Ford factory Monroney archive...');

      setTimeout(() => {
        setSearchStep('Decoding factory options, packages & MSRP...');
      }, 700);

      setTimeout(() => {
        setSearchStep('Generating pixel-accurate Monroney sticker...');
      }, 1400);

      setTimeout(() => {
        setIsSearching(false);
        // Find matching or fallback
        const matched = SAMPLE_STICKERS[cleanVin] || {
          ...SAMPLE_STICKERS['1FTFW1E85MFA12345'],
          vin: cleanVin,
        };
        onOpenSampleSticker(matched);
      }, 2000);
    } else if (activeTab === 'plate') {
      if (!plateInput.trim()) {
        setErrorMessage('Please enter a valid license plate number.');
        return;
      }
      setIsSearching(true);
      setSearchStep(`Resolving ${stateInput} plate ${plateInput.toUpperCase()} with DMV registry...`);

      setTimeout(() => {
        setIsSearching(false);
        onOpenSampleSticker(SAMPLE_STICKERS['1FTFW1E85MFA12345']);
      }, 1600);
    } else {
      setIsSearching(true);
      setSearchStep(`Matching ${selectedYear} Ford ${selectedModel} factory build sheets...`);

      setTimeout(() => {
        setIsSearching(false);
        onOpenSampleSticker(SAMPLE_STICKERS['1FTFW1E85MFA12345']);
      }, 1600);
    }
  };

  return (
    <section
      id="lookup-section"
      className="relative text-white pt-24 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-[#001C3D]/75 pointer-events-none" />
      {/* Subtle geometric background texture for editorial depth */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto text-center">


        {/* H1 Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading tracking-tight text-white leading-tight mb-2.5">
          Get Your Ford Window Sticker by VIN
        </h1>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-base text-[#DCE8F5] max-w-xl mx-auto leading-relaxed mb-7">
          Lookup and generate original factory window stickers for any Ford vehicle.
          Retrieve exact original MSRP, itemized factory options, and build specs.
        </p>

        {/* White Lookup Card (Streamlined & Compact) */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-4 sm:p-5 sm:px-6 shadow-[0_12px_32px_rgba(0,28,61,0.18)] border border-[#DCE2E9] text-[#111827] text-left">
          {/* Segmented Control Tabs */}
          <div
            className="grid grid-cols-3 gap-1 p-1 bg-[#F1F4F8] rounded-xl border border-[#DCE2E9] mb-4"
            role="tablist"
            aria-label="Lookup mode tabs"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'vin'}
              onClick={() => {
                setActiveTab('vin');
                setErrorMessage('');
              }}
              className={`py-2 px-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'vin'
                  ? 'bg-[#003478] text-white shadow-sm'
                  : 'text-[#52606D] hover:text-[#111827] hover:bg-white/60'
              }`}
            >
              <span className="font-heading">By VIN</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'plate'}
              onClick={() => {
                setActiveTab('plate');
                setErrorMessage('');
              }}
              className={`py-2 px-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'plate'
                  ? 'bg-[#003478] text-white shadow-sm'
                  : 'text-[#52606D] hover:text-[#111827] hover:bg-white/60'
              }`}
            >
              <span className="font-heading">License Plate</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'ymm'}
              onClick={() => {
                setActiveTab('ymm');
                setErrorMessage('');
              }}
              className={`py-2 px-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'ymm'
                  ? 'bg-[#003478] text-white shadow-sm'
                  : 'text-[#52606D] hover:text-[#111827] hover:bg-white/60'
              }`}
            >
              <span className="font-heading">Year, Make, Model</span>
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleLookupSubmit}>
            {/* Tab 1: By VIN */}
            {activeTab === 'vin' && (
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label
                      htmlFor="vin-input-field"
                      className="text-xs font-bold text-[#111827]"
                    >
                      Enter 17-Character Ford VIN
                    </label>
                    <button
                      type="button"
                      onClick={onOpenVinFinder}
                      className="text-xs font-semibold text-[#003478] hover:text-[#00285E] hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>Where to find VIN?</span>
                    </button>
                  </div>

                  {/* VIN Input with Live Formatting */}
                  <div className="relative">
                    <input
                      id="vin-input-field"
                      type="text"
                      maxLength={17}
                      placeholder="e.g. 1FTFW1E85MFA12345"
                      value={vinInput}
                      onChange={handleVinChange}
                      className={`w-full h-11 sm:h-12 px-3.5 bg-white border rounded-xl font-vin text-sm sm:text-base tracking-wider text-[#111827] placeholder:text-[#7B8794] placeholder:normal-case placeholder:font-body focus:outline-none transition-all ${
                        isValidVin
                          ? 'border-[#16834B] shadow-[0_0_0_2px_rgba(22,131,75,0.15)]'
                          : 'border-[#DCE2E9] focus:border-[#003478] focus:shadow-[0_0_0_2px_rgba(0,52,120,0.12)]'
                      }`}
                      autoComplete="off"
                      spellCheck="false"
                    />

                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-[#7B8794] font-mono">
                        {cleanVin.length}/17
                      </span>
                      {isValidVin && (
                        <CheckCircle2 className="w-4 h-4 text-[#16834B] animate-fadeIn" />
                      )}
                    </div>
                  </div>

                  {/* Live Validation & Status Messages */}
                  <div className="mt-1.5 flex flex-wrap items-center justify-between gap-1.5 min-h-[18px]">
                    {isValidVin ? (
                      <div className="flex items-center gap-1 text-xs font-semibold text-[#16834B]">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>Valid VIN format • Ready for instant retrieval</span>
                      </div>
                    ) : isInvalidCharPresent ? (
                      <div className="flex items-center gap-1 text-xs font-semibold text-[#B7791F]">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>VINs never contain letters I, O, or Q.</span>
                      </div>
                    ) : cleanVin.length > 0 ? (
                      <div className="text-xs text-[#52606D]">
                        Enter {17 - cleanVin.length} more characters...
                      </div>
                    ) : (
                      <div className="text-xs text-[#7B8794]">
                        Supports all 1990–2026+ Ford trucks, SUVs, cars, and commercial vans.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: By License Plate */}
            {activeTab === 'plate' && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                  <div className="sm:col-span-8">
                    <label
                      htmlFor="plate-input-field"
                      className="block text-xs font-bold text-[#111827] mb-1"
                    >
                      U.S. License Plate Number
                    </label>
                    <input
                      id="plate-input-field"
                      type="text"
                      placeholder="e.g. 7XYZ890"
                      value={plateInput}
                      onChange={(e) => setPlateInput(e.target.value.toUpperCase())}
                      className="w-full h-11 sm:h-12 px-3.5 bg-white border border-[#DCE2E9] rounded-xl font-heading font-bold text-base text-[#111827] focus:outline-none focus:border-[#003478] focus:shadow-[0_0_0_2px_rgba(0,52,120,0.12)] transition-all"
                    />
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="state-select-field"
                      className="block text-xs font-bold text-[#111827] mb-1"
                    >
                      State
                    </label>
                    <div className="relative">
                      <select
                        id="state-select-field"
                        value={stateInput}
                        onChange={(e) => setStateInput(e.target.value)}
                        className="w-full h-11 sm:h-12 pl-3 pr-9 bg-white border border-[#DCE2E9] rounded-xl font-semibold text-sm text-[#111827] appearance-none focus:outline-none focus:border-[#003478] focus:shadow-[0_0_0_2px_rgba(0,52,120,0.12)] transition-all cursor-pointer"
                      >
                        {US_STATES.map((st) => (
                          <option key={st} value={st}>
                            {st} (USA)
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#52606D] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[#52606D]">
                  Registry lookup securely resolves your license plate to its factory VIN in all 50 states.
                </p>
              </div>
            )}

            {/* Tab 3: By Year, Make, Model */}
            {activeTab === 'ymm' && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div>
                    <label
                      htmlFor="year-select-field"
                      className="block text-xs font-bold text-[#111827] mb-1"
                    >
                      Model Year
                    </label>
                    <div className="relative">
                      <select
                        id="year-select-field"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="w-full h-11 sm:h-12 pl-3 pr-9 bg-white border border-[#DCE2E9] rounded-xl font-semibold text-sm text-[#111827] appearance-none focus:outline-none focus:border-[#003478] focus:shadow-[0_0_0_2px_rgba(0,52,120,0.12)] cursor-pointer"
                      >
                        {Array.from({ length: 37 }, (_, i) => 2026 - i).map((yr) => (
                          <option key={yr} value={yr}>
                            {yr}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#52606D] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="make-input-field"
                      className="block text-xs font-bold text-[#111827] mb-1"
                    >
                      Make
                    </label>
                    <input
                      id="make-input-field"
                      type="text"
                      value="Ford"
                      disabled
                      className="w-full h-11 sm:h-12 px-3 bg-[#F1F4F8] border border-[#DCE2E9] rounded-xl font-semibold text-sm text-[#52606D]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="model-select-field"
                      className="block text-xs font-bold text-[#111827] mb-1"
                    >
                      Model
                    </label>
                    <div className="relative">
                      <select
                        id="model-select-field"
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(e.target.value)}
                        className="w-full h-11 sm:h-12 pl-3 pr-9 bg-white border border-[#DCE2E9] rounded-xl font-semibold text-sm text-[#111827] appearance-none focus:outline-none focus:border-[#003478] focus:shadow-[0_0_0_2px_rgba(0,52,120,0.12)] cursor-pointer"
                      >
                        {FORD_MODELS_LIST.map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#52606D] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[#52606D]">
                  Select your year and model to explore standard packages and factory pricing archives.
                </p>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="mt-2.5 p-2.5 bg-red-50 border border-red-200 rounded-lg text-xs font-semibold text-[#C53030] flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submit Button & Secondary Sample Link */}
            <div className="mt-4 pt-3.5 border-t border-[#DCE2E9] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => onOpenSampleSticker()}
                className="text-xs font-semibold text-[#003478] hover:text-[#00285E] hover:underline inline-flex items-center gap-1 cursor-pointer order-2 sm:order-1"
              >
                <span>View sample window sticker</span>
                <ArrowRight className="w-3 h-3" />
              </button>

              <button
                type="submit"
                disabled={isSearching}
                className="w-full sm:w-auto min-w-[200px] h-11 sm:h-12 px-6 bg-[#003478] hover:bg-[#00285E] active:bg-[#001C3D] text-white font-heading font-bold text-sm sm:text-base rounded-xl transition-all shadow-sm hover:translate-y-[-1px] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-80 order-1 sm:order-2"
              >
                {isSearching ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-xs">{searchStep || 'Processing...'}</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>Get Window Sticker</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
