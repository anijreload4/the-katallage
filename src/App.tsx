import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DailyDevotional from './components/DailyDevotional';
import Events from './components/Events';
import Sermons from './components/Sermons';
import LMSSection from './components/LMS/LMSSection';
import BooksSection from './components/Books/BooksSection';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <DailyDevotional />
      <Events />
      <Sermons />
      <LMSSection />
      <BooksSection />
      <CTA />
    </div>
  );
}

export default App;