const slides = document.querySelector(".slides");
const sliders = document.querySelectorAll(".slide").length;
let currentSlide = 0;
const intervalTime = 3000;
let slideInterval;

function nextSlide(){
    currentSlide = (currentSlide + 1) % sliders;
    updateSlide();
}

function prevSlide(){
    currentSlide = (currentSlide - 1 + sliders) % sliders;
    updateSlide();
}

function updateSlide(){
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function startSlider(){
    slideInterval = setInterval(nextSlide,intervalTime);
}

function stopsSlider(){

    clearInterval (slideInterval);
}

document.querySelector(".prev").addEventListener("click", () => {
    prevSlide();
    stopsSlider();
    startSlider();
  });

  document.querySelector(".next").addEventListener("click", () => {
    nextSlide();
    stopsSlider();
    startSlider();
  });

  const model = document.getElementById("myModel");
  const colseModelBtn = document.getElementById("btnclose");

 
  setTimeout(() => {
    model.style.display = "flex";
  }, 5000);

  colseModelBtn.addEventListener("click", () => {
    model.style.display = "none";
  });
startSlider();