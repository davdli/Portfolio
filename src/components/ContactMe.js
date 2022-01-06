import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components";

const ContactMe = () => {
  return (
    <div>
      <Wrap>
        <GlobalStyle />
        <TitleText>
          Contact
        </TitleText>
        <ContactText>
          Looking for a software developer or have any questions?
        </ContactText>
        <ContactButton>
          EMAIL ME
        </ContactButton>
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
  font-size: 28px;
  font-weight: 500;
  color: #171A20;
`

const ContactText = styled.div`
  font-size: 14px;
  font-weight: 400px;
  color: #393C41;
  margin-top: 5px;
`

const ContactButton = styled.div`
  color: #000000;
  font-size: 12px;
  font-weight: 700;
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
`

const GlobalStyle = createGlobalStyle``
