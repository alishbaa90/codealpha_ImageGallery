// Get modal elements
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Get all gallery items (images)
const galleryItems = document.querySelectorAll(".gallery-item");
let currentIndex = 0;

// Open the modal when an image is clicked
galleryItems.forEach((item, index) => {
    item.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;  
        captionText.innerHTML = this.alt;  
        currentIndex = index;
    });
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});


prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
    modalImg.src = galleryItems[currentIndex].src;
    captionText.innerHTML = galleryItems[currentIndex].alt;
});

nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
    modalImg.src = galleryItems[currentIndex].src;
    captionText.innerHTML = galleryItems[currentIndex].alt;
});

window.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
