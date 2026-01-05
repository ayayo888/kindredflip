
export interface CategoryItem {
  id: string;
  name: string;
  image: string;
  color: 'red' | 'blue' | 'yellow' | 'green';
  itemCount: number;
  href: string; // Configurable link destination
}

export interface NavLink {
  label: string;
  href: string;
}

// QCItem removed (merged into LabItem)

export interface LabItem {
  id: string;
  category: string[]; // Changed from string to string[] for multiple tags
  title: string;
  price: string;
  weight: string;
  status: 'PASS' | 'FAIL';
  image: string;
  note: string; // One sentence verdict
  
  // --- Detail Page Extras (Optional) ---
  date?: string;
  author?: string;
  content?: string[]; // Full review paragraphs
  pros?: string[];
  cons?: string[];
  
  // --- SEO Overrides (Manual Control) ---
  seoTitle?: string;       // Custom Meta Title
  seoDescription?: string; // Custom Meta Description
  seoKeywords?: string[];  // Custom Keywords
  
  // --- Purchasing (Only used if STATUS === 'PASS') ---
  rawLink?: string; 
  agentLinks?: Record<string, string>; 
}

export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
  rating?: number; // 1-5
  content?: string[]; 
  pros?: string[];
  cons?: string[];
  verdict?: string;
  isFeatured?: boolean; 
  isSale?: boolean;
  
  // --- SEO Overrides (Manual Control) ---
  seoTitle?: string;       // Custom Meta Title
  seoDescription?: string; // Custom Meta Description
  seoKeywords?: string[];  // Custom Keywords

  // --- PURCHASING CONFIGURATION ---
  // 1. Raw Link: 仅用于显示 "Copy Raw Link" 按钮 (淘宝/微店原链接)
  rawLink?: string; 
  
  // 2. Agent Links: 手动配置每个平台的跳转链接
  // Key 必须匹配 AGENT_LIST 中的名字 (Case Sensitive, e.g., 'CNfans', 'Mulebuy')
  // Value 是你生成的该平台的完整链接 (Affiliate Link)
  agentLinks?: Record<string, string>; 
}

export interface AgentLinkConfig {
  spreadsheet: string;       // 主表格链接
  affiliate?: string;        // 推广注册链接
  categories?: Record<string, string>; // [新增] 各分类对应的表格链接 (Tab页)
}
