$(function () {
    const swiper = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1000,
        effect: "fade",

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        navigation: {
            prevEl: '.main_visual .arrows .prev',
            nextEl: '.main_visual .arrows .next',
        },
    });
    $('.mopen').on('click', function () {
        $('.header .gnb').toggleClass('on')
    })
});
$(function () {
    $('.header .mbtn').on('click', function () {
        $(this).toggleClass('on');
        $('.header .gnb').toggleClass('on');

    })
    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul ul').slideUp();
            $(this).next().slideDown();
        }
    });

    $(window).on('resize', function () {
        $('.header .mbtn').removeClass('on')
        $('.header .gnb').removeClass('on')
        $('.header .gnb>ul ul').removeAttr('style')
    })

    $('.header .gnb').on('wheel touchmove', function (e) {
        e.preventDefault();
    })
})