import React from 'react';
import { UserCheck, Tag, Building2, CheckCircle2 } from 'lucide-react';

export const WhoBenefits: React.FC = () => {
  const groups = [
    {
      icon: <UserCheck className="w-6 h-6 text-[#003478]" />,
      title: 'Vehicle Buyers',
      subtitle: 'Verify Before You Buy',
      benefits: [
        'Confirm seller option claims with factory proof before making an offer.',
        'Negotiate fair market purchase price using authentic base and total MSRP data.',
      ],
    },
    {
      icon: <Tag className="w-6 h-6 text-[#003478]" />,
      title: 'Private Sellers',
      subtitle: 'Build Buyer Trust & Sell Faster',
      benefits: [
        'Prove factory packages (FX4, Tow, Technology) to justify top asking prices.',
        'Eliminate buyer hesitation and stand out on listing platforms like Autotrader and Marketplace.',
      ],
    },
    {
      icon: <Building2 className="w-6 h-6 text-[#003478]" />,
      title: 'Dealers & Enthusiasts',
      subtitle: 'Streamline Appraisals & Document Heritage',
      benefits: [
        'Speed up trade-in appraisals by identifying rare trim options and axle ratios in seconds.',
        'Preserve and display original factory provenance for classic, Shelby, and Raptor models.',
      ],
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-[#DCE2E9]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FB] text-[#003478] text-xs font-bold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            Built for the Ford Community
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827] tracking-tight leading-tight mb-4">
            Who Benefits from a Factory Window Sticker
          </h2>
          <p className="text-base sm:text-lg text-[#52606D] leading-relaxed">
            Whether buying, selling, appraising, or collecting, access to original factory specifications is essential.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {groups.map((group, index) => (
            <div
              key={index}
              className="bg-[#F7F9FC] rounded-2xl p-8 border border-[#DCE2E9] shadow-[0_1px_3px_rgba(0,28,61,0.04)] hover:border-[#003478] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white text-[#003478] flex items-center justify-center border border-[#DCE2E9] shadow-sm mb-6">
                  {group.icon}
                </div>

                <h3 className="text-xl font-bold font-heading text-[#111827] mb-1">
                  {group.title}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#003478] mb-6">
                  {group.subtitle}
                </p>

                <div className="space-y-3.5">
                  {group.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#16834B] mt-0.5 shrink-0" />
                      <p className="text-xs sm:text-sm text-[#52606D] leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
