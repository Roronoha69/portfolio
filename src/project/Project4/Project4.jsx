import React from 'react'
import '../Project1/Project1.scss'
import gif from '../../assets/mates1.gif'
import gif2 from '../../assets/mates2.gif'
import './Project4.scss'
import {AiOutlineRollback} from 'react-icons/ai'


function Project4() {
  return (
    <div className='project pj4'>


<div className='retour'>
          <a href='/' ><AiOutlineRollback /> Retour</a>
      </div>
        <div className="head">
            <h1>MATES MAKING</h1>
                <div className='techno'>
          
            <p>Css</p>
            <p>Ruby</p>
            <p>Rails</p>
            <p>JavascriptDom</p>
            <p>AmazonAWS</p>
            <p>PostgreSQL</p>
           
                </div>
        </div>

        <div className='content'>
            

      
        <div className="left-content">
          
<p>Mates Makings est une plateforme pour trouver des partenaires avec qui jouer au jeux-vidéo. L'utilisateur peut rejoindre ou créer des événements et des communautés, liée aux jeux disponibles sur cette application.</p>            
          
        <ul> 

        
        
        
       

        <li>Travail en équipe de 5 et utilisation de Git Flow</li>
        <li>Création d'une base de donnée pour les profils, les jeux, les événements et les communautés</li>
        <li>Création d'un système de notation pour quel les joueurs puissent se donner des notes en fonction du critère qu'ils veulent</li>
        <li>Design frontend et déploiement sur Heroku</li>
        
           
          
       </ul>

       <div className='link'>
       <a href="https://vip-list-club.netlify.app/" target="_blank" rel="noopener noreferrer">Website</a>
       <a href="https://github.com/RomualdPetit/MatesMakings" target="_blank" rel="noopener noreferrer" className='two'>Github</a>
       </div>

        </div>

        <div className="right-content-2">
            <img src={gif} alt="" />
            <div className="images">
            <img src={gif2} alt="" />
        
 </div>
 <div className="images">
</div><div className="images">
          
</div>


        </div>
      </div> 
     </div>
  )
}

export default Project4