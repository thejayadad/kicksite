'use client'
import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      image: 'https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'John Doe',
      text: "I'm really satisfied with the product. It exceeded my expectations!",
    },
    {
      image: '/testimonial2.jpg',
      name: 'Jane Smith',
      text: "The customer service is top-notch. They went above and beyond to help me.",
    },
    {
      image: '/testimonial3.jpg',
      name: 'Alex Johnson',
      text: 'The quality and value for the price is unmatched. Highly recommended!',
    },
    {
        image: '/testimonial1.jpg',
        name: 'John Doe',
        text: "I'm really satisfied with the product. It exceeded my expectations!",
      },
      {
        image: '/testimonial2.jpg',
        name: 'Jane Smith',
        text: "The customer service is top-notch. They went above and beyond to help me.",
      },
      {
        image: '/testimonial3.jpg',
        name: 'Alex Johnson',
        text: 'The quality and value for the price is unmatched. Highly recommended!',
      },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 object-cover rounded-full mr-4"
                />
                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
