'use client';

import React, { useState, useMemo } from 'react';
import { ARTICLES } from '@/lib/constants';
import { Star, Calendar, User, ArrowUpRight, Flame } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function GoldListClient() {
  const [activeTag, setActiveTag] = useState('All');

  // 1. 动态提取标签 (Auto-update Tags)
  // 遍历所有文章，收集 unique tags，并自动排序
  const allTags = useMemo(() => {
    const tags = new Set<string>(['All']);
    ARTICLES.forEach(article => {
      if (article.tags) {
        article.tags.forEach(tag => tags.add(tag));
      }
    });
    // 转为数组并排序，保证 'All' 在最前面
    return Array.from(tags).sort((a, b) => {
      if (a === 'All') return -1;
      if (b === 'All') return 1;
      return a.localeCompare(b);
    });
  }, []);

  // 2. 筛选逻辑
  const filteredArticles = useMemo(() => {
    if (activeTag === 'All') return ARTICLES;
    return ARTICLES.filter(article => article.tags && article.tags.includes(activeTag));
  }, [activeTag]);

  // 标签颜色辅助函数
  const getTagColor = (tag: string) => {
    const t = tag.toLowerCase();
    if (t.includes('shoes') || t.includes('review')) return 'bg-kf-blue text-white';
    if (t.includes('tech') || t.includes('electronics')) return 'bg-kf-yellow text-black';
    if (t.includes('guide') || t.includes('sizing')) return 'bg-kf-green text-white';
    return 'bg-kf-red text-white';
  };

  return (
    <div className="flex-grow pb-20">
      {/* Header Section */}
      <div className="relative bg-kf-offwhite py-16 px-4 border-b-4 border-black overflow-hidden z-20">
        {/* Background Decorative Elements */}
        <div className="absolute top-[-20%] right-[-5%] w-64 h-64 bg-kf-yellow rounded-full border-4 border-black opacity-50 blur-sm animate-pulse z-0"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-40 h-40 bg-kf-blue rotate-45 border-4 border-black opacity-40 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg font-bold mb-4 transform -rotate-2">
            <Flame className="w-5 h-5 text-kf-yellow fill-current" />
            <span>Hottest Hauls & Reviews</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-4 leading-none">
            1:1 REPS: THE GOLD SPREADSHEET
          </h1>
          <p className="text-xl md:text-2xl font-bold text-gray-600 max-w-3xl">
            Stop settling for budget flaws. Access the ultimate list of 1:1 Reps for CNfans. Every item is Verified "Gold Tier"—closest to retail batches only. No lemons.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 mt-12 relative z-10">
        
        {/* Dynamic Filters Area */}
        <div className="flex flex-wrap gap-3 mb-10 relative z-20">
           {allTags.map((tag) => (
             <button 
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-6 py-2 rounded-full border-2 border-black font-black text-sm uppercase shadow-hard-sm transition-all hover:-translate-y-1 hover:shadow-hard 
                    ${activeTag === tag ? 'bg-kf-black text-white' : 'bg-white text-black hover:bg-kf-yellow'}`}
             >
                {tag}
             </button>
           ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
          {filteredArticles.map((article) => (
            <Link 
              key={article.id} 
              href={`/gold/${article.id}`}
              className="group relative flex flex-col h-full bg-white border-2 border-black rounded-2xl overflow-hidden shadow-hard transition-all duration-300 hover:shadow-none hover:translate-x-1 hover:translate-y-1 block z-10 cursor-pointer"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden border-b-2 border-black bg-gray-100">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Tags Overlay */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                  {article.tags.slice(0, 2).map(tag => (
                    <span key={tag} className={`px-3 py-1 text-xs font-black uppercase border-2 border-black rounded-md shadow-sm ${getTagColor(tag)}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Rating Badge */}
                {article.rating && (
                   <div className="absolute bottom-4 right-4 bg-white border-2 border-black px-2 py-1 rounded-lg flex items-center gap-1 shadow-hard-sm z-20">
                      <span className="font-black text-sm">{article.rating}.0</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < article.rating! ? 'fill-kf-yellow text-kf-yellow' : 'text-gray-300'}`} />
                        ))}
                      </div>
                   </div>
                )}
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-grow relative z-10">
                {/* Meta Header */}
                <div className="flex items-center gap-3 text-xs font-bold text-gray-500 mb-3">
                    <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded border border-gray-300">
                        <Calendar className="w-3 h-3" /> {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                        <User className="w-3 h-3" /> {article.author}
                    </span>
                </div>

                <h2 className="text-2xl font-black leading-tight mb-3 line-clamp-2 group-hover:text-kf-blue transition-colors">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 font-medium mb-6 line-clamp-3 flex-grow">
                  {article.excerpt}
                </p>

                {/* Footer Action */}
                <div className="mt-auto pt-4 border-t-2 border-dashed border-gray-200 flex justify-between items-center">
                    <span className="font-bold text-sm text-gray-400">Read Article</span>
                    <div className="w-10 h-10 rounded-full border-2 border-black bg-kf-yellow flex items-center justify-center transition-transform group-hover:rotate-45">
                        <ArrowUpRight className="w-6 h-6 text-black" />
                    </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredArticles.length === 0 && (
            <div className="py-20 text-center border-4 border-dashed border-gray-300 rounded-3xl">
                <p className="text-2xl font-bold text-gray-400">No Gold items found in "{activeTag}".</p>
                <button 
                    onClick={() => setActiveTag('All')}
                    className="mt-4 text-kf-blue font-black underline hover:text-black"
                >
                    Reset Filter
                </button>
            </div>
        )}

        {/* Load More Button (Placeholder) */}
        {filteredArticles.length > 0 && (
            <div className="mt-16 text-center relative z-20">
                <button className="bg-white text-black px-12 py-4 rounded-xl border-2 border-black font-black text-xl shadow-hard hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] active:bg-kf-offwhite transition-all">
                    Load More Content
                </button>
            </div>
        )}

      </div>
    </div>
  );
}