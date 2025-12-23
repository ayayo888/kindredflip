export interface CategoryItem {
  id: string;
  name: string;
  image: string;
  color: 'red' | 'blue' | 'yellow' | 'green';
  itemCount: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface GoldItem {
  id: string;
  title: string;
  image: string;
  price?: string;
  isSale: boolean;
}

export interface QCItem {
  id: string;
  title: string;
  image: string;
}

export interface LabItem {
  id: string;
  category: string;
  title: string;
  price: string;
  weight: string;
  status: 'PASS' | 'FAIL';
  image: string;
  note: string;
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
  content?: string[]; // Array of paragraphs for the body
  pros?: string[];
  cons?: string[];
  verdict?: string;
}