import React from "react";

const About = () => {
  return (
    <div name="about" className=" w-full h-screen bg-gradient-to-b  from-indigo-800 to-black text-white pt-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20">
        <div className="pb-8 pt-10">
          <p className="text-4xl font-bold inline border-b-4 border-indigo-500">About</p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum{" "}
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </p>
      </div>
    </div>
  );
};

export default About;
