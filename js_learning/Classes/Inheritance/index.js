class person {
    constructor (firstname, surname, age) {
        this.firstname = firstname;
        this.lastname = surname;
        this.age = age;
    }

    fullname(){
        return 'My name is ' + this.firstname + ' ' + this.lastname;
    }
}

class parent extends person {
    constructor(firstname, lastname, occupation) {
        super(firstname, lastname);
        this.occupation = occupation
    }
}

var David = new parent("David", "Mgbede", "Software Developer");
console.log(David);