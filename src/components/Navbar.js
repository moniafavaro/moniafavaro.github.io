import React from "react";
import "../styles/main.scss";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink as LinkH } from "react-router-hash-link";

const NavBar = () => {
  return (
    <nav>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="nav-bar justify-content-end"
      >
        <Container className="justify-content-end">
          <Navbar.Toggle
            aria-controls="responsive-navbar"
            className="justify-content-end"
          />
          <Navbar.Collapse
            id="responsive-navbar"
            className="justify-content-end"
          >
            <Nav className="navbar">
              <Nav.Link className="px-3">
                <LinkH className="nav-navbar" smooth to="#about">
                  About
                </LinkH>
              </Nav.Link>
              <Nav.Link className="px-3">
                <LinkH className="nav-navbar" smooth to="#skills">
                  Skills
                </LinkH>
              </Nav.Link>
              <Nav.Link className="px-3">
                <LinkH className="nav-navbar" smooth to="#projects">
                  Projects
                </LinkH>
              </Nav.Link>
              <Nav.Link className="px-3">
                <LinkH className="nav-navbar" smooth to="#contact">
                  Contact
                </LinkH>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default NavBar;
