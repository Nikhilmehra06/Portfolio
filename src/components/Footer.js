import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex justify-center mt-4">
        <a
          className="text-xl m-1 p-1 sm-m2 text-gray-800 hover:bg-gray-500 rounded-full  transition-color duration-300 "
          href="https://github.com/Nikhilmehra06"
        >
          <FaGithub />
          <span className="sr-only">Github</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm-m2 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full  transition-color duration-300 "
          href="https://www.linkedin.com/in/nikhil-mehra-054a5b1b7"
        >
          <FaLinkedinIn />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm-m2 text-red-600 hover:bg-red-600 hover:text-white rounded-full  transition-color duration-300 "
          href="https://www.instagram.com/_nikhilmehra/"
        >
          <FaInstagram />
          <span className="sr-only">Instagram</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm-m2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-color duration-300"
          href="https://twitter.com/_nikhilmehra"
        >
          <FaTwitter />
          <span className="sr-only">Twitter</span>
        </a>
      </div>
      <div className="flex justify-center mt-4">
        <p className="text-black mb-4">
          Made with
          <span className="mr-2" role="link">
            💙
          </span>
          by
          <a
            href="mailto: nikhilmehra7919@gmail.com"
            className="text-blue-500 hover:underline "
          >
            Nikhil Mehra
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
