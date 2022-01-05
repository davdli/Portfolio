import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components";
import PeachStudioDemo from '../assets/PeachStudioDemo1.gif';

const Projects = () => {
  return (
    <div>
      <Wrap>
        <GlobalStyle />
        <ProjectsTitle>
          <h2 id='projects-header'>Projects</h2>
        </ProjectsTitle>
        <ProjectsGroup>
          <ProjectInfo>
            <ProjectImg>
            <img src={PeachStudioDemo} alt='project' id='project-img' />
            </ProjectImg>
            <ProjectText>
              <h4 id='project-title'>Peach Studio</h4>
              <p id='project-description'>An e-commerce website specializing in furniture to make your home .... sweet home</p>
            </ProjectText>
          </ProjectInfo>
        </ProjectsGroup>
      </Wrap>
    </div>
  )
}

export default Projects;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
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
  margin-right: 65px;
`

const ProjectText = styled.div`
  text-align: left;
  margin-left: 65px;
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
    padding: 32px 0px 8px;
  }
  #project-description {
    color: #E2E4E4;
    font-size: 14px;
    padding: 0px 0px 16px;
    width: 30vw;
  }
`
