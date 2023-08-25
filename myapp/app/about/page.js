'use client'
import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 border-t-8 border-secondary">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-3xl md:text-4xl text-center font-bold mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.pexels.com/photos/17685558/pexels-photo-17685558/free-photo-of-light-sea-city-dawn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="About Us"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="text-gray-800">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Welcome to KickShare!
            </h2>
            <p className="mb-4">
              At KickShare, we're passionate about shoes and sharing. Our
              platform is designed to connect shoe enthusiasts from around the
              world, allowing them to share their collections, trade kicks, and
              discover new styles.
            </p>
            <p className="mb-4">
              Whether you're a sneakerhead looking to expand your collection or
              someone who simply appreciates quality footwear, KickShare has
              something for you. Our community is built on trust, respect, and
              a shared love for shoes.
            </p>
            <p className="mb-4">
              Whether you're a sneakerhead looking to expand your collection or
              someone who simply appreciates quality footwear, KickShare has
              something for you. Our community is built on trust, respect, and
              a shared love for shoes.
            </p>
            <p className="mb-4">
              Whether you're a sneakerhead looking to expand your collection or
              someone who simply appreciates quality footwear, KickShare has
              something for you. Our community is built on trust, respect, and
              a shared love for shoes.
            </p>
            <p className="mb-4">
              Whether you're a sneakerhead looking to expand your collection or
              someone who simply appreciates quality footwear, KickShare has
              something for you. Our community is built on trust, respect, and
              a shared love for shoes.
            </p>
            <p>
              Join us today and become part of a vibrant community that's
              dedicated to bringing together shoe lovers, one pair at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
