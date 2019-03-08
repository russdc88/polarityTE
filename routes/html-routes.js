var path = require("path");


module.exports = function (app) {
	// Route for the main form page
	app.get("/", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/form.html"));
	});
	// Route for the avatar page
	app.get("/avatarList", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/avatarList.html"));
	});


};