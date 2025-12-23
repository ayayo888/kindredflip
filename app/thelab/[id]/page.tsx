import React from 'react';
import { LAB_ITEMS } from '@/lib/constants';
import { Calendar, User, ArrowLeft, ShoppingCart, Check, X, Share2, AlertTriangle, AlertOctagon, Copy, Scale, DollarSign, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import AgentSelector from '@/components/AgentSelector';

type Props = {
  params: Promise<{ id: string }> | { id: string };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const item = LAB_ITEMS.find(a => a.id === params.id);
  if (!item) return { title: 'Lab Test Not Found' };
  
  const icon = item.status === 'PASS' ? '✅' : '❌';
  return {
    title: item.seoTitle || `${icon} Review: ${item.title} - ${item.status} | The Lab`,
    description: item.seoDescription || item.note,
  };
}

export default async function LabDetailPage(props: Props) {
  const params = await props.params;
  const item = LAB_ITEMS.find(a => a.id === params.id);

  if (!item) {
    notFound();
  }
  
  const isPass = item.status === 'PASS';
  const cnfansLink = item.agentLinks?.['CNfans'];

  return (
    <div className="bg-kf-offwhite min-h-screen pb-20">
      
      {/* Breadcrumb / Back Navigation */}
      <div className="bg-white border-b-2 border-black sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-2">
            <Link href="/thelab" className="flex items-center gap-2 font-bold hover:text-kf-blue transition-colors">
                <ArrowLeft className="w-5 h-5" />
                Back to The Lab
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500 font-mono font-medium truncate">{item.id.toUpperCase()}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8">
        
        {/* Header Section */}
        <header className="mb-8 relative">
            {/* Folder Tab Visual for Category */}
            <div className="absolute -top-8 left-0 bg-black text-white px-6 py-2 rounded-t-lg border-2 border-b-0 border-black font-mono font-black uppercase tracking-wider">
                {item.category}
            </div>

            <div className="bg-white border-2 border-black p-6 md:p-8 rounded-b-xl rounded-tr-xl shadow-hard">
                <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                    <div className="flex-1">
                        <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4 uppercase">
                            {item.title}
                        </h1>
                        <div className="flex items-center gap-4 text-sm font-bold text-gray-500 font-mono">
                            <span className="flex items-center gap-2">
                                <User className="w-4 h-4" /> {item.author || 'Kindred_Lab'}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" /> {item.date || '2025-01-01'}
                            </span>
                        </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className={`
                        px-6 py-3 border-4 border-black font-black text-2xl uppercase tracking-widest transform rotate-2 shadow-hard-sm
                        ${isPass ? 'bg-kf-green text-black' : 'bg-kf-red text-white'}
                    `}>
                        {item.status}
                    </div>
                </div>
            </div>
        </header>

        {/* Hero Image & Data Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
            
            {/* Left: Image */}
            <div className="relative aspect-square w-full border-2 border-black rounded-xl overflow-hidden shadow-hard bg-gray-100">
                <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className={`object-cover ${!isPass ? 'grayscale contrast-125' : ''}`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                {!isPass && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="border-8 border-kf-red text-kf-red font-black text-6xl uppercase px-8 py-4 opacity-80 -rotate-12 mix-blend-multiply">
                            REJECT
                        </div>
                    </div>
                )}
            </div>

            {/* Right: Data Specifications */}
            <div className="flex flex-col gap-4">
                
                {/* Spec Box */}
                <div className="bg-white border-2 border-black rounded-xl p-6 shadow-hard flex-grow flex flex-col justify-center space-y-6">
                    <h3 className="font-black text-xl uppercase border-b-2 border-gray-200 pb-2">Spec Sheet</h3>
                    
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-gray-500 font-bold">
                                <Tag className="w-5 h-5" /> Batch / Category
                            </div>
                            <span className="font-mono font-black text-lg bg-gray-100 px-3 py-1 rounded border border-gray-300">
                                {item.category}
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-gray-500 font-bold">
                                <DollarSign className="w-5 h-5" /> Estimated Price
                            </div>
                            <span className="font-mono font-black text-xl">
                                {item.price}
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-gray-500 font-bold">
                                <Scale className="w-5 h-5" /> Measured Weight
                            </div>
                            <span className="font-mono font-black text-xl">
                                {item.weight}
                            </span>
                        </div>
                    </div>
                </div>

                {/* The "Note" Quote Box */}
                <div className={`border-2 border-black rounded-xl p-6 shadow-hard flex-grow relative overflow-hidden ${isPass ? 'bg-kf-yellow' : 'bg-gray-200'}`}>
                    <div className="absolute top-2 left-2 text-6xl font-serif opacity-20 leading-none">"</div>
                    <p className="font-bold text-lg md:text-xl relative z-10 italic leading-relaxed pt-2">
                        {item.note}
                    </p>
                </div>

            </div>
        </div>

        {/* Content & Sidebar Layout */}
        <div className="flex flex-col md:flex-row gap-12">
            
            {/* Main Content Column */}
            <div className="flex-1">
                
                <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
                    <span className="bg-black text-white px-2">LAB REPORT</span>
                    <span className="w-full h-1 bg-black"></span>
                </h3>

                <div className="prose prose-lg prose-headings:font-black prose-p:text-gray-800 prose-p:leading-loose mb-12 font-medium">
                   {item.content ? (
                       item.content.map((paragraph, idx) => (
                           <p key={idx} className="mb-6">{paragraph}</p>
                       ))
                   ) : (
                       <div className="p-6 bg-white border-2 border-dashed border-gray-300 rounded-xl text-center">
                           <p className="text-gray-500 italic">No detailed analysis text provided.</p>
                       </div>
                   )}
                </div>

            </div>

            {/* Sidebar / Actions Column */}
            <div className="w-full md:w-80 flex-shrink-0">
                <div className="sticky top-24 space-y-6">
                    
                    {isPass ? (
                        <>
                            <div className="bg-white border-2 border-black p-6 rounded-xl shadow-hard text-center relative z-20">
                                <h3 className="text-xl font-black uppercase mb-2">Verified Batch</h3>
                                <p className="text-sm text-gray-500 mb-6 font-bold flex justify-center items-center gap-1">
                                    Quality Checked <Check className="w-3 h-3 text-kf-green" />
                                </p>
                                
                                {/* Primary Agent (CNFans) */}
                                <div className="mb-4">
                                    {cnfansLink ? (
                                        <a 
                                            href={cnfansLink} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full bg-kf-green text-black py-4 rounded-xl border-2 border-black font-black text-xl shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2 group relative overflow-hidden block"
                                        >
                                            <ShoppingCart className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                                            BUY ON CNFANS
                                        </a>
                                    ) : (
                                        <button disabled className="w-full bg-gray-200 text-gray-400 py-4 rounded-xl border-2 border-gray-300 font-black text-xl flex items-center justify-center gap-2 cursor-not-allowed">
                                            <ShoppingCart className="w-6 h-6" />
                                            NO LINK
                                        </button>
                                    )}
                                </div>

                                <div className="relative flex py-2 items-center mb-4">
                                    <div className="flex-grow border-t-2 border-gray-200"></div>
                                    <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-black uppercase">Or choose another</span>
                                    <div className="flex-grow border-t-2 border-gray-200"></div>
                                </div>

                                <AgentSelector agentLinks={item.agentLinks} />
                            </div>

                            {item.rawLink && (
                                <div className="bg-kf-black text-white p-3 rounded-lg border-2 border-black shadow-sm flex items-center justify-between" title={item.rawLink}>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-xs uppercase">Raw Link Available</span>
                                    </div>
                                    <Copy className="w-4 h-4" />
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="bg-kf-red/10 border-4 border-kf-red p-6 rounded-xl text-center relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-kf-red rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-black">
                                    <AlertOctagon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-black uppercase mb-2 text-kf-red">Do Not Buy</h3>
                                <p className="font-bold text-sm text-gray-800">
                                    This item failed our quality inspection. 
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="bg-white border-2 border-gray-200 p-4 rounded-xl flex gap-3">
                        <AlertTriangle className="w-8 h-8 text-gray-400 flex-shrink-0" />
                        <p className="text-[10px] text-gray-500 font-semibold leading-tight">
                            "The Lab" tests are based on independent purchases. Batches may vary over time.
                        </p>
                    </div>

                </div>
            </div>

        </div>

      </div>
    </div>
  );
}