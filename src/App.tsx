import React, { useState } from 'react';
import { Agentation } from 'agentation';
import { Header } from './components/Header';
import { HeroLookup } from './components/HeroLookup';
import { TrustStrip } from './components/TrustStrip';
import { WhatIsASticker } from './components/WhatIsASticker';
import { HiddenRisksSection } from './components/HiddenRisksSection';
import { WhatIsCovered } from './components/WhatIsCovered';
import { WhereToFindVinSection } from './components/WhereToFindVinSection';
import { HowItWorks } from './components/HowItWorks';
import { CustomerStory } from './components/CustomerStory';
import { WhoBenefits } from './components/WhoBenefits';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SupportedModels } from './components/SupportedModels';
import { RelatedTools } from './components/RelatedTools';
import { FinalCTA } from './components/FinalCTA';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { VinFinderModal } from './components/VinFinderModal';
import { WindowStickerModal } from './components/WindowStickerModal';
import { AuthModal } from './components/AuthModal';
import { BuildSheetPage } from './components/BuildSheetPage';
import { BlogPage } from './components/BlogPage';
import { BlogPostPage } from './components/BlogPostPage';
import { SAMPLE_STICKERS, SampleSticker } from './data/mockData';
import { BLOG_POSTS, BlogPost } from './data/blogData';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'build-sheet' | 'blog' | 'blog-post'>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost>(BLOG_POSTS[0]);
  const [isVinFinderOpen, setIsVinFinderOpen] = useState(false);
  const [isStickerModalOpen, setIsStickerModalOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [activeSticker, setActiveSticker] = useState<SampleSticker>(
    SAMPLE_STICKERS['1FTFW1E85MFA12345']
  );
  const [heroVinValue, setHeroVinValue] = useState('');

  const handleScrollToLookup = () => {
    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById('lookup-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleOpenSampleSticker = (sticker?: SampleSticker) => {
    if (sticker) {
      setActiveSticker(sticker);
    } else {
      setActiveSticker(SAMPLE_STICKERS['1FTFW1E85MFA12345']);
    }
    setIsStickerModalOpen(true);
  };

  const handleLogin = () => {
    setAuthMode('login');
    setIsAuthOpen(true);
  };

  const handleSignup = () => {
    setAuthMode('signup');
    setIsAuthOpen(true);
  };

  const handleOpenStephenSticker = () => {
    setActiveSticker(SAMPLE_STICKERS['1FTEW1EF5DKD98765']);
    setIsStickerModalOpen(true);
  };

  const handleSelectModelVin = (sampleVin: string) => {
    setHeroVinValue(sampleVin);
    handleScrollToLookup();
  };

  const handleNavigateBuildSheet = () => {
    setCurrentView('build-sheet');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateBlog = () => {
    setCurrentView('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    setCurrentView('blog-post');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] font-body selection:bg-[#003478] selection:text-white">
      {/* 1. Header Navigation */}
      <Header
        onOpenVinFinder={() => setIsVinFinderOpen(true)}
        onOpenSampleSticker={() => handleOpenSampleSticker()}
        onScrollToLookup={handleScrollToLookup}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onNavigateBuildSheet={handleNavigateBuildSheet}
        onNavigateBlog={handleNavigateBlog}
        onNavigateHome={handleNavigateHome}
      />

      <main className="flex-1">
        {currentView === 'build-sheet' ? (
          <BuildSheetPage
            onScrollToLookup={handleScrollToLookup}
            onOpenVinFinder={() => setIsVinFinderOpen(true)}
            onOpenSampleSticker={() => handleOpenSampleSticker()}
            onSelectModelVin={handleSelectModelVin}
            onNavigateHome={handleNavigateHome}
          />
        ) : currentView === 'blog' ? (
          <BlogPage
            onSelectPost={handleSelectPost}
            onNavigateHome={handleNavigateHome}
          />
        ) : currentView === 'blog-post' ? (
          <BlogPostPage
            post={selectedPost}
            onBackToBlog={handleNavigateBlog}
            onSelectPost={handleSelectPost}
            onNavigateHome={handleNavigateHome}
            onSearchVin={handleSelectModelVin}
          />
        ) : (
          <>
            {/* 2. Hero with Segmented VIN Lookup Widget */}
            <HeroLookup
              onOpenVinFinder={() => setIsVinFinderOpen(true)}
              onOpenSampleSticker={handleOpenSampleSticker}
              initialVin={heroVinValue}
            />

            {/* 3. Trust Strip */}
            <TrustStrip />

            {/* 4. What is a Window Sticker (Birth Certificate) */}
            <WhatIsASticker onOpenSampleSticker={() => handleOpenSampleSticker()} />

            {/* 5. The Hidden Risks Used Ford Buyers Face */}
            <HiddenRisksSection
              onScrollToLookup={handleScrollToLookup}
              onOpenSampleSticker={() => handleOpenSampleSticker()}
            />

            {/* 6. What's Covered on Your Sticker (9 Factory Spec Cards) */}
            <WhatIsCovered onOpenSampleSticker={() => handleOpenSampleSticker()} />

            {/* 7. Where to Find Your Ford VIN (Categorized Guide & Quick Tips) */}
            <WhereToFindVinSection
              onScrollToLookup={handleScrollToLookup}
              onOpenVinFinderModal={() => setIsVinFinderOpen(true)}
            />

            {/* 8. How It Works (3-Step Stepper) */}
            <HowItWorks
              onOpenVinFinder={() => setIsVinFinderOpen(true)}
              onScrollToLookup={handleScrollToLookup}
            />

            {/* 7. Proof & Real Customer Story (Stephen's 2013 F-150) */}
            <CustomerStory onInspectStephenSticker={handleOpenStephenSticker} />

            {/* 8. Who Benefits (Buyers / Sellers / Dealers) */}
            <WhoBenefits />

            {/* 9. Why Choose Us (6 Differentiators) */}
            <WhyChooseUs />

            {/* 10. Supported Ford Models (Interactive Filterable Matrix) */}
            <SupportedModels onSelectModelVin={handleSelectModelVin} />

            {/* 11. Related Automotive Research Tools */}
            <RelatedTools onScrollToLookup={handleScrollToLookup} />

            {/* 12. Final CTA (Ford Blue) */}
            <FinalCTA onScrollToHero={handleScrollToLookup} />

            {/* 13. Frequently Asked Questions (Accordion + JSON-LD) */}
            <FAQSection />
          </>
        )}
      </main>

      {/* 14. Navy Footer */}
      <Footer
        onOpenVinFinder={() => setIsVinFinderOpen(true)}
        onOpenSampleSticker={() => handleOpenSampleSticker()}
        onScrollToLookup={handleScrollToLookup}
      />

      {/* Progressive Disclosure: Canonical 9-Location VIN Finder Modal */}
      <VinFinderModal
        isOpen={isVinFinderOpen}
        onClose={() => setIsVinFinderOpen(false)}
        onSelectSampleVin={(vin) => {
          setHeroVinValue(vin);
          handleScrollToLookup();
        }}
      />

      {/* Authentic Monroney Window Sticker Preview & Inspector Modal */}
      <WindowStickerModal
        isOpen={isStickerModalOpen}
        onClose={() => setIsStickerModalOpen(false)}
        initialSticker={activeSticker}
      />

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        initialMode={authMode}
        onClose={() => setIsAuthOpen(false)}
      />

      {/* @ts-ignore */}
      {process.env.NODE_ENV === 'development' && <Agentation />}
    </div>
  );
}
