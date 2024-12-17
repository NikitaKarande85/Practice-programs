// 5.Write a program which accept number from user and count frequency of such a 
// digits which are less than 6. 
// Input :  
// 2395  
// Output :  3 
// Input : 
//  10
//  18 
// Output :  3 
// Input : 
//  94
//  Output :  3 
// Input : 
// 40 
//  96
//  672 
// Output :  1  

function print(digit) {
    let count = 0;
    while (digit != 0) {
        const n = digit % 10;  // Extract last digit
        if (n<=6) {
            count++;
        }
        digit = Math.floor(digit / 10); //remove last digit
    }
    console.log(count)
}

print(2395)
