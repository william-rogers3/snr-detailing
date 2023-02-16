setTimeout(function () {
    const homeTitles = document.querySelector(".home-titles");
    homeTitles.classList.add("home-title-onload");

    const homeContainer = document.querySelector("#home-container");
    homeContainer.classList.add("fade-in");
}, 1);