// 2. Write a program which accept number from user and print even factors of that 
// number.  
// Input : 24 
// Output:  2 4 6 8 12 
 
function EvenFactors(num){
    for(let i=0;i<num/2;i++){
        if(num%i==0){  //factor
            if(i%2==0){  //even
                console.log("factors",i);
            }
        }
    }
}

EvenFactors(36);