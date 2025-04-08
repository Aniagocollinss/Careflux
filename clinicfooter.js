document.addEventListener("DOMContentLoaded", function () {
    // Gallery Effect: Fade-in and Scale-up on Scroll
    const galleryItems = document.querySelectorAll(".image-container");

    function revealGallery() {
        galleryItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealGallery);
    revealGallery();

    // Footer Typing Effect
    const footerText = "© 2025 CareFlux. All Rights Reserved.";
    const footerElement = document.querySelector("footer p.mt-3");
    let index = 0;

    function typeEffect() {
        if (index < footerText.length) {
            footerElement.innerHTML += footerText.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        }
    }

    setTimeout(typeEffect, 1000); // Delay before typing starts
});
