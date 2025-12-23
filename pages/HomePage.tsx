import React, { useState, useMemo, useEffect } from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import GoldGrid from '../components/GoldGrid'; 
import TheLabGrid from '../components/TheLabGrid'; 
import GuideSection from '../components/GuideSection';
import { CATEGORIES, GOLD_ITEMS, LAB_ITEMS } from '../constants';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Update Page Title & Meta Tags
  useEffect(() => {
    document.title = "The Ultimate CNfans Spreadsheet 2026 | QC Verified Links & Finds";

    const setMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('description', 'Stop gambling with dead links. Access the #1 CNfans Spreadsheet for 2026. We list 1000+ QC-verified finds for Sneakers, Tech, and Hoodies. Shop the Gold Standard safely.');
    setMetaTag('keywords', 'cnfans spreadsheet, best cnfans spreadsheet 2026, cnfans links, 1:1 reps, cnfans finds, rep spreadsheet, quality check reps, safe cnfans links');

    return () => {
       document.title = "Kindredflip - Discover Your Vibe";
    };
  }, []);

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return CATEGORIES;
    return CATEGORIES.filter(cat => 
      cat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="flex-grow">
        <Hero />
        
        {/* Sticky category filter visual cue (Hidden if no search) */}
        {searchQuery && (
          <div className="sticky top-20 z-40 bg-kf-yellow border-y-2 border-black py-2 text-center shadow-md">
             <span className="font-bold">Searching for: "{searchQuery}"</span>
             <button 
                onClick={() => setSearchQuery('')}
                className="ml-4 underline font-black hover:text-white"
             >
                Clear
             </button>
          </div>
        )}

        <CategoryGrid categories={filteredCategories} />
        <GoldGrid items={GOLD_ITEMS} />
        <TheLabGrid items={LAB_ITEMS} />
        <GuideSection />
    </div>
  );
};

export default HomePage;