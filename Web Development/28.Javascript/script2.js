// -------------------------while loop--------------------------------------------

// let hundred=100;

// while(hundred>0){
    // console.log("while loop",hundred);
    // hundred--;
// }

//---------------------------for loop-------------------------------------------

// for(let i=1;i<=hundred;i++){
//     console.log("for loop",i);
// }

// --------------------------do while loop----------------------------------------

// let i=1;
// do{
//     console.log("i",i)
//     i++;
// }while(i<100)


// ---------------------------Function----------------------------------------------

//see all function images for clarification
// hello()

// function hello(){
//     debugger;
//     let a=0;
//     let b=2;
// }

// -----------functio in function----

// bolo()
// function bolo(){
//     debugger;
//     let x=0;
//     let y=2;
//     nai()
// }
function nai(){
    debugger;
    let p=8;
    let q=9;
}
// console.log(typeof(nai))   function

// --------------------Hoisting----------------------------------------

// Hoisting is JavaScript's default behavior of moving declarations to the top.(geeksforgeeks)
//but above statement is wrong.

// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.
//appears-दिसते,vatane (move hoty as vattay)
//beacuse memory create hote function variable chi tyamule te easyly call kru shakte.

// 1.var
//not any error
console.log("hoistvariable",hoistvariable) //undefined   //hoist variable
var hoistvariable=100;  //store variable in script in devtools

// 2.const(same as let)
// console.log("variableconst",variableconst) //script2.js:60 Uncaught ReferenceError: Cannot access 'variableconst' before initialization
const variableconst=200;
//The Temporal Dead Zone (TDZ) is a concept in JavaScript that relates to the hoisting of the variables and the visibility of variables declared with let and const


// declaration()  //its working correctly
//function defination
//function declaration
function declaration(){
    console.log("This is function declaration");
}

// variableExpression();  //Uncaught TypeError: variableExpression is not a function
//beacuse variableExpression is stored undefined in global
//function defination
// function expression
var variableExpression=function(){           //anonymous function
    console.log("This is function expression");
}


// -----------------------local and global scope--------------------------------

// debugger; 
//script means global
let scriptletVariable=300;  //local   //script
const scriptConstVariable=900;  //local  //script
var globalWindowVariable=200;   //global //Global //window

// 'use strict' //then below variable gives error
binaDataTypeKaVariable=100;  //100 //global //window //but its wrong to declaration

console.log("window.globalWindowVariable",window.globalWindowVariable)
console.log("binaDataTypeKaVariable",binaDataTypeKaVariable)



// ----------------------------------laxical scope and block scop-----------------

parent();
function parent(){
    console.log("Every curly brakets are block scopes")
    const a=200;
    function child(){
        var b=9000;
        function smallchild(){
            console.log("I am inner child but i am accessing all my parent variables.so this concept is laxical scope");
            console.log(a,b);
        }
        smallchild()
    }
    child()
}

// --------------------High order function and callbacks in javascript--------

//High order function
function AcceptFun(getFun){
    getFun();
}

function passFun(){
    console.log("call back")
}

//callback function
AcceptFun(passFun)


// ----------------------------setTimeout and setInterval----------------------------

//setTimeout only call once
const storeReturnValue=setTimeout("console.log(true)",1000)  //true
console.log("storeReturnValue",storeReturnValue);  //any number printed //1,2,etc

clearTimeout(storeReturnValue);  //not called 138 line

//high orderd function 
const timer=setTimeout(otherFun,1000);
function otherFun(){
    console.log("Hiieee")
}
clearTimeout(timer);//then not call function


//setIntervel calls multiple time other same as setTimeout
const storeReturnData=setInterval("console.log(true)",1000) //Its calling every 1000 sec
clearInterval(storeReturnData)//now it stop calling

console.log("heeeeeeeeellllllllllllloooooooooo"); //before setTimeOut line executed beacuse its not going directly in call stack..its going first Web Apis->callBack Queue->call stack


//we can pass as argument also but its deprecate (no use recommended)
const timer1=setTimeout(Fun,1000,'nikita',100,[1,2,3]);

function Fun(){
    console.log(arguments);
    //Object retuen
    // {
    //     "0": "nikita",
    //     "1": 100,
    //     "2": [
    //         1,
    //         2,
    //         3
    //     ]
    // }
}


// ---------------------------Closure with function-----------------------

function outer(){
    let a=200;
    let b=100
    function inner(){
        debugger;
        return a+b;
    }
    return inner()
}

const store=outer();
console.log("store",store) //300
//call stack of block is finished but variable is still avaiable in closure
// Closure (outer)
// a: 200
// b: 100


// --------------------------method and function diff---------------------
