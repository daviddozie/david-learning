var buttons = document.querySelectorAll("button");

//loop through buttons
buttons.forEach(button => {
    button.addEventListener("click", function() {
            alert(button.innerText + " was clicked ");
        });  
    });