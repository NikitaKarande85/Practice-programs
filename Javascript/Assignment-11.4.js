// .Write a program which accept range from user and return addition of all even 
// numbers in between that range. (Range should contains positive numbers only) 
// Input :  23 30  
// Output :  108   
// Input : 10 18 
// Output :  70 
// Input : -10 2 
// Output :  Invalid range 
// Input : 90 18 
// Output :  Invalid range  

function print(start,end) {
    let result=0;
    if(start>end){
        console.log("Invalid")
    }
    for(let i=start;i<=end;i++){
        if(i%2==0)
        result=result+i;
    }
    console.log(result)
}

print(23,30)
