import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
     <>
  {['sm'].map((expand) => (
    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="/"><span>DhananjoyCD</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            <span>DhananjoyCD</span> 
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
              <NavDropdown
                title="See More"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item as={Link} to="resume">Resume</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="projects">
               My Projects
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="contact">
                  Contact Me
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="about">
                About Me
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}
</>
        </div>
    );
};

export default Header;