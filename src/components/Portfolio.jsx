import React from "react";
import movie from "../assets/portfolio/movie.jpg";
import crm from "../assets/portfolio/crm.jpg";
import country from "../assets/portfolio/country.jpg";
import food from "../assets/portfolio/food.jpg";
import text from "../assets/portfolio/text.jpg";
import notes from "../assets/portfolio/notes.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: movie,
    },
    {
      id: 2,
      src: crm,
    },
    {
      id: 3,
      src: country,
    },
    {
      id: 4,
      src: food,
    },
    {
      id: 5,
      src: text,
    },

    {
      id: 6,
      src: notes,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black  to-indigo-800 w-full md:h-screen text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <p className="text-4xl font-bold inline border-b-4 border-indigo-500 ">
          Portfolio
        </p>
        <p className="py-6">Check out some of my work right here</p>
      

      <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center   px-12 sm:px-0">
        {portfolio.map(({ id, src }) => (
          <div key={id} className="shadow-md shadow-indigo-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
              style={{ height: "12rem", width: "32rem" }}
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 text-white">
                Demo
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 text-white">
                Code
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
