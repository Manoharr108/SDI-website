import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../App'; // Import custom styles

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" className="py-3">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img height="80px" width="60px" src="img/sdinavbar.png" alt="sdi-logo" />
          <span className="ms-3">SDI</span> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="/register" className="nav-link-custom">Register</Nav.Link>
            <Nav.Link href="/about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="/team" className="nav-link-custom">Team</Nav.Link>
            <Nav.Link href="/events" className="nav-link-custom">Events</Nav.Link>
            <Nav.Link href="/contact" className="nav-link-custom">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
