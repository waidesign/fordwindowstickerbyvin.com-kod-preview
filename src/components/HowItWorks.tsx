import React from 'react';
import { Search, Send, Download, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';

interface HowItWorksProps {
  onOpenVinFinder: () => void;
  onScrollToLookup: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenVinFinder, onScrollToLookup }) => {
  const steps = [
    {
      number: '01',
      title: 'Find Your VIN',
      icon: <Search className="w-6 h-6 text-[#003478]" />,
      description: 'Locate the 17-character vehicle identification number on your dashboard, door jamb, insurance card, or title.',
      actionLabel: 'Where to find VIN?',
      isFinderTrigger: true,
    },
    {
      number: '02',
      title: 'Submit Your Request',
      icon: <Send className="w-6 h-6 text-[#003478]" />,
      description: 'Enter your VIN or license plate into our instant decoder. Our automated system matches official factory build records.',
      actionLabel: null,
      isFinderTrigger: false,
    },
    {
      number: '03',
      title: 'Get Your Sticker Instantly',
      icon: <Download className="w-6 h-6 text-[#003478]" />,
      description: 'Receive your high-resolution original Monroney window sticker PDF instantly, ready to print, save, or share with buyers.',
      actionLabel: null,
      isFinderTrigger: false,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-[#DCE2E9]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FB] text-[#003478] text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827] tracking-tight leading-tight mb-4">
            How to Retrieve Your Window Sticker
          </h2>
          <p className="text-base sm:text-lg text-[#52606D] leading-relaxed">
            Get an exact factory replica of your Ford Monroney label in under 60 seconds with three easy steps.
          </p>
        </div>

        {/* 3-Step Stepper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#F7F9FC] rounded-2xl p-8 border border-[#DCE2E9] flex flex-col justify-between relative group hover:border-[#003478] hover:bg-white transition-all shadow-[0_1px_3px_rgba(0,28,61,0.04)]"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#EEF4FB] text-[#003478] flex items-center justify-center border border-[#DCE2E9] shadow-sm transition-colors">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-black font-mono text-[#7B8794]/50 group-hover:text-[#003478]/30 transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold font-heading text-[#111827] mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-[#52606D] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Step Action / Helper */}
              <div className="pt-4 border-t border-[#DCE2E9]/60">
                {step.isFinderTrigger ? (
                  <button
                    onClick={onOpenVinFinder}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003478] hover:text-[#00285E] hover:underline cursor-pointer"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>View all VIN locations guide &rarr;</span>
                  </button>
                ) : index === 1 ? (
                  <button
                    onClick={onScrollToLookup}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003478] hover:text-[#00285E] hover:underline cursor-pointer"
                  >
                    <span>Jump to VIN lookup form &rarr;</span>
                  </button>
                ) : (
                  <div className="text-xs font-semibold text-[#16834B] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Instant Digital PDF Delivery</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
