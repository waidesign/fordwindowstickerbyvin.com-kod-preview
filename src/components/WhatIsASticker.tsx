import React from 'react';
import { FileText, Sparkles, CheckCircle2 } from 'lucide-react';

interface WhatIsAStickerProps {
  onOpenSampleSticker?: () => void;
}

export const WhatIsASticker: React.FC<WhatIsAStickerProps> = () => {
  return (
    <section className="py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-[#DCE2E9]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Concept & Risk Framing */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FB] text-[#003478] text-xs font-bold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              The Official Monroney Label
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827] tracking-tight leading-tight">
              What is a Ford Window Sticker?
            </h2>

            <p className="text-base sm:text-lg text-[#52606D] leading-relaxed">
              A window sticker (officially known as a <strong className="text-[#111827]">Monroney label</strong>) is the
              federally mandated legal document affixed to every new Ford at the assembly plant. It provides an
              unaltered record of how the vehicle left the factory—including the original MSRP, installed option packages,
              powertrain configurations, and safety ratings.
            </p>

            {/* Core Verification Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="bg-[#F7F9FC] rounded-xl p-4 border border-[#DCE2E9]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#003478] mb-1.5 font-heading">
                  <Sparkles className="w-3.5 h-3.5 text-[#003478]" />
                  <span>Unaltered Factory Record</span>
                </div>
                <p className="text-xs text-[#52606D] leading-relaxed">
                  Direct assembly-line specifications locked at production, free from dealer alterations.
                </p>
              </div>

              <div className="bg-[#F7F9FC] rounded-xl p-4 border border-[#DCE2E9]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#003478] mb-1.5 font-heading">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16834B]" />
                  <span>Federal Legal Standard</span>
                </div>
                <p className="text-xs text-[#52606D] leading-relaxed">
                  Compliant with the Automobile Information Disclosure Act of 1958 (Monroney Act).
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual (Vehicle + Floating Spec Cards) */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-gradient-to-tr from-[#001C3D] to-[#003478] rounded-3xl p-8 text-white overflow-hidden shadow-xl border border-[#DCE2E9]">
              {/* Subtle background glow & graphic */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

              {/* Top Bar on Card */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="px-2.5 py-1 bg-white text-[#003478] rounded font-bold text-xs font-heading">
                    FORD
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-heading">
                      2021 F-150 SUPERCREW 4X4
                    </div>
                    <div className="text-[11px] text-[#DCE8F5]">
                      VIN: 1FTFW1E85MFA12345
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#DCE8F5] uppercase block font-semibold">Total MSRP</span>
                  <span className="text-lg font-black font-mono text-white">$57,975</span>
                </div>
              </div>

              {/* Graphic Spec Layer */}
              <div className="py-6 space-y-3.5">
                {/* Floating Spec Tag 1 */}
                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3.5 rounded-xl flex items-center justify-between transition-transform hover:translate-x-1">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white text-[#003478] flex items-center justify-center font-bold text-xs">
                      302A
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Equipment Group 302A (Luxury)</div>
                      <div className="text-[11px] text-[#DCE8F5]">8-Way Power Seats, 12" SYNC 4 Touchscreen</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#DCE8F5]">+$5,730</span>
                </div>

                {/* Floating Spec Tag 2 */}
                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3.5 rounded-xl flex items-center justify-between transition-transform hover:translate-x-1">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white text-[#003478] flex items-center justify-center font-bold text-xs">
                      53A
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Max Trailer Tow Package</div>
                      <div className="text-[11px] text-[#DCE8F5]">Integrated Brake Controller, Class IV Hitch</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#DCE8F5]">+$1,350</span>
                </div>

                {/* Floating Spec Tag 3 */}
                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3.5 rounded-xl flex items-center justify-between transition-transform hover:translate-x-1">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white text-[#003478] flex items-center justify-center font-bold text-xs">
                      FX4
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">FX4 Off-Road Package</div>
                      <div className="text-[11px] text-[#DCE8F5]">Off-Road Tuned Shocks, Skid Plates, Hill Descent</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#DCE8F5]">+$1,005</span>
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-[#DCE8F5]">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>EPA Rated 20 MPG Comb.</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#DCE8F5]">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>NHTSA 5-Star Safety</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
