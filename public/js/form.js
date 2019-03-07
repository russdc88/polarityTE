$(document).ready(function () {

	var avatar = {}

	$("#profile").on("submit", function handleFormSubmit(event) {
		event.preventDefault()


		var name = $("#name").val().trim()
		var hobby = $("#hobby").val().trim()


		var formData = new FormData(this);
		formData.append("name", name)
		formData.append("hobby", hobby)

		for (var pair of formData.entries()) {
			console.log(pair[0] + ', ' + pair[1]);
		}


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

	$(".theList").on("click", function () {
		window.location.href = "/avatarList";
	})

})
