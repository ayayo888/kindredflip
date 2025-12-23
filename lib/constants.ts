import { CategoryItem, QCItem, ArticleItem, LabItem } from './types';

// =====================================================================
// 1. 首页分类 (CATEGORY GRID)
// Order: Shoes, Hoodies, T-Shirts, Jackets, Jersey, Pants, Accessories, Bags, Tech, Lifestyle, Girls, Perfume
// =====================================================================
export const CATEGORIES: CategoryItem[] = [
  { 
    id: '1', 
    name: 'Shoes', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488588/shoes_ocm0vz.png', 
    color: 'blue', 
    itemCount: 1240 
  },
  { 
    id: '2', 
    name: 'Hoodies', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488587/Hoodies_fpspfa.png', 
    color: 'red', 
    itemCount: 850 
  },
  { 
    id: '3', 
    name: 'T-Shirts', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488589/t_jg2rrt.png',
    color: 'yellow', 
    itemCount: 920 
  },
  { 
    id: '4', 
    name: 'Jackets', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488587/jacket_lmg2kr.png',
    color: 'green', 
    itemCount: 450 
  },
  { 
    id: '5', 
    name: 'Jersey', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488588/Jersey_lmh6ob.png', 
    color: 'blue', 
    itemCount: 210 
  },
  { 
    id: '6', 
    name: 'Pants', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488589/pants_dnkfqu.png', 
    color: 'yellow', 
    itemCount: 540 
  },
  { 
    id: '7', 
    name: 'Accessories', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488587/Accessories_n1sciy.png', 
    color: 'red', 
    itemCount: 1100 
  },
  { 
    id: '8', 
    name: 'Bags', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488587/bags_vjalt6.png', 
    color: 'green', 
    itemCount: 430 
  },
  { 
    id: '9', 
    name: 'Tech', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488588/tech_dh5t1u.png', 
    color: 'blue', 
    itemCount: 320 
  },
  { 
    id: '10', 
    name: 'Lifestyle', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488588/Lifestyle_euf6oo.png', 
    color: 'yellow', 
    itemCount: 150 
  },
  { 
    id: '11', 
    name: 'Girls', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488587/girls_g4h2li.png',
    color: 'red', 
    itemCount: 280 
  },
  { 
    id: '12', 
    name: 'Perfume', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488588/Perfume_ugwatb.png', 
    color: 'green', 
    itemCount: 80 
  },
];

// 2. QC ITEMS
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

// 3. LAB ITEMS
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

// 4. ARTICLES
export const ARTICLES: ArticleItem[] = [
  {
    id: 'a1',
    title: '[GOLD] Snanen 360° Magnetic Suction Phone Mount - Hands-Free',
    excerpt: 'The ultimate hands-free holder tested for stability and magnet strength.',
    image: 'https://picsum.photos/500/500?random=20',
    date: 'Oct 12, 2025',
    author: 'RepMaster_J',
    tags: ['Tech', 'Accessories', 'Review'],
    rating: 5,
    isFeatured: true, 
    isSale: true,
    content: [
      "This phone mount has completely changed my driving setup. The magnet strength is incredible—even over speed bumps, my iPhone 15 Pro Max doesn't budge.",
      "Installation was a breeze. It uses a high-quality 3M adhesive that sticks to the dashboard texture without peeling off in the heat."
    ],
    verdict: "A must-have for anyone who uses GPS navigation daily. 10/10 stability."
  },
  {
    id: 'a2',
    title: '[GOLD] AimoStand – AI Smart Tracking Phone Stand',
    excerpt: 'Built-in AI Camera Smart Auto-Tracking Phone Stand review.',
    image: 'https://picsum.photos/500/500?random=21',
    date: 'Oct 08, 2025',
    author: 'TechWearAddict',
    tags: ['Tech', 'Review'],
    rating: 4,
    isFeatured: true, 
    isSale: true,
  },
  {
    id: 'a3',
    title: '[GOLD] CyanVue AI Smart Glasses – 8MP Camera',
    excerpt: 'Smart glasses with music & call features. Are they worth the hype?',
    image: 'https://picsum.photos/500/500?random=22',
    date: 'Sept 29, 2025',
    author: 'HaulGod',
    tags: ['Tech', 'Wearable'],
    rating: 5,
    isFeatured: true, 
    isSale: false,
  },
  {
    id: 'a4',
    title: '[GOLD] Carvera Smart 10.26" CarPlay & 4K Dual-Dash Cam',
    excerpt: 'Upgrade your old car with this plug-and-play CarPlay screen.',
    image: 'https://picsum.photos/500/500?random=23',
    date: 'Sept 15, 2025',
    author: 'CarMods',
    tags: ['Car', 'Tech'],
    rating: 4,
    isFeatured: true,
    isSale: true,
  },
  {
    id: 'a5',
    title: 'REVIEW: The Definitive Guide to GX Batch Jordan 4s (2025)',
    excerpt: 'We bought 5 pairs of Black Cats. Here is why GX batch is king.',
    image: 'https://picsum.photos/800/600?random=50',
    date: 'Sept 10, 2025',
    author: 'SneakerHead99',
    tags: ['Shoes', 'Review'],
    rating: 5,
    isFeatured: false,
    content: ["Full review content here..."]
  },
   {
    id: 'a6',
    title: 'HAUL REVIEW: 15kg Summer Haul - Stussy, Corteiz, Nike',
    excerpt: 'A massive breakdown of my latest shipment.',
    image: 'https://picsum.photos/800/600?random=55',
    date: 'Aug 22, 2025',
    author: 'FashionKilla',
    tags: ['Haul', 'Summer'],
    rating: 5,
    isFeatured: false
  }
];

export const GOLD_ITEMS = ARTICLES.filter(item => item.isFeatured);