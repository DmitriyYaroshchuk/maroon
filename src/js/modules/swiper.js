// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


function swiper() {
    const swiper = new Swiper('.swiper', {
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 30,


        // Navigation arrows
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },

        breakpoints: {
            568: {
                // spaceBetween: 35
            },
            370: {
                // spaceBetween: 0,
                // slidesPerView: 0,
            }
        }



    });

    const swiper2 = new Swiper('.swiper-catalog', {
        loop: false,
        slidesPerView: "auto",


        // Navigation arrows
        navigation: {
            nextEl: '#btnNext',
            prevEl: '#btnPrev',
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: "fraction",
        },


    });

    const swiper3 = new Swiper('.swiper-proposal', {
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 25,


        // Navigation arrows
        navigation: {
            nextEl: '#btnNext',
            prevEl: '#btnPrev',
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: "fraction",
        },


    });
}

export default swiper;