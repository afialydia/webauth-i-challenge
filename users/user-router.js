const router = require("express").Router();

const Users = require("./user-model.js");

router.get("/", (req, res) => {
	Users.find()
		.then(users => {

			res.json(users);
		})
		.catch(err => {
			res.status(500).json({ message: "Failed to get list of projects" });
		});
});

module.exports = router;