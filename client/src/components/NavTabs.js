// import React, { createElement } from "react";
import { NavLink } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavTabs({ currentPage, HandlePageChange }) {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#home"
                            onClick={() => HandlePageChange("Home")}
                            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
                        >Home</Nav.Link>

                        <Nav.Link href="#about"
                            onClick={() => HandlePageChange("About")}
                            className={currentPage === "About" ? "nav-link active" : "nav-link"}
                        >About</Nav.Link>

                        <Nav.Link href="#contact"
                            onClick={() => HandlePageChange("Contact")}
                            className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
                        >Contact</Nav.Link>

                        <Nav.Link href="#location"
                            onClick={() => HandlePageChange("Location")}
                            className={currentPage === "Location" ? "nav-link active" : "nav-link"}
                        >Search Locations</Nav.Link>

{/*                      
                            {<NavDropdown.Divider />
                            <NavDropdown.Item href="#addLocation"
                                onClick={() => HandlePageChange("AddLocation")}
                                className={currentPage === "AddLocation"}
                            >Add Location</NavDropdown.Item>
                        </NavDropdown> */}

                        <NavLink to="/login"
                            onClick={() => HandlePageChange("Login")}
                            className={currentPage === "Login" ? "nav-link active" : "nav-link"}
                        >Login</NavLink>

                        <NavLink to="/signup"
                            onClick={() => HandlePageChange("Signup")}
                            className={currentPage === "Signup" ? "nav-link active" : "nav-link"}
                        >Signup</NavLink>



                    </Nav>
                </Container>
            </Navbar>
        </>

    );
}

export default NavTabs;
