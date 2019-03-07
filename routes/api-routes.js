const multer = require('multer')
const path = require('path')
var db = require("../models");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './public/uploads')
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
	}
})

const upload = multer({
	storage: storage,
	limits: { fileSize: 1000000 }
})

module.exports = function (app) {




	// POST route for saving a new post
	app.post("/upload", upload.single("uploadedPic"), function (req, res) {

		db.Avatar.create({
		  name: req.body.name,
		  hobby: req.body.hobby,
		  imagePath:req.file.filename
		})
		  .then(function(dbPost) {
		    res.json(dbPost);
			});
			
	});


	app.get("/avatar", function(req, res) {
    db.Avatar.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

	

};