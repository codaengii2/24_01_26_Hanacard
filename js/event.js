var swiper = new Swiper(".eventSwiper", {
  speed: 800,
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".right_slide",
    prevEl: ".left_slide",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
