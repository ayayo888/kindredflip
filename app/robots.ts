import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.kindredflip.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // 如果有不想被收录的私有页面，可以在这里加 disallow
      // disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}