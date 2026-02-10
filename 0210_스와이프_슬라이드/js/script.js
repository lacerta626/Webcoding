$(document).ready(function () {
    // Swiper 슬라이드
    const swiper1 = new Swiper('.swiper1', {
        // Optional parameters
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
        //자동 실행
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});
$(document).ready(function () {
    // Swiper 슬라이드
    const swiper1 = new Swiper('.swiper2', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        //자동 실행
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});