$(document).ready(function() {

	$(".initial-entry-background").fadeIn(300, function() {
		$(".initial-entry").css("display", "flex").hide().fadeIn(300);
		$("body").addClass("noscroll");
	});

	$(".password").on("submit", function(e) {
		e.preventDefault();
		if($(".password-entry").val() === "donuts") {

			$("body").removeClass("noscroll");

			
			$(".password").fadeOut(300, function() {
				$(".initial-entry-start").slideUp(300, function() {

					
				});
			});
		} else {
			$(".password-error").fadeIn(300);
		}
	});


	$(".password-entry").on("keyup", function() {
		if($(this).val() === "") {
			$(".password-error").fadeOut(300);
		}
	});


});