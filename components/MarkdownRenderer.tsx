'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

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
            // Custom styling for specific elements if needed
            img: ({node, ...props}) => (
                <span className="block my-8">
                    <img {...props} className="w-full h-auto rounded-xl border-2 border-black shadow-hard" />
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