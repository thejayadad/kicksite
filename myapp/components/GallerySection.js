'use client'
import React from 'react';

const GallerySection = () => {
  const galleryImages = [
    'https://images.pexels.com/photos/1475417/pexels-photo-1475417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2307562/pexels-photo-2307562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3769701/pexels-photo-3769701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/956723/pexels-photo-956723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/386024/pexels-photo-386024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2113179/pexels-photo-2113179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-8">
          Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
