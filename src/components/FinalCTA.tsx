import React from 'react';
import { Search, Sparkles, ArrowUp } from 'lucide-react';

interface FinalCTAProps {
  onScrollToHero: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onScrollToHero }) => {
  return (
    <section className="py-20 md:py-24 bg-[#003478] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#DCE8F5] border border-white/20 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Fast, Accurate & Reliable
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white leading-tight">
          Ready to Retrieve Your Original Ford Window Sticker?
        </h2>

        <p className="text-base sm:text-lg text-[#DCE8F5] max-w-2xl mx-auto leading-relaxed">
          Enter your 17-character VIN or license plate to look up authentic factory MSRP, installed option packages, and EPA ratings in under 60 seconds.
        </p>

        <div className="pt-4">
          <button
            onClick={onScrollToHero}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-[#003478] hover:bg-[#EEF4FB] font-heading font-extrabold text-base rounded-xl transition-all shadow-xl hover:translate-y-[-2px] cursor-pointer"
          >
            <Search className="w-5 h-5 text-[#003478]" />
            <span>Look Up Your Ford VIN Now</span>
            <ArrowUp className="w-4 h-4 text-[#003478]" />
          </button>
        </div>
      </div>
    </section>
  );
};
