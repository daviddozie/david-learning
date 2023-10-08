class person {
    constructor (firstname, surname, age){
        this.firstname = firstname;
        this.lastname = surname;
        this.age = age;
    }

    fullnameage(){
        return 'My name is ' + this.firstname + ' ' + this.lastname + ' i am ' + this.age + ' years old ';
    }
}

var David = new person("David", "Mgbede", 20);
console.log(David.fullnameage());
console.log(David);