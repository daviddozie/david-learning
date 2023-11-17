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
            return `<div class="item" id="${item.id}">
        <h4>UserId:${item.userId}</h4>
        <h4>Id:${item.id}</h4>
        <h4>UserTitle:${item.title}</h4>
        <h4>UserBody:${item.completed}</h4>
        <button type="button" onclick="del(${item.id})">del</button>
        <button type="button" onclick="Edit(${item.id})">Edit</button>
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
        let wrapper = `<div class="item" id="${result.id}">
            <h4>Username:${result.name}</h4>
            <h4>UserAge:${result.age}</h4>
            <h4>UserId:${result.Id}</h4>
            <h4>Usermessage:${result.body}</h4>
            <button type="button" onclick="del(${result.id})">del</button>
            <button type="button" onclick="Edit(${result.id})">Edit</button>
        </div>`;
        
        container.insertAdjacentHTML("afterbegin", wrapper);
    })
    userName.value = "";
    userAge.value = "";
    userId.value = "";
    userBody.value = "";
});

function del(id) {
    let apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

    fetch(apiUrl, {
        method: "DELETE",
    }).then((response) => {

        let itemToRemove = document.getElementById(`${id}`);

        if (itemToRemove) {
            itemToRemove.remove();
        }
    })
}