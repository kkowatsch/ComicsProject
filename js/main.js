$(function () {
    $("datepicker").datepicker({ firstday: 1 });

    $("datepicker").setDefault({
        showOn: "both",
        buttonImageOnly: true,
        buttonImage: "calendar.gif",
        buttonText: "Calendar"
    });
});
//Carousel
$(function () {
    $("#slider").jcarousel({
        scroll: 1,
        auto: 3,
        wrap: 'both',
        initCallback: mycarousel_initCallback,
        buttonNextHTML: null,
        buttonPrevHTML: null,
        itemVisibleInCallback: {
            onAfterAnimation: function (c, o, i, s) {
                $('.jcarousel-control a').removeClass('active');
                $('.jcarousel-control a:eq(' + (i - 1) + ')').addClass('active');
            }
        }
    });

    if ($.browser.msie && $.browser.version == 6) {
        DD_belatedPNG.fix('#wrapper-top, #wrapper-bottom, .bottom, .product img, a.order-button, #slider img, #prev, #next, .cart');
    }

    var width = 20 * $('.jcarousel-control a').length;
    $('.jcarousel-control').width(width + 24);
    var left_pos = (921 - width) / 2;
    $('.jcarousel-control').css('left', left_pos);
});

function mycarousel_initCallback(carousel) {
    $('.jcarousel-control a').bind('click', function() {
        $('.jcarousel-control a').removeClass('active');
        $(this).addClass('active');
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));
        return false;
    });

    $('#next').bind('click', function() {
        carousel.next();
        return false;
    });

    $('#prev').bind('click', function() {
        carousel.prev();
        return false;
    });
};    