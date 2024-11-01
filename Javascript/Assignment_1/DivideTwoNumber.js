//1.Program to divide two numbers 

function DivideTwoNumber(num1,num2){
    if(num1<num2){
        return -1;
    }
    return num1/num2;
}

const result= DivideTwoNumber(10,2);
console.log("result",result);