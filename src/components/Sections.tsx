import { fetchCourseData } from '@/services/api';
import React from 'react'
import InstructorsSection from './InstructorsSection';
import LaidOut from './LaidOut';
import WhatWillLearn from './WhatWillLearn';
import CourseAbout from './CourseAbout';
import ExclusiveFeatures from './ExclusiveFeatures';
interface SectionProps {
  lang: 'en' | 'bn';
}
export default async function Sections({ lang }: SectionProps) {
    const courseData = await fetchCourseData(lang);
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
          case 'about':
            return <CourseAbout key={idx} data={section}/>
          case 'feature_explanations':
            return <ExclusiveFeatures key={idx} data={section}/>
          default:
            return null;
        }
      })}
        </div>
      </div>
  )
}
