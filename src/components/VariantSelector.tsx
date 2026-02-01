"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function VariantSelector() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentVariant = searchParams.get('variant') || '1';

  const handleVariantChange = (variant: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('variant', variant);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-black/5">
        <p className="text-xs text-[#6B7280] text-center mb-3 font-medium">Theme</p>
        <div className="flex gap-3">
          <button
            onClick={() => handleVariantChange('1')}
            className={`relative w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 ${
              currentVariant === '1'
                ? 'ring-2 ring-offset-2 ring-[#E07B54] ring-offset-white'
                : 'ring-1 ring-black/10'
            }`}
            style={{ backgroundColor: '#E07B54' }}
            aria-label="Variant 1 - Terracotta"
            title="Variant 1 - Terracotta"
          >
            {currentVariant === '1' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"/>
                </svg>
              </div>
            )}
          </button>

          <button
            onClick={() => handleVariantChange('2')}
            className={`relative w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 ${
              currentVariant === '2'
                ? 'ring-2 ring-offset-2 ring-[#b58f32] ring-offset-white'
                : 'ring-1 ring-black/10'
            }`}
            style={{ backgroundColor: '#b58f32' }}
            aria-label="Variant 2 - Gold"
            title="Variant 2 - Gold"
          >
            {currentVariant === '2' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"/>
                </svg>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
