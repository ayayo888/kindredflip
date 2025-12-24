'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import cloudinaryLoader from '@/lib/cloudinaryLoader';

interface MarkdownRendererProps {
  content: string[];
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  // Join the array of strings into a single markdown string with newlines
  const markdownString = content ? content.join('\n\n') : '';

  return (
    <div className="prose prose-lg prose-headings:font-black prose-p:text-gray-800 prose-p:leading-loose prose-img:rounded-xl prose-img:shadow-hard prose-a:text-kf-blue prose-a:font-bold prose-a:no-underline hover:prose-a:underline max-w-none">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]} 
        rehypePlugins={[rehypeRaw]}
        components={{
            // Custom styling AND optimization for images
            img: ({node, src, alt, ...props}) => {
                // 手动调用 loader 生成优化后的 URL
                // 我们设定 width 为 1000，既能满足视网膜屏的清晰度，又能触发 Cloudinary 的 f_auto (WebP) 和 q_auto (压缩)
                const optimizedSrc = src ? cloudinaryLoader({ src, width: 1000 }) : '';

                return (
                    <span className="block my-8">
                        <img 
                            src={optimizedSrc || src} // 如果优化失败则使用原链接
                            alt={alt} 
                            {...props} 
                            className="w-full h-auto rounded-xl border-2 border-black shadow-hard" 
                            loading="lazy" // 添加原生懒加载
                            decoding="async"
                        />
                    </span>
                );
            },
            blockquote: ({node, ...props}) => (
                <blockquote {...props} className="border-l-4 border-kf-yellow bg-gray-50 p-4 italic font-bold my-6 not-italic" />
            )
        }}
      >
        {markdownString}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;