const container = document.getElementById('container');
let api_Input1 = "todos"
let api_url = `https://jsonplaceholder.typicode.com/${api_Input1}`;

//by default this is a get request
//types of request
/* 
POST: for creating new resources.
PUT: for fully updating existing resources.
PATCH: for patially updating existing resources.
DELETE: for removing existing resources.
*/
fetch(api_url)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch data from the API');
        } else {
            return response.json();
        }
    })
    .then((data) => {
        let slicedData = data.slice(0, 10);
        let wrapper = slicedData.map(item => {
            return `<div class="item">
        <h4>UserId:${item.userId}</h4>
        <h4>Id:${item.id}</h4>
        <h4>UserTitle:${item.title}</h4>
        <h4>UserBody:${item.completed}</h4>
    </div>`;
        })
        container.innerHTML = wrapper.join("");
    })


let userName = document.getElementById('name');
let userAge = document.getElementById('age');
let userBody = document.getElementById('body');
let userId = document.getElementById('Id');
let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const myData = {
        name: userName.value,
        age: userAge.value,
        Id: userId.value,
        body: userBody.value,
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(myData),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        return response.json();
    }).then((result) => {
        let wrapper = `<div class="item">
            <h4>Username:${result.name}</h4>
            <h4>Id:${result.Id}</h4>
            <h4>UserAge:${result.age}</h4>
            <h4>UserBody:${result.body}</h4>
        </div>`;
        
        container.insertAdjacentHTML("afterbegin", wrapper);
    })
    userName.value = "";
    userAge.value = "";
    userId.value = "";
    userBody.value = "";
});
