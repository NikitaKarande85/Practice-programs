// ----------------------------ES6---------------------------------------------

// -------------------Default parameter--------------------------------------

Add(5) //7
function Add(a, b = 2) { //default parameter
    return a + b;
}

Add(5, 5) //10
function Add(a, b = 2) { //default parameter
    return a + b;
}

// ------------------------(...spread operator)-------------------------------------

const spreadArr1 = [1, 2, 4, 5, 6]
const spreadArr2 = [7, 8, 9, 10]

//If we need to join two array we can use spread oprator.we can do concat also.
const joinedArr1 = spreadArr1.concat(spreadArr2); //1 way
console.log("joinedArr1", joinedArr1);//[1, 2, 4, 5, 6, 7, 8, 9, 10]


//for array
const myString = "chiu"
const joinedArr2 = [...spreadArr1, ...spreadArr2, "nikita", ...myString];
console.log("joinedArr2", joinedArr2);//[1, 2, 4, 5, 6, 7, 8, 9, 10, 'nikita', 'c', 'h', 'i', 'u']


// for object
const forSpreadObj1 = {
    name: "Nikita",
    company: "Google"
}

const updatedUser = { ...forSpreadObj1, age: 20 }
//{name: 'Nikita', company: 'Google', age: 20}
console.log("updatedUser", updatedUser);


// --------------------------rest parameter--------------------------------

// spread operator - work on spreading
// rest operator- work on combine

function Add(...arr) {  //rest parameter accepted
    console.log("arr", arr);  //[1, 2, 3, 4, 5, 6]
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

const result = Add(1, 2, 3, 4, 5, 6); //we passing seperate values but add function convert our values in array.
console.log("result", result);

// ..................1....................
const numbers = [1, 2, 3, 4]
function Addition1(num) {
    console.log("num", num)//1
}
Addition1(...numbers)//spred operator

// ...................2.....................

function Addition2(...num) { //rest parameter
    console.log("num", num)//[1, 2, 3, 4]
}
Addition2(...numbers)//spred operator

// ...................3......................

// function Addition3(...arr,a,b){  //rest parameter position is last //error  
// function Addition3(a,...arr,b){  //rest parameter position is last //error 
function Addition3(a, b, ...arr) {

    console.log("a,b", a, b);  //1 2
    console.log("arr", arr);  //[3, 4, 5]
}
Addition3(1, 2, 3, 4, 5)


// -----------------------Destructuring in javascript---------

// with array ..........

const destructArray = ["red", "green", "blue", "voilet"];

console.log(destructArray[0]);
console.log(destructArray[1]);
console.log(destructArray[2]);

const [color1, color2, color3] = destructArray;  //destruct array
const [, , , thirdColor] = destructArray;
const { 0: a, 1: b, 2: c } = destructArray;  //direct accessing perticular element

console.log("thirdColor", thirdColor);//voilet
console.log("c", c); //blue

console.log("color1", color1)  //red
console.log("color2", color2)  //green
console.log("color3", color3)  //blue


//with object...............

const destructingObj = {
    name: "niks",
    aim: "join google company",
    target: {
        react: "see bootcamp",
        datastructure: "solve 400 questions"
    }
}

const { name, aim, target } = destructingObj; //destructering
const { target: { react } } = destructingObj;


console.log("name", name)  //niks
console.log("aim", aim)  //join google company
console.log("target", target)  //{react: 'see bootcamp', datastructure: 'solve 400 questions'}

console.log("react", react)  //react see bootcamp


function AcceptdestructeringObj({name,aim}){ //destructing (same as array only in [])
    console.log("name,aim:- ",name,aim); //niks join google company
}
AcceptdestructeringObj(destructingObj)



// -----------------------------BOM(Browser object model)------------


// window-ek asa object jyachi help gheun aapn browser shi interact kru shkto

// location    
// history   (chrome back forword history)
// innerHeight   (chrome height)
// innerWidth    (chrome width)
// open()        (chrome in open new tab)
// close()       (chrome tab close)
// resizeBy()    (chrome tab resize)
// resizeTo()
// moveTo()
// moveBy()
// scrollBy()
// scroll()
// scrollTo()   (chrome tab scroll - scroll(0,50)-its scroll smothly this distance)
// print()      (chome page print with printer)
// document
// localstorage


// -------------------------DOM--------------------------------------------

// window->document (document is only viewport and window is whole browser)
// DOM- document object model
// document  //enter this only on browser console(All html is here)
// html parser(engin) set our all html in DOM
//we can dom manipulation also(modify the elements)

//Enter below commands in browser console
// -window
// -window.document
// -document
// -document.body
// -document.body.children[0]
// -document.body.children[0].innerHTML
//  output- 'Javascript concepts'