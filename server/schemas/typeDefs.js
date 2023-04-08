const { gql } = require("apollo-server-express");

//Defining the typeDefs in GraphQL schema
const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
		password: String
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		username: [User]!
		username(userId: ID!): User
		me: User
	}
     type Comment {
    _id: ID
    comment: String
  }

  type Location {
    _id: ID
    surf_spot: String
    location: String
    type: String
    optimal_swell_direction: Int
    optimal_wind: Int
    optimal_swell_size: Int
    optimal_tide: String
    comments: [Comment]
  }

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth

		login(email: String!, password: String!): Auth

        addComment(
            userId: ID!, comment: String!
        ):Location

        removeUser: User

        removeComment(comment:String!):Location

		addLocation(surf_spot: String!, location: String!, type: String!, optimal_swell_direction: Number!, optimal_wind: Number!, optimal_swell_size: Number!, optimal_tide: String!)
	}
`;

module.exports = typeDefs;
