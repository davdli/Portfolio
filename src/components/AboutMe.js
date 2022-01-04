import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components";
import ProfilePicture from '../assets/profile-picture.png';

const AboutMe = () => {
  return (
    <div>
      <Wrap>
        <GlobalStyle />
        <ItemText>
          <h2 id='about-header'>About Me</h2>
        </ItemText>
        <AboutGroup>
          <AboutImg>
            <img src={ProfilePicture} alt='profile' id='about-img' />
          </AboutImg>
        </AboutGroup>
      </Wrap>
    </div>
  )
}

export default AboutMe;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
`

const ItemText = styled.div`
  margin-top: 40px;
`

const AboutGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 85px;
`
const AboutImg = styled.div``

const GlobalStyle = createGlobalStyle`
  #about-header {
    font-size: 28px;
    font-weight: 500;
    color: #FFFFFF;
  }
  p {
    color: #E2E4E4;
    font-size: 14px;
    margin-left: 130px;
    width: 30vw;
  }
  #about-img {
    height: 500px;
    width: 250px;
    margin-right: 130px;
  }
`;
