import { SectionTypes } from '@/services/api';
import Image from 'next/image';
import React from 'react'


interface InstructorsSectionProps {
  data: SectionTypes;
}

export default function InstructorsSection({ data }: InstructorsSectionProps) {
  // Get the first instructor or use fallback
  const instructor = data.values?.[0];
  
  if (!instructor) {
    return (
      <div className=''>
        <h2 className='text-2xl font-semibold'>{data.name}</h2>
        <p>No instructor data available</p>
      </div>
    );
  }

  return (
    <div>
        <h2 className='text-2xl font-semibold'>{data.name}</h2>
        <div className='mt-5 border border-gray-200 rounded-md p-4 flex items-center gap-5'>
            {instructor.image && (
              <Image 
                src={instructor.image} 
                width={80} 
                height={80} 
                alt={instructor.name || "instructor"} 
                className='rounded-full'
              />
            )}
            <div className='md:w-[60%]'>
                {instructor.name && <p>{instructor.name}</p>}
                {instructor.description && (
                  <div dangerouslySetInnerHTML={{ __html: instructor.description }}/>
                )}
            </div>
        </div>
    </div>
  )
}
