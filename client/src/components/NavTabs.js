import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ApolloProvider } from "@apollo/client";
// import { client } from "../utils/client";//this might not be needed when 
import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../utils/queries";

function NavTabs({ currentPage, HandlePageChange }) {

    // const locations = ['location1', 'location2', 'location3', 'location4', 'location5', 'location6', 'location7', 'location8', 'location9', 'location10'];

    // // const dropDownEl = document.getElementById ('#basic-nav-dropdown');

    // for (let i = 0; i < locations.length; i++) {

    //   const dropDownItem = document.createElement('NavDropdown.Item', { href: `#${locations[i]}`, onClick: () => HandlePageChange("Locations"), className: currentPage === "Locations" ? "nav-link active" : "nav-link" }, locations[i]
    //     );
    //    document.getElementById('basic-nav-dropdown').appendChild(dropDownItem);
    // }

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

                        <NavDropdown title="Locations" id="basic-nav-dropdown">

                            <NavDropdown.Item href="#location1"
                                onClick={() => HandlePageChange("Locations")}

                                className={currentPage === "Locations"}
                            >Ocean Beach</NavDropdown.Item>

                            <NavDropdown.Item href="#location2"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Mavericks</NavDropdown.Item>

                            <NavDropdown.Item href="#location3"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Malibu</NavDropdown.Item>

                            <NavDropdown.Item href="#location4"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >The Wedge</NavDropdown.Item>

                            <NavDropdown.Item href="#location5"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Pismo Beach Pier</NavDropdown.Item>

                            <NavDropdown.Item href="#location6"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Rincon</NavDropdown.Item>

                            <NavDropdown.Item href="#location7"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Huntington Beach Pier</NavDropdown.Item>

                            <NavDropdown.Item href="#location8"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >San Onofre Beach</NavDropdown.Item>

                            <NavDropdown.Item href="#location9"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Asilomar Beach</NavDropdown.Item>

                            <NavDropdown.Item href="#location10"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Cardiff Reef</NavDropdown.Item>

                            <NavDropdown.Item href="#location11"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Oceanside Pier</NavDropdown.Item>

                            <NavDropdown.Item href="#location12"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Doheny Beach</NavDropdown.Item>

                            <NavDropdown.Item href="#location13"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Lower Trestles</NavDropdown.Item>

                            <NavDropdown.Item href="#location14"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Black Beach</NavDropdown.Item>

                            <NavDropdown.Item href="#location15"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Windandsea Beach</NavDropdown.Item>

                            <NavDropdown.Item href="#location16"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Swamis</NavDropdown.Item>

                            <NavDropdown.Item href="#location17"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Pleasure Point</NavDropdown.Item>

                            <NavDropdown.Item href="#location18"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Steamer Lane</NavDropdown.Item>

                            <NavDropdown.Item href="#location19"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Venture Point</NavDropdown.Item>

                            <NavDropdown.Item href="#location20"
                                onClick={() => HandlePageChange("Locations")}
                                className={currentPage === "Locations"}
                            >Pacifica / Linda Mar Beach</NavDropdown.Item>

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
