const { gql } = require("apollo-server-express");

//add the typeDefs for below.
//const tyoeDefts - gql

//module.exports = typeDefs;

//exmpales on how to write typeDefs
// const typeDefs = gql`
// 	type Tech {
// 		_id: ID!
// 		name: String!
// 	}

// 	type Matchup {
// 		_id: ID!
// 		tech1: String!
// 		tech2: String!
// 		tech1_votes: Int
// 		tech2_votes: Int
// 	}

// 	type Query {
// 		tech: [Tech]
// 		matchups(_id: String): [Matchup]
// 	}

// 	type Mutation {
// 		createMatchup(tech1: String!, tech2: String!): Matchup
// 		createVote(_id: String!, techNum: Int!): Matchup
// 	}
// `;