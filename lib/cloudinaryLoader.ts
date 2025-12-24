'use client';

interface CloudinaryLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function cloudinaryLoader({ src, width, quality }: CloudinaryLoaderProps) {
  // 1. 针对 Cloudinary 图片的处理逻辑
  if (src.includes('res.cloudinary.com')) {
    // Cloudinary 的 URL 结构通常是: https://res.cloudinary.com/.../upload/v1234/id
    // 我们需要在 '/upload/' 后面插入转换参数
    const params = [
      'f_auto',       // 自动选择最佳格式 (WebP/AVIF)
      'c_limit',      // 限制尺寸 (不放大图片，保持比例)
      `w_${width}`,   // Next.js 请求的宽度
      `q_${quality || 'auto'}` // 质量 (默认 auto)
    ];

    const paramsString = params.join(',');

    // 如果 URL 包含 '/upload/'，我们在它后面注入参数
    if (src.includes('/upload/')) {
        const [base, path] = src.split('/upload/');
        return `${base}/upload/${paramsString}/${path}`;
    }
    
    // 如果 URL 结构比较特殊（比如没有 version），尝试直接追加（容错处理）
    return src; 
  }

  // 2. 针对 Picsum (开发测试用图) 的简单处理
  // 虽然上线后应该很少用，但保留它防止开发环境图片挂掉
  if (src.includes('picsum.photos')) {
      // Picsum 支持 ?w= 参数，或者是 /width/height 结构
      // 这里做个简单的参数追加，不消耗 Vercel 额度
      return `${src}?w=${width}`;
  }

  // 3. 其他所有图片 (External URLs)
  // 直接返回原链接，不经过 Vercel 优化，不计费。
  // 注意：这会导致非 Cloudinary 的图片没有被压缩，但至少不会产生费用。
  return src;
}