import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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

                        {/* <Nav.Link href="#locations"
                onClick={() => HandlePageChange("Locations")}
                className={currentPage === "Locations" ? "nav-link active" : "nav-link"}
                >Locations</Nav.Link> */}
                        <NavDropdown title="Locations" id="basic-nav-dropdown">

                            <NavDropdown.Item href="#location1"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >One action</NavDropdown.Item>

                            <NavDropdown.Item href="#location2"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Another action</NavDropdown.Item>

                            <NavDropdown.Item href="#location3"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Something</NavDropdown.Item>

                            <NavDropdown.Item href="#location4"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Something</NavDropdown.Item>

                            <NavDropdown.Item href="#location5"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Something</NavDropdown.Item>

                            <NavDropdown.Item href="#location6"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Something</NavDropdown.Item>

                            <NavDropdown.Item href="#location7"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Something</NavDropdown.Item>

                            <NavDropdown.Item href="#location8"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Something</NavDropdown.Item>

                            <NavDropdown.Item href="#location9"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Something</NavDropdown.Item>

                            <NavDropdown.Item href="#location10"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Something</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#addLocation"
                                onClick={() => HandlePageChange("AddLocation")}
                                className={currentPage === "AddLocation"}
                            >Add Location</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </>

    );
}

export default NavTabs;



