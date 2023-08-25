'use client'
import React from 'react';

const ProductCard = ({ image, name, description, category, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <img src={image} alt={name} className="mb-4 w-full h-96 object-cover" />
      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="flex justify-between mt-4">
        <p className="text-gray-700 font-bold text-lg">{price}</p>
        <p className="hidden md:block text-primary">{category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
