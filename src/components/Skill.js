import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiGit,
  SiReact,
} from 'react-icons/si';

const Skill = () => {
  return (
    <>
      <div className="max-w-4xl  mx-auto justify-center py-12" id="tech">
        <p className="text-2xl text-black text-center sm:text-4xl pt-4font-bold">
          Tech i Used
        </p>
        <div className="flex flex-wrap justify-center pt-2">
          <div className="flex flex-col w-40 p-10  m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm: w-52">
            <SiHtml5 color="#DD512C" className="mx-auto text-4xl " />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
              HTML
            </p>
          </div>
          <div className="flex flex-col w-40 p-10  m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm: w-52">
            <SiCss3 color="#254BDD" className="mx-auto text-4xl " />
            <p className="mt-6 text-xl sm:2xl font-semibold text-center">CSS</p>
          </div>
          <div className="flex flex-col w-40 p-10  m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm: w-52">
            <SiJavascript color="#EDD718" className="mx-auto text-4xl " />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
              JAVASCRIPT
            </p>
          </div>
          <div className="flex flex-col w-40 p-10  m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm: w-52">
            <SiBootstrap color="#7F10F3" className="mx-auto text-4xl " />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
              BOOTSTRAP
            </p>
          </div>
          <div className="flex flex-col w-40 p-10  m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm: w-52">
            <SiReact className="mx-auto text-4xl " color="#5ED3F3" />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
              ReactJs
            </p>
          </div>
          <div className="flex flex-col w-40 p-10  m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm: w-52">
            <SiGit color="#E84E31" className="mx-auto text-4xl " />
            <p className="mt-6 text-xl sm: text-2xl font-semibold text-center">
              Git
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
