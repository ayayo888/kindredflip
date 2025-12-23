'use client';

import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, CreditCard, Package, Box, Truck } from 'lucide-react';

const STEPS = [
  {
    id: 'step1',
    menuLabel: 'Find Items',
    stepNumber: 'Step One',
    title: 'Find Items',
    Icon: Search,
    color: 'bg-[#8B5CF6]', // Purple from screenshot
    contentTitle: "Browse China's E-commerce Platform",
    description: "You can use the Kindredflip Spreadsheet or Discord Bot to find verified items. Alternatively, browse platforms like Taobao, Weidian, or 1688 directly. To order, simply copy the product link and paste it into the search bar on CNfans or any other agent's website.",
    mockupType: 'search'
  },
  {
    id: 'step2',
    menuLabel: 'Add to Cart',
    stepNumber: 'Step Two',
    title: 'Making a Cart',
    Icon: ShoppingCart,
    color: 'bg-[#EC4899]', // Pink
    contentTitle: "Selecting Your Color, Size, Batch and Quantity",
    description: "After you found your product, you can directly select the color, size, batch and quantity, add special remark if you need to and click Buy Now or Add to Cart",
    tips: ["Check 'Agree' box", "Click 'Add to Cart' or 'Buy Now'"],
    mockupType: 'product'
  },
  {
    id: 'step3',
    menuLabel: 'Submit Order',
    stepNumber: 'Step Three',
    title: 'Submit Order',
    Icon: CreditCard,
    color: 'bg-[#F59E0B]', // Orange
    contentTitle: "Paying For The Goods",
    description: "Go to your cart, select the items you want to purchase, and click submit. You will pay for the item cost first. Shipping comes later.",
    mockupType: 'cart'
  },
  {
    id: 'step4',
    menuLabel: 'Warehouse',
    stepNumber: 'Step Four',
    title: 'Inspection & Storage',
    Icon: Package,
    color: 'bg-[#10B981]', // Green
    contentTitle: "Wait for Arrival",
    description: "Status will change: Purchased → Seller Sent → Stock Arrived. Once in the warehouse, you get QC pictures. You have 60 days of free storage. Use this time to collect items in batches. Generally, for most agents, shipping rates become relatively cheaper when the total weight exceeds 20kg, so combining your orders is a smart way to save.",
    mockupType: 'timeline'
  },
  {
    id: 'step5',
    menuLabel: 'Rehearsal',
    stepNumber: 'Step Five',
    title: 'Rehearsal',
    Icon: Box,
    color: 'bg-[#3B82F6]', // Blue
    contentTitle: "Prepackaging The Parcel",
    description: "Select your items in the warehouse and click 'Rehearsal Packing'. This gives you the exact weight and volume so you don't overpay for shipping.",
    tips: ["Remove Shoe Boxes to save $", "Add Corner Protection", "Vacuum Seal Clothes"],
    mockupType: 'options'
  },
  {
    id: 'step6',
    menuLabel: 'Shipping',
    stepNumber: 'Step Six',
    title: 'Shipping The Parcel',
    Icon: Truck,
    color: 'bg-[#EF4444]', // Red
    contentTitle: "Pay International Shipping",
    description: "After rehearsal (1-2 days), go to 'Parcels', click 'Pay Shipping'. Select your shipping line (e.g., DHL, EMS) and use any coupons you have.",
    mockupType: 'shipping'
  }
];

export default function HowToClient() {
  const [activeStep, setActiveStep] = useState(STEPS[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const stepElements = STEPS.map(step => document.getElementById(step.id));
      const scrollPosition = window.scrollY + 200; // Offset

      for (let i = stepElements.length - 1; i >= 0; i--) {
        const el = stepElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveStep(STEPS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-kf-offwhite pb-20">
      
      {/* Hero Section */}
      <div className="bg-black text-white relative overflow-hidden py-20 border-b-4 border-black">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B5CF6] rounded-full blur-[100px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#EC4899] rounded-full blur-[80px] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <div className="inline-block bg-[#8B5CF6] border-2 border-white px-4 py-1 rounded-full mb-6 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                <span className="font-black text-sm uppercase tracking-wider">Tutorial 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                HOW TO ORDER FROM CHINA: <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#EC4899]">
                    THE MANUAL
                </span>
            </h1>
            
            <p className="text-xl font-bold text-gray-400 max-w-2xl mx-auto mb-10">
                Don't let language barriers stop you. Learn How To Order From China via CNfans. We walk you through buying directly from Taobao, Weidian, and 1688—safely and easily. From spreadsheet to doorstep, simplified.
            </p>

            <div className="flex justify-center gap-4">
                <button onClick={() => scrollToStep('step1')} className="bg-white text-black px-8 py-3 rounded-lg font-black border-2 border-white hover:bg-[#8B5CF6] hover:text-white hover:border-[#8B5CF6] transition-all">
                    Start Tutorial
                </button>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 flex gap-8 relative">
        
        {/* Sticky Sidebar (Desktop) */}
        <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-3">
                <h3 className="font-black text-xl mb-4 uppercase">Steps</h3>
                {STEPS.map((step) => (
                    <button
                        key={step.id}
                        onClick={() => scrollToStep(step.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl border-2 font-bold transition-all flex items-center justify-between group ${
                            activeStep === step.id 
                            ? `bg-black text-white border-black shadow-hard` 
                            : 'bg-white text-gray-500 border-transparent hover:border-black hover:bg-gray-50'
                        }`}
                    >
                        <span>{step.menuLabel}</span>
                        {activeStep === step.id && <div className={`w-2 h-2 rounded-full ${step.color}`}></div>}
                    </button>
                ))}
            </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-20">
            {STEPS.map((step) => (
                <div key={step.id} id={step.id} className="scroll-mt-32">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 ${step.color} border-2 border-black rounded-xl flex items-center justify-center shadow-hard-sm`}>
                            <step.Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <span className={`text-xs font-black uppercase px-2 py-1 rounded bg-black text-white`}>
                                {step.stepNumber}
                            </span>
                            <h2 className="text-3xl font-black uppercase mt-1">{step.title}</h2>
                        </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-white border-2 border-black rounded-3xl overflow-hidden shadow-hard">
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-4">{step.contentTitle}</h3>
                            <p className="text-gray-600 font-medium text-lg leading-relaxed mb-6">
                                {step.description}
                            </p>
                            
                            {step.tips && (
                                <div className="bg-kf-offwhite border-2 border-dashed border-gray-300 rounded-xl p-4">
                                    <span className="block font-black text-sm uppercase text-gray-400 mb-2">Pro Tips:</span>
                                    <ul className="space-y-2">
                                        {step.tips.map((tip, i) => (
                                            <li key={i} className="flex items-center gap-2 font-bold text-sm">
                                                <div className={`w-1.5 h-1.5 rounded-full ${step.color}`}></div>
                                                {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}