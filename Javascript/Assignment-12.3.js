// 3.Write a program which accept number from user and count frequency of 2 in it. 
// Input :  2395  
// Output :  1 
// Input : 1018 
// Output :  0 
// Input : 9000
//  Output :  0  

function print(digit) {
    let count=0;
    while(digit!=0){
        const n=digit%10;  // Extract last digit
        if(n==2){
            count++;
        }
        digit=Math.floor(digit/10); //remove last digit
    }
    console.log(count)
}

print(4395)
