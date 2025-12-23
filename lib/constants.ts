import { CategoryItem, ArticleItem, LabItem, AgentLinkConfig } from './types';

// =====================================================================
// 0. SOCIAL MEDIA LINKS
// =====================================================================
export const SOCIAL_LINKS = {
  discord: 'https://discord.gg/your-invite-code',
  telegram: 'https://t.me/your-channel-link',
};

// =====================================================================
// 1. AGENT LINKS CONFIGURATION (Spreadsheets)
// =====================================================================
export const AGENT_LINKS: Record<string, AgentLinkConfig> = {
  'cnfans': { 
      spreadsheet: 'https://docs.google.com/spreadsheets/d/your-cnfans-link-here',
      // [配置示例] 为不同分类设置不同的表格链接 (通常是不同的 gid/Tab)
      categories: {
          'SHOES': 'https://docs.google.com/spreadsheets/d/your-cnfans-link-here/edit#gid=1111',
          'HOODIES': 'https://docs.google.com/spreadsheets/d/your-cnfans-link-here/edit#gid=2222',
          'TECH': 'https://docs.google.com/spreadsheets/d/your-cnfans-link-here/edit#gid=3333',
      }
  },
  'mulebuy': { spreadsheet: 'https://docs.google.com/spreadsheets/d/your-mulebuy-link-here' },
  'hoobuy': { spreadsheet: 'https://docs.google.com/spreadsheets/d/your-hoobuy-link-here' },
  'sugargoo': { spreadsheet: 'https://docs.google.com/spreadsheets/d/your-sugargoo-link-here' },
  'superbuy': { spreadsheet: 'https://docs.google.com/spreadsheets/d/your-superbuy-link-here' },
  'allchinabuy': { spreadsheet: 'https://docs.google.com/spreadsheets/d/your-allchinabuy-link-here' },
  
  // 其他 Agent (默认只配置主链接)
  'acbuy': { spreadsheet: '#' },
  'basetao': { spreadsheet: '#' },
  'bbdbuy': { spreadsheet: '#' },
  'cnshopper': { spreadsheet: '#' },
  'cssbuy': { spreadsheet: '#' },
  'eastmallbuy': { spreadsheet: '#' },
  'gtbuy': { spreadsheet: '#' },
  'hipobuy': { spreadsheet: '#' },
  'hubbuycn': { spreadsheet: '#' },
  'itaobuy': { spreadsheet: '#' },
  'joyagoo': { spreadsheet: '#' },
  'kakobuy': { spreadsheet: '#' },
  'kameymall': { spreadsheet: '#' },
  'lovegobuy': { spreadsheet: '#' },
  'npbuy': { spreadsheet: '#' },
  'oopbuy': { spreadsheet: '#' },
  'ootdbuy': { spreadsheet: '#' },
  'orientdig': { spreadsheet: '#' },
  'pantherbuy': { spreadsheet: '#' },
  'pingubuy': { spreadsheet: '#' },
  'ponybuy': { spreadsheet: '#' },
  'rizzitgo': { spreadsheet: '#' },
  'tigbuy': { spreadsheet: '#' },
  'vigorbuy': { spreadsheet: '#' },

  'default': { spreadsheet: 'https://docs.google.com/spreadsheets' }
};


