import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import Confetti from '../../components/confetti';

// 
// template 
const Contact = () => {
  const form = useRef();
  const [msglength, setMsgLength] = useState(0)
  const [msg, setMsg] = useState("")
  const [isErr, setIsErr] = useState(false)
  const [isSuc, setIsSuc] = useState(false)
  const [errmsg, setErrMsg]= useState("Message Cannot be more than 3000 characters")
  const calcMsglength = (e)=>{
    const ln = e.target.value.length 
    if (ln > 3000){
      setMsg(msg.slice(0,3000))
      setIsErr(true)
      setTimeout(()=>{
        setIsErr(false)
      },10000)
      return
    }
    setMsgLength(ln)
    setMsg(e.target.value)

  }
  const sendEmail = (e) => {
    e.preventDefault();
 if (!msglength){
  return
 }
    // if (form.current)
    console.log(form.current)
    emailjs.sendForm(import.meta.env.VITE_SERVICEID, import.meta.env.VITE_TEMPLATEID, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          form.current.reset()
        setIsSuc(true)
        setTimeout(()=>{
          setIsSuc(false)
        },3000)
      }, (error) => {
          console.log(error);
      })
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font relative">
       <div className="h-1 bg-gray-800 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500"></div>
      </div>
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl text-indigo-400 tracking-widest font-bold title-font mb-1">#Contact Me 📧</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">I'm enthusiastic about discussing algorithms, software engineering, web app development, and more. Open to contributing to projects, collaborating with great developers, and exploring new opportunities. Let's connect!🤝</p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2" id='messageme'>
          <div className="p-2 w-1/2">
            <div className="relative">
            <input type="hidden" name="user_name" />
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
              <input type="text" id="name" name="from_name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="email"  className="leading-7 text-sm text-gray-400">Email</label>
              <input type="email" id="email"  name="from_email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
              <textarea id="message" name="message" value={msg} onChange={calcMsglength} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3  leading-6 transition-colors duration-200 ease-in-out"></textarea>
              <div className='w-full flex justify-between items-center'> 
                <span className={`${isErr ? "text-red-500":"text-green-500"}`}>{msglength}/3000</span>
                {isErr && <p className='text-red-500 text-sm sm:text-base'>{errmsg}</p>}
              </div>
            </div>
          </div>
          <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit" value="Send">send</button>
          </div>
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
            <a className="text-indigo-400 block mb-2" >isaacsakyi009@gmail.com</a>
           
            <span className="inline-flex">
              <a href="https://github.com/isaac-svg" target='_blank' className="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='currentColor' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/isaac-svg/" target="_blank" className="ml-4 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" className="bi bi-linkedin text-gray-500" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" id="mainIconPathAttribute"></path> </svg>
              </a>
              <a href="https://medium.com/@isaacsakyi009" target='_blank' className="ml-4 text-gray-500">
              <svg width="20" height="20" className='text-gray-500 w-5' xmlns="http://www.w3.org/2000/svg" fill="currentColor" clipRule="evenodd"><path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z" viewBox="0 0 24 24"/></svg>
              </a>
              <a href="https://twitter.com/isaac_svg" target='_blank' className="ml-4 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </form>
    </div>
    {isSuc && <Confetti/>}
  </section>
  )
}

export default Contact