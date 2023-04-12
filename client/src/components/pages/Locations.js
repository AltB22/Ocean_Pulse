import React from "react";


//code for adding specific locations???-bax

// Import the `useParams()` hook
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";

// import CommentForm from '../components/commentForm';
// import {ADD_COMMENT} from "../../utils/mutations";
// import {REMOVE_COMMENT} from "../../utils/mutations"
// import Auth from "../../utils/auth";

import {GET_SINGLE_LOCATION} from "../../utils/queries";


const SingleLocation = ({ locationId }) => {
	const { loading, data } = useQuery(GET_SINGLE_LOCATION, {
		variables: { locationId: locationId },
	});

	const location = data?.location || {};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>{location.surf_spot}</h1>
		</div>
	);
};

export default SingleLocation;
// const Locations = () => {
// 	return (
// 		<div>
// 			<h1>Locations</h1>
			
// 		</div>
// 	);
// };

// export default Locations;


// //code for adding specific locations???-bax
// import React from "react";

// // Import the `useParams()` hook
// import { useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";

// // import CommentForm from '../components/commentForm';

// import { GET_SINGLE_LOCATION } from "../../utils/queries";
// import {ADD_COMMNET} from "../../utils/mutations";
// import {REMOVE_COMMENT} from "../../utils/mutations"
// import Auth from "../../utils/auth";

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
