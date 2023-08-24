'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const carouselItems = [
    'https://images.pexels.com/photos/17888984/pexels-photo-17888984/free-photo-of-man-standing-on-camper-in-evening.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/11383172/pexels-photo-11383172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/17503539/pexels-photo-17503539/free-photo-of-back-of-a-woman-fixing-her-hair-on-a-roof.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className='text-gray-600 body-font'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            KickShare Sneakers
          </h1>
          <p className='mb-8 leading-relaxed'>
            Share and explore the latest sneaker trends with KickShare. Join our community of sneaker enthusiasts today!
          </p>
          <div className='flex justify-center'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none rounded text-lg'>
              Get Started
            </motion.button>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <div className='relative'>
            <img
              className='object-cover object-center rounded'
              alt='hero'
              src={carouselItems[currentSlide]}
            />
            <div className='absolute inset-0 flex items-center justify-between'>
              <button
                onClick={handlePrevSlide}
                className='text-white bg-gray-800 opacity-50 hover:opacity-75 p-2 rounded-full'
              >
                {'<'}
              </button>
              <button
                onClick={handleNextSlide}
                className='text-white bg-gray-800 opacity-50 hover:opacity-75 p-2 rounded-full'
              >
                {'>'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
