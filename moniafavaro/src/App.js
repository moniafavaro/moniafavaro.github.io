import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import "../src/styles/main.scss";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Me from "./components/Me";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <body>
        <header>
          <div>
            <NavBar />
            <div className="me-div">
              <Me />
            </div>
          </div>
        </header>
        <main>
          <About />
          <Skills />
          <Projects />
        </main>
        <footer>
          <Contact />
        </footer>
      </body>
    </Router>
  );
}

export default App;
