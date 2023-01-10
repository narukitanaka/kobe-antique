window.addEventListener('load', function () {


  var sliderThumbnail = new Swiper('.items_detail01 .slider_thumb .swiper-container', {
    freeMode: true,
    watchSlidesVisibility: true,
    breakpoints: {
      1279: {
        slidesPerView: 7,
      },
      768: {
        slidesPerView: 5,
      },
    }
  });

  //スライダー
  const swiperSlides = document.querySelectorAll(".items_detail01 .slider .swiper-slide");
  var slider = new Swiper('.items_detail01 .slider .swiper-container', {
    loop: true,
    loopedSlides: swiperSlides.length,
    speed: 700,
    allowTouchMove: false,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: sliderThumbnail
    },
  });

});


const breakPoint = 767;
    let swiper;
    let swiperBool;

    window.addEventListener('load', () => {
      if (breakPoint < window.innerWidth) {
        swiperBool = false;
      } else {
        createSwiper();
        swiperBool = true;
      }
    }, false);

    window.addEventListener('resize', () => {
      if (breakPoint < window.innerWidth && swiperBool) {
        swiper.destroy(false, true);
        swiperBool = false;
      } else if (breakPoint >= window.innerWidth && !(swiperBool)) {
        createSwiper();
        swiperBool = true;
      }
    }, false);

    const swiperSlides = document.querySelectorAll(".items_common .swiper-slide");
    const createSwiper = () => {
      swiper = new Swiper('.items_common .swiper-container', {
        loop: true,
        loopedSlides: swiperSlides.length,
        slidesPerView: 2.2,
        spaceBetween: 21,
        // autoplay: {
        //   delay: 4000,
        // },
        speed: 1000,
      });
    }