for (r = 1; r <= 4; r++) {
    let place = document.getElementById("location");
    let grayitem = document.getElementsByClassName(`gray${r}`)[0];
    let reditem = document.getElementsByClassName(`red${r}`)[0];

    function venue() {
        if (place.value === "") {
            grayitem.style.display = "block";
            reditem.style.display = "none";
        } else {
            reditem.style.display = "block";
            grayitem.style.display = "none"
        }
    }

    place.addEventListener("change", venue);
}

//the newsletter validation.

let submitForm = document.getElementById("validateNewsletter"),
    email = document.getElementById("email");

function emailValidation (field,event) {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if ( field.value === "") {
        field.nextElementSibling.innerHTML = "Please enter your email address";
        event.preventDefault();
        return false;
    }else if (!field.value.match(emailRegex)) {
        field.nextElementSibling.innerHTML = "Please enter a valid email address";
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validateForm(e) {
    emailValidation(email, e);
}

submitForm.addEventListener("submit", validateForm);

function ourReuseableFunction() {
    console.log("hey Wolrd");
  }
  
  ourReuseableFunction();
  
  function reuseableFunction() {
    console.log("hello World");
  }
  
  reuseableFunction();

var outerWear  = "T-shirt";

function myOutfit() {
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

function minusSeven(num) {
    return num -7;
}

console.log(minusSeven(10));

var sum = 0;
function addthree() {
  return sum += 3;
}

console.log(addthree());

var charge = 0;

function charged(quntity) {
    return (quntity + 5) / 3;
}

charge = charged(10);
console.log(charge);

function nextInLine(arr, item) {

    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before:" + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After:" + JSON.stringify(testArr));

function trueOrFalse(itistrue) {
    if (itistrue)  {
        return "yes, it is true";
    }
    return "no, it is not true";
}

console.log(trueOrFalse(true));

function equalScore(val) {
    if (val == 12) {
        return "equal";
    }
    return "not equal";
}

console.log(equalScore(10));

function compareEquality(a,b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10"));

function andFunction(val) {
    if (val <= 50 && val >= 25) {
        return "correct";
    }
    return "incorrect";
}

console.log(andFunction(30));

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "stuff";
            break;  
    }

    return answer;
}

console.log(caseInSwitch(1));

var count = 0;
function cardCount(card) {
    switch(card) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "j":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet = 'hold';
    if (count > 0) {
        holdbet = 'bet';
    }

    return count + " " + holdbet;
}

cardCount(2); cardCount("k"); cardCount(10); cardCount("K");
console.log(cardCount(4));

var myHouse = {
    name: 'bongalow',
    location: 'bodija',
    size: 'large'
}

delete myHouse.size;
console.log(myHouse);