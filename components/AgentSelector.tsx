'use client';

import React, { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

// Defines the data structure passed from the parent page
interface AgentSelectorProps {
  agentLinks?: Record<string, string>;
}

// Full list of agents we support displaying. 
// We will filter this list based on which keys exist in the 'agentLinks' prop.
const ALL_SUPPORTED_AGENTS = [
  "CNfans", "Mulebuy", "Hoobuy", "Kakobuy", "Gtbuy", "Vigorbuy", "Eastmallbuy", 
  "Rizzitgo", "Hipobuy", "Tigbuy", "Cnshopper", "Oopbuy", "Acbuy", "Pingubuy", 
  "Pantherbuy", "Ootdbuy", "Itaobuy", "Allchinabuy", "Ponybuy", "Cssbuy", 
  "Orientdig", "Bbdbuy", "Npbuy", "Joyagoo", "Sugargoo", "Lovegobuy", 
  "Superbuy", "Basetao", "Hubbuycn"
];

const AgentSelector: React.FC<AgentSelectorProps> = ({ agentLinks = {} }) => {
  const [isAgentMenuOpen, setIsAgentMenuOpen] = useState(false);

  // 1. Filter the master list. 
  // Only show agents that have a URL configured in the 'agentLinks' object.
  // This ensures we never send users to a broken or generic link.
  const availableAgents = ALL_SUPPORTED_AGENTS.filter(
    (agentName) => agentLinks[agentName] && agentLinks[agentName].length > 0
  );

  return (
    <div className="relative">
        <button 
            onClick={() => setIsAgentMenuOpen(!isAgentMenuOpen)}
            disabled={availableAgents.length === 0}
            className={`w-full bg-white text-black py-3 px-4 rounded-lg border-2 border-black font-bold text-sm shadow-sm transition-all flex items-center justify-between
                ${availableAgents.length === 0 ? 'opacity-50 cursor-not-allowed bg-gray-100' : 'hover:bg-kf-offwhite'}
            `}
        >
            <span>
                {availableAgents.length > 0 
                  ? `Select Agent (${availableAgents.length})` 
                  : 'No Other Agents Configured'}
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isAgentMenuOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown Menu */}
        {isAgentMenuOpen && availableAgents.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-black rounded-lg shadow-hard max-h-60 overflow-y-auto z-50 divide-y-2 divide-gray-100">
                {availableAgents.map((agent) => {
                    const url = agentLinks[agent];

                    return (
                        <a 
                            key={agent}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-left px-4 py-3 font-bold text-sm transition-colors flex items-center justify-between group hover:bg-kf-yellow hover:text-black cursor-pointer"
                        >
                            {agent}
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    );
                })}
            </div>
        )}
    </div>
  );
};

export default AgentSelector;