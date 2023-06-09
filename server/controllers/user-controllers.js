// // import user model
// const { User } = require("../models");
// // import sign token function from auth
// const { signToken } = require("../../client/src/utils/auth");

// module.exports = {
// 	// get a single user by either their id or their username
// 	async getSingleUser({ user = null, params }, res) {
// 		const foundUser = await User.findOne({
// 			$or: [
// 				{ _id: user ? user._id : params.id },
// 				{ username: params.username },
// 			],
// 		});

// 		if (!foundUser) {
// 			return res
// 				.status(400)
// 				.json({ message: "Cannot find a user with this id!" });
// 		}

// 		res.json(foundUser);
// 	},
// 	// create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
// 	async createUser({ body }, res) {
// 		const user = await User.create(body);

// 		if (!user) {
// 			return res.status(400).json({ message: "Something is wrong!" });
// 		}
// 		const token = signToken(user);
// 		res.json({ token, user });
// 	},
// };
