import React from 'react';
import { LabItem } from '../lib/types';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface TheLabGridProps {
  items: LabItem[];
}

const TheLabGrid: React.FC<TheLabGridProps> = ({ items }) => {
  // Show only first 4 items on the home page grid
  const displayItems = items.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-4 relative z-20">
      
      {/* Header Section */}
      <div className="flex items-end justify-between mb-8 pb-4 border-b-4 border-black border-dashed">
        <div className="flex items-center gap-4">
          <div className="h-8 w-4 bg-kf-red skew-x-[-12deg] border-2 border-black"></div>
          <h2 className="text-3xl font-black uppercase tracking-wide">The Lab</h2>
        </div>
        
        <Link href="/thelab" className="group flex items-center gap-1 font-black text-lg hover:text-kf-blue transition-colors">
          View All Tests
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10">
        {displayItems.map((item) => (
            <Link 
              key={item.id} 
              href={`/thelab/${item.id}`}
              className="relative mt-6 group cursor-pointer hover:-translate-y-1 transition-transform duration-200 block z-10"
            >
                      
                {/* Folder Tab */}
                <div className="absolute -top-6 left-0 bg-black text-white px-4 py-1 rounded-t-lg border-[3px] border-b-0 border-black font-mono text-xs font-bold uppercase z-0 group-hover:z-20">
                    {item.category}
                </div>

                {/* Card Body */}
                <div className="bg-white border-[3px] border-black p-4 shadow-hard relative overflow-hidden h-full flex flex-col z-10">
                    
                    {/* Image */}
                    <div className="aspect-square bg-gray-100 border-2 border-black mb-4 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-300">
                        <Image 
                          src={item.image} 
                          alt={item.title} 
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-cover" 
                        />
                        
                        {/* STAMP */}
                        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-12 border-4 px-4 py-2 text-xl md:text-2xl font-black uppercase opacity-80 mix-blend-multiply z-20
                            ${item.status === 'PASS' ? 'border-kf-green text-kf-green' : 'border-kf-red text-kf-red'}
                        `}>
                            {item.status}
                        </div>
                    </div>

                    {/* Data */}
                    <div className="flex-grow">
                        <h3 className="font-black text-lg leading-tight mb-3 uppercase line-clamp-2 group-hover:text-kf-blue transition-colors">
                          {item.title}
                        </h3>
                        <div className="font-mono text-xs md:text-sm text-gray-600 space-y-1 border-t-2 border-dashed border-gray-300 pt-3 mb-4">
                            <div className="flex justify-between">
                                <span>PRICE:</span>
                                <span className="font-bold text-black">{item.price}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>WEIGHT:</span>
                                <span className="font-bold text-black">{item.weight}</span>
                            </div>
                        </div>
                        <p className="text-xs italic font-medium bg-gray-100 p-2 border-l-4 border-black mb-4 line-clamp-2">
                            "{item.note}"
                        </p>
                    </div>

                    {/* Action */}
                    <div className="w-full text-center bg-black text-white font-mono py-2 font-bold uppercase group-hover:bg-kf-yellow group-hover:text-black border-2 border-transparent group-hover:border-black transition-colors block text-sm">
                        [ Read Report ]
                    </div>
                </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default TheLabGrid;