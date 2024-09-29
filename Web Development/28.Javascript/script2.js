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
        // debugger;
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

// method is also function but when we using in object that function that is called method.

//method example
const obj={
    a:1000,
    b:2000,
    Add:function(){     //methods(this function call in object)
        return this.a+this.b;
    },
    Sub:function(){
        console.log("I am method")
        return this.a-this.b;
    },
    multiplication(){
        console.log("I am method")
        return this.a-this.b;
    }
}

console.log(obj.Add());  //3000

// function example
function Addition(){
    return "I am function";
}


// -------------------------Arrow function------------------------------

const Arrowfun=()=>{
    return "arraow function"    //Explicitly return
}

const sum=(sum)=>sum*sum;      //Implicitly return
// const sum2=sum=>sum*sum;
// const randomNum=()=>(Math.floor(Math.random()*10)+1);
//print 1 to 10 random number

//anonymus and arrow function
// setTimeout(()=>{

// },1000)


// -----------------------for of vs for in javascript---------------------------

// for of  - using for array iterate
// for in  - using for object iterate

//for of
const numbers=[1,3,4,5,6,7];
for(const num of numbers){
    console.log("num",num);  //1,3,4,5,6,7  //num holding directly value not index
}

//for in
const objForIn={
    name:"nikita",
    rollNo:11,
    company:"Google"
}

for(const key in objForIn){
    console.log(`${key} :`,objForIn[key]);
}

console.log(Object.keys(objForIn));  //its convert in array so we can use for of
console.log(Object.values(objForIn));
console.log(Object.entries(objForIn));


// --------------------forEach---------------------------------------

// forEach does not return any value
const fruits=["rose","lotus","jai"];

const arr=fruits.forEach((fruit)=>{
    console.log("fruit",fruit);
    return fruit;
})

console.log("fruit",arr); //undefined


// ---------------------------map,filter,reduce---------------------------------

//map
const myArray=["Nikita","Santosh","Vaishali","Omkar"];

const mapArray=myArray.map((item,index,array)=>{
    console.log("map array",item);
    console.log("map index",index);
    console.log("map array",array);
    return item;
})

console.log("--mapArray--",mapArray);  //return array
// [
//     "Nikita",
//     "Santosh",
//     "Vaishali",
//     "Omkar"
// ]


//filter
const filterArray=myArray.filter((item,index,array)=>{
    return item.includes("Nik");
})

console.log("--filterArray--",filterArray); 
// [
//     "Nikita"
// ]



//reduce
const myNumbers=[2,3,4]
const reduceArray=myNumbers.reduce((accumlator,item,index,array)=>{
    console.log(accumlator); //0,2,3,4
    return accumlator+item;
},0);

//accumlator is stored 1 value of array(2) otherwise store our (0) variable
console.log("--reduceArray--",reduceArray); 


// --------------------------some and every--------------------------------

const generalArray=[3,4,5,6,7]

//some= If any one condition got true then its return true.
const someArray=generalArray.some((item,index,array)=>{
    return item==5;  //its loop break when he got 5 number
})
console.log("someArray",someArray);  //true



//every= If all items are matched with condition then its return true otherwise false.
const everyArray=generalArray.every((item,index,array)=>{
    return item==5;  //its loop 1st time
})
console.log("everyArray",everyArray); //false




// -----------------------Argument keyword-----------------------------------


Add(2,3,4);
function Add(){  //without pass argument we can access inside of the function
    console.log("Argument",arguments)  //[2,3,4]
}

// --------------------------------------------------------------------------