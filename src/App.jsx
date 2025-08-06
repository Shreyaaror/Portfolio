import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'
import Resume from './containers/resume'
import Skills from './containers/skills'

import Contact from './containers/contact'
import Navbar from './components/navbar'
// import ParticlesBackground from './components/p/ParticlesBackground'
import "./components/p/styles.scss";


function App() {
 

  return (
   <div>
    <Navbar/>
    {/* <ParticlesBackground/> */}
<Routes>
  <Route index path="/" element={<Home/>}/>
  <Route index path="/about" element={<About/>}/>
  <Route index path="/resume" element={<Resume/>}/>
  <Route index path="/skills" element={<Skills/>}/>

  <Route index path="/contact" element={<Contact/>}/>

</Routes>

   </div>
  )
}

export default App
