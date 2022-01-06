import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components";

const Footer = () => {
  return (
    <div>
      <Wrap>
        <GlobalStyle />
        <FooterText>
          David Li © 2022
        </FooterText>
        <Icons>
            <i class="devicon-github-original"></i>
            <i class="devicon-linkedin-plain"></i>
        </Icons>
      </Wrap>
    </div>
  )
}

export default Footer;

const Wrap = styled.div`
  width: 100vw;
  height: 13vh;
  background-color: #393C41;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const FooterText = styled.div`
  color: #F4F4F4;
  font-size: 13px;
  margin: 0px 10px 0px 10px;
`

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const GlobalStyle = createGlobalStyle`
  .devicon-github-original {
    font-size: 36px;
    color: #F4F4F4;
    margin: 0px 10px 0px 10px;
  }
  .devicon-linkedin-plain {
    font-size: 36px;
    color: #F4F4F4;
    margin: 0px 10px 0px 10px;
  }
`
