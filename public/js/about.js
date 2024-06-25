// script.js
document.addEventListener("DOMContentLoaded", () => {
  const serviceCards = document.querySelectorAll(".service-card");
  const modal = document.getElementById("imageModal");
  const modalImg = document.querySelector(".modal-image");
  const closeModal = document.querySelector(".close");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let currentIndex = 0;

  const images = [
    "/images/c.jpg",
    "/images/mm.jpg",
    "/images/em.jpg",
    "/images/mp.jpg",
    "/images/fm.jpg",
  ];

  serviceCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      currentIndex = index;
      openModal(images[currentIndex]);
    });

    const icon = card.querySelector(".enlarge-icon");
    icon.addEventListener("click", (e) => {
      e.stopPropagation();
      currentIndex = index;
      openModal(images[currentIndex]);
    });
  });

  function openModal(imageSrc) {
    modal.style.display = "block";
    modalImg.src = imageSrc;
  }

  function closeModalFunc() {
    modal.style.display = "none";
  }

  closeModal.addEventListener("click", closeModalFunc);

  prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex];
  });

  next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex];
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModalFunc();
    }
  });
});
