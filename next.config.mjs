/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // ✅ 允许 Cloudinary
        pathname: '/**', // 允许所有路径
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos', // ⚠️ 暂时保留，等你替换完所有图片后再删掉
      }
    ],
  },
};

export default nextConfig;