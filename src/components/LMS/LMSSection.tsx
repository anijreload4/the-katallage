import React from 'react';
import CourseCard from './CourseCard';

export default function LMSSection() {
  const courses = [
    {
      title: "Foundations of Faith",
      description: "Explore the fundamental principles of Christian faith and discover the core beliefs that shape our spiritual journey.",
      duration: "4 weeks",
      lessons: 12,
      progress: 75,
      imageUrl: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Understanding Scripture",
      description: "Learn essential methods for studying and interpreting the Bible, making God's Word accessible and applicable to daily life.",
      duration: "6 weeks",
      lessons: 18,
      progress: 30,
      imageUrl: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Prayer and Meditation",
      description: "Develop a deeper prayer life and learn various meditation techniques to strengthen your spiritual connection.",
      duration: "3 weeks",
      lessons: 9,
      progress: 0,
      imageUrl: "https://images.unsplash.com/photo-1544374892-e0d7f0e37b36?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#4A148C] mb-4">Biblical Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Deepen your understanding of God's Word through our structured online courses.
            Learn at your own pace and grow in your spiritual journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}