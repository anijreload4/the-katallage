import React from 'react';
import EventCard from './EventCard';

export default function Events() {
  const events = [
    {
      title: "Easter Sunday Service",
      date: "March 31, 2024",
      time: "10:00 AM",
      location: "Main Sanctuary",
      imageUrl: "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Youth Conference",
      date: "April 5-7, 2024",
      time: "6:00 PM",
      location: "Fellowship Hall",
      imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Bible Study Workshop",
      date: "April 13, 2024",
      time: "7:00 PM",
      location: "Study Center",
      imageUrl: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#4A148C] mb-4">Upcoming Events</h2>
          <p className="text-gray-600">Join us in fellowship and worship</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
}