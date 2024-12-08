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
                <Nav.Link as={Link} to="/home">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/Products">
                        Producto
                    </Nav.Link>
                    <Nav.Link as={Link} to="/Categorys">
                        Categorias
                    </Nav.Link>
                    <Nav.Link as={Link} to="/Marca">
                        Marcas
                    </Nav.Link>
                            <Nav.Link as={Link} to="/Clientes">
                        Clientes
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Entradas">
                        Entradas
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Proveedores">
                        Proveedores
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Salidas">
                        Salidas
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Tpenters">
                        Tipo Entradas
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Tsalidas">
                        Tipo De Salidas
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Umedidas">
                        Unidad de Medida
                        </Nav.Link>
                        
                        
                </Nav>

            </Navbar.Collapse>
        </Container>
    </Navbar>
        </div>
    );
};

export default Menu;