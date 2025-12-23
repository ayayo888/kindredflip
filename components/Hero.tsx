import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block bg-kf-yellow border-2 border-black px-4 py-1 rounded-full mb-6 shadow-hard-sm transform -rotate-2">
           <span className="font-bold text-sm md:text-base">🏆 The Gold Standard SpreadSheet</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          The Only CNfans Spreadsheet You Need <br/>
          <span className="text-kf-blue relative inline-block">
            2026
            <svg className="absolute w-full h-4 -bottom-1 left-0 text-kf-red" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl font-bold text-gray-600 mb-8 max-w-2xl mx-auto">
          Don't bet on bad batches. We did the QC.
Shop the Gold Tag for items tested for safety and materials.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-kf-red text-white px-8 py-4 rounded-xl border-2 border-black font-black text-lg shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
            Join Discord
          </button>
          <button className="bg-white text-black px-8 py-4 rounded-xl border-2 border-black font-black text-lg shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
            Join Telegram
          </button>
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