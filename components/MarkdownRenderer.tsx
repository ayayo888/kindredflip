'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MarkdownRendererProps {
  content: string[];
}

// Helper to optimize Cloudinary URLs directly for standard <img> tags
// This allows us to get optimized images (WebP/AVIF, resized) from Cloudinary
// WITHOUT using Next.js <Image> (which requires width/height) and WITHOUT using Vercel Image Optimization (saving costs).
const optimizeCloudinaryUrl = (src?: string) => {
    if (!src || !src.includes('res.cloudinary.com')) return src;
    
    // Check if already optimized to avoid double params
    if (src.includes('/upload/f_auto,q_auto/')) return src; 
    
    // Inject parameters after /upload/
    if (src.includes('/upload/')) {
        const [base, path] = src.split('/upload/');
        // Params: f_auto (format), q_auto (quality), w_800 (limit width to max article size)
        return `${base}/upload/f_auto,q_auto,w_800/${path}`; 
    }
    return src;
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  // Join the array of strings into a single markdown string with newlines
  const markdownString = content ? content.join('\n\n') : '';

  return (
    <div className="prose prose-lg prose-headings:font-black prose-p:text-gray-800 prose-p:leading-loose prose-img:rounded-xl prose-img:shadow-hard prose-a:text-kf-blue prose-a:font-bold prose-a:no-underline hover:prose-a:underline max-w-none">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]} 
        rehypePlugins={[rehypeRaw]}
        components={{
            // Custom styling for specific elements if needed
            img: ({node, ...props}) => (
                <span className="block my-8">
                    <img 
                        {...props} 
                        src={optimizeCloudinaryUrl(props.src as string)}
                        className="w-full h-auto rounded-xl border-2 border-black shadow-hard" 
                        loading="lazy"
                    />
                </span>
            ),
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