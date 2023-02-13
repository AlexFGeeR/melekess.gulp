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
      
      for (let i = 0; i < btns.length; i++ ) {
        btns[i].addEventListener('click', () => {
          clearContent();
          const content = document.querySelector(`#period-content-${i+1}`);
          content.classList.add('history-facts__content_active');
        })
      }

      function clearContent() {
        for (let content of contents) {
          content.classList.remove('history-facts__content_active');
        }
      }

      break;
    }
    case '/personalies.html': {
      const contents = [...document.querySelectorAll('.personalies__tabs-content-list-item')];
      const btns = [...document.querySelectorAll('.personalies__tabs-btn-list-item')];
      
      for(let i = 0; i < btns.length; i++ ) {
        btns[i].addEventListener('click', () => {
          clearContent();
          const content = document.querySelector(`#personalies__tabs-content-${i+1}`);
          content.classList.add('personalies__tabs-content-list-item_active');
        })
      }

      function clearContent() {
        for (let content of contents) {
          content.classList.remove('personalies__tabs-content-list-item_active');
        }
      }

      break;
    }
}