let person = {
    name: "David",
    age:23,
    gender: "Male",
    interest: ["Music","sports"],
    greeting: function(){
        return "Hi! I'm " + this.name + '.';
    }
};
console.log(person.greeting());
console.log(person.age);
console.log(person["gender"]);
console.log(person.interest[0])
person.occupation = "Software developer";
console.log(person);