'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLang = searchParams.get('lang') || 'en'; // Default to 'en'

  const handleLanguageChange = (newLang: 'en' | 'bn') => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', newLang);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="p-4 bg-gray-100 flex justify-between items-center">
      <h1 className="text-xl font-semibold">IELTS Course</h1>
      <div className="flex gap-2">
        <button
          onClick={() => handleLanguageChange('en')}
          className={`px-3 py-1 rounded ${currentLang === 'en' ? 'font-bold text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
          disabled={currentLang === 'en'}
        >
          English
        </button>
        <button
          onClick={() => handleLanguageChange('bn')}
          className={`px-3 py-1 rounded ${currentLang === 'bn' ? 'font-bold text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
          disabled={currentLang === 'bn'}
        >
          Bengali
        </button>
      </div>
    </div>
  );
}
