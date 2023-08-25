'use client'

import React, { useState } from 'react';

const ProductDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * parseFloat(product.price.replace('$', '')));
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.name} to cart`);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-auto object-cover mb-6 md:mb-0"
          />
          <div className="md:ml-6 w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-2">name</h2>
            <p className="text-gray-600 mb-4">description</p>
            <p className="text-primary text-lg mb-2">category</p>
            <p className="text-gray-700 font-bold text-2xl mb-4">5.99</p>
            <div className="flex items-center space-x-4">
              <label htmlFor="quantity" className="text-gray-700">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                className="border border-gray-300 px-3 py-2 rounded-lg w-16 focus:outline-none focus:border-secondary"
                value={quantity}
                onChange={handleQuantityChange}
              />
              <p className="text-gray-700 font-bold text-xl">
                Total: ${totalPrice.toFixed(2)}
              </p>
            </div>
            <button
              onClick={handleAddToCart}
              className="mt-6 bg-secondary text-white py-2 px-4 rounded-lg hover:bg-secondary-dark transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
