import { MetadataRoute } from 'next';
import { ARTICLES, LAB_ITEMS, AGENT_LINKS } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  // 你的正式域名
  const baseUrl = 'https://www.kindredflip.com';

  // 1. 静态页面 (Static Pages)
  const staticRoutes = [
    '',          // Home
    '/gold',     // Gold List
    '/thelab',   // The Lab
    '/howto',    // How To Guide
    '/agent',    // Agent Database
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }));

  // 2. Gold Articles (Dynamic)
  // 自动读取 ARTICLES 数组生成链接
  const articleRoutes = ARTICLES.map((item) => ({
    url: `${baseUrl}/gold/${item.id}`,
    lastModified: new Date(), // 如果 item.date 是标准格式也可以解析，这里默认用构建时间
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 3. The Lab Items (Dynamic)
  // 自动读取 LAB_ITEMS 数组生成链接
  const labRoutes = LAB_ITEMS.map((item) => ({
    url: `${baseUrl}/thelab/${item.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 4. Agent Pages (Dynamic)
  // 自动读取 AGENT_LINKS 的 key 生成链接 (排除 default)
  const agentRoutes = Object.keys(AGENT_LINKS)
    .filter((key) => key !== 'default')
    .map((key) => ({
      url: `${baseUrl}/agent/${key}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

  // 合并所有路由
  return [...staticRoutes, ...articleRoutes, ...labRoutes, ...agentRoutes];
}