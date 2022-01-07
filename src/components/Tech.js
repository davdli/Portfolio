import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components";

const Tech = () => {
  return (
    <div>
      <Wrap id='technologies'>
        <GlobalStyle />
        <TitleText>
          <h2 id='tech-header'>Technologies</h2>
        </TitleText>
        <TechGroup>
          <TechIcon>
              <TechName>
                JavaScript
              </TechName>
              <i class="devicon-javascript-plain colored"></i>
          </TechIcon>
          <TechIcon>
              <TechName>
                HTML5
              </TechName>
              <i class="devicon-html5-plain colored"></i>
          </TechIcon>
          <TechIcon>
              <TechName>
                CSS3
              </TechName>
              <i class="devicon-css3-plain colored"></i>
          </TechIcon>
          <TechIcon>
              <TechName>
                Python
              </TechName>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" class="devicon-python-plain" alt="python" />
          </TechIcon>
        </TechGroup>

        <TechGroup>
          <TechIcon>
              <TechName>
                Node.js
              </TechName>
              <i class="devicon-nodejs-plain colored"></i>
          </TechIcon>
          <TechIcon>
              <TechName>
                React
              </TechName>
              <i class="devicon-react-original colored"></i>
          </TechIcon>
          <TechIcon>
              <TechName>
                Express
              </TechName>
              <i class="devicon-express-original colored"></i>
          </TechIcon>
          <TechIcon>
              <TechName>
                PostgreSQL
              </TechName>
              <i class="devicon-postgresql-plain colored"></i>
          </TechIcon>
        </TechGroup>

        <TechGroup>
          <TechIcon>
              <TechName>
                Sequelize
              </TechName>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" class="devicon-sequelize-plain" alt="sequelize"/>
          </TechIcon>
          <TechIcon>
              <TechName>
                Redux
              </TechName>
              <i class="devicon-redux-original colored"></i>
          </TechIcon>
          <TechIcon>
              <TechName>
                Material UI
              </TechName>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" class="devicon-materialui-plain" alt="materialui" />
          </TechIcon>
          <TechIcon>
              <TechName>
                Firebase
              </TechName>
              <i class="devicon-firebase-plain colored"></i>
          </TechIcon>
        </TechGroup>

        <TechGroup>
          <TechIcon>
              <TechName>
                Heroku
              </TechName>
              <i class="devicon-heroku-plain colored"></i>
          </TechIcon>
          <TechIcon>
              <TechName>
                Git
              </TechName>
              <i class="devicon-git-plain colored"></i>
          </TechIcon>
          <TechIcon>
              <TechName>
                Mocha
              </TechName>
              <i class="devicon-mocha-plain colored"></i>
          </TechIcon>
          <TechIcon>
              <TechName>
                Figma
              </TechName>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt='figma' class='devicon-figma'/>
          </TechIcon>
        </TechGroup>
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
border-top: 3px solid #393C41;
height: 140px;
width: 190px;
margin: 0px 20px 0px 20px;
padding: 20px 20px 20px;
`

const TechName = styled.div`
  padding: 0px 0px 20px 0px;
`

const GlobalStyle = createGlobalStyle`
  #tech-header {
    font-size: 28px;
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
  .devicon-figma {
    height: 56px;
  }
`
