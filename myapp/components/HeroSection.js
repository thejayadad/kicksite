'use client'
import React, { useState } from 'react';

const HeroSection = () => {
  const images = [
    'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/11924647/pexels-photo-11924647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="w-full h-[800px] md:h-[900px] bg-gray-900">
        <div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-60"
        ></div>
        <img
          src={images[currentImageIndex]}
          alt="Hero Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mb-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full bg-gray-400 ${
              currentImageIndex === index && 'bg-white'
            }`}
          ></button>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-[600px] md:h-[700px] border-t-8 border-secondary"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to KickShare
        </h1>
        <p className="text-xl md:text-2xl mb-10">
          Discover the latest trends in footwear.
        </p>
        <button className="bg-secondary text-black px-6 py-3 rounded-full hover:bg-gray-300 transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
