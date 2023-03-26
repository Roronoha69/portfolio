import React from 'react'
import './Project1.scss'
import gif from '../../assets/viplist.gif'
import {AiOutlineRollback} from 'react-icons/ai'

function Project1() {
  return (
    <div className='project'>

      <div className='retour'>
          <a href='/' ><AiOutlineRollback /> Retour</a>
      </div>

        <div className="head">
            <h1>VIP CLUB</h1>
                <div className='techno'>
            <p>Javascript</p>
            <p>Sass</p>
            <p>ReactJS</p>
            <p>Solidity</p>
            <p>Hardhat</p>
            <p>EthersJS</p>
                </div>
        </div>

        <div className='content'>
            

      
        <div className="left-content">
          
        C'est une application de  <b> suivi des utilisateurs</b>, pour l'accès a un club. J'ai construit un système pour <b>suivre qui est sur la liste VIP et qui est sur la liste d'attente.</b> Les gens peuvent <b> payer des frais </b>( 0.03 rETH ) pour <b> rejoindre la liste VIP.</b> Les utilisateurs de la liste VIP gagnent une partie des frais <b>en fonction du nombre d'autres personnes</b> figurant sur la liste VIP.
            
          
        <ul> 
           <li>Construction d'un <b>smart contract Solidity</b> et tests sur Remix IDE</li>
           <li>Utilisation <b>d'Hardhat</b> pour créer une app React décentralisé sur le <b>réseau de test Ropsten.</b></li>
           <li>Création d'une interface utilisateur pour <b>interagir avec la blockchain</b> : paiement, partage de gains, obtenir la balance du contrat, suivi des utilisateurs.</li>
           <li>Design Frontend et <b>utilisation de librairies</b> comme Draggable et Typewritter puis déploiement sur Netlify.</li>
           
          
       </ul>

       <div className='link'>
       <a href="https://vip-list-club.netlify.app/" target="_blank" rel="noopener noreferrer">Website</a>
       <a href="https://github.com/Roronoha69/Web3-Vip-List" target="_blank" rel="noopener noreferrer" className='two'>Github</a>
       </div>

        </div>

        <div className="right-content">
            <img src={gif} alt="" />
            <div className="images">

        
 </div>
 <div className="images">

Le plus dur a été d'apprendre le langage Solidity et rédiger le contract pour la blockchain Ethereum. Il fallait réfléchir à la façon la plus simple de d'écrire les fonctions pour ne pas avoir trop de difficulté à lier le smart contract à l'application avec Ethers JS. <a href="https://ropsten.etherscan.io/address/0x4c452505E5Eb671B0e53D7aFd1f8d292101900A3#code">Le contract ici</a>
</div><div className="images">
          
</div>


        </div>
      </div> 
     </div>
  )
}

export default Project1