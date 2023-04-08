const { gql } = require("apollo-server-express");

//Defining the typeDefs in GraphQL schema
const typeDefs = gql`
	type User {
		_id: ID
		name: String
		email: String
		password: String
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		user: [User]!
		user(userId: ID!): User
		me: User
	}
     type Comment {
    _id: ID
    comment: String
  }

  type Location {
    _id: ID
    surfSpot: String
    location: String
    type: String
    optimalSwellDirection: Int
    optimal_wind: Int
    optimalSwellSize: Int
    optimalTide: String
    comments: [Comment]
  }

	type Mutation {
		addUser(name: String!, email: String!, password: String!): Auth

		login(email: String!, password: String!): Auth

        addComment(
            userId: ID!, comment: String!
        ):Location

        removeUser: User

        removeComment(comment:Sting!):Location

		addLocation(surfSpot: String!, location: String!, type: String!, optimalSwellDirection: Number!, optimal_wind: Number!, optimalSwellSize: Number!, optimalTide: Sting!)
	}
`;

module.exports = typeDefs;
