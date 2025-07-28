import Image from 'next/image';
import React from 'react'


interface InstructorsSectionProps {
  data: {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: Array<{
        description:string;
        image:string;
        name:string;
    }>;
  };
}

export default function InstructorsSection({ data }: InstructorsSectionProps) {
    console.log(data.name)
  return (
    <div className=''>
        <h2 className='text-2xl font-semibold'>{data.name}</h2>
        <div className='mt-5 border border-gray-200 rounded-md p-4 flex items-center gap-5'>
            <Image src={data.values[0].image} width={80} height={80} alt="instructor" className='rounded-full'/>
            <div className='md:w-[60%]'>
                <p>{data.values[0].name}</p>
                <div dangerouslySetInnerHTML={{ __html: data.values[0].description }}/>
            </div>
        </div>
    </div>
  )
}
