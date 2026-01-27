import React from 'react';
import { mockData } from '../mock';

export const Gallery = () => {
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
    </section>
  );
};
