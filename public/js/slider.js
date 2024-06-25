document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  // GSAP Animation
  const animateSlide = (slides) => {
    slides.forEach((slide) => {
      gsap.fromTo(
        slide.querySelectorAll(".content h2"),
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.2 }
      );
      gsap.fromTo(
        slide.querySelectorAll(".content p"),
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 2, stagger: 0.2,  delay:1 }
      );
      gsap.fromTo(
        slide.querySelectorAll(".content div.buttons"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 2, stagger: 1, delay:2 }
      );
    });
  };

  animateSlide(slides);

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
    animateSlide(slides);
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
        animateSlide(slides);
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
