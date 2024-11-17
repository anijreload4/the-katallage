import React from 'react';
import { Book as BookIcon, ShoppingBag, FileText, Book } from 'lucide-react';
import BookReader from './BookReader';
import EpubReader from './EpubReader';
import BookStore from './BookStore';

type TabType = 'pdf' | 'epub' | 'store';

export default function BooksSection() {
  const [activeTab, setActiveTab] = React.useState<TabType>('pdf');

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#4A148C] mb-4">Christian Literature</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of spiritual books and resources to deepen your faith
            and understanding.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-white shadow-sm p-1">
            <button
              onClick={() => setActiveTab('pdf')}
              className={`flex items-center px-4 py-2 rounded-md ${
                activeTab === 'pdf'
                  ? 'bg-[#4A148C] text-white'
                  : 'text-gray-600 hover:text-[#4A148C]'
              }`}
            >
              <FileText className="h-5 w-5 mr-2" />
              PDF Books
            </button>
            <button
              onClick={() => setActiveTab('epub')}
              className={`flex items-center px-4 py-2 rounded-md ${
                activeTab === 'epub'
                  ? 'bg-[#4A148C] text-white'
                  : 'text-gray-600 hover:text-[#4A148C]'
              }`}
            >
              <Book className="h-5 w-5 mr-2" />
              EPUB Books
            </button>
            <button
              onClick={() => setActiveTab('store')}
              className={`flex items-center px-4 py-2 rounded-md ${
                activeTab === 'store'
                  ? 'bg-[#4A148C] text-white'
                  : 'text-gray-600 hover:text-[#4A148C]'
              }`}
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Book Store
            </button>
          </div>
        </div>

        {activeTab === 'pdf' && (
          <BookReader
            pdfUrl="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            title="Understanding God's Grace"
            author="Dr. John Smith"
          />
        )}
        
        {activeTab === 'epub' && (
          <EpubReader
            url="https://s3.amazonaws.com/moby-dick/moby-dick.epub"
            title="Walking in Faith"
            author="Rev. Sarah Johnson"
          />
        )}
        
        {activeTab === 'store' && <BookStore />}
      </div>
    </div>
  );
}