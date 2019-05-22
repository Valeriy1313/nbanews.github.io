
$(document).ready(function () {

    $(function () {
        "use strict";
        $('#textslide p.creative').transition({ scale: 1, opacity: 1, delay: 1000, duration: 2000 });
        $('#textslide p.linetheme-left').transition({ x: '0px', opacity: 1, delay: 2000, duration: 1500 });
        $('#textslide p.linetheme-right').transition({ x: '0px', opacity: 1, delay: 2000, duration: 1500 });
        $('#textslide .titl-theme').transition({ opacity: 1, delay: 2500, duration: 2000 });
        $('.slide-txt img').transition({ opacity: 1, delay: 1000, duration: 2000 });
    });

    /****************************
    MINI FLEXSLIDER
    *****************************/

    $(function () {
        "use strict";
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: ""

        });
    });

});

/****************************
CLIENT CAROUSEL
*****************************/


$(function () {
    "use strict";
    $("#owl-demo").owlCarousel({

        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });
});

/*********************************
PORTFOLIO IMAGES PRETTYPHOTO
*********************************/

$(function () {
    "use strict";
    $(".portfolio a").hover(function () {
        $(this).children("img").animate({ opacity: 0.55 }, "fast");
    }, function () {
        $(this).children("img").animate({ opacity: 1.0 }, "slow");
    });

    $("a[data-gal^='prettyPhoto']").prettyPhoto({
        animation_speed: 'fast', /* fast/slow/normal */
        slideshow: 5000, /* false OR interval time in ms */
        autoplay_slideshow: false, /* true/false */
        opacity: 0.80, /* Value between 0 and 1 */
        show_title: true, /* true/false */
        allow_resize: true, /* Resize the photos bigger than viewport. true/false */
        default_width: 500,
        default_height: 344,
        counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
        theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
        horizontal_padding: 20, /* The padding on each side of the picture */
        hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
        wmode: 'opaque' /* Set the flash wmode attribute */
    });
});


/****************************
PROD BOX SLIDER
*****************************/

$(function () {
    "use strict";
    $('#product').bxSlider({
        minSlides: 3,
        maxSlides: 4,
        slideWidth: 270,
        slideMargin: 10
    });
});

/****************************
COUNT DOUWN NEXT MATCH
*****************************/
$(function () {
    "use strict";
    $("#getting-started").countdown("2016/01/01", function (event) {
        $(this).text(event.strftime('%D days %H:%M:%S'));
    });
});

/****************************
    PORTFOLIO FILTER
*****************************/

$(window).load(function () {
    "use strict";
    var $container = $('.albumContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.albumFilter li').on('click', function () {
        $('.albumFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
});