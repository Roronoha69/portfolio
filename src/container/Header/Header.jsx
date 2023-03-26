import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom";
import styled from 'styled-components';





const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-150, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">

        <div className="badge-cmp app__flex">
          <span></span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text"></p>
            <h1 className="head-text">Justin Mbodje</h1>
            <p>Développeur</p>
            <p className="p-text">Étudiant en informatique. Je cherche à approfondir ma compréhension de divers domaines de technologies et de développement de produits</p>
          </div>
        </div>
        
        {/* 
        <div className="tag-cmp app__flex width-fix">
          <p className="p-text typetext">
            J'aime flamber 
          <Typewriter
            options={{
              strings: ['React JS', 'Html', 'Sass', 'Javascript', 'Rails', 'Hardhat'],
              autoStart: true,
              loop: true,
              skipAddStyles: true,
            }} />
            </p>
          
        </div>
        */}
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
   
      
      <img src={images.profile} alt="profile_bg" class="profile_effect"/>
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
     <a href="#contact" key={`circle-1`}>
        <div className="circle-cmp app__flex hovicon effect-8 misterOne" key={`circle-1`}>
         
          <img src={images.mobile} alt="profile_bg" />
        </div>
        </a>
        
        <a href="https://chat-app-justin.netlify.app/" target="_blank"_ rel="noreferrer">
        <div className="circle-cmp app__flex misterTwo hovicon effect-8" key={`circle-2`}>
         
         <img src={images.nftlogo} alt="profile_bg" />
       </div>
       </a>
       
       <a href='/cv' target="_blank"_ rel="noreferrer">
       <div className="circle-cmp app__flex hovicon effect-8 misterThree" key={`circle-3`}>
         
         <img src={images.notion} alt="profile_bg " />
       </div>
       </a>

    </motion.div>
  </div>
);

console.log(document.querySelector('profile_effect'));

export default AppWrap(Header, 'home');