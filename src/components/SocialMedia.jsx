import React from 'react';
import { AiFillGithub} from 'react-icons/ai';
import { BsLinkedin } from "react-icons/bs";


const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/Roronoha69" target="_blank" rel="noreferrer">
    <div>
      <AiFillGithub />
    </div>
    </a>
    <a href="https://www.linkedin.com/in/justin-mbodje-881243222/" target="_blank" rel="noreferrer">
    <div>
      <BsLinkedin />
    </div>
    </a>
  </div>
);

export default SocialMedia;