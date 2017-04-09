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

