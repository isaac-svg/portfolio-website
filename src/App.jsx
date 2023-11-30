import { useState } from 'react'
import Hero from './views/hero'
import About from './views/about'
import Project from './views/project'
import Contact from './views/contact'
import CaroulSlider from './views/test'
import Modal from './components/modal'
import Confetti from './components/confetti'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-gray-900 h-screen '>
      <Confetti/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
      <>
      
      </>
    </main>
  )
}

export default App
