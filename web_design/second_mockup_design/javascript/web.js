document.getElementById("grayBtni").style.display = "none";
document.getElementById("grayBtnii").style.display = "none";
document.getElementById("grayBtniii").style.display = "none";
document.getElementById("grayBtniv").style.display = "none";
document.getElementById("grayBtnv").style.display = "none";
document.getElementById("grayBtnvi").style.display = "none";
document.getElementById("grayBtnvii").style.display = "none";
document.getElementById("grayBtnviii").style.display = "none";
document.getElementById("cartDot").style.display = "none";

let addtocartBtn = document.getElementById("redBtn");
let removeBtn = document.getElementById("grayBtni");
let cartIcon = document.getElementById("cartDot");

function addtocartHide() {
    addtocartBtn.style.display = "none";
    removeBtn.style.display = "block";
    cartIcon.style.display = "unset";
}

function removeHide() {
    removeBtn.style.display = "none";
    addtocartBtn.style.display = "block";
    cartIcon.style.display = "none";
}
addtocartBtn.addEventListener("click", addtocartHide);
removeBtn.addEventListener("click", removeHide);
