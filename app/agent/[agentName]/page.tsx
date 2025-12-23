import React from 'react';
import Link from 'next/link';
import { 
  Database, Wifi, Footprints, Shirt, Laptop, ShoppingBag, Glasses, Terminal,
  Ghost, Trophy, Ruler, Coffee, Heart, Sparkles, Shield, Home, ChevronRight,
  Check, AlertTriangle, ArrowRight, Plane, Package
} from 'lucide-react';
import type { Metadata } from 'next';

// Helper function to format agent name (used in metadata and component)
const formatName = (name: string) => {
    if (!name) return "Agent";
    const lowerName = name.toLowerCase();
    if (lowerName === 'acbuy') return 'ACBuy';
    if (lowerName === 'cnfans') return 'CNfans';
    if (lowerName === 'allchinabuy') return 'AllChinaBuy';
    return name.charAt(0).toUpperCase() + name.slice(1);
};

// Next.js Dynamic Metadata Generation
export async function generateMetadata({ params }: { params: { agentName: string } }): Promise<Metadata> {
    const name = formatName(params.agentName);
    return {
        title: `${name} Spreadsheet 2026 | Verified Links & Coupon Codes List`,
        description: `The most comprehensive ${name} Spreadsheet. Access 3,000+ QC-verified finds for Sneakers, Streetwear, and Tech. Includes guide on How to Order via ${name}.`,
        keywords: `${name} spreadsheet, ${name} agent, how to order ${name}, ${name} qc, chinese fashion agent, ${name} shipping`,
    };
}

