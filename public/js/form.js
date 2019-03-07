$(document).ready(function () {

	var avatar = {}

	avatar.name = $("#name").val().trim()
	avatar.hobby = $("#hobby").val().trim()


	$("#profile").on("submit", function handleFormSubmit(event) {
		event.preventDefault();
		
		$.post("/upload", avatar, function(req,res) {
      res.send("text")
    });

	})

})
