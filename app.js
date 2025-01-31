let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

let currentIndex = 0;
let totalSlides = slides.length;

// Show the next slide
nextButton.onclick = function() {
    if (currentIndex + 1 < totalSlides) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first slide
    }
    updateSliderPosition();
}

// Show the previous slide
prevButton.onclick = function() {
    if (currentIndex - 1 >= 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; // Loop to the last slide
    }
    updateSliderPosition();
}

// Update the position of the slider
function updateSliderPosition() {
    let slideWidth = slides[0].offsetWidth;
    slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}
