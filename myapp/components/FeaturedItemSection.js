'use client'
import React from 'react';

const FeaturedItemSection = () => {
  const featuredItems = [
    {
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Nike Zoom Swish',
      description: 'Custom Fit Nike Zoom Swish',
    },
    {
      image: 'https://images.pexels.com/photos/1698359/pexels-photo-1698359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Nike One"s',
      description: 'Custom Color Nike One"s',
    },
    {
      image: 'https://images.pexels.com/photos/3208298/pexels-photo-3208298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Calf High Boots',
      description: 'All Purpose Calf High Boots',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-gray-900 text-3xl md:text-4xl text-light text-center mb-8">
          ShowCase Items
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
