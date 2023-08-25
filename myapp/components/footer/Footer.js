import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-100">
              The premier spot for all kicks needs. You name it we got it!
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#">
                <FaFacebook color="#3b5998" size={24} />
              </a>
              <a href="#">
                <FaTwitter color="#1da1f2" size={24} />
              </a>
              <a href="#">
                <FaInstagram color="#e4405f" size={24} />
              </a>
              <a href="#">
                <FaLinkedin color="#0077b5" size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-100">Email: info@yourwebsite.com</p>
            <p className="text-gray-100">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-100">©KickShare All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
