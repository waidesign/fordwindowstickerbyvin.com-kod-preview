import React from 'react';
import { Database, DollarSign, PackageCheck, Zap } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: <Database className="w-5 h-5 text-[#003478]" />,
      title: 'Factory Information',
      subtitle: 'Original OEM archives',
    },
    {
      icon: <DollarSign className="w-5 h-5 text-[#003478]" />,
      title: 'Original MSRP',
      subtitle: 'Official base & total price',
    },
    {
      icon: <PackageCheck className="w-5 h-5 text-[#003478]" />,
      title: 'Factory Options',
      subtitle: 'Itemized packages & codes',
    },
    {
      icon: <Zap className="w-5 h-5 text-[#003478]" />,
      title: 'Instant Digital Delivery',
      subtitle: 'High-res printable PDF',
    },
  ];

  return (
    <section className="bg-white border-b border-[#DCE2E9] py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#DCE2E9]">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3.5 ${
                index > 0 ? 'pt-4 md:pt-0 md:pl-6' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#EEF4FB] flex items-center justify-center shrink-0 border border-[#DCE2E9]">
                {item.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-[#111827] font-heading leading-tight">
                  {item.title}
                </div>
                <div className="text-xs text-[#52606D] mt-0.5 font-medium">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
