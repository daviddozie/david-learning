let technologyNav = document.getElementById("technologybar");
let technologyBorder = document.getElementById("technology-dropdown");
let technologyHolder = document.getElementById("technology-nav");

technologyNav.addEventListener("mouseover", function () {
    technologyBorder.style.display = "block";
})

technologyNav.addEventListener("mousemove", function () {
    technologyBorder.style.display = "block";
})

technologyBorder.addEventListener("mouseleave", function () {
    technologyBorder.style.display = "none";
})
/*
technologyHolder.addEventListener("mouseleave", function () {
    technologyBorder.style.display = "none";
})*/