import React from 'react';
import { CategoryItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface CategoryGridProps {
  categories: CategoryItem[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  const getColorClass = (color: string) => {
    switch (color) {
      case 'red': return 'bg-kf-red';
      case 'blue': return 'bg-kf-blue';
      case 'yellow': return 'bg-kf-yellow';
      case 'green': return 'bg-kf-green';
      default: return 'bg-white';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
        
      <div className="flex items-center gap-4 mb-8">
        <div className="h-8 w-4 bg-kf-black skew-x-[-12deg]"></div>
        <h2 className="text-3xl font-black uppercase tracking-wide">Spreadsheet Link</h2>
      </div>

      {categories.length === 0 ? (
        <div className="text-center py-20 border-4 border-dashed border-gray-300 rounded-3xl">
            <p className="text-2xl font-bold text-gray-400">No vibes found matching that search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="group relative cursor-pointer"
            >
              {/* Card Container */}
              <div className="bg-white rounded-2xl border-2 border-black overflow-hidden shadow-hard transition-all duration-200 group-hover:-translate-y-2 group-hover:shadow-hard-lg">
                
                {/* Image Area */}
                <div className="relative aspect-square overflow-hidden bg-gray-100 border-b-2 border-black">
                   <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                   {/* Floating Tag */}
                   <div className={`absolute top-2 right-2 px-2 py-1 border-2 border-black rounded-md text-xs font-black text-white shadow-hard-sm ${getColorClass(cat.color)}`}>
                      {cat.itemCount}+
                   </div>
                </div>

                {/* Content Area */}
                <div className="p-4 flex items-center justify-between bg-white relative">
                  <span className="font-bold text-lg leading-none">{cat.name}</span>
                  <div className={`w-8 h-8 rounded-full border-2 border-black flex items-center justify-center transition-colors ${getColorClass(cat.color)}`}>
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Decorative "Under" Element (like the icon style) */}
              <div className={`absolute -z-10 top-2 -right-2 w-full h-full rounded-2xl border-2 border-black ${getColorClass(cat.color)} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryGrid;
