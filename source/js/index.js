const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    centeredSlides: true,
    spaceBetween: 10,
    slidesPerView: 1.5,
    breakpoints: {
      1279: {
        slidesPerView: 1.5,
      },
      0: {
        slidesPerView: 1,
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});