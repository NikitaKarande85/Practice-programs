// 1.DataTypes
// ----------------------------------------
// There are 2 datatypes
// i.Primitive datatypes(Value type)
// ii.Non Primitive datatypes(refference type)

// i.Primitive datatypes
// 1.number
// 2.string
// 3.undefined
// 4.null
// 5.bigint
// 6.boolean
// 7.symbol

// ii.Non Primitive datatypes
// 1.object
// 2.Array
// 3.Function

// -------------------------------------------
// -----------------------string---------------------------------------
let name = "Nikita";
console.log(name);
console.log("typeof", typeof (name));  //string

// ------------------------number-------------------------------------
let number = 100;
console.log(number);
console.log("typeof", typeof (number));  //number



// -------------------------------------------------------------------
// convert string to number
let num = '101'
console.log("typeof", typeof (num));
console.log(+ num);

let copy = ""
copy = (+ num);
console.log("typeof", typeof (copy));  //number

// -----------------------------------------------------------------
//convert number to string
let digits = 100;
console.log("" + digits)
let copydigit = ("" + digits);
console.log("typeof", typeof (copydigit));  //string



// -------------------------boolean-------------------------------------
let bool = true;
console.log(typeof (bool))  //boolean
console.log(+ bool)  //1
bool = false;
console.log(+ bool)  //0


// -------------------------undefined-------------------------------------
let unknownVar = undefined;
console.log(typeof (unknownVar))   //undefined

// -------------------------null-------------------------------------
// Its not an object.It bug of javascript.
let unknown = null;
console.log(typeof (unknown))    //object




// -----------------------------------------------------------------------
// ---------------------Variables---------------------------------------
// ------------------let,var,const--------------------------

{ let local = 10 }
{ var global = 20 }

// console.log(local)  //throw error
console.log(global)    //20

let Myname = "nikita";

const content = "My name is " + Myname + ". " + " I am " + global + " years old";
console.log(content);
// content="Trying override const"; //Uncaught TypeError: Assignment to constant variable.


// -----------Alert, Confirm, & Prompt----------
// alert("Hello");
// const returnValue= prompt();
// console.log("returnValue",returnValue); //nikita input value
// const isConfirm=confirm()
// console.log("isConfirm",isConfirm); //true //false

// ----------------String--------------------
let nameString = "I love google company";

console.log("nameString[0]", nameString[0]) //I
console.log("nameString[1]", nameString[1])
console.log("nameString[2]", nameString[2]) //l
console.log("nameString[3]", nameString[3]) //o
console.log("nameString[4]", nameString[4]) //v
console.log("nameString[5]", nameString[5]) //e
console.log("charAt:", nameString.charAt(5))  //e

//property
console.log("nameString.length=", nameString.length); //21

//method
console.log("Uppercase", nameString.toUpperCase()); //I LOVE GOOGLE COMPANY
console.log("LowerCase", nameString.toLowerCase()); //i love google company

let data = "   i am nikita heloo  "
let trimData = data.trim(); //start and end space remove
console.log("trim:", trimData);
trimData = data.trimStart();
console.log("trimStart:", trimData);
trimData = data.trimEnd();
console.log("trimEnd:", trimData);

//method(with arguments)
let yes = 'Yes,';
let myInfo = "I am selected in google";
console.log(myInfo.includes('am')); //true

console.log(myInfo.indexOf('m'));  //3
console.log(myInfo.indexOf('z'));  //-1

console.log(myInfo.replace('am', 'm')); //I m selected in google
console.log(myInfo.replaceAll('am', 'm'));

console.log(yes.concat(myInfo));  //Yes,I am selected in google

let bankNumber = '9511';
console.log(bankNumber.padStart(16, '*')) //************9511
console.log(bankNumber.padEnd(16, '*')) //9511************

let jalwa = "Niks"
console.log("charAt:", bankNumber.charCodeAt('s')) //ASCII //57

console.log(jalwa.split()) //convert string to array //['Niks']
console.log(jalwa.split('')) //(4) ['N', 'i', 'k', 's']

// -------------switch case------------------

// const username = 'Nikita'
// const userAge = 24

// if (dayNumber === 0) {
//   console.log('It is Sunday Today')
// } else if (dayNumber === 1) {
//   console.log('It is Monday Today')
// } else if (dayNumber === 2) {
//   console.log('It is Tuesday Today')
// } else if (dayNumber === 3) {
//   console.log('It is Wednesday Today')
// } else if (dayNumber === 4) {
//   console.log('It is Thursday Today')
// } else if (dayNumber === 5) {
//   console.log('It is Friday Today')
// } else if (dayNumber === 6) {
//   console.log('It is Saturday Today')
// } else {
//   console.log('Please Enter a Valid Day Number')
// }

// const dayNumber = 14

