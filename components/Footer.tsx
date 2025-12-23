import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-kf-black text-white py-12 px-4 border-t-4 border-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Brand Name */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-black text-white">Kindredflip</h2>
        </div>

        {/* Right Side: Tagline (Moved from under title to empty space) */}
        <div className="text-center md:text-right">
             <p className="text-gray-400 font-bold text-lg md:text-xl">
                The curated spreadsheet for the next generation.
             </p>
        </div>

      </div>
      
      {/* Copyright Section */}
      <div className="text-center mt-12 pt-8 border-t border-gray-800 text-gray-500 font-bold text-sm">
        &copy; {new Date().getFullYear()} Kindredflip. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;