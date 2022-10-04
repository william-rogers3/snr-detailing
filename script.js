setTimeout(function () {

    const homeTitles = document.querySelector(".home-titles");
    homeTitles.classList.add("home-title-onload");

    const homeContainer = document.querySelector(".home-container");
    homeContainer.classList.add("fade-in");

}, 1);


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));