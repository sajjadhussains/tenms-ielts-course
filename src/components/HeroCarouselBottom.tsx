
import React from 'react'
import { fetchCourseData } from '@/services/api';
import Image from 'next/image';
interface HeroCarouselBottomProps {
  lang: 'en' | 'bn';
}
export default async function HeroCarouselBottom({ lang }: HeroCarouselBottomProps) {
    const courseData =await fetchCourseData(lang);
    const checkList = courseData.data.checklist;
  return (
    <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl font-bold text-gray-900">৳ 3850</span>
        </div>
        
        {/* Enroll Button */}
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors mb-4">
          {courseData.data.cta_text.name}
        </button>
        
        {/* Course Features */}
        <div className="space-y-3 text-sm text-gray-700">
          <h3 className="font-semibold text-gray-900 mb-2">এই কোর্সে যা থাকছে</h3>
          
          {checkList.map((feature, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="w-5 h-5 bg-gray-200 rounded flex items-center justify-center">
            <Image src={feature.icon} alt="icon" width={100} height={100} />
          </div>
          <span className="text-sm">{feature.text}</span>
        </div>
      ))}
        </div>
      </div>
  )
}
