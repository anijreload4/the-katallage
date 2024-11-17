import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  rating: number;
  imageUrl: string;
  description: string;
}

export default function BookStore() {
  const books: Book[] = [
    {
      id: '1',
      title: 'Walking with Christ',
      author: 'Dr. Sarah Johnson',
      price: 24.99,
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
      description: 'A practical guide to deepening your faith and understanding God\'s purpose for your life.',
    },
    {
      id: '2',
      title: 'Prayer Warriors',
      author: 'Rev. Michael Thompson',
      price: 19.99,
      rating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800',
      description: 'Discover the power of prayer and learn to build a stronger connection with God.',
    },
    {
      id: '3',
      title: 'Grace Unleashed',
      author: 'Pastor David Wilson',
      price: 22.99,
      rating: 4.7,
      imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
      description: 'Understanding and embracing God\'s grace in your daily walk.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {books.map((book) => (
        <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={book.imageUrl}
            alt={book.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{book.title}</h3>
            <p className="text-gray-600 mb-2">by {book.author}</p>
            <div className="flex items-center mb-4">
              <div className="flex items-center text-[#FFD700]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(book.rating) ? 'fill-current' : ''}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">{book.rating}</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">{book.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-[#4A148C]">${book.price}</span>
              <button className="bg-[#4A148C] text-white px-4 py-2 rounded-full text-sm hover:bg-[#6a1cb3] transition-colors flex items-center">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}