// =====================================================================
// 2. 首页分类 (CATEGORY GRID)
// =====================================================================
export const CATEGORIES: CategoryItem[] = [
  { 
    id: '1', 
    name: 'Shoes', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488588/shoes_ocm0vz.png', 
    color: 'blue', 
    itemCount: 1240,
    href: '/gold?category=shoes' 
  },
  { 
    id: '2', 
    name: 'Hoodies', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488587/Hoodies_fpspfa.png', 
    color: 'red', 
    itemCount: 850,
    href: '/gold?category=hoodies'
  },
  { 
    id: '3', 
    name: 'T-Shirts', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488589/t_jg2rrt.png',
    color: 'yellow', 
    itemCount: 920,
    href: '/gold?category=t-shirts'
  },
  { 
    id: '4', 
    name: 'Jackets', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488587/jacket_lmg2kr.png',
    color: 'green', 
    itemCount: 450,
    href: '/gold?category=jackets'
  },
  { 
    id: '5', 
    name: 'Jersey', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488588/Jersey_lmh6ob.png', 
    color: 'blue', 
    itemCount: 210,
    href: '/gold?category=jersey'
  },
  { 
    id: '6', 
    name: 'Pants', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488589/pants_dnkfqu.png', 
    color: 'yellow', 
    itemCount: 540,
    href: '/gold?category=pants'
  },
  { 
    id: '7', 
    name: 'Accessories', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488587/Accessories_n1sciy.png', 
    color: 'red', 
    itemCount: 1100,
    href: '/gold?category=accessories'
  },
  { 
    id: '8', 
    name: 'Bags', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488587/bags_vjalt6.png', 
    color: 'green', 
    itemCount: 430,
    href: '/gold?category=bags'
  },
  { 
    id: '9', 
    name: 'Tech', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488588/tech_dh5t1u.png', 
    color: 'blue', 
    itemCount: 320,
    href: '/gold?category=tech'
  },
  { 
    id: '10', 
    name: 'Lifestyle', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488588/Lifestyle_euf6oo.png', 
    color: 'yellow', 
    itemCount: 150,
    href: '/gold?category=lifestyle'
  },
  { 
    id: '11', 
    name: 'Girls', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488587/girls_g4h2li.png',
    color: 'red', 
    itemCount: 280,
    href: '/gold?category=girls'
  },
  { 
    id: '12', 
    name: 'Perfume', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488588/Perfume_ugwatb.png', 
    color: 'green', 
    itemCount: 80,
    href: '/gold?category=perfume'
  },
];

// 3. LAB ITEMS (原 QC ITEMS 已被合并至此)
export const LAB_ITEMS: LabItem[] = [
  {
    id: 'l1',
    category: 'SHOES',
    title: 'Nike Dunk Low "Panda" - VT Batch',
    price: '$28.00',
    weight: '1.1kg',
    status: 'PASS',
    image: 'https://picsum.photos/400/400?random=101',
    note: 'Stitching accurate. Toebox shape 1:1. The leather feels slightly plasticky but acceptable for the price.',
    date: '2025-10-20',
    author: 'LabTech_01',
    
    // --- MANUAL SEO CONFIGURATION (Example) ---
    seoTitle: 'Nike Dunk Low Panda VT Batch Review - Best Budget Batch 2025',
    seoDescription: 'Full QC review of the $28 VT Batch Nike Dunk Panda. We verify weight, stitching, and leather quality. Find out if it is worth buying.',
    seoKeywords: ['nike dunk low panda', 'vt batch dunks', 'cnfans shoes', 'budget dunks qc'],
    // ------------------------------------------

    content: [
      "The VT Batch is widely considered the budget king for Dunks. We ordered these anonymously to verify if the quality holds up in late 2025.",
      "The shape is excellent. The toebox flip matches retail pairs perfectly. The stitching on the swoosh is clean with no fraying.",
      "However, the sole is slightly softer than retail. It might wear out faster if used for skating."
    ],
    rawLink: 'https://weidian.com/item.html?itemID=55555',
    agentLinks: {
        'CNfans': 'https://cnfans.com/product/example-pass',
        'Mulebuy': 'https://mulebuy.com/product/example-pass'
    }
  },
  {
    id: 'l2',
    category: 'TECH',
    title: 'Air Max Wireless Headphones Gen 2',
    price: '$15.00',
    weight: '0.4kg',
    status: 'FAIL',
    image: 'https://picsum.photos/400/400?random=102',
    note: 'Plastic hinge broke during stress test. Avoid. Sound quality is also muffled.',
    date: '2025-10-18',
    author: 'AudioDave',
    content: [
      "We had high hopes for this $15 replica, but it failed our durability test immediately.",
      "Upon first fold, the plastic hinge snapped. The materials used are extremely brittle recycled plastic.",
      "Bluetooth connectivity drops after 5 meters. Do not waste your money on this batch."
    ],
    // No links for FAIL items
  },
  {
    id: 'l3',
    category: 'HOODIES',
    title: 'Essential Fear of God Hoodie 2024',
    price: '$35.00',
    weight: '0.9kg',
    status: 'PASS',
    image: 'https://picsum.photos/400/400?random=103',
    note: 'Heavyweight cotton verified. Logo placement correct.',
    date: '2025-10-15',
    author: 'FashionKilla',
    content: [
      "This is a solid pass. The weight is 900g, which gives it that correct boxy drape.",
      "The silicone logo on the chest is 3D and centered correctly. Previous batches had it too low."
    ],
    rawLink: 'https://taobao.com/item/123123',
    agentLinks: {
        'Hoobuy': 'https://hoobuy.com/product/example'
    }
  },
  {
    id: 'l4',
    category: 'BAGS',
    title: 'Supreme SS18 Shoulder Bag',
    price: '$12.00',
    weight: '0.2kg',
    status: 'FAIL',
    image: 'https://picsum.photos/400/400?random=104',
    note: 'Strap text font is wrong (too thin). Zipper gets stuck.',
    date: '2025-09-30',
    author: 'HypeBeastCheck',
    content: ["Font is completely wrong. Instant callout."],
  },
  {
    id: 'l5',
    category: 'SHOES',
    title: 'Jordan 4 Military Black - Budget Batch',
    price: '$45.00',
    weight: '1.4kg',
    status: 'PASS',
    image: 'https://picsum.photos/400/400?random=105',
    note: 'Surprisingly good for the price. Netting aligns correctly.',
    rawLink: 'https://weidian.com/item/444',
    agentLinks: {
        'CNfans': 'https://cnfans.com/product/example-j4'
    }
  },
  {
    id: 'l6',
    category: 'ACCESSORIES',
    title: 'Chrome Hearts Ring (Silver Plated)',
    price: '$8.00',
    weight: '0.05kg',
    status: 'PASS',
    image: 'https://picsum.photos/400/400?random=106',
    note: 'Lead test passed. No green skin.',
    rawLink: 'https://taobao.com/item/ring',
    agentLinks: {
        'CNfans': 'https://cnfans.com/product/example-ring'
    }
  },
];

