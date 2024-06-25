// // Import original image
// const originalImage = "images/img1.jpg";

// // Function to lazy load the original image
// function lazyLoadImage() {
//   const img = document.querySelector(".img");
//   img.onload = function () {
//     // Replace the "src" attribute with the original image URL
//     element.src = originalImage;
//   };
// }

// Call the function to lazy load the original image
// lazyLoadImage();

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".underdev-popup-wrapper")
    .classList.remove("hide-underdev-popup-wrapper");

  document
    .querySelector(".underdev-popup-wrapper .close-popup")
    .addEventListener("click", () => {
      document
        .querySelector(".underdev-popup-wrapper")
        .classList.add("hide-underdev-popup-wrapper");
    });

  // Header Scolling
});

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  console.log("Scrolled" + scrolled);
});
