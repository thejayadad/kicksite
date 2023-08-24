'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ['Home', 'Sneakers', 'About', 'Contact']; // Add your menu items here

  const initialAnimationVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  useEffect(() => {
    setMenuOpen(false); // Close the menu when the page loads
  }, []);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={initialAnimationVariants}
      className='p-8 flex justify-between max-w-[1500px] m-auto'
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={initialAnimationVariants}
        className='flex items-center'
      >
        <Link href={'/'}>KickShare</Link>
      </motion.div>
      <nav className='flex justify-between items-center'>
        <ul className='hidden md:flex space-x-4'>
          {menuItems.map((item) => (
            <li key={item}>
              <Link href={'/'}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={initialAnimationVariants}
        className='flex items-center space-x-4'
      >
        <span>Username</span>
        <span className='md:hidden cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </span>
        <span className='cursor-pointer'>
          <FaShoppingCart />
        </span>
      </motion.div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className='md:hidden absolute top-16 left-0 right-0 bg-white z-10 p-4'
          >
            <ul className='flex flex-col space-y-4'>
              {menuItems.map((item) => (
                <li key={item}>
                  <Link href={'/'}>{item}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
