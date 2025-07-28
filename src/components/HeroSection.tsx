import { fetchCourseData } from '@/services/api';
import Image from 'next/image';
import React from 'react';
import HeroCarousel from './HeroCarousel';
import HeroCarouselBottom from './HeroCarouselBottom';

// ✅ Declare props interface
interface HeroSectionProps {
  lang: 'en' | 'bn';
}

// ✅ Accept props correctly
export default async function HeroSection({ lang }: HeroSectionProps) {
  const courseData = await fetchCourseData(lang);

  return (
    <div>
      <div className="bg-[#020A0B] mx-auto">
        <Image
          src="/images/banner.jpeg"
          alt="Banner image"
          className="object-cover"
          priority
          width={1800}
          height={150}
        />
      </div>
      <div
        className="min-h-[300px] bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/10ms-bg.jpeg")' }}
      >
        <div className='max-w-6xl mx-auto'>
           <div className='container relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]'>
                <div className='order-1 flex flex-col justify-center flex-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]'>
                    <h1 className='text-white text-[21px] md:text-4xl font-semibold mb-2'>{courseData.data.title}</h1>
                    <button className='flex flex-row flex-wrap gap-2 text-white mb-2'>
                        <span>
                            <Image src="/images/course-star.jpeg" width={130} height={130} alt=''/>
                        </span>
                        <span className="inline-block text-sm md:text-base">(81.8% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</span>
                    </button>
                    <div className='text-white' dangerouslySetInnerHTML={{ __html: courseData.data.description }} />
                </div>
                <div className='w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute border-gray-300 border-1 p-2'>
                    <HeroCarousel lang={lang}/>
                    <HeroCarouselBottom lang={lang}/>
                </div>
           </div>
            
        </div>
      </div>
     
    </div>
  );
}
