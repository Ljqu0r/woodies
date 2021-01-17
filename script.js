new Swiper('.image-slider', {
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',

    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 500,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
    },
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    }
});