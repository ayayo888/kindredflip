'use client';

import React, { useState } from 'react';
import { Menu, ChevronDown, Check, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Gold', path: '/gold' },
  { name: 'The Lab', path: '/thelab' },
  { name: 'How to', path: '/howto' },
  { name: 'Agent', path: '/agent' },
];

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

const Navbar: React.FC = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Hook usage
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-black px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer group shrink-0">
          <div className="w-10 h-10 bg-kf-red rounded-lg border-2 border-black flex items-center justify-center shadow-hard-sm group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
            <span className="text-white font-black text-xl">K</span>
          </div>
          <span className="hidden lg:block font-black text-2xl tracking-tighter text-black">Kindredflip</span>
        </Link>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => {
             // Safe Pathname Check
             // Explicitly handle null case to satisfy TypeScript strict mode
             const safePathname = pathname || '';
             
             const isActive = link.path === '/' 
                ? safePathname === '/' 
                : safePathname.startsWith(link.path);

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

        {/* Right: Language Switcher & Mobile Toggle */}
        <div className="flex items-center gap-4">
          
          {/* Language Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-transparent hover:border-black hover:bg-kf-offwhite transition-all font-bold"
            >
              <span className="text-xl">{selectedLang.flag}</span>
              <span className="hidden sm:inline">{selectedLang.label}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border-2 border-black shadow-hard rounded-xl overflow-hidden py-1 z-50">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang);
                      setIsLangOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-2 hover:bg-kf-yellow/20 transition-colors text-left font-bold"
                  >
                    <span className="flex items-center gap-2">
                        <span className="text-xl">{lang.flag}</span>
                        {lang.label}
                    </span>
                    {selectedLang.code === lang.code && <Check className="w-4 h-4 text-kf-green" />}
                  </button>
                ))}
              </div>
            )}
          </div>

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