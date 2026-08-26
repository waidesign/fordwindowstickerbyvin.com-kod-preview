import React, { useState } from 'react';
import { ChevronDown, Menu, X, FileText, Search, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';
import { RELATED_TOOLS } from '../data/mockData';
// @ts-ignore
import logoImg from '../assets/images/ford-kod-logo.webp';

interface HeaderProps {
  onOpenVinFinder: () => void;
  onOpenSampleSticker: () => void;
  onScrollToLookup: () => void;
  onLogin: () => void;
  onSignup: () => void;
  onNavigateBuildSheet: () => void;
  onNavigateBlog: () => void;
  onNavigateHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenVinFinder,
  onOpenSampleSticker,
  onScrollToLookup,
  onLogin,
  onSignup,
  onNavigateBuildSheet,
  onNavigateBlog,
  onNavigateHome,
}) => {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#DCE2E9] shadow-[0_1px_3px_rgba(0,28,61,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Simple Logo Image Placeholder (No text needed) */}
          <button
            onClick={onNavigateHome}
            className="flex items-center group cursor-pointer bg-transparent border-0 p-0 text-left"
            aria-label="Homepage"
          >
            <img
              src={logoImg}
              alt="Ford Sticker Pro Logo"
              className="h-10 w-auto object-contain rounded-lg"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">


            <button
              onClick={onNavigateBuildSheet}
              className="text-sm font-semibold text-[#111827] hover:text-[#003478] transition-colors cursor-pointer"
            >
              Build Sheet
            </button>

            <button
              onClick={onNavigateBlog}
              className="text-sm font-semibold text-[#111827] hover:text-[#003478] transition-colors cursor-pointer"
            >
              Blog
            </button>

            <a
              href="#link1"
              className="text-sm font-semibold text-[#111827] hover:text-[#003478] transition-colors"
            >
              Link 1
            </a>

            <a
              href="#link2"
              className="text-sm font-semibold text-[#111827] hover:text-[#003478] transition-colors"
            >
              Link 2
            </a>

            <a
              href="#link3"
              className="text-sm font-semibold text-[#111827] hover:text-[#003478] transition-colors"
            >
              Link 3
            </a>


          </nav>

          {/* Right Header Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onLogin}
              className="text-xs sm:text-sm font-bold text-[#003478] hover:text-[#00285E] px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              Log in
            </button>

            <button
              onClick={onSignup}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#003478] hover:bg-[#00285E] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm hover:translate-y-[-1px] transition-all cursor-pointer"
            >
              <span>Sign up</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onLogin}
              className="text-xs font-bold text-[#003478] px-3 py-2 rounded-lg"
            >
              Log in
            </button>
            <button
              onClick={onSignup}
              className="text-xs font-bold text-white bg-[#003478] px-3 py-2 rounded-lg"
            >
              Sign up
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111827] hover:bg-[#F1F4F8] rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#DCE2E9] px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={() => {
                onLogin();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center py-3 bg-[#EEF4FB] text-[#003478] font-bold rounded-lg text-sm border border-[#DCE2E9]"
            >
              Log in
            </button>
            <button
              onClick={() => {
                onSignup();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#003478] text-white font-bold rounded-lg text-sm"
            >
              Sign up
            </button>
          </div>

          <div className="border-t border-[#DCE2E9] pt-3 flex flex-col space-y-2">
            <button
              onClick={() => {
                onNavigateBuildSheet();
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 text-sm font-semibold text-[#003478]"
            >
              Build Sheet
            </button>
            <button
              onClick={() => {
                onNavigateBlog();
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 text-sm font-semibold text-[#003478]"
            >
              Blog
            </button>
            <a
              href="#link1"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-semibold text-[#111827] hover:text-[#003478]"
            >
              Link 1
            </a>
            <a
              href="#link2"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-semibold text-[#111827] hover:text-[#003478]"
            >
              Link 2
            </a>
            <a
              href="#link3"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-semibold text-[#111827] hover:text-[#003478]"
            >
              Link 3
            </a>

          </div>
        </div>
      )}
    </header>
  );
};
