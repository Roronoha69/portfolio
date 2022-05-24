import React from 'react'
import styled from 'styled-components';
// import bg from '../img/bg.svg';
import { images } from '../../constants';
import './Smartcontract.scss';

import { Fade } from 'react-reveal';


function Smartcontract() {
    return (
        <HeaderStyled>
            <div className="header-content">
                
            <HeaderContentStyled>
            <Fade left cascade>
            <div className="left-content">
                <div className="left-text-container">
                    <h1>The Kamago Tree <span>Mint Website</span></h1>  
                       <p className="white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestiae minus dicta ipsum atque est qui vel illo magni voluptates esse, e
                        x commodi corporis quos odio libero temporibus, eveniet nisi.
                    </p>
                    <button>The smart contract</button>
                </div>
            </div>
            </Fade>
            <Fade right>
               
            <div className="right-content"> 
          
                <img src={images.vue} alt="" className="phone" />
                
                <img src={images.eth} alt="" className="ring1" />
                <img src={images.eth} alt="" className="message1" />
                <img src={images.eth} alt="" className="message2" />
            </div>
        
            </Fade>
        </HeaderContentStyled>
            </div>
            </HeaderStyled>
        
    )
}

const HeaderStyled = styled.header`
    min-height: 90vh;
    width: 100%;
    
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
    .header-content{
        padding: 0 18rem;
        @media screen and (max-width: 1347px){
            padding: 5rem 14rem;
        }
        @media screen and (max-width: 1186px){
            padding: 5rem 8rem;
        }
        @media screen and (max-width: 990px){
            padding: 5rem 4rem;
        }
    }
`;


const HeaderContentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 3rem;
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }
    .left-content{
        display: flex;
        align-items: center;
        padding-right: 3rem;
        .white{
            color:white;
        }
        h1{
            font-size: 4rem;
            font-weight: 600;
            @media screen and (max-width: 700px){
                font-size: 3rem;
            }
        }
        .white{
            padding: 1.4rem 0;
            line-height: 1.8rem;
        }
    }
    .right-content{
        position: relative;
        display: flex;
        justify-content: center;
        .phone{
            width: 80%;
        }
        .ring1{
            position: absolute;
            bottom: 10%;
            right: 0;
            left: auto;
            animation: move2 20s infinite;
            transition: all .4s ease-in-out;
        }
        .message1{
            position: absolute;
            top: 0;
            right: 0;
            left: auto;
            animation: move 5s infinite;
            transition: all .4s ease-in-out;
        }
        .message2{
            position: absolute;
            bottom: 15%;
            left: 0;
            transition: all .4s ease-in-out;
            animation: move 8s infinite;
            animation-delay: .5s;
            transition: all .4s ease-in-out;
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