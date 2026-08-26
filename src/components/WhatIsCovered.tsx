import React from 'react';
import { SPEC_CARDS } from '../data/mockData';
import { FileSpreadsheet, ShieldCheck, ChevronRight } from 'lucide-react';

interface WhatIsCoveredProps {
  onOpenSampleSticker: () => void;
}

export const WhatIsCovered: React.FC<WhatIsCoveredProps> = ({ onOpenSampleSticker }) => {
  return (
    <section id="what-is-covered" className="py-20 md:py-24 bg-[#F7F9FC] px-4 sm:px-6 lg:px-8 border-b border-[#DCE2E9]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FB] text-[#003478] text-xs font-bold uppercase tracking-wider mb-3">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            Complete Factory Documentation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827] tracking-tight leading-tight mb-4">
            What’s Covered on Your Original Ford Window Sticker
          </h2>
          <p className="text-base sm:text-lg text-[#52606D] leading-relaxed">
            Every Monroney label includes 9 distinct data sections required by federal law, providing a complete,
            line-item audit of your vehicle’s factory build.
          </p>
        </div>

        {/* 9 Factory Data Spec Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPEC_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-6 border border-[#DCE2E9] shadow-[0_1px_3px_rgba(0,28,61,0.04)] hover:border-[#003478] hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge and Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#EEF4FB] text-[#003478] font-heading">
                    {card.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#7B8794]">
                    {card.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-[#111827] group-hover:text-[#003478] transition-colors mb-2.5">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#52606D] leading-relaxed mb-5">
                  {card.description}
                </p>
              </div>

              {/* Spec Line Items */}
              <div className="pt-4 border-t border-[#DCE2E9]/60">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B8794] block mb-2">
                  Key Data Points
                </span>
                <div className="space-y-1.5">
                  {card.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#111827] font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#003478] shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-6 bg-[#EEF4FB] rounded-2xl border border-[#DCE2E9] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white text-[#003478] flex items-center justify-center shrink-0 border border-[#DCE2E9]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#111827] font-heading">
                All 9 Sections Formatted in Official Legal Layout
              </div>
              <div className="text-xs text-[#52606D]">
                Exported as a 300 DPI high-resolution PDF document ready for appraisal, insurance, and resale.
              </div>
            </div>
          </div>

          <button
            onClick={onOpenSampleSticker}
            className="px-5 py-2.5 bg-[#003478] hover:bg-[#00285E] text-white text-xs font-bold rounded-lg transition-colors shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <span>View Full Sample Sticker</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
