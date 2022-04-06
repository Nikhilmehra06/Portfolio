import React from 'react';
import ScrollIntoView from 'scroll-into-view';
import { FaChevronDown } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <div className="max-w-4xl mt-20 mx-auto">
        <p className="text-2xl text-black md:text-4xl font-bold text-center">
          Hey 👋
        </p>
        <p className="text-base sm:text-xl text-center text-gray-600 leading-relaxed mt-4">
          I am a Passoinate Web Developer. I love to create Responsive
          Websites.Currently Working as an Intern in ReatJs. I want to become a
          Full stack Web Developer. I Think i am funny
        </p>
      </div>
      <scrollIntoView selector="#tech">
        <div className="mx-auto p-20">
          <FaChevronDown className="animate-bounce  mx-auto text-3xl text-blue-600" />
        </div>
      </scrollIntoView>
    </>
  );
};

export default About;
