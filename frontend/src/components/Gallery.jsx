import React, { useState, useEffect, useCallback } from 'react';
import { mockData } from '../mock';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery = () => {
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % mockData.gallery.length;
      setSelectedImageId(mockData.gallery[nextIndex].id);
      return nextIndex;
    });
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + mockData.gallery.length) % mockData.gallery.length;
      setSelectedImageId(mockData.gallery[newIndex].id);
      return newIndex;
    });
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImageId(null);
  }, []);

  // Find current index based on selected image
  useEffect(() => {
    if (selectedImageId) {
      const index = mockData.gallery.findIndex(img => img.id === selectedImageId);
      setCurrentIndex(index);
    }
  }, [selectedImageId]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImageId) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageId, goToNext, goToPrevious, closeModal]);

  const currentImage = mockData.gallery[currentIndex];

  return (
    <section id="gallery" className="py-20" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1e1919' }}>
            Our Balloon Creations
          </h2>
          <p className="text-xl" style={{ color: '#736c64' }}>
            Browse our portfolio of stunning balloon arrangements
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {mockData.gallery.map((image) => (
            <div
              key={image.id}
              className="aspect-square overflow-hidden rounded-2xl transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => setSelectedImageId(image.id)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageId && currentImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container */}
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={currentImage.url}
                alt={currentImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </div>

            {/* Left Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 hover:bg-gray-200 transition-colors shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} className="text-black" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 hover:bg-gray-200 transition-colors shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight size={28} className="text-black" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {mockData.gallery.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};