// switch (dayNumber) {
//   case 0:
//     console.log('It is Sunday Today')
//     break
//   case 1:
//     console.log('It is Monday Today')
//     break
//   case 2:
//     console.log('It is Tuesday Today')
//     break
//   case 3:
//     console.log('It is Wednesday Today')
//     break
//   case 4:
//     console.log('It is Thursday Today')
//     break
//   case 5:
//     console.log('It is Friday Today')
//     break
//   case 6:
//     console.log('It is Saturday Today')
//     break
//   default:
//     console.log('Please Enter a Valid Day Number')
// }

// debugger

// switch(true) {
//     case userAge >= 0 && userAge <= 4:
//         console.log(`${username} is a kid.`)
//         break
//     case (userAge >= 5 && userAge <= 17):
//         console.log(`${username} is a school student.`)
//         break
//     case (userAge >= 18 && userAge <= 24):
//         console.log(`${username} is a college student.`)
//         break
//     case true:
//         console.log(`${username} is a working professional.`)
//         break
//     case (userAge > 45 && userAge < 121):
//         console.log(`${username} is retired.`)
//         break
//     default:
//         console.log('Please Enter a Valid Age');
// }

// if (userAge >= 0 && userAge <= 4) {
//     console.log(`${username} is a kid.`);
//     console.log('And he/she is playing.');
// } else if (userAge >= 5 && userAge <= 17) {
//     console.log(`${username} is a school student.`);
//     console.log('And he/she is learning science and maths.');
// } else if (userAge >= 18 && userAge <= 24) {
//     console.log(`${username} is a college student.`);
//     console.log('And he/she is learning computer science.');
// } else if (userAge >= 25 && userAge <= 45) {
//     console.log(`${username} is a working professional.`);
//     console.log('And he/she is a web developer.');
// } else if (userAge > 45 && userAge < 121) {
//     console.log(`${username} is retired.`);
//     console.log('And he/she reads newspaper.');
// } else if (userAge >= 121) {
//     console.log(`${username} is immortal.`);
//     console.log('And he/she reads newspaper.');
// } else {
//     console.log('Please Enter a Valid Age');
// }

const grade = 'A'

debugger
switch (grade.toLocaleLowerCase()) {
  case 'a':
    console.log('Your score is between 85% to 100%.')
    break
  case 1:
    console.log('Your score is between 75% to 85%')
    break
  case 'c':
    console.log('Your score is between 60% to 75%')
    break
  case false:
    console.log('Your score is between 50% to 60%')
    break
  case 'e':
    console.log('Your score is between 30% to 50%')
    break
  default:
    console.log('Sorry, you failed.')
}

console.log('Program Ended!')

// -----------------Ternary operator------------
const username = 5 > 2 ? 'Nikita' : 'Queen'
// const gender = 'F'
// const userMessage = `${gender.toLocaleLowerCase() === 'f' ? 'She' : 'He'} is a college student.`
// console.log(userMessage);
const result = null ? 'Nikita' : '' ? '12' : 0
console.log(result)

// -------------Decision Making---------------

const userAge = 0;
const usernameText = 0;
// const usernameText = prompt('Please Enter Your Name.');
// const userAge = parseInt(prompt('Please Enter Your Age.'));

// console.log(`Name: ${usernameText}`);
// console.log(`Age: ${userAge}`);

if (userAge >= 0 && userAge <= 4) {
  console.log(`${usernameText} is a kid.`);
  console.log('And he/she is playing.');
}

if (userAge >= 5 && userAge <= 17) {
  console.log(`${usernameText} is a school student.`);
  console.log('And he/she is learning science and maths.');
}

if (userAge >= 18 && userAge <= 24) {
  console.log(`${usernameText} is a college student.`);
  console.log('And he/she is learning computer science.');
}

if (userAge >= 25 && userAge <= 45) {
  console.log(`${usernameText} is a working professional.`);
  console.log('And he/she is a web developer.');
}

if (userAge > 45) {
  console.log(`${usernameText} is retired.`);
  console.log('And he/she reads newspaper.');
}

console.log('Program Ended!!');

// ------------Logical operator---------
// && (And)
// || (Or)
// ! (Not)

const userAgeNum = 22

const isSchoolStudent = (userAgeNum >= 5) && (userAgeNum <= 18)
const isCollegeStudent = (userAgeNum >= 18) && (userAgeNum <= 24)

const isStudent = isSchoolStudent || isCollegeStudent

const andResult = 0 && 2
console.log("andResult", andResult);
const orResult = 0 || 2
const andResult2 = '' && 'Hello'
const orResult2 = '' || 'Hello'

const andResult3 = 'Hello' && null
const orResult3 = 'Hello' || null

const andResult4 = 'Hello' && -4 + 4
const orResult4 = undefined || 4 + 8 * 5

