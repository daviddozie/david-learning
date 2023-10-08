let container = document.querySelector(".container"),
    first = document.querySelector("#first"),
    second = document.querySelector("#second"),
    newSpan = document.createElement("span");
newSpan.innerHTML = "Spantastic";
newSpan.style.color = "blue";
console.log(container);
container.insertBefore(newSpan, first);      
second.remove();
container.removeChild(first);
