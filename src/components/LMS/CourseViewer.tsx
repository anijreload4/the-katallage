import React from 'react';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import CourseProgress from './CourseProgress';

interface CourseViewerProps {
  onBack: () => void;
}

export default function CourseViewer({ onBack }: CourseViewerProps) {
  const [currentLesson, setCurrentLesson] = React.useState(1);

  const lessons = [
    { id: 1, title: 'Introduction to Faith', completed: true, duration: '15 min' },
    { id: 2, title: 'Understanding Grace', completed: true, duration: '20 min' },
    { id: 3, title: 'The Power of Prayer', completed: false, duration: '25 min' },
    { id: 4, title: 'Living in Faith', completed: false, duration: '18 min' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-[#4A148C]"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Courses
            </button>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-[#4A148C]">
                <Download className="h-5 w-5" />
              </button>
              <button className="text-gray-600 hover:text-[#4A148C]">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[400px]"
                ></iframe>
              </div>
              <div className="p-6">
                <h1 className="text-2xl font-semibold mb-4">Foundations of Faith</h1>
                <div className="prose max-w-none">
                  <p className="text-gray-600">
                    This comprehensive course will guide you through the fundamental principles
                    of Christian faith. You'll learn about God's character, the importance of
                    prayer, and how to apply biblical teachings to your daily life.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <CourseProgress
              lessons={lessons}
              currentLesson={currentLesson}
              onLessonClick={setCurrentLesson}
            />
          </div>
        </div>
      </div>
    </div>
  );
}