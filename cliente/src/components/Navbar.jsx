import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const NavigationMenu = () => {
    const {isAuthenticated, logout} = useAuth;
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} href="/">SIMG</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {isAuthenticated ? (
                            <>
                                <Nav.Link as={Link} to="/">
                            Inventario
                        </Nav.Link>
                        <Nav.Link as={Link} to="/new">
                            Crear Producto
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Categorys">
                            Categorias
                        </Nav.Link>
                        <Nav.Link as={Link} to="">
                            Categorias
                        </Nav.Link>
                        <Nav.Link as="button" onClick={logout}>
                                    Logout
                                </Nav.Link>
                            </>
                        ):(
                            <>
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register">
                                    Register
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationMenu;