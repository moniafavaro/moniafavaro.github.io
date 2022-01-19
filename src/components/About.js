import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Profile from "../assets/monia-profile.jpeg";

const About = () => {
  return (
    <>
      <Card className="about-card border-0" id="about">
        <Container className="my-5 text-center">
          <h1 className="about-title mb-5">About Me</h1>
          <Row className="g-2">
            <Col>
              <Container className="image-container">
                <div className="profile-pic">
                  <img src={Profile} alt="monia-pic" />
                </div>
              </Container>
            </Col>
            <Col>
              <Card.Text className="about-para">
                <p>
                  Hi, I'm Monia, a Junior Software Engineer based in London.
                  Having previously worked in the retail industry for 3 years,
                  where I learned to be a valuable team member and solve
                  problems under pressure, I felt confident and ready for a
                  career change.
                </p>
                <p>
                  When the first lookdown started I found time to learn a new
                  skill. I chose to start a self-learning journey with Python,
                  using books and online resources, but unfortunately I’ve felt
                  that I needed something different to help me progressing in
                  this area, so I enrolled in a Software Engineering Immersive
                  Course with General Assembly, and I’ve fallen in love with it.
                  Coding is now my new passion, where I can be creative, curious
                  and I'm constantly learn new skills.
                </p>
                <p>
                  I am now looking for my first job as a Junior Software
                  Engineer in a friendly environment where I can advance and
                  expand my skill set through targeted mentorship and
                  challenging projects.
                </p>
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default About;
