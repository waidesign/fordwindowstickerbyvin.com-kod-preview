import React from 'react';
import { MapPin, ArrowRight, ShieldCheck, Car, FileText, Smartphone } from 'lucide-react';

interface WhereToFindVinSectionProps {
  onScrollToLookup: () => void;
  onOpenVinFinderModal: () => void;
}

export const WhereToFindVinSection: React.FC<WhereToFindVinSectionProps> = ({
  onScrollToLookup,
}) => {
  const vinLocations = [
    {
      title: "Driver's Side Dashboard",
      description: "Stand outside the driver's side and look through the lower corner of the windshield where the glass meets the dash panel.",
      icon: Car,
    },
    {
      title: "Driver's Door Jamb",
      description: "Open the driver's door and check the federal safety certification sticker affixed to the door post or B-pillar.",
      icon: ShieldCheck,
    },
    {
      title: "Registration & Insurance",
      description: "Check your state vehicle registration card, title certificate, or active auto insurance policy documents.",
      icon: FileText,
    },
    {
      title: "FordPass® App or SYNC® Screen",
      description: "Open the FordPass mobile app under your vehicle details, or go to Settings > General > About SYNC on your center touchscreen.",
      icon: Smartphone,
    },
  ];

  return (
    <section
      id="where-to-find-vin"
      className="py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-[#DCE2E9]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FB] text-[#003478] text-xs font-bold uppercase tracking-wider mb-3 border border-[#DCE2E9]">
            <MapPin className="w-3.5 h-3.5 text-[#003478]" />
            Quick Reference
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827] tracking-tight leading-tight mb-4">
            Where to Find Your Ford VIN
          </h2>
          <p className="text-base sm:text-lg text-[#52606D] leading-relaxed">
            Before entering your VIN to generate your window sticker, make sure you have the exact 17-character code. Here is where you can easily find it on your vehicle or documents:
          </p>
        </div>

        {/* Simple Text Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {vinLocations.map((loc, idx) => {
            const Icon = loc.icon;
            return (
              <div
                key={idx}
                className="bg-[#F7F9FC] rounded-2xl p-6 sm:p-8 border border-[#DCE2E9] hover:border-[#003478]/40 hover:shadow-md transition-all flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#DCE2E9] text-[#003478] flex items-center justify-center shrink-0 shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-[#111827] mb-2">
                    {loc.title}
                  </h3>
                  <p className="text-sm text-[#52606D] leading-relaxed">
                    {loc.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="bg-[#EEF4FB] rounded-2xl border border-[#DCE2E9] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold font-heading text-[#111827] mb-1">
              Have your 17-character VIN ready?
            </h4>
            <p className="text-sm text-[#52606D]">
              Ford VINs never include the letters I, O, or Q to prevent confusion with numbers 1 and 0.
            </p>
          </div>
          <button
            onClick={onScrollToLookup}
            className="px-6 py-3 rounded-xl bg-[#003478] hover:bg-[#00285E] text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs transition-all hover:translate-y-[-1px] shrink-0 cursor-pointer"
          >
            <span>Look Up Window Sticker</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
