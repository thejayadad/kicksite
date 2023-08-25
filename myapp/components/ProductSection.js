'use client'
import React from 'react';
import ProductCard from './ProductCard';

const ProductSection = () => {
  const products = [
    {
      image: 'https://images.pexels.com/photos/2759779/pexels-photo-2759779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Nike Air Swoosh',
      description: 'Custom Nike Swoosh',
      category: 'Sneaker',
      price: '$99.99',
    },
    {
      image: 'https://images.pexels.com/photos/2558488/pexels-photo-2558488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Adidas Ultraboost',
      description: 'Comfortable and stylish',
      category: 'Running Shoe',
      price: '$129.99',
    },
    {
      image: 'https://images.pexels.com/photos/3596282/pexels-photo-3596282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Converse Chuck Taylor',
      description: 'Classic design for everyday wear',
      category: 'Sneaker',
      price: '$79.99',
    },
    {
      image: 'https://images.pexels.com/photos/2759783/pexels-photo-2759783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Puma Cali',
      description: 'Sleek and versatile',
      category: 'Sneaker',
      price: '$89.99',
    },
    {
      image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Vans Old Skool',
      description: 'Timeless skate shoe design',
      category: 'Sneaker',
      price: '$74.99',
    },
    {
      image: 'https://images.pexels.com/photos/12607452/pexels-photo-12607452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'New Balance 990',
      description: 'Classic and comfortable',
      category: 'Running Shoe',
      price: '$149.99',
    },
    {
      image: 'https://images.pexels.com/photos/10050109/pexels-photo-10050109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Reebok Classic Leather',
      description: 'Iconic sneaker with a retro look',
      category: 'Sneaker',
      price: '$84.99',
    },
    {
      image: 'https://images.pexels.com/photos/415261/pexels-photo-415261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Under Armour HOVR Sonic',
      description: 'Performance running shoe',
      category: 'Running Shoe',
      price: '$119.99',
    },
    
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
