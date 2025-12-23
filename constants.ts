
import { CategoryItem, GoldItem, QCItem, ArticleItem, LabItem } from './types';

export const CATEGORIES: CategoryItem[] = [
  { id: '1', name: 'Shoes', image: 'https://picsum.photos/400/400?random=1', color: 'blue', itemCount: 1240 },
  { id: '2', name: 'Hoodies', image: 'https://picsum.photos/400/400?random=2', color: 'red', itemCount: 850 },
  { id: '3', name: 'Tech', image: 'https://picsum.photos/400/400?random=3', color: 'yellow', itemCount: 320 },
  { id: '4', name: 'Pants', image: 'https://picsum.photos/400/400?random=4', color: 'green', itemCount: 540 },
  { id: '5', name: 'Jerseys', image: 'https://picsum.photos/400/400?random=5', color: 'blue', itemCount: 210 },
  { id: '6', name: 'Accessories', image: 'https://picsum.photos/400/400?random=6', color: 'yellow', itemCount: 1100 },
  { id: '7', name: 'Bags', image: 'https://picsum.photos/400/400?random=7', color: 'red', itemCount: 430 },
  { id: '8', name: 'Headwear', image: 'https://picsum.photos/400/400?random=8', color: 'green', itemCount: 300 },
  { id: '9', name: 'Decor', image: 'https://picsum.photos/400/400?random=9', color: 'blue', itemCount: 150 },
  { id: '10', name: 'Stationery', image: 'https://picsum.photos/400/400?random=10', color: 'red', itemCount: 670 },
  { id: '11', name: 'Collectibles', image: 'https://picsum.photos/400/400?random=11', color: 'yellow', itemCount: 80 },
  { id: '12', name: 'Other Stuff', image: 'https://picsum.photos/400/400?random=12', color: 'green', itemCount: 999 },
];

export const GOLD_ITEMS: GoldItem[] = [
  {
    id: 'g1',
    title: '[GOLD] Snanen 360° Magnetic Suction Phone Mount - The Ultimate Hands-Free Holder',
    image: 'https://picsum.photos/500/500?random=20',
    isSale: true
  },
  {
    id: 'g2',
    title: '[GOLD] AimoStand – Built-in AI Camera Smart Auto-Tracking Phone Stand',
    image: 'https://picsum.photos/500/500?random=21',
    isSale: true
  },
  {
    id: 'g3',
    title: '[GOLD] CyanVue AI Smart Glasses – 8MP Camera Glasses with Music & Call Features',
    image: 'https://picsum.photos/500/500?random=22',
    isSale: true
  },
  {
    id: 'g4',
    title: '[GOLD] Carvera Smart 10.26" CarPlay & 4K Dual-Dash Cam System',
    image: 'https://picsum.photos/500/500?random=23',
    isSale: true
  }
];

export const QC_ITEMS: QCItem[] = [
  {
    id: 'qc1',
    title: 'Air Jordan 4 Black Cat - Retail vs Rep Comparison Guide (2025 Updated)',
    image: 'https://picsum.photos/500/500?random=30',
  },
  {
    id: 'qc2',
    title: 'How to Spot Fake Essentials Hoodies: Stitching & Label Check',
    image: 'https://picsum.photos/500/500?random=31',
  },
  {
    id: 'qc3',
    title: 'Balenciaga Track LED - Battery Compartment Safety Inspection',
    image: 'https://picsum.photos/500/500?random=32',
  },
  {
    id: 'qc4',
    title: 'North Face Nuptse 700 - Correct Puffiness & Hologram Tag Guide',
    image: 'https://picsum.photos/500/500?random=33',
  }
];

export const LAB_ITEMS: LabItem[] = [
  {
    id: 'l1',
    category: 'SHOES',
    title: 'Nike Dunk Low "Panda" - VT Batch',
    price: '$28.00',
    weight: '1.1kg',
    status: 'PASS',
    image: 'https://picsum.photos/400/400?random=101',
    note: 'Stitching accurate. Toebox shape 1:1.'
  },
  {
    id: 'l2',
    category: 'TECH',
    title: 'Air Max Wireless Headphones Gen 2',
    price: '$15.00',
    weight: '0.4kg',
    status: 'FAIL',
    image: 'https://picsum.photos/400/400?random=102',
    note: 'Plastic hinge broke during stress test. Avoid.'
  },
  {
    id: 'l3',
    category: 'HOODIES',
    title: 'Essential Fear of God Hoodie 2024',
    price: '$35.00',
    weight: '0.9kg',
    status: 'PASS',
    image: 'https://picsum.photos/400/400?random=103',
    note: 'Heavyweight cotton verified. Logo placement correct.'
  },
  {
    id: 'l4',
    category: 'BAGS',
    title: 'Supreme SS18 Shoulder Bag',
    price: '$12.00',
    weight: '0.2kg',
    status: 'FAIL',
    image: 'https://picsum.photos/400/400?random=104',
    note: 'Strap text font is wrong (too thin).'
  },
  {
    id: 'l5',
    category: 'SHOES',
    title: 'Jordan 4 Military Black - Budget Batch',
    price: '$45.00',
    weight: '1.4kg',
    status: 'PASS',
    image: 'https://picsum.photos/400/400?random=105',
    note: 'Surprisingly good for the price. Netting aligns correctly.'
  },
  {
    id: 'l6',
    category: 'ACCESSORIES',
    title: 'Chrome Hearts Ring (Silver Plated)',
    price: '$8.00',
    weight: '0.05kg',
    status: 'PASS',
    image: 'https://picsum.photos/400/400?random=106',
    note: 'Lead test passed. No green skin.'
  },
];

