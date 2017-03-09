$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
		pagination:false
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

// Smooth Scroll
//*******************
$('a[href*=#]').on('click', function(event){     
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
});