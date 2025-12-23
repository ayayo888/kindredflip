import React from 'react';
import Link from 'next/link';
import { 
  Database, Wifi, Footprints, Shirt, Laptop, ShoppingBag, Glasses, Terminal,
  Ghost, Trophy, Ruler, Coffee, Heart, Sparkles, Shield, Home, ChevronRight,
  Check, AlertTriangle, ArrowRight, Plane
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
  
  const agentConfig = AGENT_LINKS[key] || AGENT_LINKS['default'];
  const spreadsheetUrl = agentConfig.spreadsheet;
  
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
      
      {/* ... Content Modules ... */}
      <div className="max-w-5xl mx-auto px-4 mt-12 space-y-16">
          {/* Reusing similar layout blocks for brevity in this response */}
          <div className="bg-white border-4 border-black p-8">
               <h2 className="font-black text-2xl uppercase mb-4">{content.intro.title}</h2>
               <p>{content.intro.systemCheck}</p>
          </div>
      </div>
    </div>
  );
}