import React from 'react';
import { BookOpen, Share2 } from 'lucide-react';

export default function DailyDevotional() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#4A148C] mb-4">Daily Devotional</h2>
          <p className="text-gray-600">Start your day with God's Word</p>
        </div>
        
        <div className="bg-gray-50 rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <BookOpen className="h-6 w-6 text-[#4A148C]" />
              <span className="ml-2 text-sm text-gray-500">March 14, 2024</span>
            </div>
            <button className="text-gray-500 hover:text-[#4A148C]">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
          
          <h3 className="text-2xl font-semibold mb-4">Walking in God's Love</h3>
          <p className="text-gray-700 mb-6 italic">"But God demonstrates his own love for us in this: While we were still sinners, Christ died for us." - Romans 5:8</p>
          
          <p className="text-gray-600 mb-8">
            Today's reflection reminds us of the boundless nature of God's love. In a world that often measures love by worthiness, God's love stands apart...
          </p>
          
          <div className="flex justify-between items-center">
            <button className="text-[#4A148C] font-semibold hover:text-[#6a1cb3]">
              Read More →
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Reading time: 5 min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}