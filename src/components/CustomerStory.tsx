import React from 'react';
import { FileCheck, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SAMPLE_STICKERS } from '../data/mockData';

interface CustomerStoryProps {
  onInspectStephenSticker: () => void;
}

export const CustomerStory: React.FC<CustomerStoryProps> = ({ onInspectStephenSticker }) => {
  return (
    <section className="py-20 md:py-24 bg-[#EEF4FB] px-4 sm:px-6 lg:px-8 border-b border-[#DCE2E9]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#DCE2E9] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Editorial Story */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FB] text-[#003478] text-xs font-bold uppercase tracking-wider">
              <FileCheck className="w-3.5 h-3.5" />
              Verified Case Study
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#111827] tracking-tight leading-snug">
              How Stephen Sold His 2013 F-150 in Under 48 Hours with an Original Window Sticker
            </h2>

            <p className="text-sm sm:text-base text-[#52606D] leading-relaxed">
              When Stephen listed his 2013 Ford F-150 XLT for sale, interested buyers hesitated over whether the truck had the authentic factory <strong className="text-[#111827]">Max Trailer Tow Package (535)</strong> and <strong className="text-[#111827]">XLT Chrome Package (86X)</strong>, or if parts had been added aftermarket.
            </p>

            <p className="text-sm sm:text-base text-[#52606D] leading-relaxed">
              Stephen generated his original factory Monroney window sticker by VIN and sent the PDF directly to a serious buyer. With indisputable proof of the $44,610 original MSRP and factory-installed tow equipment, the buyer agreed to full asking price within two days.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onInspectStephenSticker}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#003478] hover:bg-[#00285E] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-sm cursor-pointer"
              >
                <span>View Stephen's 2013 F-150 Sticker</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5 text-xs text-[#16834B] font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Sold in 2 Days • Full Asking Price</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Sticker Snapshot Card */}
          <div className="lg:col-span-5 bg-[#F7F9FC] rounded-2xl p-6 border border-[#DCE2E9]">
            <div className="flex items-center justify-between border-b border-[#DCE2E9] pb-3 mb-4">
              <span className="text-xs font-bold text-[#003478] uppercase tracking-wider font-heading">
                Factory Data Snapshot
              </span>
              <span className="text-[11px] font-mono text-[#7B8794]">VIN: 1FTEW1EF5DKD98765</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-[#DCE2E9]/60">
                <span className="text-[#52606D]">Vehicle</span>
                <span className="font-bold text-[#111827]">2013 Ford F-150 4x4 SuperCrew</span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#DCE2E9]/60">
                <span className="text-[#52606D]">Base MSRP</span>
                <span className="font-mono font-bold text-[#111827]">$37,495</span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#DCE2E9]/60">
                <span className="text-[#52606D]">Trailer Tow Package (535)</span>
                <span className="font-mono font-bold text-[#003478]">+$595 (Verified OEM)</span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#DCE2E9]/60">
                <span className="text-[#52606D]">XLT Chrome Package (86X)</span>
                <span className="font-mono font-bold text-[#003478]">+$1,495 (Verified OEM)</span>
              </div>

              <div className="flex justify-between py-1.5 bg-[#EEF4FB] p-2.5 rounded-lg font-bold">
                <span className="text-[#003478]">Original Total MSRP</span>
                <span className="font-mono text-[#003478] text-sm">$44,610</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#DCE2E9] text-[11px] text-[#7B8794] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#16834B] shrink-0" />
              <span>Authentic historical Monroney build data verified from factory archives.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
