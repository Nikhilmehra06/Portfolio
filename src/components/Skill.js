import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiGit,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

const Skill = () => {
  const commonRenderNode = (icon, name) => (
    <div className="flex flex-col w-40 p-10  m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm: w-52">
      {icon}
      <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
        {name}
      </p>
    </div>
  );
  return (
    <>
      <div className="max-w-4xl  mx-auto justify-center py-12" id="tech">
        <p className="text-2xl text-black text-center sm:text-4xl pt-4font-bold">
          Tech i Used
        </p>
        <div className="flex flex-wrap justify-center pt-2">
          {commonRenderNode(
            <SiHtml5 color="#DD512C" className="mx-auto text-4xl " />,
            "HTML"
          )}
          {commonRenderNode(
            <SiCss3 color="#254BDD" className="mx-auto text-4xl " />,
            "CSS"
          )}

          {commonRenderNode(
            <SiJavascript color="#EDD718" className="mx-auto text-4xl " />,
            "JAVASCRIPT"
          )}

          {commonRenderNode(
            <SiBootstrap color="#7F10F3" className="mx-auto text-4xl " />,
            "BOOTSTRAP"
          )}

          {commonRenderNode(
            <SiReact className="mx-auto text-4xl " color="#5ED3F3" />,
            "ReactJs"
          )}

          {commonRenderNode(
            <SiNodedotjs color="#315232" className="mx-auto text-4xl " />,
            "NODEJS"
          )}

          {commonRenderNode(
            <SiGit color="#E84E31" className="mx-auto text-4xl " />,
            "Git"
          )}
        </div>
      </div>
    </>
  );
};

export default Skill;
