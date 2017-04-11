$(document).ready(function() {



	/*#################################
	########### Password Entry ########
	#################################*/

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



	/*#################################
	########### Navigation ############
	#################################*/


	$(".navToggle").on("click", function(){
	  $(this).toggleClass("open");
	$("#menu").toggleClass("active");
	})



	$("#menu a").on("click", function() {
	  //openCloseNav();
	  
	  if ($("#menu").hasClass("active")) {
	    // if hamburger menu has active class, remove active class
	    $("#menu").removeClass("active");

	    // reset the hamburger
	    $(".navToggle").toggleClass("open");


	  }
	  else {
	    // do nothing
	  };

	  //console.log('test click');


	});




	/*#################################
	########### WayPoints #############
	#################################*/



	$('.waypoint').each( function(i) {

		var $el = $(this),
			animClassDown = $el.data('animateDown'),
			animClassUp = $el.data('animateUp'),
			thisId = $(this).attr('id');

		$el.waypoint(function (direction) {
			
			//if (direction === 'down' && animClassDown ) {
			if (direction === 'down' ) {

				$el.addClass('show');
			
			//} else if (direction === 'up' && animClassUp ) {
			} else if (direction === 'up' ) {
				
				$el.removeClass('show');
			}

		}, { offset: '80%' });



		$el.waypoint(function (direction) {

			$('#sidebar ul li').each(function(){

			    var matchingClass = $(this).attr('class');

			    // when theres a section ID:ScrollNav match
			    if ( matchingClass = thisId ) {

			    	// Remove the active class fomr all LIs
		        	$(this).removeClass('active');

		        	// Add the active class to the matching LI
		        	if($(this).hasClass(thisId)) {
				        $(this).addClass('active');
				    } 
		            
		            // If the scroll dir. is up, 
		            // add the active class on the previous LI (above)
		            if (direction === 'up' && $(this).hasClass(thisId) ) {
		                $(this).removeClass('active');
		                $(this).prev().addClass('active');
		            }
		            
		            // If at the beginning of the waypoints,
		            // add the active class to the first one
		            if(!$el.length){
		                $('#sidebar ul li:first-child').addClass('active');
		            }
		            
			    }

			});


		}, { offset: '50%' });

	});






	/*#################################
	########### smoothstateJS #########
	#################################*/





});