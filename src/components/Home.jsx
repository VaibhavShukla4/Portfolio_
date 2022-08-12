import React from "react";
import vaibhav from "../assets/vaibhav.jpg";
import { BsArrowRightShort } from "react-icons/bs";
import {Link} from "react-scroll"
const Home = () => {
  return (
    <div
      name="home"
      className="  h-screen w-full bg-gradient-to-b from-black via-black to-indigo-800 text-white pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row  pt-20">
        <div className="w-6/12 sm:w-4/12 px-4 pt-10">
          <h2 className="text-4xl sm:text-7xl font-bold text-white pt-20">
            Hi i'm a <span className="text-cyan-500">React Js</span> Developer
          </h2>
          <p className="text-pink-300 py-4 max-w-md ">
            Currently, I love to work on web application using technologies like
            React, Tailwind, Html, css and exploring backend technologies also
            like Node js, express js, mongoDB
          </p>

          <div >
            <Link to="portfolio"
            smooth
            duration={500}
             className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-600 to-indigo-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <BsArrowRightShort size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <img
          src={vaibhav}
          alt="my-profile"
          className="rounded-full mx-auto md:w-full"
          style={{ height: "25rem", width: "25rem" }}
        />
      </div>
    </div>
  );
};

export default Home;

/***
 * "flex flex-col justify-center h-full"
 * 
 */
