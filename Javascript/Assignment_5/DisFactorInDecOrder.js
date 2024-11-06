// 2.Write a program which accept number from user and display its factors in 
// decreasing order. 

function MultiOfFactor(num){
    for(let i=num/2;i>0;i--){
        if(num%i==0){
            console.log(i)
        }
    }
   
}
MultiOfFactor(12)