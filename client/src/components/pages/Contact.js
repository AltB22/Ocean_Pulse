import React from "react";

const Contact = () => {
    return (
        <div>
            <h1>Contact Page</h1>
        </div>
    );
};

export default Contact;



//Holding code 

//From Location
// //code for adding specific locations???-bax
// import React from "react";

// // Import the `useParams()` hook
// import {useParams} from "react-router-dom";
// import {useQuery} from "@apollo/client";

// // import CommentForm from '../components/commentForm';

// import {GET_SINGLE_LOCATION} from "../../utils/queries";
// // import {ADD_COMMENT} from "../../utils/mutations";
// // import {REMOVE_COMMENT} from "../../utils/mutations"
// // import Auth from "../../utils/auth";

// const SingleLocation = () => {
// 	// Use `useParams()` to retrieve value of the route parameter
// 	const { locationId } = useParams();

// 	const { loading, data } = useQuery(GET_SINGLE_LOCATION, {
// 		// pass URL parameter
// 		variables: { locationId: locationId },
// 	});

// 	const location = data?.location || {};

// 	if (loading) {
// 		return <div>Loading...</div>;
// 	}
// 	return (
// 		<div>
// 			<h1>{location.surf_spot}</h1>
// 		</div>
// 	);
// };

// export default SingleLocation;


//from NavTabs
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