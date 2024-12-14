// 1.Program to divide two numbers 

function Divide(No1,No2){
    if(No2>No1){
        return -1;
    }
    return No1/No2;
}

const ans=Divide(15,5)
console.log(ans)