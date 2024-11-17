import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface BookReaderProps {
  pdfUrl: string;
  title: string;
  author: string;
}

export default function BookReader({ pdfUrl, title, author }: BookReaderProps) {
  const [numPages, setNumPages] = React.useState<number | null>(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [scale, setScale] = React.useState(1.0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-600">by {author}</p>
      </div>

      <div className="flex justify-center mb-4 space-x-4">
        <button
          onClick={() => setScale(scale => Math.max(0.5, scale - 0.1))}
          className="p-2 text-gray-600 hover:text-[#4A148C]"
        >
          <ZoomOut className="h-5 w-5" />
        </button>
        <button
          onClick={() => setScale(scale => Math.min(2, scale + 0.1))}
          className="p-2 text-gray-600 hover:text-[#4A148C]"
        >
          <ZoomIn className="h-5 w-5" />
        </button>
      </div>

      <div className="flex justify-center">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className="border rounded-lg"
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>

      <div className="flex items-center justify-center mt-4 space-x-4">
        <button
          onClick={() => setPageNumber(page => Math.max(1, page - 1))}
          disabled={pageNumber <= 1}
          className="p-2 text-gray-600 hover:text-[#4A148C] disabled:opacity-50"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="text-gray-600">
          Page {pageNumber} of {numPages}
        </span>
        <button
          onClick={() => setPageNumber(page => Math.min(numPages || page, page + 1))}
          disabled={pageNumber >= (numPages || 1)}
          className="p-2 text-gray-600 hover:text-[#4A148C] disabled:opacity-50"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}