/* parallax */
$(window).scroll(function(){
  parallaxScroll();
})

function parallaxScroll(){
  var i = $(window).scrollTop();
  
  $('.parallax-background').css('background-position', 'center '+(i*0.25) + 'px');
  
  $('.parallax-textbox').css('top', -4+ (i*0.005) + 'em');
};


/* navigation menu support mobile view*/     
$('.menu-toggle').click(function() {
  
  $('.site-nav').toggleClass('site-nav--open');
  $(this).toggleClass('open');
  $(this).css("overflow-x", "hidden");
  
});

$('.nav-link').click(function() {
  $('.site-nav').removeClass('site-nav--open');
})