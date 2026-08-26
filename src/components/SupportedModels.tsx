import React, { useState } from 'react';
import { Truck, Car, Compass, Zap, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface SupportedModelsProps {
  onSelectModelVin: (vin: string) => void;
}

export const SupportedModels: React.FC<SupportedModelsProps> = ({ onSelectModelVin }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const modelColumns = [
    {
      id: 'trucks',
      category: 'Trucks',
      icon: Truck,
      description: 'America’s best-selling pickups & commercial haulers',
      models: [
        { name: 'F-150', sampleVin: '1FTFW1E85MFA12345', tag: 'Most Popular' },
        { name: 'Super Duty (F-250 / F-350 / F-450)', sampleVin: '1FT8W3BT3NED12345', tag: 'Heavy Duty' },
        { name: 'Ranger', sampleVin: '1FTER4FH4LLA12345', tag: 'Midsize' },
        { name: 'Maverick', sampleVin: '3FTTW8F94NRA12345', tag: 'Hybrid/EcoBoost' },
        { name: 'F-150 Lightning', sampleVin: '1FTVW1EV8NWB12345', tag: '100% Electric' },
      ],
    },
    {
      id: 'suvs',
      category: 'SUVs & Crossovers',
      icon: Compass,
      description: 'Rugged 4x4 off-roaders & family 3-row haulers',
      models: [
        { name: 'Bronco', sampleVin: '1FMEU5DP7NLA45678', tag: '2 & 4-Door 4x4' },
        { name: 'Bronco Sport', sampleVin: '3FMCR9B65MRA12345', tag: 'Compact 4x4' },
        { name: 'Explorer', sampleVin: '1FMSK8DH8NGA12345', tag: '3-Row SUV' },
        { name: 'Expedition & MAX', sampleVin: '1FMJU1J87MEA12345', tag: 'Full-Size' },
        { name: 'Escape', sampleVin: '1FMCU9J93MUA12345', tag: 'Compact SUV' },
        { name: 'Edge', sampleVin: '2FMPK4K97RBA12345', tag: 'Midsize' },
      ],
    },
    {
      id: 'cars',
      category: 'Cars & Performance',
      icon: Car,
      description: 'V8 pony cars, track specials, sedans & hot hatches',
      models: [
        { name: 'Mustang (GT / EcoBoost / Dark Horse)', sampleVin: '1FA6P8CF4R5112345', tag: 'V8 / Fastback' },
        { name: 'Mustang Mach-E', sampleVin: '3FMTK3SU9PMA78901', tag: 'All-Electric' },
        { name: 'Fusion', sampleVin: '3FA6P0H77LR112345', tag: 'Sedan / Hybrid' },
        { name: 'Focus (incl. ST / RS)', sampleVin: '1FADP3K93HL112345', tag: 'Hatch / Sedan' },
        { name: 'Taurus (incl. SHO)', sampleVin: '1FAHP2KT7KG112345', tag: 'Twin-Turbo V6' },
        { name: 'Fiesta (incl. ST)', sampleVin: '3FADP4BJ1GM112345', tag: 'Subcompact' },
      ],
    },
    {
      id: 'commercial',
      category: 'Vans, EVs & Commercial',
      icon: Zap,
      description: 'Fleet vans, electrification & commercial chassis',
      models: [
        { name: 'Transit', sampleVin: '1FTBR1Y84NKA12345', tag: 'Cargo & Passenger' },
        { name: 'Transit Connect', sampleVin: 'NM0LS7E74N1112345', tag: 'Compact Van' },
        { name: 'E-Series (E-350 / E-450)', sampleVin: '1FDWE3FN7NDD12345', tag: 'Cutaway Chassis' },
        { name: 'F-150 Lightning EV', sampleVin: '1FTVW1EV8NWB12345', tag: 'Electric Truck' },
        { name: 'Escape Hybrid', sampleVin: '1FMCU9J93MUA12345', tag: 'FHEV' },
        { name: 'Escape Plug-In Hybrid', sampleVin: '1FMCU0E18NUA12345', tag: 'PHEV' },
      ],
    },
  ];

  const filteredColumns =
    activeCategory === 'all'
      ? modelColumns
      : modelColumns.filter((col) => col.id === activeCategory);

  return (
    <section
      id="supported-models"
      className="py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-[#DCE2E9]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FB] text-[#003478] text-xs font-bold uppercase tracking-wider mb-3 border border-[#DCE2E9]">
            <Truck className="w-3.5 h-3.5 text-[#003478]" />
            Full Lineup Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827] tracking-tight leading-tight mb-4">
            Ford Models We Support
          </h2>
          <p className="text-base sm:text-lg text-[#52606D] leading-relaxed">
            Our Ford sticker lookup can support many Ford cars, trucks, SUVs, vans, hybrids, EVs, and commercial vehicles.
            Coverage may vary based on the VIN, model year, and available records.
          </p>
        </div>

        {/* Category Quick Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap border ${
              activeCategory === 'all'
                ? 'bg-[#003478] text-white border-[#003478] shadow-xs'
                : 'bg-[#F7F9FC] text-[#52606D] border-[#DCE2E9] hover:bg-[#EEF4FB] hover:text-[#003478]'
            }`}
          >
            All Categories (23+ Models)
          </button>
          {modelColumns.map((col) => (
            <button
              key={col.id}
              type="button"
              onClick={() => setActiveCategory(col.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap border ${
                activeCategory === col.id
                  ? 'bg-[#003478] text-white border-[#003478] shadow-xs'
                  : 'bg-[#F7F9FC] text-[#52606D] border-[#DCE2E9] hover:bg-[#EEF4FB] hover:text-[#003478]'
              }`}
            >
              {col.category}
            </button>
          ))}
        </div>

        {/* 4-Column Structured Lineup Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredColumns.map((col) => {
            const Icon = col.icon;
            return (
              <div
                key={col.id}
                className="bg-[#F7F9FC] rounded-2xl border border-[#DCE2E9] overflow-hidden flex flex-col justify-between hover:border-[#003478]/40 hover:shadow-md transition-all group"
              >
                {/* Column Header */}
                <div className="p-5 border-b border-[#DCE2E9] bg-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#EEF4FB] text-[#003478] border border-[#DCE2E9] flex items-center justify-center group-hover:bg-[#003478] group-hover:text-white transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-heading text-[#111827]">
                        {col.category}
                      </h3>
                      <span className="text-[11px] text-[#7B8794] font-medium">
                        {col.models.length} Key Nameplates
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[#52606D] leading-snug">
                    {col.description}
                  </p>
                </div>

                {/* Model List Items */}
                <div className="p-4 space-y-2 flex-1">
                  {col.models.map((model, idx) => (
                    <div
                      key={idx}
                      onClick={() => onSelectModelVin(model.sampleVin)}
                      className="bg-white rounded-xl p-3 border border-[#DCE2E9]/80 hover:border-[#003478] hover:shadow-xs transition-all flex items-center justify-between gap-2 cursor-pointer group/item"
                    >
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-[#111827] group-hover/item:text-[#003478] transition-colors truncate">
                          {model.name}
                        </div>
                        <div className="text-[10px] font-medium text-[#7B8794]">
                          {model.tag}
                        </div>
                      </div>
                      <div className="w-6 h-6 rounded-lg bg-[#F7F9FC] group-hover/item:bg-[#EEF4FB] text-[#7B8794] group-hover/item:text-[#003478] flex items-center justify-center shrink-0 transition-colors">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column Footer */}
                <div className="p-3 bg-[#EEF4FB]/50 border-t border-[#DCE2E9] text-center">
                  <span className="text-[11px] font-semibold text-[#003478] flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#16834B]" />
                    All 17-digit VINs supported
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coverage Clarification Callout */}
        <div className="bg-[#EEF4FB] rounded-2xl border border-[#DCE2E9] p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#DCE2E9] text-[#003478] flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5 text-[#003478]" />
            </div>
            <div>
              <h4 className="text-sm font-bold font-heading text-[#111827] mb-1">
                Don't See Your Specific Ford Trim or Sub-Model Listed?
              </h4>
              <p className="text-xs sm:text-sm text-[#52606D] leading-relaxed max-w-2xl">
                We support virtually all North American market Ford passenger cars, trucks, SUVs, and commercial vehicles dating from 1990 to 2026+. Simply enter your 17-digit VIN in the lookup bar above to generate your authentic window sticker.
              </p>
            </div>
          </div>

          <a
            href="#hero-lookup"
            className="px-5 py-2.5 rounded-xl bg-[#003478] hover:bg-[#00285E] text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all hover:translate-y-[-1px] shrink-0 whitespace-nowrap cursor-pointer"
          >
            <span>Get your window sticker now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
