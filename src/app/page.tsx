"use client";

import { Suspense } from 'react';
import VariantPage from '@/components/VariantPage';

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VariantPage />
    </Suspense>
  );
}
