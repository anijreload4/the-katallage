import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

interface Lesson {
  id: number;
  title: string;
  completed: boolean;
  duration: string;
}

interface CourseProgressProps {
  lessons: Lesson[];
  onLessonClick: (lessonId: number) => void;
  currentLesson: number;
}

export default function CourseProgress({ lessons, onLessonClick, currentLesson }: CourseProgressProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Course Progress</h3>
      <div className="space-y-4">
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            onClick={() => onLessonClick(lesson.id)}
            className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
              currentLesson === lesson.id
                ? 'bg-[#4A148C] text-white'
                : 'hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center">
              {lesson.completed ? (
                <CheckCircle className="h-5 w-5 mr-3 text-[#FFD700]" />
              ) : (
                <Circle className="h-5 w-5 mr-3" />
              )}
              <span className={currentLesson === lesson.id ? 'text-white' : 'text-gray-700'}>
                {lesson.title}
              </span>
            </div>
            <span className={`text-sm ${
              currentLesson === lesson.id ? 'text-gray-200' : 'text-gray-500'
            }`}>
              {lesson.duration}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}