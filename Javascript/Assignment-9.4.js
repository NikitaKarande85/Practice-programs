// 5. Write a program which returns difference between Even factorial and odd factorial 
// of given number.  
// Input :   5  
// Output :  -7   
// Input :  -5  
// Output :  -7   

function print(no) {
    let fact=1;
    let nonfact=1;
    for(let i=1;i<=no;i++){
        if(i%2==0){
            fact=fact*i;
        }
        if(i%2!=0){
            nonfact=nonfact*i;
        }
    }
    console.log("result",fact-nonfact);
}

print(5)
