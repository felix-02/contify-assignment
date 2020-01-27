let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
}
let next = document.getElementById('next');
let previous = document.getElementById('previous');
next.addEventListener("click",()=>{
    pauseSlideshow();
    nextSlide();
})
previous.addEventListener("click",()=>{
    pauseSlideshow();
    previousSlide();
});

let playing = true;
let pauseButton = document.getElementById('pause');

function pauseSlideshow() {
    pauseButton.innerHTML = 'Play <i class="fas fa-play"></i>';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = 'Pause <i class="fas fa-pause"></i>';
    playing = true;
    slideInterval = setInterval(nextSlide, 2000);
}

pauseButton.addEventListener("click",()=>{
    if (playing) {
        pauseSlideshow();
    } else {
        playSlideshow();
    }

}) 