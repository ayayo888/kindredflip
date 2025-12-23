import React from 'react';
import type { Metadata } from 'next';
import GoldListClient from '@/components/GoldListClient';

export const metadata: Metadata = {
  title: '1:1 Reps CNfans Spreadsheet 2026 | Verified "Gold" Batches',
  description: 'Stop settling for budget flaws. Access the ultimate list of 1:1 Reps for CNfans. Every item is Verified "Gold Tier"—closest to retail batches only. No lemons.',
};

export default function GoldListPage() {
  return <GoldListClient />;
}