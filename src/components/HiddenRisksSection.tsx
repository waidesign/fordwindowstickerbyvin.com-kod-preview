import React from 'react';
import { AlertCircle, PackageCheck, CircleDollarSign, ArrowRight, ShieldCheck, CheckCircle2, Layers } from 'lucide-react';

interface HiddenRisksSectionProps {
  onScrollToLookup: () => void;
  onOpenSampleSticker: () => void;
}

export const HiddenRisksSection: React.FC<HiddenRisksSectionProps> = ({
  onScrollToLookup,
  onOpenSampleSticker,
}) => {
  const risks = [
    {
      id: 'options',
      title: 'Factory options are unclear',
      badge: 'Equipment Verification',
      riskDesc:
        'A listing may mention premium features or "fully loaded" specs, but without the original build sheet, it is difficult to confirm which options were genuine factory-installed equipment versus aftermarket additions.',
      solutionDesc:
        'The Monroney sticker itemizes every factory-installed option package with OEM codes (e.g. FX4 Off-Road, Max Tow, Co-Pilot360).',
      icon: PackageCheck,
      impact: 'Avoid paying for missing packages',
    },
    {
      id: 'trims',
      title: 'Trim details can be confusing',
      badge: 'Package Contents',
      riskDesc:
        'Ford trims and packages vary substantially across model years. What was standard in a 2021 Lariat 502A might have been an optional add-on in a 2018 model, making trim comparisons tricky.',
      solutionDesc:
        'The sticker clearly verifies the exact trim level, cab configuration, wheelbase, engine displacement, and equipment group.',
      icon: Layers,
      impact: 'Know exactly what was built',
    },
    {
      id: 'pricing',
      title: 'Original pricing is missing',
      badge: 'Valuation Baseline',
      riskDesc:
        'Pre-owned vehicle listings rarely include the original window sticker MSRP, leaving buyers and sellers guessing when calculating fair market depreciation and resale value.',
      solutionDesc:
        'View the original base vehicle price, individual optional equipment charges, and destination fees for total price clarity.',
      icon: CircleDollarSign,
      impact: 'Benchmark fair market value',
    },
  ];

  return (
    <section id="hidden-risks" className="py-20 md:py-24 bg-[#F7F9FC] px-4 sm:px-6 lg:px-8 border-b border-[#DCE2E9]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#003478] text-xs font-bold uppercase tracking-wider mb-3 border border-[#DCE2E9] shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#003478]" />
            Pre-Owned Buyer Protection
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827] tracking-tight leading-tight mb-4">
            The Hidden Risks Used Ford Buyers Face
          </h2>
          <p className="text-base sm:text-lg text-[#52606D] leading-relaxed">
            Buying a pre-owned Ford can feel like a guessing game. Without a reliable{' '}
            <strong className="text-[#111827] font-semibold">Ford window sticker lookup by VIN</strong>,
            you run into several common risks.
          </p>
        </div>

        {/* 3 Modern Structured Risk Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {risks.map((risk) => {
            const Icon = risk.icon;
            return (
              <div
                key={risk.id}
                className="bg-white rounded-2xl border border-[#DCE2E9] p-6 lg:p-7 shadow-[0_2px_8px_rgba(0,28,61,0.04)] hover:shadow-md hover:border-[#003478]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#EEF4FB] text-[#003478] flex items-center justify-center border border-[#DCE2E9]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#F1F4F8] text-[#52606D] rounded-full border border-[#DCE2E9]">
                      {risk.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold font-heading text-[#111827] mb-3 leading-snug">
                    {risk.title}
                  </h3>

                  {/* The Problem / Risk Description */}
                  <p className="text-sm text-[#52606D] leading-relaxed mb-5">
                    {risk.riskDesc}
                  </p>
                </div>

                {/* The Window Sticker Solution Box */}
                <div className="pt-4 border-t border-[#DCE2E9] bg-[#F7F9FC] -mx-6 -mb-6 p-5 rounded-b-2xl">
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#16834B]/10 text-[#16834B] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#16834B] block mb-1">
                        How The Sticker Solves It
                      </span>
                      <p className="text-xs text-[#52606D] leading-relaxed">
                        {risk.solutionDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Verification Banner */}
        <div className="bg-white rounded-2xl border border-[#DCE2E9] p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="hidden sm:flex w-12 h-12 rounded-xl bg-[#EEF4FB] text-[#003478] items-center justify-center shrink-0 border border-[#DCE2E9]">
              <CircleDollarSign className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold font-heading text-[#111827]">
                Don't Rely on Seller Guesswork
              </h4>
              <p className="text-xs sm:text-sm text-[#52606D]">
                Get the authentic factory Monroney label to verify every option, package, and MSRP before you buy or sell.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-center">
            <button
              onClick={onOpenSampleSticker}
              className="px-4 py-2.5 rounded-xl border border-[#DCE2E9] text-xs font-bold text-[#52606D] hover:text-[#003478] hover:bg-[#F1F4F8] transition-colors cursor-pointer"
            >
              View Sample Sticker
            </button>
            <button
              onClick={onScrollToLookup}
              className="px-5 py-2.5 rounded-xl bg-[#003478] hover:bg-[#00285E] text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all hover:translate-y-[-1px] cursor-pointer"
            >
              <span>Verify Your Ford VIN</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
