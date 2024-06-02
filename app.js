// Step 1: Get DOM elements
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let sliderDom = carouselDom.querySelector('.list');
let thumbnailBorderDom = document.querySelector('.thumbnail');
let timeRunning = 3000;

let runTimeOut; // Declare runTimeOut to be used for clearing timeouts

// Function to show specific slider
function showSlider(type) {
    let sliderItemsDom = sliderDom.querySelectorAll('.item');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

    if (type === 'next') {
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    // Remove the 'next' or 'prev' class after the animation
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
}

// Event listeners for next and prev buttons
nextDom.onclick = () => showSlider('next');
prevDom.onclick = () => showSlider('prev');
