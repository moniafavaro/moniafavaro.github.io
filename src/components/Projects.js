import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/main.scss";
import { Button, Card, CardGroup, Container } from "react-bootstrap";
import ProjectOne from "../assets/voldyman_start.png";
import ProjectTwo from "../assets/sports_page.png";
import ProjectThree from "../assets/journi-profilepage.png";
import ProjectFour from "../assets/volunteer-register.png";
import JavaScriptIcon from "../assets/icons/javascript.png";
import HTMLIcon from "../assets/icons/html5.png";
import CSSIcon from "../assets/icons/css3.png";
import ReactIcon from "../assets/icons/reactjs.png";
import NodeIcon from "../assets/icons/nodejs.png";
import ReactBootstrapIcon from "../assets/icons/react-bootstrap.png";
import MongooseIcon from "../assets/icons/mongooseJS.png";
import MongoDBIcon from "../assets/icons/mongodb.png";
import YarnIcon from "../assets/icons/yarn.png";
import DjangoIcon from "../assets/icons/django.png";
import npmIcon from "../assets/icons/npm.png";
import PythonIcon from "../assets/icons/python.png";
import SassIcon from "../assets/icons/sass.png";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Card className="border-0 projects-card" id="projects">
      <Container className="my-5 text-center">
        <h1 className="projects-title">Projects</h1>
        <CardGroup
          className="projects-cardgroup my-5"
          style={{ height: "40%" }}
          data-aos="fade-up"
        >
          <Card className="project-card-main border-0">
            <Card.Body>
              <h3 className="projects-name">Volunteer</h3>
              <p className="projects-desc">
                Full-Stack project using Python, Django, React JS, SASS and
                Bootstrap. In this app I decided to build a tool to help people
                to find volunteering jobs. The user can register as either a
                company or a volunteer. If the user is a company, they can post
                and close a volunteering job and see the applications. If the
                user is a volunteer they can only apply for volunteering jobs,
                the volunteer will see all the ‘jobs’ available.
              </p>
              <div className="projects-div">
                <div className="icons-div-p">
                  <a
                    href="https://html.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img src={HTMLIcon} alt="html-icon" className="html-icon" />
                  </a>
                  <p className="lang-pro-name">HTML5</p>
                </div>
                <div className="icons-div-p">
                  <a
                    href="https://www.javascript.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src={JavaScriptIcon}
                      alt="js-icon"
                      className="js-icon"
                    />
                  </a>
                  <p className="lang-pro-name">JavaScript</p>
                </div>
                <div className="icons-div-p">
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src={ReactIcon}
                      alt="react-icon"
                      className="react-icon"
                    />
                  </a>
                  <p className="lang-pro-name">React</p>
                </div>

                <div className="icons-div">
                  <a
                    href="https://sass-lang.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img src={SassIcon} alt="sass-icon" className="sass-icon" />
                  </a>
                  <p className="lang-pro-name">Sass</p>
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
                  <p className="lang-pro-name">Python</p>
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
                  <p className="lang-pro-name">Django</p>
                </div>

                <div className="icons-div">
                  <a
                    href="https://www.npmjs.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img src={npmIcon} alt="npm-icon" className="npm-icon" />
                  </a>
                  <p className="lang-pro-name">NPM</p>
                </div>
                <div className="icons-div-p">
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

                  <p className="lang-pro-name">React Bootstrap</p>
                </div>
              </div>
              <Button
                href="https://github.com/moniafavaro/volunteer"
                target="_blank"
                rel="noreferrer noopener"
                className="projects-button"
                variant="outline-info"
              >
                VIEW CODE
              </Button>
            </Card.Body>
          </Card>
          <Card className="project-img-card border-0">
            <Card.Img
              className="project-img mt-3"
              src={ProjectFour}
              style={{ height: "20rem", width: "35rem" }}
            />
          </Card>
        </CardGroup>
        <CardGroup
          className="my-5"
          style={{ height: "40%" }}
          data-aos="fade-up"
        >
          <Card className="border-0">
            <Card.Body>
              <h3 className="projects-name">Journi</h3>
              <p className="projects-desc">
                This was my first Full-Stack project using React JS, Bootstrap,
                Node JS, MongoDB and Mongoose. My colleagues and I created a
                social media app for people to share their favourite places
                around the globe, using an external API (MapBox) to add
                pinpoints to the map. As a group we all worked Full-Stack, I was
                focused on integrating the front-end with the back-end, home and
                profile pages, as well as pair-coding other functionality and
                styling.
              </p>
              <div className="projects-div">
                <div className="icons-div-p">
                  <a
                    href="https://html.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img src={HTMLIcon} alt="html-icon" className="html-icon" />
                  </a>
                  <p className="lang-pro-name">HTML5</p>
                </div>
                <div className="icons-div-p">
                  <a
                    href="https://en.wikipedia.org/wiki/CSS"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img src={CSSIcon} alt="css-icon" className="css-icon" />
                  </a>
                  <p className="lang-pro-name">CSS3</p>
                </div>
                <div className="icons-div-p">
                  <a
                    href="https://www.javascript.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src={JavaScriptIcon}
                      alt="js-icon"
                      className="js-icon"
                    />
                  </a>
                  <p className="lang-pro-name">JavaScript</p>
                </div>
                <div className="icons-div-p">
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src={ReactIcon}
                      alt="react-icon"
                      className="react-icon"
                    />
                  </a>
                  <p className="lang-pro-name">React</p>
                </div>
                <div className="icons-div-p">
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
                  <p className="lang-pro-name">MongoDB</p>
                </div>
                <div className="icons-div-p">
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
                  <p className="lang-pro-name">Mongoose</p>
                </div>
                <div className="icons-div-p">
                  <a
                    href="https://nodejs.org/en/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img src={NodeIcon} alt="node-icon" className="node-icon" />
                  </a>
                  <p className="lang-pro-name">NodeJS</p>
                </div>
                <div className="icons-div-p">
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
                  <p className="lang-pro-name">React Bootstrap</p>
                </div>
                <div className="icons-div-p">
                  <a
                    href="https://yarnpkg.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img src={YarnIcon} alt="yarn-icon" className="yarn-icon" />
                  </a>
                  <p className="lang-pro-name">Yarn</p>
                </div>
              </div>
              <Button
                href="https://github.com/moniafavaro/journi"
                target="_blank"
                rel="noreferrer noopener"
                className="projects-button"
                variant="outline-info"
              >
                VIEW CODE
              </Button>
            </Card.Body>
          </Card>
          <Card className="project-img-card border-0">
            <Card.Img
              className="project-img"
              src={ProjectThree}
              style={{ height: "70%", width: "85%" }}
            />
          </Card>
        </CardGroup>
        <CardGroup
          className="my-5"
          style={{ height: "30%" }}
          data-aos="fade-up"
        >
          <Card className="border-0">
            <Card.Body>
              <h3 className="projects-name">MONATANnews</h3>
              <p className="projects-desc">
                In these two days, my colleague and I built a news app using an
                external API to fetch news from a public data source together
                with JavaScript, React JS and CSS, where you can see the top
                news in the UK per category such as sports, business and
                entertainment. The project was perfect to learn how to share
                skills and be able to work with someone else.
              </p>
              <div className="projects-div">
                <div className="icons-div-p">
                  <a
                    href="https://html.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img src={HTMLIcon} alt="html-icon" className="html-icon" />
                  </a>
                  <p className="lang-pro-name">HTML5</p>
                </div>
                <div className="icons-div-p">
                  <a
                    href="https://en.wikipedia.org/wiki/CSS"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img src={CSSIcon} alt="css-icon" className="css-icon" />
                  </a>
                  <p className="lang-pro-name">CSS3</p>
                </div>
                <div className="icons-div-p">
                  <a
                    href="https://www.javascript.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src={JavaScriptIcon}
                      alt="js-icon"
                      className="js-icon"
                    />
                  </a>
                  <p className="lang-pro-name">JavaScript</p>
                </div>
                <div className="icons-div-p">
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src={ReactIcon}
                      alt="react-icon"
                      className="react-icon"
                    />
                  </a>
                  <p className="lang-pro-name">React</p>
                </div>
              </div>
              <Button
                href="https://github.com/moniafavaro/news"
                target="_blank"
                rel="noreferrer noopener"
                className="projects-button"
                variant="outline-info"
              >
                VIEW CODE
              </Button>
            </Card.Body>
          </Card>
          <Card className="project-img-card border-0">
            <Card.Img
              className="project-img"
              src={ProjectTwo}
              style={{ height: "85%", width: "85%" }}
            />
          </Card>
        </CardGroup>
        <CardGroup
          className="my-5"
          style={{ height: "30%" }}
          data-aos="fade-up"
        >
          <Card className="border-0">
            <Card.Body>
              <h3 className="projects-name mt-4">Voldy-Man</h3>
              <p className="projects-desc">
                I had one week to build a grid-based game using JavaScript, CSS
                and HTML. I chose PacMan as a base to create a Harry Potter
                themed game where instead of a PacMan it was Lord Voldemort
                running away from noses that would kill him together with
                catching all ‘lightnings’ to get to the next level.
              </p>
              <div className="projects-div">
                <div className="icons-div-p">
                  <a
                    href="https://html.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img src={HTMLIcon} alt="html-icon" className="html-icon" />
                  </a>
                  <p className="lang-pro-name">HTML5</p>
                </div>
                <div className="icons-div-p">
                  <a
                    href="https://en.wikipedia.org/wiki/CSS"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img src={CSSIcon} alt="css-icon" className="css-icon" />
                  </a>
                  <p className="lang-pro-name">CSS3</p>
                </div>
                <div className="icons-div-p">
                  <a
                    href="https://www.javascript.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src={JavaScriptIcon}
                      alt="js-icon"
                      className="js-icon"
                    />
                  </a>
                  <p className="lang-pro-name">JavaScript</p>
                </div>
              </div>
              <Button
                href="https://github.com/moniafavaro/pac-man"
                target="_blank"
                rel="noreferrer noopener"
                className="projects-button"
                variant="outline-info"
              >
                VIEW CODE
              </Button>
            </Card.Body>
          </Card>
          <Card className="project-img-card border-0">
            <Card.Img
              className="project-img"
              src={ProjectOne}
              style={{ height: "85%", width: "85%" }}
            />
          </Card>
        </CardGroup>
      </Container>
    </Card>
  );
};

export default Projects;
