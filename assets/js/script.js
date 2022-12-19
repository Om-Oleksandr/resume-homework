let imgContainers = document.querySelectorAll('.section-gallery-item');
let imgContainerWidth = 0;

window.addEventListener('resize', imgHeight);
function imgHeight(){
imgContainers.forEach(imgContainer => {
        imgContainerWidth =imgContainer.offsetWidth;
        imgContainer.style.height = imgContainerWidth + 'px';
        imgContainer.style.width = imgContainerWidth + 'px';
    });
};

imgHeight()