import React from 'react';
import { Shield, HelpCircle, FileText, Search, ExternalLink } from 'lucide-react';
// @ts-ignore
import logoImg from '../assets/images/ford-kod-logo.webp';

interface FooterProps {
  onOpenVinFinder: () => void;
  onOpenSampleSticker: () => void;
  onScrollToLookup: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenVinFinder,
  onOpenSampleSticker,
  onScrollToLookup,
}) => {
  return (
    <footer className="bg-[#001C3D] text-[#DCE8F5] pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#00285E]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <img
                src={logoImg}
                alt="Ford Sticker Pro Logo"
                className="h-10 w-auto object-contain rounded-lg"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#7B8794] leading-relaxed">
              An independent automotive tool dedicated to generating authentic replicas of original factory window stickers (Monroney labels) for Ford trucks, SUVs, passenger cars, and commercial vehicles.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#7B8794]">
              <Shield className="w-4 h-4 text-[#16834B]" />
              <span>SSL 256-Bit Encrypted Data Transfer</span>
            </div>
          </div>

          {/* Col 2: VIN & Sticker Lookup Tools (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              VIN & Sticker Tools
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={onScrollToLookup}
                  className="text-[#7B8794] hover:text-white transition-colors cursor-pointer"
                >
                  Lookup Ford Window Sticker by VIN
                </button>
              </li>
              <li>
                <button
                  onClick={onScrollToLookup}
                  className="text-[#7B8794] hover:text-white transition-colors cursor-pointer"
                >
                  Lookup by U.S. License Plate
                </button>
              </li>
              <li>
                <button
                  onClick={onScrollToLookup}
                  className="text-[#7B8794] hover:text-white transition-colors cursor-pointer"
                >
                  Lookup by Year / Make / Model
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSampleSticker}
                  className="text-[#7B8794] hover:text-white transition-colors cursor-pointer"
                >
                  View Sample Monroney Sticker
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenVinFinder}
                  className="text-[#7B8794] hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>How to Find Your Ford VIN</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Research Tools & Specifications (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Automotive Specifications
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#what-is-covered" className="text-[#7B8794] hover:text-white transition-colors">
                  Factory Options & Packages Decoder
                </a>
              </li>
              <li>
                <a href="#what-is-covered" className="text-[#7B8794] hover:text-white transition-colors">
                  Original MSRP & Price Records
                </a>
              </li>
              <li>
                <a href="#supported-models" className="text-[#7B8794] hover:text-white transition-colors">
                  Supported Ford Model Years (1990–2026+)
                </a>
              </li>
              <li>
                <a href="#related-tools" className="text-[#7B8794] hover:text-white transition-colors">
                  Ford Paint Code & Color Decoder
                </a>
              </li>
              <li>
                <a href="#related-tools" className="text-[#7B8794] hover:text-white transition-colors">
                  Ford Factory Warranty Lookup
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Help (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Company & Help
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#faq" className="text-[#7B8794] hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-[#7B8794] hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-[#7B8794] hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="text-[#7B8794] hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#7B8794] hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-xs text-[#7B8794] leading-relaxed">
          <div className="bg-black/20 p-4 rounded-xl border border-white/5">
            <p className="text-[11px] leading-relaxed">
              <strong className="text-white">Independent Legal Disclaimer:</strong> FordWindowStickerByVIN.com is an independent vehicle history and factory data provider. This website is NOT operated by, affiliated with, endorsed by, or connected to Ford Motor Company, Lincoln Motor Company, or any authorized dealership. "Ford", "F-150", "Mustang", "Bronco", "Explorer", "Super Duty", "Ranger", and related model names are registered trademarks of Ford Motor Company and are used solely for accurate vehicle identification and descriptive informational purposes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <p className="text-[11px]">
              &copy; {new Date().getFullYear()} FordWindowStickerByVIN.com. All rights reserved. Monroney label data reproduced for informational and valuation purposes.
            </p>
            <div className="flex items-center gap-4 text-[11px]">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Security</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
