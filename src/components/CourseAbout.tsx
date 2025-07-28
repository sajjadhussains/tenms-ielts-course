import { SectionTypes } from '@/services/api';
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface CourseAboutProps {
  data: SectionTypes;
}

export default function CourseAbout({ data }: CourseAboutProps) {

  return (
    <div className="space-y-0 mt-10">
        <h2 className='text-2xl font-semibold mb-3'>{data.name}</h2>
        <div className='border border-gray-300 p-4 rounded-md'>
        {data.values.map((faq, index) => (
            <details key={index} className={`group ${index < data.values.length - 1 ? 'border-b border-dashed border-gray-300' : ''}`} open={index === 0}>
            <summary className="cursor-pointer p-4 font-medium bg-white hover:bg-gray-50 transition-colors duration-150 flex items-center justify-between list-none">
                <div 
                className="flex-1 pr-4"
                dangerouslySetInnerHTML={{ __html: faq.title ?? '' }}
                />
                <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="bg-white">
                <div 
                className="p-4 text-gray-700 leading-relaxed" 
                dangerouslySetInnerHTML={{ __html: faq.description ?? '' }} 
                />
            </div>
            </details>
        ))}
        </div>
    </div>
  );
}