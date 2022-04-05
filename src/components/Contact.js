import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <div className="mx-w-lg w-full text-center pt-36 pb-16 m-auto">
        <h1 className="text-2xl sm: 4xl">Intrestered in Working together?</h1>
        <a href="mailto:nikhilmehra7919@gmail.com">
          <span className="mt-6 inline-block w-auto bg-black font-display text-white text-base md: text-xl py-4 px-7 cursor-pointer">
            <div className="flex flex-row items-center">
              <span className="mr-3">Get in Touch</span>
              <FaArrowRight color="white" />
            </div>
          </span>
        </a>
      </div>
    </>
  );
};

export default Contact;
