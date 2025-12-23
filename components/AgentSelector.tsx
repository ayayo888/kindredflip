'use client';

import React, { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

const AGENTS = [
  "Kakobuy", "Mulebuy", "Gtbuy", "Vigorbuy", "Eastmallbuy", "Rizzitgo", 
  "Hipobuy", "Tigbuy", "Cnshopper", "Oopbuy", "Acbuy", "Pingubuy", 
  "Pantherbuy", "Hoobuy", "Ootdbuy", "Itaobuy", "Allchinabuy", "Ponybuy", 
  "Cssbuy", "Orientdig", "Bbdbuy", "Npbuy", "Joyagoo", "Sugargoo", 
  "Lovegobuy", "Superbuy", "Basetao", "Hubbuycn"
];

const AgentSelector: React.FC = () => {
  const [isAgentMenuOpen, setIsAgentMenuOpen] = useState(false);

  return (
    <div className="relative">
        <button 
            onClick={() => setIsAgentMenuOpen(!isAgentMenuOpen)}
            className="w-full bg-white text-black py-3 px-4 rounded-lg border-2 border-black font-bold text-sm shadow-sm hover:bg-kf-offwhite transition-all flex items-center justify-between"
        >
            <span>Select Agent ({AGENTS.length})</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isAgentMenuOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown Menu */}
        {isAgentMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-black rounded-lg shadow-hard max-h-60 overflow-y-auto z-50 divide-y-2 divide-gray-100">
                {AGENTS.map((agent) => (
                    <button 
                        key={agent}
                        className="w-full text-left px-4 py-3 font-bold text-sm hover:bg-kf-yellow hover:text-black transition-colors flex items-center justify-between group"
                    >
                        {agent}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                ))}
            </div>
        )}
    </div>
  );
};

export default AgentSelector;