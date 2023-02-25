const audio = document.querySelector('.excursion__main-slider-slide-wrapper-audio_js');
const btn = document.querySelector('.excursion__main-slider-start_js');

btn.addEventListener('click', () => {
    audio.play();
})

createSlider('excursion__main-slider', {
    initialSlide: 3,
    animationDuration: 500,
    extendedPagination: true,
    extType: 0,
    imgSrc: 
        ['./img/excursion/center/monument.jpg', 
        './img/excursion/center/cosmo_monument.jpg',
        './img/excursion/center/markov.jpg',
        './img/excursion/center/musorovoy.jpg',
        './img/excursion/center/forever_fire.jpg'
    ],
    paginationsTitle: 
        ['Памятник', 
        'Памятник космонавтики',
        'Памятник купцу <br> Маркову',
        'Бюст Марии Мусоровой',
        'Вечный огонь',
    ],
});