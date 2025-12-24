import React from 'react';
import { ArticleItem } from '../lib/types';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface GoldGridProps {
  items: ArticleItem[];
}

const GoldGrid: React.FC<GoldGridProps> = ({ items }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-4 relative z-20">
      
      {/* Header Section */}
      <div className="flex items-end justify-between mb-8 pb-4 border-b-4 border-black border-dashed">
        <div className="flex items-center gap-4">
          <div className="h-8 w-4 bg-kf-yellow skew-x-[-12deg] border-2 border-black"></div>
          <h2 className="text-3xl font-black uppercase tracking-wide">Gold Spreadsheet</h2>
        </div>
        
        <Link href="/gold" className="group flex items-center gap-1 font-black text-lg hover:text-kf-blue transition-colors">
          More
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <Link 
            href={`/gold/${item.id}`} 
            key={item.id} 
            className="group flex flex-col bg-white border-2 border-black rounded-2xl shadow-hard overflow-hidden hover:-translate-y-2 hover:shadow-hard-lg transition-all duration-200 cursor-pointer relative z-10"
          >
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-gray-100 border-b-2 border-black">
              <Image 
                src={item.image} 
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Sale/Gold Badge */}
              {(item.isSale || item.isFeatured) && (
                <div className="absolute bottom-3 left-3 bg-kf-blue text-white px-3 py-1 rounded-full border-2 border-black font-bold text-sm shadow-sm z-20">
                  Gold
                </div>
              )}
            </div>

            {/* Content Container */}
            <div className="p-4 flex-grow flex flex-col justify-between bg-white relative z-10">
              <h3 className="font-bold text-sm md:text-base leading-snug line-clamp-3 group-hover:text-kf-blue transition-colors">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GoldGrid;