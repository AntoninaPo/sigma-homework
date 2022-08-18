function slide() {
    let margin = 0;

    return function(direction){
        const gallery = document.getElementById('slider-gallery');
        if (direction === 'left' && margin < 0){
            margin += 940;
        }
        else if (direction === 'right' && margin > 940 * 4 * -1) {
            margin -= 940;
        }
    
        gallery.style.marginLeft = `${margin}px`;
    }
}

const slideOnClick = slide();

window.addEventListener('load', (event) => {
    const animationBlock = document.getElementById('animation');
    const mainBlock = document.getElementById('main');
    function showMain() {
        console.log(animationBlock, mainBlock);
        animationBlock.classList.add('is-hidden');
        mainBlock.classList.remove('is-hidden');
    }    
    setTimeout(showMain, 5000);
})
