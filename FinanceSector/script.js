document.addEventListener("DOMContentLoaded", function () {
    const ctaButton = document.querySelector(".cta-button");
    const navLinks = document.querySelectorAll(".nav-links a");

    ctaButton.addEventListener("mouseover", function () {
        ctaButton.style.transform = "scale(1.1)";
    });

    ctaButton.addEventListener("mouseout", function () {
        ctaButton.style.transform = "scale(1)";
    });

    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            link.style.color = "#ff758c";
        });
        link.addEventListener("mouseout", function () {
            link.style.color = "white";
        });
    });

    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for contacting us! We will get back to you soon.");
    });
});
