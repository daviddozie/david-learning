let submitForm = document.getElementById("validateform");
let userName = document.getElementById("username");
let message = document.getElementById("message");

function validateName(field, event) {
    if (field.value === "") {
        field.nextElementSibling.innerHTML = "Please input your name";
        message.style.color = "red";
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = `good day ${field.value} you are welcome`;
        message.style.color = "green";
        event.preventDefault()
        return true;
    }
}

function validateForm(e) {
    validateName(userName, e);
}

submitForm.addEventListener("input", validateForm);
//end

let notification = document.getElementById("num");
let notificationBlock = document.getElementsByClassName("notification");

notification.textContent = notificationBlock.length;

let countText = document.querySelector('#countText');
let textField = document.querySelector('#textField');


textField.addEventListener('input', () => {
    let text = textField.value;
    let textLenght = text.length;
    let myButton = document.getElementById("mybtn");

    countText.innerText = textLenght;

    if (textLenght > 100) {
        textField.nextElementSibling.innerHTML = "text must not be greater than 100";
        myButton.disabled = true;
        myButton.style.backgroundColor = "rgb(221, 187, 102)";
    } else {
        textField.nextElementSibling.innerHTML = "";
        myButton.disabled = false;
        myButton.style.backgroundColor = "";
    }

})

let btn = document.getElementById("click");

btn.addEventListener('click', () => {
    btn.innerHTML = "Loading......"
})

const product = [
    {
        prices: 300000,
        itemPrice: 300000,
        itemCount: 0,
        instock: 10,
        itemStock: 10,
    },

    {
        prices: 10000,
        itemPrice: 10000,
        itemCount: 0,
        instock: 7,
        itemStock: 7,
    },

    {
        prices: 200000,
        itemPrice:200000,
        itemCount: 0,
        instock: 4,
        itemStock: 4,
    },
];

let totalItemCost = 0;

for (let i = 0; i <= product.length; i++) {
    let stock = document.getElementsByClassName(`stock${i + 1}`)[0];
    let addItem = document.getElementsByClassName(`addbtn${i + 1}`)[0];
    let minusItem = document.getElementsByClassName(`minusbtn${i + 1}`)[0];
    let numItem = document.getElementsByClassName(`itemNum${i + 1}`)[0];
    let totalCost = document.getElementsByClassName(`totalCost${i + 1}`)[0];
    
   

    addItem.addEventListener('click', () => {
        if (product[i].itemCount < product[i].instock) {
            product[i].itemCount++;
            numItem.textContent = product[i].itemCount;

            product[i].itemStock--;
            stock.textContent = product[i].itemStock;

            let totalPrice = product[i].prices * product[i].itemCount;
            totalCost.textContent = totalPrice.toLocaleString();

            totalItemCost += product[i].prices;
            updateTotalCost();
        }
        
    })

    minusItem.addEventListener('click', () => {
        if (product[i].itemCount > 0) {
            product[i].itemCount--;
            numItem.textContent = product[i].itemCount;

            product[i].itemStock++;
            stock.textContent = product[i].itemStock;

            let totalPrice = product[i].prices * product[i].itemCount;
            totalCost.textContent = totalPrice.toLocaleString();

            totalItemCost -= product[i].prices;
            updateTotalCost();
        }
    })
}

function updateTotalCost() {
    let totalCostDispaly = document.querySelector('.sum');
    totalCostDispaly.textContent = totalItemCost.toLocaleString();
}

