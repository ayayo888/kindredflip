import { CategoryItem, QCItem, ArticleItem, LabItem } from './types';

// =====================================================================
// CLOUDINARY 图片替换指南
// =====================================================================
// 1. 在 Cloudinary 后台上传图片。
// 2. 复制图片链接 (URL)。
// 3. 将链接粘贴到下方对应的 'image' 字段中。
// 4. 推荐在链接中加入 f_auto,q_auto 以自动优化速度。
// =====================================================================

// 1. 首页分类 (CATEGORY GRID)
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

// 2. 首页 QC 指南 (QC GUIDE)
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

// 3. 实验室评测 (THE LAB)
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

// 4. 文章详情与首页推荐 (ARTICLES & GOLD ITEMS)
// ---------------------------------------------------------------------
// 使用说明:
// 1. 如果你想在首页显示这篇文章，设置 isFeatured: true
// 2. 首页会自动读取这里的数据。
// 3. 点击首页卡片会自动跳转到 /gold/{id} 详情页。
// ---------------------------------------------------------------------
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
    isFeatured: true, // ✅ 这会在首页显示
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
    isFeatured: true, // ✅ 这会在首页显示
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
    isFeatured: true, // ✅ 这会在首页显示
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
    isFeatured: true, // ✅ 这会在首页显示
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
    isFeatured: false, // ❌ 这不会在首页 Gold 区域显示，但会在 /gold 列表页显示
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

// 自动生成首页 Gold Items 列表
// 不需要手动维护这个数组了！
export const GOLD_ITEMS = ARTICLES.filter(item => item.isFeatured);
