document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const btns = document.querySelectorAll(".btn");

  let currentSlide = 1;

  const mannualSlide = function (manual) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });

    slides[manual].classList.add("active");
    btns[manual].classList.add("active");
  };

  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      mannualSlide(i);
      currentSlide = i;
    });
  });

  const autoPlaySlide = function (activeClass) {
    const active = document.getElementsByClassName("active");
    let i = 0;
    let player = () => {
      setTimeout(() => {
        [...active].forEach((activeSlide) => {
          activeSlide.classList.remove("active");
        });

        slides[i].classList.add("active");
        btns[i].classList.add("active");
        i++;

        if (slides.length == i) {
          i = 0;
        }
        if (i >= slides.length) {
          return;
        }
        player();
      }, 10000);
    };
    player();
  };
  autoPlaySlide();
});
