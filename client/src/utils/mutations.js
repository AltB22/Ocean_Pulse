import { gql } from "@apollo/client";

//mutation that creates a new user.
export const ADD_USER = gql`
	mutation addUser($name: String!, $email: String!, $password: String!) {
		addUser(name: $name, email: $email, password: $password) {
			token
			user {
				_id
				name
				email
			}
		}
	}
`;

//Logs user in by checking the email and password
export const LOGIN_USER = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				name
				email
			}
		}
	}
`;

//Adds a new location 
export const ADD_LOCATION = gql`
	mutation addLocation(
		$surfSpot: String!
		$location: String!
		$type: String!
		$optimalSwellDirection: Int!
		$optimal_wind: Int!
		$optimalSwellSize: Int!
		$optimalTide: String!
	) {
		addLocation(
			surfSpot: $surfSpot
			location: $location
			type: $type
			optimalSwellDirection: $optimalSwellDirection
			optimal_wind: $optimal_wind
			optimalSwellSize: $optimalSwellSize
			optimalTide: $optimalTide
		) {
			_id
			surfSpot
			location
			type
			optimalSwellDirection
			optimal_wind
			optimalSwellSize
			optimalTide
			comments {
				_id
				comment
			}
		}
	}
`;

//Adds a new comment to a specific location
export const ADD_COMMENT = gql`
	mutation addComment($locationId: ID!, $comment: String!) {
		addComment(locationId: $locationId, comment: $comment) {
			_id
			surfSpot
			location
			type
			optimalSwellDirection
			optimal_wind
			optimalSwellSize
			optimalTide
			comments {
				_id
				comment
			}
		}
	}
`;

//removes the comment from a specific location
export const REMOVE_COMMENT = gql`
	mutation removeComment($comment: String!) {
		removeComment(comment: $comment) {
			_id
			surfSpot
			location
			type
			optimalSwellDirection
			optimal_wind
			optimalSwellSize
			optimalTide
			comments {
				_id
				comment
			}
		}
	}
`;

//Removes a user that is logged in.
export const REMOVE_USER = gql`
	mutation removeUser {
		removeUser {
			_id
			name
			email
		}
	}
`;
