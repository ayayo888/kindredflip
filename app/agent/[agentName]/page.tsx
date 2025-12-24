import React from 'react';
import Link from 'next/link';
import { 
  Database, Wifi, Footprints, Shirt, Laptop, ShoppingBag, Glasses, Terminal,
  Ghost, Trophy, Ruler, Coffee, Heart, Sparkles, Shield, Home, ChevronRight,
  Check, AlertTriangle, ArrowRight, Plane, Copy, Lock, AlertOctagon, ExternalLink
} from 'lucide-react';
import type { Metadata } from 'next';
import { AGENT_LINKS } from '@/lib/constants';

const formatName = (name: string) => {
    if (!name) return "Agent";
    const lowerName = name.toLowerCase();
    if (lowerName === 'acbuy') return 'ACBuy';
    if (lowerName === 'cnfans') return 'CNfans';
    if (lowerName === 'allchinabuy') return 'AllChinaBuy';
    return name.charAt(0).toUpperCase() + name.slice(1);
};

type Props = {
    params: Promise<{ agentName: string }> | { agentName: string };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    const name = formatName(params.agentName);
    return {
        title: `${name} Spreadsheet 2026 | Verified Links & Coupon Codes List`,
        description: `The most comprehensive ${name} Spreadsheet. Access 3,000+ QC-verified finds for Sneakers, Streetwear, and Tech. Includes guide on How to Order via ${name}.`,
    };
}

