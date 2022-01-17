import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useWindowScroll } from "react-use";

const Contact = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisibility] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <Card className="bg-dark text-white" id="contact">
      <Container className="my-5 text-center">
        <h3 className="contact-title">Contact Me</h3>
        <div className="contact-para">
          <p className="contact-icon" style={{ width: "20rem" }}>
            <a
              href="https://www.linkedin.com/in/moniafavaro/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
            <a
              href="https://github.com/moniafavaro"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fab fa-github-square fa-3x"></i>
            </a>
            <a href="mailto:moniafavaro@hotmail.com">
              <i className="fas fa-envelope-square fa-3x"></i>
            </a>
          </p>
        </div>
        <p className="monia-name">
          Monia Favaro <i className="far fa-copyright" /> 2022
        </p>
      </Container>
      <div className="scroll-top  text-center" onClick={scrollToTop}>
        <i className="icon fas fa-chevron-up fa-3x"></i>
      </div>
    </Card>
  );
};

export default Contact;
