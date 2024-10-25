function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open"); 
    icon.classList.toggle("open"); 
}
let currentImageIndex = 0;

function openLightbox() {
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function showImage(n) {
    const images = document.querySelectorAll(".gallery img");
    const lightboxImage = document.getElementById("lightbox-img");
    const caption = document.getElementById("caption");

    currentImageIndex = n - 1;
    lightboxImage.src = images[currentImageIndex].src;
    caption.innerHTML = images[currentImageIndex].alt;
}

function changeImage(n) {
    const images = document.querySelectorAll(".gallery img");
    currentImageIndex = (currentImageIndex + n + images.length) % images.length;
    showImage(currentImageIndex + 1);
}