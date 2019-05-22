

$(document).ready(function () {

    /***MENU****/

    $(function () {
        "use strict";
        $('.menu').on('click', function (e) {
            $('body .box-menu').toggleClass('active');
            e.preventDefault();
        });
    });

    $(function () {
        cbpHorizontalMenu.init();
    });

    /***END MENU****/

    $(function () {
        "use strict";

        /***TABS RESULT (HOME PAGE) ****/

        $('.tabs .tab-links a').on('click', function (e) {
            var currentAttrValue = $(this).attr('href');

            // Show/Hide Tabs
            $('.tabs ' + currentAttrValue).slideDown(400).siblings().slideUp(400);

            // Change/remove current tab to active
            $(this).parent('li').addClass('active').siblings().removeClass('active');

            e.preventDefault();
        });

        /***TABS RESULT (MATCH PAGE) ****/

        $('.tabs .tab-links-match a').on('click', function (e) {
            var currentAttrValue = $(this).attr('href');

            // Show/Hide Tabs
            $('.tabs ' + currentAttrValue).show().siblings().hide();

            // Change/remove current tab to active
            $(this).parent('li').addClass('active').siblings().removeClass('active');

            e.preventDefault();
        });

        /***TABS RESULT (MATCHES PAGE) ****/

        $('.tabs .tab-links-matches a').on('click', function (e) {
            var currentAttrValue = $(this).attr('href');

            // Show/Hide Tabs
            $('.tabs ' + currentAttrValue).slideDown(400).siblings().slideUp(400);

            // Change/remove current tab to active
            $(this).parent('li').addClass('active').siblings().removeClass('active');

            e.preventDefault();
        });
    });

    /********************************************
    MENU SCROLL
    ********************************************/

    /**
    * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
    * Dual licensed under MIT and GPL.
    * @author Ariel Flesler
    * @version 1.4.3
    */
    ; (function ($) { var h = $.scrollTo = function (a, b, c) { $(window).scrollTo(a, b, c) }; h.defaults = { axis: 'xy', duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1, limit: true }; h.window = function (a) { return $(window)._scrollable() }; $.fn._scrollable = function () { return this.map(function () { var a = this, isWin = !a.nodeName || $.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1; if (!isWin) return a; var b = (a.contentWindow || a).document || a.ownerDocument || a; return /webkit/i.test(navigator.userAgent) || b.compatMode == 'BackCompat' ? b.body : b.documentElement }) }; $.fn.scrollTo = function (e, f, g) { if (typeof f == 'object') { g = f; f = 0 } if (typeof g == 'function') g = { onAfter: g }; if (e == 'max') e = 9e9; g = $.extend({}, h.defaults, g); f = f || g.duration; g.queue = g.queue && g.axis.length > 1; if (g.queue) f /= 2; g.offset = both(g.offset); g.over = both(g.over); return this._scrollable().each(function () { if (!e) return; var d = this, $elem = $(d), targ = e, toff, attr = {}, win = $elem.is('html,body'); switch (typeof targ) { case 'number': case 'string': if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)) { targ = both(targ); break } targ = $(targ, this); if (!targ.length) return; case 'object': if (targ.is || targ.style) toff = (targ = $(targ)).offset() } $.each(g.axis.split(''), function (i, a) { var b = a == 'x' ? 'Left' : 'Top', pos = b.toLowerCase(), key = 'scroll' + b, old = d[key], max = h.max(d, a); if (toff) { attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]); if (g.margin) { attr[key] -= parseInt(targ.css('margin' + b)) || 0; attr[key] -= parseInt(targ.css('border' + b + 'Width')) || 0 } attr[key] += g.offset[pos] || 0; if (g.over[pos]) attr[key] += targ[a == 'x' ? 'width' : 'height']() * g.over[pos] } else { var c = targ[pos]; attr[key] = c.slice && c.slice(-1) == '%' ? parseFloat(c) / 100 * max : c } if (g.limit && /^\d+$/.test(attr[key])) attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max); if (!i && g.queue) { if (old != attr[key]) animate(g.onAfterFirst); delete attr[key] } }); animate(g.onAfter); function animate(a) { $elem.animate(attr, f, g.easing, a && function () { a.call(this, e, g) }) } }).end() }; h.max = function (a, b) { var c = b == 'x' ? 'Width' : 'Height', scroll = 'scroll' + c; if (!$(a).is('html,body')) return a[scroll] - $(a)[c.toLowerCase()](); var d = 'client' + c, html = a.ownerDocument.documentElement, body = a.ownerDocument.body; return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d]) }; function both(a) { return typeof a == 'object' ? a : { top: a, left: a} } })(jQuery);


    $(document).on("scroll", onScroll);


    function onScroll(event) {
        "use strict";
        try {
            var scrollPos = $(document).scrollTop();
            if ($(window).scrollTop() > $('#parallaxTraining').offset().top) {
                $('#nextmatch-content .pht-left').addClass('visible animated fadeInLeft');
                $('#nextmatch-content .pht-right').addClass('visible animated fadeInRight');
            }
            if (($(window).scrollTop() > $('#cbp-hrmenu').offset().top) || ($(window).scrollTop() > $('.bt-menu').offset().top)) {
                $('.top-first-info').addClass('visible animated fadeInDown'); 
            }
            if ($(window).scrollTop() > $('#resultsPoint').offset().top) {
                $('.circle-percentage .pie_progress').addClass('visible animated fadeInLeft');
                $('.pie_progress').asPieProgress({
                    'namespace': 'pie_progress'
                });
                $('.pie_progress').asPieProgress('start');
                setTimeout((function () { $('#resultsPoint img.macbook').addClass('visible animated fadeInUp'); }), 1200);
            }
            if ($(window).scrollTop() + $(window).height() > $('#services').offset().top) {
                $('.effectservic').addClass('visible animated fadeInDown');
                setTimeout((function () { $('.effectservic-sec').addClass('visible animated fadeInDown'); }), 1000);
            }

        } catch (err) {

        }
    }

    /***BUTTON ANCHOR TOP****/

    $(function () {
        "use strict";
        $().UItoTop({
            scrollSpeed: 500,
            easingType: 'linear'
        });
    });

    /***END****/


    /***EFFECT TEXT****/
    $(function () {
        "use strict";
        if ($('.txt-advert').length)
            $('.txt-advert').addClass('fadeInUp');

        if ($('.banner_cont').length)
            $('.banner_cont').addClass('fadeInUp');
    });

    /***   BOX SHOP CART   ***/

    $(function () {
        "use strict";
        $('.box-login .fa-shopping-cart').on('click', function (e) {
            e.preventDefault();
            if ($('.cart-prod').hasClass('hiddenbox')) {
                $('.cart-prod').removeClass('hiddenbox');
                $('.cart-prod').addClass('active-menu');

            }
            else {
                $('.cart-prod').addClass('hiddenbox');
                $('.cart-prod').removeClass('active-menu');
            }
            e.stopPropagation();
        });

        $('body').on('click', function (e) {
            if ($('.cart-prod').hasClass('active-menu')) {
                $('.cart-prod').addClass('hiddenbox');
            }
        });
    });


    /********************************************
    CONTACT
    ********************************************/
    $(function () {
        "use strict";
        $('#contact_form').submit(function (e) {
            e.preventDefault();
            var form = $(this);
            var name = $("#name").val();
            var email = $("#email").val();
            var text = $("#message").val();
            var dataString = 'name=' + name + '&email=' + email + '&message=' + text;
            function isValidEmail(emailAddress) {
                var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
                return pattern.test(emailAddress);
            };
            if (isValidEmail(email) && (text.length > 20) && (name.length > 1)) {
                $.ajax({
                    type: 'POST',
                    url: "contact_form/contact_process.php",
                    data: dataString,
                    success: function () {
                        $('.success').fadeIn(1000);
                    }
                });
            } else {
                $('.error').fadeIn(1000);
            }
        });
    });


});

/***   SHOP CART COUNTER  ***/

function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty, 10) + val;

    if (new_qty < 0) {
        new_qty = 0;
    }

    document.getElementById('qty').value = new_qty;
    return new_qty;
}