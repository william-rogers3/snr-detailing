var detailCost = new Map();
detailCost.set('small-car', {0: '$59.99', 1: '$69.99', 2: '$119.99', 3: '$89.99'});
detailCost.set('sedan',{0: '$64.99', 1: '$74.99', 2: '$129.99', 3: '$94.99'});
detailCost.set('suv',{0: '$69.99', 1: '$89.99', 2: '$149.99', 3: '$99.99'});
detailCost.set('van',{0: '$99.99', 1: '$109.99', 2: '$199.99', 3: '$119.99'});
detailCost.set('truck',{0: '$99.99', 1: '$99.99', 2: '$189.99', 3: '$129.99'});
// values are for basic exterior, basic interior, premium exterior in that order.
// values are labeled as numbers to simplify for loop.

function displayPricing(carType) {
    let carSelection = document.getElementById(`${carType}`);
    let prices = document.getElementsByClassName("price");

    for (let i = 0; i < 4; i++) {
        prices[i].textContent = `${detailCost.get(`${carType}`)[`${i}`]}+`
    }
}

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
        const car = carElements[i].id;
        displayPricing(car);
    });
}