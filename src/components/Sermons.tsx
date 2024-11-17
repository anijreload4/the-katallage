import React from 'react';
import SermonCard from './SermonCard';

export default function Sermons() {
  const sermons = [
    {
      title: "The Power of Grace",
      speaker: "Pastor John Davis",
      duration: "45 min",
      thumbnailUrl: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800",
      views: "1.2K"
    },
    {
      title: "Walking in Faith",
      speaker: "Rev. Sarah Johnson",
      duration: "38 min",
      thumbnailUrl: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=800",
      views: "956"
    },
    {
      title: "Finding Peace in Christ",
      speaker: "Pastor Michael Brown",
      duration: "42 min",
      thumbnailUrl: "https://images.unsplash.com/photo-1504370805625-d32c54b16100?auto=format&fit=crop&q=80&w=800",
      views: "847"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#4A148C] mb-4">Featured Sermons</h2>
          <p className="text-gray-600">Watch and listen to our latest messages</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon, index) => (
            <SermonCard key={index} {...sermon} />
          ))}
        </div>
      </div>
    </div>
  );
}