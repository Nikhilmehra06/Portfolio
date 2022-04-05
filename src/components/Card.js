import React from 'react';
import profile from '../images/profile.jpg';
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

const Card = () => {
  return (
    <div>
      <div className="w-full">
        <div className="flex flex-col justify-center max-w-xs mx-auto bg-white  shadow-xl rounded-xl p-5">
          <div className="">
            <img
              src={profile}
              alt="profile face"
              className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
            />
          </div>
          <div className="text-center mt-5">
            <p className="text-xl sm:2xl text-gray-900">Nikhil Mehra</p>
            <p className="text-xx sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
              Web Developer || ReactJs Intern
            </p>

            <div className="flex align-center justify-center mt-4 m-auto ">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
