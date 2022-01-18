import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components";
import { Link } from 'react-scroll';
import resume from '../assets/David_Li_Resume.pdf';

const Footer = () => {
  return (
    <div>
      <Wrap>
        <GlobalStyle />
        <FirstRow>
          <Link to="landing" href="#" smooth={true} duration={4000} className="footer-link">Home</Link>
          <Link to="about" href="#" smooth={true} duration={3000} className="footer-link">About</Link>
          <Link to="projects" href="#" smooth={true} duration={2000} className="footer-link">Projects</Link>
          <Link to="technologies" href="#" smooth={true} duration={1000} className="footer-link">Technologies</Link>
          <Link to="contact" href="#" smooth={true} duration={1000} className="footer-link">Contact</Link>
          <a href={resume} target="_blank" rel="noreferrer" className="footer-link">Resume</a>
        </FirstRow>
        <SecondRow>
          <FooterText>
            David Li © 2022
          </FooterText>
          <Icons>
            <a href="https://github.com/davdli" target="_blank" rel="noreferrer">
              <i class="devicon-github-original"></i>
            </a>
            <a href="https://www.linkedin.com/in/davdli/" target="_blank" rel="noreferrer">
              <i class="devicon-linkedin-plain"></i>
            </a>
          </Icons>
        </SecondRow>
      </Wrap>
    </div>
  )
}

export default Footer;

const Wrap = styled.div`
  width: 100vw;
  height: 20vh;
  background-color: #393C41;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FooterText = styled.div`
  color: #F4F4F4;
  font-size: 14px;
  margin: 0px 10px 0px 10px;
`

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 15px 0px;
`

const SecondRow = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 0px 0px 0px;
  margin: 15px 0px 0px 0px;
  border-top: 2px solid #444;
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
  .footer-link {
    color: #F4F4F4;
    font-size: 14px;
    margin: 0px 10px 0px 10px;
    @media (max-width: 390px) {
      margin: 0px 5px 0px 5px;
    }
  }
`
