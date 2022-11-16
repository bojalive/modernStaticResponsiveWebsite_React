import React from 'react'
import './App.css'
import{Blog, Footer,Header,Possibilities,WhatGPT3,Features} from './containers/index'
import {CTA,Brand, Navbar} from './components/index'
  const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
       <Brand/>
       <WhatGPT3/>
       <Features/>
       <Possibilities/>
       <CTA/>
       <Blog/>
       <Footer/>
    </div>
  )
}

export default App
