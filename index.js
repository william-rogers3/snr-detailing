function toggleMenu() {
    const contentContainer = document.querySelector(".content-container");
    const bars = document.getElementsByClassName("bar");
    const body = document.body;

    body.classList.toggle("overflow-blocked");
    contentContainer.classList.toggle("active");

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



let vh = window.innerHeight * 1;
document.documentElement.style.setProperty('--vh', `${vh}px`);