'use client'
import React from 'react';

const GallerySection = () => {
  const galleryImages = [
    'https://images.pexels.com/photos/17503539/pexels-photo-17503539/free-photo-of-back-of-a-woman-fixing-her-hair-on-a-roof.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    '/gallery2.jpg',
    '/gallery3.jpg',
    '/gallery4.jpg',
    '/gallery5.jpg',
    '/gallery6.jpg',
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
                className="w-full h-96 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  Popular Sold Kick
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  gravida ex ut libero tristique, eget feugiat ipsum blandit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
