import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><span className="text-danger fw-bold">RDX</span> HUT</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0">
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#blogs">Blogs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;