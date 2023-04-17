const swiper = new Swiper('.mySwiper', {
  loop: true,
  autoplay: true,
  smooth: true,
  delay: 500,
  speed: 800,
  autoplay: {
      delay: 5000,
  },
  pagination: {
      el: '.swiper-pagination',
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
})
