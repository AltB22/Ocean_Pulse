const router = require("express").Router();
const {
	getAllUsers,
	createUser,
	getUser
} = require("../../controllers/user-controller");

router.route("/").get(getAllUsers);
// router.route('/').post(createMatchup);
router.route("/:id").get(getUSer);
// router.route('/:id').put(createVote);
