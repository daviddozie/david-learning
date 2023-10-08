let submitForm = document.getElementById("validateForm"),
    fullName = document.getElementById("fullname");
    email = document.getElementById("email");
    subject = document.getElementById("subject");
    message = document.getElementById("message");

//fullname validation.
function validatefullName(fullname,event) {
    let nameRegex = /^[a-zA-Z\s]+$/
    if (fullname.value === "") {
        fullname.nextElementSibling.innerHTML = "Please enter your Name";
        event.preventDefault();
        return false;
    } else if (!fullname.value.match(nameRegex)) {
        fullname.nextElementSibling.innerHTML = "This field do not accept special characters";
        event.preventDefault();
        return false;
    } else {
        fullname.nextElementSibling.innerHTML = "";
        return true;
    }
}

//email validation.
function validateEmail(emailfield,event) {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (emailfield.value === "") {
        emailfield.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
        return false;
    } else if (!emailfield.value.match(emailRegex)) {
        emailfield.nextElementSibling.innerHTML = "Please enter a vaild email";
        event.preventDefault();
        return false;
    } else {
        emailfield.nextElementSibling.innerHTML = "";
        return true;
    }
}

//subject validation.
function validateSubject(subjectfield,event) {
    if (subjectfield.value === "") {
        subjectfield.nextElementSibling.innerHTML = "Please enter a message subject";
        event.preventDefault();
        return false;
    } else {
        subjectfield.nextElementSibling.innerHTML = "";
        return true;
    }
}

//message validation.
function validatemessage(messagefield, event) {
    if (messagefield.value === "") {
        messagefield.nextElementSibling.innerHTML = "Please enter your Message";
        event.preventDefault();
        return false;
    } else {
        messagefield.nextElementSibling.innerHTML = "";
        return true;
    }
}

function formValidation(e) {
    validatefullName(fullName, e);
    validateEmail(email, e);
    validateSubject(subject, e);
    validatemessage(message, e);
}

submitForm.addEventListener("submit", formValidation);