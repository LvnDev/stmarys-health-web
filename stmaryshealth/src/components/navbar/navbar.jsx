import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './navbar.css';

function NavbarComponent() {
    return (
        <Navbar expand="lg" className="navbar-custom" sticky="top">
            <Container>
                <Navbar.Brand><Link to="/">St. Mary's Health</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="generalhealth">General Health</Link></Nav.Link>
                        <Nav.Link><Link to="news">Health News</Link></Nav.Link>
                        <NavDropdown title="Tools" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to='/bmicalculator'>BMI Calculator</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to='/'>Nutritional Look Info</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to='/'>Symptom Lookup</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to='/'>About Tools</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
