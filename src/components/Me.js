import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Logo from "../assets/moniafavaro-logo.png";
import "../styles/main.scss";

const Me = () => {
  return (
    <>
      <Container className="monia-logo">
        <Navbar.Brand>
          <img src={Logo} width="130" height="140" alt="logo" />
        </Navbar.Brand>
      </Container>
      <div className="me-container">
        <h2 className="me-title">Hello World,</h2>
        <p className="me-para">I am Monia Favaro a Junior Software Engineer.</p>
      </div>
    </>
  );
};

export default Me;
