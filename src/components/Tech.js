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
                <p>JavaScript</p>
                <i class="devicon-javascript-plain colored"></i>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <p>HTML5</p>
                <i class="devicon-html5-plain colored"></i>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <p>CSS3</p>
                <i class="devicon-css3-plain colored"></i>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <p>Python</p>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" class="devicon-python-plain" alt="python" />
            </TechIcon>
          </TechGroup>
        </Fade>

        <Fade clear>
          <TechGroup>
            <TechIcon className='tech-icon'>
                <p>Node.js</p>
                <i class="devicon-nodejs-plain colored"></i>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <p>React</p>
                <i class="devicon-react-original colored"></i>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <p>Express</p>
                <i class="devicon-express-original colored"></i>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <p>PostgreSQL</p>
                <i class="devicon-postgresql-plain colored"></i>
            </TechIcon>
          </TechGroup>
        </Fade>

        <Fade clear>
          <TechGroup>
            <TechIcon className='tech-icon'>
                <p>Sequelize</p>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" class="devicon-sequelize-plain" alt="sequelize"/>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <p>Redux</p>
                <i class="devicon-redux-original colored"></i>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <p>Next.js</p>
                <i class="devicon-nextjs-line colored"></i>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <p>GraphQL</p>
                <i class="devicon-graphql-plain colored"></i>
            </TechIcon>
          </TechGroup>
        </Fade>

        <Fade clear>
          <TechGroup>
            <TechIcon className='tech-icon'>
                <p>Heroku</p>
                <i class="devicon-heroku-plain colored"></i>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <p>Git</p>
                <i class="devicon-git-plain colored"></i>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <p>Tailwind CSS</p>
                <i class="devicon-tailwindcss-plain colored"></i>
            </TechIcon>
            <TechIcon className='tech-icon'>
                <p>Material UI</p>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" class="devicon-materialui-plain" alt="materialui" />
            </TechIcon>
          </TechGroup>
        </Fade>
      </Wrap>
    </div>
  )
}

export default Tech;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`

const TitleText = styled.div`
  margin-top: 35px;
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
  @media (max-width: 768px) {
    margin: 0px;
  }
`

const p = styled.div`
  color: #5C5D61;
  font-size: 16px;
  font-weight: 500;
  padding: 0px 0px 20px 0px;
`

const GlobalStyle = createGlobalStyle`
  p {
    color: #5C5D61;
    font-size: 16px;
    font-weight: 500;
    padding: 0px 0px 20px 0px;
  }
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
  .devicon-nextjs-line {
    font-size: 56px;
  }
  .devicon-graphql-plain {
    font-size: 56px;
  }
  .devicon-heroku-plain {
    font-size: 56px;
  }
  .devicon-git-plain {
    font-size: 56px;
  }
  .devicon-tailwindcss-plain {
    font-size: 56px;
  }
  .devicon-materialui-plain {
    height: 56px;
  }
  .tech-icon: hover {
    border: 3px solid #000;
  }
  .tech-icon:hover p {
    color: #000;
  }
`
