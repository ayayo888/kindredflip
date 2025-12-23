'use client';

import React, { useState, useMemo } from 'react';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import GoldGrid from '@/components/GoldGrid'; 
import TheLabGrid from '@/components/TheLabGrid'; 
import GuideSection from '@/components/GuideSection';
import { CATEGORIES, GOLD_ITEMS, LAB_ITEMS } from '@/lib/constants';

export default function HomeClient() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return CATEGORIES;
    return CATEGORIES.filter(cat => 
      cat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="flex-grow">
        <Hero />
        
        {/* Sticky category filter visual cue */}
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
}