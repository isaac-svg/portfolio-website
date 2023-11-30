import React from 'react'
import "./style.css"
import { skills } from '../../assets/projects/skills'
const Skill = () => {
  return (
    <div className='mx-auto  grid place-items-center' id='tools' >
      
      <h3 className="text-xl text-indigo-400 tracking-widest font-bold title-font mb-4">#Languages 👨‍💻 and Tools 🛠️</h3>
      <span className='text-center mb-3 text-gray-500 leading-relaxed text-lg sm:text-xl' >These are some of the programming languages,  libraries and frameworks I use often when developing software.</span>
      

<div className="flex  w-4/5 sm:w-[90%]  flex-wrap max-auto   " >

  {
    skills.map((skill)=>(
      <div key={skill.name} className='h-16 w-20  hover:bg-gray-700/50 sm:w-40 flex items-center justify-center border-l-[1px] border-b-[1px] shadow-lg border-slate-700 p-1'>
        <img className="h-auto max-w-full rounded-lg" src={skill.badge} alt={skill.name}/>
    </div>
    ))
  }
    
 
</div>

    </div>
   
  )
}

export default Skill