export default function AgentDetailPage({ params }: { params: { agentName: string } }) {
  const name = formatName(params.agentName);
  
  // Categories for the Inventory Grid
  const GRID_CATEGORIES = [
      { name: 'SHOES', icon: Footprints },
      { name: 'HOODIES', icon: Ghost },
      { name: 'T-SHIRTS', icon: Shirt },
      { name: 'JACKETS', icon: Shield },
      { name: 'JERSEY', icon: Trophy },
      { name: 'PANTS', icon: Ruler },
      { name: 'ACCESSORIES', icon: Glasses },
      { name: 'BAGS', icon: ShoppingBag },
      { name: 'TECH', icon: Laptop },
      { name: 'LIFESTYLE', icon: Coffee },
      { name: 'GIRLS', icon: Heart },
      { name: 'PERFUME', icon: Sparkles },
  ];

  // Generic Content Configuration for ALL Agents
  const content = {
      headerTitle: `${name} SPREADSHEET`,
      statsLabel: "DATABASE SIZE",
      statsValue: "3,402 ITEMS",
      intro: {
          title: `${name} Intelligence Log`,
          systemCheck: "// SYSTEM CHECK: NO DEAD LINKS",
          points: [
              { 
                  title: "NO FAKE REVIEWS", 
                  desc: "We filter out bot-generated hype. Only verified purchases make the list.",
                  icon: Check
              },
              { 
                  title: "BATCH COMPARISON", 
                  desc: "Compare LJR vs GX prices instantly. Don't overpay for budget batches.",
                  icon: Check
              },
              { 
                  title: "MANUAL OVERRIDE", 
                  desc: "Guide included below for blocked items. (See Protocol 3).",
                  icon: Check
              }
          ]
      },
      protocol: {
          title: "Protocol: Bypass Risk Warnings",
          subTitle: 'IF ITEM IS "BLOCKED":',
          steps: [
              'COPY the "Product Link" (Weidian/Taobao URL)',
              `LOCATE "Manual Order" form on ${name}`,
              "PASTE link & fill price/details manually",
              "SUBMIT agent order"
          ],
          note: "*This method bypasses brand filters 99% of the time."
      },
      timeline: [
          { title: "Sourcing", desc: "Find verified items in our grid.", stepNumber: "01", color: "bg-white" },
          { title: "Injection", desc: `Paste link into ${name} search.`, stepNumber: "02", color: "bg-kf-blue" },
          { title: "QC Check", desc: "Inspect warehouse photos.", stepNumber: "03", color: "bg-white" },
          { title: "Extraction", desc: "Ship via Tax-Free lines.", stepNumber: "04", color: "bg-kf-green" }
      ],
      manifest: {
          leftTitle: "New User Bonus",
          leftValue: "$150",
          leftSub: "Sign-up Bundle",
          leftBtn: "[ Claim Coupons Now ]",
          rightLines: [
              { name: "US Tax-Free", desc: "10-14 Days Avg.", icon: Plane },
              { name: "EU Tariffless", desc: "Safety Priority", icon: Plane },
              { name: "Global EMS", desc: "Reliable Speed", icon: Plane }
          ]
      }
  };

  return (
    <div className="bg-kf-offwhite min-h-screen pb-24 font-sans">
      
      {/* BREADCRUMBS */}
      <div className="bg-kf-offwhite border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-xs md:text-sm font-mono font-bold uppercase text-gray-500">
                <Link href="/" className="hover:text-black flex items-center gap-1">
                    <Home className="w-3 h-3" /> Home
                </Link>
                <ChevronRight className="w-3 h-3 text-gray-300" />
                <Link href="/agent" className="hover:text-black hover:underline decoration-2 underline-offset-2">
                    Agent Database
                </Link>
                <ChevronRight className="w-3 h-3 text-gray-300" />
                <span className="text-black bg-kf-yellow px-1 border border-black">{name}</span>
            </nav>
        </div>
      </div>

      {/* HEADER (Status Bar) */}
      <section className="bg-white border-b-4 border-black pt-8 pb-8 px-4">
          <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                      <div className="flex items-center gap-2 mb-2">
                          <div className="bg-black text-white text-xs font-mono px-2 py-1">PROFILE_ID: {name.toUpperCase()}_01</div>
                          <div className="flex items-center gap-1 text-kf-green font-mono text-xs font-bold animate-pulse">
                              <Wifi className="w-3 h-3" /> ONLINE
                          </div>
                      </div>
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tighter">
                          {content.headerTitle}
                      </h1>
                  </div>
                  
                  <div className="border-4 border-black p-4 bg-kf-offwhite min-w-[200px] shadow-hard-sm">
                      <div className="flex items-center gap-2 text-gray-500 font-mono text-xs font-bold mb-1">
                          <Database className="w-3 h-3" /> {content.statsLabel}
                      </div>
                      <div className="text-3xl font-black">{content.statsValue}</div>
                  </div>
              </div>
          </div>
      </section>

      {/* INVENTORY GRID */}
      <section className="bg-kf-offwhite border-b-4 border-black">
          <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-l-4 border-black">
                  {GRID_CATEGORIES.map((cat, idx) => (
                      <Link 
                        href={`/gold?category=${cat.name.toLowerCase()}`} 
                        key={idx}
                        className="group relative aspect-square bg-white border-r-4 border-b-4 border-black hover:bg-kf-yellow transition-all duration-100 active:translate-y-1 active:bg-kf-yellow/80 cursor-pointer overflow-hidden"
                      >
                          <div className="absolute inset-0 flex items-center justify-center p-8 pb-12">
                              <cat.icon strokeWidth={1.5} className="w-full h-full text-black group-hover:scale-110 transition-transform duration-200" />
                          </div>
                          <div className="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-center border-t-4 border-black group-hover:bg-black group-hover:text-kf-yellow transition-colors">
                              <span className="font-black text-lg md:text-xl tracking-wider">{cat.name}</span>
                          </div>
                      </Link>
                  ))}
              </div>
          </div>
      </section>

      {/* MODULE 1: THE MAIN ACTION BAR (Visual Divider) */}
      <section className="bg-black text-white border-b-4 border-black">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                  <Database className="w-6 h-6 text-kf-yellow" />
                  <span className="font-black text-2xl md:text-3xl uppercase text-kf-yellow tracking-tighter">Access Full Database</span>
              </div>
              <button className="w-full md:w-auto px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-all font-mono font-bold text-sm uppercase flex items-center justify-center gap-2">
                  [ Open Google Sheet <ArrowRight className="w-4 h-4" /> ]
              </button>
          </div>
      </section>

      {/* Main Content Modules */}
      <div className="max-w-5xl mx-auto px-4 mt-12 space-y-16">
          
          {/* MODULE 2: THE INTELLIGENCE BLOCK (SEO / Features) */}
          <div className="bg-white border-4 border-black pl-0 md:pl-0 flex flex-col relative shadow-hard">
             <div className="absolute top-0 bottom-0 left-0 w-3 bg-kf-yellow border-r-4 border-black"></div>
             
             <div className="p-8 pl-10 md:pl-12">
                <div className="flex items-center gap-2 mb-2">
                    <Terminal className="w-5 h-5 text-gray-500" />
                    <h2 className="font-black text-2xl md:text-3xl uppercase tracking-tight">{content.intro.title}</h2>
                </div>
                <div className="font-mono text-xs text-kf-green font-bold mb-6 tracking-widest">{content.intro.systemCheck}</div>
                
                <div className="space-y-4">
                    {content.intro.points.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                            <div className="bg-black text-white p-1 rounded-sm mt-1">
                                <point.icon className="w-4 h-4" />
                            </div>
                            <div>
                                <span className="block font-black text-lg uppercase">{point.title}</span>
                                <span className="text-gray-600 font-medium">{point.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
          </div>

          {/* MODULE 3: THE PROTOCOL (Manual/Guide) */}
          <div className="bg-kf-yellow border-4 border-black p-6 md:p-8 shadow-hard relative">
             <div className="flex items-center gap-3 mb-6">
                 <AlertTriangle className="w-8 h-8 text-black fill-current" />
                 <h2 className="font-black text-2xl md:text-3xl uppercase leading-none">
                    {content.protocol.title}
                 </h2>
             </div>

             {/* Code Block Visual */}
             <div className="bg-black rounded-lg border-2 border-black p-6 shadow-hard-sm overflow-x-auto">
                 <div className="font-mono text-sm md:text-base space-y-4">
                     <div className="text-gray-500 border-b border-gray-800 pb-2 mb-4 flex justify-between">
                         <span>protocol_v4.sh</span>
                         <span>root access</span>
                     </div>
                     
                     <div className="text-kf-green">
                         <span className="text-kf-red font-bold">{">"} {content.protocol.subTitle}</span>
                     </div>
                     
                     <div className="pl-4 text-white space-y-2">
                         {content.protocol.steps.map((step, idx) => (
                             <div key={idx} className="flex gap-2">
                                 <span className="text-gray-500">{idx + 1}.</span>
                                 <span>{step}</span>
                             </div>
                         ))}
                     </div>
                 </div>
             </div>
             
             <p className="mt-4 font-bold text-center text-sm opacity-70">
                 {content.protocol.note}
             </p>
          </div>

          {/* MODULE 4: THE EXECUTION TIMELINE (Vertical Guide) */}
          <div className="relative py-4 pl-4 md:pl-0">
             {/* Dashed Line */}
             <div className="absolute left-8 top-0 bottom-0 w-1 border-l-4 border-dashed border-gray-300 md:left-1/2 md:-ml-[2px] z-0"></div>
             
             <div className="space-y-12 relative z-10">
                 {content.timeline.map((item, idx) => {
                     const isLeft = idx % 2 === 0;
                     return (
                        <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-6 group">
                            {/* Circle Node */}
                            <div className={`w-16 h-16 ${item.color} border-4 border-black rounded-full flex items-center justify-center font-black text-2xl shadow-hard shrink-0 md:order-2 md:mx-auto z-10`}>
                                {item.stepNumber}
                            </div>
                            
                            {/* Left Side Content */}
                            {isLeft ? (
                                <>
                                    <div className="md:w-1/2 md:text-right md:order-1 md:pr-12">
                                        <h3 className="font-black text-xl uppercase mb-1">{item.title}</h3>
                                        <p className="font-medium text-gray-600">{item.desc}</p>
                                    </div>
                                    <div className="hidden md:block md:w-1/2 md:order-3"></div>
                                </>
                            ) : (
                                <>
                                    <div className="hidden md:block md:w-1/2 md:order-1"></div>
                                    <div className="md:w-1/2 md:order-3 md:pl-12">
                                        <h3 className="font-black text-xl uppercase mb-1">{item.title}</h3>
                                        <p className="font-medium text-gray-600">{item.desc}</p>
                                    </div>
                                </>
                            )}
                        </div>
                     );
                 })}
             </div>
          </div>

          {/* MODULE 5: THE LOGISTICS & COUPON MANIFEST (Receipt Style) */}
          <div className="bg-gray-100 border-4 border-black relative mb-12 shadow-hard-lg">
              {/* Zigzag Top */}
              <div className="absolute top-0 left-0 right-0 h-4 bg-gray-100" style={{ backgroundImage: 'linear-gradient(45deg, transparent 75%, black 75%), linear-gradient(-45deg, transparent 75%, black 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 0 0', marginTop: '-10px' }}></div>

              <div className="p-2 bg-black text-center">
                  <span className="font-mono text-white text-xs tracking-[0.2em] uppercase">{name} MANIFEST // DOC_ID_882</span>
              </div>

              <div className="flex flex-col md:flex-row">
                  {/* Left: Coupons/Service */}
                  <div className="md:w-1/2 p-8 border-b-4 md:border-b-0 md:border-r-4 border-dashed border-gray-400 flex flex-col items-center justify-center text-center bg-white">
                      <div className="inline-block bg-kf-red text-white px-3 py-1 font-black text-xs uppercase mb-4 rotate-3">
                          {content.manifest.leftTitle}
                      </div>
                      <div className="font-black text-5xl md:text-6xl mb-2 tracking-tighter">{content.manifest.leftValue}</div>
                      <div className="font-bold text-xl uppercase mb-6 text-gray-500">{content.manifest.leftSub}</div>
                      <button className="w-full bg-black text-white py-4 font-black uppercase hover:bg-kf-yellow hover:text-black transition-colors border-2 border-transparent hover:border-black">
                          {content.manifest.leftBtn}
                      </button>
                  </div>

                  {/* Right: Lines/Features */}
                  <div className="md:w-1/2 p-8 bg-gray-50">
                      <h3 className="font-black text-lg uppercase mb-4 flex items-center gap-2">
                          <Plane className="w-5 h-5" /> Service Features
                      </h3>
                      <div className="space-y-4">
                          {content.manifest.rightLines.map((line, idx) => (
                              <div key={idx} className="bg-white border-2 border-black p-4 shadow-sm flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                      <div className="bg-gray-100 p-2 rounded border border-black">
                                          <line.icon className="w-5 h-5" />
                                      </div>
                                      <div>
                                          <div className="font-bold text-sm">{line.name}</div>
                                          <div className="text-xs text-gray-500 font-mono">{line.desc}</div>
                                      </div>
                                  </div>
                                  <Check className="w-5 h-5 text-kf-green" />
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>

      </div>
    </div>
  );
}