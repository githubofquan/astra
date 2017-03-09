// Agency Theme JavaScript

(function($) {
    //"use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
	
	$('.service-heading').bind('click mouseover', function(event) {
	event.preventDefault();
        
			var tag = this.hash;
			var that = this;
			$(that).css('font-style','oblique');
			$(".service-right").hide();
			$(tag).show();
			
    });
	
	$('.service-heading').bind('mouseout', function(event) {
	event.preventDefault();
			var that = this;
			$(that).css('font-style','normal');		
			$(".service-right").hide();
			$("#service0").show();
    });
	
	$('.who-link').bind('click', function(event) {
	event.preventDefault();
       
			var tag = this.hash;
			$(".Partner").hide();
			$(tag).show();
			
    });
	

})(jQuery); // End of use strict
