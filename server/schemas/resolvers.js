const { AuthenticationError } = require("apollo-server-express");
const { User, Comment, Location } = require("../models");
const { signToken } = require("../../client/src/utils/auth");

//defines the resolvers
const resolvers = {
	Query: {
		user: async () => {
			return User.find();
		},
		// user: async (parent, { userId }) => {//commented this out for now until we can sort it out. - Billy
		// 	return User.findOne({ _id: userId });
		// },
		me: async (parent, args, context) => {
			if (context.user) {
				return User.findOne({ _id: context.user._id });//we may need to adjust this to context.userId - Billy
			}
			throw new AuthenticationError("You need to be logged in!");
		},
		user: async (parent, { username }) => { // Added this resolver for the new 'user' field - Billy
			return User.findOne({ username });
		  }
	},

	//Defines the Mutations
	Mutation: {
		addUser: async (parent, { name, email, password }) => {
			const user = await User.create({ name, email, password });
			const token = signToken(user);
			return { token, user };
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });
			if (!user) {
				throw new AuthenticationError("No user with this email found!");
			}
			const correctPw = await user.isCorrectPassword(password);
			if (!correctPw) {
				throw new AuthenticationError("Incorrect password!");
			}
			const token = signToken(user);
			return { token, user };
		},
		addComment: async (parent, { locationId, comment }, context) => {
			if (context.user) {
				return Location.findOneAndUpdate(
					{ _id: locationId },
					{
						$addToSet: { comments: comment },
					},
					{
						new: true,
						runValidators: true,
					}
				);
			}
			throw new AuthenticationError("You need to be logged in!");
		},
		addLocation: async (parent, args, context) => {
			if (context.user) {
				const location = await Location.create({
					...args,
					user: context.user._id,//we may need to adjust this to context.userId - Billy
				});
				return location;
			}
			throw new AuthenticationError("You need to be logged in!");
		},

		removeUser: async (parent, args, context) => {
			if (context.user) {
				return User.findOneAndDelete({ _id: context.user._id });//we may need to adjust this to context.userId - Billy
			}
			throw new AuthenticationError("You need to be logged in!");
		},
		removeComment: async (parent, { comment }, context) => {
			if (context.user) {
				return Location.findOneAndUpdate(
					{ _id: context.location._id },//we may need to adjust this to context.locationId - Billy
					{ $pull: { comments: comment } },
					{ new: true }
				);
			}
			throw new AuthenticationError("You need to be logged in!");
		},
	},
};

module.exports = resolvers;
