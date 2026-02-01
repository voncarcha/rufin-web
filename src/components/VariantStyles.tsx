"use client";

import { Suspense } from 'react';
import VariantStylesInner from './VariantStylesInner';

export default function VariantStyles() {
  return (
    <Suspense fallback={null}>
      <VariantStylesInner />
    </Suspense>
  );
}
