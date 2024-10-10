
class CreateUser {
    constructor(firstName, lastName, age) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
    }
  
    static run = 'running'
  
    static {
      this.hi = 'hello'
      this.getFullName = function() {
        return this.firstName + ' ' + this.lastName
      }
    }
  
    getBirthYear() {
      return new Date().getFullYear() - this.age
    }
    
  }
  
  const user1 = new CreateUser('Aman', 'Mishra', 32)
  console.log("user1.run",user1.run);  //undefined
  console.log("CreateUser.run",CreateUser.run); //running

  //static properties are set on class.
  //static property call automatically without call
  console.log("CreateUser->")
  console.dir(CreateUser)
  console.log("user1->")
  console.log(user1)
  