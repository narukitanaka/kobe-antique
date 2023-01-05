
      window.addEventListener('load', function() {

        const swiperSlides01 = document.querySelectorAll(".top01 .mv_slider .swiper-slide");
        const swiper01 = new Swiper('.top01 .mv_slider .swiper-container', {
          loop: true,
          loopedSlides: swiperSlides01.length,
          slidesPerView: 1,
          allowTouchMove: false,
          autoplay: {
            delay: 4000
          },
          speed: 1200
        });

        const swiperSlides02 = document.querySelectorAll(".top01 .topic_slider .swiper-slide");
        const swiper02 = new Swiper('.top01 .topic_slider .swiper-container', {
          direction: 'vertical',
          loop: true,
          loopedSlides: swiperSlides02.length,
          slidesPerView: 1,
          allowTouchMove: false,
          autoplay: {
            delay: 4000
          },
          speed: 1000
        });


        const swiperSlides03 = document.querySelectorAll(".top07 .swiper-slide");
        const swiper03 = new Swiper('.top07 .swiper-container', {
          loop: true,
          loopedSlides: swiperSlides03.length,
          slidesPerView: 1.5,
          spaceBetween: 30,

          autoplay: {
            delay: 4000
          },
          speed: 1000,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            1600: {
              slidesPerView: 3.625,
              spaceBetween: 100
            },
            1360: {
              slidesPerView: 3.4,
              spaceBetween: 70
            },
            767: {
              slidesPerView: 2.75,
              spaceBetween: 45
            }
          }
        });
      });