//add modles into the {} for this code
const { } = require("../models");

//const resolvers = {}
//add resolvers here


//const mutations = {}
//add mutations here


//module.exports = resolvers;


//example for how to write resolvers
// const resolvers = {
// 	Query: {
// 		tech: async () => {
// 			return Tech.find({});
// 		},
// 		matchups: async (parent, { _id }) => {
// 			const params = _id ? { _id } : {};
// 			return Matchup.find(params);
// 		},
// 	},
// 	Mutation: {
// 		createMatchup: async (parent, args) => {
// 			const matchup = await Matchup.create(args);
// 			return matchup;
// 		},
// 		createVote: async (parent, { _id, techNum }) => {
// 			const vote = await Matchup.findOneAndUpdate(
// 				{ _id },
// 				{ $inc: { [`tech${techNum}_votes`]: 1 } },
// 				{ new: true }
// 			);
// 			return vote;
// 		},
// 	},
// };
