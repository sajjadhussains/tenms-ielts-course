import HeroSection from '@/components/HeroSection';
import Sections from '@/components/Sections';
import React from 'react';

interface ProductPageProps {
  searchParams: Promise<{
    lang?: 'en' | 'bn';
  }>;
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const resolvedSearchParams = await searchParams;
  const lang = resolvedSearchParams.lang || 'en';

  return (
    <main>
      <HeroSection lang={lang} />
      <Sections lang={lang} />
    </main>
  );
}