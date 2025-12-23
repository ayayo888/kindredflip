import React from 'react';
import type { Metadata } from 'next';
import TheLabClient from '@/components/TheLabClient';

export const metadata: Metadata = {
  title: 'CNfans Reviews & In-Hand QC Tests 2026 _The Lab',
  // H1 is handled in the client component, verified as matching SEO.md
};

export default function TheLabPage() {
  return <TheLabClient />;
}