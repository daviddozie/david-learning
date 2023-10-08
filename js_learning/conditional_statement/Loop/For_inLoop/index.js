var str = "";
    person = {
        name: "David",
        age: 20
    };
for (x in person) {
    str += person[x];
}

console.log(str)