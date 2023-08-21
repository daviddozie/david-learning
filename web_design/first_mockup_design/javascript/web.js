document.getElementById("highLighti").style.display = "none";
document.getElementById("highLightii").style.display = "none";
document.getElementById("highLightiii").style.display = "none";
document.getElementById("highLightiv").style.display = "none";

let place = document.getElementById("location");
let content = document.getElementById("highLighti");
let fContent = document.getElementById("grayHighlight");

function venue() {
    if (place.value === "") {
        fContent.style.display = "block";
        content.style.display = "none";
    } else {
        content.style.display = "block";
        fContent.style.display = "none"
    }
}


place.addEventListener("change", venue);