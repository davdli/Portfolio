import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components";

const Header = () => {
  return (
    <Container>
      <GlobalStyle />
      <LeftIcons>
        <a href="https://www.linkedin.com/in/davdli/">
          <i class="devicon-github-original"></i>
        </a>
        <a href="https://github.com/davdli">
          <i class="devicon-linkedin-plain"></i>
        </a>
      </LeftIcons>
      <Menu>
        <p><a href="#">Home</a></p>
        <p><a href="#">About</a></p>
        <p><a href="#">Projects</a></p>
        <p><a href="#">Technologies</a></p>
        <p><a href="#">Contact</a></p>
      </Menu>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`

const LeftIcons = styled.div``

const Menu = styled.div`
  display: flex;
  align-itmes: center;
  justify-content: center;
  flex: 1;
  p {
    font-weight: 500;
    padding: 0 16px;
    flex-wrap: nowrap;
  }
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
