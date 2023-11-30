import React from 'react'
import SideBar from '../sidebar'

const Navbar = () => {
  return (
    <div className="drawer">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
    <div className="drawer-content flex flex-col">
      {/* Navbar */}
      <div className="w-full navbar bg-transparent sticky ">
        <div className="flex-none">
          <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost fixed z-50 top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div> 
        <div className="flex-1 px-2 mx-2"></div>
        <div className="flex-none  lg:block">
          <ul className="menu menu-horizontal">
            {/* Navbar menu content here */}
            
          </ul>
        </div>
      </div>
    </div> 
    <div className="drawer-side z-40">
      <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-64 min-h-full bg-gray-900">
        {/* Sidebar content here */}
        <SideBar/>
        
      </ul>
    </div>
  </div>
  )
}

export default Navbar