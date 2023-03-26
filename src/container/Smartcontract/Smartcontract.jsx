import React from 'react'
import styled from 'styled-components';
// import bg from '../img/bg.svg';
import { images } from '../../constants';

 import ring1 from '../../assets/ring_orange.svg';
import message1 from '../../assets/message_pink.svg';
import message2 from '../../assets/message_blue.svg';
import './Smartcontract.scss';
import { Fade } from 'react-reveal';

{/* */}


function Smartcontract() {





    return (

        <div className='bg-project'>
        <HeaderStyled>
            <div className="header-content">
                
            <HeaderContentStyled>
            <Fade left cascade>
            <div className="left-content">
                <div className="left-text-container">
                    <h2>Projet : VIP Club</h2>  
                       <p className="white">
                       C'est une application de  <b> suivi des utilisateurs</b>, pour l'accès a un club. J'ai construit un système pour <b>suivre qui est sur la liste VIP et qui est sur la liste d'attente.</b> Les gens peuvent <b> payer des frais </b>( 0.03 rETH ) pour <b> rejoindre la liste VIP.</b> Les utilisateurs de la liste VIP gagnent une partie des frais <b>en fonction du nombre d'autres personnes</b> figurant sur la liste VIP.
                       
                      
                    </p>
                    <button>Website</button>
                    <button className='two'>Github</button>
                </div>
            </div>
            </Fade>

            <Fade right>
               
            <div className="right-content"> 
          
            
                <img src={images.vue} alt="" className="phone" />
               
                <img src={ring1} alt="" className="ring1" />
                <img src={message1} alt="" className="message1" />
                <img src={message2} alt="" className="message2" />

                <p className="white li-text">
<ul> 
           <li>Construction d'un <b>smart contract Solidity</b> à la main.</li>
           <li>Utilisisation <b>d'Hardhat</b> pour créer une app React décentralisé sur le <b>réseau de test Ropsten.</b></li>
           <li>Création d'une interface utilisateur pour <b>interagir avec la blockchain</b> : paiement, partage de gains, obtenir la balance du contrat, suivi des utilisateurs.</li>
           <li>Design Frontend et <b>utilistation de librairies</b> comme Draggable et Typewritter puis deploiement sur Netlify.</li>
           <li>utilisation de : <b>Solidity, Javascript, Remix IDE, Metamask, Hardhat, Ethers JS, Html, Sass.</b></li>
          
       </ul>
    </p> 
                  
            </div>
        
            </Fade>
        </HeaderContentStyled>
            </div>
            </HeaderStyled>
        </div>
    )
}

const HeaderStyled = styled.header`
    min-height: 100vh;
    width: 100%;
    
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
    .header-content{
        
        padding: 0 5rem;
        @media screen and (max-width: 1347px){
            padding: 5rem 4rem;
        }
        @media screen and (max-width: 1186px){
            padding: 5rem 3rem;
        }
        @media screen and (max-width: 990px){
            padding: 5rem 2rem;
        }
    }
`;


const HeaderContentStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 5rem;

    @media screen and (max-width: 1200px){
        flex-wrap: wrap;
    }


    .left-content{
        display: flex;
        align-items: center;
        padding-right: 2rem;
       width: 700px;
        
        .white{
        color:black;
         
        }
        
        h2{
            font-size: 2.5rem;
            font-weight: 600;

            @media screen and (max-width: 700px){
                font-size: 1.7rem;
            }
        }
        .white{
            padding: 1.4rem 0;
            line-height: 2.1rem;
            font-size: 1.2rem;
        }
    }

    .right-content{
        
        display: flex;
        justify-content: center;

        @media screen and (min-width: 1200px){
            margin-left: 7rem; 
        }
        @media screen and (max-width: 1200px){
            margin-top: 15rem; 
            font-size: 0.8rem;
        }

       
        width: 800px;
        
        
        .phone{
            width:   400px;
            position: absolute;
            top: 5%;
        }
        .ring1{
            width: 80px;
            position: absolute;
            top: 30%;
            right: 25%;
            left: auto;
            animation: move2 6s infinite;
            transition: all .4s ease-in-out;
        }
        .message1{
            width: 80px;
            position: absolute;
            top: 0%;
            right: 25%;
            left: auto;
            animation: move 10s infinite;
            transition: all .9s ease-in-out;
        }
        .message2{
            width: 80px;
            position: absolute;
            top: 30%;
            left: 25%;
            transition: all .15s ease-in-out;
            animation: move 8s infinite;
            animation-delay: .5s;
            transition: all .4s ease-in-out;
        }

        .li-text{
            position: absolute;
            bottom: 0%
            
            
        }
    }
    //Header Animations
    .message1{
        @keyframes move{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
        @keyframes move2{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
    }
`;


export default Smartcontract;