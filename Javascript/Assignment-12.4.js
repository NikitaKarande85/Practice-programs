//4.Write a program which accept number from user and count frequency of 4 in it. 
// Input :  
// 2395  
// Output :  0 
// Input : 
//  10
//  18 
// Output :  0 
// Input : 
//  94
//  Output :  2 
// Input : 
// 40 
//  92
//  2432 
// Output :  1  

function print(digit) {
    let count=0;
    while(digit!=0){
        const n=digit%10;  // Extract last digit
        if(n==4){
            count++;
        }
        digit=Math.floor(digit/10); //remove last digit
    }
    console.log(count)
}

print(4395)
