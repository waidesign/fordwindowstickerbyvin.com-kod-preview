import React from 'react';
import { Database, Calendar, Award, Zap, ShieldCheck, Headphones, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    {
      icon: <Database className="w-5 h-5 text-[#003478]" />,
      title: 'Direct Factory Records',
      description: 'Accurate Monroney data extracted directly from authentic North American vehicle production archives.',
    },
    {
      icon: <Calendar className="w-5 h-5 text-[#003478]" />,
      title: '1990–2026+ Coverage',
      description: 'Comprehensive coverage spanning over three decades of Ford trucks, SUVs, passenger cars, and EVs.',
    },
    {
      icon: <Award className="w-5 h-5 text-[#003478]" />,
      title: 'Classic & Specialty Models',
      description: 'Full support for SVT Lightning, Cobra, Shelby GT350/500, Raptor, Tremor, and Ford GT supercars.',
    },
    {
      icon: <Zap className="w-5 h-5 text-[#003478]" />,
      title: 'Instant PDF Generation',
      description: 'Generate high-resolution 300 DPI printable window stickers in seconds without waiting.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#003478]" />,
      title: 'Transparent Pricing',
      description: 'Affordable one-time lookups with no recurring subscription traps or hidden fees.',
    },
    {
      icon: <Headphones className="w-5 h-5 text-[#003478]" />,
      title: '24/7 Specialist Support',
      description: 'Dedicated automotive data support team ready to assist with VIN questions and custom build inquiries.',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#F7F9FC] px-4 sm:px-6 lg:px-8 border-b border-[#DCE2E9]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FB] text-[#003478] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Why Choose Our Decoder
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827] tracking-tight leading-tight mb-4">
            Why Our Ford Window Stickers Stand Apart from the Rest?
          </h2>
          <p className="text-base sm:text-lg text-[#52606D] leading-relaxed">
            Engineered specifically for Ford vehicles with precision data formatting matching the original dealer lot labels.
          </p>
        </div>

        {/* 6-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-[#DCE2E9] shadow-[0_1px_3px_rgba(0,28,61,0.04)] hover:border-[#003478] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EEF4FB] text-[#003478] flex items-center justify-center mb-4 border border-[#DCE2E9]">
                {item.icon}
              </div>
              <h3 className="text-base font-bold font-heading text-[#111827] mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#52606D] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
