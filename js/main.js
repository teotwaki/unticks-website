$(document).ready(function(){
  $("#portfolio-contant-active").mixItUp();

  $("#testimonial-slider").owlCarousel({
    singleItem: true,
    autoPlay: 7000,
  });

  // Counter
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});
