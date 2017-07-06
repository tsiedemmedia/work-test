$(document).ready(function(){

	$(".button").click(function(){
		$(".content").text("Ladowanie treści...");
		$.ajax({
			type: "GET",
			url: "https://jsonplaceholder.typicode.com/users",
			success: function(data) {
				$(".content").html("");
				for ( var i = 0; i < data.length; i++ ) {
					console.log(data[i].name);
					$(".content").append("<p>" + data[i].name + "</p>");
				};
			},
			dataType: "jsonp"
		});
	});

});