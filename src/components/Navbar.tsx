import React from 'react';
import { Menu, X, Heart, BookOpen, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Devotionals', href: '#devotionals' },
    { name: 'Resources', href: '#resources' },
    { name: 'Events', href: '#events' },
    { name: 'Learning', href: '#learning', icon: GraduationCap },
    { name: 'Library', href: '#library', icon: BookOpen },
    { name: 'Give', href: '#give' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-[#4A148C]" />
            <span className="ml-2 text-2xl font-bold text-[#4A148C]">Katallage</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center text-gray-700 hover:text-[#4A148C] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.icon && <item.icon className="h-4 w-4 mr-1" />}
                {item.name}
              </a>
            ))}
            <button className="bg-[#4A148C] text-white px-6 py-2 rounded-full hover:bg-[#6a1cb3] transition-colors">
              Join Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center text-gray-700 hover:text-[#4A148C] block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.icon && <item.icon className="h-4 w-4 mr-2" />}
                {item.name}
              </a>
            ))}
            <button className="w-full bg-[#4A148C] text-white px-6 py-2 rounded-full hover:bg-[#6a1cb3] transition-colors">
              Join Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}