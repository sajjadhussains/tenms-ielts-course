import { SectionTypes } from '@/services/api'
import Image from 'next/image';
import React from 'react'

interface LaidOutProps {
  data: SectionTypes;
}

export default function LaidOut({ data }: LaidOutProps) {
  return (
    <div className='mt-7'>
        <h2 className='text-2xl font-semibold mb-5'>{data.name}</h2>
        <div className='mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8'>
            {
                data.values.map((item, index) => (
                    <div key={index} className='text-white flex items-start gap-3'>
                        <Image src={item.icon ?? '/fallback.png'} width={40} height={40} alt="" />
                        <div>
                            <p>{item.title}</p>
                            <p>{item.subtitle}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
