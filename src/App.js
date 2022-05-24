import React from 'react'

import {About, Footer, Header, Skills, Testimonial, Work, Smartcontract} from './container'

import {Route, Routes, BrowserRouter} from "react-router-dom";
import { Navbar } from './components';
import './App.scss'

const App = () => {


  
  return (
    <div className="app">



      
      <BrowserRouter>
            <Routes>
            <Route path="/" element={<>
           
               

                
            <Navbar/>
             <section> 

            <div className="container">
            <Header/>
            </div>

            <div className="container">
            <Work/>
            </div>

            <div className="container">
            <Skills/>
            </div>

            <div className="container">
            <Footer/>
            </div>

            </section>
            </>}/>       
      
            <Route path="/smartcontract" element={<Smartcontract/>}/>               
            </Routes>
          </BrowserRouter>

    </div>
  )
}

export default App

