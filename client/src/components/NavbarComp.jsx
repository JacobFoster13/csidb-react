import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavbarComp = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/splash">StreamingAvailability</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="/splash">Home</Nav.Link>
            <Nav.Link href="/actors">Actors</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="/tvshows">TV Shows</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/model">Models</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    );
}

export default NavbarComp