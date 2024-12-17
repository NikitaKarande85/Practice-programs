// 5.Write a program which accept number from user and return difference between 
// summation of even digits and summation of odd digits. 
// Input :  2395  
// Output :  -15 (2 - 17) 
// Input :  1018 
// Output :  6 (8 - 2) 
// Input :  8440 
// Output :  16  (16 - 0) 
// Input :  5733 
// Output :  -18 (0 - 18) 

function print(digit) {
    let even = 0;
    let odd = 0;
    while (digit != 0) {
        const n = digit % 10;  // Extract last digit
        if (n % 2 == 0) {
            even = even + n;
        }
        if (n % 2 != 0) {
            odd = odd + n;
        }
        digit = Math.floor(digit / 10); //remove last digit
    }
    console.log(even-odd)
}

print(8440)
