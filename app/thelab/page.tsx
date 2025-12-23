import React from 'react';
import type { Metadata } from 'next';
import TheLabClient from '@/components/TheLabClient';

export const metadata: Metadata = {
  title: 'CNfans Reviews & In-Hand QC Tests 2026 _The Lab',
};

export default function TheLabPage() {
  return <TheLabClient />;
}