$(document).ready(function () {

	var avatar = {}

	$("#profile").on("submit", function handleFormSubmit(event) {
		event.preventDefault()

		//Grabbing name and hobby from form
		var name = $("#name").val().trim()
		var hobby = $("#hobby").val().trim()

		//Grabbing file, name, and hobby and adding it to a FormData to send through Ajax
		var formData = new FormData(this);
		formData.append("name", name)
		formData.append("hobby", hobby)

		//Ajax call to send the Form Data to Server.
		$.ajax({
			type: "POST",
			url: "/upload",
			data: formData,
			processData: false,
			contentType: false,
			success: function (r) {
				console.log("result", r)
				window.location.href = "/avatarList";

			},
			error: function (e) {
				console.log("some error", e);
			}
		});
	})

	//Sends to Avatar page for the Avatar List button on Main page. 
	$(".theList").on("click", function () {
		window.location.href = "/avatarList";
	})

})
