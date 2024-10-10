
function Hi() {
  this.hello = 'world'
  console.log("this",this); //Hi {hello: 'world'}
}

new Hi() 

// -------------------------------------------
//user.printTags
const user = {
  firstName: 'trisha',
  lastName: 'karande',
  tags: ['a', 'b', 'c'],
  printTags: () => { //arrow function not support this keyword
    console.log("this",this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
  }
}

const user1 = {
    firstName: 'trisha',
    lastName: 'karande',
    tags: ['a', 'b', 'c'],
    printTags: function(){  //function support
      console.log("this",this); //{firstName: 'trisha', lastName: 'karande', tags: Array(3), printTags: ƒ}
    }
  }

// -------------------------------------------
const body  = document.querySelector('body')

body.addEventListener('click', (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
  console.log("body this",this); //Window
})

// -------------------------------------------
class User {
    constructor () {
      this.firstName = 'sai'
      console.log("construtor this",this);//User {firstName: 'sai'}
    }
  
    getUser() {
      console.log("getUser this",this); //User {firstName: 'sai'}
    }
  }

const obj=new User();