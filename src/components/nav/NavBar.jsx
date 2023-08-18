import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget';
import './NavBar.css';
import BoxCart from '../CartContainer/boxCart';

const categorias = ["Vela de soja", "Vela de molde", "Hornillos", "Difusores y accesorios"];

function MiNav() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">CALM CANDLES</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">¿Quiénes Somos?</Nav.Link>
                        <Nav.Link href="#action2">Sucursales</Nav.Link>
                        <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                            {categorias.map(categoria => (
                                <NavDropdown.Item
                                    key={categoria}
                                    as={Link}
                                    to={`/categoria/${categoria}`}>
                                    {categoria}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                    <CartWidget amount={5} />
                    <BoxCart />
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MiNav;
