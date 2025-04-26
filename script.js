let slideIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll(".slide");
  slideIndex += step;

  // If the index goes out of bounds, reset it
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  const slider = document.querySelector(".slider");
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}
