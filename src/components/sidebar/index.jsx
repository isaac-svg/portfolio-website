import React from 'react'

const SideBar = () => {
  return (
  <>  








{/* <!-- drawer component --> */}
<div id="drawer-navigation" className="fixed top-0 right-0 w-full z-50 h-full p-4 overflow-y-auto transition-transform -translate-x-0 bg-gray-900 " tabIndex="-1" aria-labelledby="drawer-navigation-label">
    <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"></h5>
   
  <div className="py-4 overflow-y-auto">
      <ul className="space-y-2 font-medium">
         <li>
            <a href="#aboutme" className="flex items-center p-2 text-indigo-400 rounded-lg hover:bg-gray-600/50 group">
            <span className="material-symbols-outlined text-gray-500">
account_circle
</span>
               <span className="ms-3 text-indigo-400">About Me</span>
            </a>
         </li>
         <li>
            <a href='#tools' type="button" className="flex items-center w-full p-2 text-base text-indigo-400 transition duration-75 rounded-lg group hover:bg-gray-600/50  " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <span className="material-symbols-outlined text-gray-500">build</span>
                  <span className="ms-3 text-indigo-400 flex-1 whitespace-nowrap text-sm ">Tools and languages</span>
                  
            </a>
         </li>
         <li>
            <a href="#projects" className="flex items-center p-2 text-gray-500 rounded-lg    group">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-code-slash text-gray-500" viewBox="0 0 16 16" id="IconChangeColor" transform="rotate(0)"> <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" id="mainIconPathAttribute" strokeWidth="0" stroke="text-gray-500" fill="#737373"></path> </svg>
               <span className=" text-indigo-400 flex-1 ms-3 whitespace-nowrap">Projects and blogs</span>
              
            </a>
         </li>
         <li>
            <a href="#messageme" className="flex items-center p-2 text-indigo-400 rounded-lg dark:text-white hover:bg-gray-600/50 dark:hover:bg-gray-700 group">
            <span className="material-symbols-outlined text-gray-500">chat</span>
               <span className="flex-1 ms-3 whitespace-nowrap">Contact Me</span>
               
            </a>
         </li>
         <li>
            <a href="https://github.com/isaac-svg" target='_blank' className="flex items-center p-2 text-indigo-400 rounded-lg dark:text-white hover:bg-gray-600/50 dark:hover:bg-gray-700 group">
            <span className=" text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='currentColor' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </span>
               <span className="flex-1 ms-3 whitespace-nowrap text-sm ">github</span>
            </a>
         </li>
         <li>
            <a href="https://www.linkedin.com/in/isaac-svg/" target="_blank" className="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-600/50  group">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" className="bi bi-linkedin text-gray-500" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" id="mainIconPathAttribute"></path> </svg>
               <span className=" text-indigo-400  flex-1 ms-3 whitespace-nowrap">LinkedIn</span>
            </a>
         </li>
         <li>
            <a href="https://medium.com/@isaacsakyi009" target='_blank' className="flex items-center p-2 text-indigo-400 rounded-lg dark:text-white hover:bg-gray-600/50 dark:hover:bg-gray-700 group">
            <span className=" text-gray-500">
            <svg width="20" height="20" className='text-gray-500 w-5' xmlns="http://www.w3.org/2000/svg" fill="currentColor" clipRule="evenodd"><path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z" viewBox="0 0 24 24"/></svg>
              </span>
               <span  className="flex-1 ms-3 whitespace-nowrap">Medium</span>
            </a>
         </li>
         <li>
            <a href="https://twitter.com/isaac_svg" target='_blank' className="flex items-center p-2 text-indigo-400 rounded-lg  hover:bg-gray-600/50  group">
            <span  className=" text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </span>
               <span className="flex-1 ms-3 whitespace-nowrap">Twitter</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-indigo-400 rounded-lg dark:text-white hover:bg-gray-600/50 dark:hover:bg-gray-700 group">
            <span className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </span>
               <span className="flex-1 ms-3 whitespace-nowrap">FaceBook</span>
            </a>
         </li>
        
        
         
         
      </ul>
   </div>
</div>

</>
  )
}

export default SideBar