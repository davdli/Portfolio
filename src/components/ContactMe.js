import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components";
import Fade from 'react-reveal/Fade';

const ContactMe = () => {
  return (
    <div>
      <Wrap id="contact">
        <GlobalStyle />
        <Fade bottom>
          <TitleText>
            Contact
          </TitleText>
        </Fade>
        <Fade clear>
          <ContactText>
            Interested in working together or have any questions?
          </ContactText>
          <a href="mailto:davdli2323@gmail.com" target="_blank" rel="noreferrer" id="email-link">CONTACT ME</a>
        </Fade>
      </Wrap>
    </div>
  )
}

export default ContactMe;

const Wrap = styled.div`
  width: 100vw;
  height: 30vh;
  background-color: #F4F4F4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TitleText = styled.div`
  font-size: 32px;
  font-weight: 500;
  color: #171A20;
`

const ContactText = styled.div`
  font-size: 16px;
  font-weight: 400px;
  color: #393C41;
  margin-top: 5px;
`

const GlobalStyle = createGlobalStyle`
  #email-link {
    color: #000000;
    font-size: 14px;
    font-weight: 500;
    background-color: transparent;
    height: 40px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border-style: solid;
    border-width: 2px;
    border-color: #000000;
    cursor: pointer;
    margin-top: 15px;
  }
  #email-link: hover {
    color: #F4F4F4;
    background-color: #000000;
  }
`
