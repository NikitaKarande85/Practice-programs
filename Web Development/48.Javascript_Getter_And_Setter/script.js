class CreateUser {
    constructor(firstName, lastName, age) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
    }
  
    getBirthYear() {
      return new Date().getFullYear() - this.age
    }
  
    //get
    get fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  
    //set
    set fullName(value) {
      const [firstName, lastName] = value.split(' ')
      this.firstName = firstName
      this.lastName = lastName
    }
  }
 
  //new keyword return object
  const user1 = new CreateUser('Aman', 'Mishra', 32)
  const user2 = new CreateUser('Anurag', 'Singh', 72)

  //don't call as a function 
  //get
  console.log(user1.fullName);

  //set
  const mynamedata=user1.fullName="Nikita Karande"
  console.log(mynamedata);