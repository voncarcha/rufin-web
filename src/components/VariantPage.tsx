"use client";

import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Header1 = dynamic(() => import('@/components/variant-1/Header'));
const Hero1 = dynamic(() => import('@/components/variant-1/Hero'));
const CuratedSelections1 = dynamic(() => import('@/components/variant-1/CuratedSelections'));
const VoyageStandard1 = dynamic(() => import('@/components/variant-1/VoyageStandard'));
const HotelOfMonth1 = dynamic(() => import('@/components/variant-1/HotelOfMonth'));
const SeasonalMoodboards1 = dynamic(() => import('@/components/variant-1/SeasonalMoodboards'));
const Journal1 = dynamic(() => import('@/components/variant-1/Journal'));
const Newsletter1 = dynamic(() => import('@/components/variant-1/Newsletter'));
const Footer1 = dynamic(() => import('@/components/variant-1/Footer'));

const Header2 = dynamic(() => import('@/components/variant-2/Header'));
const Hero2 = dynamic(() => import('@/components/variant-2/Hero'));
const CuratedSelections2 = dynamic(() => import('@/components/variant-2/CuratedSelections'));
const VoyageStandard2 = dynamic(() => import('@/components/variant-2/VoyageStandard'));
const HotelOfMonth2 = dynamic(() => import('@/components/variant-2/HotelOfMonth'));
const SeasonalMoodboards2 = dynamic(() => import('@/components/variant-2/SeasonalMoodboards'));
const Journal2 = dynamic(() => import('@/components/variant-2/Journal'));
const Newsletter2 = dynamic(() => import('@/components/variant-2/Newsletter'));
const Footer2 = dynamic(() => import('@/components/variant-2/Footer'));
const VariantSelector = dynamic(() => import('@/components/VariantSelector').then(m => m.default), { ssr: false });

export default function VariantPage() {
  const searchParams = useSearchParams();
  const variant = searchParams.get('variant') || '1';

  if (variant === '2') {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Header2 />
          <Hero2 />
          <CuratedSelections2 />
          <VoyageStandard2 />
          <HotelOfMonth2 />
          <SeasonalMoodboards2 />
          <Journal2 />
          <Newsletter2 />
          <Footer2 />
        </Suspense>
        <VariantSelector />
      </>
    );
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header1 />
        <Hero1 />
        <CuratedSelections1 />
        <VoyageStandard1 />
        <HotelOfMonth1 />
        <SeasonalMoodboards1 />
        <Journal1 />
        <Newsletter1 />
        <Footer1 />
      </Suspense>
      <VariantSelector />
    </>
  );
}
