import React from "react";
import "../styles/main.scss";
import { Card, Container } from "react-bootstrap";
import PythonIcon from "../assets/icons/python.png";
import BootstrapIcon from "../assets/icons/bootstrap.png";
import YarnIcon from "../assets/icons/yarn.png";
import SassIcon from "../assets/icons/sass.png";
import ReactIcon from "../assets/icons/reactjs.png";
import PostgreIcon from "../assets/icons/postgresql.png";
import NodeIcon from "../assets/icons/nodejs.png";
import MongooseIcon from "../assets/icons/mongooseJS.png";
import MongoDBIcon from "../assets/icons/mongodb.png";
import GitIcon from "../assets/icons/git.png";
import FigmaIcon from "../assets/icons/figma.png";
import DjangoIcon from "../assets/icons/django.png";
import npmIcon from "../assets/icons/npm.png";
import ExpressIcon from "../assets/icons/express.png";
import JavaScriptIcon from "../assets/icons/javascript.png";
import HTMLIcon from "../assets/icons/html5.png";
import CSSIcon from "../assets/icons/css3.png";
import GitHubIcon from "../assets/icons/github.png";
import ReactBootstrapIcon from "../assets/icons/react-bootstrap.png";

const Skills = () => {
  return (
    <Card className="skill-card border-0" id="skills">
      <Container className="my-5 text-center">
        <h1 className="skills-title">Skills</h1>
        <Card className="skills-card border-0">
          <div className="skills-div" style={{ height: "10%", width: "70%" }}>
            <div className="icons-div">
              <a
                href="https://html.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={HTMLIcon} alt="html-icon" className="html-icon" />
              </a>
              <p className="skills-name">HTML5</p>
            </div>
            <div className="icons-div">
              <a
                href="https://www.javascript.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={JavaScriptIcon} alt="js-icon" className="js-icon" />
              </a>
              <p className="skills-name">JavaScript</p>
            </div>
            <div className="icons-div">
              <a
                href="https://en.wikipedia.org/wiki/CSS"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={CSSIcon} alt="css-icon" className="css-icon" />
              </a>
              <p className="skills-name">CSS3</p>
            </div>
            <div className="icons-div">
              <a
                href="https://sass-lang.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={SassIcon} alt="sass-icon" className="sass-icon" />
              </a>
              <p className="skills-name">Sass</p>
            </div>
            <div className="icons-div">
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={ReactIcon} alt="react-icon" className="react-icon" />
              </a>
              <p className="skills-name">React</p>
            </div>
            <div className="icons-div">
              <a
                href="https://getbootstrap.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={BootstrapIcon}
                  alt="bootstrap-icon"
                  className="bootstrap-icon"
                />
              </a>
              <p className="skills-name">Bootstrap</p>
            </div>
            <div className="icons-div">
              <a
                href="https://nodejs.org/en/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={NodeIcon} alt="node-icon" className="node-icon" />
              </a>
              <p className="skills-name">NodeJS</p>
            </div>
            <div className="icons-div">
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={MongoDBIcon}
                  alt="mongodb-icon"
                  className="mongodb-icon"
                />
              </a>
              <p className="skills-name">MongoDB</p>
            </div>
            <div className="icons-div">
              <a
                href="https://mongoosejs.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={MongooseIcon}
                  alt="mongoose-icon"
                  className="mongoose-icon"
                />
              </a>
              <p className="skills-name">Mongoose</p>
            </div>
            <div className="icons-div">
              <a
                href="https://expressjs.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={ExpressIcon}
                  alt="express-icon"
                  className="express-icon"
                />
              </a>
              <p className="skills-name">Express</p>
            </div>
            <div className="icons-div">
              <a
                href="https://www.djangoproject.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={DjangoIcon}
                  alt="django-icon"
                  className="django-icon"
                />
              </a>
              <p className="skills-name">Django</p>
            </div>
            <div className="icons-div">
              <a
                href="https://www.python.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={PythonIcon}
                  alt="python-icon"
                  className="python-icon"
                />
              </a>
              <p className="skills-name">Python</p>
            </div>
            <div className="icons-div">
              <a
                href="https://www.postgresql.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={PostgreIcon}
                  alt="postgre-icon"
                  className="postgre-icon"
                />
              </a>
              <p className="skills-name">PostgreSQL</p>
            </div>
            <div className="icons-div">
              <a
                href="https://www.npmjs.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={npmIcon} alt="npm-icon" className="npm-icon" />
              </a>
              <p className="skills-name">NPM</p>
            </div>
            <div className="icons-div">
              <a
                href="https://yarnpkg.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={YarnIcon} alt="yarn-icon" className="yarn-icon" />
              </a>
              <p className="skills-name">Yarn</p>
            </div>
            <div className="icons-div">
              <a
                href="https://react-bootstrap.github.io/getting-started/introduction/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={ReactBootstrapIcon}
                  alt="reactboot-icon"
                  className="reactboot-icon"
                />
              </a>
              <p className="skills-name">React Bootstrap</p>
            </div>
            <div className="icons-div">
              <a
                href="https://git-scm.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={GitIcon} alt="git-icon" className="git-icon" />
              </a>
              <p className="skills-name">Git</p>
            </div>
            <div className="icons-div">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={GitHubIcon}
                  alt="github-icon"
                  className="github-icon"
                />
              </a>
              <p className="skills-name">GitHub</p>
            </div>
            <div className="icons-div">
              <a
                href="https://www.figma.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={FigmaIcon} alt="figma-icon" className="figma-icon" />
              </a>
              <p className="skills-name">Figma</p>
            </div>
          </div>
        </Card>
      </Container>
    </Card>
  );
};

export default Skills;
