const router = require("express").Router();
const Users = require("./user-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, (req, res) => {
	Users.find()
		.then(users => {
			res.json(users);
		})
		.catch(err => {
			res.status(500).json({ message: "Failed to get list of users" });
		});
});

module.exports = router;
