let submitForm = document.getElementById("validateForm");
    email = document.getElementById("email");
    password = document.getElementById("password");
    fullName = document.getElementById("fullName");
    phoneNumber = document.getElementById("phoneNumber");
    year = document.getElementById("year");
    gender = document.getElementById("gender");
    bio = document.getElementById("bio");
;

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

//email field validation:
function emailFieldValidation(event) {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.value.match(emailRegex)) {
        email.nextElementSibling.innerHTML = "Please input a valid email";
        event.preventDefault();
        return false;
    } else {
        email.nextElementSibling.innerHTML = "";
        return true;
    }
}

//password field validation:
function passwordValidation(event) {
    let pwdRegex = /^[a-z0-9]+$/i;
    if (!password.value.match(pwdRegex)) {
        password.nextElementSibling.innerHTML = "Please password must contain letters or numbers only";
        event.preventDefault();
        return false;
    } else if  (!(password.value.lenght >= 8)) {
      password.nextElementSibling.innerHTML = "Please password length must be equal to or greater than 8";
      event.preventDefault();
      return false;
    } else {
        password.nextElementSibling.innerHTML = "";
        return true;
    }
}
//year field validation:
function yearValidation(event) {
    let yearRegex = /^(19[5-9]\d|20[0-4]\d|2050)$/;
    if (!year.value.match(yearRegex)) {
        year.nextElementSibling.innerHTML = "Please input a valid date";
        event.preventDefault();
        return false;
    } else {
        year.nextElementSibling.innerHTML = "";
        return true;
    }
}

//field required function:
function validateForm(e) {
    required(email, e);
    required(password, e);
    required(fullName, e);
    required(phoneNumber, e);
    required(year, e);
    required(gender, e);
    required(bio, e);
    emailFieldValidation(e);
    passwordValidation(e);
    yearValidation(e);

    return true;
}

submitForm.addEventListener("submit", validateForm);
