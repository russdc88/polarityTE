var uploads = require("../server").uploads
var storage = require("../server").storage


module.exports = function(app) {

	
	

  // POST route for saving a new post
  app.post("/upload", function(req, res) {
    uploads(req,res, (err) =>{
			if (err){
				res.send(err)
			}
			else {
				console.log(req.file)
			}
		})
    // db.Post.create({
    //   title: req.body.title,
    //   body: req.body.body,
    //   category: req.body.category
    // })
    //   .then(function(dbPost) {
    //     res.json(dbPost);
    //   });
  });

  // DELETE route for deleting posts
  
};