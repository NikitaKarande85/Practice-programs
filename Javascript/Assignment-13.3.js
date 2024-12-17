// 3.Write a program which accept number from user and return the count of digits in 
// between 3 and 7. 
// Input :  
// 2395  
// Output :  1 
// Input : 
//  10
//  18 
// Output :  0 
// Input : 
//  45
//  21 
// Output :  2 

function print(digit) {
    let count = 0;
    while (digit != 0) {
        const n = digit % 10;  // Extract last digit
        if (n>3 && n<7) {
            count++;
        }
        digit = Math.floor(digit / 10); //remove last digit
    }
    console.log(count)
}

print(4521)
