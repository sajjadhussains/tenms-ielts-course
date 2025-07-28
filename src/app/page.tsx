import HeroSection from '@/components/HeroSection';
import Sections from '@/components/Sections';
import React from 'react';

interface ProductPageProps {
  searchParams: {
    lang?: 'en' | 'bn';
  };
}

export default function ProductPage({ searchParams }: ProductPageProps) {
  const lang = searchParams.lang || 'en';

  return (
    <main>
      <HeroSection lang={lang} />
      <Sections lang={lang}/>
    </main>
  );
}
