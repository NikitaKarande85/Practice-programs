// 2.Write a program which accept number from user and check whether it contains 0 
// in it or not. 
// Input :  
// 2395  
// Output :  There is no Zero 
// Input : 
//  1018 
// Output :  It Contains Zero 
// Input : 
//  90
//  00 
// Output :  It Contains Zero 
// Input : 
//  10
//  687 
// Output :  It Contains Zero 

function print(digit) {
    let zero=false;
    while(digit!=0){
        const n=digit%10;  // Extract last digit
        if(n==0){
            console.log("It Contains Zero")
            zero=true;
            break;
        }
        digit=Math.floor(digit/10); //remove last digit
    }
    if(!zero){
        console.log("There is no Zero")
    }
}

print(2325)
