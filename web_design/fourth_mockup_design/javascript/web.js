let submitForm = document.getElementById("validateForm"),
    phoneNumber = document.getElementById("number"),
    paymentMethod = document.getElementById("paymentMethod"),
    cardNumber = document.getElementById("cardNumber"),
    cardName = document.getElementById("cardName"),
    expiryDate = document.getElementById("expiryDate"),
    cvc = document.getElementById("cvc");

function required(field, event) {
    if (field.value === "") {
        field.nextElementSibling.innerHTML = "This field is required";
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function cardValidation(event) {
    if (cardNumber.value ==="") {
        cardNumber.nextElementSibling.innerHTML = "This field is required";
        event.preventDefault();
        return false;
    } else if (!(cardNumber.value.length <= 19)) {
        cardNumber.nextElementSibling.innerHTML = "Please card number must be 19 digit";
        event.preventDefault();
        return false;
    } else {
        cardNumber.nextElementSibling.innerHTML = "";
        return true;
    }
}


function cvcValidation(event) {
    if (cvc.value === "") {
        cvc.nextElementSibling.innerHTML = "This field is required";
        event.preventDefault();
        return false;
    } else if (cvc.value.length !== 3) {
        cvc.nextElementSibling.innerHTML = "please card verification code must be 3 digit";
        event.preventDefault();
        return false;
    } else {
        cvc.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validateForm(e) {
    required(phoneNumber, e);
    required(paymentMethod, e);
    required(cardName, e);
    required(cardNumber, e);
    required(expiryDate, e);
    cvcValidation(e);
    cardValidation(e);
    return true;
}



submitForm.addEventListener("click", validateForm);