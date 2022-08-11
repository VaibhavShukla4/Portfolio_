import React from 'react'
import  vaibhav from '../assets/vaibhav.jpg'
import {BsArrowRightShort} from 'react-icons/bs'


const Home = () => {
  return (
    <div name="home" className='flex h-screen w-full bg-gradient-to-b from-black via-black to-indigo-400 text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>Hi i'm a Frontend Developer</h2>
          <p className='text-pink-300 py-4 max-w-md'>Currently, I love to work on web application using
          technologies like 
          React, Tailwind, Html, css and exploring backend
           technologies also like Node js, express js, mongoDB 
          </p>

          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-600 to-indigo-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
        <BsArrowRightShort size={25} className="ml-1"/>
              </span>
            </button>
          </div>
        </div>
        <img src={vaibhav} alt="my-profile"  className='rounded-2xl mx-auto md:w-full' style={{height:"25rem", width:"25rem"}} />
        </div>
    </div>
  )
}

export default Home