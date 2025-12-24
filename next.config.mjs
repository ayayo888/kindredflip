/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 启用自定义 Loader
    loader: 'custom',
    
    // 指定 Loader 文件路径
    loaderFile: './lib/cloudinaryLoader.ts',
    
    // 当使用 custom loader 时，remotePatterns 实际上主要用于这一层校验，
    // 但因为我们接管了 URL 生成，Next.js 服务器端优化已被绕过。
    // 为了兼容性和避免不必要的警告，我们可以保留这些配置，但它们不再消耗 Vercel 额度。
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      }
    ],
  },
};

export default nextConfig;