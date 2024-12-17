// 4.Write a program which accept number from user and return multiplication of all 
// digits. 
//  1018 
// Output :  8 
// Input : 
//  9440 
// Output :  144 
// Input : 
//  92
//  2432 
// Output :  864 

function print(digit) {
    let result = 1;
    while (digit != 0) {
        const n = digit % 10;  // Extract last digit
        if(n!=0)
        {
            result=result*n;
        }
        digit = Math.floor(digit / 10); //remove last digit
    }
    console.log(result)
}

print(9440)
