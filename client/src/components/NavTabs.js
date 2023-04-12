import React, { createElement } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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

// //Thinking about how to map the dropdown items so we can have them render locations and new locations.
//  <NavDropdown title="Locations" id="basic-nav-dropdown">
// 		{locations.map((location) => (
// 			<NavDropdown.Item
// 				key={location.id}
// 				href={`#${location.id}`}
// 				onClick={() => HandlePageChange(location.surf_spot)}
// 				className={
// 					currentPage === location.surf_spot ? "nav-link active" : "nav-link"
// 				}>
// 				{location.surf_spot}
// 			</NavDropdown.Item>
// 		))}
// 		<NavDropdown.Divider />
// 		<NavDropdown.Item
// 			href="#addLocation"
// 			onClick={() => HandlePageChange("AddLocation")}
// 			className={
// 				currentPage === "AddLocation" ? "nav-link active" : "nav-link"
// 			}>
// 			Add Location
// 		</NavDropdown.Item>
//  </NavDropdown>;