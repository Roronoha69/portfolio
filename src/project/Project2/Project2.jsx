import React from 'react'
import '../Project1/Project1.scss'
import gif from '../../assets/bot.PNG'
import './Project2.scss'
import {AiOutlineRollback} from 'react-icons/ai'

function Project2() {
  return (
    <div className='project pj2'>
 <div className='retour'>
          <a href='/' ><AiOutlineRollback /> Retour</a>
      </div>
        <div className="head">
            <h1>TWITTER BOT</h1>
                <div className='techno'>
            <p>Ruby</p>
          
            
                </div>
        </div>

        <div className='content'>
            

      
        <div className="left-content">
          
      <p>J'ai utilisé <b>l'API Twitter</b> pour construire un bot qui peut <b>twitter, s'abonner, commenter et liker</b> des publications. Tout ça depuis le terminal</p>
            
          
        <ul> 
           <li>Demande d'accès a la <b>Developer Platform</b> de Twitter</li>
           <li>Le bot peut,<b> en temps réel</b>, liker ou follow toutes les personnes qui utilisent le hastag #hello_world</li>
           <li>Il peut suivre des personnes défini dans une liste</li>
           <li>Il peut s'abonner, commenter, tweeter, liker. Dans la limite du raisonnable pour ne pas être bannis</li>
          
           
          
       </ul>

       <div className='link'>
     
       <a href="https://github.com/Roronoha69/Twitter_bot" target="_blank" rel="noopener noreferrer" className='two'>Github</a>
       </div>

        </div>

        <div className="right-content-2">
            <div className="nop">
            <img src={gif} alt="" />
            </div>


        </div>
      </div> 
     </div>
  )
}

export default Project2