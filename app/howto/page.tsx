import React from 'react';
import type { Metadata } from 'next';
import HowToClient from '@/components/HowToClient';

export const metadata: Metadata = {
  title: 'How To Order From China (Safely) | The CNfans Step-by-Step Guide 2026',
  description: "Don't let language barriers stop you. Learn How To Order From China via CNfans. We walk you through buying directly from Taobao, Weidian, and 1688—safely and easily. From spreadsheet to doorstep, simplified.",
  keywords: 'how to order from china, cnfans guide, how to use cnfans, buy reps from china, taobao agent tutorial, weidian shopping guide, cnfans shipping tutorial',
};

export default function HowToPage() {
  return <HowToClient />;
}