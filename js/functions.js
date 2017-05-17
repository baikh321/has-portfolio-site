$(document).ready(function() {



	/*#################################
	########### Password Entry ########
	#################################*/

	function password() {

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

	}
	password();




	/*#################################
	########### Navigation ############
	#################################*/

	function navigation() {

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

	}
	navigation();




	/*#################################
	########### WayPoints #############
	#################################*/

	function waypoints() {

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
				
				$el.addClass('show');
				// $el.removeClass('show');
			}

		}, { offset: '50%' });



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

	}
	waypoints();







	/*#################################
	########### smoothstateJS #########
	#################################*/




	/* SmoothState */
	// $(function(){
	//   'use strict';
	//   var $body    = $('html, body'), // Define jQuery collection 
	//       $page  = $('#main').smoothState({
	//         onStart : {
	//           duration: 250,
	//           render: function () {
	//             content.toggleAnimationClass('is-exiting');
	            
	//             // Scroll user to the top
	//             $body.animate({ 'scrollTop': 0 });

	//           }
	//         }
	//       }).data('smoothState');
	// });
	/* end SmoothState */

	/* SmoothState */
	$(function(){
		'use strict';
		var $body = $('html, body'), // Define jQuery collection
			$page = ('#main'),
  		options = {
  			debug: true,
  			scroll: false,
  			prefetch: false,
  			cacheLength: 2,
  			onStart: {
  				duration: 200,
  				render: function ($container){
  					$container.addClass('is-exiting');
  					

  					smoothState.restartCSSAnimations();


  				}
  			},
  			onReady: {
  				render: function ($container, $newContent){

  					$container.removeClass('is-exiting');
  					

  					$container.html($newContent);

  					$body.scrollTop(0);
  					// $body.animate({ 'scrollTop': 0 });



  				}
  			},
  			onAfter: function(url, $container, $newContent) {

  				// re-run and JS functions as needed

  				navigation();
  				waypoints();
  				password();
  				
  			}
  		},
  		//smoothState = $page.smoothState(options).data('smoothState');
  		smoothState = $('#main').smoothState(options).data('smoothState');

	  		
	});
	/* end SmoothState */


if( typeof console === 'object' ) {
    console.log(
        '\n' +
        'Hello there, Thanks for visiting my portfolio site!\n' +
        'If you would like to get in touch, please leave me a message at hhybaik@gmail.com\n' +
        '\n' +
        'Developed & Designed by Hayoung Baik\n'
        
    );
}



});
