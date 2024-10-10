// function CreateUser(firstName,lastName,age){
//     const user={
//         firstName,
//         lastName,
//         age,
//         getBirthYear:CreateUser.commonMethod.getBirthYear
//     }
//     return user;
// }

// CreateUser.commonMethod={
//     getBirthYear(){
//         console.log("this",this);
//         return new Date.getFullYear()-this.age;
//     }
// }
// const user1 = new CreateUser('Aman', 'Mishra', 32)
// console.log("user1",user1);


function CreateUser(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  
  CreateUser.prototype.getBirthYear = function() {
    return new Date().getFullYear() - this.age
  }
  
  CreateUser.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName
  }
  
  const user1 = new CreateUser('Aman', 'Mishra', 32)
  console.log("user1",user1);
  const user2 = new CreateUser('Anurag', 'Singh', 72)