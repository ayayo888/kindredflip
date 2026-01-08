'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TestTube, XCircle, CheckCircle, AlertTriangle, Search, ChevronDown, ChevronUp, Filter, ArrowRight } from 'lucide-react';
import { LAB_ITEMS } from '@/lib/constants';

const INITIAL_ITEMS_COUNT = 12; 
const LOAD_MORE_STEP = 8;      

export default function TheLabClient() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'PASS' | 'FAIL'>('ALL');
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS_COUNT);
  const [searchQuery, setSearchQuery] = useState('');
  const [isTagsExpanded, setIsTagsExpanded] = useState(false); // Mobile: Expand tags toggle

  // 1. 动态提取分类 (Dynamic Category Extraction)
  const allCategories = useMemo(() => {
    const cats = new Set<string>(['ALL']);
    LAB_ITEMS.forEach(item => {
      if (item.category && Array.isArray(item.category)) {
        item.category.forEach(c => cats.add(c.toUpperCase()));
      }
    });
    return Array.from(cats).sort((a, b) => {
        if (a === 'ALL') return -1;
        if (b === 'ALL') return 1;
        return a.localeCompare(b);
    });
  }, []);

  // 2. 筛选逻辑 (Filters)
  const filteredItems = useMemo(() => {
    return LAB_ITEMS.filter(item => {
        // A. Category Filter
        const itemCats = item.category.map(c => c.toUpperCase());
        const catMatch = activeCategory === 'ALL' || itemCats.includes(activeCategory);
        
        // B. Status Filter
        const statusMatch = filterStatus === 'ALL' || item.status === filterStatus;

        // C. Search Filter (Title or Tags)
        const searchLower = searchQuery.toLowerCase();
        const searchMatch = !searchQuery || 
            item.title.toLowerCase().includes(searchLower) || 
            item.category.some(c => c.toLowerCase().includes(searchLower));

        return catMatch && statusMatch && searchMatch;
    });
  }, [activeCategory, filterStatus, searchQuery]);

  // 3. 分页逻辑
  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  // Handlers
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(INITIAL_ITEMS_COUNT);
    // On mobile, maybe collapse after selection? Optional.
    // setIsTagsExpanded(false); 
  };

  const handleStatusChange = (status: 'ALL' | 'PASS' | 'FAIL') => {
    setFilterStatus(status);
    setVisibleCount(INITIAL_ITEMS_COUNT);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_STEP);
  };

  return (
    <div className="bg-kf-offwhite min-h-screen pb-24 font-sans">
      
      {/* ============================================================================
          1. COMPACT DASHBOARD HEADER
          Replaces the huge Hero section. Saves vertical space.
      ============================================================================ */}
      <section className="bg-white border-b-4 border-black pt-8 pb-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-6">
            
            {/* Left: Title */}
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-kf-red rounded-full animate-pulse"></div>
                    <span className="font-mono font-bold text-xs tracking-widest text-gray-400">
                        THE_LAB_DATABASE_V2
                    </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter">
                    QC <span className="text-kf-blue underline decoration-4 underline-offset-4">Analysis</span>
                </h1>
                <p className="mt-2 font-medium text-gray-500 text-sm md:text-base max-w-lg">
                    We buy it so you don't have to. Real in-hand tests, weight checks, and pass/fail verdicts.
                </p>
            </div>

            {/* Right: Mini Stats (Integrated Trust Bar) */}
            <div className="flex w-full md:w-auto border-2 border-black bg-gray-50 rounded-xl overflow-hidden shadow-hard-sm">
                <div className="flex-1 p-3 text-center border-r-2 border-gray-200">
                    <div className="text-2xl font-black text-kf-green leading-none">310</div>
                    <div className="text-[10px] font-black uppercase text-gray-400 mt-1">Passed</div>
                </div>
                <div className="flex-1 p-3 text-center">
                    <div className="text-2xl font-black text-kf-red leading-none">1,092</div>
                    <div className="text-[10px] font-black uppercase text-gray-400 mt-1">Rejected</div>
                </div>
            </div>
        </div>
      </section>

      {/* ============================================================================
          2. STICKY FILTER BAR
          Redesigned for "Many Tags". 
          - Row 1: Search + Status Toggle
          - Row 2: Category Cloud (Expandable)
      ============================================================================ */}
      <section className="sticky top-0 z-30 bg-white border-b-4 border-black shadow-md">
         <div className="max-w-7xl mx-auto">
            
            {/* ROW 1: Controls (Status + Search) */}
            <div className="flex flex-col md:flex-row border-b-2 border-gray-100">
                
                {/* A. Search Bar */}
                <div className="flex-1 p-2 md:p-3 flex items-center border-b-2 md:border-b-0 md:border-r-2 border-gray-100">
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Search tests (e.g., '1562AE' or 'Nike')..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-gray-100 border-2 border-transparent focus:border-black rounded-lg pl-9 pr-4 py-2 text-sm font-bold outline-none transition-all placeholder:font-medium placeholder:text-gray-400"
                        />
                    </div>
                </div>

                {/* B. Segmented Status Control (Compact) */}
                <div className="flex p-2 md:p-3 items-center justify-center bg-white">
                    <div className="flex bg-gray-100 p-1 rounded-lg border-2 border-gray-200 w-full md:w-auto">
                        <button 
                            onClick={() => handleStatusChange('ALL')}
                            className={`flex-1 md:flex-none px-4 py-1.5 rounded-md text-xs font-black uppercase transition-all ${filterStatus === 'ALL' ? 'bg-black text-white shadow-sm' : 'text-gray-500 hover:text-black'}`}
                        >
                            All
                        </button>
                        <button 
                            onClick={() => handleStatusChange('PASS')}
                            className={`flex-1 md:flex-none px-4 py-1.5 rounded-md text-xs font-black uppercase transition-all flex items-center justify-center gap-1 ${filterStatus === 'PASS' ? 'bg-kf-green text-black shadow-sm' : 'text-gray-500 hover:text-kf-green'}`}
                        >
                            <CheckCircle className="w-3 h-3" /> Pass
                        </button>
                        <button 
                            onClick={() => handleStatusChange('FAIL')}
                            className={`flex-1 md:flex-none px-4 py-1.5 rounded-md text-xs font-black uppercase transition-all flex items-center justify-center gap-1 ${filterStatus === 'FAIL' ? 'bg-kf-red text-white shadow-sm' : 'text-gray-500 hover:text-kf-red'}`}
                        >
                            <XCircle className="w-3 h-3" /> Fail
                        </button>
                    </div>
                </div>
            </div>

            {/* ROW 2: Category Tags (Expandable) */}
            <div className="relative bg-white">
                <div className={`
                    flex items-center gap-2 p-3 transition-all duration-300 ease-in-out overflow-hidden
                    ${isTagsExpanded 
                        ? 'max-h-[500px] overflow-y-auto flex-wrap' 
                        : 'max-h-[60px] whitespace-nowrap flex-nowrap overflow-x-auto scrollbar-hide pr-12'
                    }
                    md:max-h-none md:whitespace-normal md:overflow-visible md:flex-wrap md:pr-3
                `}>
                    {/* The "Filter" Icon Label (Desktop only mostly) */}
                    <div className="hidden md:flex items-center gap-1 text-xs font-black uppercase text-gray-400 mr-2 shrink-0">
                        <Filter className="w-3 h-3" /> Tags:
                    </div>

                    {allCategories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`
                                shrink-0 px-3 py-1.5 rounded-md border-2 text-xs font-bold uppercase transition-all
                                ${activeCategory === cat 
                                    ? 'bg-kf-yellow border-black text-black shadow-hard-sm translate-y-[-1px]' 
                                    : 'bg-white border-gray-200 text-gray-500 hover:border-black hover:text-black'
                                }
                            `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Expand/Collapse Button (Absolute positioned on right for mobile strip view) */}
                <button 
                    onClick={() => setIsTagsExpanded(!isTagsExpanded)}
                    className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white via-white to-transparent flex items-center justify-center md:hidden z-10"
                >
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center shadow-md active:scale-90 transition-transform">
                        {isTagsExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                </button>
            </div>
         </div>
      </section>

      {/* ============================================================================
          3. MAIN CONTENT GRID
      ============================================================================ */}
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
          
          {/* Results Counter */}
          <div className="mb-6 font-mono text-xs text-gray-400 font-bold uppercase">
              Showing {displayedItems.length} of {filteredItems.length} Reports
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 gap-y-12">
              {displayedItems.map(item => (
                  <Link 
                    href={`/thelab/${item.id}`} 
                    key={item.id} 
                    className="relative mt-6 group block hover:-translate-y-1 transition-transform duration-200 cursor-pointer z-10"
                  >
                      {/* Folder Tab */}
                      <div className="absolute -top-6 left-0 bg-black text-white px-4 py-1 rounded-t-lg border-4 border-b-0 border-black font-mono text-xs font-bold uppercase z-0 group-hover:z-20 truncate max-w-[90%]">
                          {item.category[0]} {item.category.length > 1 && `+${item.category.length - 1}`}
                      </div>

                      {/* Card Body */}
                      <div className="bg-white border-4 border-black p-4 shadow-hard relative overflow-hidden h-full flex flex-col z-10">
                          
                          {/* Image */}
                          <div className="aspect-square bg-gray-100 border-2 border-black mb-4 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-300">
                              <Image 
                                src={item.image} 
                                alt={item.title} 
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                className="object-cover"
                              />
                              
                              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-12 border-4 px-4 py-2 text-2xl font-black uppercase opacity-80 mix-blend-multiply z-20
                                  ${item.status === 'PASS' ? 'border-kf-green text-kf-green' : 'border-kf-red text-kf-red'}
                              `}>
                                  {item.status}
                              </div>
                          </div>

                          {/* Data */}
                          <div className="flex-grow">
                              {/* Tags underneath title for context */}
                              <div className="flex flex-wrap gap-1 mb-2">
                                  {item.category.slice(0, 3).map(c => (
                                      <span key={c} className="text-[10px] bg-gray-100 px-1.5 py-0.5 rounded border border-gray-300 font-bold text-gray-500 uppercase">
                                          {c}
                                      </span>
                                  ))}
                              </div>

                              <h3 className="font-black text-xl leading-tight mb-3 uppercase group-hover:text-kf-blue transition-colors line-clamp-2">
                                {item.title}
                              </h3>
                              <div className="font-mono text-sm text-gray-600 space-y-1 border-t-2 border-dashed border-gray-300 pt-3 mb-4">
                                  <div className="flex justify-between">
                                      <span>PRICE:</span>
                                      <span className="font-bold text-black">{item.price}</span>
                                  </div>
                                  <div className="flex justify-between">
                                      <span>WEIGHT:</span>
                                      <span className="font-bold text-black">{item.weight}</span>
                                  </div>
                              </div>
                              <p className="text-sm italic font-medium bg-gray-100 p-2 border-l-4 border-black mb-4 line-clamp-2">
                                  "{item.note}"
                              </p>
                          </div>

                          {/* Action Button */}
                          <div className="w-full bg-black text-white font-mono py-3 font-bold uppercase group-hover:bg-kf-yellow group-hover:text-black border-2 border-transparent group-hover:border-black transition-colors text-center">
                              [ Read Report ]
                          </div>
                      </div>
                  </Link>
              ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
              <div className="py-20 text-center border-4 border-dashed border-gray-300 rounded-3xl mt-8 bg-white">
                  <AlertTriangle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="font-mono text-gray-400 text-xl">NO RECORDS MATCH FILTERS.</p>
                  <button 
                    onClick={() => { 
                        setActiveCategory('ALL'); 
                        setFilterStatus('ALL'); 
                        setSearchQuery('');
                        setVisibleCount(INITIAL_ITEMS_COUNT);
                    }}
                    className="mt-4 text-kf-blue font-bold underline"
                  >
                    Clear All Filters
                  </button>
              </div>
          )}

          {/* Load More Button */}
          {hasMore && (
              <div className="mt-16 text-center relative z-20">
                  <button 
                    onClick={handleLoadMore}
                    className="bg-white text-black px-12 py-4 rounded-xl border-2 border-black font-black text-xl shadow-hard hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] active:bg-kf-offwhite transition-all"
                  >
                      Load More Reports ({filteredItems.length - visibleCount} remaining)
                  </button>
              </div>
          )}

      </div>

      {/* Mobile CTA */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
          <Link href="/gold" className="block w-full bg-black text-kf-yellow border-4 border-white shadow-hard-lg rounded-xl p-4 flex items-center justify-between group active:scale-95 transition-transform">
              <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-white uppercase tracking-wider">Tired of testing?</span>
                  <span className="font-black text-lg leading-none">GO TO GOLD LIST</span>
              </div>
              <div className="bg-kf-yellow text-black w-10 h-10 rounded-full flex items-center justify-center border-2 border-white">
                  <ArrowRight className="w-6 h-6" />
              </div>
          </Link>
      </div>

    </div>
  );
}
