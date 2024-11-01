import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand as={Link} href="/home">SIMG</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">
                        Producto
                    </Nav.Link>
                    <Nav.Link as={Link} to="/Categorys">
                        Categorias
                    </Nav.Link>
                    <Nav.Link as={Link} to="/Categorys">
                        Marcas
                    </Nav.Link>
                    <Nav.Link as={Link} to="/home">
                                Logout
                            </Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Container>
    </Navbar>
        </div>
    );
};

export default Menu;