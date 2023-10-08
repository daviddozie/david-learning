let submitForm = document.getElementById("validateForm"),
    phoneNumber = document.getElementById("number"),
    paymentMethod = document.getElementById("paymentMethod"),
    cardNumber = document.getElementById("cardNumber"),
    cardName = document.getElementById("cardName"),
    expiryDate = document.getElementById("expiryDate"),
    cvc = document.getElementById("cvc");


// phone number validation.
function validatenumber(number,event) {
    let PNRegex = /^[0-9]{7,15}$/;
    if (number.value === "") {
        number.nextElementSibling.innerHTML = "Please enter your phone number";
        event.preventDefault();
        return false;
    } else if (!number.value.match(PNRegex)) {
        number.nextElementSibling.innerHTML = "Please enter a valid phone number";
        event.preventDefault();
        return false;
    } else {
        number.nextElementSibling.innerHTML = "";
        return true;
    }
}

//paymentmethod valiadtion.
function validatepayment(payment,event) {
    if (payment.value === "") {
        payment.nextElementSibling.innerHTML = "Please enter payment method";
        event.preventDefault();
        return false;
    } else {
        payment.nextElementSibling.innerHTML = "";
        return true;
    }
}

//card number validation.
function validatecardnumber(cardnumber,event) {
    let CN = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13})$/;
    if (cardnumber.value === "") {
        cardnumber.nextElementSibling.innerHTML = "Please enter your card number";
        event.preventDefault();
        return false;
    } else if (!cardnumber.value.match(CN))  {
        cardnumber.nextElementSibling.innerHTML = "Please enter a valid card number";
        event.preventDefault();
        return false;
    } else {
        cardnumber.nextElementSibling.innerHTML = "";
        return true;
    }
}

//card name validation.
function validatecardname(cardname,event) {
    let Cn  = /^[A-Za-z\s'-]+$/;
    if (cardname.value === "") {
        cardname.nextElementSibling.innerHTML = "Please enter your card name";
        event.preventDefault();
        return false
    } else if (cardname.valie.match(Cn)) {
        cardname.nextElementSibling.innerHTML = "card name not found";
        event.preventDefault();
        return false;
    } else {
        cardname.nextElementSibling.innerHTML = "";
        return true;
    }
}

//expiry date validation.
function validateexpirydate(expirydate,event) {
    if (expirydate.value === "") {
        expirydate.nextElementSibling.innerHTML = "Please enter expiry date";
        event.preventDefault();
        return false;
    } else {
        expirydate.nextElementSibling.innerHTML = "";
        return true;
    }
}

//cvc validation.
function validatecvc(cvc,event) {
    let cvcRegex =  /^[0-9]{3}$|^[0-9]{4}$/;
    if (cvc.value === "") {
        cvc.nextElementSibling.innerHTML = "Please enter card verification code";
        event.preventDefault();
        return false;
    } else if (!cvc.value.match(cvcRegex)) {
        cvc.nextElementSibling.innerHTML = "Please enter a valid card verification code";
        event.preventDefault();
        return false;
    } else {
        cvc.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validateForm(e) {
    validatenumber(phoneNumber, e);
    validatepayment(paymentMethod, e);
    validatecardnumber(cardNumber, e);
    validatecardname(cardName, e);
    validateexpirydate(expiryDate,e);
    validatecvc(cvc, e);
    
    return true;
}

submitForm.addEventListener("submit", validateForm);