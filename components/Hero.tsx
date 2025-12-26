import React from 'react';
import { SOCIAL_LINKS } from '@/lib/constants';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block bg-kf-yellow border-2 border-black px-4 py-1 rounded-full mb-6 shadow-hard-sm transform -rotate-2">
           <span className="font-bold text-sm md:text-base">🏆 The Gold Standard SpreadSheet</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          The Only CNfans Spreadsheet You Need 2026
        </h1>
        
        <p className="text-lg md:text-xl font-bold text-gray-600 mb-8 max-w-2xl mx-auto">
          Don't bet on bad batches. We did the QC.
Shop the Gold Tag for items tested for safety and materials.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href={SOCIAL_LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-kf-red text-white px-8 py-4 rounded-xl border-2 border-black font-black text-lg shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer"
          >
            Join Discord
          </a>
          <a 
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-xl border-2 border-black font-black text-lg shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer"
          >
            Join WhatsApp
          </a>
        </div>
      </div>

      {/* Decorative Background Elements (Kindredflip Icon Style) */}
      <div className="absolute top-10 left-[10%] w-16 h-16 bg-kf-green rounded-full border-2 border-black animate-bounce delay-75 opacity-50 md:opacity-100"></div>
      <div className="absolute bottom-10 right-[10%] w-24 h-24 bg-kf-blue rotate-12 border-2 border-black shadow-hard opacity-50 md:opacity-100"></div>
      <div className="absolute top-20 right-[20%] text-kf-yellow animate-pulse">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="stroke-black stroke-2">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;