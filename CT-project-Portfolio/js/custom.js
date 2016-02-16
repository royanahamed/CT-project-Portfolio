$(document).ready(function(){
    // slider js
    $(".owl-carousel").owlCarousel({
        items:1,
        autoPlay:true,
        navigation : true,
        pagination: false,
        transitionStyle:"fadeUp",
        navigationText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        theme : "theme-shahali",
        singleItem:true
    });
    // portfolio js
    $(".owl-portfolio").owlCarousel({
        items:3,
        autoPlay:true,
        navigation : true,
        pagination: false,
        lazyLoad : true
    });
    // testimonial js
    $(".owl-testimonial").owlCarousel({
        items:1,
        autoPlay:true
    });
	
	// for sticky effect
	$(function(){
		$(document).on( 'scroll', function(){

			if ($(window).scrollTop() > 10) {
				$('#top-menu').addClass('show');
			} else {
				$('#top-menu').removeClass('show');
			}
		});
	});
	
	// for scroll-top button
            $(function(){
                $(document).on( 'scroll', function(){

                    if ($(window).scrollTop() > 100) {
                        $('.scroll-top-wrapper').addClass('show');
                    } else {
                        $('.scroll-top-wrapper').removeClass('show');
                    }
                });

                $('.scroll-top-wrapper').on('click', scrollToTop);
            });

            function scrollToTop() {
                verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
                element = $('body');
                offset = element.offset();
                offsetTop = offset.top - 100;
                $('html, body').animate({scrollTop: offsetTop}, 800, 'linear');
            }
	
	$("#MyNavigation li").click(function() {
        $(this).addClass('active').siblings(".active").removeClass('active');
    });
    //Please use this script after calling jQuery and below jQuery
    // Navigation Scroll
    $(window).scroll(function() {
        Scroll();
    });

    $('#MyNavigation ul li a , .navbar-header a ').on('click', function() {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 30}, 1000);
        return false;
    });
	
	// wow js
	
	});