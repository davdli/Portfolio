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
      </Menu>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-tems: center;
  padding: 0 20px;
`

const LeftIcons = styled.div``

const Menu = styled.div``

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
  a {
    text-decoration: none;
  }
`
