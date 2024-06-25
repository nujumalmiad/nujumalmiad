document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
  const animateSlide = (slide) => {
    const elements = slide.querySelectorAll("h2, p, div.buttons");
    gsap.fromTo(
      elements,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
  };
  animateSlide(slides);
});