const andResult5 = 'Hello' && console.log('hello1')
const orResult5 = undefined || console.log('hello2')

// -------------Truthy and falsy----------
// Falsy Values
//      0
//     -0
//     NaN
//     ''
//     undefined
//     null

//check below in console
// Boolean(0)
// Boolean('')



// -------------------------Math-------------------------
// Math.sqrt(x):
// Square root of a number.
// Example: Math.sqrt(2) => 1.4142135623730951

// Math.pow(x, y):
// Power of a number.
// Example: 2^4 = 16, Math.pow(2, 4) => 16

// Math.floor(x):
// Floor function (rounds down to the nearest integer).
// Example (Positive): Math.floor(2.4566) => 2
// Example (Negative): Math.floor(-2.4566) => -3

// Math.ceil(x):
// Ceil function (rounds up to the nearest integer).
// Example (Positive): Math.ceil(2.4566) => 3
// Example (Negative): Math.ceil(-2.4566) => -2

// Math.round(x):
// Round function (rounds to the nearest integer based on the decimal value).
// Example (Positive): Math.round(2.3) => 2
// Example (Negative): Math.round(-2.5) => -3

// Math.random():
// Generates a random number between 0 (inclusive) and 1 (exclusive).
// Math.floor(Math.random() * 20):
// Generates a random integer between 0 and 19 (inclusive).



// -----------------Object-------------------------------
// Non-primitive datatype(Reference Type)

// empty object
const obj = {}

const user = {
  name: "nikita",  //address-@6695
  age: "24"
}

const user1 = {
  name: "nikita",  //address-@8654
  age: "24"
}

console.log(user == user1);   //false //Its compare address

const checkaddress1 = "";  //@77
const checkaddress2 = "";  //@77

const obj1 = "";  //@7454
const obj2 = "";  //@3345

console.log(checkaddress1 == checkaddress2); //true
//vaiable compare value but object comapare address

const objData = {
  name: "nikita",  //address-@8654
  age: "24",
  ["Meri-mrji"]:"Google"
}

console.log(objData)
console.log(objData.name); //nikita
console.log(objData["name"]); //nikita
// name is behind the screen its string 
console.log(objData["na" + "me"]);

//update any value
objData.name="vaishali";
console.log(objData)
// { name: 'vaishali', age: '24', 'Meri-mrji': 'Google' } 

//delete any value
delete objData.age;
console.log(objData);
//{ name: 'vaishali', 'Meri-mrji': 'Google' }

//insert any value
objData.age="30";
console.log(objData);
// { name: 'vaishali', 'Meri-mrji': 'Google', age: '30' }  

//Nested object

const nestedObj={
  Name:"santosh",
  age:50,
  Address:{
    Mp:"Shalgaon",
    pincode:"415304"
  }
}
console.log(nestedObj.Address.pincode); //415304

// ----------------------------------------------
// const nestedObj={
//   Name:"santosh",        //Address:@3445
//   age:50,
//   Address:@8679
// }

// Every object take new memory

// {
//   Mp:"Shalgaon",               @8679
//   pincode:"415304"
// }
// ----------------------------------------------



// ----------------Object.freeze and seal------------

let variableEx="Nikita"  //@address=@34
variableEx="vashali" //@address=@378 -Changed

const ObjectOfInfo={
  MobileNumber:1234456667,  //@2345
  gender:"Male"
}
ObjectOfInfo.MobileNumber=4545566667; 
console.log(ObjectOfInfo) //but still obj address same

// ObjectOfInfo={} //error beacuse we can't change base


// constant object asun aapn tyala modify kru shkto
// so solution for restriction

Object.seal(ObjectOfInfo);
ObjectOfInfo.addVirus="virus";
console.log(ObjectOfInfo);
//{ MobileNumber: 4545566667, gender: 'Male' }
//we cant add another value
//we cant delete value
//but we change the value (problem)

ObjectOfInfo.MobileNumber=77777777777;
console.log(ObjectOfInfo);
// { MobileNumber: 77777777777, gender: 'Male' }

// solution
Object.freeze(ObjectOfInfo);

// in keyword
// Any key exist or not
 console.log('MobileNumber' in ObjectOfInfo);//true
 console.log('name' in ObjectOfInfo); //false




//  ------------------Array--------------------------
// Array is behind the seen object

//  pop()
//  push()
//  shift() 
//  unshift() 
//  concat() 
//  indexOf() 
//  includes() 
//  reverse() 
//  sort() 
//  slice() 
//  splice() 

const dummyArray=[1,2,3,4,2,1,7,8,9];

// dummyArray=[];  //error we cannot change base

console.log(typeof(dummyArray));//object
console.log(dummyArray);
//[1, 2, 3, 4, 2, 1, 7, 8, 9]

