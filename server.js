const express = require("express");
const bodyParser = require("body-parser");
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
	destination: "./public/uploads",
	filename: function(req, file, cb){
		cb(null,file.fieldname + "-" + Date.now + path.extname(file.originalname))
	}
})

const uploads = multer({
	storage: storage,

}).single("uploadedPic")

module.exports = {
	uploads: uploads,
	storage: storage
}


var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


app.use(express.static("public"));


require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});