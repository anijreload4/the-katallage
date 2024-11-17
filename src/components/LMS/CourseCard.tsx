import React from 'react';
import { BookOpen, Clock, Award } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  lessons: number;
  progress: number;
  imageUrl: string;
}

export default function CourseCard({ title, description, duration, lessons, progress, imageUrl }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        {progress > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
            <div 
              className="h-full bg-[#4A148C]" 
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{lessons} lessons</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {progress > 0 ? (
            <span className="text-sm text-gray-600">{progress}% complete</span>
          ) : (
            <span className="text-sm text-gray-600">Not started</span>
          )}
          <button className="bg-[#4A148C] text-white px-4 py-2 rounded-full text-sm hover:bg-[#6a1cb3] transition-colors">
            {progress > 0 ? 'Continue' : 'Start Course'}
          </button>
        </div>
      </div>
    </div>
  );
}