export default async function AgentDetailPage(props: Props) {
  const params = await props.params;
  const name = formatName(params.agentName);
  const key = params.agentName.toLowerCase();
  
  // Get Agent Config
  const agentConfig = AGENT_LINKS[key] || AGENT_LINKS['default'];
  const spreadsheetUrl = agentConfig.spreadsheet;
  // Use affiliate/coupon link if available, otherwise fallback to spreadsheet URL
  const couponUrl = agentConfig.affiliate || spreadsheetUrl;
  
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

  const content = {
      headerTitle: `${name} SPREADSHEET`,
      statsLabel: "DATABASE SIZE",
      statsValue: "3,402 ITEMS",
      intro: {
          title: `${name} Intelligence Log`,
          systemCheck: "// SYSTEM CHECK: NO DEAD LINKS",
          points: [
              { title: "NO FAKE REVIEWS", desc: "Only verified purchases.", icon: Check },
              { title: "BATCH COMPARISON", desc: "Compare LJR vs GX prices.", icon: Check },
              { title: "MANUAL OVERRIDE", desc: "Guide included below.", icon: Check }
          ]
      },
      protocol: {
          title: "Protocol: Bypass Risk Warnings",
          subTitle: 'IF ITEM IS "BLOCKED":',
          steps: [
              'COPY the "Product Link" (Weidian/Taobao URL)',
              `LOCATE "Manual Order" or "Fill & Buy" form on ${name}`,
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
                  {GRID_CATEGORIES.map((cat, idx) => {
                      // Logic: 
                      // 1. Convert Category name to UpperCase (e.g. 'SHOES')
                      // 2. Check if a specific URL is configured for this agent + category
                      // 3. If yes, use it. If no, fallback to the main spreadsheet URL.
                      const catKey = cat.name.toUpperCase();
                      const targetUrl = agentConfig.categories?.[catKey] || agentConfig.spreadsheet;
                      
                      return (
                        <a 
                            href={targetUrl} 
                            target="_blank"
                            rel="noopener noreferrer"
                            key={idx}
                            className="group relative aspect-square bg-white border-r-4 border-b-4 border-black hover:bg-kf-yellow transition-all duration-100 active:translate-y-1 active:bg-kf-yellow/80 cursor-pointer overflow-hidden"
                        >
                            <div className="absolute inset-0 flex items-center justify-center p-8 pb-12">
                                <cat.icon strokeWidth={1.5} className="w-full h-full text-black group-hover:scale-110 transition-transform duration-200" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-center border-t-4 border-black group-hover:bg-black group-hover:text-kf-yellow transition-colors flex items-center justify-center gap-1">
                                <span className="font-black text-lg md:text-xl tracking-wider">{cat.name}</span>
                                <ExternalLink className="w-3 h-3 opacity-50" />
                            </div>
                        </a>
                      );
                  })}
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
              <a 
                href={spreadsheetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-all font-mono font-bold text-sm uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                  [ Open Google Sheet <ArrowRight className="w-4 h-4" /> ]
              </a>
          </div>
      </section>
      
      {/* MODULES CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 mt-12 space-y-12">
          
          {/* 1. INTRO & INTELLIGENCE LOG */}
          <div className="bg-white border-4 border-black shadow-hard rounded-xl overflow-hidden">
               <div className="bg-kf-offwhite border-b-4 border-black p-4 flex items-center justify-between">
                   <h2 className="font-black text-xl md:text-2xl uppercase flex items-center gap-2">
                       <Terminal className="w-6 h-6" /> {content.intro.title}
                   </h2>
                   <div className="font-mono text-xs font-bold text-kf-green hidden md:block">
                       {content.intro.systemCheck}
                   </div>
               </div>
               
               <div className="p-8 grid md:grid-cols-3 gap-8">
                   {content.intro.points.map((point, i) => (
                       <div key={i} className="flex flex-col gap-2">
                           <div className="flex items-center gap-2 mb-2">
                               <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-lg">
                                   <point.icon className="w-4 h-4" />
                               </div>
                               <span className="font-black text-lg uppercase">{point.title}</span>
                           </div>
                           <p className="text-gray-600 font-bold text-sm pl-10 border-l-2 border-gray-200">
                               {point.desc}
                           </p>
                       </div>
                   ))}
               </div>
          </div>

          {/* 2. TIMELINE (PROCESS) */}
          <div className="grid md:grid-cols-4 gap-4">
              {content.timeline.map((step, i) => (
                  <div key={i} className={`border-4 border-black p-6 rounded-xl shadow-hard relative overflow-hidden group hover:-translate-y-1 transition-transform ${step.color}`}>
                      <div className="absolute top-2 right-2 font-black text-5xl opacity-10 group-hover:opacity-20 transition-opacity">
                          {step.stepNumber}
                      </div>
                      <span className="inline-block bg-black text-white text-xs font-mono font-bold px-2 py-1 mb-4 rounded">
                          STEP {step.stepNumber}
                      </span>
                      <h3 className="font-black text-2xl uppercase mb-2">{step.title}</h3>
                      <p className="font-medium text-sm text-gray-600">{step.desc}</p>
                  </div>
              ))}
          </div>

          {/* 3. PROTOCOL & MANIFEST SPLIT */}
          <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Protocol: Bypass Warnings */}
              <div className="bg-kf-red text-white border-4 border-black p-8 rounded-xl shadow-hard relative overflow-hidden">
                   {/* Background warning stripes */}
                   <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)' }}></div>
                   
                   <div className="relative z-10">
                       <div className="flex items-center gap-3 mb-6">
                           <AlertOctagon className="w-8 h-8" />
                           <div>
                               <h3 className="font-black text-2xl uppercase leading-none">{content.protocol.title}</h3>
                               <p className="font-mono text-xs opacity-80 mt-1">{content.protocol.subTitle}</p>
                           </div>
                       </div>
                       
                       <div className="space-y-4 font-mono text-sm md:text-base">
                           {content.protocol.steps.map((step, i) => (
                               <div key={i} className="flex gap-3 items-start bg-black/20 p-3 rounded-lg border border-white/20">
                                   <span className="font-bold text-kf-yellow shrink-0">0{i+1}.</span>
                                   <span>{step}</span>
                               </div>
                           ))}
                       </div>
                       
                       <div className="mt-6 flex items-center gap-2 text-xs font-bold bg-black inline-block px-3 py-2 rounded border border-kf-yellow text-kf-yellow">
                           <Lock className="w-3 h-3" /> {content.protocol.note}
                       </div>
                   </div>
              </div>

              {/* Manifest: Coupons & Shipping */}
              <div className="flex flex-col gap-6">
                  {/* Coupon Card */}
                  <div className="bg-kf-yellow border-4 border-black p-6 rounded-xl shadow-hard flex flex-col items-center text-center justify-center flex-grow">
                      <div className="font-black text-xl uppercase mb-2">{content.manifest.leftTitle}</div>
                      <div className="text-6xl font-black mb-2 text-white text-stroke-black">{content.manifest.leftValue}</div>
                      <div className="font-bold mb-6">{content.manifest.leftSub}</div>
                      <a 
                        href={couponUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white px-8 py-3 font-black uppercase text-sm hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition-all rounded-lg"
                      >
                          {content.manifest.leftBtn}
                      </a>
                  </div>

                  {/* Shipping Lines */}
                  <div className="bg-white border-4 border-black p-6 rounded-xl shadow-hard">
                      <h4 className="font-black uppercase mb-4 text-center border-b-2 border-gray-100 pb-2">Recommended Lines</h4>
                      <div className="space-y-3">
                          {content.manifest.rightLines.map((line, i) => (
                              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                                  <div className="flex items-center gap-3">
                                      <div className="bg-kf-blue/10 p-2 rounded text-kf-blue">
                                          <line.icon className="w-4 h-4" />
                                      </div>
                                      <span className="font-bold text-sm">{line.name}</span>
                                  </div>
                                  <span className="text-xs font-mono text-gray-500 font-bold">{line.desc}</span>
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