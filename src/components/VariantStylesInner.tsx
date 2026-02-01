"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function VariantStylesInner() {
  const searchParams = useSearchParams();
  const variant = searchParams.get('variant') || '1';

  useEffect(() => {
    const linkId = 'variant-styles';

    const existingLink = document.getElementById(linkId);
    if (existingLink) {
      existingLink.remove();
    }

    const link = document.createElement('link');
    link.id = linkId;
    link.rel = 'stylesheet';
    link.href = variant === '2'
      ? '/variant-2.css'
      : '/variant-1.css';
    document.head.appendChild(link);
  }, [variant]);

  return null;
}
