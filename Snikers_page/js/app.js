let firstImg = document.querySelector('.pro-img');
let secondImg = document.querySelector('.pro-img-2');
let thirdImg = document.querySelector('.pro-img-3');
let fourthImg = document.querySelector('.pro-img-4');


let firstImgBtn = document.querySelector('.firstimgbtn');
let secondImgBtn = document.querySelector('.secondimgbtn');
let thirdImgBtn = document.querySelector('.thirdimgbtn');
let fourthImgBtn = document.querySelector('.fourthimgbtn');

firstImgBtn.addEventListener('click', () => {
    firstImg.style.display = "block";
    secondImg.style.display = "none";
    thirdImg.style.display = "none";
    fourthImg.style.display = "none";
})

secondImgBtn.addEventListener('click', () => {
    firstImg.style.display = "none";
    secondImg.style.display = "block";
    thirdImg.style.display = "none";
    fourthImg.style.display = "none";
})

thirdImgBtn.addEventListener('click', () => {
    firstImg.style.display = "none";
    secondImg.style.display = "none";
    thirdImg.style.display = "block";
    fourthImg.style.display = "none";
})

fourthImgBtn.addEventListener('click', () => {
    firstImg.style.display = "none";
    secondImg.style.display = "none";
    thirdImg.style.display = "none";
    fourthImg.style.display = "block";
})
//end

let countItem = document.querySelector('.countitem');
let addItemBtn = document.querySelector('.addbtn');
let minusItemBtn = document.querySelector('.minusbtn');
let addToCartBtn = document.querySelector('.addtocartbtn');
let addCartCount = document.querySelector('.addcartcount');
let cartIcon = document.querySelector('.carticon');
let cartEmpty = document.querySelector('.cart-empty');
let cartEmpty1 = document.querySelector('.text-content1');
let cartEmpty2 = document.querySelector('.text-content2');
let cartEmpty3 = document.querySelector('.text-content3');
let totalPrice = document.querySelector('.sum');
let sum = 12500;
let trash = document.querySelector('.btn-trash');
let refreshButton = document.getElementById('refresh');
let yesBtn = document.querySelector('.yesbtn');
let noBtn = document.querySelector('.nobtn');
let loader = document.querySelector('.loader');
let defaultCount = 0;



addItemBtn.addEventListener('click', () => {
    defaultCount++;
    countItem.textContent = defaultCount;
})

minusItemBtn.addEventListener('click', () => {
    if (defaultCount > 0) {
        defaultCount--;
        countItem.textContent = defaultCount;
    }
})

addToCartBtn.addEventListener('click', () => {
    addCartCount.style.display = "unset";
    cartEmpty2.style.display = "block";
    cartEmpty1.style.display = "none";
    if (defaultCount > 0) {
        addCartCount.textContent = Number(addCartCount.textContent) + defaultCount;
        const price = Number(addCartCount.textContent.replace(/,/g, '')) * sum;
        totalPrice.textContent = price.toLocaleString();
    }
})

cartIcon.addEventListener('click', () => {
    if (Number(addCartCount.textContent) > 0) {
        cartEmpty.style.display = "block";
        cartEmpty2.style.display = "block";
        cartEmpty1.style.display = "none";
    } else {
        cartEmpty.style.display = "block";
        cartEmpty1.style.display = "block";
        cartEmpty2.style.display = "none";
    }
})

trash.addEventListener('click', () => {
    cartEmpty1.style.display = "none";
    cartEmpty2.style.display = "none";
    cartEmpty3.style.display = "block";
})

refreshButton.addEventListener("click", function () {
    refreshButton.textContent = "Loading......"
    location.reload();
});

yesBtn.addEventListener("click", function () {
    setTimeout(function() {
        location.reload();
    }, 3000); 
    yesBtn.style.display = "none";
    loader.style.display = "block";

    
    setTimeout(function () {
        loader.style.display = "none";
    }, 3000);
});

noBtn.addEventListener('click', () => {
    cartEmpty2.style.display = "block";
    cartEmpty3.style.display = "none";
})
