import React from 'react';
import { PackageCheck, FileSpreadsheet, CircleDollarSign, Palette, ShieldCheck, ArrowRight, Wrench } from 'lucide-react';
import { RELATED_TOOLS } from '../data/mockData';

interface RelatedToolsProps {
  onScrollToLookup: () => void;
}

export const RelatedTools: React.FC<RelatedToolsProps> = ({ onScrollToLookup }) => {
  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'PackageCheck':
        return <PackageCheck className="w-5 h-5 text-[#003478] group-hover:text-white transition-colors" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-[#003478] group-hover:text-white transition-colors" />;
      case 'CircleDollarSign':
        return <CircleDollarSign className="w-5 h-5 text-[#003478] group-hover:text-white transition-colors" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#003478] group-hover:text-white transition-colors" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#003478] group-hover:text-white transition-colors" />;
      default:
        return <Wrench className="w-5 h-5 text-[#003478] group-hover:text-white transition-colors" />;
    }
  };

  return (
    <section id="related-tools" className="py-20 md:py-24 bg-[#F1F4F8] px-4 sm:px-6 lg:px-8 border-b border-[#DCE2E9]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#003478] text-xs font-bold uppercase tracking-wider mb-3 border border-[#DCE2E9]">
            <Wrench className="w-3.5 h-3.5" />
            Specialized Automotive Tools
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827] tracking-tight leading-tight mb-4">
            Related Ford Research Tools
          </h2>
          <p className="text-base sm:text-lg text-[#52606D] leading-relaxed">
            Complement your window sticker with specialized tools for factory option decoding, paint matches, and build sheets.
          </p>
        </div>

        {/* 5 Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {RELATED_TOOLS.map((tool) => (
            <div
              key={tool.id}
              onClick={onScrollToLookup}
              className="bg-white rounded-2xl p-6 border border-[#DCE2E9] shadow-[0_1px_3px_rgba(0,28,61,0.04)] hover:border-[#003478] hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#EEF4FB] flex items-center justify-center mb-4 border border-[#DCE2E9] group-hover:bg-[#003478] group-hover:text-white transition-colors">
                  {getToolIcon(tool.iconName)}
                </div>

                <h3 className="text-base font-bold font-heading text-[#111827] group-hover:text-[#003478] transition-colors mb-2">
                  {tool.title}
                </h3>

                <p className="text-xs text-[#52606D] leading-relaxed mb-4">
                  {tool.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DCE2E9]/60 flex items-center gap-1 text-xs font-bold text-[#003478] group-hover:translate-x-1 transition-transform">
                <span>Use Tool</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
