$(document).ready(function () {

	$.get('/avatar', function (data) {
		console.log(data)

		data.forEach(function (avatar) {
			var div = $("<div class='col-lg-6'></div>")
			var image = "<img src='/uploads/" + avatar.imagePath + "' ></img>"
			var name = "<p> Name: " + avatar.name + "</p></br>"
			var hobby = "<p> Hobby: " + avatar.hobby + "</p>"

			div.html(image + name + hobby)
			$(".newList").append(div)
		});

	})

	$(".main").on("click", function () {
		window.location.href = "/";
	})

})