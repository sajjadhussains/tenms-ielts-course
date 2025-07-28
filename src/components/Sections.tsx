import { fetchCourseData } from '@/services/api';
import React from 'react'
import InstructorsSection from './InstructorsSection';
import LaidOut from './LaidOut';
import WhatWillLearn from './WhatWillLearn';
interface SectionProps {
  lang: 'en' | 'bn';
}
export default async function Sections({ lang }: SectionProps) {
    const courseData = await fetchCourseData(lang);
    console.log(courseData.data.sections)
  return (
     <div className='max-w-6xl mx-auto'>
        <div className='w-[60%] mt-10'>
          {courseData.data.sections.map((section, idx) => {
        switch (section.type) {
          case 'instructors':
            return <InstructorsSection key={idx} data={section} />;
          case 'features':
            return <LaidOut key={idx} data={section}/>
          case 'pointers':
            return <WhatWillLearn key={idx} data={section}/>
          default:
            return null;
        }
      })}
        </div>
      </div>
  )
}
