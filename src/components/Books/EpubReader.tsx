import React from 'react';
import { Book } from 'epubjs';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

interface EpubReaderProps {
  url: string;
  title: string;
  author: string;
}

export default function EpubReader({ url, title, author }: EpubReaderProps) {
  const viewerRef = React.useRef<HTMLDivElement>(null);
  const [book, setBook] = React.useState<Book | null>(null);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(0);
  const [scale, setScale] = React.useState(100);

  React.useEffect(() => {
    if (viewerRef.current) {
      const newBook = new Book(url);
      setBook(newBook);

      newBook.ready.then(() => {
        const rendition = newBook.renderTo(viewerRef.current!, {
          width: '100%',
          height: '600px',
        });
        rendition.display();

        newBook.locations.generate().then(() => {
          setTotalPages(newBook.locations.length());
        });
      });

      return () => {
        newBook.destroy();
      };
    }
  }, [url]);

  const handlePrevPage = () => {
    if (book && currentPage > 0) {
      book.rendition.prev();
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (book && currentPage < totalPages - 1) {
      book.rendition.next();
      setCurrentPage(prev => prev + 1);
    }
  };

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 10, 200));
    if (book?.rendition) {
      book.rendition.themes.fontSize(`${scale}%`);
    }
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 10, 50));
    if (book?.rendition) {
      book.rendition.themes.fontSize(`${scale}%`);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-600">by {author}</p>
      </div>

      <div className="flex justify-center mb-4 space-x-4">
        <button
          onClick={handleZoomOut}
          className="p-2 text-gray-600 hover:text-[#4A148C]"
        >
          <ZoomOut className="h-5 w-5" />
        </button>
        <button
          onClick={handleZoomIn}
          className="p-2 text-gray-600 hover:text-[#4A148C]"
        >
          <ZoomIn className="h-5 w-5" />
        </button>
      </div>

      <div 
        ref={viewerRef}
        className="border rounded-lg mb-4"
        style={{ height: '600px' }}
      />

      <div className="flex items-center justify-center mt-4 space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage <= 0}
          className="p-2 text-gray-600 hover:text-[#4A148C] disabled:opacity-50"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="text-gray-600">
          Page {currentPage + 1} of {totalPages || 1}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage >= totalPages - 1}
          className="p-2 text-gray-600 hover:text-[#4A148C] disabled:opacity-50"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}