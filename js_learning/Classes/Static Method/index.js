class person {
    constructor (firstname, surname, age){
        this.firstname = firstname;
        this.lastname = surname;
        this.age = age;
    }

    static fullname(obj){
        return 'My name is ' + obj.firstname + ' ' + obj.lastname;
    }
}

var David = new person("David", "Mgbede", 20);
console.log(person.fullname(David));