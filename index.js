var detailCost = new Map();
detailCost.set('small-car', {
    0: '$49.99',
    1: '$79.99',
    2: '$59.99'
});
detailCost.set('sedan', {
    0: '$49.99',
    1: '$79.99',
    2: '$64.99'
});
detailCost.set('suv', {
    0: '$64.99',
    1: '$89.99',
    2: '$69.99'
});
detailCost.set('van', {
    0: '$89.99',
    1: '$119.99',
    2: '$94.99'
});
detailCost.set('truck', {
    0: '$94.99',
    1: '$119.99',
    2: '$89.99'
});
// values are for basic exterior, premium exterior, basic interior in that order.
// values are labeled as numbers to simplify for loop.

function displayPricing(carType) {
    let carSelection = document.getElementById(`${carType}`);
    let prices = document.getElementsByClassName("price");

    for (let i = 0; i < 3; i++) {
        prices[i].textContent = `${detailCost.get(`${carType}`)[`${i}`]}+`
    }
}


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

const carElements = document.getElementsByClassName("car");
carElements[0].classList.add("selected");

for (let i = 0; i < carElements.length; i++) {
    carElements[i].addEventListener("click", () => {
        for (let i = 0; i < carElements.length; i++) {
            carElements[i].classList.remove("selected");
        }
        carElements[i].classList.add("selected");
        const car = carElements[i].id;
        displayPricing(car);
    });

}