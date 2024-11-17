import React from 'react';
import { Users, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <div className="relative bg-[#4A148C] py-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#4A148C] opacity-90"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Be part of our growing family and experience the love of Christ through fellowship
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#FFD700] text-[#FFD700] rounded-full hover:bg-[#FFD700] hover:text-[#4A148C] transition-colors">
              <Users className="mr-2 h-5 w-5" />
              Connect with Us
            </button>
            <button className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#4A148C] rounded-full hover:bg-gray-100 transition-colors">
              <Mail className="mr-2 h-5 w-5" />
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}