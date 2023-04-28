import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

import Orkyn from "../../assets/orkyn.png"
import Cma from "../../assets/cma.png"
import Ifaci from "../../assets/ifaci.png"
import Eclaims from "../../assets/cbp.jpg"



const Work2 = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    //const query = '*[_type == "works"]';

    // client.fetch(query).then((data) => {
    //   setWorks(data);
    //   setFilterWork(data);
    // });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text" id="xprience">Les <span>projets</span> réalisés en</h2>
      <h2 className="head-text" ><span>périodes de stages</span> <span></span></h2>


      <div className="app__work-filter">
        {[ 'Blockchain', 'Backend', 'Frontend', 'Full stack', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
         <a href="">
          <div className="app__work-item app__flex" key={1}>
            <div
              className="app__work-img app__flex"
            >
            <img src={Cma} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href="">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    Détails
                  </motion.div>
                </a>
                
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">Korsano</h4>
              <p className="p-text" style={{ marginTop: 10 }}>Super projet </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">Seum</p>
              </div>
            </div>
          </div>
          </a>
     
         <a href="">
          <div className="app__work-item app__flex" key={1}>
            <div
              className="app__work-img app__flex"
            >
            <img src={Orkyn} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href="">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    Détails
                  </motion.div>
                </a>
                
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">Korsano</h4>
              <p className="p-text" style={{ marginTop: 10 }}>Super projet </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">Seum</p>
              </div>
            </div>
          </div>
          </a>
     
     
         <a href="">
          <div className="app__work-item app__flex" key={1}>
            <div
              className="app__work-img app__flex"
            >
            <img src={Ifaci} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href="">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    Détails
                  </motion.div>
                </a>
                
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">Korsano</h4>
              <p className="p-text" style={{ marginTop: 10 }}>Super projet </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">Seum</p>
              </div>
            </div>
          </div>
          </a>
   
     
         <a href="">
          <div className="app__work-item app__flex" key={1}>
            <div
              className="app__work-img app__flex"
            >
            <img src={Eclaims} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href="">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    Détails
                  </motion.div>
                </a>
                
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">Korsano</h4>
              <p className="p-text" style={{ marginTop: 10 }}>Super projet </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">Seum</p>
              </div>
            </div>
          </div>
          </a>
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work2, 'app__works'),
  'work',
  
);