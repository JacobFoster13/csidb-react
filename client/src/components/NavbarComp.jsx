import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavbarComp = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
        <Container>
            <Navbar.Brand href="/splash">StreamingAvailability</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/splash">Home</Nav.Link>
                    <Nav.Link href="/actors">Actors</Nav.Link>
                    <Nav.Link href="/movies">Movies</Nav.Link>
                    <Nav.Link href="/tvshows">TV Shows</Nav.Link>
                    <Nav.Link href="/about">About Us</Nav.Link>
                    <Nav.Link href="/model">Models</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavbarComp