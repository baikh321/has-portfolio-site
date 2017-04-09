$(".home").click(function() {
   scrollToAnchor('home-section');
});
$(".about").click(function() {
   scrollToAnchor('about-section');
});
$(".work").click(function() {
   scrollToAnchor('work-section');
});
$(".awards").click(function() {
   scrollToAnchor('awards-section');
});
$(".contact").click(function() {
   scrollToAnchor('contact-section');
});

function scrollToAnchor(aid){
    var aTag = $("a[id='"+ aid +"']");
    $('html,body').animate({scrollTop: (aTag.offset().top) - 40},'slow');
}