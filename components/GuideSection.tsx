import React from 'react';
import { Truck, CheckCircle, Calculator, Search } from 'lucide-react';

const steps = [
  {
    Icon: Search,
    title: "1. Find The Item",
    desc: "Discover items in our CNFans Spreadsheet. We filter out the junk so you don't have to.",
    color: "bg-kf-blue"
  },
  {
    Icon: CheckCircle,
    title: "2. Check and Order",
    desc: "Click the link to open CNfans. Pick your color and size, then pay.",
    color: "bg-kf-red"
  },
  {
    Icon: Calculator,
    title: "3. QC & Storage",
    desc: "Items go to the warehouse. You get QC photos upon arrival. ",
    color: "bg-kf-yellow"
  },
  {
    Icon: Truck,
    title: "4. Paying for shipping",
    desc: "Pay Rehearsal Fee. Then, click Confirm Logistics to apply coupons and pay for shipping.",
    color: "bg-kf-green"
  }
];

const GuideSection: React.FC = () => {
  return (
    <div className="bg-white border-t-4 border-black mt-20 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
           <h2 className="text-4xl font-black mb-4 inline-block relative z-10">
             How Kindredflip Works
             <div className="absolute -bottom-2 left-0 w-full h-4 bg-kf-yellow -z-10 skew-x-12"></div>
           </h2>
           <p className="text-xl font-bold text-gray-500">From spreadsheet to doorstep in 4 steps.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className={`w-20 h-20 ${step.color} border-2 border-black rounded-2xl shadow-hard flex items-center justify-center mb-6 transform transition-transform hover:rotate-6`}>
                <step.Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black mb-2">{step.title}</h3>
              <p className="font-medium text-gray-600 leading-relaxed px-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <p className="font-bold text-gray-500 mb-4 text-sm md:text-base">
            First time using an agent? Don't worry, we have a complete walkthrough.
          </p>
          <button className="bg-kf-black text-white px-10 py-4 rounded-xl border-2 border-black font-black text-lg shadow-hard hover:bg-kf-yellow hover:text-black hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            [ Master the Full Process ]
          </button>
        </div>

        {/* Informational Callout mimicking the reference site text area but styled */}
        <div className="bg-kf-offwhite border-2 border-black rounded-xl p-8 shadow-hard relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-kf-red rounded-full blur-3xl opacity-10"></div>
            <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4">What is Kindredflip?</h3>
                <p className="mb-4 font-medium text-gray-700">
                    Kindredflip is your ultimate cheat code for shopping globally. We act as a modern visual spreadsheet, helping students and young creatives find high-cost-performance items from platforms like Taobao, Weidian, and 1688 without the headache of navigating confusing interfaces.
                 </p>
                <p className="mb-4 font-medium text-gray-700"> 
                    Disclaimer & Affiliate Disclosure
KindredFlip is an independent search tool and is not affiliated with Weidian, Taobao, 1688, Tmall, or any other third-party platforms. We are not an online store and do not sell any products directly.
Please note that links to CNfans.com on this site are affiliate links. This means that if you use our links, we may earn a small commission based on the shipping services provided by CNfans—not from the sale of the items themselves.
This comes at no extra cost to you. These commissions help us maintain the site and continue verifying quality for the community.
                </p>
                <div className="p-4 bg-kf-blue/10 border-l-4 border-kf-blue rounded-r-lg">
                    <p className="font-bold text-kf-blue">
                        💡 Pro Tip: Always check the 'QC Photos' button on item pages to see what the product actually looks like in the warehouse before you ship!
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default GuideSection;