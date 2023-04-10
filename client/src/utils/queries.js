import { gql } from "@apollo/client";

//GETs a list of locations
export const GET_LOCATIONS = gql`
	query GetLocations {
		locations {
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

// Adds a new location
export const ADD_LOCATION = gql`
	mutation AddLocation(
		$surf-spot: String!
		$location: String!
		$type: String!
		$optimal_swell_direction: String!
		$optimal_wind: String!
		$optimal_swell_size: String!
		$optimal_tide: String!
	) {
		addLocation(
			surf_spot: $surf_spot
			location: $location
			type: $type
			optimal_swell_direction: $optimal_swell_direction
			optimal_wind: $optimal_wind
			optimal_swell_size: $optimal_swell_size
			optima_tide: $optimal_tide
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

//Adds a new comment to a location
export const ADD_COMMENT = gql`
	mutation AddComment($locationId: ID!, $comment: String!) {
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

//Removes a comment from a specific location
export const REMOVE_COMMENT = gql`
	mutation RemoveComment($locationId: ID!, $commentId: ID!) {
		removeComment(locationId: $locationId, commentId: $commentId) {
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
