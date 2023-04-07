import { gql } from "@apollo/client";

//GETs a list of locations
export const GET_LOCATIONS = gql`
	query GetLocations {
		locations {
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

// Adds a new location
export const ADD_LOCATION = gql`
	mutation AddLocation(
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

//Adds a new comment to a location
export const ADD_COMMENT = gql`
	mutation AddComment($locationId: ID!, $comment: String!) {
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

//Removes a comment from a specific location
export const REMOVE_COMMENT = gql`
	mutation RemoveComment($locationId: ID!, $commentId: ID!) {
		removeComment(locationId: $locationId, commentId: $commentId) {
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
