

$(document).ready(function() {
 
  $(".owl-carousel").owlCarousel({
    slideSpeed : 100,
    paginationSpeed : 900,
    autoPlay : true,
    responsive: true,
    items : 4,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsMobile : [479,1]
  });
 
});