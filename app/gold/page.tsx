import React from 'react';
import type { Metadata } from 'next';
import GoldListClient from '@/components/GoldListClient';

export const metadata: Metadata = {
  title: '1:1 Reps CNfans Spreadsheet 2026 | Verified "Gold" Batches',
  description: 'Stop settling for budget flaws. Access the ultimate list of 1:1 Reps for CNfans. Every item is Verified "Gold Tier"—closest to retail batches only. No lemons.',
};

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function GoldListPage(props: Props) {
  const searchParams = await props.searchParams;
  // 获取 URL 中的 category 参数 (例如: /gold?category=shoes)
  const category = typeof searchParams.category === 'string' ? searchParams.category : undefined;
  
  // 将参数传给客户端组件作为初始状态
  return <GoldListClient initialCategory={category} />;
}