const slidesCount = document.querySelectorAll('.recommend__slider-slide').length;
const swiper = new Swiper(`.recommend__slider-slide-wrapper-swiper`, {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    pagination: {
        el: '.recommend__slider-slide-wrapper-swiper-pagination',
        clickable: true,
    },
    centeredSlides: true,
})

createSlider('recommend__slider', {
    initialSlide: 0,
    animationDuration: 500,
    extendedPagination: true,
    extType: 1,
    imgSrc: 
        [
            './img/recommend/markov.jpg',
            './img/recommend/forever__fire.jpg',
            './img/recommend/walk_of_fame.jpg',
            './img/recommend/firefighter.jpg',
            './img/recommend/musorovoy.jpg',
            './img/recommend/space.jpg',
            './img/recommend/monument.jpg'
    ],
    paginationsTitle: 
        [
            'Памятник купцу Маркову',
            'Вечный огонь',
            'Аллея Славы',
            'Слава пожарным',
            'Бюст Марии Мусоровой',
            'Памятник космонавтики',
            'Памятник'
    ],
});