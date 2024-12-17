// 1.Write a program which accept number from user and display its digits in reverse 
// order. 
// Input :  2395  
// Output :  
//   5 
//   9
//   3
//   2
// Input : 1018 
// Output :  
//   8 
//   1
//   0
//   1
//  Input : -1018 
// Output :  
//   8 
//   1
//   0
//   1
//  Input : 9000 
// Output :  
//   0 
//   0
//   0
//   9 

function print(digit) {
    while(digit!=0){
        const n=digit%10;  // Extract last digit
        console.log(n);
        digit=Math.floor(digit/10); //remove last digit
    }
}

print(2395)
