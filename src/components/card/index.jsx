import React, { useState } from 'react'
import Modal from '../modal'
// import "../../views/test/style.css"
const Card = ({title, short_desc, image,url, long_desc, live_url, code_url, blog}) => {

  return (
    

<div className=" bg-base-100 shadow-xl">
  <figure className='w-full h-44 relative rounded-none'><img className='object-cover object-center absolute inset-0 max-w-full max-h-full rounded-none' src={image} alt="Shoes" /></figure>
  <div className="card-body p-3">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">{blog? "Blog": "Project"}</div>
    </h2>
    <p className='truncate-words-75'>{long_desc }</p>
  <Modal title={title} long_desc={long_desc} live_url={live_url} code_url={code_url} />
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary"></button>
    </div> */}
  </div>
  
</div>
  //   <div  className='swiper-slide w-full md:w-full sm:mb-0 mb-6   shadow-sm-light shadow-indigo-400 bg-slate-900 rounded-lg '  >
  //   <div className="rounded-lg h-64  relative ">
  //     <img alt="content" className="object-cover object-center h-full w-full" src={image} />
  //     {/* <iframe
  //         className="w-full h-full absolute inset-0"
  //         src={url}
  //         title={title}
  //         frameBorder="0"
    
  //       ></iframe> */}
  //   </div>
  //   <div className='card-body'>
  //   <h2 className="card-title">{title}</h2>
  //   <p className="text-base leading-relaxed mt-2"> {short_desc} </p>

  //   {/* <div className="card-actions justify-end">
  //     <div className="badge badge-outline">Fashion</div> 
  //     <div className="badge badge-outline">Products</div>
  //   </div> */}
    
  //   </div>
  // </div>

  )
}

export default Card