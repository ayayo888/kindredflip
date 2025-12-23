import React, { useEffect } from 'react';
import { Server, Ticket, Database, Wifi, Scale, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Raw data for the database - Sorted Alphabetically
const AGENT_LIST = [
  "Acbuy", "Allchinabuy", "Basetao", "Bbdbuy", "CNfans", "Cnshopper", "Cssbuy", 
  "Eastmallbuy", "Gtbuy", "Hipobuy", "Hoobuy", "Hubbuycn", "Itaobuy", "Joyagoo", 
  "Kakobuy", "Kameymall", "Lovegobuy", "Mulebuy", "Npbuy", "Oopbuy", "Ootdbuy", 
  "Orientdig", "Pantherbuy", "Pingubuy", "Ponybuy", "Rizzitgo", "Sugargoo", 
  "Superbuy", "Tigbuy", "Vigorbuy"
];

// Sort list alphabetically by default (list is already sorted above, but keeping logic ensures stability)
const SORTED_AGENT_LIST = [...AGENT_LIST].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

const AgentDatabasePage: React.FC = () => {
  
  // SEO
  useEffect(() => {
    document.title = "China Agent Database 2026 | All Spreadsheets & Coupon Codes";
    
    const setMetaTag = (name: string, content: string) => {
        let element = document.querySelector(`meta[name="${name}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute('name', name);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };

    setMetaTag('description', 'Looking for alternatives? Access verified Spreadsheets and $100+ Coupon Bundles for 30+ China shopping agents (Mulebuy, Hoobuy, Sugargoo & more). Updated daily.');
    setMetaTag('keywords', 'china agent spreadsheet, mulebuy spreadsheet, hoobuy spreadsheet, agent coupons, sugargoo alternatives');

    return () => {
        document.title = "Kindredflip - Discover Your Vibe";
    };
  }, []);

  return (
    <div className="bg-kf-offwhite min-h-screen pb-20">
      
      {/* 1. HERO SECTION: The Server Rack */}
      <section className="bg-black text-white relative overflow-hidden border-b-4 border-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-[400px]">
           
           {/* Left: Text Data */}
           <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative z-10">
              <div className="flex flex-col gap-2 font-mono text-sm text-kf-green mb-6 tracking-wider">
                 <span className="flex items-center gap-2">
                    <Database className="w-4 h-4" /> // INDEXING {AGENT_LIST.length} ALTERNATIVE PLATFORMS.
                 </span>
                 <span className="flex items-center gap-2 animate-pulse">
                    <Wifi className="w-4 h-4" /> // STATUS: ALL SYSTEMS ONLINE.
                 </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
                 The Agent <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Database</span>
              </h1>
              
              <p className="font-medium text-gray-400 max-w-lg text-lg border-l-2 border-kf-green pl-4">
                 Access the complete archive. Verified spreadsheets and coupon bundles for every major proxy buying service in 2026.
              </p>
           </div>

           {/* Right: Abstract Connectivity Map */}
           <div className="w-full md:w-2/5 relative bg-[#111] overflow-hidden flex items-center justify-center border-t-4 md:border-t-0 md:border-l-4 border-black">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              
              {/* Central Node */}
              <div className="relative z-10">
                 <div className="w-20 h-20 bg-kf-red rounded-full border-4 border-white animate-pulse flex items-center justify-center shadow-[0_0_30px_rgba(255,77,77,0.5)]">
                    <Server className="w-8 h-8 text-white" />
                 </div>
                 {/* Satellite Nodes */}
                 {[...Array(6)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-3 h-3 bg-kf-yellow rounded-full"
                      style={{
                         top: '50%',
                         left: '50%',
                         transform: `rotate(${i * 60}deg) translate(80px) rotate(-${i * 60}deg)`
                      }}
                    ></div>
                 ))}
                 {/* Connecting Lines */}
                 <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 -z-10 opacity-30 animate-spin-slow">
                    <circle cx="128" cy="128" r="80" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                    <circle cx="128" cy="128" r="110" stroke="white" strokeWidth="1" fill="none" opacity="0.5" />
                 </svg>
              </div>
           </div>
        </div>
      </section>

      {/* 2. INSIDER NOTE BANNER */}
      <div className="bg-kf-yellow border-b-4 border-black py-4 px-4 shadow-md sticky top-[68px] z-30">
         <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-center">
            <Scale className="w-6 h-6 text-black flex-shrink-0" />
            <p className="font-bold text-sm md:text-base text-black">
               <span className="font-black uppercase">Insider Note:</span> Newer agents often offer bigger coupons and premium service, but carry higher shipping uncertainty. Weigh your risks.
            </p>
         </div>
      </div>

      {/* 3. THE GRID (Dual-Action Cards) */}
      <section className="max-w-7xl mx-auto px-4 pb-20 mt-12">
          
          {SORTED_AGENT_LIST.length === 0 ? (
              <div className="text-center py-20 border-4 border-dashed border-gray-300 rounded-3xl">
                  <p className="text-2xl font-bold text-gray-400">NO AGENT FOUND IN DATABASE.</p>
              </div>
          ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SORTED_AGENT_LIST.map((agent, index) => (
                      <div 
                        key={agent}
                        className="flex flex-col h-full bg-white border-2 border-black rounded-xl overflow-hidden shadow-hard hover:shadow-hard-lg hover:-translate-y-1 transition-all duration-200"
                      >
                          {/* Card Header */}
                          <div className="p-5 flex items-center justify-between border-b-2 border-gray-100 bg-gray-50">
                              <h3 className="text-xl font-black uppercase tracking-tight">{agent}</h3>
                              <div className="flex items-center gap-2">
                                  <span className="text-[10px] font-mono font-bold text-gray-400">ONLINE</span>
                                  <div className="w-3 h-3 bg-kf-green rounded-full shadow-[0_0_8px_rgba(0,200,83,0.6)]"></div>
                              </div>
                          </div>

                          {/* Card Body - Tech Decoration */}
                          <div className="px-5 py-6 flex-grow flex items-center justify-between">
                              <div className="flex flex-col gap-1">
                                  <span className="font-mono text-xs text-gray-400">SYSTEM_ID</span>
                                  <span className="font-mono font-bold text-sm bg-gray-100 px-2 py-1 rounded w-fit">
                                    {agent.substring(0, 3).toUpperCase()}-2026
                                  </span>
                              </div>
                              <Database className="w-8 h-8 text-gray-200 stroke-1" />
                          </div>

                          {/* Card Footer - Split Buttons */}
                          <div className="flex border-t-2 border-black">
                              {/* Spreadsheet Button (Primary) */}
                              <Link 
                                to={`/agent/${agent.toLowerCase()}`}
                                className="flex-1 bg-kf-yellow hover:bg-kf-black hover:text-white text-black font-black uppercase text-sm py-4 flex items-center justify-center gap-2 transition-colors border-r-2 border-black"
                              >
                                  Spreadsheet
                              </Link>
                              
                              {/* Coupons Button (Secondary) */}
                              <Link 
                                to={`/agent/${agent.toLowerCase()}`}
                                className="flex-1 bg-white hover:bg-gray-100 text-black font-black uppercase text-sm py-4 flex items-center justify-center gap-2 transition-colors"
                              >
                                  Coupons <Ticket className="w-4 h-4" />
                              </Link>
                          </div>
                      </div>
                  ))}
              </div>
          )}
      </section>

    </div>
  );
};

export default AgentDatabasePage;