"use client"
import { CourseData, fetchCourseData } from '@/services/api';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

interface HeroCarouselProps {
  lang: 'en' | 'bn';
}

interface MediaItem {
  name: string;
  resource_type: 'video' | 'image';
  resource_value: string;
  thumbnail_url?: string;
}

export default function HeroCarousel({ lang }: HeroCarouselProps) {
  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const loadCourseData = async () => {
      try {
        const data = await fetchCourseData(lang);
        setCourseData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching course data:', error);
        setLoading(false);
      }
    };

    loadCourseData();
  }, [lang]);

  // Reset video playing state when slide changes
  useEffect(() => {
    setIsVideoPlaying(false);
  }, [currentIndex]);

  if (loading || !courseData) {
    return (
      <div className="w-full md:max-w-[330px] lg:max-w-[400px] bg-white rounded-lg shadow-lg p-8 flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  // Filter preview gallery items for carousel
  const carouselItems: MediaItem[] =
    courseData.data.media
      ?.filter((item) => item.name === 'preview_gallery')
      .map((item) => ({
        ...item,
        resource_type: item.resource_type as 'video' | 'image',
      })) || [];
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };
  
  const currentItem = carouselItems[currentIndex];

  return (
    <div className="w-full md:max-w-[330px] lg:max-w-[400px] bg-white  shadow-lg overflow-hidden">
      {/* Main Display Area */}
      <div className="relative aspect-video bg-gray-900">
        {currentItem?.resource_type === 'video' ? (
          <div className="relative w-full h-full">
            {isVideoPlaying ? (
              // YouTube iframe when playing
              <iframe
                src={`https://www.youtube.com/embed/${currentItem.resource_value}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              // Thumbnail with play button when not playing
              <>
                {currentItem.thumbnail_url ? (
                  <Image
                    src={currentItem.thumbnail_url}
                    alt="Video thumbnail"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-400">Video Preview</span>
                  </div>
                )}
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handlePlayVideo}
                    className="bg-red-600 hover:bg-red-700 transition-colors rounded-full p-4 cursor-pointer group"
                  >
                    <Play className="w-8 h-8 text-white fill-white ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </>
            )}
          </div>
        ) : (
          currentItem?.resource_value ? (
            <Image
              src={currentItem.resource_value}
              alt="Course preview"
              fill
              className="object-cover"
              unoptimized
            />
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <span className="text-gray-400">No Preview Available</span>
            </div>
          )
        )}
        
        {/* Navigation Arrows */}
        {carouselItems.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
      
      {/* Thumbnail Navigation */}
      {carouselItems.length > 1 && (
        <div className="flex gap-2 p-3 bg-gray-50 overflow-x-auto">
          {carouselItems.map((item: MediaItem, index: number) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 relative rounded overflow-hidden border-2 transition-colors ${
                index === currentIndex ? 'border-red-500' : 'border-transparent'
              }`}
            >
              <div className="w-16 h-12 relative">
                {item.thumbnail_url || item.resource_value ? (
                  <Image
                    src={item.thumbnail_url || item.resource_value}
                    alt={`Preview ${index + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-xs text-gray-500">N/A</span>
                  </div>
                )}
                {item.resource_type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/60 rounded-full p-1">
                      <Play className="w-3 h-3 text-white fill-white" />
                    </div>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}