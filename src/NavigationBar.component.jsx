import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.styles.css';

const NavigationBar = () => {
  const [theme, setTheme] = useState("dark");
  
    useEffect(() => {
      document.body.className = theme === "dark" ? "dark-mode" : "light-mode";
    }, [theme]);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    const toggleTheme = () => {
      setTheme((t) => (t === "dark" ? "light" : "dark"));
    };

    return (
      <Navbar fixed="top" data-bs-theme="dark" expand="sm">
        <Container>
          <Navbar.Brand className="brand fs-4" href="#home" onClick={scrollToTop}><span id="gradient-brand-text">Frederick Pukay</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="nav-link" href="#projects">Projects</Nav.Link>
              <Nav.Link className="nav-link" href="#approach">Approach</Nav.Link>
              <Nav.Link className="nav-link" href="#connect">Connect</Nav.Link>
            </Nav>
            <span className="justify-content-end">
              <button className="theme-toggle-button" onClick={toggleTheme}>
                {theme === "dark" 
                ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>}
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavigationBar;
