const createTabMenu = ({contentClass, btnClass, contentId}) => {
    const contents = [...document.querySelectorAll(`.${contentClass}`)];
    const btns = [...document.querySelectorAll(`.${btnClass}`)];


    for (let i = 0; i < btns.length; i++ ) {
        btns[i].addEventListener('click', () => {
            clearContent();
            const content = document.querySelector(`#${contentId}-${i+1}`);
            content.classList.add(contentClass + '_active');
        })
    }

    function clearContent() {
        console.log(contentClass + '_active');
        for (let content of contents) {
            content.classList.remove(`${contentClass}_active`);
        }
    }
}