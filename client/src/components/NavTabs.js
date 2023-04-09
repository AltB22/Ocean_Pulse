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
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Add Location</NavDropdown.Item>
                </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
        </>
    
    );   
}

export default NavTabs;



