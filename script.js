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

const carElements = document.getElementsByClassName("car");
carElements[0].classList.add("selected");

for (let i = 0; i < carElements.length; i++) {
    carElements[i].addEventListener("click", () => {
        for (let i = 0; i < carElements.length; i++) {
            carElements[i].classList.remove("selected");
        }
        carElements[i].classList.add("selected");
    });
}