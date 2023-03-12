function toggleMenu() {
    if (window.innerWidth > 768) {
        return;
    }
    const contentContainer = document.querySelector(".content-container");
    const links = document.querySelector(".links");
    const bars = document.getElementsByClassName("bar");
    const body = document.body;

    body.classList.toggle("overflow-blocked");
    contentContainer.classList.toggle("active");
    links.classList.toggle("active");

    for (let i = 0; i < bars.length; i++) {
        bars[i].classList.toggle("active");
    }

}

setTimeout(function () {
    const homeTitles = document.querySelector(".home-titles");
    homeTitles.classList.add("home-title-onload");

    const homeContainer = document.querySelector("#home-container");
    homeContainer.classList.add("fade-in");
}, 1);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        // else {
        //     entry.target.classList.remove("show");
        // }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));



let vh = window.innerHeight;
document.documentElement.style.setProperty('--vh', `${vh}px`);