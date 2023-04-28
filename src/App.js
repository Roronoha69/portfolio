import React from 'react'

import {About, Footer, Header, Skills, Testimonial, Work, Work2} from './container'
import {Project1, Project2, Project3, Project4, Cv } from './project' 

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
            <Work2/>
            </div>
            <div className="container">
            <Skills/>
            </div>

            <div className="container">
            <Footer/>
            </div>

            </section>
            </>}/>       
      
             
            <Route path="/vip-club" element={<Project1/>}/>   
            <Route path="/twitter-bot" element={<Project2/>}/> 
            <Route path="/zombiland-punk" element={<Project3/>}/> 
            <Route path="/mates-makings" element={<Project4/>}/>
            <Route path="/cv" element={<Cv/>}/>   
   
            
            </Routes>
          </BrowserRouter>

    </div>
  )
}

export default App

