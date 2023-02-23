// Требуется чтобы пагинация была динамической
// Значит картинки должны грузиться здесь и сама пагинация должна создаваться здесь

const createSlider = (selector, options = {initialSlide: 0, imgSrc: [], pagination: false, extendedPagination: false}) => {
    const slider = document.querySelector(`.${selector}`); // excursion__main-slider
    const wrapper = slider.querySelector(`.${selector}-wrapper`); // excursion__main-slider-wrapper
    const innerWrapper = wrapper.querySelector(`.${selector}-inner-wrapper`); // excursion__main-slider-inner-wrapper
    const paginationWrapper = slider.querySelector(`.${selector}-pagination`); // excursion__main-slider-pagination
    const slides = [...slider.querySelectorAll(`.${selector}-slide`)]; // excursion__main-slider-slide
    const slidesCount = slides.length;

    let paginations = [];
    let activeSlideIndex = options.initialSlide;

    if (options.pagination && options.extendedPagination ) {
        console.error('Ошибка создания слайдера. Нельзя выбрать оба режима пагинации сразу.');
        return;
    }

    if (options.extendedPagination) {
        createExtendedPaginations(activeSlideIndex);
    }

    function createExtendedPaginations() {
        for (let i = 0; i < slidesCount; i++) {
            const pagination = createExtPag(i);
            paginations.push(pagination);
            paginationWrapper.insertAdjacentElement('beforeend', pagination);
        }
    }

    function createExtPag(index) {
        let pagination = document.createElement('button');
        pagination.innerHTML = `<p class="${selector}-pagination-item-paragraph">${index + 1}</p>`
        pagination.classList.add(`${selector}-pagination-item`);
        pagination.style.backgroundImage = `url(${options.imgSrc[index]})`;

        if (index === activeSlideIndex) {
            pagination.classList.add(`${selector}-pagination-item_active`);
        }

        pagination.addEventListener('click', () => {
            console.log(`Клик на кнопку ${index}`);
        })

        return pagination;
    }

}