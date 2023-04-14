// //test process for new NavTabs.js file and locations.js file.

// //NaveTabs.js
// import React, { useState } from "react";
// import {
// 	ApolloClient,
// 	InMemoryCache,
// 	ApolloProvider,
// 	useQuery,
// 	gql,
// } from "@apollo/client";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { GET_LOCATIONS } from "../utils/queries";

// const client = new ApolloClient({
// 	uri: "http://localhost:3001/graphql",
// 	cache: new InMemoryCache(),
// });

// function NavTabs({ currentPage, handlePageChange, graphQLEndpoint }) {
// 	const { loading, error, data } = useQuery(GET_LOCATIONS);
// 	const [locations, setLocations] = useState([]);

// 	if (loading) return <p>Loading...</p>;
// 	if (error) return <p>Error</p>;

// 	if (data) {
// 		setLocations(data.locations);
// 	}
// 	return (
// 		<ApolloProvider client={client}>
// 			<Navbar bg="dark" variant="dark">
// 				<Container>
// 					<Nav className="me-auto">
// 						<Nav.Link
// 							href="#home"
// 							onClick={() => handlePageChange("Home")}
// 							className={
// 								currentPage === "Home" ? "nav-link active" : "nav-link"
// 							}>
// 							Home
// 						</Nav.Link>
// 						<Nav.Link
// 							href="#about"
// 							onClick={() => handlePageChange("About")}
// 							className={
// 								currentPage === "About" ? "nav-link active" : "nav-link"
// 							}>
// 							About
// 						</Nav.Link>
// 						<Nav.Link
// 							href="#contact"
// 							onClick={() => handlePageChange("Contact")}
// 							className={
// 								currentPage === "Contact" ? "nav-link active" : "nav-link"
// 							}>
// 							Contact
// 						</Nav.Link>
// 						<Nav.Link
// 							href="#signup"
// 							onClick={() => handlePageChange("Signup")}
// 							className={
// 								currentPage === "Signup" ? "nav-link active" : "nav-link"
// 							}>
// 							Signup
// 						</Nav.Link>
// 						<Nav.Link
// 							href="#login"
// 							onClick={() => handlePageChange("Login")}
// 							className={
// 								currentPage === "Login" ? "nav-link active" : "nav-link"
// 							}>
// 							Login
// 						</Nav.Link>
// 						<NavDropdown title="Locations" id="basic-nav-dropdown">
// 							{locations.map((location) => (
// 								<NavDropdown.Item
// 									key={location.id}
// 									href={`#${location.id}`}
// 									onClick={() => handlePageChange(location.surf_spot)}
// 									className={
// 										currentPage === location.surf_spot
// 											? "nav-link active"
// 											: "nav-link"
// 									}>
// 									{location.surf_spot}
// 								</NavDropdown.Item>
// 							))}
// 							<NavDropdown.Divider />
// 							<NavDropdown.Item
// 								href="#addLocation"
// 								onClick={() => handlePageChange("AddLocation")}
// 								className={
// 									currentPage === "AddLocation" ? "nav-link active" : "nav-link"
// 								}>
// 								Add Location
// 							</NavDropdown.Item>
// 						</NavDropdown>
// 					</Nav>
// 				</Container>
// 			</Navbar>
// 		</ApolloProvider>
// 	);
// }

// export default NavTabs;


// // Locations.js
// import { useState } from "react";
// import { useQuery } from "@apollo/client";
// import NavTabs from "../NavTabs";
// import { GET_SINGLE_LOCATION } from "../../utils/queries";
// import { ApolloClient, InMemoryCache } from "@apollo/client";

// const SingleLocation = () => {
// 	const [locationId, setLocationId] = useState(""); // form state to store locationId

// 	const { loading, data } = useQuery(GET_SINGLE_LOCATION, {
// 		variables: { locationId: locationId },
// 	});

// 	const location = data?.location || {};

// 	const handleLocationIdChange = (e) => {
// 		setLocationId(e.target.value);
// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault(); // prevent default form submission behavior
// 	};

// 	if (loading) {
// 		return <div>Loading...</div>;
// 	}

// 	return (
// 		<>
// 			<NavTabs currentPage="Locations" />
// 			<div>
// 				<form onSubmit={handleSubmit}>
// 					<label htmlFor="locationId">Enter Location ID:</label>
// 					<input
// 						type="text"
// 						id="locationId"
// 						value={locationId}
// 						onChange={handleLocationIdChange}
// 					/>
// 					<button type="submit">Submit</button>
// 				</form>
// 				<h1>{location.surf_spot}</h1>
// 			</div>
// 		</>
// 	);
// };

// export default SingleLocation;

