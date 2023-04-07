const router = require("express").Router();
const {
	getAllUsers,
	createUser,
	getUser
} = require("../../controllers/user-controller");

router.route("/").get(getAllLocations);
// router.route('/').post(createMatchup);
router.route("/:id").get(getLocation);
// router.route('/:id').put(createVote);
