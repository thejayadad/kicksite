'use client'
import React from 'react';

const GallerySection = () => {
  const galleryImages = [
    'https://images.pexels.com/photos/17503539/pexels-photo-17503539/free-photo-of-back-of-a-woman-fixing-her-hair-on-a-roof.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/17503539/pexels-photo-17503539/free-photo-of-back-of-a-woman-fixing-her-hair-on-a-roof.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/17503539/pexels-photo-17503539/free-photo-of-back-of-a-woman-fixing-her-hair-on-a-roof.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/17503539/pexels-photo-17503539/free-photo-of-back-of-a-woman-fixing-her-hair-on-a-roof.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/17503539/pexels-photo-17503539/free-photo-of-back-of-a-woman-fixing-her-hair-on-a-roof.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/17503539/pexels-photo-17503539/free-photo-of-back-of-a-woman-fixing-her-hair-on-a-roof.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
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
