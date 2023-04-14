import React from "react";
// import { Card, Row, Col } from 'react-bootstrap';


// const styles = {

//     heading: {
//         minHeight: 50,
//         lineheight: 3.5,
//         fontSize: '2.5rem',
//         padding: '10px',
//         textAlign: 'center',
//         margin: 30,
//         backgroundColor: " #2f7bff"
//     },
// };



//code for adding specific locations???-bax

// Import the `useParams()` hook
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";

// import CommentForm from '../components/commentForm';
// import {ADD_COMMENT} from "../../utils/mutations";
// import {REMOVE_COMMENT} from "../../utils/mutations"
// import Auth from "../../utils/auth";

import {GET_SINGLE_LOCATION} from "../../utils/queries";


            <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card className="AboutLocation">
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    City:
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="CurrentLocation">
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>

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
