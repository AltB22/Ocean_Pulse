import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ApolloProvider } from "@apollo/client";
// import { client } from "../utils/client";//this might not be needed when 
import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../utils/queries";

const NavTabs = ({ handlePageChange, currentPage }) => {
	const { loading, error, data } = useQuery(GET_LOCATIONS);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	const locations = data.locations;
	return (
		<ApolloProvider client={client}>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Nav className="me-auto">
						<Nav.Link
							href="#home"
							onClick={() => handlePageChange("Home")}
							className={
								currentPage === "Home" ? "nav-link active" : "nav-link"
							}>
							Home
						</Nav.Link>
						<Nav.Link
							href="#about"
							onClick={() => handlePageChange("About")}
							className={
								currentPage === "About" ? "nav-link active" : "nav-link"
							}>
							About
						</Nav.Link>
						<Nav.Link
							href="#contact"
							onClick={() => handlePageChange("Contact")}
							className={
								currentPage === "Contact" ? "nav-link active" : "nav-link"
							}>
							Contact
						</Nav.Link>
						<NavDropdown title="Locations" id="basic-nav-dropdown">
							{locations.map((location) => (
								<NavDropdown.Item
									key={location.id}
									onClick={() => handlePageChange(location.surf_spot)}
									className={
										currentPage === location.surf_spot
											? "nav-link active"
											: "nav-link"
									}>
									{location.surf_spot}
								</NavDropdown.Item>
							))}
							<NavDropdown.Divider />
							<NavDropdown.Item
								href="#addLocation"
								onClick={() => handlePageChange("AddLocation")}
								className={
									currentPage === "AddLocation" ? "nav-link active" : "nav-link"
								}>
								Add Location
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Container>
			</Navbar>
		</ApolloProvider>
	);
};

export default NavTabs;
