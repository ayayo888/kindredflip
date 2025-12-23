'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TestTube, XCircle, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import { LAB_ITEMS } from '@/lib/constants';

const CATEGORIES = ['ALL', 'SHOES', 'HOODIES', 'TECH', 'BAGS', 'ACCESSORIES'];

export default function TheLabPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'PASS' | 'FAIL'>('ALL');

  const filteredItems = LAB_ITEMS.filter(item => {
    const catMatch = activeCategory === 'ALL' || item.category === activeCategory;
    const statusMatch = filterStatus === 'ALL' || item.status === filterStatus;
    return catMatch && statusMatch;
  });

  return (
    <div className="bg-kf-offwhite min-h-screen pb-24 md:pb-10 font-sans">
      
      {/* 1. SECTION: THE HERO */}
      <section className="bg-white border-b-4 border-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-[500px]">
          
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center relative z-20">
            <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-kf-green rounded-full animate-pulse"></div>
                <span className="font-mono font-bold text-sm tracking-widest text-gray-500">
                    // SYSTEM STATUS: ACTIVE
                </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6 tracking-tighter">
                CNfans Reviews: <br/>
                <span className="text-kf-red decoration-4 underline underline-offset-8">Quality Lab</span>
            </h1>
            
            <p className="font-mono text-sm md:text-base text-gray-600 max-w-md border-l-4 border-black pl-4 py-2">
                Stop buying blind. Read brutally honest CNfans reviews, in-hand QC tests, and weight checks before you ship your haul.
            </p>
          </div>

          {/* Right: Visuals */}
          <div className="w-full md:w-1/2 relative bg-gray-100 border-t-4 md:border-t-0 md:border-l-4 border-black flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-auto">
             
             {/* 3D Box Simulation */}
             <div className="relative w-48 h-48 md:w-64 md:h-64 animate-bounce-slow">
                <div className="absolute inset-0 border-4 border-black bg-white transform rotate-3 z-10 shadow-hard flex items-center justify-center">
                    <TestTube className="w-24 h-24 text-kf-blue" />
                </div>
                <div className="absolute inset-0 border-4 border-black bg-kf-yellow transform -rotate-6 z-0"></div>
                
                {/* Floating Stickers */}
                <div className="absolute -top-10 -right-10 bg-kf-green text-white font-black text-xs px-2 py-1 transform rotate-12 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    QC PASSED
                </div>
                <div className="absolute -bottom-5 -left-10 bg-kf-red text-white font-black text-xs px-2 py-1 transform -rotate-12 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    REJECTED
                </div>
             </div>

             {/* Background Grid */}
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          </div>
        </div>
      </section>

      {/* 2. SECTION: THE TRUST BAR */}
      <section className="border-b-4 border-black bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
            {/* Stats Label Area */}
            <div className="w-full md:w-[20%] p-4 bg-black text-white flex flex-row md:flex-col justify-between items-center md:items-start md:justify-center border-b-4 md:border-b-0 md:border-r-4 border-black">
                <div>
                    <span className="block font-black text-3xl md:text-4xl text-kf-red">1,092</span>
                    <span className="font-mono text-xs uppercase tracking-wider text-gray-400">Items Rejected</span>
                </div>
                <div className="text-right md:text-left md:mt-4">
                    <span className="block font-black text-xl text-kf-green">310</span>
                    <span className="font-mono text-xs uppercase tracking-wider text-gray-400">Items Passed</span>
                </div>
            </div>

            {/* Visual Bar */}
            <div className="w-full md:w-[80%] h-12 md:h-auto flex relative group">
                {/* Passed Segment */}
                <div className="w-[20%] bg-kf-green h-full flex items-center justify-center border-r-4 border-black relative overflow-hidden">
                     <span className="font-black text-black/20 text-4xl absolute -rotate-12 select-none">PASS</span>
                </div>
                {/* Rejected Segment (Striped) */}
                <div className="w-[80%] bg-kf-offwhite h-full relative" 
                     style={{ 
                        backgroundImage: 'repeating-linear-gradient(45deg, #FF4D4D 0, #FF4D4D 10px, #ffffff 10px, #ffffff 20px)' 
                     }}>
                     <div className="absolute inset-0 bg-white/50 flex items-center pl-4">
                        <span className="bg-black text-white font-mono text-xs px-2 py-1">DATA LOG: 2024-2025</span>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. SECTION: THE CONTROL PANEL */}
      <section className="sticky top-[68px] z-30 bg-white border-b-4 border-black shadow-md">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row">
                
                {/* Primary Filters (Pass/Fail) */}
                <div className="flex shrink-0 border-b-4 md:border-b-0 md:border-r-4 border-black">
                    <button 
                        onClick={() => setFilterStatus('ALL')}
                        className={`flex-1 md:flex-none px-6 py-4 font-black uppercase text-sm hover:bg-black hover:text-white transition-colors border-r-2 border-black md:border-r-0 ${filterStatus === 'ALL' ? 'bg-black text-white' : ''}`}
                    >
                        All
                    </button>
                    <button 
                        onClick={() => setFilterStatus('PASS')}
                        className={`flex-1 md:flex-none px-6 py-4 font-black uppercase text-sm hover:bg-kf-green hover:text-black transition-colors border-r-2 border-black md:border-r-0 ${filterStatus === 'PASS' ? 'bg-kf-green' : ''}`}
                    >
                        <CheckCircle className="inline w-4 h-4 mr-1" /> Pass
                    </button>
                    <button 
                        onClick={() => setFilterStatus('FAIL')}
                        className={`flex-1 md:flex-none px-6 py-4 font-black uppercase text-sm hover:bg-kf-red hover:text-white transition-colors ${filterStatus === 'FAIL' ? 'bg-kf-red text-white' : ''}`}
                    >
                        <XCircle className="inline w-4 h-4 mr-1" /> Fail
                    </button>
                </div>

                {/* Category Filters */}
                <div className="flex-1 overflow-x-auto whitespace-nowrap scrollbar-hide p-2 md:p-0 flex items-center md:flex-wrap bg-gray-50 md:bg-white">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`
                                mx-1 md:mx-0 md:px-6 md:py-4 px-4 py-2 rounded-full md:rounded-none border-2 border-black md:border-0 md:border-r-2 md:border-b-0
                                font-mono font-bold text-xs md:text-sm uppercase transition-all
                                ${activeCategory === cat 
                                    ? 'bg-kf-yellow text-black md:bg-black md:text-white shadow-hard-sm md:shadow-none' 
                                    : 'bg-white text-gray-500 hover:bg-gray-200'
                                }
                            `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
         </div>
      </section>

      {/* 4. SECTION: THE REVIEW GRID */}
      <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 gap-y-12">
              {filteredItems.map(item => (
                  <div key={item.id} className="relative mt-6 group">
                      
                      {/* Folder Tab */}
                      <div className="absolute -top-6 left-0 bg-black text-white px-4 py-1 rounded-t-lg border-4 border-b-0 border-black font-mono text-xs font-bold uppercase z-10">
                          {item.category}
                      </div>

                      {/* Card Body */}
                      <div className="bg-white border-4 border-black p-4 shadow-hard relative overflow-hidden h-full flex flex-col">
                          
                          {/* Image */}
                          <div className="aspect-square bg-gray-100 border-2 border-black mb-4 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-300">
                              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                              
                              {/* STAMP */}
                              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-12 border-4 px-4 py-2 text-2xl font-black uppercase opacity-80 mix-blend-multiply
                                  ${item.status === 'PASS' ? 'border-kf-green text-kf-green' : 'border-kf-red text-kf-red'}
                              `}>
                                  {item.status}
                              </div>
                          </div>

                          {/* Data */}
                          <div className="flex-grow">
                              <h3 className="font-black text-xl leading-tight mb-3 uppercase">{item.title}</h3>
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
                              <p className="text-sm italic font-medium bg-gray-100 p-2 border-l-4 border-black mb-4">
                                  "{item.note}"
                              </p>
                          </div>

                          {/* Action */}
                          <button className="w-full bg-black text-white font-mono py-3 font-bold uppercase hover:bg-kf-yellow hover:text-black border-2 border-transparent hover:border-black transition-colors">
                              [ Read Report ]
                          </button>
                      </div>
                  </div>
              ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
              <div className="py-20 text-center border-4 border-dashed border-gray-300 rounded-3xl mt-8">
                  <AlertTriangle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="font-mono text-gray-400 text-xl">NO RECORDS FOUND IN ARCHIVE.</p>
              </div>
          )}
      </div>

      {/* 5. SECTION: STICKY CTA (Mobile Bottom Bar) */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
          <Link href="/gold" className="block w-full bg-black text-kf-yellow border-4 border-white shadow-hard-lg rounded-xl p-4 flex items-center justify-between group active:scale-95 transition-transform">
              <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-white uppercase tracking-wider">Tired of testing?</span>
                  <span className="font-black text-lg leading-none">GO TO GOLD SPREADSHEET</span>
              </div>
              <div className="bg-kf-yellow text-black w-10 h-10 rounded-full flex items-center justify-center border-2 border-white">
                  <ArrowRight className="w-6 h-6" />
              </div>
          </Link>
      </div>
      
      {/* Desktop Static Banner Exit */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 mt-12 mb-12">
          <div className="bg-kf-yellow border-4 border-black p-12 flex items-center justify-between shadow-hard relative overflow-hidden">
               {/* Decorative Background */}
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
               
               <div className="relative z-10">
                   <h2 className="text-5xl font-black mb-2 uppercase">Want the best stuff?</h2>
                   <p className="font-mono font-bold text-xl">Skip the lab experiments. Shop the verified list.</p>
               </div>
               <Link href="/gold" className="relative z-10 bg-black text-white px-10 py-5 font-black text-xl border-4 border-white shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase">
                   Access Gold List 🏆
               </Link>
          </div>
      </div>

    </div>
  );
}