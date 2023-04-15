// import React, { createElement } from "react";
// import { NavLink } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavTabs({ currentPage, HandlePageChange }) {

    // const locations = ['location1', 'location2', 'location3', 'location4', 'location5', 'location6', 'location7', 'location8', 'location9', 'location10'];

    // // const dropDownEl = document.getElementById ('#basic-nav-dropdown');

    // for (let i = 0; i < locations.length; i++) {

    //   const dropDownItem = document.createElement('NavDropdown.Item', { href: `#${locations[i]}`, onClick: () => HandlePageChange("Locations"), className: currentPage === "Locations" ? "nav-link active" : "nav-link" }, locations[i]
    //     );
    //    document.getElementById('basic-nav-dropdown').appendChild(dropDownItem);
    // }

    // Add event listener to dropdown menu



    // Add event listener to dropdown menu
    // const dropdown = document.getElementById("basic-nav-dropdown");
    // dropdown.addEventListener("change", function() {
    //   // Get selected location from dropdown
    //   const location = dropdown.value;

    //   // Make API request
    //   fetch(`/api/location/${location}`)//ocean_pulse.locations

    //     .then(response => response.json())
    //     .then(data => {
    //       // Display data in a table
    //       const table = document.getElementsByClassName("AboutLocation");
    //       table.innerHTML = ""; // Clear existing data
    //       data.forEach(item => {
    //         const row = table.insertRow();
    //         row.insertCell(0).innerHTML = item.name;
    //         row.insertCell(1).innerHTML = item.address;
    //         // etc.
    //       });
    //     });
    // });

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

                        {/* <NavLink to="/login"
                            onClick={() => HandlePageChange("Login")}
                            className={currentPage === "Login" ? "nav-link active" : "nav-link"}
                        >Login</NavLink>

                        <NavLink to="/signup"
                            onClick={() => HandlePageChange("Signup")}
                            className={currentPage === "Signup" ? "nav-link active" : "nav-link"}
                        >Signup</NavLink> */}



                    </Nav>
                </Container>
            </Navbar>
        </>

    );
}

export default NavTabs;