export const ARTICLES: ArticleItem[] = [
  {
    id: 'a1',
    title: 'REVIEW: The Definitive Guide to GX Batch Jordan 4s (2025)',
    excerpt: 'We bought 5 pairs of Black Cats from different sellers. Here is why GX batch is still the king of the heavy-hitters list.',
    image: 'https://picsum.photos/800/600?random=50',
    date: 'Oct 12, 2025',
    author: 'RepMaster_J',
    tags: ['Shoes', 'Review', 'Jordan'],
    rating: 5,
    content: [
        "The Jordan 4 Black Cat has been the most requested shoe on the spreadsheet for three years running. With the closure of the Pandabuy era and the rise of CNFans, factory names have shifted, but the molds remain largely the same. In this review, we're looking exclusively at the 'GX Batch' (formerly known as KW) to see if it still holds the crown in late 2025.",
        "First impressions out of the box: The material is spot on. The nubuck has that correct 'movement' when you brush your finger across it—a feature that budget batches like KX or G-Batch often miss completely. The weight is substantial, feeling almost identical to my retail pair from 2020.",
        "Let's talk about the tongue. This is usually the biggest giveaway. On this updated 2025 run, GX has finally fixed the 'puffy tongue' issue. It's properly padded without looking like a skate shoe from 2005. The jumpman patch is placed with the correct spacing from the top edge.",
        "The sole firmness is another win. It doesn't squish under pressure. We did the 'squeeze test' on the heel, and it holds its shape perfectly, indicating correct density PU material was used.",
        "Conclusion: For roughly $65 USD before shipping, this is indistinguishable on-foot. Unless someone is taking a magnifying glass to the inner stitching while you're walking, you are good to go."
    ],
    pros: [
        "Nubuck material has correct texture and movement",
        "Tongue shape and padding volume is fixed in 2025 batch",
        "Heel tab jumps back up instantly (Back tab test passed)",
        "Correct 6-hole netting angle"
    ],
    cons: [
        "Smell is strong out of the box (needs airing out)",
        "Box came slightly damaged (typical shipping issue)",
        " laces feel slightly thinner than retail"
    ],
    verdict: "The absolute best bang for your buck. Don't waste money on 'LJR' for Black Cats, GX is superior for this specific colorway."
  },
  {
    id: 'a2',
    title: 'COMPARISON: Arc\'teryx Beta LT - 380CNY vs Retail',
    excerpt: 'Is the waterproofing actually real? We showered in it, ran in the rain, and poured soda on it. The results might surprise you.',
    image: 'https://picsum.photos/800/600?random=51',
    date: 'Oct 08, 2025',
    author: 'TechWearAddict',
    tags: ['Tech', 'Comparison', 'Outerwear'],
    rating: 4
  },
  {
    id: 'a3',
    title: 'DEEP DIVE: Top 10 Hidden Gems on CNFans Under $10',
    excerpt: 'From KAWS keychains to unbranded heavy cotton tees. Fill up your haul weight with these absolute steals.',
    image: 'https://picsum.photos/800/600?random=52',
    date: 'Sept 29, 2025',
    author: 'HaulGod',
    tags: ['Accessories', 'Budget', 'Guide'],
    rating: 5
  },
  {
    id: 'a4',
    title: 'GUIDE: How to Size Your Balenciaga Tracks Correctly',
    excerpt: 'Don\'t waste shipping money on the wrong size. We break down the fit for Good Batch, OK Batch, and Retail.',
    image: 'https://picsum.photos/800/600?random=53',
    date: 'Sept 15, 2025',
    author: 'SneakerHead99',
    tags: ['Shoes', 'Sizing', 'Guide'],
    rating: 4
  },
  {
    id: 'a5',
    title: 'REVIEW: Air Pods Max Metal Version - Connectivity Test',
    excerpt: 'Do the spatial audio features actually work? Testing the latest V3 chipset against the real deal.',
    image: 'https://picsum.photos/800/600?random=54',
    date: 'Sept 10, 2025',
    author: 'AudioPhileRep',
    tags: ['Tech', 'Electronics', 'Review'],
    rating: 3
  },
   {
    id: 'a6',
    title: 'HAUL REVIEW: 15kg Summer Haul - Stussy, Corteiz, Nike',
    excerpt: 'A massive breakdown of my latest shipment. Shipping prices, transit times, and in-hand feel of every item.',
    image: 'https://picsum.photos/800/600?random=55',
    date: 'Aug 22, 2025',
    author: 'FashionKilla',
    tags: ['Haul', 'Summer', 'Clothing'],
    rating: 5
  }
];