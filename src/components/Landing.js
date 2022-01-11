import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components";
import IcelandImage from '../assets/Iceland.jpeg';
import DownArrow from '../assets/down-arrow.svg';
import Header from './Header';
import Fade from 'react-reveal/Fade';
import resume from '../assets/Resume.pdf';

const Landing = () => {
  return (
    <Wrap id='landing'>
      <GlobalStyle />
      <Header />
      <Fade bottom>
        <ItemText>
          <h1 id='landing-header1'>David Li</h1>
          <h2 id='landing-header2'>Software Engineer</h2>
        </ItemText>
      </Fade>
      <Buttons>
        <ButtonGroup>
          <Fade left>
            <a href={resume} target="_blank" rel="noreferrer" id="resume-link">RESUME</a>
          </Fade>
          <Fade right>
            <a href="mailto:davdli2323@gmail.com" target="_blank" rel="noreferrer" id="contact-link">CONTACT</a>
          </Fade>
        </ButtonGroup>
          <img src={DownArrow} alt='arrow' id='landing-img'/>
      </Buttons>
    </Wrap>
  )
}

export default Landing;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${IcelandImage});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const ItemText = styled.div`
  padding-top: 30vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Buttons = styled.div``

const GlobalStyle = createGlobalStyle`
  #landing-header1 {
    font-size: 48px;
    font-weight: 500;
    color: #181B21;
    margin-bottom: 10px;
  }
  #landing-header2 {
    font-size: 18px;
    font-weight: 400;
    color: #181B21;
  }
  #landing-img {
    height: 48px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
  }
  #resume-link {
    color: white;
    font-size: 16;
    font-weight: 500;
    background-color: #171A20CC;
    height: 40px;
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opactiy: 0.75;
    cursor: pointer;
    margin: 10px;
  }
  #contact-link {
    color: #393C41;
    font-size: 16;
    font-weight: 500;
    background-color: #FFFFFFA6;
    height: 40px;
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opactiy: 0.75;
    cursor: pointer;
    margin: 10px;
  }
`;
