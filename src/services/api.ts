// lib/api.ts or utils/api.ts
export interface CourseData {
  code: number;
  data: {
    slug: string;
    id: number;
    title: string;
    description: string;
    platform: string;
    type: string;
    modality: string;
    old_info: {
      cat_id: number;
      course_id: number;
      platform: string;
      skills_cat_id: number;
      slug: string;
    };
    start_at: string;
    media: Array<{
      name: string;
      resource_type: string;
      resource_value: string;
      thumbnail_url?: string;
    }>;
    checklist: Array<{
      color: string;
      icon: string;
      id: string;
      list_page_visibility: boolean;
      text: string;
    }>;
    // sections: Array<{
    //   type: string;
    //   name: string;
    //   description: string;
    //   bg_color: string;
    //   order_idx: number;
    //   values: Array<{
    //     description?: string;
    //     image?: string;
    //     name?: string;
    //     icon?:string;
    //     id?:string;
    //     subtitle?:string;
    //     title?:string;
    //   }>;
    // }>;
    sections:SectionTypes[];
    cta_text:{
    name:string;
    value:string;
  }
    // Add other properties as needed
  };
  error: unknown[];
  message: string;
  payload: unknown[];
  status_code: number;
  
}
export type SectionTypes={
  
      type: string;
      name: string;
      description: string;
      bg_color: string;
      order_idx: number;
      values: Array<{
        description?: string;
        image?: string;
        name?: string;
        icon?:string;
        id?:string;
        subtitle?:string;
        title?:string;
        text?:string;
      }>;
}
export async function fetchCourseData(lang: 'en' | 'bn' = 'en'): Promise<CourseData> {
  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      method: 'GET',
      headers: {
        'X-TENMS-SOURCE-PLATFORM': 'web',
        'accept': 'application/json',
      },
      // This tells Next.js how to cache the data. Revalidate every hour.
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch course data: ${res.status} ${res.statusText}`);
  }

  const courseData: CourseData = await res.json();
  return courseData;
}