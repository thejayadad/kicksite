'use client'
import React from 'react';

const FeaturedItemSection = () => {
  const featuredItems = [
    {
      image: 'https://images.pexels.com/photos/17115832/pexels-photo-17115832/free-photo-of-back-view-of-blonde-woman-in-coat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Product 1',
      description: 'Description for Product 1.',
    },
    {
      image: 'https://images.pexels.com/photos/18021349/pexels-photo-18021349/free-photo-of-mujer-en-cascada.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Product 2',
      description: 'Description for Product 2.',
    },
    {
      image: 'https://images.pexels.com/photos/18021349/pexels-photo-18021349/free-photo-of-mujer-en-cascada.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Product 3',
      description: 'Description for Product 3.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Featured Items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-70 mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItemSection;
