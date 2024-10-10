
class Person {  
    live() {
        console.log('living');
    }
}

class User extends Person {
    constructor(firstName, lastName, age) {
        super() //only derived class need to write super keyword
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    getBirthYear() {
        return new Date().getFullYear() - this.age
    }

    work() {
        console.log('user is working');
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(value) {
        const [firstName, lastName] = value.split(' ')
        this.firstName = firstName
        this.lastName = lastName
    }
}

const user1 = new User('Aman', 'Mishra', 32)


class Student extends User {  //prototype inside another prototype
    constructor(firstName, lastName, age, standard) {
        super(firstName, lastName, age) //if we need to receive from parent fields we need write super keyword
        this.standard = standard
    }
    study() {
        console.log('studying');
    }
}

const student1 = new Student('Aman', 'Mishra', 32, 'BCA')