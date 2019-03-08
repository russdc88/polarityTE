$(document).ready(function () {

	$.get('/avatar', function (data) {


		// running a loop to grab all the data and put as an image, then name, then hobby. It will put two on each row, unless on a tablet or phone, then just one per row. 

		data.forEach(function (avatar) {
			var div = $("<div class='col-lg-6'></div>")
			var image = "<img src='/uploads/" + avatar.imagePath + "' ></img>"
			var name = "<p> Name: " + avatar.name + "</p></br>"
			var hobby = "<p> Hobby: " + avatar.hobby + "</p>"

			div.html(image + name + hobby)
			$(".newList").append(div)
		});

	})

	// Home button sending back to mainpage

	$(".main").on("click", function () {
		window.location.href = "/";
	})

})