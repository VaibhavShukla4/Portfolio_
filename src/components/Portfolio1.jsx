import React from 'react'
import movie from "../assets/portfolio/movie.jpg";
import crm from "../assets/portfolio/crm.jpg";
import country from "../assets/portfolio/country.jpg";
import food from "../assets/portfolio/food.jpg";
import text from "../assets/portfolio/text.jpg";
import notes from "../assets/portfolio/notes.jpg";

const Portfolio1 = () => {
  const portfolios = [
    {
      id: 1,
      src: movie,
      href:{
        project:"https://62f5dfdcafe49c6c0085bf23--dashing-kelpie-d528b4.netlify.app/",
        code:"https://github.com/VaibhavShukla4/Movie_Booking_App__"
      }
      
    },
    {
      id: 2,
      src: crm,
      href:{
        project:"https://62f5e6c78d406771dc186395--rainbow-daffodil-cb12b6.netlify.app/",
        code:"https://github.com/VaibhavShukla4/Customer-Relationship-Management-app-Using-Pie-Charts"
      }
    },
    {
      id: 3,
      src: country,
      href:{
        project:"https://62ebebb19fcd7b3460d05489--quiet-cobbler-f50e1f.netlify.app/",
        code:"https://github.com/VaibhavShukla4/COUNTRY-APP"
      }
    },
    {
      id: 4,
      src: food,
      href:{
        project:"https://62ebebb19fcd7b3460d05489--quiet-cobbler-f50e1f.netlify.app/",
        code:"https://github.com/VaibhavShukla4/Food-Cart"
      }
    },
    {
      id: 5,
      src: text,
      href:{
        project:"https://zesty-madeleine-d886af.netlify.app/",
        code:"https://github.com/VaibhavShukla4/textAnlyizer/tree/master"
      }
    },

    {
      id: 6,
      src: notes,
      href:{
        project:"https://62e621db8720ed22a5e8172f--cute-tanuki-92bdfd.netlify.app/",
        code:"https://github.com/VaibhavShukla4/Notes"
      }
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-indigo-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-5">
          {portfolios.map(({ id, src,href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
                style={{ height: "12rem", width: "32rem" }}
              />
              <div className=" flex items-center justify-center  ">
                <a href={href.project} className="w-1/2 px-8 py-3 m-4 duration-200 hover:scale-105"
                target="_blank"
            rel="noreferrer">
                  Demo
                </a>
                <a href={href.code} className="w-1/2 px-8 py-3 m-4 duration-200 hover:scale-105"
                target="_blank"
            rel="noreferrer">
                  Code
                </a>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio1