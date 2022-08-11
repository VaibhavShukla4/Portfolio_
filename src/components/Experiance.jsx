import React from 'react'
import javascript from "../assets/javascript.jpg";
import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import react from "../assets/react.jpg";
import tailwind from "../assets/tailwind.jpg";
import mongo from "../assets/mongo.jpg";
import node from "../assets/node.jpg";
import express from "../assets/express.jpg";
const Experiance = () => {


    const experiance=[
        {
            id:1,
            src:javascript,
            text:"JavaScript",
            style:"shadow-yellow-500"
        },
        {
            id:2,
            src:html,
            text:"HTML",
            style:"shadow-orange-500"
        },
        {
            id:3,
            src:css,
            text:"CSS",
            style:"shadow-blue-500"
        },
        {
            id:4,
            src:react,
            text:"React Js",
            style:"shadow-blue-600"
        },
        {
            id:5,
            src:tailwind,
            text:"Tailwind",
            style:"shadow-cyan-500"
        },
        {
            id:6,
            src:mongo,
            text: "MongoDB",
            style:"shadow-green-600"
        },
        {
            id:7,
            src:node,
            text:"Node Js",
            style:"shadow-green-400"
        },
        {
            id:8,
            src:express,
            text:"Express Js",
            style:"shadow-green-400"
        },
    ]
  return (
    <div name="experiance" className='bg-gradient-to-b   to-indigo-500 from-black w-full  text-white md:h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full  text-white'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-indigo-500'>Experiance</p>
                <p className='py-6'>Thease are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center  py-8 px-12 sm:px-0'>
            {experiance.map(({id,src,text,style}) =>(
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt='' className='w-20 mx-auto'/>
                    <p className="mt-4" >{text}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Experiance