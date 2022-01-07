import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import resume from '../assets/Resume.pdf';

const Header = () => {
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
          {/* <a href="#landing">Home</a> */}
          <Link to="landing" href="#" smooth={true} duration={1000}>Home</Link>
          {/* <a href="#about">About</a> */}
          <Link to="about" href="#" smooth={true} duration={1000}>About</Link>
          {/* <a href="#projects">Projects</a> */}
          <Link to="projects" href="#" smooth={true} duration={2000}>Projects</Link>
          {/* <a href="#technologies">Technologies</a> */}
          <Link to="technologies" href="#" smooth={true} duration={3000}>Technologies</Link>
          {/* <a href="#">Technologies</a> */}
          <Link to="technologies" href="#" smooth={true} duration={3000}>Technologies</Link>
          {/* <a href="#contact">Contact</a> */}
          <Link to="contact" href="#" smooth={true} duration={4000}>Contact</Link>
        </Menu>
        <RightMenu>
          <a href={resume} target="_blank" rel="noreferrer">Resume</a>
          <CustomMenu />
        </RightMenu>
      </Fade>
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

const GlobalStyle = createGlobalStyle`
`
