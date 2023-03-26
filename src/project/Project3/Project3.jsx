import React from 'react'
import '../Project1/Project1.scss'
import gif from '../../assets/gif-punk.gif'
//import logo from'../../assets/logoZ.png'
import './Project3.scss'
import {AiOutlineRollback} from 'react-icons/ai'

function Project3() {
  return (
    <div className='project pj3'>


<div className='retour'>
          <a href='/' ><AiOutlineRollback /> Retour</a>
      </div>
        <div className="head">
            <h1>ZOMBILAND PUNK</h1>
                <div className='techno'>
            <p>Javascript</p>
            <p>Sass</p>
            <p>ReactJS</p>
            <p>Photoshop</p>
                </div>
        </div>

        <div className='content'>
            

      
        <div className="left-content">
          <b></b>
      <p>C'est un <b> jeu de scénario</b> dans lequel vous incarnez 2 personnages qui tentent de<b> survivre à une apocalypse  zombie.</b></p>
      <p>"En 2033, le<b> mystérieux</b> variant<b> Alpha-7 </b>du virus de la <b>Covid19</b> à transformer des millions de personnes en zombies. <b>Le plus grand espoir</b> de l'humanité consistait en une équipe de scientifique cherchant un vaccin, mais ceux-ci ont disparu dans des<b> circonstances encore inconnues ...</b>"</p>            
          
        <ul> 
           <li>Design général de l'app, choix des musiques scénario, etc.</li>
           <li>Utilisation de librairies complexe à maitriser comme React beautiful DnB</li>
           <li>Utilisation des hooks React pur la création de de mini-jeu : Snake, quizz, objet à trouver, devinette, etc ...</li>
           <li>Timer et fonction pour gérer les "game over"</li>
           
                
       </ul>

       <div className='link'>
       <a href="https://zombiland-punk.netlify.app" target="_blank" rel="noopener noreferrer">Website</a>
       <a href="https://github.com/Roronoha69/zombies" target="_blank" rel="noopener noreferrer" className='two'>Github</a>
       </div>

        </div>

        <div className="right-content">
            <img src={gif} alt="" />
            <div className="images">

        
 </div>
 <div className="images">

 <p> Le plus gros problème que j'ai rencontré était de mettre en place un drag and drop pour mettre des objets dans l'inventaire.</p>

<p> J'ai pensé à la librairie Dragabble mais elle ne sufisait pas à elle seule</p>

<p> Heureusement, j'ai vu qu'il existait plusieurs librairies qui permettaient de rendre un objet droppable (drag and drop). La plupart ne correspondaient pas à ce que je voulais faire : prendre un objet en position absolute vers.</p>

<p>J'en ai finalement trouvé une qui fonctionnait en utilisant les innerRef pour que l'appli sache quel élément HTML rendre pendant le drag ( handle ) et après le drop.</p> 
</div><div className="images">
          
</div>


        </div>
      </div> 
     </div>
  )
}

export default Project3