// 4. ARTICLES (Gold Items)
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
    
    // =======================================================
    // 🔗 MANUAL LINK CONFIGURATION
    // 在这里手动配置每个 Agent 的购买链接
    // 1. rawLink: 淘宝/微店原链接 (用于 "Copy Link" 按钮)
    // 2. agentLinks: 粘贴你在各平台的推广链接 (用于下拉菜单)
    // =======================================================
    rawLink: 'https://weidian.com/item.html?itemID=123456789',
    
    agentLinks: {
        'CNfans': 'https://cnfans.com/product/?shop_type=weidian&id=123456789&ref=MY_CODE',
        'Mulebuy': 'https://mulebuy.com/product/?url=https://weidian.com/item.html?itemID=123456789&inviteCode=MY_CODE',
        'Hoobuy': 'https://hoobuy.com/product/2/123456789',
        'Kakobuy': 'https://kakobuy.com/item/123456789',
        // 如果这里不写某个 Agent，下拉菜单里就不会出现它
    },
    // =======================================================

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
    
    rawLink: 'https://item.taobao.com/item.htm?id=987654321', 
    agentLinks: {
        'CNfans': 'https://cnfans.com/product/?shop_type=taobao&id=987654321',
        'Superbuy': 'https://superbuy.com/en/page/buy?url=https://item.taobao.com/item.htm?id=987654321',
        'AllChinaBuy': 'https://www.allchinabuy.com/en/page/buy/?url=https://item.taobao.com/item.htm?id=987654321'
    }
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
    
    rawLink: 'https://detail.1688.com/offer/11223344.html',
    agentLinks: {
        'CNfans': 'https://cnfans.com/product/?shop_type=1688&id=11223344',
        'Hoobuy': 'https://hoobuy.com/product/0/11223344'
    }
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
    // Example: No agent links configured yet, buttons will be disabled/hidden
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

// =====================================================================
// 5. GLOBAL SITE CONFIG (Icon & Metadata)
// =====================================================================
export const SITE_CONFIG = {
  // 请将此链接替换为您上传到 Cloudinary 的图标 URL (建议 512x512 PNG)
  // 这个图标将用于：
  // 1. 浏览器标签页 (Favicon)
  // 2. 网站导航栏左上角的 Logo
  // 3. 手机添加到主屏幕的图标
  icon: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766500843/fra_nam9p0.png', // 示例图片，请替换
};