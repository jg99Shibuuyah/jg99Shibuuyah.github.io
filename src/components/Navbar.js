 import {Link, useMatchm, useResolvedPath, Route, BrowserRouter as Router, Routes} from "react-router-dom";
 import Container from 'react-bootstrap/Container';
 import {Nav,Navbar,NavDropdown,Form, FromControl, Button} from 'react-bootstrap';
 import React, { Component } from "react";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Projects from "./Projects";
import Home from "./Home";
import './style.css';
import { BiHome } from "react-icons/bi";
 export default class NavbarComp extends Component{
  render(){
    return (
    <Router>
      <div>
       <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to="/"> <BiHome/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
               
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                <Nav.Link  as={Link} to="/AboutMe">About Me</Nav.Link>
              
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                  <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path ="/" element = {<Home />}/>
          <Route path ="/resume" element = {<Resume />}/>
          <Route path ="/projects" element = {<Projects />}/> 
          <Route path ="/aboutMe"element = { <AboutMe/>}/>
          
        </Routes>
      </div>
    </Router>
      );
  }
    
}
