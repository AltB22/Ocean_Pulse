// const { Location } = require("../models");

// module.exports = {
// 	getLocation(req, res) {
// 		Location.find()
// 			.then((locations) => res.json(locations))
// 			.catch((err) => res.status(500).json(err));
// 	},
// 	getSingleLocation(req, res) {
// 		Location.findOne({ _id: req.params.locationId })
// 			.then((location) =>
// 				!location
// 					? res.status(404).json({ message: "No location with that ID" })
// 					: res.json(location)
// 			)
// 			.catch((err) => res.status(500).json(err));
// 	},
// 	// // create a new location
// 	// createLocation(req, res) {
// 	// 	Location.create(req.body)
// 	// 		.then((dbLocationData) => res.json(dbLocationData))
// 	// 		.catch((err) => res.status(500).json(err));
// 	// },
// };
