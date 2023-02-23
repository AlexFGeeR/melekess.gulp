// Требуется чтобы пагинация была динамической
// Значит картинки должны грузиться здесь и сама пагинация должна создаваться здесь

const createSlider = (selector, options = {initialSlide: 0, animationDuration: 500, imgSrc: [], paginationsTitle: [], pagination: false, extendedPagination: false, extType: 0}) => {
    const slider = document.querySelector(`.${selector}`); // excursion__main-slider
    const wrapper = slider.querySelector(`.${selector}-wrapper`); // excursion__main-slider-wrapper
    const innerWrapper = wrapper.querySelector(`.${selector}-inner-wrapper`); // excursion__main-slider-inner-wrapper
    const paginationWrapper = slider.querySelector(`.${selector}-pagination`); // excursion__main-slider-pagination
    const slides = [...slider.querySelectorAll(`.${selector}-slide`)]; // excursion__main-slider-slide
    const buttonBack = slider.querySelector(`.${selector}-back_js`);
    const buttonNext = slider.querySelector(`.${selector}-next_js`); 
    const slidesCount = slides.length;

    let paginations = [];
    let activeSlideIndex = options.initialSlide;
    let siledWidth = 0;
    let animTimeout = null;

    if (options.pagination && options.extendedPagination ) {
        console.error('Ошибка создания слайдера. Нельзя выбрать оба режима пагинации сразу.');
        return;
    }

    if (options.extendedPagination) {
        createExtendedPaginations(activeSlideIndex);
    }

    window.addEventListener('resize', () => {
        initWidth();
        setActiveSlide(activeSlideIndex, false);
    })

    initWidth();
    setActiveSlide(activeSlideIndex, false);

    buttonBack.addEventListener('click', () => {
        setActiveSlide(activeSlideIndex - 1);
    })

    buttonNext.addEventListener('click', () => {
        setActiveSlide(activeSlideIndex + 1);
    })

    function setActiveSlide(index, withAnimation = true) {
        if (index < 0 || index >= slides.length) {
            return;
        }

        if(withAnimation) {
            clearTimeout(animTimeout);
            innerWrapper.style.transition = `transform ${options.animationDuration}ms`;
            animTimeout = setTimeout(() => {
                innerWrapper.style.transition = '';
            }, options.animationDuration);
        }

        buttonBack.removeAttribute('disabled');
        buttonNext.removeAttribute('disabled');

        if (index === 0) {
            buttonBack.setAttribute('disabled', '');
        }

        if (index === slides.length - 1) {
            buttonNext.setAttribute('disabled', '');
        }
        innerWrapper.style.transform = `translateX(-${siledWidth * index}px)`;
        
        if (options.pagination || options.extendedPagination) {
            paginations[activeSlideIndex].classList.remove(`${selector}-pagination-item_active`);
            paginations[index].classList.add(`${selector}-pagination-item_active`);
        }

        activeSlideIndex = index;
    }

    function createExtendedPaginations() {
        for (let i = 0; i < slidesCount; i++) {
            const pagination = createExtPag(i);
            paginations.push(pagination);
            paginationWrapper.insertAdjacentElement('beforeend', pagination);
        }
    }

    function initWidth() {
        siledWidth = wrapper.offsetWidth;

        slides.forEach(slide => {
            slide.style.width = `${siledWidth}px`;
        })
    }

    function createExtPag(index) {
        const pagination = document.createElement('div');
        switch (options.extType) {
            case 0: {
                let button = document.createElement('button');
                pagination.classList.add(`${selector}-pagination-wrapper`);
                button.classList.add(`${selector}-pagination-item`);
                button.style.backgroundImage = `url(${options.imgSrc[index]})`;
                button.innerHTML = `<p class="${selector}-pagination-item-paragraph">${index+1}</p>`;

                pagination.insertAdjacentElement('beforeend', button);

                let text = document.createElement('span');
                text.innerHTML = `${options.paginationsTitle[index]}`;
                pagination.insertAdjacentElement('beforeend', text);

                if (index === activeSlideIndex) {
                    pagination.classList.add(`${selector}-pagination-item_active`);
                }

                pagination.addEventListener('click', () => {
                    setActiveSlide(index, false);
                })
                break;
            }
            case 1: {
                pagination.classList.add(`${selector}-pagination-item`);
                pagination.style.backgroundImage = `url(${options.imgSrc[index]})`;
                pagination.innerHTML = `<p class="${selector}-pagination-item-text">${options.paginationsTitle[index]}</p>`;

                pagination.addEventListener('click', () => {
                    setActiveSlide(index, false);
                })
                break;
            }
        }    
        return pagination;
    }
}