let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    
    // Hide all slides initially
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;  // Reset to the first slide after the last slide
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 4 seconds
    setTimeout(showSlides, 4000);  
}

// Initialize slideshow and show the first slide
document.addEventListener('DOMContentLoaded', (event) => {
    showSlides();
});
