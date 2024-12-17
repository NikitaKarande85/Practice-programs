// 2.Write a program which accept number from user and return the count of odd 
// digits. 
// Input :  
// 2395  
// Output :  3 
// Input : 
//  10
//  18 
// Output :  2 
// Input : 
//  -
//  1018 
// Output :  2 
// Input : 
//  8462
//  Output :  0 

function print(digit) {
    let count = 0;
    while (digit != 0) {
        const n = digit % 10;  // Extract last digit
        if (n%2!=0) {
            count++;
        }
        digit = Math.floor(digit / 10); //remove last digit
    }
    console.log(count)
}

print(2395)
