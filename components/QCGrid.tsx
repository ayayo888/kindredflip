import React from 'react';
import { QCItem } from '../types';
import { ArrowRight } from 'lucide-react';

interface QCGridProps {
  items: QCItem[];
}

const QCGrid: React.FC<QCGridProps> = ({ items }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-4">
      
      {/* Header Section */}
      <div className="flex items-end justify-between mb-8 pb-4 border-b-4 border-black border-dashed">
        <div className="flex items-center gap-4">
          {/* Green accent for QC to differentiate from Gold */}
          <div className="h-8 w-4 bg-kf-green skew-x-[-12deg] border-2 border-black"></div>
          <h2 className="text-3xl font-black uppercase tracking-wide">QC Guide</h2>
        </div>
        
        <a href="#" className="group flex items-center gap-1 font-black text-lg hover:text-kf-blue transition-colors">
          More
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="group flex flex-col bg-white border-2 border-black rounded-2xl shadow-hard overflow-hidden hover:-translate-y-2 hover:shadow-hard-lg transition-all duration-200 cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-gray-100 border-b-2 border-black">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content Container */}
            <div className="p-4 flex-grow flex flex-col justify-between">
              <h3 className="font-bold text-sm md:text-base leading-snug line-clamp-3 group-hover:text-kf-green transition-colors">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QCGrid;
