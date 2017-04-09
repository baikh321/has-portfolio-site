// var $waypointswork = $('.waypoints-worksample')

// $waypointswork.waypoint(function (direction) {
// 	if (direction == 'down') {
// 		$waypointswork.addClass('js-waypoints-worksample-animate');
// 	} else {
// 		$waypointswork.removeClass('js-waypoints-worksample-animate');
// 	}


// }, { offset: '50%' });




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

//var $waypointswork = $('.waypoints-worksample')



