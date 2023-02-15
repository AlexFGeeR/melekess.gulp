// this file used to connect JavaScripts to other pages

switch(location.pathname) {
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