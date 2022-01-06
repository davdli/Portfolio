import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Header = () => {
  return (
    <Container>
      <GlobalStyle />
      <LeftIcons>
        <a href="https://www.linkedin.com/in/davdli/">
          <i id="header-icon" class="devicon-github-original"></i>
        </a>
        <a href="https://github.com/davdli">
          <i id="header-icon" class="devicon-linkedin-plain"></i>
        </a>
      </LeftIcons>
      <Menu>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Technologies</a>
        <a href="#">Contact</a>
      </Menu>
      <RightMenu>
        <a href="#">Resume</a>
        <CustomMenu />
      </RightMenu>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`

const LeftIcons = styled.div`
  .devicon-github-original {
    font-size: 36px;
    color: #393c41;
    margin: 0px 10px 0px 10px;
  }
  .devicon-linkedin-plain {
    font-size: 36px;
    color: #393c41;
    margin: 0px 10px 0px 10px;
  }
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-left: 50px;
  a {
    font-weight: 500;
    padding: 0 16px;
    flex-wrap: nowrap;
  }
  @media(max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 500;
    padding: 0 16px;
    margin-right: 10px;
  }
`

const CustomMenu = styled(MenuRoundedIcon)`
  cursor: pointer;
`

const GlobalStyle = createGlobalStyle``
