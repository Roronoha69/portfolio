import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

import { images } from '../../constants';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [works, setWorks] = useState([]);

  useEffect(() => {
     const query = '*[_type == "experiences"]';
     const skillsQuery = '*[_type == "skills"]';

    //  client.fetch(query).then((data) => {
    //    setExperiences(data);
    //  });

      // client.fetch(skillsQuery).then((data) => {
      //   setSkills(data);
      // });


    setExperiences(
      [ {year: 'Juin 2022', name: 'Projet personel', company: 'Korsano', desc:"Projet en cours, qui consiste à automatiser une prestation de service dans la nutrition. Cela me permet surtout de me challenger et me motive a apprendre de nouvelles technos" },
      {year: 'Avril-mai 2022', name: 'Freelance développeur blockchain', company: 'Kamago tree world', desc:"J'ai coder un smart contract et une application décentralisée pour un mint"} ]
    );

    setSkills([
      {name: 'react', bgColor: '', icon: images.react},
      {name: 'node', bgColor: '', icon: images.node},
      
      {name: 'javascript', bgColor: '', icon: images.javascript},
      {name: 'RoR', bgColor: '', icon: images.rails},
   
    ])

    
//     setWorks(
//      {working:  [ 
//       {name: 'salut', company: 'yoooo', desc:'pas ouf ouf'} ,
//       {name: 'enchanté', company: 'yoooo', desc:'pas ouf ouf'}  
// ] 
//     });



      setTimeout(console.log(skills), 10000)
    console.log(images.react)
    console.log("################");
    console.log(experiences);
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>
      <img src={images.react} alt="" />

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
              
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={experience.name}
                      key={experience.name}
                    >
                      <h4 className="bold-text">{experience.name}</h4>
                      <p className="p-text">{experience.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={experience.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {experience.desc}
                    </ReactTooltip>
                  </>
               
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);