import Link from 'next/link';
import { AlertTriangle, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-kf-offwhite flex flex-col items-center justify-center p-4">
      <div className="bg-white border-4 border-black p-8 md:p-12 rounded-2xl shadow-hard text-center max-w-lg">
        <div className="w-20 h-20 bg-kf-red text-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-black animate-bounce">
          <AlertTriangle className="w-10 h-10" />
        </div>
        
        <h1 className="text-6xl font-black mb-2">404</h1>
        <h2 className="text-2xl font-bold uppercase mb-6">Page Not Found</h2>
        
        <p className="text-gray-600 font-medium mb-8">
          The link you clicked might be broken, or the item has been removed from the archive.
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-black text-lg uppercase hover:bg-kf-yellow hover:text-black transition-colors border-2 border-transparent hover:border-black"
        >
          <Home className="w-5 h-5" />
          Return Home
        </Link>
      </div>
    </div>
  );
}