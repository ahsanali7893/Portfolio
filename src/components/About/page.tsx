import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="bg-gray-50" id="about">
      <div className="container flex flex-col justify-center items-center py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2 className="font-header text-4xl font-semibold text-center uppercase text-primary sm:text-5xl lg:text-6xl text-[#66b3b3]">
            Who Iam i?
          </h2>
          <h4 className="pt-6 font-header text-xl text-center font-medium text-black sm:text-2xl lg:text-3xl">
            I'm Ahsan Ali, a Web developer
          </h4>
          <p className="pt-6 font-body text-center leading-relaxed text-grey-20">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
        </div>
      </div>
    </div>
  );
};

export default About;
