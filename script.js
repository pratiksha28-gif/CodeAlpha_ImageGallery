const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

// Open lightbox
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = "flex";
  });
});

// Show image
function showImage() {
  lightboxImg.src = images[currentIndex].src;
}

// Close lightbox
function closeLightbox() {
  lightbox.style.display = "none";
}

// Next image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

// Previous image
function prevImage() {
  currentIndex =
    (currentIndex - 1 + images.length) % images.length;
  showImage();
}