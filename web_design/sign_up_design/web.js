let submitForm = document.getElementById("formValidation"),
    fname = document.getElementById("firstName");
    lname = document.getElementById("lastName");
    email = document.getElementById("email");
    phoneNumber = document.getElementById("phoneNumber");
    password = document.getElementById("password");
    comfirmPassword = document.getElementById("comfirmPassword");

//firstName validation.
function firstnameValidation(firstname,event) {
    if (firstname.value === "") {
        firstname.nextElementSibling.innerHTML = "Please enter your First Name";
        event.preventDefault();
        return false;
    } else {
        firstname.nextElementSibling.innerHTML = "";
        return true;
    }
}

//lastName validation.
function lastnameValidation(lastname,event) {
    if (lastname.value === "") {
        lastname.nextElementSibling.innerHTML = "Please enter your Last Name";
        event.preventDefault();
        return false;
    } else {
        lastname.nextElementSibling.innerHTML = "";
        return true;
    }
}

//email validation.
function emailValidation(email,event) {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value === "") {
        email.nextElementSibling.innerHTML = "Please enter your email address";
        event.preventDefault();
        return false;
    } else if (!email.value.match(emailRegex)) {
        email.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false;
    } else {
        email.nextElementSibling.innerHTML = "";
        return true;
    }
}

//phoneNumber validation.
function phonenumberValidation(number,event) {
    let PNRegex = /^(?:\+?234|0)[1-9]\d{9}$/;
    if (number.value === "") {
        number.nextElementSibling.innerHTML = "Please enter your Phone Number";
        event.preventDefault();
        return false;
    } else if (!number.value.match(PNRegex)) {
        number.nextElementSibling.innerHTML = "Please enter a valid Phone Number";
        event.preventDefault();
        return false;
    } else {
        number.nextElementSibling.innerHTML = "";
        return true;
    }
}

//password validation.
function passwordValidation(password,event) {
    let pwdRegex = /^(?=.*[A-Z])(?=.*[@*+%$#&])(?=.*\d).{6,}$/;
    if (password.value === "") {
        password.nextElementSibling.innerHTML = "Please enter password";
        event.preventDefault();
        return false;
    } else if  (!password.value.match(pwdRegex)) {
      password.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @*$#&+% and 1 number.";
      event.preventDefault();
      return false;
    } else {
        password.nextElementSibling.innerHTML = "";
        return true;
    }
}

//comfirm password validation.
function comfirmpasswordValidation(comfirmpassword,event) {
    if (comfirmpassword.value === "") {
        comfirmpassword.nextElementSibling.innerHTML = "Please comfirm your password";
        event.preventDefault();
        return false;
    } else if (comfirmpassword.value !== password.value) {
        comfirmpassword.nextElementSibling.innerHTML = "Your passwords don't match";
        event.preventDefault();
        return false;
    } else {
        comfirmpassword.nextElementSibling.innerHTML = "";
        return true;
    }
}

//loop function
function validateForm(e){
    firstnameValidation(fname, e);
    lastnameValidation(lname, e);
    emailValidation(email, e);
    phonenumberValidation(phoneNumber, e);
    passwordValidation(password, e);
    comfirmpasswordValidation(comfirmPassword, e);

    return true;
}

submitForm.addEventListener("submit", validateForm)
//password icon.
for (let p = 1; p < 3; p++) {
    let passwordHide = document.getElementsByClassName(`hidep${p}`)[0];
    let passwordShow = document.getElementsByClassName(`showp${p}`)[0];
    let passwordText = document.getElementsByClassName(`password${p}`)[0];

    passwordHide.addEventListener("click", function ()  {
        passwordHide.style.display = "none";
        passwordShow.style.display = "unset";
        if (passwordText.type  === "password") {
            passwordText.type = "text";
    
        } else {
            passwordText.type = "password";
        }
    })

    passwordShow.addEventListener("click", function () {
        passwordShow.style.display = "none";
        passwordHide.style.display = "unset";
        if (passwordText.type  === "text") {
            passwordText.type = "password";
    
        } else {
            passwordText.type = "text";
        }
    })
}
