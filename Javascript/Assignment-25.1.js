// 1. Accept Character from user and check whether it is alphabet or not 
// (A-Z a-z). 
// Input :  F 
// Output :  TRUE 
// Input :  & 
// Output :  FALSE 

function print(str) {
    if(str>='A' && str<='B'){
        return "TRUE"
    }else{
        return "FALSE"
    }
}

let a="A";
const result = print(a);
console.log("result", result);

