import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, CreditCard, Package, Box, Truck, ArrowDown, ExternalLink } from 'lucide-react';

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

const HowToPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(STEPS[0].id);

  // SEO & Title Update
  useEffect(() => {
    document.title = "How To Order From China (Safely) | The CNfans Step-by-Step Guide 2026";
    
    // Helper to safely set meta tags
    const setMetaTag = (name: string, content: string) => {
        let element = document.querySelector(`meta[name="${name}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute('name', name);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };

    setMetaTag('description', "Don't let language barriers stop you. Learn How To Order From China via CNfans. We walk you through buying directly from Taobao, Weidian, and 1688—safely and easily. From spreadsheet to doorstep, simplified.");
    setMetaTag('keywords', "how to order from china, cnfans guide, how to use cnfans, buy reps from china, taobao agent tutorial, weidian shopping guide, cnfans shipping tutorial");

    return () => {
        document.title = "Kindredflip - Discover Your Vibe";
    };
  }, []);

  // Handle scroll spy
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
      window.scrollTo({
        top: el.offsetTop - 120, // Navbar offset
        behavior: 'smooth'
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
                HOW TO ORDER FROM CHINA: <br/>
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
            {STEPS.map((step, index) => (
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

                        {/* Visual Mockup Area - Mimicking the UI screenshot content */}
                        <div className="bg-gray-100 border-t-2 border-black p-4 md:p-8">
                            <div className="bg-white border-2 border-gray-200 rounded-xl shadow-sm p-4 mx-auto max-w-2xl">
                                {step.mockupType === 'search' && (
                                    <div className="flex flex-col gap-4 animate-pulse">
                                        <div className="h-10 bg-gray-200 rounded-lg w-full flex items-center px-4 text-gray-400 text-sm border border-gray-300">
                                            Paste Taobao/Weidian Link here...
                                        </div>
                                        <div className="grid grid-cols-3 gap-2">
                                            <div className="h-24 bg-gray-200 rounded-lg"></div>
                                            <div className="h-24 bg-gray-200 rounded-lg"></div>
                                            <div className="h-24 bg-gray-200 rounded-lg"></div>
                                        </div>
                                    </div>
                                )}
                                {step.mockupType === 'product' && (
                                    <div className="flex gap-4">
                                        <div className="w-1/3 h-32 bg-gray-200 rounded-lg"></div>
                                        <div className="flex-1 space-y-3">
                                            <div className="h-4 bg-gray-200 w-3/4 rounded"></div>
                                            <div className="h-4 bg-gray-200 w-1/2 rounded"></div>
                                            <div className="flex gap-2 mt-4">
                                                <div className="px-3 py-1 border border-black rounded text-xs font-bold bg-white">Size 44</div>
                                                <div className="px-3 py-1 border border-gray-200 rounded text-xs">Size 45</div>
                                            </div>
                                            <div className="w-full h-8 bg-[#EC4899] rounded mt-2"></div>
                                        </div>
                                    </div>
                                )}
                                {step.mockupType === 'cart' && (
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 p-2 border border-gray-200 rounded">
                                            <div className="w-4 h-4 border-2 border-black bg-[#F59E0B] rounded-sm"></div>
                                            <div className="w-10 h-10 bg-gray-200 rounded"></div>
                                            <div className="h-2 bg-gray-200 w-20 rounded"></div>
                                            <div className="ml-auto font-bold">$45.00</div>
                                        </div>
                                        <div className="flex justify-end mt-2">
                                            <div className="px-4 py-2 bg-[#F59E0B] text-white font-bold rounded text-xs">Submit Order</div>
                                        </div>
                                    </div>
                                )}
                                {step.mockupType === 'timeline' && (
                                    <div className="flex justify-between items-center px-4 relative">
                                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10"></div>
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white shadow"></div>
                                            <span className="text-[10px] font-bold">Purchased</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white shadow"></div>
                                            <span className="text-[10px] font-bold">Sent</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white shadow animate-bounce"></div>
                                            <span className="text-[10px] font-bold">Warehouse</span>
                                        </div>
                                    </div>
                                )}
                                {step.mockupType === 'options' && (
                                    <div className="space-y-2">
                                         <div className="flex items-center justify-between p-2 bg-blue-50 border border-blue-200 rounded">
                                            <span className="text-xs font-bold text-blue-800">Remove Packaging</span>
                                            <div className="w-8 h-4 bg-blue-500 rounded-full relative"><div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full"></div></div>
                                         </div>
                                         <div className="flex items-center justify-between p-2 bg-gray-50 border border-gray-200 rounded">
                                            <span className="text-xs font-bold text-gray-500">Vacuum Seal</span>
                                            <div className="w-8 h-4 bg-gray-300 rounded-full relative"><div className="absolute left-1 top-1 w-2 h-2 bg-white rounded-full"></div></div>
                                         </div>
                                    </div>
                                )}
                                {step.mockupType === 'shipping' && (
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 border-2 border-[#EF4444] bg-red-50 rounded-lg">
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 rounded-full border-2 border-[#EF4444] flex items-center justify-center"><div className="w-2 h-2 bg-[#EF4444] rounded-full"></div></div>
                                                <span className="font-bold text-sm">EMS-Packet</span>
                                            </div>
                                            <span className="font-bold text-[#EF4444]">$42.00</span>
                                        </div>
                                        <div className="h-10 w-full bg-[#EF4444] rounded-lg flex items-center justify-center text-white font-black text-sm">
                                            PAY SHIPPING
                                        </div>
                                    </div>
                                )}
                            </div>
                            <p className="text-center text-xs font-bold text-gray-400 mt-4 uppercase tracking-widest">
                                Visual Representation
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Final CTA */}
            <div className="bg-kf-yellow border-2 border-black rounded-3xl p-10 text-center shadow-hard">
                <h2 className="text-4xl font-black mb-4 uppercase">Ready to Start?</h2>
                <p className="text-xl font-bold mb-8">Grab your first haul with our verified spreadsheet.</p>
                <a href="#/" className="inline-block bg-black text-white px-10 py-4 rounded-xl border-2 border-black font-black text-lg shadow-hard hover:bg-white hover:text-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                    Go to Spreadsheet
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPage;