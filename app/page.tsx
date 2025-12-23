import React from 'react';
import type { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';

export const metadata: Metadata = {
  title: 'The Ultimate CNfans Spreadsheet 2026 | QC Verified Links & Finds',
  description: 'Stop gambling with dead links. Access the #1 CNfans Spreadsheet for 2026. We list 1000+ QC-verified finds for Sneakers, Tech, and Hoodies. Shop the Gold Standard safely.',
  keywords: 'cnfans spreadsheet, best cnfans spreadsheet 2026, cnfans links, 1:1 reps, cnfans finds, rep spreadsheet, quality check reps, safe cnfans links',
};

export default function HomePage() {
  return <HomeClient />;
}