const multer = require('multer')
const path = require('path')
var db = require("../models");

// I am using the multer package to grab the file and store it in a local folder called uploads in the public folder.

const storage = multer.diskStorage({
	//stores file in the upload location
	destination: function (req, file, cb) {
		cb(null, './public/uploads')
	},
	//naming the file
	filename: function (req, file, cb) {
		cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
	}
})

//Setting the file size limit to 1 mb
const upload = multer({
	storage: storage,
	limits: { fileSize: 1000000 }
})

module.exports = function (app) {




	// Uploading file and storing name, hobby, and file name to mySql. I will reference back to that file in the avatarList.js file. 
	app.post("/upload", upload.single("uploadedPic"), function (req, res) {

		db.Avatar.create({
			name: req.body.name,
			hobby: req.body.hobby,
			imagePath: req.file.filename
		})
			.then(function (dbPost) {
				res.json(dbPost);
			});

	});

	// Grabs all the avatars 
	app.get("/avatar", function (req, res) {
		db.Avatar.findAll({})
			.then(function (dbPost) {
				res.json(dbPost);
			});
	});



};