import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components";
import ProfilePicture from '../assets/profile-picture.png';

const AboutMe = () => {
  return (
    <div>
      <Wrap>
        <GlobalStyle />
        <TitleText>
          <h2 id='about-header'>About Me</h2>
        </TitleText>
        <AboutGroup>
          <AboutImg>
            <img src={ProfilePicture} alt='profile' id='about-img' />
          </AboutImg>
          <AboutText>
            <p id='about-text'>Hi, I'm David and a software developer from New York City!
              Growing up, I kept seeing the amazing things that were being built using programming.
              I wanted to learn how to build things that would mean something to me and could solve a problem.
              Now it has also become a tool for me to express the creative and analytical qualities in myself.
            </p>
            <br />
            <p id='about-text'>I am a recent graduate of Binghamton University with a degree in economics and Fullstack Academy with a certification in full-stack web development.
              Over the past year, I have been building applications using JavaScript, Node.js, React, Express, PostgreSQL, and other technologies.
              As the nature of technology continues to evolve, I strive to expand my skillset and keep up with new languages and frameworks.
            </p>
            <br />
            <p id='about-text'>My goal is to be in the forefront of innovation and contribute to tackling the problems we have in our society.
              I hope to continue to work on projects that can be impactful and produce code that has a postive change.</p>
          </AboutText>
        </AboutGroup>
      </Wrap>
    </div>
  )
}

export default AboutMe;

const Wrap = styled.div`
  width: 100vw;
  height: 98vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
`

const TitleText = styled.div`
  margin-top: 40px;
`

const AboutGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 85px;
`
const AboutImg = styled.div``

const AboutText = styled.div``

const GlobalStyle = createGlobalStyle`
  #about-header {
    font-size: 28px;
    font-weight: 500;
    color: #FFFFFF;
  }
  #about-text {
    color: #E2E4E4;
    font-size: 14px;
    margin-left: 130px;
    width: 40vw;
  }
  #about-img {
    height: 500px;
    width: 250px;
    margin-right: 130px;
  }
`
