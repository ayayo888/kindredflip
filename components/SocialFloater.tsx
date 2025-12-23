import React from 'react';
import { Send } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

const SocialFloater: React.FC = () => {
  return (
    <>
      {/* Container - Positioning
          Desktop: Right center (Top 50%)
          Mobile: Bottom Right (Bottom 6, Right 4) to avoid blocking reading flow
      */}
      <div className="fixed z-50 flex flex-col gap-3 
                      right-2 bottom-24 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-0">
        
        {/* Discord Button */}
        <a 
          href={SOCIAL_LINKS.discord} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center justify-end relative transition-all duration-300 ease-out"
        >
          {/* Label (Desktop Hover Reveal) */}
          <div className="absolute right-10 opacity-0 group-hover:opacity-100 group-hover:right-14 transition-all duration-300 bg-black text-white px-3 py-1 rounded-lg border-2 border-white shadow-hard-sm font-black text-sm whitespace-nowrap hidden md:block pointer-events-none">
            Join Discord
          </div>

          {/* Icon Button */}
          <div className="w-10 h-10 md:w-12 md:h-12 bg-[#5865F2] border-2 border-black rounded-xl flex items-center justify-center shadow-hard md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-none transition-all active:translate-y-0 md:mr-4">
             {/* Discord SVG */}
             <svg className="w-6 h-6 md:w-7 md:h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
             </svg>
          </div>
        </a>

        {/* Telegram Button */}
        <a 
          href={SOCIAL_LINKS.telegram}
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center justify-end relative transition-all duration-300 ease-out"
        >
          {/* Label (Desktop Hover Reveal) */}
          <div className="absolute right-10 opacity-0 group-hover:opacity-100 group-hover:right-14 transition-all duration-300 bg-black text-white px-3 py-1 rounded-lg border-2 border-white shadow-hard-sm font-black text-sm whitespace-nowrap hidden md:block pointer-events-none">
            Join Telegram
          </div>

          {/* Icon Button */}
          <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0088cc] border-2 border-black rounded-xl flex items-center justify-center shadow-hard md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-none transition-all active:translate-y-0 md:mr-4">
            <Send className="w-5 h-5 md:w-6 md:h-6 text-white transform -rotate-12" />
          </div>
        </a>

      </div>
    </>
  );
};

export default SocialFloater;