import { SectionTypes } from '@/services/api';
import Image from 'next/image';
import React from 'react';

interface ExclusiveFeaturesProps {
  data: SectionTypes;
}

export default function ExclusiveFeatures({ data }: ExclusiveFeaturesProps) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-3">{data.name}</h2>
      <div className="border border-gray-300 p-4">
        {data.values.map((feature, idx) => (
          <div key={idx} className={idx < data.values.length - 1 ? 'border-b border-gray-200 pb-4 mb-4' : ''}>
            <h3 className="text-lg font-medium mb-3">{feature.title}</h3>
            <div className="flex justify-between items-start gap-6">
              <div className="flex-1">
                {feature.checklist && feature.checklist.length > 0 && (
                  <ul className="list-disc list-inside space-y-1">
                    {feature.checklist.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {feature.file_url && (
                <div className="flex-shrink-0">
                  <Image 
                    src={feature.file_url} 
                    height={200} 
                    width={200} 
                    alt={feature.title || 'Feature image'}
                    className="rounded-lg object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}