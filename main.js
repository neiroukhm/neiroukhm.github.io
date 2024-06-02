$(document).ready(function() {
    // Flexslider Initialization
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: true,
        slideshowSpeed: 4000,
        animationSpeed: 600,
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });

    // OwlCarousel Initialization
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Smooth Scrolling
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // Sticky Header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#colorlib-aside').addClass('sticky');
        } else {
            $('#colorlib-aside').removeClass('sticky');
        }
    });

    // Dynamic Content Loading
    $('.project-link').on('click', function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        $('#colorlib-main').load(url + ' #content', function() {
            // Reinitialize plugins if necessary
        });
    });

    // Scroll Animations
    $(window).on('scroll', function() {
        $('.animate-box').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll + windowHeight > position) {
                $(this).addClass('animated fadeInUp');
            }
        });
    });
});
