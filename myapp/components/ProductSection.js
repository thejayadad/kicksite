'use client'
import React from 'react';

const ProductSection = () => {
  const products = [
    {
      image: 'https://images.pexels.com/photos/17745124/pexels-photo-17745124/free-photo-of-girl-in-hat-and-red-dress-looking-at-the-mediterranean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Nike Air Swoosh',
      description: 'Custom Nike Swoosh',
      category: 'Sneaker',
      price: '$99.99',
    },
    {
        image: 'https://images.pexels.com/photos/17745124/pexels-photo-17745124/free-photo-of-girl-in-hat-and-red-dress-looking-at-the-mediterranean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        name: 'Nike Air Swoosh',
        description: 'Custom Nike Swoosh',
        category: 'Sneaker',
        price: '$99.99',
      },
      {
        image: 'https://images.pexels.com/photos/17745124/pexels-photo-17745124/free-photo-of-girl-in-hat-and-red-dress-looking-at-the-mediterranean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        name: 'Nike Air Swoosh',
        description: 'Custom Nike Swoosh',
        category: 'Sneaker',
        price: '$99.99',
      },
      {
        image: 'https://images.pexels.com/photos/17745124/pexels-photo-17745124/free-photo-of-girl-in-hat-and-red-dress-looking-at-the-mediterranean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        name: 'Nike Air Swoosh',
        description: 'Custom Nike Swoosh',
        category: 'Sneaker',
        price: '$99.99',
      },
      {
        image: 'https://images.pexels.com/photos/17745124/pexels-photo-17745124/free-photo-of-girl-in-hat-and-red-dress-looking-at-the-mediterranean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        name: 'Nike Air Swoosh',
        description: 'Custom Nike Swoosh',
        category: 'Sneaker',
        price: '$99.99',
      },
      {
        image: 'https://images.pexels.com/photos/17745124/pexels-photo-17745124/free-photo-of-girl-in-hat-and-red-dress-looking-at-the-mediterranean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        name: 'Nike Air Swoosh',
        description: 'Custom Nike Swoosh',
        category: 'Sneaker',
        price: '$99.99',
      },
      {
        image: 'https://images.pexels.com/photos/17745124/pexels-photo-17745124/free-photo-of-girl-in-hat-and-red-dress-looking-at-the-mediterranean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        name: 'Nike Air Swoosh',
        description: 'Custom Nike Swoosh',
        category: 'Sneaker',
        price: '$99.99',
      },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div
        className="w-full bg-fixed bg-cover bg-center relative"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/17642992/pexels-photo-17642992/free-photo-of-elegant-young-woman-in-dress-posing-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center pt-20 mb-8">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-md rounded-lg transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-96 mb-4 rounded-md"
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 text-sm mb-2">{product.category}</p>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">{product.price}</p>
                  <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
