let container = document.querySelector(".container"),
    first = document.querySelector("#first"),
    second = document.querySelector("#second"),
    newSpan = document.createElement("span");
newSpan.innerHTML = "Spantastic";
newSpan.style.color = "blue";
first.classList.toggle("green");
/*textcontext display the written text that is inside the string
    but the innerHTML display only the content even if inside the 
    string there is an element with a content:
*/
second.textContent = "Hello World";
console.dir(second);
