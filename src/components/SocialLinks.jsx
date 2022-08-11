import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {ImProfile} from 'react-icons/im'
import {SiGmail} from 'react-icons/si'

const SocialLinks = () => {

    const  links=[

        {
            id:1,
            child:(
                <>
                   Linkedin <FaLinkedin size={30} className="bg-blue-500"/> 
                </>
            ),
            href:"https://www.linkedin.com/in/vaibhav-shukla-56ab7320b/",
            style:"rounded-tr-md"
        },
        {
            id:2,
            child:(
                <>
                   GitHub <FaGithub size={30} className="bg-black"/> 
                </>
            ),
            href:"https://github.com/VaibhavShukla4",
            style:"rounded-tr-md"
        },
        {
            id:3,
            child:(
                <>
                   Gmail <SiGmail size={30} className="bg-rose-500"/> 
                </>
            ),
            href:"mailto:vaibhavs7312@gmail.com",
            style:"rounded-tr-md"
        },
        {
            id:4,
            child:(
                <>
                   Resume <ImProfile size={30} className="bg-fuchsia-500"/> 
                </>
            ),
            href:"/resume.pdf",
            style:"rounded-br-md",
            download:true,
        },

    ]
  return (
    <div className='hidden lg:flex flex flex-col top-[35%] left-0 fixed'> 
    <ul>
       {links.map(({id, child, href, style,download}) =>(
        <li key={id} className={'flex justify-between items-center w-40 h-14 px-4  ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 bg-indigo-400 text-white' + " "+ style}>
            <a href={href} className='flex justify-between items-center w-full text-white '
            download={download}
            target="_blank"
            rel="noreferrer"
            
             >
            {child}
            </a>
        </li>
       ))}
    </ul></div>
  )
}

export default SocialLinks