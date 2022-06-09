import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

<div className='position-sticky fixed-top'>
<Navbar collapseOnSelect expand="sm" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="/"><span>DhananjoyCD</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    
    </Nav>
    <Nav>
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="#blogs">Blogs</Nav.Link>
    <NavDropdown title="See More" id="collasible-nav-dropdown">
    <NavDropdown.Item  href="#about">
      About Me
      </NavDropdown.Item>
      <NavDropdown.Item  href="#service">
      My services
      </NavDropdown.Item>
      <NavDropdown.Item  href="#projects">
      My Projects
      </NavDropdown.Item>
      <NavDropdown.Item  href="#testimonial">
      Testimonial
      </NavDropdown.Item>
      <NavDropdown.Item  href="#contact">
        Contact Me
      </NavDropdown.Item>
    </NavDropdown>
      <Nav.Link href="/">Login</Nav.Link>
      <Nav.Link href="/">Sign Up</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


</div>

    );
};

export default Header;