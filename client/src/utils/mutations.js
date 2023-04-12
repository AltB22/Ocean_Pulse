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
				username
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
		$optimal_swell_direction: String!
		$optimal_wind: String!
		$optimal_swell_size: String!
		$optimal_tide: String!
	) {
		addLocation(
			surf_spot: $surfSpot
			location: $location
			type: $type
			optimal_swell_direction: $optimal_swell_direction
			optimal_wind: $optimal_wind
			optimal_swell_size: $optimal_swell_size
			optimal_tide: $optimal_tide
		) {
			_id
			surf_spot
			location
			type
			optimal_swell_direction
			optimal_wind
			optimal_swell_size
			optimal_tide
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
			surf_spot
			location
			type
			optimal_swell_direction
			optimal_wind
			optimal_swell_size
			optimal_tide
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
			surf_spot
			location
			type
			optimal_swell_direction
			optimal_wind
			optimal_swell_size
			optimal_tide
			comments {
				_id
				comment
			}
		}
	}
`;

//Removes a user that is logged
export const REMOVE_USER = gql`
	mutation removeUser {
		removeUser {
			_id
			name
			email
		}
	}
`;
