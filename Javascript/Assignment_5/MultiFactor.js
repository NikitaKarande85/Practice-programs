// 1.Write a program which accept number from user and display its multiplication of 
// factors.

function MultiOfFactor(num){
    let mul=1;
    for(let i=1;i<=num/2;i++){
        if(num%i==0){
            mul=mul*i;
        }
    }
    console.log(mul)
}
MultiOfFactor(10)