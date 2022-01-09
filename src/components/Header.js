import React, { useState } from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import resume from '../assets/Resume.pdf';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <GlobalStyle />
      <Fade clear>
        <LeftIcons>
          <a href="https://github.com/davdli" target="_blank" rel="noreferrer">
            <i id="header-icon" class="devicon-github-original"></i>
          </a>
          <a href="https://www.linkedin.com/in/davdli/" target="_blank" rel="noreferrer">
            <i id="header-icon" class="devicon-linkedin-plain"></i>
          </a>
        </LeftIcons>
        <Menu>
          <Link to="landing" href="#" smooth={true} duration={1000}>Home</Link>
          <Link to="about" href="#" smooth={true} duration={1000}>About</Link>
          <Link to="projects" href="#" smooth={true} duration={2000}>Projects</Link>
          <Link to="technologies" href="#" smooth={true} duration={3000}>Technologies</Link>
          <Link to="contact" href="#" smooth={true} duration={4000}>Contact</Link>
        </Menu>
        <RightMenu>
          <a href={resume} target="_blank" rel="noreferrer">Resume</a>
          <CustomMenu onClick={() => setBurgerStatus(true)}/>
        </RightMenu>
      </Fade>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)}/>
        </CloseWrapper>
        <li><a href="#landing" onClick={() => setBurgerStatus(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setBurgerStatus(false)}>About</a></li>
        <li><a href="#projects" onClick={() => setBurgerStatus(false)}>Projects</a></li>
        <li><a href="#technologies" onClick={() => setBurgerStatus(false)}>Technologies</a></li>
        <li><a href="#contact" onClick={() => setBurgerStatus(false)}>Contact</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  z-index: 1;
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

const BurgerNav = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  height: 100vh;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.5s;
  li {
    padding: 15px 0px;
    a {
      font-weight: 500;
    }
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const GlobalStyle = createGlobalStyle`
`
