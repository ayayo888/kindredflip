import React from 'react';
import { ARTICLES } from '@/lib/constants';
import { Calendar, User, Star, ArrowLeft, ShoppingCart, Check, X, Share2, AlertCircle, Copy } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import AgentSelector from '@/components/AgentSelector';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const article = ARTICLES.find(a => a.id === params.id);
  if (!article) return { title: 'Not Found' };
  
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  const article = ARTICLES.find(a => a.id === params.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-white pb-20">
      
      {/* Breadcrumb / Back Navigation */}
      <div className="bg-kf-offwhite border-b-2 border-black">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-2">
            <Link href="/gold" className="flex items-center gap-2 font-bold hover:text-kf-blue transition-colors">
                <ArrowLeft className="w-5 h-5" />
                Back to Gold List
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500 font-medium truncate">{article.title}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8">
        
        {/* Article Header */}
        <header className="mb-10">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map(tag => (
                    <span key={tag} className="bg-black text-white text-xs font-black uppercase px-3 py-1 rounded-sm">
                        {tag}
                    </span>
                ))}
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-gray-500 border-b-2 border-dashed border-gray-300 pb-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-kf-yellow rounded-full border-2 border-black flex items-center justify-center">
                        <User className="w-4 h-4 text-black" />
                    </div>
                    <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                </div>
                <div className="ml-auto flex gap-2">
                    <button className="p-2 border-2 border-gray-200 rounded-lg hover:border-black hover:bg-kf-offwhite transition-all">
                        <Share2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </header>

        {/* Hero Image */}
        <div className="relative aspect-video w-full border-4 border-black rounded-2xl overflow-hidden shadow-hard mb-12">
            <Image 
                src={article.image} 
                alt={article.title} 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
            />
            {article.rating && (
                <div className="absolute top-4 right-4 bg-kf-yellow border-4 border-black p-4 rounded-xl shadow-hard transform rotate-3 z-10">
                    <div className="text-center">
                        <span className="block text-xs font-black uppercase tracking-wider mb-1">Our Rating</span>
                        <div className="flex gap-1 mb-1">
                             {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-5 h-5 ${i < article.rating! ? 'fill-black text-black' : 'text-white/50'}`} />
                            ))}
                        </div>
                        <span className="text-3xl font-black">{article.rating}/5</span>
                    </div>
                </div>
            )}
        </div>

        {/* Content & Sidebar Layout */}
        <div className="flex flex-col md:flex-row gap-12">
            
            {/* Main Content Column */}
            <div className="flex-1">
                
                {/* Introduction / Content Body */}
                <div className="prose prose-lg prose-headings:font-black prose-p:text-gray-800 prose-p:leading-loose mb-12">
                   {article.content ? (
                       article.content.map((paragraph, idx) => (
                           <p key={idx} className="mb-6 text-lg">{paragraph}</p>
                       ))
                   ) : (
                       <div className="p-8 bg-kf-offwhite border-2 border-dashed border-gray-300 rounded-xl text-center">
                           <p className="text-gray-500 italic">Full review content coming soon.</p>
                       </div>
                   )}
                </div>

                {/* Pros & Cons Section */}
                {(article.pros || article.cons) && (
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {/* Pros */}
                        <div className="bg-kf-green/10 border-2 border-kf-green rounded-xl p-6 relative">
                             <div className="absolute -top-3 left-4 bg-kf-green text-white px-3 py-1 font-black uppercase text-sm border-2 border-white rounded-md shadow-sm">
                                The Good
                             </div>
                             <ul className="space-y-3 mt-2">
                                {article.pros?.map((pro, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-kf-green flex-shrink-0 mt-0.5" />
                                        <span className="font-bold text-sm md:text-base text-gray-800">{pro}</span>
                                    </li>
                                ))}
                             </ul>
                        </div>
                        
                        {/* Cons */}
                        <div className="bg-kf-red/10 border-2 border-kf-red rounded-xl p-6 relative">
                             <div className="absolute -top-3 left-4 bg-kf-red text-white px-3 py-1 font-black uppercase text-sm border-2 border-white rounded-md shadow-sm">
                                The Bad
                             </div>
                             <ul className="space-y-3 mt-2">
                                {article.cons?.map((con, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <X className="w-5 h-5 text-kf-red flex-shrink-0 mt-0.5" />
                                        <span className="font-bold text-sm md:text-base text-gray-800">{con}</span>
                                    </li>
                                ))}
                             </ul>
                        </div>
                    </div>
                )}

                {/* Verdict Box */}
                {article.verdict && (
                    <div className="bg-kf-black text-white p-8 rounded-2xl border-4 border-gray-800 shadow-hard-lg relative overflow-hidden mb-12">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-kf-blue rounded-full blur-3xl opacity-20"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black uppercase mb-4 text-kf-yellow">The Verdict</h3>
                            <p className="text-lg font-medium leading-relaxed">
                                "{article.verdict}"
                            </p>
                        </div>
                    </div>
                )}

            </div>

            {/* Sidebar / Actions Column */}
            <div className="w-full md:w-80 flex-shrink-0">
                <div className="sticky top-24 space-y-6">
                    
                    {/* Multi-Agent W2C Card */}
                    <div className="bg-white border-2 border-black p-6 rounded-xl shadow-hard text-center relative z-20">
                        <h3 className="text-xl font-black uppercase mb-2">Ready to Cop?</h3>
                        <p className="text-sm text-gray-500 mb-6 font-bold flex justify-center items-center gap-1">
                            Verified Link <Check className="w-3 h-3 text-kf-green" />
                        </p>
                        
                        {/* Primary Agent (CNFans) */}
                        <div className="mb-4">
                            <button className="w-full bg-kf-red text-white py-4 rounded-xl border-2 border-black font-black text-xl shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2 group relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>
                                <ShoppingCart className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                                BUY ON CNFANS
                            </button>
                            <p className="mt-2 text-[10px] text-gray-400 font-bold uppercase tracking-wide">
                                Recommended Agent
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="relative flex py-2 items-center mb-4">
                            <div className="flex-grow border-t-2 border-gray-200"></div>
                            <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-black uppercase">Or choose another</span>
                            <div className="flex-grow border-t-2 border-gray-200"></div>
                        </div>

                        {/* Agent Selector Client Component */}
                        <AgentSelector />
                    </div>
                    
                    {/* Copy Link Helper */}
                    <div className="group cursor-pointer bg-kf-black text-white p-3 rounded-lg border-2 border-black shadow-sm flex items-center justify-between hover:bg-kf-yellow hover:text-black transition-colors">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-xs uppercase">Copy Raw Link</span>
                            <span className="text-[10px] opacity-60">(Taobao/Weidian)</span>
                        </div>
                        <Copy className="w-4 h-4" />
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-kf-offwhite border-2 border-gray-200 p-4 rounded-xl flex gap-3">
                        <AlertCircle className="w-10 h-10 text-gray-400 flex-shrink-0" />
                        <p className="text-xs text-gray-500 font-semibold leading-tight">
                            We are not the sellers. We simply find the best batches. Always ask for QC photos before shipping.
                        </p>
                    </div>

                </div>
            </div>

        </div>

      </div>
    </div>
  );
}