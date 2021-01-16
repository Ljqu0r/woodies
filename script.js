new Swiper('.image-slider', {
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',

    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 500
});