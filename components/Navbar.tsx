'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/lib/constants';
import Image from 'next/image';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Gold', path: '/gold' },
  { name: 'The Lab', path: '/thelab' },
  { name: 'How to', path: '/howto' },
  { name: 'Agent', path: '/agent' },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Hook usage: Safely handle potential null at the top level
  const rawPathname = usePathname();
  // FORCE FIX: Ensure safePath is always a string, never null
  const safePath = typeof rawPathname === 'string' ? rawPathname : '';

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-black px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer group shrink-0">
          <div className="relative w-10 h-10 rounded-lg border-2 border-black overflow-hidden shadow-hard-sm group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all bg-white">
            <Image 
              src={SITE_CONFIG.icon} 
              alt="Logo" 
              fill
              sizes="40px"
              className="object-cover" 
            />
          </div>
          <span className="hidden lg:block font-black text-2xl tracking-tighter text-black">Kindredflip</span>
        </Link>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => {
             // Logic to check active state using the safe variable
             const isActive = link.path === '/' 
                ? safePath === '/' 
                : safePath.startsWith(link.path);

             return (
                <Link 
                key={link.name} 
                href={link.path} 
                className={`font-bold text-lg hover:text-kf-blue hover:underline decoration-4 underline-offset-4 decoration-kf-yellow transition-all ${isActive ? 'text-kf-blue underline' : 'text-black'}`}
                >
                {link.name}
                </Link>
             );
          })}
        </div>

        {/* Right: Mobile Toggle */}
        <div className="flex items-center gap-4">
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 border-2 border-black rounded-lg bg-kf-yellow shadow-hard-sm active:translate-y-1 active:shadow-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 border-t-2 border-black pt-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 font-black text-xl hover:bg-kf-blue hover:text-white rounded-lg border-2 border-transparent hover:border-black transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;