import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components";
import Fade from 'react-reveal/Fade';

const Tech = () => {
  return (
    <div>
      <Wrap id='technologies'>
        <GlobalStyle />
        <Fade bottom>
          <TitleText>
            <h2 id='tech-header'>Technologies</h2>
          </TitleText>
        </Fade>

        <Fade clear>
          <TechGroup>
            <TechIcon className='tech-icon'>
                <TechName>
                  JavaScript
                </TechName>
                <i class="devicon-javascript-plain colored"></i>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <TechName>
                  HTML5
                </TechName>
                <i class="devicon-html5-plain colored"></i>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <TechName>
                  CSS3
                </TechName>
                <i class="devicon-css3-plain colored"></i>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <TechName>
                  Python
                </TechName>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" class="devicon-python-plain" alt="python" />
            </TechIcon>
          </TechGroup>
        </Fade>

        <Fade clear>
          <TechGroup>
            <TechIcon className='tech-icon'>
                <TechName>
                  Node.js
                </TechName>
                <i class="devicon-nodejs-plain colored"></i>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <TechName>
                  React
                </TechName>
                <i class="devicon-react-original colored"></i>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <TechName>
                  Express
                </TechName>
                <i class="devicon-express-original colored"></i>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <TechName>
                  PostgreSQL
                </TechName>
                <i class="devicon-postgresql-plain colored"></i>
            </TechIcon>
          </TechGroup>
        </Fade>

        <Fade clear>
          <TechGroup>
            <TechIcon className='tech-icon'>
                <TechName>
                  Sequelize
                </TechName>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" class="devicon-sequelize-plain" alt="sequelize"/>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <TechName>
                  Redux
                </TechName>
                <i class="devicon-redux-original colored"></i>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <TechName>
                  Material UI
                </TechName>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" class="devicon-materialui-plain" alt="materialui" />
            </TechIcon>
            <TechIcon className='tech-icon'>
                <TechName>
                  Firebase
                </TechName>
                <i class="devicon-firebase-plain colored"></i>
            </TechIcon>
          </TechGroup>
        </Fade>

        <Fade clear>
          <TechGroup>
            <TechIcon className='tech-icon'>
                <TechName>
                  Heroku
                </TechName>
                <i class="devicon-heroku-plain colored"></i>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <TechName>
                  Git
                </TechName>
                <i class="devicon-git-plain colored"></i>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <TechName>
                  Jasmine
                </TechName>
                <i class="devicon-jasmine-plain colored"></i>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <TechName>
                  Mocha
                </TechName>
                <i class="devicon-mocha-plain colored"></i>
            </TechIcon>
          </TechGroup>
        </Fade>
      </Wrap>
    </div>
  )
}

export default Tech;

const Wrap = styled.div`
  width: 100vw;
  height: 130vh;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
`

const TitleText = styled.div`
  margin-top: 40px;
`
const TechGroup = styled.div`
  margin-top: 85px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const TechIcon = styled.div`
border-top: 3px solid #5C5D61;
height: 140px;
width: 190px;
margin: 0px 20px 0px 20px;
padding: 20px 20px 20px;
`

const TechName = styled.div`
  color: #5C5D61;
  font-size: 16px;
  font-weight: 500;
  padding: 0px 0px 20px 0px;
`

const GlobalStyle = createGlobalStyle`
  #tech-header {
    font-size: 32px;
    font-weight: 500;
    color: #181B21;
  }
  .devicon-javascript-plain {
    font-size: 56px;
  }
  .devicon-html5-plain {
    font-size: 56px;
  }
  .devicon-css3-plain {
    font-size: 56px;
  }
  .devicon-python-plain {
    height: 56px;
  }
  .devicon-nodejs-plain {
    font-size: 56px;
  }
  .devicon-react-original {
    font-size: 56px;
  }
  .devicon-express-original {
    font-size: 56px;
  }
  .devicon-postgresql-plain {
    font-size: 56px;
  }
  .devicon-sequelize-plain {
    height: 56px;
  }
  .devicon-redux-original  {
    font-size: 56px;
  }
  .devicon-materialui-plain {
    height: 56px;
  }
  .devicon-firebase-plain {
    font-size: 56px;
  }
  .devicon-heroku-plain {
    font-size: 56px;
  }
  .devicon-git-plain {
    font-size: 56px;
  }
  .devicon-mocha-plain {
    font-size: 56px;
  }
  .devicon-jasmine-plain {
    font-size: 56px;
  }
  .tech-icon: hover {
    border: 3px solid #000;
  }
`
