import { gql } from "@apollo/client";

//Query that retrieves a list of all locations and comments. We may not use this - Bax
export const GET_LOCATIONS = gql`
query locations {
	locations {
	  _id
   	  city
	  optimal_swell_direction
	  optimal_swell_size
	  optimal_tide
	  optimal_wind
	  surf_spot
	  type
	 
	}
  }
`;

export const GET_SINGLE_LOCATION = gql`
	query GetLocation($locationId: ID!) {
		location(id: $locationId) {
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

