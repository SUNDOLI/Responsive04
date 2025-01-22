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

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul ul').slideUp();
            $(this).next().slideDown();
        }
    });

})