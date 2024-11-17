import React from 'react';
import { Play, Clock } from 'lucide-react';

interface SermonCardProps {
  title: string;
  speaker: string;
  duration: string;
  thumbnailUrl: string;
  views: string;
}

export default function SermonCard({ title, speaker, duration, thumbnailUrl, views }: SermonCardProps) {
  return (
    <div className="group relative">
      <div className="relative">
        <img 
          src={thumbnailUrl} 
          alt={title} 
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-[#FFD700] p-4 rounded-full transform group-hover:scale-110 transition-transform duration-300">
              <Play className="h-6 w-6 text-[#4A148C]" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{speaker}</p>
        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {duration}
          </div>
          <span>•</span>
          <span>{views} views</span>
        </div>
      </div>
    </div>
  );
}