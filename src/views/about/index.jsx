import React from 'react'
import Carousel from '../../components/carousel'
import Skill from '../../components/skills'

// I am a passionate software developer with a keen interest in exploring the world of algorithms and data structures to craft efficient and elegant solutions. I find joy in unraveling the intricate mathematics that underlie the art of software engineering, and I'm always eager to learn more about the languages, tools, and principles that shape the digital landscape.
// y mission is to create impactful digital solutions that not only meet but exceed expectations. Whether it's streamlining processes, enhancing user interfaces, or crafting robust backend systems, I'm dedicated to delivering excellence in every line of code
const About = () => {
  return (
    <section className="text-gray-400 body-font bg-gray-900" id='aboutme'>
       <div className="h-1 bg-gray-800 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500"></div>
      </div>
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-2xl text-indigo-400 tracking-widest font-bold title-font mb-1">#ABOUT ME 🧑‍💼</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white"></h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg  sm:text-xl first-letter:text-xl first-letter:font-semibold text-gray-500"> 

        Isaac Sakyi is a passionate software developer and technical content writer with love for discrete mathematics. Isaac believes in the strength of collective efforts to create extraordinary solutions.</p>
      </div>
      <div className="flex flex-wrap">
       
        <Skill/>
       
      </div>
      
    </div>
  </section>
  )
}

export default About