//access value
console.log(dummyArray[4]); //2
console.log(dummyArray[8]); //9

// update value
dummyArray[3]=99;
console.log(dummyArray);
// [1, 2, 3, 99, 2, 1, 7, 8, 9]

//we cant delete this type -problem
delete dummyArray[3];
console.log(dummyArray);//[ 1, 2, 3, <1 empty item>, 2, 1, 7, 8, 9 ]
//solution
dummyArray.splice(2,1)//splice(start: number, deleteCount?: number)

// insert value //override -problem
dummyArray[3]=44;
console.log(dummyArray);//[1, 2, 3, 44, 2, 1, 7, 8,9]
// dummyArray.splice(startIndex, deleteCount, newItem);
dummyArray.splice(2,0,100)


// we can create array in object also
const arr=[
  34,56,23,"nikita",{Info:"myKnowledge",age:20}
]
console.log(arr);
// [ 34, 56, 23, 'nikita', { Info: 'myKnowledge', age: 20 } ]

//add last value
arr.push("Hello")
arr.push("Hello",45)
console.log(arr);
// [ 34, 56, 23, 'nikita', { Info: 'myKnowledge', age: 20 },'Hello',45 ]

// last element remove
arr.pop();
arr.pop();
arr.pop();
arr.pop();
console.log(arr);//[ 34, 56, 23, 'nikita' ] 

//key value pair store in array (cheeting)😁
const MyPagalArray=[1]
MyPagalArray.firstName="Nikita";
console.log(MyPagalArray);//[ 1, firstName: 'Nikita' ]
console.log(MyPagalArray.length); //1(pakade gye🤣)


//---------------slice or splice difference------------------------
const copydummyarray=dummyArray.slice(3,4); 
console.log(dummyArray);
//not change original array
// [ 1, 2, <1 empty item>, 44, 1, 7, 8, 9 ]
console.log(copydummyarray)//[ 44 ]

dummyArray.splice(2,3);
//direct change original array
console.log(dummyArray);//[ 1, 2, 7, 8, 9 ]


//---------------Multi-Diamentional Array-----------
const multiDiamentionalArray=[
  ["Nikita","karande"],
  [20,45],
  ["santosh","karande"]
]

console.log(multiDiamentionalArray[0][0]);//Nikita
console.log(multiDiamentionalArray[0][1]);//karande
console.log(multiDiamentionalArray[1][0]);//20



//--------------Deep copy and sholow copy-------------

// -----------------problem----------------
let Mydream={
  name:'chiu'
}
//copy in another variable
let copyobj=Mydream;

copyobj.name='nikkkii'
console.log("copyobj",copyobj);
// copyobj { name: 'nikkkii' }   correct

console.log("Mydream",Mydream);
// Mydream { name: 'nikkkii' }  //problem
//changed original object



// ----------------solution-----------------
//shallow copy

let shollowobj=Object.assign({},Mydream); //soln 1
// let shollowobj={...Mydream};  //soln 2


shollowobj.name='nikkkii'
console.log("shollowobj",shollowobj);
// copyobj { name: 'nikkkii' }   correct

console.log("Mydream",Mydream);
// Mydream { name: 'chiu' }     //correct


// --------------shallow copy problem-----------
//its not work in nested object
const shollowProblem={
  name:"shallow",
  address:{
    village:"pune",
    code:2332
  }
}

let showProb={...shollowProblem};
showProb.address.village="Mumbai";//problem

console.log("shollowProblem",shollowProblem); //problem
// shollowProblem { name: 'shallow', address: { village: 'Mumbai', code: 2332 } }

console.log("showProb",showProb);
// showProb { name: 'shallow', address: { village: 'Mumbai', 
//   code: 2332 } }


// -------------Solution deep copy---------------
let deepobj=JSON.parse(JSON.stringify(shollowProblem))

deepobj.address.village="samee";

console.log("shollowProblem",shollowProblem); //correct
// shollowProblem { name: 'shallow', address: { village: 'Mumbai', code: 2332 } }
console.log("deepobj",deepobj);
// deepobj { name: 'shallow', address: { village: 'samee', code: 2332 } }

//deepcopy not supported to function and date
// solutions->
//1.copy one by one key in another Object(for loop)
// 2.use lodash npm
// lodash-> __.cloneDeep(deepobj)



// -----------------------combined assignment/compound operator-----------

// const username = 'Niks'

// let num = 5

// debugger
// num = num + 5
// num = num + 5
// num = num + 5
// num = num + 5

// num += 5
// num += 5
// num += 5
// num += 5

// num = num * 2
// num = num * 2
// num = num * 2

// num *= 2
// num *= 2
// num *= 2

// const newNum = ++num
// const newNum = --num

// const newNum = num++
// const newNum = num--

// num = num + 1
// num += 1