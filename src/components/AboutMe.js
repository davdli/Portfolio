import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components";
import ProfilePicture from '../assets/Profile-Picture.jpg';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
  return (
    <div>
      <Wrap id='about'>
        <GlobalStyle />
        <Fade bottom>
          <TitleText>
            <h2 id='about-header'>About Me</h2>
          </TitleText>
        </Fade>
        <Fade clear>
          <AboutGroup>
            <AboutImg>
              <img src={ProfilePicture} alt='profile' id='about-img' />
            </AboutImg>
            <AboutText>
              <p id='about-text'>Hi, I'm David and a software engineer from New York City!
                Growing up, I kept seeing the amazing things that were being built using programming.
                I wanted to learn how to build things that would mean something to me and could solve a problem.
                Now it has also become a tool to express the creative and analytical qualities in myself.
              </p>
              <br />
              <p id='about-text'>I am a graduate of Fullstack Academy with a certificate in full-stack web development and Binghamton University with a degree in economics.
                Over the past year, I have been working on applications focusing on continuous improvement when it comes to design, functionality, and growth.
                Although I'm confident in my knowledge and abilities, I know there is always more to learn.
              </p>
              <br />
              <p id='about-text'>My goal is to be in the forefront of innovation and contribute to tackling the problems we have in our society.
                I hope to continue to work on projects that can be impactful and produce code that has a positive change.
                In my free time, I enjoy weightlifting, playing the piano, snowboarding, basketball, and fishing!
              </p>
            </AboutText>
          </AboutGroup>
        </Fade>
      </Wrap>
    </div>
  )
}

export default AboutMe;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
`

const TitleText = styled.div`
  margin-top: 35px;
`

const AboutGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 85px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const AboutImg = styled.div`
`

const AboutText = styled.div`
  text-align: left;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 80px;
  }
`

const GlobalStyle = createGlobalStyle`
  #about-header {
    font-size: 32px;
    font-weight: 500;
    color: #FFFFFF;
  }
  #about-text {
    color: #E2E4E4;
    font-size: 16px;
    font-weight: 400;
    width: 50vw;
    margin-right: 70px;
    @media (max-width: 768px) {
      width: 80%;
      margin-left: 40px;
    }
  }
  #about-img {
    width: 65%;
    margin-right: 0px;
  }
`
