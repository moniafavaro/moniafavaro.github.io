import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useWindowScroll } from "react-use";
import Books from "../assets/books.png";
import Series from "../assets/series.png";
import Travelling from "../assets/travel.png";

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
    <>
      <Card id="contact">
        <Card className="text-center border-0">
          <h1 className="interest-title mb-5">Interests</h1>
          <Container>
            <Card.Body className="interest-para mb-5">
              <div className="interest-icon">
                <img src={Books} alt="books-icon" className="books-icon" />
                <p>
                  I love to read, especially history and fiction books. My
                  favourites are: Lord of the Rings, Harry Potter, The Witcher,
                  Ancient Egypt and Arabian Nights.
                </p>
              </div>
              <div className="interest-icon">
                <img src={Series} alt="series-icon" className="series-icon" />
                <p>
                  I enjoy watching anime, because I'm passionate about other
                  languages and Japanese is among the ones that I want to learn.
                </p>
              </div>
              <div className="interest-icon">
                <img
                  src={Travelling}
                  alt="travel-icon"
                  className="travel-icon"
                />
                <p>
                  Visiting other countries and immersing myself in their culture
                  is one of my passions. I have previous adored my experiences
                  in Italy, Portugal and Denmark, and my next trips will be to:
                  Netherlands and Egypt.
                </p>
              </div>
            </Card.Body>
          </Container>
        </Card>
        <Card className="bg-dark text-white border-0">
          <Container className="contact-container my-5 text-center">
            <h3 className="contact-title">Contact Me</h3>
            <div className="contact-para">
              <p className="contact-icon" style={{ width: "20rem" }}>
                <a
                  href="https://www.linkedin.com/in/moniafavaro/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a
                  href="https://github.com/moniafavaro"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fab fa-github-square fa-2x"></i>
                </a>
                <a href="mailto:moniafavaro@hotmail.com">
                  <i className="fas fa-envelope-square fa-2x"></i>
                </a>
              </p>
            </div>
            <p className="monia-name">
              <i className="far fa-copyright" /> Monia Favaro 2022
            </p>
          </Container>
          <div className="scroll-top text-center" onClick={scrollToTop}>
            <i className="icon fas fa-chevron-up fa-3x"></i>
          </div>
        </Card>
      </Card>
    </>
  );
};

export default Contact;
