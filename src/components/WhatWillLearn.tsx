import { SectionTypes } from '@/services/api';
import React from 'react';
import { Check } from 'lucide-react'; // matches the checkmark in your image

interface WhatWillLearnProps {
  data: SectionTypes;
}

export default function WhatWillLearn({ data }: WhatWillLearnProps) {
  return (
    <div className="text-[#0f172a]">
      <h2 className="text-2xl font-semibold mb-6">{data.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 border border-gray-300 p-3 rounded-md">
        {data.values.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <Check className="text-[#3E7EFF] mt-1 min-w-[20px]" size={18} strokeWidth={2.5} />
            <p className="text-[15px] leading-[1.6]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
