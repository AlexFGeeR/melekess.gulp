// this file used to connect JavaScripts to other pages

switch(location.pathname) {
    case '/': {
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
        break;
    }
    case '/about-city.html': {
      const contents = [...document.querySelectorAll('.history-facts__content')];
      const btns = [...document.querySelectorAll('.history-facts__btn')];
      const wrapper = document.querySelector('.history-facts__content-wrapper');

      clearContent();

      for (let i = 0; i < btns.length; i++ ) {
        btns[i].addEventListener('click', () => {
          clearContent();
          const content = document.querySelector(`#period-content-${i+1}`);
          wrapper.style.backgroundColor = "#ebecec";
          content.style.display = 'block';
        })
      }

      function clearContent() {
        for (let content of contents) {
          content.style.display = "none";
        }
      }

      break;
    }
}