import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components";
import TagdDemo from '../assets/TagdHostDemo2.gif';
import PeachStudioDemo from '../assets/PeachStudioDemo1.gif';
import ForzaDemo from '../assets/ForzaDemo1.gif';
import WhiteCloudDemo from '../assets/WhiteCloudDemo.gif';
import Fade from 'react-reveal/Fade';


const Projects = () => {
  return (
    <div>
      <Wrap id='projects'>
        <GlobalStyle />
        <Fade bottom>
          <ProjectsTitle>
            <h2 id='projects-header'>Projects</h2>
          </ProjectsTitle>
        </Fade>
        <ProjectsGroup>
          <ProjectInfo>
            <Fade bottom>
              <ProjectImg>
              <img src={TagdDemo} alt='Tagd' id='tagd-img' />
              </ProjectImg>
            </Fade>
            <Fade bottom>
              <ProjectText>
                <h4 id='project-title'>Tagd</h4>
                <p id='project-description'>Augmented reality mobile application targeted for Airbnb hosts to to help their guests access and locate necessities in and around their property.</p>
                <ButtonGroup>
                  <a href='https://github.com/davdli/Tagd_Frontend' target="_blank" rel="noreferrer" className="github-link">GitHub</a>
                  <a href='https://github.com/davdli/Tagd_Backend' target="_blank" rel="noreferrer" className="live-link">Set Up</a>
                </ButtonGroup>
              </ProjectText>
            </Fade>
          </ProjectInfo>

          <ProjectInfo>
            <Fade bottom>
              <ProjectText>
                <h4 id='left-title'>Peach Studio</h4>
                <p id='left-description'>An e-commerce website specializing in furniture to make your home .... sweet home.</p>
                <ButtonGroup id='left-button'>
                  <a href='https://github.com/davdli/Peach_Studio' target="_blank" rel="noreferrer" className="github-link">GitHub</a>
                  <a href='http://peach-studio.herokuapp.com/' target="_blank" rel="noreferrer" className="live-link">Live</a>
                </ButtonGroup>
              </ProjectText>
            </Fade>
            <Fade bottom>
              <ProjectImg>
              <img src={PeachStudioDemo} alt='peachStudio' id='project-img' />
              </ProjectImg>
            </Fade>
          </ProjectInfo>

          <ProjectInfo>
            <Fade bottom>
              <ProjectImg>
              <img src={ForzaDemo} alt='forza' id='project-img' />
              </ProjectImg>
            </Fade>
            <Fade bottom>
              <ProjectText>
                <h4 id='project-title'>Forza</h4>
                <p id='project-description'>Mobile and web application where users can track their strength progress at the gym using speech recognition.</p>
                <ButtonGroup>
                  <a href='https://github.com/davdli/Forza' target="_blank" rel="noreferrer" className="github-link">GitHub</a>
                  <a href='https://forza.netlify.app/' target="_blank" rel="noreferrer" className="live-link">Live</a>
                </ButtonGroup>
              </ProjectText>
            </Fade>
          </ProjectInfo>

          <ProjectInfo>
            <Fade bottom>
              <ProjectText>
                <h4 id='left-title'>White Cloud</h4>
                <p id='left-description'>Platform that will provide users the opportunity to discover music and learn and play the piano instantly.</p>
                <ButtonGroup id='left-button'>
                  <a href='https://github.com/davdli/White_Cloud' target="_blank" rel="noreferrer" className="github-link">Coming Soon</a>
                </ButtonGroup>
              </ProjectText>
            </Fade>
            <Fade bottom>
              <ProjectImg>
              <img src={WhiteCloudDemo} alt='whiteCloud' id='project-img' />
              </ProjectImg>
            </Fade>
          </ProjectInfo>
        </ProjectsGroup>
      </Wrap>
    </div>
  )
}

export default Projects;

const Wrap = styled.div`
  width: 100vw;
  height: 188vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
`

const ProjectsTitle = styled.div``

const ProjectsGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 85px;
`

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const ProjectImg = styled.div`
  margin: 0px 70px 0px 70px;
`

const ProjectText = styled.div`
  text-align: left;
  margin: 0px 70px 0px 70px;
`

const ButtonGroup = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  color: #F5F5F5;
  font-size: 12px;
  height: 35px;
  width: 195px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border-style: solid;
  border-width: 2px;
  border-color: #F5F5F5;
  cursor: pointer;
  margin: 5px;
`

const RightButton = styled(LeftButton)`
  color: #D0D1D2;
  border-color: #393C41;
`

const GlobalStyle = createGlobalStyle`
  #projects-header {
    font-size: 28px;
    font-weight: 500;
    color: #FFFFFF;
  }
  #project-img {
    width: 95%;
  }
  #project-title {
    color: white;
    font: 20px;
    padding: 0px 0px 16px;
  }
  #project-description {
    color: #E2E4E4;
    font-size: 14px;
    padding: 0px 0px 16px;
    width: 30vw;
  }
  #tagd-img {
    width: 25%;
  }
  #left-title {
    color: white;
    font: 20px;
    padding: 0px 0px 16px 16px;
  }
  #left-description {
    color: #E2E4E4;
    font-size: 14px;
    padding: 0px 0px 16px 16px;
    width: 30vw;
  }
  #left-button {
    padding: 0px 0px 12px 12px;
  }
  .github-link {
    color: #F5F5F5;
    font-size: 12px;
    height: 35px;
    width: 195px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border-style: solid;
    border-width: 2px;
    border-color: #F5F5F5;
    cursor: pointer;
    margin: 5px;
  }
  .live-link {
    color: #D0D1D2;
    font-size: 12px;
    height: 35px;
    width: 195px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border-style: solid;
    border-width: 2px;
    border-color: #393C41;
    cursor: pointer;
    margin: 5px;
  }
`
