import React from 'react'
import Navbar from '../../components/navbar'

const Hero = () => {

  return (
    <>
        <Navbar/>
        

    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
     
<figure className="max-w-screen-md mx-auto text-center">
    <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <blockquote>
        <p className="text-2xl italic font-medium text-gray-500 ">"The lower bound of engineering is the problems we encounter, and the upper bound is our imagination."</p>
    </blockquote>
    <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
        <img className="w-6 h-6 rounded-full" src="https://avatars.githubusercontent.com/u/109481712?v=4" alt="profile picture"/>
        <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500">
            <cite className="pe-3 font-medium text-gray-500 dark:text-white">Isaac Sakyi</cite>
            <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">Developer</cite>
        </div>
       
    </figcaption>
</figure>
    </div>
    </>
  )
}

export default Hero