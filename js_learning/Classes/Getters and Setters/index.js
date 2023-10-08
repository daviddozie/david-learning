class person {
    constructor (firstname, surname, age) {
        this.firstname = firstname;
        this.lastname = surname;
        this.age = age;
    }

    fullname() {
        return 'My name is ' + this.firstname + ' ' + this.lastname;
    }

    get fname() { 
        return this.lastname;
    }

    set fname(value) {
        this.firstname = value;
    }
}

var David = new person("David", "Mgbede", 20);
console.log(David.fname);

David.fname = "mark";
console.log(David);